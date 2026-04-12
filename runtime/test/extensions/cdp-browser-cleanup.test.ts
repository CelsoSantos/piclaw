import { expect, test } from "bun:test";

import { closeWebSocketQuietly, runCdpCleanup } from "../../extensions/browser/cdp-browser/cdp-cleanup.ts";

test("closeWebSocketQuietly ignores stale websocket close failures", () => {
  expect(() => closeWebSocketQuietly({ close: () => { throw new Error("stale socket"); } })).not.toThrow();
  expect(() => closeWebSocketQuietly({ close: () => {} })).not.toThrow();
  expect(() => closeWebSocketQuietly(null)).not.toThrow();
});

test("runCdpCleanup suppresses best-effort cleanup failures", async () => {
  const calls: string[] = [];

  await expect(runCdpCleanup(async () => {
    calls.push("attempted");
    throw new Error("cleanup failed");
  }, { targetId: "page-1" })).resolves.toBeUndefined();

  expect(calls).toEqual(["attempted"]);
});
