// Web-client internationalization (i18n) substrate.
//
// Slice 1 foundation for issue #392:
// - English is the default and fallback locale.
// - An explicit locale override is persisted in localStorage (`piclaw_locale`).
// - Browser language is used only as a default *hint* when nothing is stored.
// - A shared `t()` helper plus Preact hooks (`useLocale` / `useTranslation`)
//   resolve web-chrome strings with safe fallback to English, then to the key.
//
// Locale-code scheme is locked here so Chinese and Japanese land as peer
// locales on the same key set:
//   - `en`    English (default / fallback)
//   - `zh-CN` Simplified Chinese
//   - `ja`    Japanese
// Legacy/loose inputs (`zh`, `zh_cn`, `ja-JP`, ...) normalize into the above.

import { getLocalStorageItem, setLocalStorageItem } from './storage.js';
import { useEffect, useState } from '../vendor/preact-htm.js';

export type Locale = 'en' | 'zh-CN' | 'ja';

export const DEFAULT_LOCALE: Locale = 'en';
export const SUPPORTED_LOCALES: readonly Locale[] = ['en', 'zh-CN', 'ja'];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  'zh-CN': '简体中文',
  ja: '日本語',
};

const LOCALE_STORAGE_KEY = 'piclaw_locale';
const LOCALE_CHANGE_EVENT = 'piclaw-locale-change';

// English is the source-of-truth key set. Other locales are partial and fall
// back to English per key, so an untranslated key never breaks the UI.
type MessageKey =
  | 'compose.placeholder'
  | 'compose.send'
  | 'compose.stop'
  | 'workspace.title'
  | 'workspace.newFile'
  | 'workspace.refresh'
  | 'shell.settings'
  | 'shell.newChat'
  | 'shell.connecting'
  | 'shell.connected'
  | 'language.label';

const EN: Record<MessageKey, string> = {
  'compose.placeholder': 'Type a message…',
  'compose.send': 'Send',
  'compose.stop': 'Stop',
  'workspace.title': 'Workspace',
  'workspace.newFile': 'New file',
  'workspace.refresh': 'Refresh',
  'shell.settings': 'Settings',
  'shell.newChat': 'New chat',
  'shell.connecting': 'Connecting…',
  'shell.connected': 'Connected',
  'language.label': 'Language',
};

const ZH_CN: Partial<Record<MessageKey, string>> = {
  'compose.placeholder': '输入消息…',
  'compose.send': '发送',
  'compose.stop': '停止',
  'workspace.title': '工作区',
  'workspace.newFile': '新建文件',
  'workspace.refresh': '刷新',
  'shell.settings': '设置',
  'shell.newChat': '新建对话',
  'shell.connecting': '连接中…',
  'shell.connected': '已连接',
  'language.label': '语言',
};

const JA: Partial<Record<MessageKey, string>> = {
  'compose.placeholder': 'メッセージを入力…',
  'compose.send': '送信',
  'compose.stop': '停止',
  'workspace.title': 'ワークスペース',
  'workspace.newFile': '新規ファイル',
  'workspace.refresh': '更新',
  'shell.settings': '設定',
  'shell.newChat': '新規チャット',
  'shell.connecting': '接続中…',
  'shell.connected': '接続済み',
  'language.label': '言語',
};

const TRANSLATIONS: Record<Locale, Partial<Record<MessageKey, string>>> = {
  en: EN,
  'zh-CN': ZH_CN,
  ja: JA,
};

let currentLocale: Locale = DEFAULT_LOCALE;
let initialized = false;

/** Normalize an arbitrary locale-ish string into a supported `Locale`. */
export function normalizeLocale(value: unknown): Locale {
  const raw = String(value ?? '').trim().toLowerCase().replace(/_/g, '-');
  if (!raw) return DEFAULT_LOCALE;
  if (raw === 'zh-cn' || raw === 'zh' || raw === 'zh-hans' || raw.startsWith('zh-hans')) {
    return 'zh-CN';
  }
  if (raw === 'ja' || raw.startsWith('ja-')) return 'ja';
  if (raw === 'en' || raw.startsWith('en-')) return 'en';
  return DEFAULT_LOCALE;
}

