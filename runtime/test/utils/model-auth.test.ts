import { describe, expect, test } from "bun:test";
import { resolveModelRequestAuth } from "../../src/utils/model-auth.js";

describe("model auth helper", () => {
  const model = { provider: "openai", id: "gpt-test" } as any;

  test("prefers getApiKeyAndHeaders compat path when available", async () => {
    const auth = await resolveModelRequestAuth({
      getApiKeyAndHeaders: async () => ({
        ok: true,
        apiKey: "header-key",
      }),
      getApiKey: async () => "legacy-key",
    } as any, model);

    // Should use getApiKeyAndHeaders and return apiKey (headers no longer forwarded)
    expect(auth).toEqual({ ok: true, apiKey: "header-key" });
  });

  test("uses getApiKey for current upstream surface (0.67.6+)", async () => {
    const auth = await resolveModelRequestAuth({
      getApiKey: async () => "direct-key",
    } as any, model);

    expect(auth).toEqual({ ok: true, apiKey: "direct-key" });
  });

  test("returns a stable error when no credentials are available", async () => {
    const auth = await resolveModelRequestAuth({
      getApiKeyAndHeaders: async () => ({ ok: false, error: "missing auth" }),
    } as any, model);

    expect(auth).toEqual({ ok: false, error: "missing auth" });
  });

  test("returns error when getApiKey returns undefined", async () => {
    const auth = await resolveModelRequestAuth({
      getApiKey: async () => undefined,
    } as any, model);

    expect(auth).toEqual({ ok: false, error: "No credentials available for openai/gpt-test." });
  });
});
