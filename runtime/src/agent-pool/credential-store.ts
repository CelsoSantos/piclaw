import { execSync } from "node:child_process";
import { chmodSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

import type {
  AuthEvent,
  AuthPrompt,
  Credential,
  CredentialInfo,
  CredentialStore,
} from "@earendil-works/pi-ai";
import lockfile from "proper-lockfile";

import { getAgentDir, type ModelRuntime } from "@earendil-works/pi-coding-agent";

const AUTH_FILE_MODE = 0o600;
const AUTH_DIRECTORY_MODE = 0o700;
const LOCK_OPTIONS = {
  retries: {
    retries: 10,
    factor: 2,
    minTimeout: 100,
    maxTimeout: 10_000,
    randomize: true,
  },
  stale: 30_000,
} as const;

type CredentialData = Record<string, Credential>;

export type LegacyOAuthCallbacks = {
  onAuth(info: { url: string; instructions?: string }): void;
  onDeviceCode?(info: { userCode: string; verificationUri: string; intervalSeconds?: number; expiresInSeconds?: number }): void;
  onPrompt(prompt: { message: string; placeholder?: string; allowEmpty?: boolean }): Promise<string>;
  onProgress?(message: string): void;
  onManualCodeInput?(signal?: AbortSignal): Promise<string>;
  onSelect(prompt: { message: string; options: Array<{ id: string; label: string }> }): Promise<string | undefined>;
  signal?: AbortSignal;
};

export interface PiclawCredentialStore extends CredentialStore {
  get(providerId: string): Credential | undefined;
  set(providerId: string, credential: Credential | undefined): void;
  reload(): void;
  getOAuthProviders(): Array<{ id: string; name: string; usesCallbackServer?: boolean }>;
  login(providerId: string, callbacks: LegacyOAuthCallbacks): Promise<void>;
  refreshOAuthTokenWithLock(providerId: string): Promise<unknown>;
  attachModelRuntime(modelRuntime: ModelRuntime): void;
  drainErrors(): Error[];
}

const commandValueCache = new Map<string, string | undefined>();

function resolveConfigValue(config: string, env?: Record<string, string>): string | undefined {
  if (config.startsWith("!")) {
    if (commandValueCache.has(config)) return commandValueCache.get(config);
    let value: string | undefined;
    try {
      value = execSync(config.slice(1), {
        encoding: "utf8",
        timeout: 10_000,
        stdio: ["ignore", "pipe", "ignore"],
      }).trim() || undefined;
    } catch {
      value = undefined;
    }
    commandValueCache.set(config, value);
    return value;
  }

  let resolved = "";
  for (let index = 0; index < config.length;) {
    if (config[index] !== "$") {
      resolved += config[index++];
      continue;
    }
    const next = config[index + 1];
    if (next === "$" || next === "!") {
      resolved += next;
      index += 2;
      continue;
    }
    if (next === "{") {
      const end = config.indexOf("}", index + 2);
      if (end < 0) {
        resolved += "$";
        index += 1;
        continue;
      }
      const name = config.slice(index + 2, end);
      if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
        resolved += config.slice(index, end + 1);
      } else {
        const value = env?.[name] || process.env[name] || undefined;
        if (value === undefined) return undefined;
        resolved += value;
      }
      index = end + 1;
      continue;
    }
    const match = config.slice(index + 1).match(/^[A-Za-z_][A-Za-z0-9_]*/);
    if (!match) {
      resolved += "$";
      index += 1;
      continue;
    }
    const value = env?.[match[0]] || process.env[match[0]] || undefined;
    if (value === undefined) return undefined;
    resolved += value;
    index += match[0].length + 1;
  }
  return resolved;
}

function resolveCredential(credential: Credential | undefined): Credential | undefined {
  if (credential?.type !== "api_key" || credential.key === undefined) return cloneCredential(credential);
  return { ...cloneCredential(credential), key: resolveConfigValue(credential.key, credential.env) };
}

