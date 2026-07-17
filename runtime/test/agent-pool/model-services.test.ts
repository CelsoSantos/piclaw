import { afterEach, describe, expect, test } from "bun:test";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import type { CreateModelRuntimeOptions, ModelRuntime } from "@earendil-works/pi-coding-agent";

import { PiclawModelRegistry, createRuntimeModelServices } from "../../src/agent-pool/model-services.js";

const roots: string[] = [];
afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

function tempAgentDir(): string {
  const root = mkdtempSync(join(tmpdir(), "piclaw-model-services-"));
  roots.push(root);
  return join(root, "agent");
}

describe("runtime model services", () => {
  test("creates the runtime cache-first with canonical agent paths", async () => {
    const agentDir = tempAgentDir();
    let captured: CreateModelRuntimeOptions | null = null;
    const fakeRuntime = { reloadConfig: async () => {} } as unknown as ModelRuntime;

    const services = await createRuntimeModelServices({
      agentDir,
      createModelRuntime: async (options) => {
        captured = options;
        return fakeRuntime;
      },
    });

    expect(captured).toMatchObject({
      authPath: join(agentDir, "auth.json"),
      modelsPath: join(agentDir, "models.json"),
      modelsStorePath: join(agentDir, "models-store.json"),
      allowModelNetwork: false,
    });
    expect(captured?.credentials).toBe(services.credentialStore);
    expect(services.modelRuntime).toBe(fakeRuntime);
    expect(services.modelRegistry).toBeInstanceOf(PiclawModelRegistry);
  });

  test("compat registry coalesces concurrent config reloads", async () => {
    tempAgentDir();
    let reloadCalls = 0;
    let release: (() => void) | undefined;
    const blocker = new Promise<void>((resolve) => { release = resolve; });
    const runtime = {
      reloadConfig: async () => {
        reloadCalls += 1;
        await blocker;
      },
    } as unknown as ModelRuntime;
    const registry = new PiclawModelRegistry(runtime);

    const first = registry.refresh();
    const second = registry.refresh();
    expect(first).toBe(second);
    expect(reloadCalls).toBe(1);
    release?.();
    await first;

    await registry.refresh();
    expect(reloadCalls).toBe(2);
  });
});
