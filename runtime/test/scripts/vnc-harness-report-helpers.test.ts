import { afterEach, expect, test } from "bun:test";

import { cleanupVncHarnessReport, probeHarnessHealth } from "../../scripts/playwright/vnc-harness-report-helpers.ts";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("probeHarnessHealth returns true for healthy responses and suppresses fetch failures", async () => {
  globalThis.fetch = async () => new Response(null, { status: 200 });
  await expect(probeHarnessHealth("http://127.0.0.1:8791")).resolves.toBe(true);

  globalThis.fetch = async () => {
    throw new Error("offline");
  };
  await expect(probeHarnessHealth("http://127.0.0.1:8791")).resolves.toBe(false);
});

test("cleanupVncHarnessReport suppresses teardown failures", async () => {
  const calls: string[] = [];
  await expect(cleanupVncHarnessReport({
    browser: {
      close: async () => {
        calls.push("close");
        throw new Error("browser already closed");
      },
    },
    harnessProc: {
      kill: () => {
        calls.push("kill");
        throw new Error("gone");
      },
      exited: Promise.reject(new Error("killed hard")),
    },
  })).resolves.toBeUndefined();
  expect(calls).toEqual(["close", "kill"]);
});
