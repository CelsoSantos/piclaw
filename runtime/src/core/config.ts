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

import { randomBytes } from "node:crypto";
import { resolve } from "path";
import { existsSync } from "fs";
import { readEnvFile } from "./env.js";
import { readJsonConfig, writeJsonConfig } from "./config-store.js";
import { createLogger } from "../utils/logger.js";
import { getConfiguredLogLevel, parseLogLevel } from "../utils/log-level.js";
import { DAY_MS, DEFAULT_LOG_RETENTION_CAP_MS, clampLogRetentionMs } from "../utils/log-layout.js";
import { parsePositiveIntStrict } from "../utils/strict-int.js";
import {
  boolField,
  integerField,
  readDomainConfig,
  registerDomainConfig,
  stringField,
  writeDomainConfig,
  writeDomainConfigField,
  type DomainConfigField,
  type DomainConfigRuntimeOptions,
} from "./domain-config.js";

// ---------------------------------------------------------------------------
// CLI argument parsing helpers.
// ---------------------------------------------------------------------------

const CLI_ARGS = process.argv.slice(2);

/** Read a CLI flag value, e.g. `--port 3000` or `--port=3000`. */
function readCliArg(name: string, alias?: string): string | undefined {
  const names = [name, alias].filter(Boolean) as string[];
  for (let i = 0; i < CLI_ARGS.length; i += 1) {
    const arg = CLI_ARGS[i];
    for (const flag of names) {
      if (arg === flag) {
        return CLI_ARGS[i + 1];
      }
      if (arg.startsWith(`${flag}=`)) {
        return arg.slice(flag.length + 1);
      }
    }
  }
  return undefined;
}

const CLI_WORKSPACE = readCliArg("--workspace", "-w");

// ---------------------------------------------------------------------------
// .env file – loaded once at module init and merged with process.env below.
// ---------------------------------------------------------------------------
const envConfig = readEnvFile([
  "PICLAW_ASSISTANT_NAME",
  "PICLAW_ASSISTANT_AVATAR",
  "PICLAW_USER_NAME",
  "PICLAW_USER_AVATAR",
  "PICLAW_USER_AVATAR_BACKGROUND",
  "ASSISTANT_NAME",
  "ASSISTANT_AVATAR",
  "PICLAW_AGENT_TIMEOUT",
  "AGENT_TIMEOUT",
  "PICLAW_BACKGROUND_AGENT_TIMEOUT",
  "AGENT_TIMEOUT_BACKGROUND",
  "PUSHOVER_APP_TOKEN",
  "PUSHOVER_USER_KEY",
  "PUSHOVER_DEVICE",
  "PUSHOVER_PRIORITY",
  "PUSHOVER_SOUND",
  "PICLAW_WEB_TLS_CERT",
  "PICLAW_WEB_TLS_KEY",
  "PICLAW_WEB_TOTP_SECRET",
  "PICLAW_WEB_TOTP_WINDOW",
  "PICLAW_WEB_SESSION_TTL",
  "PICLAW_WEB_IDLE_TIMEOUT",
  "PICLAW_WEB_INTERNAL_SECRET",
  "PICLAW_WEB_WIDGET_TOKEN",
  "PICLAW_WEB_PASSKEY_MODE",
  "PICLAW_WEB_PUSH_SUBSCRIPTION_CAP",
  "PICLAW_WEB_PUSH_VAPID_SUBJECT",
  "PICLAW_WEB_TERMINAL_ENABLED",
  "PICLAW_TERMINAL_IMAGE_PROTOCOL",
  "PICLAW_WEB_COMPOSE_UPLOAD_LIMIT_MB",
  "PICLAW_WEB_WORKSPACE_UPLOAD_LIMIT_MB",
  "PICLAW_WEB_NOTIFICATION_DEBUG_LABELS",
  "PICLAW_WEB_PERSIST_THINKING",
  "PICLAW_WEB_PERSIST_THINKING_MAX_CHARS",
  "PICLAW_WEB_VNC_ALLOW_DIRECT",
  "PICLAW_VNC_ALLOW_DIRECT",
  "PICLAW_WEB_VNC_TARGETS",
  "PICLAW_VNC_TARGETS",
  "PICLAW_DEBUG_CARD_SUBMISSIONS",
  "PICLAW_TRUST_PROXY",
  "PICLAW_SESSION_MAX_SIZE_MB",
  "PICLAW_SESSION_AUTO_ROTATE",
  "PICLAW_SESSION_ISOLATION",
  "PICLAW_SESSION_FILE_PRELOAD_SANITIZE_MIN_BYTES",
  "PICLAW_SESSION_TOOL_RESULT_MAX_PERSIST_BYTES",
  "PICLAW_SESSION_TOOL_RESULT_PREVIEW_CHARS",
  "PICLAW_RECOVERY_LOOP_GUARD_ENABLED",
  "PICLAW_RECOVERY_LOOP_GUARD_MAX_FAILURES",
  "PICLAW_RECOVERY_LOOP_GUARD_WINDOW_MS",
  "PICLAW_TURN_AUTO_RECOVERY_ENABLED",
  "PICLAW_TURN_AUTO_RECOVERY_MAX_ATTEMPTS",
  "PICLAW_TURN_AUTO_RECOVERY_TOTAL_BUDGET_MS",
  "PICLAW_STALE_PREFLIGHT_RECOVERY_MS",
  "PICLAW_STALE_PREFLIGHT_BACKOFF_MS",
  "PICLAW_PROGRESS_WATCHDOG_ENABLED",
  "PICLAW_PROGRESS_WATCHDOG_TIMEOUT_MS",
  "PICLAW_PROGRESS_WATCHDOG_RESTART_ON_STALL",
  "PICLAW_PROGRESS_WATCHDOG_ESCALATE_ON_STALL",
  "PICLAW_EXTERNAL_PROGRESS_WATCHDOG",
  "PICLAW_TURN_MAX_TOOL_USE_MESSAGES",
  "PICLAW_MID_TURN_TOOL_EXECUTION_HARD_CEILING",
  "PICLAW_IDLE_AUTO_COMPACTION_DELAY_MS",
  "PICLAW_PREPROMPT_COMPACTION_FOREGROUND_MS",
  "PICLAW_AUTO_COMPACTION_ENABLED",
  "PICLAW_SMART_COMPACTION_METHOD",
  "PICLAW_REMOTE_COMPACTION_ENABLED",
  "PICLAW_REMOTE_COMPACTION_TIMEOUT_MS",
  "PICLAW_COMPACTION_TIMEOUT_MS",
  "PICLAW_COMPACTION_BACKOFF_BASE_MS",
  "PICLAW_COMPACTION_BACKOFF_MAX_MS",
  "PICLAW_COMPACTION_THRESHOLD_PERCENT",
  "PICLAW_COMPACTION_MAX_THRESHOLD_TOKENS",
  "PICLAW_COMPACTION_BACKOFF_DECAY_FACTOR",
  "PICLAW_SYSTEM_PROMPT_OVERHEAD_TOKENS",
  "PICLAW_COMPACTION_REQUEST_OVERHEAD_TOKENS",
  "PICLAW_TOKEN_ESTIMATE_SAFETY_MULTIPLIER",
  "PICLAW_PROGRESSIVE_COMPACTION",
  "PICLAW_SMART_COMPACTION_REASONING",
  "PICLAW_PROGRESS_WATCHDOG_ENABLED",
  "PICLAW_PROGRESS_WATCHDOG_TIMEOUT_MS",
  "PICLAW_AUTO_COMPACTION_SCOPE",
  "PICLAW_COMPACTION_HARD_CEILING_PERCENT",
  "PICLAW_COMPACTION_WARNING_THRESHOLD",
  "PICLAW_TOOL_RESULT_COMPACTION_ENABLED",
  "PICLAW_TOOL_RESULT_COMPACTION_TOOLS",
  "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_ENABLED",
  "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_MAX_INPUT_CHARS",
  "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_MAX_TOKENS",
  "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_TIMEOUT_MS",
  "PICLAW_TOOL_OUTPUT_STORE_THRESHOLDS_BY_TOOL",
  "PICLAW_TOOL_OUTPUT_STORE_BYTES",
  "PICLAW_TOOL_OUTPUT_STORE_LINES",
  "PICLAW_TOOL_OUTPUT_PREVIEW_LINES",
  "PICLAW_TOOL_OUTPUT_PREVIEW_LINE_CHARS",
  "PICLAW_WORKSPACE_SEARCH_ROOTS",
  "PICLAW_INTERNAL_SECRET",
  "PICLAW_REMOTE_INTEROP_ENABLED",
  "PICLAW_REMOTE_INTEROP_ALLOW_HTTP",
  "PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK",
  "PICLAW_REMOTE_INSTANCE_NAME",
  "PICLAW_REMOTE_SHORT_CIRCUIT_ENABLED",
  "PICLAW_REMOTE_INTEROP_DECISION_MODEL",
  "PICLAW_WEB_EXTERNAL_URL",
  "PICLAW_SCOPED_MODELS_ONLY",
  "PICLAW_LOG_LEVEL",
  "LOG_LEVEL",
  "PICLAW_AGENT_LOG_RETENTION_MS",
  "PICLAW_AGENT_LOG_RETENTION_DAYS",
  "PICLAW_AGENT_LOG_CLEANUP_INTERVAL_MS",
  "PICLAW_MAIN_SESSION_IDLE_TTL_MS",
  "PICLAW_SIDE_SESSION_IDLE_TTL_MS",
  "PICLAW_SESSION_IDLE_TTL_MS",
  "PICLAW_SESSION_CLEANUP_INTERVAL_MS",
  "PICLAW_MAIN_SESSION_POOL_MAX_SIZE",
  "PICLAW_SESSION_POOL_MAX_SIZE",
  "PICLAW_MAIN_SESSION_PRESSURE_RSS_BYTES",
  "PICLAW_MAIN_SESSION_PRESSURE_IDLE_TTL_MS",
  "PICLAW_MAIN_SESSION_PRESSURE_POOL_MAX_SIZE",
  "PICLAW_TOOL_OUTPUT_RETENTION_MS",
  "PICLAW_TOOL_OUTPUT_RETENTION_DAYS",
  "PICLAW_TOOL_OUTPUT_CLEANUP_INTERVAL_MS",
  "PICLAW_GITHUB_COPILOT_DYNAMIC_MODELS",
  "PICLAW_GITHUB_COPILOT_MODELS_TIMEOUT_MS",
  "PICLAW_MCP_TOOL_TIMEOUT_MS",
  "PICLAW_PACKAGE_ROOT",
  "PICLAW_UNKNOWN_MODEL_CONTEXT_WINDOW",
  "PICLAW_WORKSPACE_SEARCH_EXTENSIONS",
]);

import { pickString, pickNumber, pickBoolean, pickStringArray } from "./config-helpers.js";
import type { RuntimeTimingConfig } from "./config-helpers.js";
export { pickString, pickNumber, pickBoolean, pickStringArray };
export type { RuntimeTimingConfig };

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

// ---------------------------------------------------------------------------
// Filesystem paths – all env-configurable for flexible volume layouts.
// Defaults assume /workspace is the persistent external volume.
// ---------------------------------------------------------------------------

/** Root of the persistent workspace (bind-mounted volume). */
export function getWorkspaceDir(): string {
  return resolve(CLI_WORKSPACE || process.env.PICLAW_WORKSPACE || "/workspace");
}

export const WORKSPACE_DIR = getWorkspaceDir();
/** Directory for the SQLite database and related state. */
export const STORE_DIR = resolve(
  CLI_WORKSPACE ? `${WORKSPACE_DIR}/.piclaw/store` : (process.env.PICLAW_STORE || `${WORKSPACE_DIR}/.piclaw/store`)
);
/** Directory for runtime data (sessions, IPC files, etc.). */
export const DATA_DIR = resolve(
  CLI_WORKSPACE ? `${WORKSPACE_DIR}/.piclaw/data` : (process.env.PICLAW_DATA || `${WORKSPACE_DIR}/.piclaw/data`)
);

// ---------------------------------------------------------------------------
// TLS – optional HTTPS support for the web channel.
// ---------------------------------------------------------------------------

const DEFAULT_TLS_CERT_PATH = resolve(WORKSPACE_DIR, ".piclaw", "certs", "sandbox.local.crt");
const DEFAULT_TLS_KEY_PATH = resolve(WORKSPACE_DIR, ".piclaw", "certs", "sandbox.local.key");
/** True when default self-signed TLS certificates exist on disk. */
const HAS_DEFAULT_TLS = existsSync(DEFAULT_TLS_CERT_PATH) && existsSync(DEFAULT_TLS_KEY_PATH);

// ---------------------------------------------------------------------------
// JSON config file – loaded once and merged with env/CLI values below.
// ---------------------------------------------------------------------------

/** Absolute path to the JSON config file. */
export const PICLAW_CONFIG_PATH = resolve(WORKSPACE_DIR, ".piclaw", "config.json");

/** Resolve the config path at call time so tests can override PICLAW_WORKSPACE. */
export function getConfigPath(): string {
  const ws = process.env.PICLAW_WORKSPACE?.trim();
  return ws ? resolve(ws, ".piclaw", "config.json") : PICLAW_CONFIG_PATH;
}

const piclawConfig = readJsonConfig(PICLAW_CONFIG_PATH);

// Sub-objects inside the config file for namespaced settings.
const pushoverConfig =
  piclawConfig.pushover && typeof piclawConfig.pushover === "object"
    ? (piclawConfig.pushover as Record<string, unknown>)
    : piclawConfig;
const assistantConfig =
  piclawConfig.assistant && typeof piclawConfig.assistant === "object"
    ? (piclawConfig.assistant as Record<string, unknown>)
    : piclawConfig;
const userConfig =
  piclawConfig.user && typeof piclawConfig.user === "object"
    ? (piclawConfig.user as Record<string, unknown>)
    : piclawConfig;
const webConfig =
  piclawConfig.web && typeof piclawConfig.web === "object"
    ? (piclawConfig.web as Record<string, unknown>)
    : piclawConfig;
const toolsConfig =
  piclawConfig.tools && typeof piclawConfig.tools === "object"
    ? (piclawConfig.tools as Record<string, unknown>)
    : piclawConfig;
const modelsConfig =
  piclawConfig.models && typeof piclawConfig.models === "object"
    ? (piclawConfig.models as Record<string, unknown>)
    : piclawConfig;
const compactionConfig =
  piclawConfig.compaction && typeof piclawConfig.compaction === "object"
    ? (piclawConfig.compaction as Record<string, unknown>)
    : piclawConfig;

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
const configWebTotpSecret = pickString(webConfig, [
  "totpSecret",
  "totp_secret",
  "webTotpSecret",
  "web_totp_secret",
  "PICLAW_WEB_TOTP_SECRET",
  "PICLAW_TOTP_SECRET",
]);
const configWebTotpWindow = pickNumber(webConfig, [
  "totpWindow",
  "totp_window",
  "webTotpWindow",
  "web_totp_window",
  "PICLAW_WEB_TOTP_WINDOW",
]);
const configWebSessionTtl = pickNumber(webConfig, [
  "sessionTtl",
  "session_ttl",
  "webSessionTtl",
  "web_session_ttl",
  "PICLAW_WEB_SESSION_TTL",
]);
const configWebInternalSecret = pickString(webConfig, [
  "internalSecret",
  "internal_secret",
  "webInternalSecret",
  "web_internal_secret",
  "PICLAW_WEB_INTERNAL_SECRET",
  "PICLAW_INTERNAL_SECRET",
]);
const configWebWidgetToken = pickString(webConfig, [
  "widgetToken",
  "widget_token",
  "webWidgetToken",
  "web_widget_token",
  "PICLAW_WEB_WIDGET_TOKEN",
]);
const configWebPasskeyMode = pickString(webConfig, [
  "passkeyMode",
  "passkey_mode",
  "webPasskeyMode",
  "web_passkey_mode",
  "PICLAW_WEB_PASSKEY_MODE",
]);
const configWebIdleTimeout = pickNumber(webConfig, [
  "idleTimeout",
  "idle_timeout",
  "webIdleTimeout",
  "web_idle_timeout",
  "PICLAW_WEB_IDLE_TIMEOUT",
]);
const configWebPushSubscriptionCap = pickNumber(webConfig, [
  "pushSubscriptionCap",
  "push_subscription_cap",
  "webPushSubscriptionCap",
  "web_push_subscription_cap",
  "PICLAW_WEB_PUSH_SUBSCRIPTION_CAP",
]);
const configWebPushVapidSubject = pickString(webConfig, [
  "pushVapidSubject",
  "push_vapid_subject",
  "webPushVapidSubject",
  "web_push_vapid_subject",
  "PICLAW_WEB_PUSH_VAPID_SUBJECT",
]);
const configWebTerminalImageProtocol = pickString(webConfig, [
  "terminalImageProtocol",
  "terminal_image_protocol",
  "webTerminalImageProtocol",
  "web_terminal_image_protocol",
  "PICLAW_TERMINAL_IMAGE_PROTOCOL",
]);
const configWebComposeUploadLimitMb = pickNumber(webConfig, [
  "composeUploadLimitMb",
  "compose_upload_limit_mb",
  "webComposeUploadLimitMb",
  "web_compose_upload_limit_mb",
  "PICLAW_WEB_COMPOSE_UPLOAD_LIMIT_MB",
]);
const configWebWorkspaceUploadLimitMb = pickNumber(webConfig, [
  "workspaceUploadLimitMb",
  "workspace_upload_limit_mb",
  "webWorkspaceUploadLimitMb",
  "web_workspace_upload_limit_mb",
  "PICLAW_WEB_WORKSPACE_UPLOAD_LIMIT_MB",
]);
const configTrustProxy = pickBoolean(webConfig, [
  "trustProxy",
  "trust_proxy",
  "PICLAW_TRUST_PROXY",
]);

function getDomainConfigOptions(): DomainConfigRuntimeOptions {
  return {
    configPath: getConfigPath(),
    env: { ...envConfig, ...process.env },
  };
}

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
  level: ReturnType<typeof parseLogLevel>;
}

