/** Categorical Traditional-pipelined retention policy and coverage ledger. */
import { extractText, type ToolOutcomeAnalysis } from "./messages.js";
import type { PipelineEventGroup } from "./pipeline-events.js";
import type { CompactionSourceUnit, PreparedCompactionSource } from "./source.js";

export type PipelineDisposition = "required" | "canonical" | "summarize" | "drop_safe";

export type PipelineReasonCode =
  | "human_intent"
  | "unresolved_tool_state"
  | "observed_tool_batch"
  | "assistant_narrative"
  | "synthetic_continuity"
  | "orphan_tool_result"
  | "context"
  | "empty_content"
  | "context_prune_summary_reference";

const ALLOWLISTED_DROP_REASONS = new Set<PipelineReasonCode>([
  "empty_content",
]);

export interface PipelineAuditRecord {
  groupId: string;
  sourceIndexes: number[];
  sourceEntryIds: string[];
  disposition: PipelineDisposition;
  reason: PipelineReasonCode;
  representationIds: string[];
}

export interface TraditionalPipelinePlan {
  records: PipelineAuditRecord[];
  units: CompactionSourceUnit[];
  dispositionCounts: Record<PipelineDisposition, number>;
  coverageComplete: true;
}

function groupHasRawContent(group: PipelineEventGroup): boolean {
  return group.sourceEvents.some((event) => {
    if (extractText(event.rawMessage.content).trim()) return true;
    if (Array.isArray(event.rawMessage.content) && event.rawMessage.content.length > 0) return true;
    return event.rawMessage.content != null && String(event.rawMessage.content).trim().length > 0;
  });
}

function classifyGroup(
  group: PipelineEventGroup,
  toolAnalysis: ToolOutcomeAnalysis,
): { disposition: PipelineDisposition; reason: PipelineReasonCode } {
  if (
    group.sourceEvents.every((event) => event.contextPruned)
    && group.sourceEvents.every((event) => event.rawMessage.role === "toolResult")
  ) {
    // Keep an explicit provenance-bearing reference instead of silently
    // dropping the raw event. context_prune owns the compact outcome text, but
    // Traditional pipelined still accounts for the discarded source entry.
    return { disposition: "canonical", reason: "context_prune_summary_reference" };
  }
  if (!group.rendered.trim() && !groupHasRawContent(group)) {
    return { disposition: "drop_safe", reason: "empty_content" };
  }
  if (group.kind === "human_turn") return { disposition: "required", reason: "human_intent" };
  if (group.kind === "orphan_tool_result") return { disposition: "required", reason: "orphan_tool_result" };
  if (group.kind === "tool_batch") {
    const llmIndexSet = new Set(group.llmMessageIndexes);
    const facts = toolAnalysis.facts.filter((fact) => llmIndexSet.has(fact.assistantIndex));
    if (facts.some((fact) => fact.isError || fact.noChange || fact.missing)) {
      return { disposition: "required", reason: "unresolved_tool_state" };
    }
    return { disposition: "canonical", reason: "observed_tool_batch" };
  }
  if (group.kind === "synthetic_context") return { disposition: "canonical", reason: "synthetic_continuity" };
  if (group.kind === "assistant_narrative") return { disposition: "summarize", reason: "assistant_narrative" };
  return { disposition: "summarize", reason: "context" };
}

