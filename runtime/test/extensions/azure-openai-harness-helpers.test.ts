import { expect, test } from "bun:test";

import {
  tryNormalizeFoundryServiceBase,
  tryParseJsonRecord,
  tryRewriteProxyFoundryImageEndpoint,
} from "../../extensions/experimental/azure-openai-harness-helpers.ts";

test("tryRewriteProxyFoundryImageEndpoint rewrites Foundry proxy routes to /bfl", () => {
  expect(tryRewriteProxyFoundryImageEndpoint("https://proxy.example/foundry/v1/")).toBe("https://proxy.example/bfl");
  expect(tryRewriteProxyFoundryImageEndpoint("not-a-url")).toBeNull();
});

test("tryNormalizeFoundryServiceBase strips OpenAI paths and rewrites Azure hostnames", () => {
  expect(tryNormalizeFoundryServiceBase("https://demo.openai.azure.com/openai/v1")).toBe("https://demo.services.ai.azure.com");
  expect(tryNormalizeFoundryServiceBase("https://demo.cognitiveservices.azure.com/openai/v1/")).toBe("https://demo.services.ai.azure.com");
  expect(tryNormalizeFoundryServiceBase("not-a-url")).toBeNull();
});

test("tryParseJsonRecord parses JSON objects and suppresses malformed input", () => {
  expect(tryParseJsonRecord('{"error":{"code":"bad","message":"boom"}}', "structured API error body")).toEqual({
    error: { code: "bad", message: "boom" },
  });
  expect(tryParseJsonRecord("{not-json", "structured API error body")).toBeNull();
  expect(tryParseJsonRecord("123", "structured API error body")).toBeNull();
});
