import { existsSync } from "node:fs";
import { resolve } from "node:path";

export interface RuntimeConfigPaths {
  workspaceDir: string;
  storeDir: string;
  dataDir: string;
  configPath: string;
  defaultTlsCertPath: string;
  defaultTlsKeyPath: string;
  hasDefaultTls: boolean;
}

/** Resolve bootstrap paths while preserving the CLI-workspace precedence rules. */
export function resolveRuntimeConfigPaths(options: {
  cliWorkspace?: string;
  env?: NodeJS.ProcessEnv;
} = {}): RuntimeConfigPaths {
  const env = options.env ?? process.env;
  const workspaceDir = resolve(options.cliWorkspace || env.PICLAW_WORKSPACE || "/workspace");
  const storeDir = resolve(options.cliWorkspace
    ? `${workspaceDir}/.piclaw/store`
    : (env.PICLAW_STORE || `${workspaceDir}/.piclaw/store`));
  const dataDir = resolve(options.cliWorkspace
    ? `${workspaceDir}/.piclaw/data`
    : (env.PICLAW_DATA || `${workspaceDir}/.piclaw/data`));
  const defaultTlsCertPath = resolve(workspaceDir, ".piclaw", "certs", "sandbox.local.crt");
  const defaultTlsKeyPath = resolve(workspaceDir, ".piclaw", "certs", "sandbox.local.key");
  return {
    workspaceDir,
    storeDir,
    dataDir,
    configPath: resolve(workspaceDir, ".piclaw", "config.json"),
    defaultTlsCertPath,
    defaultTlsKeyPath,
    hasDefaultTls: existsSync(defaultTlsCertPath) && existsSync(defaultTlsKeyPath),
  };
}

/** Resolve the writable config path at call time for isolated workspace tests. */
export function resolveConfigPath(defaultPath: string, env: NodeJS.ProcessEnv = process.env): string {
  const workspace = env.PICLAW_WORKSPACE?.trim();
  return workspace ? resolve(workspace, ".piclaw", "config.json") : defaultPath;
}