/** Best-effort browser-language hint, used only when no locale is stored. */
function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;
  const candidates = [
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
    navigator.language,
  ].filter((c): c is string => typeof c === 'string' && c.length > 0);
  for (const candidate of candidates) {
    const normalized = normalizeLocale(candidate);
    if (normalized !== DEFAULT_LOCALE) return normalized;
  }
  return DEFAULT_LOCALE;
}

/** Resolve the initial locale: stored explicit override wins over browser hint. */
export function resolveInitialLocale(): Locale {
  const stored = getLocalStorageItem(LOCALE_STORAGE_KEY);
  if (stored) return normalizeLocale(stored);
  return detectBrowserLocale();
}

function emitLocaleChange(locale: Locale) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(LOCALE_CHANGE_EVENT, { detail: { locale } }));
}

/** Current active locale. Initializes from storage/browser on first read. */
export function getLocale(): Locale {
  if (!initialized) initLocale();
  return currentLocale;
}

/**
 * Initialize locale state from storage/browser hint. Idempotent; safe to call
 * from app bootstrap. Returns the resolved locale.
 */
export function initLocale(): Locale {
  currentLocale = resolveInitialLocale();
  initialized = true;
  return currentLocale;
}

/** Set the active locale explicitly and persist it. No-op if unchanged. */
export function setLocale(value: unknown, options: { persist?: boolean } = {}): Locale {
  const next = normalizeLocale(value);
  initialized = true;
  if (next === currentLocale && options.persist === false) return currentLocale;
  currentLocale = next;
  if (options.persist !== false) setLocalStorageItem(LOCALE_STORAGE_KEY, next);
  emitLocaleChange(next);
  return currentLocale;
}

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, name) => {
    const replacement = vars[name];
    return replacement === undefined || replacement === null ? match : String(replacement);
  });
}

/**
 * Translate a key for a locale (defaults to the active locale).
 * Falls back to English, then to the key itself, so missing keys never break.
 */
export function translate(
  key: MessageKey,
  vars?: Record<string, string | number>,
  locale: Locale = getLocale(),
): string {
  const fromLocale = TRANSLATIONS[locale]?.[key];
  const template = fromLocale ?? EN[key] ?? key;
  return interpolate(template, vars);
}

/** Convenience alias for the active-locale translation path. */
export function t(key: MessageKey, vars?: Record<string, string | number>): string {
  return translate(key, vars);
}

/**
 * Preact hook: subscribe to locale changes.
 * Returns the current locale and a setter that persists + broadcasts.
 */
export function useLocale(): [Locale, (value: unknown) => void] {
  const [locale, setLocaleState] = useState<Locale>(getLocale());
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const handler = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      const next = normalizeLocale(detail?.locale ?? getLocale());
      setLocaleState(next);
    };
    window.addEventListener(LOCALE_CHANGE_EVENT, handler);
    // Re-sync in case locale changed between initial render and effect.
    setLocaleState(getLocale());
    return () => window.removeEventListener(LOCALE_CHANGE_EVENT, handler);
  }, []);
  return [locale, (value: unknown) => setLocale(value)];
}

/**
 * Preact hook: locale-aware translation bound to the active locale.
 * Re-renders the consuming component when the locale changes.
 */
export function useTranslation(): {
  locale: Locale;
  setLocale: (value: unknown) => void;
  t: (key: MessageKey, vars?: Record<string, string | number>) => string;
} {
  const [locale, setLocaleValue] = useLocale();
  return {
    locale,
    setLocale: setLocaleValue,
    t: (key: MessageKey, vars?: Record<string, string | number>) => translate(key, vars, locale),
  };
}

export type { MessageKey };
