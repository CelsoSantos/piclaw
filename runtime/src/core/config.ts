/**
 * core/config.ts – Centralised application configuration.
 *
 * All runtime settings are resolved here from three sources (in priority
 * order): CLI arguments, environment variables / `.env` file, and the JSON
 * config file at `<workspace>/.piclaw/config.json`.
 *
 * The exported constants and mutable variables are consumed throughout the
 * application:
 *   - WORKSPACE_DIR / STORE_DIR / DATA_DIR → db/, ipc.ts, task-scheduler.ts
 *   - WEB_* → channels/web.ts (HTTP/TLS server setup, auth)
 *   - ASSISTANT_NAME / ASSISTANT_AVATAR → agent-pool.ts, channels/formatting.ts
 *   - PUSHOVER_* → channels/pushover.ts
 *   - AGENT_TIMEOUT / BACKGROUND_AGENT_TIMEOUT → agent-pool.ts, runtime.ts
 *   - TRIGGER_PATTERN → router.ts (decides whether to process a message)
 *   - TOOL_OUTPUT_* → db/tool-outputs.ts (retention / cleanup scheduling)
 *
 * Setter functions (setAssistantName, etc.) allow the agent-control layer to
 * update identity settings at runtime without a restart.
 */

import { readJsonConfig, writeJsonConfig } from "./config-store.js";
import { pickString, pickNumber, pickBoolean, pickStringArray } from "./config-helpers.js";
import type { RuntimeTimingConfig } from "./config-helpers.js";
export { pickString, pickNumber, pickBoolean, pickStringArray };
export type { RuntimeTimingConfig };
import { createLogger } from "../utils/logger.js";
import { parseLogLevel, setConfiguredLogLevelFallback, type LogLevel } from "../utils/log-level.js";
import { DAY_MS, DEFAULT_LOG_RETENTION_CAP_MS } from "../utils/log-layout.js";
import { parsePositiveIntStrict } from "../utils/strict-int.js";
import {
  integerField,
  readDomainConfig,
  registerDomainConfig,
  stringField,
  writeDomainConfigField,
  type DomainConfigField,
} from "./domain-config.js";
import {
  assistantConfig,
  DATA_DIR,
  envConfig,
  getConfigPath,
  getDomainConfigOptions,
  getWorkspaceDir,
  PICLAW_CONFIG_PATH,
  piclawConfig,
  pushoverConfig,
  STORE_DIR,
  userConfig,
  WORKSPACE_DIR,
} from "./config-context.js";

export { getConfigPath, getWorkspaceDir, PICLAW_CONFIG_PATH, WORKSPACE_DIR, STORE_DIR, DATA_DIR };
export * from "./config-web.js";
export * from "./config-tools.js";
export * from "./config-runtime.js";

// ---------------------------------------------------------------------------
// Timing constants used by the runtime message loop and scheduler.
// ---------------------------------------------------------------------------

/** Grouped runtime timing settings. */
export const RUNTIME_TIMING_CONFIG = Object.freeze<RuntimeTimingConfig>({
  pollIntervalMs: 2000,
  schedulerPollIntervalMs: 60000,
  ipcPollIntervalMs: 1000,
  timezone: process.env.TZ || Intl.DateTimeFormat().resolvedOptions().timeZone,
});

/** Return grouped runtime timing settings for runtime wiring and tests. */
export function getRuntimeTimingConfig(): Readonly<RuntimeTimingConfig> {
  return RUNTIME_TIMING_CONFIG;
}