function cloneCredential<T extends Credential | undefined>(credential: T): T {
  return credential === undefined ? credential : structuredClone(credential);
}

function parseCredentialData(content: string | undefined): CredentialData {
  if (!content?.trim()) return {};
  const parsed = JSON.parse(content) as unknown;
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("auth.json must contain a JSON object");
  }
  return parsed as CredentialData;
}

/**
 * App-owned file credential store for pi-ai ModelRuntime.
 *
 * The async CredentialStore methods are canonical. Synchronous get/set/reload
 * methods temporarily preserve Piclaw's pre-ModelRuntime control surfaces and
 * are removed in WP3 after login/logout/quota migration.
 */
export class FileCredentialStore implements PiclawCredentialStore {
  private data: CredentialData = {};
  private loadError: Error | null = null;
  private errors: Error[] = [];
  private modelRuntime: ModelRuntime | null = null;

  constructor(readonly authPath: string = join(getAgentDir(), "auth.json")) {
    this.reload();
  }

  private recordError(error: unknown): Error {
    const normalized = error instanceof Error ? error : new Error(String(error));
    this.errors.push(normalized);
    return normalized;
  }

  private ensureFile(): void {
    const parent = dirname(this.authPath);
    if (!existsSync(parent)) mkdirSync(parent, { recursive: true, mode: AUTH_DIRECTORY_MODE });
    if (!existsSync(this.authPath)) writeFileSync(this.authPath, "{}", { encoding: "utf8", mode: AUTH_FILE_MODE });
    chmodSync(this.authPath, AUTH_FILE_MODE);
  }

  private readFileData(): CredentialData {
    this.ensureFile();
    return parseCredentialData(readFileSync(this.authPath, "utf8"));
  }

  private writeFileData(data: CredentialData): void {
    writeFileSync(this.authPath, `${JSON.stringify(data, null, 2)}\n`, { encoding: "utf8", mode: AUTH_FILE_MODE });
    chmodSync(this.authPath, AUTH_FILE_MODE);
  }

  private acquireSyncLock(): () => void {
    let lastError: unknown;
    for (let attempt = 1; attempt <= 10; attempt += 1) {
      try {
        return lockfile.lockSync(this.authPath, { realpath: false });
      } catch (error) {
        lastError = error;
        const code = typeof error === "object" && error !== null && "code" in error
          ? String((error as { code?: unknown }).code)
          : "";
        if (code !== "ELOCKED" || attempt === 10) throw error;
        const startedAt = Date.now();
        while (Date.now() - startedAt < 20) { /* legacy synchronous compatibility path */ }
      }
    }
    throw lastError instanceof Error ? lastError : new Error("Failed to acquire credential lock");
  }

  private withSyncLock<T>(fn: (current: CredentialData) => T): T {
    this.ensureFile();
    const release = this.acquireSyncLock();
    try {
      return fn(this.readFileData());
    } finally {
      release();
    }
  }

  private async withAsyncLock<T>(
    fn: (current: CredentialData, assertLock: () => void) => Promise<T>,
  ): Promise<T> {
    this.ensureFile();
    let compromised: Error | null = null;
    const assertLock = () => {
      if (compromised) throw compromised;
    };
    const release = await lockfile.lock(this.authPath, {
      ...LOCK_OPTIONS,
      onCompromised: (error) => { compromised = error; },
    });
    try {
      assertLock();
      const result = await fn(this.readFileData(), assertLock);
      assertLock();
      return result;
    } finally {
      try {
        await release();
      } catch (error) {
        this.recordError(new Error("Failed to release credential storage lock", { cause: error }));
      }
    }
  }

  reload(): void {
    try {
      this.data = this.withSyncLock((current) => current);
      this.loadError = null;
    } catch (error) {
      this.loadError = this.recordError(error);
    }
  }

  get(providerId: string): Credential | undefined {
    return cloneCredential(this.data[providerId]);
  }

