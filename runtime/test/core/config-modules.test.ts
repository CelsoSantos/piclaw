import { expect, test } from "bun:test";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { createCliArgReader } from "../../src/core/config-cli.js";
import { resolveConfigPath, resolveRuntimeConfigPaths } from "../../src/core/config-paths.js";
import { loadPiclawEnvConfig, nestedConfig } from "../../src/core/config-sources.js";
import {
  DATA_DIR,
  getConfigPath,
  getDomainConfigOptions,
  PICLAW_CONFIG_PATH,
  STORE_DIR,
  WORKSPACE_DIR,
} from "../../src/core/config-context.js";
import {
  getSearchMatchMode,
  getScopedModelsOnly,
  getToolOutputPresentationConfig,
  getToolResultCompactionTools,
  getToolsIntegrationConfig,
  getWorkspaceSearchConfig,
} from "../../src/core/config-tools.js";
import {
  getWebContentConfig,
  getWebRuntimeConfig,
  getWebServerConfig,
  isDefaultWebTerminalEnabled,
  isDefaultWebVncDirectEnabled,
} from "../../src/core/config-web.js";

test("createCliArgReader supports separated, assigned, and aliased flags", () => {
  const read = createCliArgReader(["--port", "8081", "--host=127.0.0.1", "-w", "/tmp/ws"]);
  expect(read("--port", "-p")).toBe("8081");
  expect(read("--host")).toBe("127.0.0.1");
  expect(read("--workspace", "-w")).toBe("/tmp/ws");
  expect(read("--missing")).toBeUndefined();
});

test("resolveRuntimeConfigPaths preserves CLI workspace and environment precedence", () => {
  const env = {
    PICLAW_WORKSPACE: "/env/ws",
    PICLAW_STORE: "/env/store",
    PICLAW_DATA: "/env/data",
  } as NodeJS.ProcessEnv;
  const envPaths = resolveRuntimeConfigPaths({ env });
  expect(envPaths.workspaceDir).toBe("/env/ws");
  expect(envPaths.storeDir).toBe("/env/store");
  expect(envPaths.dataDir).toBe("/env/data");

  const cliPaths = resolveRuntimeConfigPaths({ cliWorkspace: "/cli/ws", env });
  expect(cliPaths.workspaceDir).toBe("/cli/ws");
  expect(cliPaths.storeDir).toBe("/cli/ws/.piclaw/store");
  expect(cliPaths.dataDir).toBe("/cli/ws/.piclaw/data");
  expect(cliPaths.configPath).toBe("/cli/ws/.piclaw/config.json");
});

test("resolveConfigPath and source helpers stay stateless", () => {
  expect(resolveConfigPath("/default/config.json", { PICLAW_WORKSPACE: "/dynamic/ws" } as NodeJS.ProcessEnv)).toBe("/dynamic/ws/.piclaw/config.json");
  expect(resolveConfigPath("/default/config.json", {} as NodeJS.ProcessEnv)).toBe("/default/config.json");
  const root = { web: { terminalEnabled: true }, other: 1 };
  expect(nestedConfig(root, "web")).toEqual({ terminalEnabled: true });
  expect(nestedConfig(root, "missing")).toBe(root);
});

test("config context exposes one coherent bootstrap snapshot", () => {
  expect(WORKSPACE_DIR).toBeTruthy();
  expect(STORE_DIR).toStartWith(WORKSPACE_DIR);
  expect(DATA_DIR).toStartWith(WORKSPACE_DIR);
  expect(PICLAW_CONFIG_PATH).toStartWith(WORKSPACE_DIR);
  expect(getConfigPath()).toBeTruthy();
  expect(getDomainConfigOptions().configPath).toBe(getConfigPath());
});

test("config web module preserves grouped runtime and platform defaults", () => {
  expect(getWebServerConfig().port).toBeGreaterThan(0);
  expect(getWebRuntimeConfig().sessionTtl).toBeGreaterThan(0);
  expect(getWebContentConfig().previewChars).toBeLessThanOrEqual(getWebContentConfig().maxChars);
  expect(isDefaultWebTerminalEnabled("linux")).toBe(true);
  expect(isDefaultWebTerminalEnabled("win32")).toBe(false);
  expect(isDefaultWebVncDirectEnabled("win32")).toBe(true);
});

test("config tools module preserves live grouped policy contracts", () => {
  const tools = getToolsIntegrationConfig();
  expect(tools.toolOutputStoreBytes).toBeGreaterThanOrEqual(500);
  expect(getToolOutputPresentationConfig().previewLines).toBeGreaterThan(0);
  expect(getToolResultCompactionTools()).toEqual(tools.toolResultCompactionTools);
  expect(getWorkspaceSearchConfig().roots).toEqual(tools.workspaceSearchRoots);
  expect(getSearchMatchMode()).toBe(tools.searchMatchMode);
  expect(getScopedModelsOnly()).toBe(tools.scopedModelsOnly);
});

test("loadPiclawEnvConfig reads only Piclaw's allowlisted dotenv keys", () => {
  const previousCwd = process.cwd();
  const dir = join("/tmp", `piclaw-config-sources-${process.pid}-${Date.now()}`);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, ".env"), "PICLAW_DREAM_CRON=45 3 * * *\nUNRELATED_SECRET=hidden\n", "utf8");
  try {
    process.chdir(dir);
    const config = loadPiclawEnvConfig();
    expect(config.PICLAW_DREAM_CRON).toBe("45 3 * * *");
    expect(config.UNRELATED_SECRET).toBeUndefined();
  } finally {
    process.chdir(previousCwd);
    rmSync(dir, { recursive: true, force: true });
  }
});