// Extract individual settings from the JSON config, trying multiple key aliases.
const configAppToken = pickString(pushoverConfig, ["appToken", "app_token", "PUSHOVER_APP_TOKEN"]);
const configUserKey = pickString(pushoverConfig, ["userKey", "user_key", "PUSHOVER_USER_KEY"]);
const configDevice = pickString(pushoverConfig, ["device", "PUSHOVER_DEVICE"]);
const configSound = pickString(pushoverConfig, ["sound", "PUSHOVER_SOUND"]);
const configPriority = pickNumber(pushoverConfig, ["priority", "PUSHOVER_PRIORITY"]);
const configAssistantName = pickString(assistantConfig, [
  "assistantName",
  "assistant_name",
  "agentName",
  "agent_name",
  "name",
  "ASSISTANT_NAME",
]);
const configAssistantAvatar = pickString(assistantConfig, [
  "assistantAvatar",
  "assistant_avatar",
  "agentAvatar",
  "agent_avatar",
  "avatar",
  "ASSISTANT_AVATAR",
]);
const configUserName = pickString(userConfig, [
  "userName",
  "user_name",
  "name",
  "PICLAW_USER_NAME",
]);
const configUserAvatar = pickString(userConfig, [
  "userAvatar",
  "user_avatar",
  "avatar",
  "PICLAW_USER_AVATAR",
]);
const configUserAvatarBackground = pickString(userConfig, [
  "userAvatarBackground",
  "user_avatar_background",
  "userAvatarBg",
  "user_avatar_bg",
  "avatarBackground",
  "avatar_background",
  "PICLAW_USER_AVATAR_BACKGROUND",
]);

// ---------------------------------------------------------------------------
// Deprecation warnings for renamed environment variables.
// ---------------------------------------------------------------------------

const log = createLogger("core.config");

/** Emit a structured warning if only the old env var name is set. */
function warnDeprecatedEnv(oldName: string, newName: string): void {
  const oldValue = process.env[oldName] ?? envConfig[oldName];
  const newValue = process.env[newName] ?? envConfig[newName];
  if (oldValue && !newValue) {
    log.warn("Deprecated environment variable is set", {
      operation: "core_config.warn_deprecated_env",
      oldName,
      newName,
    });
  }
}

warnDeprecatedEnv("ASSISTANT_NAME", "PICLAW_ASSISTANT_NAME");
warnDeprecatedEnv("ASSISTANT_AVATAR", "PICLAW_ASSISTANT_AVATAR");
warnDeprecatedEnv("LOG_LEVEL", "PICLAW_LOG_LEVEL");

// ---------------------------------------------------------------------------
// Mutable identity settings – can be changed at runtime via agent-control.
// ---------------------------------------------------------------------------

/** Typed logging settings grouped for runtime diagnostics. */
export interface LoggingConfig {
  level: LogLevel;
}


/** Typed mutable identity settings grouped for runtime consumers that need live values. */
export interface IdentityConfig {
  assistantName: string;
  assistantAvatar: string;
  userName: string;
  userAvatar: string;
  userAvatarBackground: string;
}

