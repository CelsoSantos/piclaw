import { createLogger, debugSuppressedError } from "../../src/utils/logger.js";

const log = createLogger("azure-openai.harness");

export function tryRewriteProxyFoundryImageEndpoint(foundryBaseUrl: string): string | null {
  try {
    const url = new URL(foundryBaseUrl);
    url.pathname = url.pathname.replace(/\/foundry(\/v\d+)?\/?$/, "/bfl");
    if (!url.pathname.endsWith("/bfl")) {
      url.pathname = "/bfl";
    }
    return url.toString().replace(/\/+$/, "");
  } catch (error) {
    debugSuppressedError(log, "Failed to rewrite Foundry proxy image endpoint; falling back to hostname rewrite.", error, {
      foundryBaseUrl,
    });
    return null;
  }
}

export function tryNormalizeFoundryServiceBase(base: string): string | null {
  try {
    const url = new URL(base);
    url.pathname = url.pathname.replace(/\/openai(\/v\d+)?\/?$/, "");
    if (url.hostname.endsWith(".cognitiveservices.azure.com")) {
      url.hostname = url.hostname.replace(".cognitiveservices.azure.com", ".services.ai.azure.com");
      return url.toString().replace(/\/+$/, "");
    }
    if (url.hostname.endsWith(".openai.azure.com")) {
      url.hostname = url.hostname.replace(".openai.azure.com", ".services.ai.azure.com");
      return url.toString().replace(/\/+$/, "");
    }
    return url.toString().replace(/\/+$/, "");
  } catch (error) {
    debugSuppressedError(log, "Failed to normalize Foundry service base URL; using the raw Azure endpoint.", error, {
      base,
    });
    return null;
  }
}

export function tryParseJsonRecord(text: string, context: string): Record<string, any> | null {
  try {
    const parsed = JSON.parse(text);
    return parsed && typeof parsed === "object" ? parsed as Record<string, any> : null;
  } catch (error) {
    debugSuppressedError(log, `Failed to parse Azure OpenAI harness ${context} as JSON; falling back to plain-text formatting.`, error, {
      preview: text.slice(0, 300),
    });
    return null;
  }
}