/** Grouped logging settings. */
export const LOGGING_CONFIG = Object.freeze<LoggingConfig>({
  level: parseLogLevel(
    process.env.PICLAW_LOG_LEVEL ||
      envConfig.PICLAW_LOG_LEVEL ||
      process.env.LOG_LEVEL ||
      envConfig.LOG_LEVEL ||
      getConfiguredLogLevel(),
  ),
});

/** Return grouped logging settings for runtime wiring and tests. */
export function getLoggingConfig(): Readonly<LoggingConfig> {
  return LOGGING_CONFIG;
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
// Agent timeout settings – how long a single agent turn may run.
// ---------------------------------------------------------------------------

/** Typed agent turn timeout settings grouped for runtime and handler wiring. */
export interface AgentRuntimeConfig {
  timeoutMs: number;
  backgroundTimeoutMs: number;
}

interface AgentDomainConfig extends AgentRuntimeConfig {
  toolUseMessageBudget: number;
  midTurnToolExecutionHardCeiling: number;
}

const legacyTurnMaxToolUseMessages = pickNumber(piclawConfig, [
  "turnMaxToolUseMessages",
  "turn_max_tool_use_messages",
  "toolUseBudget",
  "tool_use_budget",
  "PICLAW_TURN_MAX_TOOL_USE_MESSAGES",
]);
const configMidTurnToolExecutionHardCeiling = pickNumber(piclawConfig, [
  "midTurnToolExecutionHardCeiling",
  "mid_turn_tool_execution_hard_ceiling",
  "PICLAW_MID_TURN_TOOL_EXECUTION_HARD_CEILING",
]);

const agentRuntimeDomainSchema = registerDomainConfig<AgentDomainConfig>({
  domain: "agent",
  fields: {
    timeoutMs: integerField({
      key: "timeoutMs",
      owner: "agent-runtime",
      defaultValue: 3_600_000,
      min: 1,
      bounds: "positive integer ms",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [
        { envKey: "PICLAW_AGENT_TIMEOUT", replacement: "domains.agent.timeoutMs", removalVersion: "3.0.0", parse: (raw) => Number.parseInt(raw, 10), skipInvalid: true },
        { envKey: "AGENT_TIMEOUT", replacement: "domains.agent.timeoutMs", removalVersion: "3.0.0", parse: (raw) => Number.parseInt(raw, 10), skipInvalid: true },
      ],
    }),
    backgroundTimeoutMs: integerField({
      key: "backgroundTimeoutMs",
      owner: "agent-runtime",
      defaultValue: 0,
      min: 0,
      bounds: ">=0 ms",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [
        { envKey: "PICLAW_BACKGROUND_AGENT_TIMEOUT", replacement: "domains.agent.backgroundTimeoutMs", removalVersion: "3.0.0", parse: (raw) => Number.parseInt(raw, 10), skipInvalid: true },
        { envKey: "AGENT_TIMEOUT_BACKGROUND", replacement: "domains.agent.backgroundTimeoutMs", removalVersion: "3.0.0", parse: (raw) => Number.parseInt(raw, 10), skipInvalid: true },
      ],
    }),
    toolUseMessageBudget: integerField({
      key: "toolUseMessageBudget",
      owner: "agent-runtime",
      defaultValue: legacyTurnMaxToolUseMessages ?? 64,
      min: 1,
      max: 512,
      bounds: "1..512 messages (Settings writes clamp to >=8)",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_TURN_MAX_TOOL_USE_MESSAGES", replacement: "domains.agent.toolUseMessageBudget", removalVersion: "3.0.0" }],
    }),
    midTurnToolExecutionHardCeiling: integerField({
      key: "midTurnToolExecutionHardCeiling",
      owner: "agent-runtime",
      defaultValue: configMidTurnToolExecutionHardCeiling ?? 48,
      min: 1,
      max: 512,
      bounds: "1..512 executed tools",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_MID_TURN_TOOL_EXECUTION_HARD_CEILING", replacement: "domains.agent.midTurnToolExecutionHardCeiling", removalVersion: "3.0.0", parse: (raw) => { const value = Number(raw); return Number.isFinite(value) && value > 0 ? Math.min(512, Math.max(1, Math.round(value))) : 0; }, skipInvalid: true }],
    }),
  },
});

const AGENT_DOMAIN_CONFIG = readDomainConfig(agentRuntimeDomainSchema, getDomainConfigOptions());

const legacyWorkspaceSearchRoots = pickStringArray(toolsConfig, [
  "workspaceSearchRoots",
  "workspace_search_roots",
  "PICLAW_WORKSPACE_SEARCH_ROOTS",
]);
const legacyWorkspaceSearchExtensions = pickStringArray(toolsConfig, [
  "workspaceSearchExtensions",
  "workspace_search_extensions",
  "PICLAW_WORKSPACE_SEARCH_EXTENSIONS",
]);
const legacyScopedModelsOnly = pickBoolean(modelsConfig, [
  "scopedModelsOnly",
  "scoped_models_only",
  "PICLAW_SCOPED_MODELS_ONLY",
]);

/** Optional per-tool compaction threshold overrides. */
export interface ToolResultCompactionThresholdPolicy {
  bytes?: number;
  lines?: number;
}

/** Typed provider/tool integration settings migrated from runtime env support. */
export interface ToolsIntegrationConfig {
  githubCopilotDynamicModels: boolean;
  githubCopilotModelsTimeoutMs: number;
  mcpToolTimeoutMs: number;
  packageRoot: string;
  unknownModelContextWindow: number;
  scopedModelsOnly: boolean;
  workspaceSearchRoots: string[];
  workspaceSearchExtensions: string[];
  toolOutputStoreBytes: number;
  toolOutputStoreLines: number;
  toolOutputPreviewLines: number;
  toolOutputPreviewLineChars: number;
  toolOutputRetentionMs: number;
  toolOutputCleanupIntervalMs: number;
  toolResultCompactionEnabled: boolean;
  toolResultCompactionTools: string[];
  toolResultCompactionThresholdsByTool: Record<string, ToolResultCompactionThresholdPolicy>;
  toolResultSemanticSummaryEnabled: boolean;
  toolResultSemanticSummaryMaxInputChars: number;
  toolResultSemanticSummaryMaxTokens: number;
  toolResultSemanticSummaryTimeoutMs: number;
}

function parseLegacyCopilotDynamicModels(raw: string): boolean {
  return !/^(0|false|no)$/i.test(raw.trim());
}

const toolsIntegrationDomainSchema = registerDomainConfig<ToolsIntegrationConfig>({
  domain: "tools",
  fields: {
    githubCopilotDynamicModels: boolField({
      key: "githubCopilotDynamicModels",
      owner: "tools",
      defaultValue: true,
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{
        envKey: "PICLAW_GITHUB_COPILOT_DYNAMIC_MODELS",
        replacement: "domains.tools.githubCopilotDynamicModels",
        removalVersion: "3.0.0",
        parse: parseLegacyCopilotDynamicModels,
      }],
    }),
    githubCopilotModelsTimeoutMs: integerField({
      key: "githubCopilotModelsTimeoutMs",
      owner: "tools",
      defaultValue: 3_500,
      min: 500,
      bounds: ">=500 ms",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{
        envKey: "PICLAW_GITHUB_COPILOT_MODELS_TIMEOUT_MS",
        replacement: "domains.tools.githubCopilotModelsTimeoutMs",
        removalVersion: "3.0.0",
        parse: (raw) => Math.max(500, Number(raw)),
        skipInvalid: true,
      }],
    }),
    mcpToolTimeoutMs: integerField({
      key: "mcpToolTimeoutMs",
      owner: "tools",
      defaultValue: 120_000,
      min: 0,
      bounds: ">=0 ms; 0 disables the outer wrapper timeout",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{
        envKey: "PICLAW_MCP_TOOL_TIMEOUT_MS",
        replacement: "domains.tools.mcpToolTimeoutMs",
        removalVersion: "3.0.0",
        parse: (raw) => Number(raw),
        skipInvalid: true,
      }],
    }),
    packageRoot: stringField({
      key: "packageRoot",
      owner: "tools",
      defaultValue: "",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_PACKAGE_ROOT", replacement: "domains.tools.packageRoot", removalVersion: "3.0.0" }],
    }),
    unknownModelContextWindow: integerField({
      key: "unknownModelContextWindow",
      owner: "tools",
      defaultValue: 64_000,
      min: 1,
      bounds: "positive integer tokens",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_UNKNOWN_MODEL_CONTEXT_WINDOW", replacement: "domains.tools.unknownModelContextWindow", removalVersion: "3.0.0", skipInvalid: true }],
    }),
    scopedModelsOnly: boolField({
      key: "scopedModelsOnly",
      owner: "tools",
      defaultValue: legacyScopedModelsOnly ?? false,
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_SCOPED_MODELS_ONLY", replacement: "domains.tools.scopedModelsOnly", removalVersion: "3.0.0", skipInvalid: true }],
    }),
    workspaceSearchRoots: {
      key: "workspaceSearchRoots",
      owner: "workspace",
      type: "json",
      defaultValue: legacyWorkspaceSearchRoots ?? ["notes", ".pi/skills"],
      validate(value: unknown) {
        if (!Array.isArray(value) || !value.every((entry) => typeof entry === "string")) throw new Error("Invalid workspace search roots");
        return value.map((entry) => entry.trim()).filter(Boolean);
      },
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_WORKSPACE_SEARCH_ROOTS", replacement: "domains.tools.workspaceSearchRoots", removalVersion: "3.0.0", parse: (raw) => raw.split(","), skipInvalid: true }],
    },
    workspaceSearchExtensions: {
      key: "workspaceSearchExtensions",
      owner: "workspace",
      type: "json",
      defaultValue: legacyWorkspaceSearchExtensions ?? [],
      validate(value: unknown) {
        if (!Array.isArray(value) || !value.every((entry) => typeof entry === "string")) throw new Error("Invalid workspace search extensions");
        return value.map((entry) => entry.trim()).filter(Boolean);
      },
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_WORKSPACE_SEARCH_EXTENSIONS", replacement: "domains.tools.workspaceSearchExtensions", removalVersion: "3.0.0", parse: (raw) => raw.split(","), skipInvalid: true }],
    },
    toolOutputStoreBytes: integerField({ key: "toolOutputStoreBytes", owner: "tools", defaultValue: 5_000, min: 500, max: 100_000, bounds: "500..100000 bytes", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_TOOL_OUTPUT_STORE_BYTES", replacement: "domains.tools.toolOutputStoreBytes", removalVersion: "3.0.0", skipInvalid: true }] }),
    toolOutputStoreLines: integerField({ key: "toolOutputStoreLines", owner: "tools", defaultValue: 40, min: 1, bounds: "positive integer lines", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_TOOL_OUTPUT_STORE_LINES", replacement: "domains.tools.toolOutputStoreLines", removalVersion: "3.0.0", skipInvalid: true }] }),
    toolOutputPreviewLines: integerField({ key: "toolOutputPreviewLines", owner: "tools", defaultValue: 8, min: 1, bounds: "positive integer lines", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_TOOL_OUTPUT_PREVIEW_LINES", replacement: "domains.tools.toolOutputPreviewLines", removalVersion: "3.0.0", skipInvalid: true }] }),
    toolOutputPreviewLineChars: integerField({ key: "toolOutputPreviewLineChars", owner: "tools", defaultValue: 200, min: 1, bounds: "positive integer characters", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_TOOL_OUTPUT_PREVIEW_LINE_CHARS", replacement: "domains.tools.toolOutputPreviewLineChars", removalVersion: "3.0.0", skipInvalid: true }] }),
    toolOutputRetentionMs: integerField({
      key: "toolOutputRetentionMs",
      owner: "tools",
      defaultValue: DEFAULT_LOG_RETENTION_CAP_MS,
      min: 1,
      max: DEFAULT_LOG_RETENTION_CAP_MS,
      bounds: `1..${DEFAULT_LOG_RETENTION_CAP_MS} ms`,
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [
        { envKey: "PICLAW_TOOL_OUTPUT_RETENTION_MS", replacement: "domains.tools.toolOutputRetentionMs", removalVersion: "3.0.0", parse: (raw) => { const value = parsePositiveInteger(raw); return value === undefined ? undefined : Math.min(DEFAULT_LOG_RETENTION_CAP_MS, value); }, skipInvalid: true },
        { envKey: "PICLAW_TOOL_OUTPUT_RETENTION_DAYS", replacement: "domains.tools.toolOutputRetentionMs", removalVersion: "3.0.0", parse: (raw) => { const days = parsePositiveInteger(raw); return days === undefined ? undefined : Math.min(DEFAULT_LOG_RETENTION_CAP_MS, days * DAY_MS); }, skipInvalid: true },
      ],
    }),
    toolOutputCleanupIntervalMs: integerField({
      key: "toolOutputCleanupIntervalMs",
      owner: "tools",
      defaultValue: 15 * 60 * 1000,
      min: 1,
      bounds: "positive integer ms",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_TOOL_OUTPUT_CLEANUP_INTERVAL_MS", replacement: "domains.tools.toolOutputCleanupIntervalMs", removalVersion: "3.0.0", parse: (raw) => parsePositiveInteger(raw), skipInvalid: true }],
    }),
    toolResultCompactionEnabled: boolField({
      key: "toolResultCompactionEnabled",
      owner: "tools",
      defaultValue: pickBoolean(compactionConfig, ["toolResultCompactionEnabled", "tool_result_compaction_enabled", "PICLAW_TOOL_RESULT_COMPACTION_ENABLED"]) ?? true,
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_TOOL_RESULT_COMPACTION_ENABLED", replacement: "domains.tools.toolResultCompactionEnabled", removalVersion: "3.0.0", skipInvalid: true }],
    }),
    toolResultCompactionTools: {
      key: "toolResultCompactionTools",
      owner: "tools",
      type: "json",
      defaultValue: parseToolResultCompactionTools(compactionConfig.toolResultCompactionTools ?? compactionConfig.tool_result_compaction_tools) ?? ["bash", "powershell", "exec_batch"],
      validate(value: unknown) {
        if (typeof value !== "string" && !Array.isArray(value)) throw new Error("Invalid tool result compaction tools");
        return normalizeToolResultCompactionTools(value);
      },
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_TOOL_RESULT_COMPACTION_TOOLS", replacement: "domains.tools.toolResultCompactionTools", removalVersion: "3.0.0", parse: (raw) => raw.trim() ? raw : undefined, skipInvalid: true }],
    },
    toolResultCompactionThresholdsByTool: {
      key: "toolResultCompactionThresholdsByTool",
      owner: "tools",
      type: "json",
      defaultValue: normalizeToolResultCompactionThresholdsByTool(compactionConfig.toolResultThresholdsByTool ?? compactionConfig.tool_result_thresholds_by_tool),
      validate(value: unknown) {
        if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid tool result compaction thresholds");
        return Object.freeze(normalizeToolResultCompactionThresholdsByTool(value));
      },
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_TOOL_OUTPUT_STORE_THRESHOLDS_BY_TOOL", replacement: "domains.tools.toolResultCompactionThresholdsByTool", removalVersion: "3.0.0", parse: (raw) => parseToolResultCompactionThresholdsByTool(raw) ?? undefined, skipInvalid: true }],
    },
    toolResultSemanticSummaryEnabled: boolField({
      key: "toolResultSemanticSummaryEnabled",
      owner: "tools",
      defaultValue: pickBoolean(compactionConfig, ["toolResultSemanticSummaryEnabled", "tool_result_semantic_summary_enabled", "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_ENABLED"]) ?? true,
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_ENABLED", replacement: "domains.tools.toolResultSemanticSummaryEnabled", removalVersion: "3.0.0", skipInvalid: true }],
    }),
    toolResultSemanticSummaryMaxInputChars: integerField({
      key: "toolResultSemanticSummaryMaxInputChars",
      owner: "tools",
      defaultValue: parsePositiveIntegerWithBounds(
        pickNumber(compactionConfig, ["toolResultSemanticSummaryMaxInputChars", "tool_result_semantic_summary_max_input_chars", "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_MAX_INPUT_CHARS"]),
        12_000,
        500,
        200_000,
      ),
      min: 500,
      max: 200_000,
      bounds: "500..200000 characters",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_MAX_INPUT_CHARS", replacement: "domains.tools.toolResultSemanticSummaryMaxInputChars", removalVersion: "3.0.0", parse: (raw) => parsePositiveInteger(raw), skipInvalid: true }],
    }),
    toolResultSemanticSummaryMaxTokens: integerField({
      key: "toolResultSemanticSummaryMaxTokens",
      owner: "tools",
      defaultValue: parsePositiveIntegerWithBounds(
        pickNumber(compactionConfig, ["toolResultSemanticSummaryMaxTokens", "tool_result_semantic_summary_max_tokens", "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_MAX_TOKENS"]),
        320,
        64,
        4_096,
      ),
      min: 64,
      max: 4_096,
      bounds: "64..4096 tokens",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_MAX_TOKENS", replacement: "domains.tools.toolResultSemanticSummaryMaxTokens", removalVersion: "3.0.0", parse: (raw) => parsePositiveInteger(raw), skipInvalid: true }],
    }),
    toolResultSemanticSummaryTimeoutMs: integerField({
      key: "toolResultSemanticSummaryTimeoutMs",
      owner: "tools",
      defaultValue: parsePositiveDurationMs(
        pickNumber(compactionConfig, ["toolResultSemanticSummaryTimeoutMs", "tool_result_semantic_summary_timeout_ms", "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_TIMEOUT_MS"]),
        12_000,
      ),
      min: 1,
      bounds: "positive integer ms",
      persistence: "json-config",
      precedence: ["compat-env", "persisted", "default"],
      secretClass: "none",
      compatibilityEnv: [{ envKey: "PICLAW_TOOL_RESULT_SEMANTIC_SUMMARY_TIMEOUT_MS", replacement: "domains.tools.toolResultSemanticSummaryTimeoutMs", removalVersion: "3.0.0", parse: (raw) => parsePositiveInteger(raw), skipInvalid: true }],
    }),
  },
});

/** Read current tools integration configuration without mutating process.env. */
export function getToolsIntegrationConfig(): Readonly<ToolsIntegrationConfig> {
  return Object.freeze(readDomainConfig(toolsIntegrationDomainSchema, getDomainConfigOptions()));
}

/** Grouped agent turn timeout settings. */
export const AGENT_RUNTIME_CONFIG = Object.freeze<AgentRuntimeConfig>({
  timeoutMs: AGENT_DOMAIN_CONFIG.timeoutMs,
  backgroundTimeoutMs: AGENT_DOMAIN_CONFIG.backgroundTimeoutMs,
});

/** Return grouped agent timeout settings for runtime wiring and tests. */
export function getAgentRuntimeConfig(): Readonly<AgentRuntimeConfig> {
  return AGENT_RUNTIME_CONFIG;
}

/** Typed session-pool capacity and memory-pressure policy. */
export interface SessionPoolConfig {
  mainIdleTtlMs: number;
  sideIdleTtlMs: number;
  cleanupIntervalMs: number;
  mainSessionPoolMaxSize: number;
  memoryPressureRssBytes: number;
  memoryPressureMainIdleTtlMs: number;
  memoryPressureMainSessionPoolMaxSize: number;
}

const sessionPoolDomainSchema = registerDomainConfig<SessionPoolConfig>({
  domain: "sessionPool",
  fields: {
    mainIdleTtlMs: integerField({ key: "mainIdleTtlMs", owner: "agent-runtime", defaultValue: 180_000, min: 1, bounds: "positive integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [
      { envKey: "PICLAW_MAIN_SESSION_IDLE_TTL_MS", replacement: "domains.sessionPool.mainIdleTtlMs", removalVersion: "3.0.0", skipInvalid: true },
      { envKey: "PICLAW_SESSION_IDLE_TTL_MS", replacement: "domains.sessionPool.mainIdleTtlMs and sideIdleTtlMs", removalVersion: "3.0.0", skipInvalid: true },
    ] }),
    sideIdleTtlMs: integerField({ key: "sideIdleTtlMs", owner: "agent-runtime", defaultValue: 60_000, min: 1, bounds: "positive integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [
      { envKey: "PICLAW_SIDE_SESSION_IDLE_TTL_MS", replacement: "domains.sessionPool.sideIdleTtlMs", removalVersion: "3.0.0", skipInvalid: true },
      { envKey: "PICLAW_SESSION_IDLE_TTL_MS", replacement: "domains.sessionPool.mainIdleTtlMs and sideIdleTtlMs", removalVersion: "3.0.0", skipInvalid: true },
    ] }),
    cleanupIntervalMs: integerField({ key: "cleanupIntervalMs", owner: "agent-runtime", defaultValue: 30_000, min: 1, bounds: "positive integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SESSION_CLEANUP_INTERVAL_MS", replacement: "domains.sessionPool.cleanupIntervalMs", removalVersion: "3.0.0", skipInvalid: true }] }),
    mainSessionPoolMaxSize: integerField({ key: "mainSessionPoolMaxSize", owner: "agent-runtime", defaultValue: 1, min: 0, bounds: "non-negative integer", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [
      { envKey: "PICLAW_MAIN_SESSION_POOL_MAX_SIZE", replacement: "domains.sessionPool.mainSessionPoolMaxSize", removalVersion: "3.0.0", skipInvalid: true },
      { envKey: "PICLAW_SESSION_POOL_MAX_SIZE", replacement: "domains.sessionPool.mainSessionPoolMaxSize", removalVersion: "3.0.0", skipInvalid: true },
    ] }),
    memoryPressureRssBytes: integerField({ key: "memoryPressureRssBytes", owner: "agent-runtime", defaultValue: 384 * 1024 * 1024, min: 0, bounds: "non-negative integer bytes", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_MAIN_SESSION_PRESSURE_RSS_BYTES", replacement: "domains.sessionPool.memoryPressureRssBytes", removalVersion: "3.0.0", skipInvalid: true }] }),
    memoryPressureMainIdleTtlMs: integerField({ key: "memoryPressureMainIdleTtlMs", owner: "agent-runtime", defaultValue: 60_000, min: 1, bounds: "positive integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_MAIN_SESSION_PRESSURE_IDLE_TTL_MS", replacement: "domains.sessionPool.memoryPressureMainIdleTtlMs", removalVersion: "3.0.0", skipInvalid: true }] }),
    memoryPressureMainSessionPoolMaxSize: integerField({ key: "memoryPressureMainSessionPoolMaxSize", owner: "agent-runtime", defaultValue: 1, min: 0, bounds: "non-negative integer", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_MAIN_SESSION_PRESSURE_POOL_MAX_SIZE", replacement: "domains.sessionPool.memoryPressureMainSessionPoolMaxSize", removalVersion: "3.0.0", skipInvalid: true }] }),
  },
});

/** Return session-pool capacity and pressure settings resolved for a new pool instance. */
export function getSessionPoolConfig(): Readonly<SessionPoolConfig> {
  return readDomainConfig(sessionPoolDomainSchema, getDomainConfigOptions());
}

/** Parse a numeric port string, falling back to `fallback` on failure. */
function parsePort(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

function parseOptionalIntegerArg(value: string | undefined): number | undefined {
  if (value === undefined) return undefined;
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? undefined : parsed;
}

function parseLegacyPushSubscriptionCap(value: string): number {
  const parsed = Number.parseInt(value || "32", 10);
  return Number.isFinite(parsed) ? Math.max(1, parsed) : 32;
}

function parseLegacyNonEmptyString(value: string, fallback: string): string {
  return value.trim() || fallback;
}

// ---------------------------------------------------------------------------
// Web channel configuration (HTTP server, TLS, auth).
// ---------------------------------------------------------------------------

const ENV_WEB_PORT = parseInt(process.env.PICLAW_WEB_PORT || "8080", 10);
const CLI_WEB_PORT = readCliArg("--port", "-p");
const CLI_WEB_HOST = readCliArg("--host");
const CLI_WEB_IDLE_TIMEOUT = readCliArg("--idle-timeout");
const CLI_WEB_IDLE_TIMEOUT_VALUE = parseOptionalIntegerArg(CLI_WEB_IDLE_TIMEOUT);
const CLI_WEB_TLS_CERT = readCliArg("--tls-cert");
const CLI_WEB_TLS_KEY = readCliArg("--tls-key");

/** Typed web server network/TLS settings grouped for WebChannel wiring. */
export interface WebServerConfig {
  port: number;
  host: string;
  idleTimeout: number;
  tlsCert: string;
  tlsKey: string;
}

/** Mutable web auth/session/runtime settings grouped for auth and UI wiring. */
export type WebUiMode = "classic" | "visual";
const WEB_PASSKEY_MODES = ["totp-fallback", "totp-only", "passkey-only"] as const;
export type WebPasskeyMode = (typeof WEB_PASSKEY_MODES)[number];

function parseWebPasskeyMode(value: unknown): WebPasskeyMode {
  if (typeof value !== "string") throw new Error("Invalid string domain config value for passkeyMode");
  const normalized = value.trim().toLowerCase();
  if ((WEB_PASSKEY_MODES as readonly string[]).includes(normalized)) return normalized as WebPasskeyMode;
  throw new Error("Domain config value is not allowed for passkeyMode");
}

export interface WebRuntimeConfig {
  uiMode: WebUiMode;
  totpSecret: string;
  totpWindow: number;
  sessionTtl: number;
  internalSecret: string;
  widgetToken: string;
  passkeyMode: WebPasskeyMode;
  terminalEnabled: boolean;
  terminalImageProtocol: string;
  pushSubscriptionCap: number;
  pushVapidSubject: string;
  composeUploadLimitMb: number;
  workspaceUploadLimitMb: number;
  notificationDebugLabels: boolean;
  vncAllowDirect: boolean;
  vncTargetsRaw: string;
  debugCardSubmissions: boolean;
  trustProxy: boolean;
}

export function isDefaultWebTerminalEnabled(platform = process.platform): boolean {
  return platform === "linux" || platform === "darwin";
}

export function isDefaultWebVncDirectEnabled(platform = process.platform): boolean {
  return platform === "linux" || platform === "darwin" || platform === "win32";
}

function clampComposeUploadLimitMb(value: unknown, fallback: number): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(512, Math.max(1, Math.round(parsed)));
}

function clampWorkspaceUploadLimitMb(value: unknown, fallback: number): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(1024, Math.max(1, Math.round(parsed)));
}

const legacyWebTotpWindow = pickNumber(piclawConfig, ["webTotpWindow", "totpWindow"]);
const legacyWebSessionTtl = pickNumber(piclawConfig, ["webSessionTtl", "sessionTtl"]);
const legacyWebPasskeyMode = pickString(piclawConfig, ["webPasskeyMode", "passkeyMode"]);
const legacyWebIdleTimeout = pickNumber(piclawConfig, ["webIdleTimeout", "idleTimeout"]);
const legacyWebPushSubscriptionCap = pickNumber(piclawConfig, ["webPushSubscriptionCap", "pushSubscriptionCap"]);
const legacyWebPushVapidSubject = pickString(piclawConfig, ["webPushVapidSubject", "pushVapidSubject"]);
const legacyWebTerminalImageProtocol = pickString(piclawConfig, ["webTerminalImageProtocol", "terminalImageProtocol"]);
const nestedWebTerminalEnabled = pickBoolean(webConfig, ["terminalEnabled", "webTerminalEnabled", "PICLAW_WEB_TERMINAL_ENABLED"]);
const legacyWebTerminalEnabled = pickBoolean(piclawConfig, ["webTerminalEnabled"]);
const nestedWebNotificationDebugLabels = pickBoolean(webConfig, ["notificationDebugLabels", "notification_debug_labels", "webNotificationDebugLabels", "PICLAW_WEB_NOTIFICATION_DEBUG_LABELS"]);
const legacyWebNotificationDebugLabels = pickBoolean(piclawConfig, ["webNotificationDebugLabels"]);
const nestedWebVncAllowDirect = pickBoolean(webConfig, ["vncAllowDirect", "vnc_allow_direct", "webVncAllowDirect", "PICLAW_WEB_VNC_ALLOW_DIRECT", "PICLAW_VNC_ALLOW_DIRECT"]);
const legacyWebVncAllowDirect = pickBoolean(piclawConfig, ["webVncAllowDirect"]);
const nestedWebVncTargets = pickString(webConfig, ["vncTargets", "vnc_targets", "webVncTargets", "PICLAW_WEB_VNC_TARGETS", "PICLAW_VNC_TARGETS"]);
const legacyWebVncTargets = pickString(piclawConfig, ["webVncTargets"]);
const legacyWebComposeUploadLimitMb = pickNumber(piclawConfig, ["webComposeUploadLimitMb", "composeUploadLimitMb"]);
const legacyWebWorkspaceUploadLimitMb = pickNumber(piclawConfig, ["webWorkspaceUploadLimitMb", "workspaceUploadLimitMb"]);
const legacyWebTrustProxy = pickBoolean(piclawConfig, ["trustProxy", "PICLAW_TRUST_PROXY"]);
const debugCards = pickBoolean(piclawConfig, ["debugCardSubmissions", "PICLAW_DEBUG_CARD_SUBMISSIONS"]);

function getWebOrdinaryDomainConfigOptions(): DomainConfigRuntimeOptions {
  const options = getDomainConfigOptions();
  if (CLI_WEB_IDLE_TIMEOUT_VALUE === undefined) return options;
  return {
    ...options,
    bootstrapValues: { idleTimeout: CLI_WEB_IDLE_TIMEOUT_VALUE },
  };
}

type WebOrdinaryDomainConfig = Pick<
  WebRuntimeConfig,
  | "uiMode"
  | "totpWindow"
  | "sessionTtl"
  | "passkeyMode"
  | "terminalEnabled"
  | "terminalImageProtocol"
  | "pushSubscriptionCap"
  | "pushVapidSubject"
  | "composeUploadLimitMb"
  | "workspaceUploadLimitMb"
  | "notificationDebugLabels"
  | "vncAllowDirect"
  | "debugCardSubmissions"
  | "trustProxy"
> & {
  idleTimeout: number;
  persistThinking: boolean;
  persistThinkingMaxChars: number;
  vncTargets: string;
};

const webOrdinaryDomainSchema = registerDomainConfig<WebOrdinaryDomainConfig>({
  domain: "web",
  fields: {
    uiMode: stringField({ key: "uiMode", owner: "web", defaultValue: "classic", allowedValues: ["classic", "visual"], persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_UI_MODE", replacement: "domains.web.uiMode", removalVersion: "3.0.0" }] }) as DomainConfigField<WebUiMode>,
    idleTimeout: integerField({ key: "idleTimeout", owner: "web", defaultValue: configWebIdleTimeout ?? legacyWebIdleTimeout ?? 0, min: 0, bounds: ">=0", persistence: "json-config", precedence: ["bootstrap-cli-env", "compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_IDLE_TIMEOUT", replacement: "domains.web.idleTimeout", removalVersion: "3.0.0" }] }),
    persistThinking: boolField({ key: "persistThinking", owner: "web", defaultValue: false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_PERSIST_THINKING", replacement: "domains.web.persistThinking", removalVersion: "3.0.0" }] }),
    persistThinkingMaxChars: integerField({ key: "persistThinkingMaxChars", owner: "web", defaultValue: 100000, min: 1, bounds: "positive integer", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_PERSIST_THINKING_MAX_CHARS", replacement: "domains.web.persistThinkingMaxChars", removalVersion: "3.0.0", parse: (raw) => { const parsed = Number(raw); return Number.isFinite(parsed) && parsed > 0 ? Math.trunc(parsed) : 100000; } }] }),
    totpWindow: integerField({ key: "totpWindow", owner: "web", defaultValue: configWebTotpWindow ?? legacyWebTotpWindow ?? 1, min: 0, bounds: ">=0", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_TOTP_WINDOW", replacement: "domains.web.totpWindow", removalVersion: "3.0.0" }] }),
    sessionTtl: integerField({ key: "sessionTtl", owner: "web", defaultValue: configWebSessionTtl ?? legacyWebSessionTtl ?? (7 * 24 * 60 * 60), min: 1, bounds: "positive integer", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_SESSION_TTL", replacement: "domains.web.sessionTtl", removalVersion: "3.0.0" }] }),
    passkeyMode: {
      ...stringField({ key: "passkeyMode", owner: "web", defaultValue: configWebPasskeyMode ?? legacyWebPasskeyMode ?? "totp-fallback", allowedValues: WEB_PASSKEY_MODES, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_PASSKEY_MODE", replacement: "domains.web.passkeyMode", removalVersion: "3.0.0" }] }),
      validate: parseWebPasskeyMode,
    } as DomainConfigField<WebPasskeyMode>,
    pushSubscriptionCap: integerField({ key: "pushSubscriptionCap", owner: "web", defaultValue: configWebPushSubscriptionCap ?? legacyWebPushSubscriptionCap ?? 32, min: 1, bounds: "positive integer", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_PUSH_SUBSCRIPTION_CAP", replacement: "domains.web.pushSubscriptionCap", removalVersion: "3.0.0", parse: parseLegacyPushSubscriptionCap }] }),
    pushVapidSubject: stringField({ key: "pushVapidSubject", owner: "web", defaultValue: configWebPushVapidSubject ?? legacyWebPushVapidSubject ?? "mailto:notifications@localhost.invalid", nonEmpty: true, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_PUSH_VAPID_SUBJECT", replacement: "domains.web.pushVapidSubject", removalVersion: "3.0.0", parse: (raw) => parseLegacyNonEmptyString(raw, "mailto:notifications@localhost.invalid") }] }),
    terminalEnabled: boolField({ key: "terminalEnabled", owner: "web", defaultValue: nestedWebTerminalEnabled ?? legacyWebTerminalEnabled ?? isDefaultWebTerminalEnabled(), persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_TERMINAL_ENABLED", replacement: "domains.web.terminalEnabled", removalVersion: "3.0.0" }] }),
    terminalImageProtocol: stringField({ key: "terminalImageProtocol", owner: "web", defaultValue: configWebTerminalImageProtocol ?? legacyWebTerminalImageProtocol ?? "iterm2", nonEmpty: true, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_TERMINAL_IMAGE_PROTOCOL", replacement: "domains.web.terminalImageProtocol", removalVersion: "3.0.0", parse: (raw) => parseLegacyNonEmptyString(raw, "iterm2") }] }),
    composeUploadLimitMb: integerField({ key: "composeUploadLimitMb", owner: "web", defaultValue: configWebComposeUploadLimitMb ?? legacyWebComposeUploadLimitMb ?? 32, min: 1, max: 512, bounds: "1..512", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_COMPOSE_UPLOAD_LIMIT_MB", replacement: "domains.web.composeUploadLimitMb", removalVersion: "3.0.0" }] }),
    workspaceUploadLimitMb: integerField({ key: "workspaceUploadLimitMb", owner: "web", defaultValue: configWebWorkspaceUploadLimitMb ?? legacyWebWorkspaceUploadLimitMb ?? 256, min: 1, max: 1024, bounds: "1..1024", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_WORKSPACE_UPLOAD_LIMIT_MB", replacement: "domains.web.workspaceUploadLimitMb", removalVersion: "3.0.0" }] }),
    notificationDebugLabels: boolField({ key: "notificationDebugLabels", owner: "web", defaultValue: nestedWebNotificationDebugLabels ?? legacyWebNotificationDebugLabels ?? false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_WEB_NOTIFICATION_DEBUG_LABELS", replacement: "domains.web.notificationDebugLabels", removalVersion: "3.0.0" }] }),
    vncAllowDirect: boolField({ key: "vncAllowDirect", owner: "web", defaultValue: nestedWebVncAllowDirect ?? legacyWebVncAllowDirect ?? isDefaultWebVncDirectEnabled(), persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [
      { envKey: "PICLAW_WEB_VNC_ALLOW_DIRECT", replacement: "domains.web.vncAllowDirect", removalVersion: "3.0.0" },
      { envKey: "PICLAW_VNC_ALLOW_DIRECT", replacement: "domains.web.vncAllowDirect", removalVersion: "3.0.0" },
    ] }),
    vncTargets: stringField({ key: "vncTargets", owner: "web", defaultValue: nestedWebVncTargets ?? legacyWebVncTargets ?? "", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [
      { envKey: "PICLAW_WEB_VNC_TARGETS", replacement: "domains.web.vncTargets", removalVersion: "3.0.0" },
      { envKey: "PICLAW_VNC_TARGETS", replacement: "domains.web.vncTargets", removalVersion: "3.0.0" },
    ] }),
    debugCardSubmissions: boolField({ key: "debugCardSubmissions", owner: "web", defaultValue: debugCards ?? false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_DEBUG_CARD_SUBMISSIONS", replacement: "domains.web.debugCardSubmissions", removalVersion: "3.0.0" }] }),
    trustProxy: boolField({ key: "trustProxy", owner: "web", defaultValue: configTrustProxy ?? legacyWebTrustProxy ?? false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_TRUST_PROXY", replacement: "domains.web.trustProxy", removalVersion: "3.0.0" }] }),
  },
});

const WEB_ORDINARY_DOMAIN_CONFIG = readDomainConfig(webOrdinaryDomainSchema, getWebOrdinaryDomainConfigOptions());

/** Grouped web server network/TLS settings. */
export const WEB_SERVER_CONFIG = Object.freeze<WebServerConfig>({
  port: parsePort(CLI_WEB_PORT, ENV_WEB_PORT),
  host: CLI_WEB_HOST || process.env.PICLAW_WEB_HOST || "0.0.0.0",
  idleTimeout: WEB_ORDINARY_DOMAIN_CONFIG.idleTimeout,
  tlsCert:
    CLI_WEB_TLS_CERT ||
    process.env.PICLAW_WEB_TLS_CERT ||
    envConfig.PICLAW_WEB_TLS_CERT ||
    (HAS_DEFAULT_TLS ? DEFAULT_TLS_CERT_PATH : ""),
  tlsKey:
    CLI_WEB_TLS_KEY ||
    process.env.PICLAW_WEB_TLS_KEY ||
    envConfig.PICLAW_WEB_TLS_KEY ||
    (HAS_DEFAULT_TLS ? DEFAULT_TLS_KEY_PATH : ""),
});

/** Return grouped web server settings for WebChannel wiring and tests. */
export function getWebServerConfig(): Readonly<WebServerConfig> {
  return WEB_SERVER_CONFIG;
}

/** Grouped web auth/session/runtime settings. `totpSecret` stays mutable for runtime resets. */
export const WEB_RUNTIME_CONFIG: WebRuntimeConfig = Object.seal({
  uiMode: WEB_ORDINARY_DOMAIN_CONFIG.uiMode,
  totpSecret:
    process.env.PICLAW_WEB_TOTP_SECRET ||
    envConfig.PICLAW_WEB_TOTP_SECRET ||
    configWebTotpSecret ||
    "",
  totpWindow: WEB_ORDINARY_DOMAIN_CONFIG.totpWindow,
  sessionTtl: WEB_ORDINARY_DOMAIN_CONFIG.sessionTtl,
  internalSecret:
    process.env.PICLAW_INTERNAL_SECRET ||
    process.env.PICLAW_WEB_INTERNAL_SECRET ||
    envConfig.PICLAW_INTERNAL_SECRET ||
    envConfig.PICLAW_WEB_INTERNAL_SECRET ||
    configWebInternalSecret ||
    "",
  widgetToken:
    process.env.PICLAW_WEB_WIDGET_TOKEN ||
    envConfig.PICLAW_WEB_WIDGET_TOKEN ||
    configWebWidgetToken ||
    "",
  passkeyMode: WEB_ORDINARY_DOMAIN_CONFIG.passkeyMode,
  terminalEnabled: WEB_ORDINARY_DOMAIN_CONFIG.terminalEnabled,
  terminalImageProtocol: WEB_ORDINARY_DOMAIN_CONFIG.terminalImageProtocol,
  pushSubscriptionCap: WEB_ORDINARY_DOMAIN_CONFIG.pushSubscriptionCap,
  pushVapidSubject: WEB_ORDINARY_DOMAIN_CONFIG.pushVapidSubject,
  composeUploadLimitMb: WEB_ORDINARY_DOMAIN_CONFIG.composeUploadLimitMb,
  workspaceUploadLimitMb: WEB_ORDINARY_DOMAIN_CONFIG.workspaceUploadLimitMb,
  notificationDebugLabels: WEB_ORDINARY_DOMAIN_CONFIG.notificationDebugLabels,
  vncAllowDirect: WEB_ORDINARY_DOMAIN_CONFIG.vncAllowDirect,
  vncTargetsRaw: WEB_ORDINARY_DOMAIN_CONFIG.vncTargets,
  debugCardSubmissions: WEB_ORDINARY_DOMAIN_CONFIG.debugCardSubmissions,
  trustProxy: WEB_ORDINARY_DOMAIN_CONFIG.trustProxy,
});

/** Return grouped web auth/session/runtime settings for handlers and tests. */
export function getWebRuntimeConfig(): Readonly<WebRuntimeConfig> {
  return WEB_RUNTIME_CONFIG;
}

function readWebOrdinaryDomainConfig(): WebOrdinaryDomainConfig {
  return readDomainConfig(webOrdinaryDomainSchema, getWebOrdinaryDomainConfigOptions());
}

export function isPersistThinkingEnabled(): boolean {
  return readWebOrdinaryDomainConfig().persistThinking;
}

export function getPersistThinkingMaxChars(): number {
  return readWebOrdinaryDomainConfig().persistThinkingMaxChars;
}

/** Persist and apply the web terminal toggle so new requests see it immediately. */
export function setWebTerminalEnabled(enabled: boolean): boolean {
  return persistWebOrdinarySetting("terminalEnabled", Boolean(enabled));
}

export function setWebVncAllowDirect(enabled: boolean): boolean {
  return persistWebOrdinarySetting("vncAllowDirect", Boolean(enabled));
}

function persistWebOrdinarySetting<K extends keyof WebOrdinaryDomainConfig>(key: K, value: WebOrdinaryDomainConfig[K]): WebOrdinaryDomainConfig[K] {
  const resolved = writeDomainConfigField(webOrdinaryDomainSchema, getWebOrdinaryDomainConfigOptions(), key, value);
  const effectiveValue = resolved[key];
  WEB_ORDINARY_DOMAIN_CONFIG[key] = effectiveValue;
  if (key in WEB_RUNTIME_CONFIG) {
    (WEB_RUNTIME_CONFIG as unknown as Record<string, unknown>)[key as string] = effectiveValue;
  }
  return effectiveValue;
}

function persistWebNumberSetting(options: {
  value: number;
  runtimeKey: "composeUploadLimitMb" | "workspaceUploadLimitMb";
  clamp: (value: unknown, fallback: number) => number;
}): number {
  const nextValue = options.clamp(options.value, WEB_RUNTIME_CONFIG[options.runtimeKey]);
  return persistWebOrdinarySetting(options.runtimeKey, nextValue);
}

export function setWebComposeUploadLimitMb(limitMb: number): number {
  return persistWebNumberSetting({
    value: limitMb,
    runtimeKey: "composeUploadLimitMb",
    clamp: clampComposeUploadLimitMb,
  });
}

export function setWebWorkspaceUploadLimitMb(limitMb: number): number {
  return persistWebNumberSetting({
    value: limitMb,
    runtimeKey: "workspaceUploadLimitMb",
    clamp: clampWorkspaceUploadLimitMb,
  });
}

export function generateWebWidgetToken(): string {
  return randomBytes(32).toString("base64url");
}

export function setWebWidgetToken(token: string): string {
  const next = String(token || "").trim();
  const config = readJsonConfig(getConfigPath());
  const web =
    config.web && typeof config.web === "object"
      ? { ...(config.web as Record<string, unknown>) }
      : {};
  const widgetTokenKeys = [
    "widgetToken",
    "widget_token",
    "webWidgetToken",
    "web_widget_token",
    "PICLAW_WEB_WIDGET_TOKEN",
  ];

  for (const key of widgetTokenKeys) {
    delete web[key];
    delete config[key];
  }

  if (next) {
    web.widgetToken = next;
  }
  config.web = web;
  writeJsonConfig(getConfigPath(), config);

  WEB_RUNTIME_CONFIG.widgetToken = next;
  if (next) {
    process.env.PICLAW_WEB_WIDGET_TOKEN = next;
  } else {
    delete process.env.PICLAW_WEB_WIDGET_TOKEN;
  }
  return WEB_RUNTIME_CONFIG.widgetToken;
}

export function getOrCreateWebWidgetToken(): string {
  const existing = WEB_RUNTIME_CONFIG.widgetToken.trim();
  if (existing) return existing;
  return setWebWidgetToken(generateWebWidgetToken());
}

export function rotateWebWidgetToken(): string {
  return setWebWidgetToken(generateWebWidgetToken());
}

// ---------------------------------------------------------------------------
// Remote interop configuration (cross-instance IPC).
// ---------------------------------------------------------------------------

/** Typed remote interop settings grouped for lower-coupling service wiring. */
export interface RemoteInteropConfig {
  enabled: boolean;
  allowHttp: boolean;
  allowPrivateNetwork: boolean;
  shortCircuitEnabled: boolean;
  instanceName: string;
  decisionModel: string;
}

interface RemoteDomainConfig extends RemoteInteropConfig {
  remoteCompactionEnabled: boolean;
  remoteCompactionTimeoutMs: number;
}

const legacyRemoteInteropEnabled = pickBoolean(piclawConfig, ["remoteInteropEnabled", "PICLAW_REMOTE_INTEROP_ENABLED"]);
const legacyRemoteAllowHttp = pickBoolean(piclawConfig, ["remoteInteropAllowHttp", "PICLAW_REMOTE_INTEROP_ALLOW_HTTP"]);
const legacyRemoteAllowPrivate = pickBoolean(piclawConfig, ["remoteInteropAllowPrivateNetwork", "PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK"]);
const legacyRemoteShortCircuit = pickBoolean(piclawConfig, ["remoteInteropShortCircuitEnabled", "PICLAW_REMOTE_SHORT_CIRCUIT_ENABLED"]);
const legacyRemoteInstanceName = pickString(piclawConfig, ["remoteInstanceName", "PICLAW_REMOTE_INSTANCE_NAME"]);
const legacyRemoteDecisionModel = pickString(piclawConfig, ["remoteInteropDecisionModel", "PICLAW_REMOTE_INTEROP_DECISION_MODEL"]);
const legacyRemoteCompactionEnabled = pickBoolean(compactionConfig, ["remoteCompactionEnabled", "remote_compaction_enabled", "PICLAW_REMOTE_COMPACTION_ENABLED"]);
const legacyRemoteCompactionTimeoutMs = pickNumber(compactionConfig, ["remoteCompactionTimeoutMs", "remote_compaction_timeout_ms", "PICLAW_REMOTE_COMPACTION_TIMEOUT_MS"]);
const parseLegacyRemoteBoolean = (raw: string): boolean => ["1", "true"].includes(raw.trim().toLowerCase());

const remoteDomainSchema = registerDomainConfig<RemoteDomainConfig>({
  domain: "remote",
  fields: {
    enabled: boolField({ key: "enabled", owner: "remote-interop", defaultValue: legacyRemoteInteropEnabled ?? false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_REMOTE_INTEROP_ENABLED", replacement: "domains.remote.enabled", removalVersion: "3.0.0", parse: parseLegacyRemoteBoolean, skipInvalid: true }] }),
    allowHttp: boolField({ key: "allowHttp", owner: "remote-interop", defaultValue: legacyRemoteAllowHttp ?? false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_REMOTE_INTEROP_ALLOW_HTTP", replacement: "domains.remote.allowHttp", removalVersion: "3.0.0", parse: parseLegacyRemoteBoolean, skipInvalid: true }] }),
    allowPrivateNetwork: boolField({ key: "allowPrivateNetwork", owner: "remote-interop", defaultValue: legacyRemoteAllowPrivate ?? false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_REMOTE_INTEROP_ALLOW_PRIVATE_NETWORK", replacement: "domains.remote.allowPrivateNetwork", removalVersion: "3.0.0", parse: parseLegacyRemoteBoolean, skipInvalid: true }] }),
    shortCircuitEnabled: boolField({ key: "shortCircuitEnabled", owner: "remote-interop", defaultValue: legacyRemoteShortCircuit ?? false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_REMOTE_SHORT_CIRCUIT_ENABLED", replacement: "domains.remote.shortCircuitEnabled", removalVersion: "3.0.0", parse: parseLegacyRemoteBoolean, skipInvalid: true }] }),
    instanceName: stringField({ key: "instanceName", owner: "remote-interop", defaultValue: legacyRemoteInstanceName ?? "", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_REMOTE_INSTANCE_NAME", replacement: "domains.remote.instanceName", removalVersion: "3.0.0" }] }),
    decisionModel: stringField({ key: "decisionModel", owner: "remote-interop", defaultValue: legacyRemoteDecisionModel ?? "", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_REMOTE_INTEROP_DECISION_MODEL", replacement: "domains.remote.decisionModel", removalVersion: "3.0.0" }] }),
    remoteCompactionEnabled: boolField({ key: "remoteCompactionEnabled", owner: "remote-interop", defaultValue: legacyRemoteCompactionEnabled ?? false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_REMOTE_COMPACTION_ENABLED", replacement: "domains.remote.remoteCompactionEnabled", removalVersion: "3.0.0", skipInvalid: true }] }),
    remoteCompactionTimeoutMs: integerField({ key: "remoteCompactionTimeoutMs", owner: "remote-interop", defaultValue: Number.isFinite(legacyRemoteCompactionTimeoutMs) && (legacyRemoteCompactionTimeoutMs ?? 0) > 0 ? Math.round(Number(legacyRemoteCompactionTimeoutMs)) : 300_000, min: 1, bounds: "positive integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_REMOTE_COMPACTION_TIMEOUT_MS", replacement: "domains.remote.remoteCompactionTimeoutMs", removalVersion: "3.0.0", skipInvalid: true }] }),
  },
});

let remoteDomainConfigOverride: Partial<Pick<RemoteDomainConfig, "remoteCompactionEnabled" | "remoteCompactionTimeoutMs">> | null = null;

function getRemoteDomainConfig(): RemoteDomainConfig {
  return { ...readDomainConfig(remoteDomainSchema, getDomainConfigOptions()), ...(remoteDomainConfigOverride ?? {}) };
}

/** Stable public object with live typed-domain remote values. */
export const REMOTE_INTEROP_CONFIG = Object.freeze<RemoteInteropConfig>({
  get enabled() { return getRemoteDomainConfig().enabled; },
  get allowHttp() { return getRemoteDomainConfig().allowHttp; },
  get allowPrivateNetwork() { return getRemoteDomainConfig().allowPrivateNetwork; },
  get shortCircuitEnabled() { return getRemoteDomainConfig().shortCircuitEnabled; },
  get instanceName() { return getRemoteDomainConfig().instanceName; },
  get decisionModel() { return getRemoteDomainConfig().decisionModel; },
});

/** Return the grouped remote interop settings for service wiring and tests. */
export function getRemoteInteropConfig(): Readonly<RemoteInteropConfig> {
  return REMOTE_INTEROP_CONFIG;
}

/** Directory for persisted Pi session files. */
export const SESSIONS_DIR = resolve(DATA_DIR, "sessions");

const configSessionMaxSizeMb = pickNumber(piclawConfig, [
  "sessionMaxSizeMb",
  "session_max_size_mb",
  "PICLAW_SESSION_MAX_SIZE_MB",
]);
const configSessionAutoRotate = pickBoolean(piclawConfig, [
  "sessionAutoRotate",
  "session_auto_rotate",
  "PICLAW_SESSION_AUTO_ROTATE",
]);
const configSessionMaxLines = pickNumber(piclawConfig, [
  "sessionMaxLines",
  "session_max_lines",
  "PICLAW_SESSION_MAX_LINES",
]);
const configSessionMaxCompactions = pickNumber(piclawConfig, [
  "sessionMaxCompactions",
  "session_max_compactions",
  "maxCompactionsBeforeRotation",
  "max_compactions_before_rotation",
  "PICLAW_SESSION_MAX_COMPACTIONS",
]);
const configCompactionTimeoutMs = pickNumber(compactionConfig, [
  "timeoutMs",
  "timeout_ms",
  "compactionTimeoutMs",
  "PICLAW_COMPACTION_TIMEOUT_MS",
]);
const configCompactionBackoffBaseMs = pickNumber(compactionConfig, [
  "backoffBaseMs",
  "backoff_base_ms",
  "compactionBackoffBaseMs",
  "PICLAW_COMPACTION_BACKOFF_BASE_MS",
]);
const configCompactionBackoffMaxMs = pickNumber(compactionConfig, [
  "backoffMaxMs",
  "backoff_max_ms",
  "compactionBackoffMaxMs",
  "PICLAW_COMPACTION_BACKOFF_MAX_MS",
]);
const PROGRESS_WATCHDOG_ENABLED_CONFIG_KEYS = [
  "progressWatchdogEnabled",
  "progress_watchdog_enabled",
  "watchdogEnabled",
  "PICLAW_PROGRESS_WATCHDOG_ENABLED",
];
const PROGRESS_WATCHDOG_TIMEOUT_CONFIG_KEYS = [
  "progressWatchdogTimeoutMs",
  "progress_watchdog_timeout_ms",
  "watchdogTimeoutMs",
  "PICLAW_PROGRESS_WATCHDOG_TIMEOUT_MS",
];
const configProgressWatchdogEnabled = pickBoolean(compactionConfig, PROGRESS_WATCHDOG_ENABLED_CONFIG_KEYS);
const configProgressWatchdogTimeoutMs = pickNumber(compactionConfig, PROGRESS_WATCHDOG_TIMEOUT_CONFIG_KEYS);
const configSmartCompactionMethod = pickString(compactionConfig, [
  "smartCompactionMethod",
  "smart_compaction_method",
  "PICLAW_SMART_COMPACTION_METHOD",
]);
const configAutoCompactionEnabled = pickBoolean(compactionConfig, [
  "autoCompactionEnabled",
  "auto_compaction_enabled",
  "PICLAW_AUTO_COMPACTION_ENABLED",
]);
const configCompactionThresholdPercent = pickNumber(compactionConfig, ["thresholdPercent", "threshold_percent", "PICLAW_COMPACTION_THRESHOLD_PERCENT"]);
const configCompactionMaxThresholdTokens = pickNumber(compactionConfig, ["maxThresholdTokens", "max_threshold_tokens", "compactionMaxThresholdTokens", "PICLAW_COMPACTION_MAX_THRESHOLD_TOKENS"]);
const configAutoCompactionScope = pickString(compactionConfig, ["autoCompactionScope", "auto_compaction_scope", "autoCompactScope", "PICLAW_AUTO_COMPACTION_SCOPE"]);
const configCompactionHardCeilingPercent = pickNumber(compactionConfig, ["hardCeilingPercent", "hard_ceiling_percent", "compactionHardCeilingPercent", "PICLAW_COMPACTION_HARD_CEILING_PERCENT"]);
const configCompactionWarningThreshold = pickNumber(compactionConfig, ["warningThreshold", "warning_threshold", "repeatedWarningThreshold", "PICLAW_COMPACTION_WARNING_THRESHOLD"]);
const configCompactionBackoffDecayFactor = pickNumber(compactionConfig, ["backoffDecayFactor", "backoff_decay_factor", "PICLAW_COMPACTION_BACKOFF_DECAY_FACTOR"]);
const configSystemPromptOverheadTokens = pickNumber(compactionConfig, ["systemPromptOverheadTokens", "system_prompt_overhead_tokens", "PICLAW_SYSTEM_PROMPT_OVERHEAD_TOKENS"]);
const configCompactionRequestOverheadTokens = pickNumber(compactionConfig, ["compactionRequestOverheadTokens", "compaction_request_overhead_tokens", "PICLAW_COMPACTION_REQUEST_OVERHEAD_TOKENS"]);
const configTokenEstimateSafetyMultiplier = pickNumber(compactionConfig, ["tokenEstimateSafetyMultiplier", "token_estimate_safety_multiplier", "PICLAW_TOKEN_ESTIMATE_SAFETY_MULTIPLIER"]);
const configProgressiveCompaction = pickBoolean(compactionConfig, ["progressiveCompaction", "progressive_compaction", "PICLAW_PROGRESSIVE_COMPACTION"]);
const configSmartCompactionReasoning = pickString(compactionConfig, ["smartCompactionReasoning", "smart_compaction_reasoning", "PICLAW_SMART_COMPACTION_REASONING"]);
const configAdditionalDefaultTools = pickStringArray(toolsConfig, [
  "additionalDefaultTools",
  "additional_default_tools",
  "PICLAW_ADDITIONAL_DEFAULT_TOOLS",
]);
const configSearchMatchMode = pickString(toolsConfig, [
  "searchMatchMode",
  "search_match_mode",
  "PICLAW_SEARCH_MATCH_MODE",
]);

/** Typed session-file safeguards grouped for runtime/session wiring. */
export interface SessionStorageConfig {
  maxSizeMb: number;
  maxSizeBytes: number;
  maxLines: number;
  maxCompactionsBeforeRotation: number;
  autoRotate: boolean;
}

export type AutoCompactionScope = "total" | "body_after_prefix";
export type SmartCompactionMethod = "selective" | "pipelined";

export interface CompactionRuntimeConfig {
  /** Piclaw-managed auto-compaction toggle. Independent from upstream AgentSession suppression. */
  autoCompactionEnabled: boolean;
  /** Processing method captured once at the start of each smart compaction. */
  smartCompactionMethod: SmartCompactionMethod;
  /** Attempt explicitly supported provider-native compaction before the selected local method. */
  remoteCompactionEnabled: boolean;
  /** Provider-native compaction request deadline. */
  remoteCompactionTimeoutMs: number;
  timeoutMs: number;
  backoffBaseMs: number;
  backoffMaxMs: number;
  progressWatchdogEnabled: boolean;
  progressWatchdogTimeoutMs: number;
  /** Context utilization % at which auto-compaction triggers (0-100). Default 80. */
  thresholdPercent: number;
  /** Optional absolute cap for auto-compaction threshold tokens. 0 disables; disabled by default. */
  maxThresholdTokens: number;
  /** Token-accounting scope for auto-compaction threshold checks. Default total. */
  autoCompactionScope: AutoCompactionScope;
  /** Full-window utilization % that always triggers compaction even for scoped growth. Default 100. */
  hardCeilingPercent: number;
  /** Emit a warning after this many successful auto-compactions in one chat. 0 disables. */
  warningThreshold: number;
  /** Multiplier applied to backoff duration after a successful compaction (0-1). Default 0.5. */
  backoffDecayFactor: number;
  /** Conservative token overhead reserved for system prompt/tools/skills. Default 4000. */
  systemPromptOverheadTokens: number;
  /** Conservative token overhead reserved for side-channel compaction requests. Default 1000. */
  compactionRequestOverheadTokens: number;
  /** Safety multiplier applied to estimated tokens. Default 1.1. */
  tokenEstimateSafetyMultiplier: number;
  /** Force progressive smart compaction. Default false. */
  progressiveCompaction: boolean;
  /** Optional default reasoning effort for smart compaction phases. Empty means phase defaults. */
  smartCompactionReasoning: string;
}

interface CompactionDomainConfig {
  autoCompactionEnabled: boolean;
  smartCompactionMethod: SmartCompactionMethod;
  timeoutMs: number;
  backoffBaseMs: number;
  backoffMaxMs: number;
  thresholdPercent: number;
  maxThresholdTokens: number;
  autoCompactionScope: AutoCompactionScope;
  hardCeilingPercent: number;
  warningThreshold: number;
  backoffDecayFactor: number;
  idleAutoCompactionDelayMs: number;
  prePromptForegroundMs: number;
  systemPromptOverheadTokens: number;
  compactionRequestOverheadTokens: number;
  tokenEstimateSafetyMultiplier: number;
  progressiveCompaction: boolean;
  smartCompactionReasoning: string;
}

function boundedNumberField(options: Omit<DomainConfigField<number>, "type" | "validate"> & { minExclusive?: number; minInclusive?: number; maxInclusive?: number }): DomainConfigField<number> {
  return {
    ...options,
    type: "number",
    validate(value: unknown) {
      const parsed = Number(value);
      if (!Number.isFinite(parsed)) throw new Error(`Invalid numeric domain config value for ${options.key}`);
      if (options.minExclusive !== undefined && parsed <= options.minExclusive) throw new Error(`Domain config value below minimum for ${options.key}`);
      if (options.minInclusive !== undefined && parsed < options.minInclusive) throw new Error(`Domain config value below minimum for ${options.key}`);
      if (options.maxInclusive !== undefined && parsed > options.maxInclusive) throw new Error(`Domain config value above maximum for ${options.key}`);
      return parsed;
    },
  };
}

function parseSmartCompactionCompatibilityValue(raw: string): string | undefined {
  return raw.trim() ? normalizeSmartCompactionMethod(raw, "selective") : undefined;
}

function parseAutoCompactionScopeCompatibilityValue(raw: string): string | undefined {
  return raw.trim() ? normalizeAutoCompactionScope(raw, "total") : undefined;
}

function parseProgressiveCompactionCompatibilityValue(raw: string): boolean {
  return raw.trim() === "1";
}

const COMPACTION_REASONING_EFFORT_VALUES = ["", "minimal", "low", "medium", "high"] as const;

function normalizeCompactionReasoningFallback(value: unknown): string {
  const normalized = String(value ?? "").trim().toLowerCase();
  if ((COMPACTION_REASONING_EFFORT_VALUES as readonly string[]).includes(normalized)) return normalized;
  throw new Error("Invalid smart compaction reasoning effort");
}

const compactionDomainSchema = registerDomainConfig<CompactionDomainConfig>({
  domain: "compaction",
  fields: {
    autoCompactionEnabled: boolField({ key: "autoCompactionEnabled", owner: "core", defaultValue: configAutoCompactionEnabled ?? true, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_AUTO_COMPACTION_ENABLED", replacement: "domains.compaction.autoCompactionEnabled", removalVersion: "3.0.0", skipInvalid: true }] }),
    smartCompactionMethod: {
      ...stringField({ key: "smartCompactionMethod", owner: "core", defaultValue: normalizeSmartCompactionMethod(configSmartCompactionMethod, "selective"), allowedValues: ["selective", "pipelined"], persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SMART_COMPACTION_METHOD", replacement: "domains.compaction.smartCompactionMethod", removalVersion: "3.0.0", parse: parseSmartCompactionCompatibilityValue, skipInvalid: true }] }),
      validate: (value: unknown) => {
        if (value === undefined) throw new Error("Invalid smart compaction method");
        return normalizeSmartCompactionMethod(value, "selective");
      },
    } as DomainConfigField<SmartCompactionMethod>,
    timeoutMs: integerField({ key: "timeoutMs", owner: "core", defaultValue: Number.isFinite(configCompactionTimeoutMs) && (configCompactionTimeoutMs ?? 0) > 0 ? Math.round(Number(configCompactionTimeoutMs)) : 300_000, min: 1, bounds: "positive integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_COMPACTION_TIMEOUT_MS", replacement: "domains.compaction.timeoutMs", removalVersion: "3.0.0", skipInvalid: true }] }),
    backoffBaseMs: integerField({ key: "backoffBaseMs", owner: "core", defaultValue: Number.isFinite(configCompactionBackoffBaseMs) && (configCompactionBackoffBaseMs ?? 0) > 0 ? Math.round(Number(configCompactionBackoffBaseMs)) : 15 * 60_000, min: 1, bounds: "positive integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_COMPACTION_BACKOFF_BASE_MS", replacement: "domains.compaction.backoffBaseMs", removalVersion: "3.0.0", skipInvalid: true }] }),
    backoffMaxMs: integerField({ key: "backoffMaxMs", owner: "core", defaultValue: Number.isFinite(configCompactionBackoffMaxMs) && (configCompactionBackoffMaxMs ?? 0) > 0 ? Math.round(Number(configCompactionBackoffMaxMs)) : 6 * 60 * 60_000, min: 1, bounds: "positive integer ms; normalized >= backoffBaseMs", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_COMPACTION_BACKOFF_MAX_MS", replacement: "domains.compaction.backoffMaxMs", removalVersion: "3.0.0", skipInvalid: true }] }),
    thresholdPercent: boundedNumberField({ key: "thresholdPercent", owner: "core", defaultValue: typeof configCompactionThresholdPercent === "number" && configCompactionThresholdPercent > 0 && configCompactionThresholdPercent <= 100 ? configCompactionThresholdPercent : 80, minExclusive: 0, maxInclusive: 100, bounds: ">0..100 percent", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_COMPACTION_THRESHOLD_PERCENT", replacement: "domains.compaction.thresholdPercent", removalVersion: "3.0.0", skipInvalid: true }] }),
    maxThresholdTokens: integerField({ key: "maxThresholdTokens", owner: "core", defaultValue: parseOptionalNonNegativeInt(configCompactionMaxThresholdTokens, 0), min: 0, bounds: "non-negative integer tokens", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_COMPACTION_MAX_THRESHOLD_TOKENS", replacement: "domains.compaction.maxThresholdTokens", removalVersion: "3.0.0", skipInvalid: true }] }),
    autoCompactionScope: {
      ...stringField({ key: "autoCompactionScope", owner: "core", defaultValue: normalizeAutoCompactionScope(configAutoCompactionScope, "total"), allowedValues: ["total", "body_after_prefix"], persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_AUTO_COMPACTION_SCOPE", replacement: "domains.compaction.autoCompactionScope", removalVersion: "3.0.0", parse: parseAutoCompactionScopeCompatibilityValue, skipInvalid: true }] }),
      validate: (value: unknown) => {
        if (value === undefined) throw new Error("Invalid auto-compaction scope");
        return normalizeAutoCompactionScope(value, "total");
      },
    } as DomainConfigField<AutoCompactionScope>,
    hardCeilingPercent: boundedNumberField({ key: "hardCeilingPercent", owner: "core", defaultValue: typeof configCompactionHardCeilingPercent === "number" && configCompactionHardCeilingPercent > 0 && configCompactionHardCeilingPercent <= 100 ? configCompactionHardCeilingPercent : 100, minExclusive: 0, maxInclusive: 100, bounds: ">0..100 percent", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_COMPACTION_HARD_CEILING_PERCENT", replacement: "domains.compaction.hardCeilingPercent", removalVersion: "3.0.0", skipInvalid: true }] }),
    warningThreshold: integerField({ key: "warningThreshold", owner: "core", defaultValue: typeof configCompactionWarningThreshold === "number" && configCompactionWarningThreshold >= 0 ? Math.round(configCompactionWarningThreshold) : 3, min: 0, bounds: "non-negative integer", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_COMPACTION_WARNING_THRESHOLD", replacement: "domains.compaction.warningThreshold", removalVersion: "3.0.0", skipInvalid: true }] }),
    backoffDecayFactor: boundedNumberField({ key: "backoffDecayFactor", owner: "core", defaultValue: typeof configCompactionBackoffDecayFactor === "number" && configCompactionBackoffDecayFactor > 0 && configCompactionBackoffDecayFactor <= 1 ? configCompactionBackoffDecayFactor : 0.5, minExclusive: 0, maxInclusive: 1, bounds: ">0..1", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_COMPACTION_BACKOFF_DECAY_FACTOR", replacement: "domains.compaction.backoffDecayFactor", removalVersion: "3.0.0", skipInvalid: true }] }),
    idleAutoCompactionDelayMs: integerField({ key: "idleAutoCompactionDelayMs", owner: "agent-runtime", defaultValue: 5_000, min: 0, bounds: "non-negative integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_IDLE_AUTO_COMPACTION_DELAY_MS", replacement: "domains.compaction.idleAutoCompactionDelayMs", removalVersion: "3.0.0", skipInvalid: true }] }),
    prePromptForegroundMs: integerField({ key: "prePromptForegroundMs", owner: "web", defaultValue: 250, min: 0, bounds: "non-negative integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_PREPROMPT_COMPACTION_FOREGROUND_MS", replacement: "domains.compaction.prePromptForegroundMs", removalVersion: "3.0.0", skipInvalid: true }] }),
    systemPromptOverheadTokens: integerField({ key: "systemPromptOverheadTokens", owner: "agent-runtime", defaultValue: typeof configSystemPromptOverheadTokens === "number" && configSystemPromptOverheadTokens > 0 ? Math.round(configSystemPromptOverheadTokens) : 4_000, min: 1, bounds: "positive integer tokens", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SYSTEM_PROMPT_OVERHEAD_TOKENS", replacement: "domains.compaction.systemPromptOverheadTokens", removalVersion: "3.0.0", skipInvalid: true }] }),
    compactionRequestOverheadTokens: integerField({ key: "compactionRequestOverheadTokens", owner: "agent-runtime", defaultValue: typeof configCompactionRequestOverheadTokens === "number" && configCompactionRequestOverheadTokens > 0 ? Math.round(configCompactionRequestOverheadTokens) : 1_000, min: 1, bounds: "positive integer tokens", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_COMPACTION_REQUEST_OVERHEAD_TOKENS", replacement: "domains.compaction.compactionRequestOverheadTokens", removalVersion: "3.0.0", skipInvalid: true }] }),
    tokenEstimateSafetyMultiplier: boundedNumberField({ key: "tokenEstimateSafetyMultiplier", owner: "agent-runtime", defaultValue: typeof configTokenEstimateSafetyMultiplier === "number" && configTokenEstimateSafetyMultiplier >= 1 ? configTokenEstimateSafetyMultiplier : 1.1, minInclusive: 1, bounds: ">=1", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_TOKEN_ESTIMATE_SAFETY_MULTIPLIER", replacement: "domains.compaction.tokenEstimateSafetyMultiplier", removalVersion: "3.0.0", skipInvalid: true }] }),
    progressiveCompaction: boolField({ key: "progressiveCompaction", owner: "core", defaultValue: configProgressiveCompaction ?? false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_PROGRESSIVE_COMPACTION", replacement: "domains.compaction.progressiveCompaction", removalVersion: "3.0.0", parse: parseProgressiveCompactionCompatibilityValue, skipInvalid: true }] }),
    smartCompactionReasoning: {
      ...stringField({ key: "smartCompactionReasoning", owner: "core", defaultValue: configSmartCompactionReasoning === undefined ? "" : normalizeCompactionReasoningFallback(configSmartCompactionReasoning), allowedValues: COMPACTION_REASONING_EFFORT_VALUES, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SMART_COMPACTION_REASONING", replacement: "domains.compaction.smartCompactionReasoning", removalVersion: "3.0.0", parse: (raw) => raw.trim().toLowerCase(), skipInvalid: true }] }),
      validate: normalizeCompactionReasoningFallback,
    } as DomainConfigField<string>,
  },
});

let compactionDomainConfigOverride: CompactionDomainConfig | null = null;

function getCompactionDomainConfig(): CompactionDomainConfig {
  const resolved = compactionDomainConfigOverride ?? readDomainConfig(compactionDomainSchema, getDomainConfigOptions());
  return resolved.backoffMaxMs < resolved.backoffBaseMs
    ? { ...resolved, backoffMaxMs: resolved.backoffBaseMs }
    : { ...resolved };
}

/** Return idle auto-compaction delay resolved for this scheduling decision. */
export function getIdleAutoCompactionDelayMs(): number {
  return getCompactionDomainConfig().idleAutoCompactionDelayMs;
}

/** Return foreground pre-prompt compaction wait resolved for this web request. */
export function getPrePromptCompactionForegroundMs(): number {
  return getCompactionDomainConfig().prePromptForegroundMs;
}

export function getSystemPromptOverheadTokenConfig(): number {
  return getCompactionDomainConfig().systemPromptOverheadTokens;
}

export function getCompactionRequestOverheadTokenConfig(): number {
  return getCompactionDomainConfig().compactionRequestOverheadTokens;
}

export function getTokenEstimateSafetyMultiplierConfig(): number {
  return getCompactionDomainConfig().tokenEstimateSafetyMultiplier;
}

export function getProgressiveCompactionConfig(): boolean {
  return getCompactionDomainConfig().progressiveCompaction;
}

export function getSmartCompactionReasoningFallback(): string {
  return getCompactionDomainConfig().smartCompactionReasoning;
}

export type SessionIsolationLevel = "none" | "summary" | "full";

interface SessionDomainConfig {
  maxSizeMb: number;
  maxLines: number;
  maxCompactionsBeforeRotation: number;
  autoRotate: boolean;
  isolation: SessionIsolationLevel;
}

const sessionDomainSchema = registerDomainConfig<SessionDomainConfig>({
  domain: "session",
  fields: {
    maxSizeMb: integerField({ key: "maxSizeMb", owner: "session-runtime", defaultValue: configSessionMaxSizeMb ?? 32, min: 1, max: 256, bounds: "1..256 MiB", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SESSION_MAX_SIZE_MB", replacement: "domains.session.maxSizeMb", removalVersion: "3.0.0", skipInvalid: true }] }),
    maxLines: integerField({ key: "maxLines", owner: "session-runtime", defaultValue: configSessionMaxLines ?? 8000, min: 100, max: 50000, bounds: "100..50000 lines", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SESSION_MAX_LINES", replacement: "domains.session.maxLines", removalVersion: "3.0.0", skipInvalid: true }] }),
    maxCompactionsBeforeRotation: integerField({ key: "maxCompactionsBeforeRotation", owner: "session-runtime", defaultValue: configSessionMaxCompactions ?? 3, min: 1, max: 20, bounds: "1..20 compactions", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SESSION_MAX_COMPACTIONS", replacement: "domains.session.maxCompactionsBeforeRotation", removalVersion: "3.0.0", skipInvalid: true }] }),
    autoRotate: boolField({ key: "autoRotate", owner: "session-runtime", defaultValue: configSessionAutoRotate ?? true, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SESSION_AUTO_ROTATE", replacement: "domains.session.autoRotate", removalVersion: "3.0.0", skipInvalid: true }] }),
    isolation: stringField({ key: "isolation", owner: "session-runtime", defaultValue: "none", allowedValues: ["none", "summary", "full"], persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SESSION_ISOLATION", replacement: "domains.session.isolation", removalVersion: "3.0.0", parse: (raw) => raw.trim().toLowerCase(), skipInvalid: true }] }) as DomainConfigField<SessionIsolationLevel>,
  },
});

function toSessionStorageConfig(config: SessionDomainConfig): SessionStorageConfig {
  return {
    maxSizeMb: config.maxSizeMb,
    maxSizeBytes: config.maxSizeMb * 1024 * 1024,
    maxLines: config.maxLines,
    maxCompactionsBeforeRotation: config.maxCompactionsBeforeRotation,
    autoRotate: config.autoRotate,
  };
}

const SESSION_DOMAIN_CONFIG = readDomainConfig(sessionDomainSchema, getDomainConfigOptions());

/** Grouped session-file safeguards. */
export let SESSION_STORAGE_CONFIG = Object.freeze<SessionStorageConfig>(toSessionStorageConfig(SESSION_DOMAIN_CONFIG));

/** Return grouped session-file safeguards for runtime wiring and tests. */
export function getSessionStorageConfig(): Readonly<SessionStorageConfig> {
  return SESSION_STORAGE_CONFIG;
}

/** Persist and apply session storage settings so new turns use them immediately. */
export function setSessionStorageConfig(patch: { maxSizeMb?: number; maxLines?: number; maxCompactionsBeforeRotation?: number; autoRotate?: boolean }): Readonly<SessionStorageConfig> {
  const nextMaxSizeMb = Number.isFinite(patch.maxSizeMb)
    ? Math.min(256, Math.max(1, Math.round(Number(patch.maxSizeMb))))
    : SESSION_STORAGE_CONFIG.maxSizeMb;
  const nextAutoRotate = typeof patch.autoRotate === "boolean"
    ? patch.autoRotate
    : SESSION_STORAGE_CONFIG.autoRotate;
  const nextMaxLines = Number.isFinite(patch.maxLines)
    ? Math.min(50000, Math.max(100, Math.round(Number(patch.maxLines))))
    : SESSION_STORAGE_CONFIG.maxLines;
  const nextMaxCompactions = Number.isFinite(patch.maxCompactionsBeforeRotation)
    ? Math.min(20, Math.max(1, Math.round(Number(patch.maxCompactionsBeforeRotation))))
    : SESSION_STORAGE_CONFIG.maxCompactionsBeforeRotation;

  const resolved = writeDomainConfig(sessionDomainSchema, getDomainConfigOptions(), {
    maxSizeMb: nextMaxSizeMb,
    autoRotate: nextAutoRotate,
    maxLines: nextMaxLines,
    maxCompactionsBeforeRotation: nextMaxCompactions,
  });
  Object.assign(SESSION_DOMAIN_CONFIG, resolved);
  SESSION_STORAGE_CONFIG = Object.freeze<SessionStorageConfig>(toSessionStorageConfig(resolved));
  return SESSION_STORAGE_CONFIG;
}

/** Return the effective cross-session isolation policy. */
export function getSessionIsolationLevel(): SessionIsolationLevel {
  return SESSION_DOMAIN_CONFIG.isolation;
}

/** Persist and apply cross-session isolation without mutating compatibility env aliases. */
export function setSessionIsolationLevel(level: SessionIsolationLevel): SessionIsolationLevel {
  const resolved = writeDomainConfigField(sessionDomainSchema, getDomainConfigOptions(), "isolation", level);
  Object.assign(SESSION_DOMAIN_CONFIG, resolved);
  return resolved.isolation;
}

export interface SessionPersistenceConfig {
  filePreloadSanitizeMinBytes: number;
  toolResultMaxPersistBytes: number;
  toolResultPreviewChars: number;
}

const sessionPersistenceDomainSchema = registerDomainConfig<SessionPersistenceConfig>({
  domain: "sessionPersistence",
  fields: {
    filePreloadSanitizeMinBytes: integerField({ key: "filePreloadSanitizeMinBytes", owner: "session-runtime", defaultValue: 1024 * 1024, min: 1, bounds: "positive integer bytes", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SESSION_FILE_PRELOAD_SANITIZE_MIN_BYTES", replacement: "domains.sessionPersistence.filePreloadSanitizeMinBytes", removalVersion: "3.0.0", skipInvalid: true }] }),
    toolResultMaxPersistBytes: integerField({ key: "toolResultMaxPersistBytes", owner: "session-runtime", defaultValue: 256 * 1024, min: 1, bounds: "positive integer bytes", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SESSION_TOOL_RESULT_MAX_PERSIST_BYTES", replacement: "domains.sessionPersistence.toolResultMaxPersistBytes", removalVersion: "3.0.0", skipInvalid: true }] }),
    toolResultPreviewChars: integerField({ key: "toolResultPreviewChars", owner: "session-runtime", defaultValue: 4096, min: 1, bounds: "positive integer characters", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_SESSION_TOOL_RESULT_PREVIEW_CHARS", replacement: "domains.sessionPersistence.toolResultPreviewChars", removalVersion: "3.0.0", skipInvalid: true }] }),
  },
});

const SESSION_PERSISTENCE_CONFIG = Object.freeze<SessionPersistenceConfig>(
  readDomainConfig(sessionPersistenceDomainSchema, getDomainConfigOptions()),
);

/** Return session persistence sanitization limits captured at module startup. */
export function getSessionPersistenceConfig(): Readonly<SessionPersistenceConfig> {
  return SESSION_PERSISTENCE_CONFIG;
}

export interface RecoveryPolicyConfig {
  loopGuardEnabled: boolean;
  loopGuardMaxFailures: number;
  loopGuardWindowMs: number;
  automaticRecoveryEnabled: boolean;
  /** Zero inherits the normalized retry max-attempt setting. */
  automaticRecoveryMaxAttempts: number;
  automaticRecoveryTotalBudgetMs: number;
}

const recoveryPolicyDomainSchema = registerDomainConfig<RecoveryPolicyConfig>({
  domain: "recovery",
  fields: {
    loopGuardEnabled: boolField({ key: "loopGuardEnabled", owner: "agent-runtime", defaultValue: true, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_RECOVERY_LOOP_GUARD_ENABLED", replacement: "domains.recovery.loopGuardEnabled", removalVersion: "3.0.0", skipInvalid: true }] }),
    loopGuardMaxFailures: integerField({ key: "loopGuardMaxFailures", owner: "agent-runtime", defaultValue: 3, min: 1, bounds: "positive integer failures", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_RECOVERY_LOOP_GUARD_MAX_FAILURES", replacement: "domains.recovery.loopGuardMaxFailures", removalVersion: "3.0.0", skipInvalid: true }] }),
    loopGuardWindowMs: integerField({ key: "loopGuardWindowMs", owner: "agent-runtime", defaultValue: 10 * 60 * 1000, min: 1, bounds: "positive integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_RECOVERY_LOOP_GUARD_WINDOW_MS", replacement: "domains.recovery.loopGuardWindowMs", removalVersion: "3.0.0", skipInvalid: true }] }),
    automaticRecoveryEnabled: boolField({ key: "automaticRecoveryEnabled", owner: "agent-runtime", defaultValue: true, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_TURN_AUTO_RECOVERY_ENABLED", replacement: "domains.recovery.automaticRecoveryEnabled", removalVersion: "3.0.0", skipInvalid: true }] }),
    automaticRecoveryMaxAttempts: integerField({ key: "automaticRecoveryMaxAttempts", owner: "agent-runtime", defaultValue: 0, min: 0, bounds: "0 inherits retry max; otherwise positive integer", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_TURN_AUTO_RECOVERY_MAX_ATTEMPTS", replacement: "domains.recovery.automaticRecoveryMaxAttempts", removalVersion: "3.0.0", parse: (raw) => { const parsed = Number(raw); return Number.isInteger(parsed) && parsed > 0 ? parsed : -1; }, skipInvalid: true }] }),
    automaticRecoveryTotalBudgetMs: integerField({ key: "automaticRecoveryTotalBudgetMs", owner: "agent-runtime", defaultValue: 30_000, min: 1, bounds: "positive integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_TURN_AUTO_RECOVERY_TOTAL_BUDGET_MS", replacement: "domains.recovery.automaticRecoveryTotalBudgetMs", removalVersion: "3.0.0", skipInvalid: true }] }),
  },
});

/** Return recovery-loop and automatic-recovery policy resolved for this attempt. */
export function getRecoveryPolicyConfig(): Readonly<RecoveryPolicyConfig> {
  return readDomainConfig(recoveryPolicyDomainSchema, getDomainConfigOptions());
}

export interface WebRecoveryConfig {
  stalePreflightRecoveryMs: number;
  stalePreflightBackoffMs: number;
}

const webRecoveryDomainSchema = registerDomainConfig<WebRecoveryConfig>({
  domain: "webRecovery",
  fields: {
    stalePreflightRecoveryMs: integerField({ key: "stalePreflightRecoveryMs", owner: "web", defaultValue: 4 * 60 * 1000, min: 1, bounds: "positive integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_STALE_PREFLIGHT_RECOVERY_MS", replacement: "domains.webRecovery.stalePreflightRecoveryMs", removalVersion: "3.0.0", skipInvalid: true }] }),
    stalePreflightBackoffMs: integerField({ key: "stalePreflightBackoffMs", owner: "web", defaultValue: 4 * 60 * 60 * 1000, min: 1, bounds: "positive integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_STALE_PREFLIGHT_BACKOFF_MS", replacement: "domains.webRecovery.stalePreflightBackoffMs", removalVersion: "3.0.0", skipInvalid: true }] }),
  },
});

/** Return stale-preflight recovery timing policy resolved for this scan. */
export function getWebRecoveryConfig(): Readonly<WebRecoveryConfig> {
  return readDomainConfig(webRecoveryDomainSchema, getDomainConfigOptions());
}

export interface ProgressWatchdogConfig {
  enabled: boolean;
  timeoutMs: number;
  escalateOnStall: boolean;
  externalMonitorEnabled: boolean;
}

const progressWatchdogDomainSchema = registerDomainConfig<ProgressWatchdogConfig>({
  domain: "watchdog",
  fields: {
    enabled: boolField({ key: "enabled", owner: "core", defaultValue: configProgressWatchdogEnabled ?? false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_PROGRESS_WATCHDOG_ENABLED", replacement: "domains.watchdog.enabled", removalVersion: "3.0.0", skipInvalid: true }] }),
    timeoutMs: integerField({ key: "timeoutMs", owner: "core", defaultValue: Number.isFinite(configProgressWatchdogTimeoutMs) ? Math.max(0, Math.round(Number(configProgressWatchdogTimeoutMs))) : 300_000, min: 0, bounds: "non-negative integer ms", persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_PROGRESS_WATCHDOG_TIMEOUT_MS", replacement: "domains.watchdog.timeoutMs", removalVersion: "3.0.0", parse: (raw) => { const normalized = raw.trim().toLowerCase(); if (["off", "false", "disabled", "no"].includes(normalized)) return 0; return Number(raw); }, skipInvalid: true }] }),
    escalateOnStall: boolField({ key: "escalateOnStall", owner: "core", defaultValue: false, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [
      { envKey: "PICLAW_PROGRESS_WATCHDOG_RESTART_ON_STALL", replacement: "domains.watchdog.escalateOnStall", removalVersion: "3.0.0", parse: (raw) => ["1", "true", "yes", "on", "restart", "exit"].includes(raw.trim().toLowerCase()), skipInvalid: true },
      { envKey: "PICLAW_PROGRESS_WATCHDOG_ESCALATE_ON_STALL", replacement: "domains.watchdog.escalateOnStall", removalVersion: "3.0.0", parse: (raw) => ["1", "true", "yes", "on", "restart", "exit"].includes(raw.trim().toLowerCase()), skipInvalid: true },
    ] }),
    externalMonitorEnabled: boolField({ key: "externalMonitorEnabled", owner: "core", defaultValue: true, persistence: "json-config", precedence: ["compat-env", "persisted", "default"], secretClass: "none", compatibilityEnv: [{ envKey: "PICLAW_EXTERNAL_PROGRESS_WATCHDOG", replacement: "domains.watchdog.externalMonitorEnabled", removalVersion: "3.0.0", parse: (raw) => !["0", "false", "off", "disabled", "no"].includes(raw.trim().toLowerCase()), skipInvalid: true }] }),
  },
});

let progressWatchdogConfigOverride: Partial<Pick<ProgressWatchdogConfig, "enabled" | "timeoutMs">> | null = null;

/** Return progress-watchdog policy resolved for the current operation. */
export function getProgressWatchdogConfig(): Readonly<ProgressWatchdogConfig> {
  return Object.freeze({
    ...readDomainConfig(progressWatchdogDomainSchema, getDomainConfigOptions()),
    ...(progressWatchdogConfigOverride ?? {}),
  });
}

/** Current per-turn tool-use budget used by the agent orchestrator. */
export let TOOL_USE_MESSAGE_BUDGET = AGENT_DOMAIN_CONFIG.toolUseMessageBudget;

/** Max tool result chars before auto-externalization. Default 5000. */
export let TOOL_OUTPUT_STORE_THRESHOLD = getToolsIntegrationConfig().toolOutputStoreBytes;

export interface ToolResultCompactionThresholdPolicy {
  bytes?: number;
  lines?: number;
}

function normalizeToolPolicyThreshold(value: unknown): number | undefined {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return undefined;
  return Math.max(1, Math.round(parsed));
}

function normalizeToolResultCompactionThresholdsByTool(
  input: unknown,
): Record<string, ToolResultCompactionThresholdPolicy> {
  if (!input || typeof input !== "object" || Array.isArray(input)) return {};
  const out: Record<string, ToolResultCompactionThresholdPolicy> = {};
  for (const [rawToolName, rawPolicy] of Object.entries(input as Record<string, unknown>)) {
    const toolName = rawToolName.trim().toLowerCase();
    if (!toolName) continue;
    if (!rawPolicy || typeof rawPolicy !== "object" || Array.isArray(rawPolicy)) continue;
    const policyRecord = rawPolicy as Record<string, unknown>;
    const bytes = normalizeToolPolicyThreshold(policyRecord.bytes);
    const lines = normalizeToolPolicyThreshold(policyRecord.lines);
    if (bytes === undefined && lines === undefined) continue;
    out[toolName] = {
      ...(bytes !== undefined ? { bytes } : {}),
      ...(lines !== undefined ? { lines } : {}),
    };
  }
  return out;
}

function parseToolResultCompactionThresholdsByTool(
  raw: unknown,
): Record<string, ToolResultCompactionThresholdPolicy> | null {
  if (raw === undefined || raw === null || raw === "") return null;
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw) as unknown;
      return normalizeToolResultCompactionThresholdsByTool(parsed);
    } catch {
      return null;
    }
  }
  return normalizeToolResultCompactionThresholdsByTool(raw);
}

const DEFAULT_TOOL_RESULT_COMPACTION_TOOLS = ["bash", "powershell", "exec_batch"];

function normalizeToolResultCompactionTools(input: unknown): string[] {
  if (!input) return [];
  const source = Array.isArray(input)
    ? input
    : typeof input === "string"
      ? input.split(/[\s,]+/)
      : [];
  const out: string[] = [];
  const seen = new Set<string>();
  for (const value of source) {
    if (typeof value !== "string") continue;
    const normalized = value.trim().toLowerCase();
    if (!normalized || seen.has(normalized)) continue;
    seen.add(normalized);
    out.push(normalized);
  }
  return out;
}

function parseToolResultCompactionTools(raw: unknown): string[] | null {
  if (raw === undefined || raw === null || raw === "") return null;
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw) as unknown;
      return normalizeToolResultCompactionTools(parsed);
    } catch {
      return normalizeToolResultCompactionTools(raw);
    }
  }
  return normalizeToolResultCompactionTools(raw);
}

export interface ToolResultSemanticSummaryConfig {
  enabled: boolean;
  maxInputChars: number;
  maxTokens: number;
  timeoutMs: number;
}

const DEFAULT_TOOL_RESULT_SEMANTIC_SUMMARY_ENABLED = true;
const DEFAULT_TOOL_RESULT_SEMANTIC_SUMMARY_MAX_INPUT_CHARS = 12_000;
const DEFAULT_TOOL_RESULT_SEMANTIC_SUMMARY_MAX_TOKENS = 320;
const DEFAULT_TOOL_RESULT_SEMANTIC_SUMMARY_TIMEOUT_MS = 12_000;

function parsePositiveIntegerWithBounds(value: unknown, fallback: number, min: number, max: number): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.min(max, Math.max(min, Math.round(parsed)));
}

const INITIAL_TOOL_POLICY_CONFIG = getToolsIntegrationConfig();

/** Runtime toggle for universal tool-result compaction. Default on. */
export let TOOL_RESULT_COMPACTION_ENABLED = INITIAL_TOOL_POLICY_CONFIG.toolResultCompactionEnabled;

/** Tool names eligible for tool-result compaction. */
export let TOOL_RESULT_COMPACTION_TOOLS = INITIAL_TOOL_POLICY_CONFIG.toolResultCompactionTools;

/** Optional per-tool compaction threshold overrides. */
export let TOOL_RESULT_COMPACTION_THRESHOLDS_BY_TOOL = INITIAL_TOOL_POLICY_CONFIG.toolResultCompactionThresholdsByTool;

/** Semantic summarization config for compacted tool results. */
export let TOOL_RESULT_SEMANTIC_SUMMARY_CONFIG = Object.seal<ToolResultSemanticSummaryConfig>({
  enabled: INITIAL_TOOL_POLICY_CONFIG.toolResultSemanticSummaryEnabled,
  maxInputChars: INITIAL_TOOL_POLICY_CONFIG.toolResultSemanticSummaryMaxInputChars,
  maxTokens: INITIAL_TOOL_POLICY_CONFIG.toolResultSemanticSummaryMaxTokens,
  timeoutMs: INITIAL_TOOL_POLICY_CONFIG.toolResultSemanticSummaryTimeoutMs,
});

export function getToolOutputStoreThreshold(): number {
  return getToolsIntegrationConfig().toolOutputStoreBytes;
}

export function getToolOutputPresentationConfig(): Readonly<{ storeBytes: number; storeLines: number; previewLines: number; previewLineChars: number }> {
  const config = getToolsIntegrationConfig();
  return Object.freeze({
    storeBytes: config.toolOutputStoreBytes,
    storeLines: config.toolOutputStoreLines,
    previewLines: config.toolOutputPreviewLines,
    previewLineChars: config.toolOutputPreviewLineChars,
  });
}

export function setToolOutputStoreThreshold(value: number): number {
  const next = Math.min(100000, Math.max(500, Math.round(value)));
  const resolved = writeDomainConfigField(toolsIntegrationDomainSchema, getDomainConfigOptions(), "toolOutputStoreBytes", next);
  TOOL_OUTPUT_STORE_THRESHOLD = resolved.toolOutputStoreBytes;
  return TOOL_OUTPUT_STORE_THRESHOLD;
}

/** Return whether runtime tool-result compaction is enabled. */
export function getToolResultCompactionEnabled(): boolean {
  return getToolsIntegrationConfig().toolResultCompactionEnabled;
}

/** Return optional per-tool compaction thresholds (tool name -> bytes/lines). */
export function getToolResultCompactionThresholdsByTool(): Readonly<Record<string, ToolResultCompactionThresholdPolicy>> {
  return getToolsIntegrationConfig().toolResultCompactionThresholdsByTool;
}

/** Return tool names currently eligible for tool-result compaction. */
export function getToolResultCompactionTools(): ReadonlyArray<string> {
  return getToolsIntegrationConfig().toolResultCompactionTools;
}

/** Return semantic summarization config for compacted tool results. */
export function getToolResultSemanticSummaryConfig(): Readonly<ToolResultSemanticSummaryConfig> {
  const config = getToolsIntegrationConfig();
  return Object.freeze({
    enabled: config.toolResultSemanticSummaryEnabled,
    maxInputChars: config.toolResultSemanticSummaryMaxInputChars,
    maxTokens: config.toolResultSemanticSummaryMaxTokens,
    timeoutMs: config.toolResultSemanticSummaryTimeoutMs,
  });
}

/** Persist and apply semantic summarization config for compacted tool results. */
export function setToolResultSemanticSummaryConfig(patch: {
  enabled?: boolean;
  maxInputChars?: number;
  maxTokens?: number;
  timeoutMs?: number;
}): Readonly<ToolResultSemanticSummaryConfig> {
  const current = getToolResultSemanticSummaryConfig();
  const next: ToolResultSemanticSummaryConfig = {
    enabled: typeof patch.enabled === "boolean" ? patch.enabled : current.enabled,
    maxInputChars: patch.maxInputChars === undefined
      ? current.maxInputChars
      : parsePositiveIntegerWithBounds(patch.maxInputChars, current.maxInputChars, 500, 200_000),
    maxTokens: patch.maxTokens === undefined
      ? current.maxTokens
      : parsePositiveIntegerWithBounds(patch.maxTokens, current.maxTokens, 64, 4_096),
    timeoutMs: patch.timeoutMs === undefined
      ? current.timeoutMs
      : parsePositiveDurationMs(patch.timeoutMs, current.timeoutMs),
  };

  const resolved = writeDomainConfig(toolsIntegrationDomainSchema, getDomainConfigOptions(), {
    toolResultSemanticSummaryEnabled: next.enabled,
    toolResultSemanticSummaryMaxInputChars: next.maxInputChars,
    toolResultSemanticSummaryMaxTokens: next.maxTokens,
    toolResultSemanticSummaryTimeoutMs: next.timeoutMs,
  });
  TOOL_RESULT_SEMANTIC_SUMMARY_CONFIG = Object.seal({
    enabled: resolved.toolResultSemanticSummaryEnabled,
    maxInputChars: resolved.toolResultSemanticSummaryMaxInputChars,
    maxTokens: resolved.toolResultSemanticSummaryMaxTokens,
    timeoutMs: resolved.toolResultSemanticSummaryTimeoutMs,
  });
  return getToolResultSemanticSummaryConfig();
}

/** Persist and apply tool names eligible for tool-result compaction. */
export function setToolResultCompactionTools(tools: string[]): string[] {
  const nextTools = normalizeToolResultCompactionTools(tools);
  const resolved = writeDomainConfigField(toolsIntegrationDomainSchema, getDomainConfigOptions(), "toolResultCompactionTools", nextTools);
  TOOL_RESULT_COMPACTION_TOOLS = resolved.toolResultCompactionTools;
  return [...TOOL_RESULT_COMPACTION_TOOLS];
}

/** Persist and apply the runtime tool-result compaction toggle. */
export function setToolResultCompactionEnabled(enabled: boolean): boolean {
  const next = Boolean(enabled);
  const resolved = writeDomainConfigField(toolsIntegrationDomainSchema, getDomainConfigOptions(), "toolResultCompactionEnabled", next);
  TOOL_RESULT_COMPACTION_ENABLED = resolved.toolResultCompactionEnabled;
  return TOOL_RESULT_COMPACTION_ENABLED;
}

export function getToolUseMessageBudget(): number {
  return TOOL_USE_MESSAGE_BUDGET;
}

/** Return the hard ceiling for executed tools inside one prompt attempt. */
export function getMidTurnToolExecutionHardCeiling(): number {
  return readDomainConfig(agentRuntimeDomainSchema, getDomainConfigOptions()).midTurnToolExecutionHardCeiling;
}

/** Persist and apply the tool-use budget so subsequent turns use it immediately. */
export function setToolUseMessageBudget(budget: number): number {
  const nextBudget = Number.isFinite(budget)
    ? Math.min(512, Math.max(8, Math.round(Number(budget))))
    : TOOL_USE_MESSAGE_BUDGET;
  const resolved = writeDomainConfigField(
    agentRuntimeDomainSchema,
    getDomainConfigOptions(),
    "toolUseMessageBudget",
    nextBudget,
  );
  Object.assign(AGENT_DOMAIN_CONFIG, resolved);
  TOOL_USE_MESSAGE_BUDGET = resolved.toolUseMessageBudget;
  return TOOL_USE_MESSAGE_BUDGET;
}

function parseOptionalNonNegativeInt(value: unknown, fallback: number): number {
  if (value === undefined || value === null || String(value).trim() === "") return fallback;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) return fallback;
  return Math.max(0, Math.round(parsed));
}

function parsePositiveDurationMs(value: unknown, fallback: number): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.max(1, Math.round(parsed));
}

function parseOptionalNonNegativeDurationMs(value: unknown, fallback: number): number {
  const trimmed = typeof value === "string" ? value.trim().toLowerCase() : "";
  if (trimmed && ["0", "off", "false", "disabled", "no"].includes(trimmed)) return 0;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(0, Math.round(parsed));
}

export function normalizeSmartCompactionMethod(
  value: unknown,
  fallback: SmartCompactionMethod = "selective",
): SmartCompactionMethod {
  const normalized = String(value ?? "").trim().toLowerCase().replace(/[\s-]+/g, "_");
  if (normalized === "traditional_pipelined" || normalized === "pipelined") return "pipelined";
  if (normalized === "selective") return "selective";
  return fallback;
}

function normalizeAutoCompactionScope(value: unknown, fallback: AutoCompactionScope): AutoCompactionScope {
  const normalized = String(value ?? "").trim().toLowerCase().replace(/[\s-]+/g, "_");
  if (normalized === "body_after_prefix" || normalized === "bodyafterprefix") return "body_after_prefix";
  if (normalized === "total") return "total";
  return fallback;
}

function parsePercentWithBounds(value: unknown, fallback: number, minExclusive = 0, maxInclusive = 100): number {
  if (value === undefined || value === null || String(value).trim() === "") return fallback;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= minExclusive || parsed > maxInclusive) return fallback;
  return parsed;
}

export function enforceProgressWatchdogSafety(config: CompactionRuntimeConfig): CompactionRuntimeConfig {
  // Watchdog supervision is opt-in. The in-process compaction timeout remains
  // independent, and callers may keep a timeout value configured while the
  // watchdog is disabled.
  return config;
}

export function getProgressWatchdogSafetyWarning(): string | null {
  return null;
}

export function getCompactionRuntimeConfig(): Readonly<CompactionRuntimeConfig> {
  const domain = getCompactionDomainConfig();
  const resolved: CompactionRuntimeConfig = {
    autoCompactionEnabled: domain.autoCompactionEnabled,
    smartCompactionMethod: domain.smartCompactionMethod,
    remoteCompactionEnabled: getRemoteDomainConfig().remoteCompactionEnabled,
    remoteCompactionTimeoutMs: getRemoteDomainConfig().remoteCompactionTimeoutMs,
    timeoutMs: domain.timeoutMs,
    backoffBaseMs: domain.backoffBaseMs,
    backoffMaxMs: domain.backoffMaxMs,
    progressWatchdogEnabled: getProgressWatchdogConfig().enabled,
    progressWatchdogTimeoutMs: getProgressWatchdogConfig().timeoutMs,
    thresholdPercent: domain.thresholdPercent,
    maxThresholdTokens: domain.maxThresholdTokens,
    autoCompactionScope: domain.autoCompactionScope,
    hardCeilingPercent: domain.hardCeilingPercent,
    warningThreshold: domain.warningThreshold,
    backoffDecayFactor: domain.backoffDecayFactor,
    systemPromptOverheadTokens: domain.systemPromptOverheadTokens,
    compactionRequestOverheadTokens: domain.compactionRequestOverheadTokens,
    tokenEstimateSafetyMultiplier: domain.tokenEstimateSafetyMultiplier,
    progressiveCompaction: domain.progressiveCompaction,
    smartCompactionReasoning: domain.smartCompactionReasoning,
  };
  // Preserve the backoff ordering invariant for direct environment/config-file
  // overrides just as the settings setter does. A max below the base would
  // otherwise shorten the very first failure delay and collapse the series.
  if (resolved.backoffMaxMs < resolved.backoffBaseMs) {
    resolved.backoffMaxMs = resolved.backoffBaseMs;
  }
  return Object.freeze(enforceProgressWatchdogSafety(resolved));
}

export interface CompactionRuntimeConfigPatch {
  autoCompactionEnabled?: boolean;
  smartCompactionMethod?: SmartCompactionMethod;
  remoteCompactionEnabled?: boolean;
  remoteCompactionTimeoutMs?: number;
  timeoutMs?: number;
  backoffBaseMs?: number;
  backoffMaxMs?: number;
  progressWatchdogEnabled?: boolean;
  progressWatchdogTimeoutMs?: number;
  thresholdPercent?: number;
  maxThresholdTokens?: number;
  autoCompactionScope?: AutoCompactionScope;
  hardCeilingPercent?: number;
  warningThreshold?: number;
  backoffDecayFactor?: number;
  systemPromptOverheadTokens?: number;
  compactionRequestOverheadTokens?: number;
  tokenEstimateSafetyMultiplier?: number;
  progressiveCompaction?: boolean;
  smartCompactionReasoning?: string;
}

function applyCompactionRuntimeConfig(
  patch: CompactionRuntimeConfigPatch,
  persist: boolean,
): Readonly<CompactionRuntimeConfig> {
  const current = getCompactionRuntimeConfig();
  const next: CompactionRuntimeConfig = {
    autoCompactionEnabled: typeof patch.autoCompactionEnabled === "boolean"
      ? patch.autoCompactionEnabled
      : current.autoCompactionEnabled,
    smartCompactionMethod: patch.smartCompactionMethod === undefined
      ? current.smartCompactionMethod
      : normalizeSmartCompactionMethod(patch.smartCompactionMethod, current.smartCompactionMethod),
    remoteCompactionEnabled: typeof patch.remoteCompactionEnabled === "boolean"
      ? patch.remoteCompactionEnabled
      : current.remoteCompactionEnabled,
    remoteCompactionTimeoutMs: patch.remoteCompactionTimeoutMs === undefined
      ? current.remoteCompactionTimeoutMs
      : parsePositiveDurationMs(patch.remoteCompactionTimeoutMs, current.remoteCompactionTimeoutMs),
    timeoutMs: patch.timeoutMs === undefined ? current.timeoutMs : parsePositiveDurationMs(patch.timeoutMs, current.timeoutMs),
    backoffBaseMs: patch.backoffBaseMs === undefined ? current.backoffBaseMs : parsePositiveDurationMs(patch.backoffBaseMs, current.backoffBaseMs),
    backoffMaxMs: patch.backoffMaxMs === undefined ? current.backoffMaxMs : parsePositiveDurationMs(patch.backoffMaxMs, current.backoffMaxMs),
    progressWatchdogEnabled: typeof patch.progressWatchdogEnabled === "boolean"
      ? patch.progressWatchdogEnabled
      : current.progressWatchdogEnabled,
    progressWatchdogTimeoutMs: patch.progressWatchdogTimeoutMs === undefined
      ? current.progressWatchdogTimeoutMs
      : parseOptionalNonNegativeDurationMs(patch.progressWatchdogTimeoutMs, current.progressWatchdogTimeoutMs),
    thresholdPercent: typeof patch.thresholdPercent === "number" && patch.thresholdPercent > 0 && patch.thresholdPercent <= 100
      ? patch.thresholdPercent
      : current.thresholdPercent,
    maxThresholdTokens: patch.maxThresholdTokens === undefined
      ? current.maxThresholdTokens
      : parseOptionalNonNegativeInt(patch.maxThresholdTokens, current.maxThresholdTokens),
    autoCompactionScope: patch.autoCompactionScope === undefined
      ? current.autoCompactionScope
      : normalizeAutoCompactionScope(patch.autoCompactionScope, current.autoCompactionScope),
    hardCeilingPercent: patch.hardCeilingPercent === undefined
      ? current.hardCeilingPercent
      : parsePercentWithBounds(patch.hardCeilingPercent, current.hardCeilingPercent),
    warningThreshold: patch.warningThreshold === undefined
      ? current.warningThreshold
      : parseOptionalNonNegativeDurationMs(patch.warningThreshold, current.warningThreshold),
    backoffDecayFactor: typeof patch.backoffDecayFactor === "number" && patch.backoffDecayFactor > 0 && patch.backoffDecayFactor <= 1
      ? patch.backoffDecayFactor
      : current.backoffDecayFactor,
    systemPromptOverheadTokens: patch.systemPromptOverheadTokens === undefined
      ? current.systemPromptOverheadTokens
      : parseOptionalNonNegativeInt(patch.systemPromptOverheadTokens, current.systemPromptOverheadTokens) || current.systemPromptOverheadTokens,
    compactionRequestOverheadTokens: patch.compactionRequestOverheadTokens === undefined
      ? current.compactionRequestOverheadTokens
      : parseOptionalNonNegativeInt(patch.compactionRequestOverheadTokens, current.compactionRequestOverheadTokens) || current.compactionRequestOverheadTokens,
    tokenEstimateSafetyMultiplier: typeof patch.tokenEstimateSafetyMultiplier === "number" && patch.tokenEstimateSafetyMultiplier >= 1
      ? patch.tokenEstimateSafetyMultiplier
      : current.tokenEstimateSafetyMultiplier,
    progressiveCompaction: typeof patch.progressiveCompaction === "boolean"
      ? patch.progressiveCompaction
      : current.progressiveCompaction,
    smartCompactionReasoning: patch.smartCompactionReasoning === undefined
      ? current.smartCompactionReasoning
      : normalizeCompactionReasoningFallback(patch.smartCompactionReasoning),
  };

  if (next.backoffMaxMs < next.backoffBaseMs) {
    next.backoffMaxMs = next.backoffBaseMs;
  }

  if (persist) {
    const config = readJsonConfig(getConfigPath());
    const compaction =
      config.compaction && typeof config.compaction === "object"
        ? { ...(config.compaction as Record<string, unknown>) }
        : {};
    const clearKeys = [
      "autoCompactionEnabled",
      "auto_compaction_enabled",
      "PICLAW_AUTO_COMPACTION_ENABLED",
      "smartCompactionMethod",
      "smart_compaction_method",
      "PICLAW_SMART_COMPACTION_METHOD",
      "remoteCompactionEnabled",
      "remote_compaction_enabled",
      "PICLAW_REMOTE_COMPACTION_ENABLED",
      "remoteCompactionTimeoutMs",
      "remote_compaction_timeout_ms",
      "PICLAW_REMOTE_COMPACTION_TIMEOUT_MS",
      "timeoutMs",
      "timeout_ms",
      "compactionTimeoutMs",
      "backoffBaseMs",
      "backoff_base_ms",
      "compactionBackoffBaseMs",
      "backoffMaxMs",
      "backoff_max_ms",
      "compactionBackoffMaxMs",
      "progressWatchdogEnabled",
      "progress_watchdog_enabled",
      "watchdogEnabled",
      "progressWatchdogTimeoutMs",
      "progress_watchdog_timeout_ms",
      "watchdogTimeoutMs",
      "PICLAW_PROGRESS_WATCHDOG_ENABLED",
      "PICLAW_PROGRESS_WATCHDOG_TIMEOUT_MS",
      "thresholdPercent",
      "threshold_percent",
      "PICLAW_COMPACTION_THRESHOLD_PERCENT",
      "maxThresholdTokens",
      "max_threshold_tokens",
      "compactionMaxThresholdTokens",
      "PICLAW_COMPACTION_MAX_THRESHOLD_TOKENS",
      "autoCompactionScope",
      "auto_compaction_scope",
      "autoCompactScope",
      "PICLAW_AUTO_COMPACTION_SCOPE",
      "hardCeilingPercent",
      "hard_ceiling_percent",
      "compactionHardCeilingPercent",
      "PICLAW_COMPACTION_HARD_CEILING_PERCENT",
      "warningThreshold",
      "warning_threshold",
      "repeatedWarningThreshold",
      "PICLAW_COMPACTION_WARNING_THRESHOLD",
      "backoffDecayFactor",
      "backoff_decay_factor",
      "PICLAW_COMPACTION_BACKOFF_DECAY_FACTOR",
      "PICLAW_COMPACTION_TIMEOUT_MS",
      "PICLAW_COMPACTION_BACKOFF_BASE_MS",
      "PICLAW_COMPACTION_BACKOFF_MAX_MS",
      "systemPromptOverheadTokens",
      "system_prompt_overhead_tokens",
      "PICLAW_SYSTEM_PROMPT_OVERHEAD_TOKENS",
      "compactionRequestOverheadTokens",
      "compaction_request_overhead_tokens",
      "PICLAW_COMPACTION_REQUEST_OVERHEAD_TOKENS",
      "tokenEstimateSafetyMultiplier",
      "token_estimate_safety_multiplier",
      "PICLAW_TOKEN_ESTIMATE_SAFETY_MULTIPLIER",
      "progressiveCompaction",
      "progressive_compaction",
      "PICLAW_PROGRESSIVE_COMPACTION",
      "smartCompactionReasoning",
      "smart_compaction_reasoning",
      "PICLAW_SMART_COMPACTION_REASONING",
    ];
    for (const key of clearKeys) {
      delete compaction[key];
      delete config[key];
    }
    config.compaction = compaction;
    writeJsonConfig(getConfigPath(), config);
    writeDomainConfig(remoteDomainSchema, getDomainConfigOptions(), {
      remoteCompactionEnabled: next.remoteCompactionEnabled,
      remoteCompactionTimeoutMs: next.remoteCompactionTimeoutMs,
    });
  }

  const compactionDomainPatch: CompactionDomainConfig = {
    autoCompactionEnabled: next.autoCompactionEnabled,
    smartCompactionMethod: next.smartCompactionMethod,
    timeoutMs: next.timeoutMs,
    backoffBaseMs: next.backoffBaseMs,
    backoffMaxMs: next.backoffMaxMs,
    thresholdPercent: next.thresholdPercent,
    maxThresholdTokens: next.maxThresholdTokens,
    autoCompactionScope: next.autoCompactionScope,
    hardCeilingPercent: next.hardCeilingPercent,
    warningThreshold: next.warningThreshold,
    backoffDecayFactor: next.backoffDecayFactor,
    idleAutoCompactionDelayMs: getCompactionDomainConfig().idleAutoCompactionDelayMs,
    prePromptForegroundMs: getCompactionDomainConfig().prePromptForegroundMs,
    systemPromptOverheadTokens: next.systemPromptOverheadTokens,
    compactionRequestOverheadTokens: next.compactionRequestOverheadTokens,
    tokenEstimateSafetyMultiplier: next.tokenEstimateSafetyMultiplier,
    progressiveCompaction: next.progressiveCompaction,
    smartCompactionReasoning: next.smartCompactionReasoning,
  };
  if (persist) {
    const resolvedDomain = writeDomainConfig(compactionDomainSchema, getDomainConfigOptions(), compactionDomainPatch);
    compactionDomainConfigOverride = null;
    Object.assign(next, getCompactionDomainConfig(), resolvedDomain);
    if (next.backoffMaxMs < next.backoffBaseMs) next.backoffMaxMs = next.backoffBaseMs;
  } else if (!persist) {
    compactionDomainConfigOverride = {
      autoCompactionEnabled: next.autoCompactionEnabled,
      smartCompactionMethod: next.smartCompactionMethod,
      timeoutMs: next.timeoutMs,
      backoffBaseMs: next.backoffBaseMs,
      backoffMaxMs: next.backoffMaxMs,
      thresholdPercent: next.thresholdPercent,
      maxThresholdTokens: next.maxThresholdTokens,
      autoCompactionScope: next.autoCompactionScope,
      hardCeilingPercent: next.hardCeilingPercent,
      warningThreshold: next.warningThreshold,
      backoffDecayFactor: next.backoffDecayFactor,
      idleAutoCompactionDelayMs: getCompactionDomainConfig().idleAutoCompactionDelayMs,
      prePromptForegroundMs: getCompactionDomainConfig().prePromptForegroundMs,
      systemPromptOverheadTokens: next.systemPromptOverheadTokens,
      compactionRequestOverheadTokens: next.compactionRequestOverheadTokens,
      tokenEstimateSafetyMultiplier: next.tokenEstimateSafetyMultiplier,
      progressiveCompaction: next.progressiveCompaction,
      smartCompactionReasoning: next.smartCompactionReasoning,
    };
  }

  if (persist && (patch.progressWatchdogEnabled !== undefined || patch.progressWatchdogTimeoutMs !== undefined)) {
    const resolvedWatchdog = writeDomainConfig(progressWatchdogDomainSchema, getDomainConfigOptions(), {
      ...(patch.progressWatchdogEnabled !== undefined ? { enabled: next.progressWatchdogEnabled } : {}),
      ...(patch.progressWatchdogTimeoutMs !== undefined ? { timeoutMs: next.progressWatchdogTimeoutMs } : {}),
    });
    progressWatchdogConfigOverride = null;
    next.progressWatchdogEnabled = resolvedWatchdog.enabled;
    next.progressWatchdogTimeoutMs = resolvedWatchdog.timeoutMs;
  } else if (!persist) {
    progressWatchdogConfigOverride = {
      enabled: next.progressWatchdogEnabled,
      timeoutMs: next.progressWatchdogTimeoutMs,
    };
  }

  return getCompactionRuntimeConfig();
}

export function setCompactionRuntimeConfig(
  patch: CompactionRuntimeConfigPatch,
): Readonly<CompactionRuntimeConfig> {
  return applyCompactionRuntimeConfig(patch, true);
}

/** Test-only runtime override that cannot rewrite the workspace config file. */
export function resetCompactionRuntimeConfigForTests(): void {
  if (process.env.PICLAW_DB_IN_MEMORY !== "1" && process.env.NODE_ENV !== "test") {
    throw new Error("resetCompactionRuntimeConfigForTests requires a test runtime");
  }
  compactionDomainConfigOverride = null;
  progressWatchdogConfigOverride = null;
  remoteDomainConfigOverride = null;
}

export function setCompactionRuntimeConfigForTests(
  patch: CompactionRuntimeConfigPatch,
): Readonly<CompactionRuntimeConfig> {
  if (process.env.PICLAW_DB_IN_MEMORY !== "1" && process.env.NODE_ENV !== "test") {
    throw new Error("setCompactionRuntimeConfigForTests requires a test runtime");
  }
  const envKeys = [
    "PICLAW_REMOTE_COMPACTION_ENABLED",
    "PICLAW_REMOTE_COMPACTION_TIMEOUT_MS",
    "PICLAW_SYSTEM_PROMPT_OVERHEAD_TOKENS",
    "PICLAW_COMPACTION_REQUEST_OVERHEAD_TOKENS",
    "PICLAW_TOKEN_ESTIMATE_SAFETY_MULTIPLIER",
    "PICLAW_PROGRESSIVE_COMPACTION",
    "PICLAW_SMART_COMPACTION_REASONING",
  ];
  for (const key of envKeys) delete process.env[key];
  if (patch.remoteCompactionEnabled !== undefined || patch.remoteCompactionTimeoutMs !== undefined) {
    remoteDomainConfigOverride = {
      ...(patch.remoteCompactionEnabled !== undefined ? { remoteCompactionEnabled: Boolean(patch.remoteCompactionEnabled) } : {}),
      ...(patch.remoteCompactionTimeoutMs !== undefined ? { remoteCompactionTimeoutMs: parsePositiveDurationMs(patch.remoteCompactionTimeoutMs, getRemoteDomainConfig().remoteCompactionTimeoutMs) } : {}),
    };
  }
  const result = applyCompactionRuntimeConfig(patch, false);
  // Prevent process-env precedence from leaking this test override into later
  // module reloads; in-memory tests use the domain overrides directly.
  for (const key of envKeys) delete process.env[key];
  return result;
}

// ---------------------------------------------------------------------------
// Tool activation defaults – used by lazy tool activation.
// ---------------------------------------------------------------------------

/** Typed tool-activation config grouped for default active-tool selection. */
export interface ToolActivationConfig {
  additionalDefaultTools: string[];
}

/** Grouped tool-activation config loaded from `.piclaw/config.json`. */
export const TOOL_ACTIVATION_CONFIG = Object.freeze<ToolActivationConfig>({
  additionalDefaultTools: configAdditionalDefaultTools ?? [],
});

/** FTS match mode for multi-word queries: "or" = any keyword, "and" = all keywords. */
export type SearchMatchMode = "or" | "and";

/** Typed workspace-search config grouped for FTS root and extension selection. */
export interface WorkspaceSearchConfig {
  roots: string[];
  /** Additional file extensions to index (merged with built-in defaults). */
  extraExtensions: string[];
}

const initialToolsIntegrationConfig = getToolsIntegrationConfig();

/**
 * Stable public config object with live typed-domain values. Some callers keep
 * object identity while tests/settings can change compatibility inputs between
 * reads, so expose accessor properties instead of freezing one startup snapshot.
 */
export const WORKSPACE_SEARCH_CONFIG = Object.freeze<WorkspaceSearchConfig>({
  get roots() { return getToolsIntegrationConfig().workspaceSearchRoots; },
  get extraExtensions() { return getToolsIntegrationConfig().workspaceSearchExtensions; },
});

/** Return grouped workspace-search config for runtime wiring and tests. */
export function getWorkspaceSearchConfig(): Readonly<WorkspaceSearchConfig> {
  return WORKSPACE_SEARCH_CONFIG;
}

// ---------------------------------------------------------------------------
// Search match mode – controls whether multi-word FTS queries use OR or AND.
// ---------------------------------------------------------------------------

function parseSearchMatchMode(raw: string | null | undefined): SearchMatchMode {
  const lower = (raw ?? "").trim().toLowerCase();
  return lower === "and" ? "and" : "or";
}

let SEARCH_MATCH_MODE: SearchMatchMode = parseSearchMatchMode(
  process.env.PICLAW_SEARCH_MATCH_MODE ?? configSearchMatchMode,
);

/** Return the current FTS match mode ("or" = any keyword, "and" = all keywords). */
export function getSearchMatchMode(): SearchMatchMode {
  // Read dynamically so test env overrides take effect.
  const envOverride = process.env.PICLAW_SEARCH_MATCH_MODE?.trim().toLowerCase();
  if (envOverride === "and" || envOverride === "or") return envOverride;
  return SEARCH_MATCH_MODE;
}

/** Persist and apply the search match mode. */
export function setSearchMatchMode(mode: SearchMatchMode): SearchMatchMode {
  const nextMode: SearchMatchMode = mode === "and" ? "and" : "or";
  const config = readJsonConfig(getConfigPath());
  const tools =
    config.tools && typeof config.tools === "object"
      ? { ...(config.tools as Record<string, unknown>) }
      : {};
  const clearKeys = ["searchMatchMode", "search_match_mode", "PICLAW_SEARCH_MATCH_MODE"];
  for (const key of clearKeys) {
    delete tools[key];
  }
  tools.searchMatchMode = nextMode;
  config.tools = tools;
  writeJsonConfig(getConfigPath(), config);

  process.env.PICLAW_SEARCH_MATCH_MODE = nextMode;
  SEARCH_MATCH_MODE = nextMode;
  return SEARCH_MATCH_MODE;
}

// ---------------------------------------------------------------------------
// Model scoping – optionally apply Pi enabledModels outside the TUI.
// ---------------------------------------------------------------------------

let SCOPED_MODELS_ONLY = initialToolsIntegrationConfig.scopedModelsOnly;

/** Return true when Piclaw should filter non-TUI model lists by Pi enabledModels. */
export function getScopedModelsOnly(): boolean {
  return getToolsIntegrationConfig().scopedModelsOnly;
}

/** Persist and apply global model scoping for Piclaw list/model-picker surfaces. */
export function setScopedModelsOnly(enabled: boolean): boolean {
  const next = Boolean(enabled);
  writeDomainConfigField(toolsIntegrationDomainSchema, getDomainConfigOptions(), "scopedModelsOnly", next);
  SCOPED_MODELS_ONLY = next;
  return SCOPED_MODELS_ONLY;
}

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

/** Return grouped tool-activation config for runtime wiring and tests. */
export function getToolActivationConfig(): Readonly<ToolActivationConfig> {
  return TOOL_ACTIVATION_CONFIG;
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

/**
 * Rotate/redefine the web-login TOTP secret and persist it to config.json.
 *
 * If a runtime secret env var exists, we update it so the new value takes effect
 * immediately in the same process. Persistence remains in `.piclaw/config.json`
 * under the `web.totpSecret` key.
 */
export function setWebTotpSecret(secret: string): string {
  const next = (secret || "").trim();

  const config = readJsonConfig(getConfigPath());
  const web =
    config.web && typeof config.web === "object"
      ? { ...(config.web as Record<string, unknown>) }
      : {};
  const totpKeys = [
    "totpSecret",
    "totp_secret",
    "webTotpSecret",
    "web_totp_secret",
    "PICLAW_WEB_TOTP_SECRET",
    "PICLAW_TOTP_SECRET",
  ];

  for (const key of totpKeys) {
    delete web[key];
  }

  if (next) {
    web.totpSecret = next;
  }

  if (Object.keys(web).length > 0) {
    config.web = web;
  } else {
    delete config.web;
  }

  writeJsonConfig(getConfigPath(), config);

  WEB_RUNTIME_CONFIG.totpSecret = next;
  if (next) {
    process.env.PICLAW_WEB_TOTP_SECRET = next;
  } else {
    delete process.env.PICLAW_WEB_TOTP_SECRET;
  }

  return WEB_RUNTIME_CONFIG.totpSecret;
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

function parseRetentionMs(msValue: string | undefined, daysValue: string | undefined): number | undefined {
  const explicitMs = parsePositiveInteger(msValue);
  if (explicitMs !== undefined) return explicitMs;
  const explicitDays = parsePositiveInteger(daysValue);
  return explicitDays !== undefined ? explicitDays * DAY_MS : undefined;
}

function parseCleanupIntervalMs(value: string | undefined, fallback: number): number {
  return parsePositiveInteger(value) ?? fallback;
}

const DEFAULT_RETENTION_CLEANUP_INTERVAL_MS = 60 * 60 * 1000;

/** Typed agent-run-log retention settings grouped for runtime startup wiring. */
export type AgentLogConfig = RetentionCleanupConfig;

const agentLogDomainSchema = registerDomainConfig<AgentLogConfig>({
  domain: "logging",
  fields: {
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

/** Grouped agent-run-log retention settings. Defaults/caps retention at 30 days. */
export const AGENT_LOG_CONFIG = Object.freeze<AgentLogConfig>(
  readDomainConfig(agentLogDomainSchema, getDomainConfigOptions()),
);

/** Return the grouped agent-run-log retention settings for startup wiring and tests. */
export function getAgentLogConfig(): Readonly<AgentLogConfig> {
  return AGENT_LOG_CONFIG;
}

/** Typed tool-output retention settings grouped for runtime startup wiring. */
export type ToolOutputConfig = RetentionCleanupConfig;

/** Stable public object with live typed-domain retention values. */
export const TOOL_OUTPUT_CONFIG = Object.freeze<ToolOutputConfig>({
  get retentionMs() { return getToolsIntegrationConfig().toolOutputRetentionMs; },
  get cleanupIntervalMs() { return getToolsIntegrationConfig().toolOutputCleanupIntervalMs; },
});

/** Return the grouped tool-output settings for startup wiring and tests. */
export function getToolOutputConfig(): Readonly<ToolOutputConfig> {
  return TOOL_OUTPUT_CONFIG;
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