const identityDomainSchema = registerDomainConfig<IdentityConfig>({
  domain: "identity",
  fields: {
    assistantName: stringField({ key: "assistantName", owner: "identity", defaultValue: configAssistantName || "PiClaw", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [
      { envKey: "PICLAW_ASSISTANT_NAME", replacement: "domains.identity.assistantName", removalVersion: "3.0.0" },
      { envKey: "ASSISTANT_NAME", replacement: "domains.identity.assistantName", removalVersion: "3.0.0" },
    ] }),
    assistantAvatar: stringField({ key: "assistantAvatar", owner: "identity", defaultValue: configAssistantAvatar || "", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [
      { envKey: "PICLAW_ASSISTANT_AVATAR", replacement: "domains.identity.assistantAvatar", removalVersion: "3.0.0" },
      { envKey: "ASSISTANT_AVATAR", replacement: "domains.identity.assistantAvatar", removalVersion: "3.0.0" },
    ] }),
    userName: stringField({ key: "userName", owner: "identity", defaultValue: configUserName || "", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_USER_NAME", replacement: "domains.identity.userName", removalVersion: "3.0.0" }] }),
    userAvatar: stringField({ key: "userAvatar", owner: "identity", defaultValue: configUserAvatar || "", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_USER_AVATAR", replacement: "domains.identity.userAvatar", removalVersion: "3.0.0" }] }),
    userAvatarBackground: stringField({ key: "userAvatarBackground", owner: "identity", defaultValue: configUserAvatarBackground || "", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_USER_AVATAR_BACKGROUND", replacement: "domains.identity.userAvatarBackground", removalVersion: "3.0.0" }] }),
  },
});

const IDENTITY_DOMAIN_CONFIG = readDomainConfig(identityDomainSchema, getDomainConfigOptions());

/** Grouped mutable identity settings. Legacy flat exports below stay in sync for compatibility. */
export const IDENTITY_CONFIG: IdentityConfig = Object.seal({
  assistantName: IDENTITY_DOMAIN_CONFIG.assistantName || process.env.ASSISTANT_NAME || envConfig.ASSISTANT_NAME || "PiClaw",
  assistantAvatar: IDENTITY_DOMAIN_CONFIG.assistantAvatar || process.env.ASSISTANT_AVATAR || envConfig.ASSISTANT_AVATAR || "",
  userName: IDENTITY_DOMAIN_CONFIG.userName || "",
  userAvatar: IDENTITY_DOMAIN_CONFIG.userAvatar || "",
  userAvatarBackground: IDENTITY_DOMAIN_CONFIG.userAvatarBackground || "",
});

/** Return grouped mutable identity settings for runtime wiring and tests. */
export function getIdentityConfig(): Readonly<IdentityConfig> {
  return IDENTITY_CONFIG;
}

/** Display name of the assistant. Updated by setAssistantName(). */
export let ASSISTANT_NAME = IDENTITY_CONFIG.assistantName;

/** URL or path to the assistant's avatar image. Updated by setAssistantAvatar(). */
export let ASSISTANT_AVATAR = IDENTITY_CONFIG.assistantAvatar;

/** Display name for the human user in the web UI. */
export let USER_NAME = IDENTITY_CONFIG.userName;

/** URL or path to the user's avatar image. */
export let USER_AVATAR = IDENTITY_CONFIG.userAvatar;

/** CSS background colour for the user avatar circle. */
export let USER_AVATAR_BACKGROUND = IDENTITY_CONFIG.userAvatarBackground;

// ---------------------------------------------------------------------------
// UI theme – persisted instance-wide theme + tint.
// ---------------------------------------------------------------------------

export interface UiThemeConfig {
  theme: string;
  tint: string | null;
}

const uiSection =
  piclawConfig.ui && typeof piclawConfig.ui === "object"
    ? (piclawConfig.ui as Record<string, unknown>)
    : {};

let UI_THEME: string = typeof uiSection.theme === "string" ? uiSection.theme.trim() : "default";
let UI_TINT: string | null = typeof uiSection.tint === "string" && uiSection.tint.trim() ? uiSection.tint.trim() : null;

export function getUiThemeConfig(): UiThemeConfig {
  return { theme: UI_THEME, tint: UI_TINT };
}

export function setUiThemeConfig(patch: { theme?: string; tint?: string | null }): UiThemeConfig {
  const config = readJsonConfig(getConfigPath());
  const ui =
    config.ui && typeof config.ui === "object"
      ? { ...(config.ui as Record<string, unknown>) }
      : {};
  if (typeof patch.theme === "string") {
    ui.theme = patch.theme.trim() || "default";
    UI_THEME = ui.theme as string;
  }
  if (patch.tint !== undefined) {
    ui.tint = typeof patch.tint === "string" && patch.tint.trim() ? patch.tint.trim() : null;
    UI_TINT = ui.tint as string | null;
  }
  config.ui = ui;
  writeJsonConfig(getConfigPath(), config);
  return { theme: UI_THEME, tint: UI_TINT };
}

// ---------------------------------------------------------------------------
// Trigger pattern – used by router.ts to decide if a message mentions the bot.
// ---------------------------------------------------------------------------

/** Escape special regex characters in a literal string. */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Mutable routing settings grouped for live assistant-name updates. */
export interface RoutingConfig {
  triggerPattern: RegExp;
}

/** Grouped routing settings. `triggerPattern` stays mutable with assistant renames. */
export const ROUTING_CONFIG: RoutingConfig = Object.seal({
  triggerPattern: new RegExp(`(?:^|\\s)@${escapeRegex(IDENTITY_CONFIG.assistantName)}\\b`, "i"),
});

/** Return grouped routing settings for runtime wiring and tests. */
export function getRoutingConfig(): Readonly<RoutingConfig> {
  return ROUTING_CONFIG;
}

// ---------------------------------------------------------------------------
// Runtime setters – called by agent-control handlers to update identity.
// ---------------------------------------------------------------------------

function persistIdentitySetting<K extends keyof IdentityConfig>(key: K, value: IdentityConfig[K]): IdentityConfig[K] {
  writeDomainConfigField(identityDomainSchema, getDomainConfigOptions(), key, value);
  IDENTITY_DOMAIN_CONFIG[key] = value;
  IDENTITY_CONFIG[key] = value;
  ASSISTANT_NAME = IDENTITY_CONFIG.assistantName;
  ASSISTANT_AVATAR = IDENTITY_CONFIG.assistantAvatar;
  USER_NAME = IDENTITY_CONFIG.userName;
  USER_AVATAR = IDENTITY_CONFIG.userAvatar;
  USER_AVATAR_BACKGROUND = IDENTITY_CONFIG.userAvatarBackground;
  ROUTING_CONFIG.triggerPattern = new RegExp(`(?:^|\\s)@${escapeRegex(IDENTITY_CONFIG.assistantName)}\\b`, "i");
  return value;
}

/** Update the assistant's display name and re-derive the trigger pattern. */
export function setAssistantName(name: string): void {
  persistIdentitySetting("assistantName", name.trim() || "PiClaw");
}

/** Update the assistant's avatar URL/path. */
export function setAssistantAvatar(avatar: string): void {
  persistIdentitySetting("assistantAvatar", avatar.trim());
}

/** Update the human user's display name. */
export function setUserName(name: string): void {
  persistIdentitySetting("userName", name.trim());
}

/** Update the human user's avatar URL/path. */
export function setUserAvatar(avatar: string): void {
  persistIdentitySetting("userAvatar", avatar.trim());
}

/** Update the human user's avatar background colour. */
export function setUserAvatarBackground(background: string): void {
  persistIdentitySetting("userAvatarBackground", background.trim());
}

// ---------------------------------------------------------------------------
// Log retention settings.
// ---------------------------------------------------------------------------

export interface RetentionCleanupConfig {
  retentionMs: number;
  cleanupIntervalMs: number;
}

function parsePositiveInteger(value: string | undefined): number | undefined {
  const parsed = parsePositiveIntStrict(value, 0);
  return parsed > 0 ? parsed : undefined;
}

const DEFAULT_RETENTION_CLEANUP_INTERVAL_MS = 60 * 60 * 1000;

/** Typed logging and agent-run-log retention settings. */
type LoggingDomainConfig = LoggingConfig & RetentionCleanupConfig;
export type AgentLogConfig = RetentionCleanupConfig;

const agentLogDomainSchema = registerDomainConfig<LoggingDomainConfig>({
  domain: "logging",
  fields: {
    level: {
      ...stringField({
        key: "level",
        owner: "core",
        defaultValue: "info",
        allowedValues: ["debug", "info", "warn", "error"],
        persistence: "json-config",
        precedence: ["compat-env", "persisted", "default"],
        secretClass: "none",
        compatibilityEnv: [
          { envKey: "PICLAW_LOG_LEVEL", replacement: "domains.logging.level", removalVersion: "3.0.0", parse: (raw) => parseLogLevel(raw) },
          { envKey: "LOG_LEVEL", replacement: "domains.logging.level", removalVersion: "3.0.0", parse: (raw) => parseLogLevel(raw) },
        ],
      }),
      validate: (value: unknown) => parseLogLevel(value),
    } as DomainConfigField<LogLevel>,
    retentionMs: integerField({
      key: "retentionMs",
      owner: "agent-runtime",
      defaultValue: DEFAULT_LOG_RETENTION_CAP_MS,
      min: 1,
      max: DEFAULT_LOG_RETENTION_CAP_MS,
      bounds: `1..${DEFAULT_LOG_RETENTION_CAP_MS} ms`,
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [
        { envKey: "PICLAW_AGENT_LOG_RETENTION_MS", replacement: "domains.logging.retentionMs", removalVersion: "3.0.0", parse: (raw) => { const value = parsePositiveInteger(raw); return value === undefined ? undefined : Math.min(DEFAULT_LOG_RETENTION_CAP_MS, value); }, skipInvalid: true },
        { envKey: "PICLAW_AGENT_LOG_RETENTION_DAYS", replacement: "domains.logging.retentionMs", removalVersion: "3.0.0", parse: (raw) => { const days = parsePositiveInteger(raw); return days === undefined ? undefined : Math.min(DEFAULT_LOG_RETENTION_CAP_MS, days * DAY_MS); }, skipInvalid: true },
      ],
    }),
    cleanupIntervalMs: integerField({
      key: "cleanupIntervalMs",
      owner: "agent-runtime",
      defaultValue: DEFAULT_RETENTION_CLEANUP_INTERVAL_MS,
      min: 1,
      bounds: "positive integer ms",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_AGENT_LOG_CLEANUP_INTERVAL_MS", replacement: "domains.logging.cleanupIntervalMs", removalVersion: "3.0.0", parse: (raw) => parsePositiveInteger(raw), skipInvalid: true }],
    }),
  },
});

const LOGGING_DOMAIN_CONFIG = readDomainConfig(agentLogDomainSchema, getDomainConfigOptions());

/** Grouped logging threshold settings. */
export const LOGGING_CONFIG = Object.freeze<LoggingConfig>({ level: LOGGING_DOMAIN_CONFIG.level });
setConfiguredLogLevelFallback(LOGGING_CONFIG.level);

/** Return grouped logging settings for runtime wiring and tests. */
export function getLoggingConfig(): Readonly<LoggingConfig> {
  return LOGGING_CONFIG;
}

/** Grouped agent-run-log retention settings. Defaults/caps retention at 30 days. */
export const AGENT_LOG_CONFIG = Object.freeze<AgentLogConfig>({
  retentionMs: LOGGING_DOMAIN_CONFIG.retentionMs,
  cleanupIntervalMs: LOGGING_DOMAIN_CONFIG.cleanupIntervalMs,
});

/** Return the grouped agent-run-log retention settings for startup wiring and tests. */
export function getAgentLogConfig(): Readonly<AgentLogConfig> {
  return AGENT_LOG_CONFIG;
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Pushover notification channel settings.
// ---------------------------------------------------------------------------

/** Typed Pushover channel settings grouped for runtime startup wiring. */
export interface PushoverConfig {
  appToken: string;
  userKey: string;
  device: string;
  priority: number;
  sound: string;
}

/** Grouped Pushover channel settings. */
export const PUSHOVER_CONFIG = Object.freeze<PushoverConfig>({
  appToken: process.env.PUSHOVER_APP_TOKEN || envConfig.PUSHOVER_APP_TOKEN || configAppToken || "",
  userKey: process.env.PUSHOVER_USER_KEY || envConfig.PUSHOVER_USER_KEY || configUserKey || "",
  device: process.env.PUSHOVER_DEVICE || envConfig.PUSHOVER_DEVICE || configDevice || "",
  priority: parseInt(
    process.env.PUSHOVER_PRIORITY || envConfig.PUSHOVER_PRIORITY || (configPriority !== undefined ? String(configPriority) : "0"),
    10
  ),
  sound: process.env.PUSHOVER_SOUND || envConfig.PUSHOVER_SOUND || configSound || "",
});

/** Return the grouped Pushover settings for startup wiring and tests. */
export function getPushoverConfig(): Readonly<PushoverConfig> {
  return PUSHOVER_CONFIG;
}
