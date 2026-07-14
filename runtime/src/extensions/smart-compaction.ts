/**
 * Public smart-compaction facade.
 *
 * The implementation is intentionally decomposed under ./smart-compaction/:
 * - orchestrator.ts: one lifecycle state machine
 * - boundary-policy.ts: retained-window and target-context invariants
 * - retained-context.ts: surviving-context rendering
 * - noop.ts: deterministic no-LLM classification
 * - progressive-policy.ts: pure chunk/budget/prompt policy
 * - progressive.ts: progressive execution
 * - model-execution.ts: shared single-pass execution and lossless repair retry
 * - selective-method.ts: Selective policy adapter
 * - source.ts / pipeline-events.ts / pipeline-policy.ts: auditable source projection
 * - traditional-pipelined.ts: Traditional pipelined prompt planning
 * - model-request.ts: one model/auth resolution seam
 * - compat.ts: legacy public helpers, isolated from execution
 * - status.ts: lifecycle status and cancellation recording
 * - safety.ts: model/output budget calculations
 * - summary-validation.ts: terminal output contract
 * - stream-complete.ts: provider call adapter
 */
export { createSmartCompactionExtension } from "./smart-compaction/orchestrator.js";
export type { CompactionStreamFn } from "./smart-compaction/stream-complete.js";

export { buildTargetContextCompactionInstructions } from "./smart-compaction/boundary-policy.js";
export { buildTrimmedCompactionRetryPrompt } from "./smart-compaction/compat.js";
export {
  buildProgressiveCompactionChunks,
  buildProgressiveCompactionChunksFromSourceUnits,
  getProgressiveCompactionBudget,
} from "./smart-compaction/progressive.js";
export { prepareCompactionSource } from "./smart-compaction/source.js";
export type {
  CompactionSourceEvent,
  CompactionSourceUnit,
  PreparedCompactionSource,
} from "./smart-compaction/source.js";
export { assemblePipelineEvents } from "./smart-compaction/pipeline-events.js";
export { buildTraditionalPipelinePlan, isAllowlistedPipelineDropReason } from "./smart-compaction/pipeline-policy.js";
export { buildTraditionalPipelinedPrompt } from "./smart-compaction/traditional-pipelined.js";
export {
  formatProgressCount,
  formatProgressRange,
} from "./smart-compaction/context.js";
export {
  clampKeepRecentTokens,
  estimatePostCompactionFit,
  getCompactionOutputTokenTarget,
  getCompactionReasoningEffort,
  getCompactionRetryPromptTokenTarget,
  getSafeCompactionMaxTokens,
} from "./smart-compaction/safety.js";
