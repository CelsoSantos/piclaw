import { expect, mock, test } from "bun:test";
import * as piAICompat from "@earendil-works/pi-ai/compat";

import "../helpers.js";

const streamCalls: Array<{ model: unknown; context: unknown; options: any }> = [];

mock.module("@earendil-works/pi-ai/compat", () => ({
  ...piAICompat,
  streamSimple: (model: unknown, context: unknown, options: any) => {
    streamCalls.push({ model, context, options });
    return {
      async result() {
        return { role: "assistant", content: [{ type: "text", text: "ok" }] };
      },
      async *[Symbol.asyncIterator]() {},
    };
  },
}));

test("createCompactionStreamFn trusts already-resolved compaction auth options", async () => {
  streamCalls.length = 0;
  let authResolutionCount = 0;
  const { createCompactionStreamFn } = await import("../../src/agent-pool/session.js");
  const streamFn = createCompactionStreamFn(
    {
      async getApiKeyAndHeaders() {
        authResolutionCount += 1;
        return {
          ok: true,
          apiKey: "second-key",
          headers: { Authorization: "Bearer second" },
          env: { TOKEN: "second" },
        };
      },
    } as any,
    {
      getProviderRetrySettings: () => ({ timeoutMs: 1234, maxRetries: 2, maxRetryDelayMs: 345 }),
    } as any,
  );

  await streamFn(
    { provider: "test", id: "model" },
    { systemPrompt: "sys", messages: [{ role: "user", content: "hello" }] },
    {
      apiKey: "first-key",
      headers: { Authorization: "Bearer first" },
      env: { TOKEN: "first" },
      maxTokens: 32,
    } as any,
  );

  expect(authResolutionCount).toBe(0);
  expect(streamCalls).toHaveLength(1);
  expect(streamCalls[0].options).toMatchObject({
    apiKey: "first-key",
    headers: { Authorization: "Bearer first" },
    env: { TOKEN: "first" },
    maxTokens: 32,
    timeoutMs: 1234,
    maxRetries: 2,
    maxRetryDelayMs: 345,
  });
});

test("createCompactionStreamFn resolves compaction auth exactly once when no auth options are supplied", async () => {
  streamCalls.length = 0;
  let authResolutionCount = 0;
  const { createCompactionStreamFn } = await import("../../src/agent-pool/session.js");
  const streamFn = createCompactionStreamFn(
    {
      async getApiKeyAndHeaders() {
        authResolutionCount += 1;
        return {
          ok: true,
          apiKey: `key-${authResolutionCount}`,
          headers: { Authorization: `Bearer ${authResolutionCount}` },
          env: { TOKEN: `env-${authResolutionCount}` },
        };
      },
    } as any,
    {
      getProviderRetrySettings: () => ({ timeoutMs: 1234, maxRetries: 2, maxRetryDelayMs: 345 }),
    } as any,
  );

  await streamFn(
    { provider: "test", id: "model" },
    { systemPrompt: "sys", messages: [{ role: "user", content: "hello" }] },
    { maxTokens: 32 } as any,
  );

  expect(authResolutionCount).toBe(1);
  expect(streamCalls).toHaveLength(1);
  expect(streamCalls[0].options).toMatchObject({
    apiKey: "key-1",
    headers: { Authorization: "Bearer 1" },
    env: { TOKEN: "env-1" },
    maxTokens: 32,
  });
});
