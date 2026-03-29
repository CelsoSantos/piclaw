import { describe, expect, test } from "bun:test";
import {
  findUnexpectedUnusedExports,
  normalizeUnusedExportEntry,
  parseUnusedExports,
} from "../../scripts/check-unused-exports.ts";

describe("check-unused-exports", () => {
  test("parseUnusedExports filters used-in-module noise", () => {
    const output = [
      "src/a.ts:10 - one",
      "src/b.ts:20 - two (used in module)",
      "",
      "src/c.ts:30 - three",
    ].join("\n");

    expect(parseUnusedExports(output)).toEqual(["src/a.ts:10 - one", "src/c.ts:30 - three"]);
  });

  test("normalizeUnusedExportEntry strips line numbers for stable comparisons", () => {
    expect(normalizeUnusedExportEntry("src/db.ts:88 - hasAgentRepliesAfter")).toBe(
      "src/db.ts - hasAgentRepliesAfter"
    );
  });

  test("findUnexpectedUnusedExports returns only non-allowlisted entries", () => {
    const entries = [
      "src/db.ts:31 - getMediaIdsForMessage",
      "src/db.ts:88 - hasAgentRepliesAfter",
      "src/something.ts:1 - badExport",
    ];

    expect(findUnexpectedUnusedExports(entries)).toEqual(["src/something.ts:1 - badExport"]);
  });
});