  set(providerId: string, credential: Credential | undefined): void {
    if (this.loadError) this.reload();
    if (this.loadError) throw new Error(`Cannot update auth storage because it could not be loaded: ${this.loadError.message}`);
    try {
      this.data = this.withSyncLock((current) => {
        const next = { ...current };
        if (credential === undefined) delete next[providerId];
        else next[providerId] = cloneCredential(credential);
        this.writeFileData(next);
        return next;
      });
      this.loadError = null;
    } catch (error) {
      throw this.recordError(error);
    }
  }

  attachModelRuntime(modelRuntime: ModelRuntime): void {
    this.modelRuntime = modelRuntime;
  }

  getOAuthProviders(): Array<{ id: string; name: string; usesCallbackServer?: boolean }> {
    return (this.modelRuntime?.getProviders() ?? [])
      .filter((provider) => provider.auth.oauth)
      .map((provider) => ({ id: provider.id, name: provider.auth.oauth?.name ?? provider.name }));
  }

  async login(providerId: string, callbacks: LegacyOAuthCallbacks): Promise<void> {
    if (!this.modelRuntime) throw new Error("ModelRuntime is not attached to credential storage");
    await this.modelRuntime.login(providerId, "oauth", {
      signal: callbacks.signal,
      prompt: (prompt) => this.handleLegacyPrompt(prompt, callbacks),
      notify: (event) => this.handleLegacyEvent(event, callbacks),
    });
  }

  private async handleLegacyPrompt(prompt: AuthPrompt, callbacks: LegacyOAuthCallbacks): Promise<string> {
    if (prompt.type === "select") {
      const selected = await callbacks.onSelect({
        message: prompt.message,
        options: prompt.options.map(({ id, label }) => ({ id, label })),
      });
      if (selected === undefined) throw new Error("Login cancelled");
      return selected;
    }
    if (prompt.type === "manual_code" && callbacks.onManualCodeInput) return callbacks.onManualCodeInput(prompt.signal);
    return callbacks.onPrompt({ message: prompt.message, placeholder: prompt.placeholder });
  }

  private handleLegacyEvent(event: AuthEvent, callbacks: LegacyOAuthCallbacks): void {
    if (event.type === "auth_url") callbacks.onAuth({ url: event.url, instructions: event.instructions });
    else if (event.type === "device_code") callbacks.onDeviceCode?.(event);
    else callbacks.onProgress?.(event.message);
  }

  async refreshOAuthTokenWithLock(providerId: string): Promise<unknown> {
    return this.modelRuntime?.getAuth(providerId);
  }

  drainErrors(): Error[] {
    const drained = [...this.errors];
    this.errors = [];
    return drained;
  }

  async read(providerId: string): Promise<Credential | undefined> {
    const current = await this.withAsyncLock(async (data) => data);
    this.data = current;
    this.loadError = null;
    return resolveCredential(current[providerId]);
  }

  async list(): Promise<readonly CredentialInfo[]> {
    const current = await this.withAsyncLock(async (data) => data);
    this.data = current;
    this.loadError = null;
    return Object.entries(current).map(([providerId, credential]) => ({ providerId, type: credential.type }));
  }

  async modify(
    providerId: string,
    fn: (current: Credential | undefined) => Promise<Credential | undefined>,
  ): Promise<Credential | undefined> {
    return this.withAsyncLock(async (current, assertLock) => {
      const nextCredential = await fn(cloneCredential(current[providerId]));
      assertLock();
      if (nextCredential === undefined) {
        this.data = current;
        this.loadError = null;
        return cloneCredential(current[providerId]);
      }
      const next = { ...current, [providerId]: cloneCredential(nextCredential) };
      this.writeFileData(next);
      this.data = next;
      this.loadError = null;
      return cloneCredential(nextCredential);
    });
  }

  async delete(providerId: string): Promise<void> {
    await this.withAsyncLock(async (current, assertLock) => {
      const next = { ...current };
      delete next[providerId];
      assertLock();
      this.writeFileData(next);
      this.data = next;
      this.loadError = null;
    });
  }
}
