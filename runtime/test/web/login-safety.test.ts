import { expect, test } from "bun:test";

import {
  probePasskeyCapabilityBestEffort,
  readJsonBodyBestEffort,
  runPasskeyAttemptBestEffort,
} from "../../web/src/login-safety.js";

test("login safety helpers tolerate passkey and json fallback failures", async () => {
  await expect(runPasskeyAttemptBestEffort(async () => true)).resolves.toBe(true);
  await expect(runPasskeyAttemptBestEffort(async () => { throw new Error("blocked"); })).resolves.toBe(false);
  await expect(probePasskeyCapabilityBestEffort(async () => true)).resolves.toBe(true);
  await expect(probePasskeyCapabilityBestEffort(async () => { throw new Error("blocked"); })).resolves.toBe(false);
  await expect(readJsonBodyBestEffort({ json: async () => ({ ok: true }) }, { ok: false })).resolves.toEqual({ ok: true });
  await expect(readJsonBodyBestEffort({ json: async () => { throw new Error("blocked"); } }, { ok: false })).resolves.toEqual({ ok: false });
});
