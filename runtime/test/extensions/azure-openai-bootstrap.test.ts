import { describe, expect, test } from "bun:test";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

import azureOpenAiExtension, { startAzureProviderBootstrap } from "../../extensions/integrations/azure-openai.ts";

function fakeApi() {
  const handlers: Array<{ event: string; handler: (...args: any[]) => any }> = [];
  const commands = new Map<string, any>();
  const api = {
    on: (event: string, handler: (...args: any[]) => any) => handlers.push({ event, handler }),
    registerCommand: (name: string, command: any) => commands.set(name, command),
    registerProvider: () => { throw new Error("session extension must not register providers"); },
  } as unknown as ExtensionAPI;
  return { api, handlers, commands };
}

describe("azure-openai bootstrap lifecycle", () => {
  test("default extension is session-scoped only and owns no provider lifecycle", () => {
    const { api, handlers, commands } = fakeApi();
    azureOpenAiExtension(api);
    expect(handlers.map((entry) => entry.event)).toEqual(["context"]);
    expect(commands.has("image")).toBe(true);
    expect(commands.has("flux")).toBe(true);
  });

  test("process bootstrap refresh is explicit and coalesces concurrent callers", async () => {
    let tokenCalls = 0;
    let release!: () => void;
    const blocker = new Promise<void>((resolve) => { release = resolve; });
    const registrations: string[] = [];
    const bootstrap = startAzureProviderBootstrap((name) => registrations.push(name), {
      staticApiKey: "",
      ensureToken: async () => {
        tokenCalls += 1;
        await blocker;
        return { accessToken: "token", expiresOn: "", expiresOnEpoch: Math.floor(Date.now() / 1000) + 3600 };
      },
      ensureModelCaps: async () => {},
      timerApi: { setTimeout: (() => 1 as any) as any, clearTimeout: () => {} },
    });
    expect(tokenCalls).toBe(0);
    const first = bootstrap.refresh();
    const second = bootstrap.refresh();
    expect(first).toBe(second);
    expect(tokenCalls).toBe(1);
    release();
    await first;
    expect(registrations.length).toBeGreaterThan(0);
    bootstrap.stop();
  });

  test("scheduled refresh rejection is observed and rescheduled without an unhandled rejection", async () => {
    const scheduled: Array<() => void> = [];
    let tokenCalls = 0;
    const bootstrap = startAzureProviderBootstrap(() => {}, {
      staticApiKey: "",
      ensureToken: async () => {
        tokenCalls += 1;
        if (tokenCalls > 1) throw new Error("scheduled token failure");
        return { accessToken: "token", expiresOn: "", expiresOnEpoch: Math.floor(Date.now() / 1000) + 3600 };
      },
      ensureModelCaps: async () => {},
      timerApi: {
        setTimeout: ((fn: () => void) => { scheduled.push(fn); return scheduled.length as any; }) as any,
        clearTimeout: () => {},
      },
    });
    await bootstrap.refresh();
    expect(scheduled).toHaveLength(1);
    scheduled.shift()?.();
    await Bun.sleep(1);
    expect(tokenCalls).toBe(2);
    expect(scheduled).toHaveLength(1);
    bootstrap.stop();
  });

  test("capability refresh failure retains static provider registration", async () => {
    const registrations: string[] = [];
    const bootstrap = startAzureProviderBootstrap((name) => registrations.push(name), {
      staticApiKey: "",
      ensureToken: async () => ({ accessToken: "token", expiresOn: "", expiresOnEpoch: Math.floor(Date.now() / 1000) + 3600 }),
      ensureModelCaps: async () => { throw new Error("ARM unavailable"); },
      timerApi: { setTimeout: (() => 1 as any) as any, clearTimeout: () => {} },
    });
    await bootstrap.refresh();
    expect(registrations.length).toBeGreaterThan(0);
    bootstrap.stop();
  });
});
