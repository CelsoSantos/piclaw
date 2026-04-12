import { afterEach, expect, test } from "bun:test";

import { probeHttpOk, stopQuietly } from "./helpers.js";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("probeHttpOk returns true for ok responses and false for fetch failures", async () => {
  globalThis.fetch = async () => new Response(null, { status: 200 });
  await expect(probeHttpOk("https://example.com/healthz")).resolves.toBe(true);

  globalThis.fetch = async () => {
    throw new Error("offline");
  };
  await expect(probeHttpOk("https://example.com/healthz")).resolves.toBe(false);
});

test("stopQuietly resolves false on teardown failures without throwing", async () => {
  await expect(stopQuietly(async () => undefined)).resolves.toBe(true);
  await expect(stopQuietly(async () => {
    throw new Error("stop failed");
  })).resolves.toBe(false);
  await expect(stopQuietly(null)).resolves.toBe(false);
});