function sameOrderedValues<T>(left: T[], right: T[]): boolean {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function validatePipelineCoverage(
  source: PreparedCompactionSource,
  records: PipelineAuditRecord[],
  units: CompactionSourceUnit[],
): void {
  const sourceIndexSet = new Set(source.sourceEvents.map((event) => event.sourceIndex));
  const classifications = new Map<number, number>();
  const referencedRepresentationIds = new Set<string>();
  const unitById = new Map<string, CompactionSourceUnit>();
  for (const unit of units) {
    if (unitById.has(unit.id)) {
      throw new Error(`Traditional pipelined coverage invariant failed: duplicate representation ID ${unit.id}`);
    }
    unitById.set(unit.id, unit);
  }

  for (const record of records) {
    if (record.disposition === "drop_safe" && !ALLOWLISTED_DROP_REASONS.has(record.reason)) {
      throw new Error(`Traditional pipelined coverage invariant failed: ${record.groupId} used non-allowlisted drop reason ${record.reason}`);
    }
    if (record.disposition === "drop_safe" && record.representationIds.length > 0) {
      throw new Error(`Traditional pipelined coverage invariant failed: dropped ${record.groupId} unexpectedly references a representation`);
    }
    if (record.disposition !== "drop_safe" && record.representationIds.length === 0) {
      throw new Error(`Traditional pipelined coverage invariant failed: ${record.groupId} has no representation ID`);
    }
    for (const sourceIndex of record.sourceIndexes) {
      if (!sourceIndexSet.has(sourceIndex)) {
        throw new Error(`Traditional pipelined coverage invariant failed: ${record.groupId} references unknown source event ${sourceIndex}`);
      }
      classifications.set(sourceIndex, (classifications.get(sourceIndex) ?? 0) + 1);
    }
    for (const representationId of record.representationIds) {
      const unit = unitById.get(representationId);
      if (!unit) {
        throw new Error(`Traditional pipelined coverage invariant failed: ${record.groupId} references missing representation ${representationId}`);
      }
      if (referencedRepresentationIds.has(representationId)) {
        throw new Error(`Traditional pipelined coverage invariant failed: representation ${representationId} is referenced more than once`);
      }
      referencedRepresentationIds.add(representationId);
      if (unit.groupId !== record.groupId) {
        throw new Error(`Traditional pipelined coverage invariant failed: representation ${representationId} belongs to ${unit.groupId}, not ${record.groupId}`);
      }
      if (!sameOrderedValues(unit.sourceIndexes, record.sourceIndexes)) {
        throw new Error(`Traditional pipelined coverage invariant failed: representation ${representationId} has mismatched source provenance`);
      }
      if (!sameOrderedValues(unit.sourceEntryIds, record.sourceEntryIds)) {
        throw new Error(`Traditional pipelined coverage invariant failed: representation ${representationId} has mismatched entry provenance`);
      }
      if (!unit.renderedText.trim()) {
        throw new Error(`Traditional pipelined coverage invariant failed: representation ${representationId} is empty`);
      }
    }
  }
  for (const sourceEvent of source.sourceEvents) {
    const count = classifications.get(sourceEvent.sourceIndex) ?? 0;
    if (count !== 1) {
      throw new Error(`Traditional pipelined coverage invariant failed: source event ${sourceEvent.sourceIndex} classified ${count} times`);
    }
  }
  for (const unit of units) {
    if (!referencedRepresentationIds.has(unit.id)) {
      throw new Error(`Traditional pipelined coverage invariant failed: unreferenced representation ${unit.id}`);
    }
  }
}

export function buildTraditionalPipelinePlan(
  source: PreparedCompactionSource,
  groups: PipelineEventGroup[],
  toolAnalysis: ToolOutcomeAnalysis,
): TraditionalPipelinePlan {
  const records: PipelineAuditRecord[] = [];
  const units: CompactionSourceUnit[] = [];
  const dispositionCounts: Record<PipelineDisposition, number> = {
    required: 0,
    canonical: 0,
    summarize: 0,
    drop_safe: 0,
  };

  for (const group of groups) {
    const classification = classifyGroup(group, toolAnalysis);
    dispositionCounts[classification.disposition] += 1;
    const representationId = `representation-${group.id}`;
    if (classification.disposition !== "drop_safe") {
      const provenance = group.sourceIndexes.join(",");
      units.push({
        id: representationId,
        groupId: group.id,
        // Entry IDs remain machine-only provenance for exact boundary recovery;
        // avoid turning opaque session identifiers into semantic model input.
        renderedText: `### ${group.id} [${classification.disposition}; source=${provenance}]\n${group.rendered}`,
        sourceIndexes: [...group.sourceIndexes],
        sourceEntryIds: [...group.sourceEntryIds],
        segmentIndex: 1,
        segmentCount: 1,
      });
    }
    records.push({
      groupId: group.id,
      sourceIndexes: [...group.sourceIndexes],
      sourceEntryIds: [...group.sourceEntryIds],
      disposition: classification.disposition,
      reason: classification.reason,
      representationIds: classification.disposition === "drop_safe" ? [] : [representationId],
    });
  }

  validatePipelineCoverage(source, records, units);
  return { records, units, dispositionCounts, coverageComplete: true };
}

export function isAllowlistedPipelineDropReason(reason: PipelineReasonCode): boolean {
  return ALLOWLISTED_DROP_REASONS.has(reason);
}
