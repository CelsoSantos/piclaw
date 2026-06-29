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
  | 'compose.searchPlaceholder'
  | 'compose.clearAll'
  | 'compose.clearAllTitle'
  | 'compose.scope'
  | 'compose.searchScope'
  | 'compose.scopeCurrent'
  | 'compose.scopeBranchFamily'
  | 'compose.scopeAll'
  | 'compose.filterImages'
  | 'compose.filterAttachments'
  | 'compose.search'
  | 'compose.closeSearch'
  | 'compose.shareLocation'
  | 'compose.attachFile'
  | 'workspace.title'
  | 'workspace.newFile'
  | 'workspace.refresh'
  | 'workspace.actions'
  | 'workspace.uploadFiles'
  | 'workspace.reindexing'
  | 'workspace.deleteFile'
  | 'workspace.download'
  | 'workspace.uploadToFolder'
  | 'workspace.addFolderHint'
  | 'workspace.downloadZip'
  | 'workspace.openInTab'
  | 'workspace.openInEditor'
  | 'workspace.renameSelected'
  | 'workspace.downloadSelectedFile'
  | 'workspace.downloadSelectedFolder'
  | 'workspace.deleteSelectedFile'
  | 'shell.settings'
  | 'shell.newChat'
  | 'shell.connecting'
  | 'shell.connected'
  | 'language.label'
  // Timeline / workspace hamburger menu (first localized v1 surface).
  | 'menu.title'
  | 'menu.showWorkspace'
  | 'menu.hideWorkspace'
  | 'menu.openExplorer'
  | 'menu.chatOnly'
  | 'menu.exitChatOnly'
  | 'menu.openTerminal'
  | 'menu.openVnc'
  | 'menu.newFile'
  | 'menu.openRecent'
  | 'menu.refreshTree'
  | 'menu.reindex'
  | 'menu.showHidden'
  | 'menu.hideHidden'
  | 'menu.scale'
  | 'menu.settings';

const EN: Record<MessageKey, string> = {
  'compose.placeholder': 'Message (Enter to send, Shift+Enter for newline)...',
  'compose.send': 'Send',
  'compose.stop': 'Stop',
  'compose.searchPlaceholder': 'Search (Enter to run)...',
  'compose.clearAll': 'Clear all',
  'compose.clearAllTitle': 'Clear all attachments and references',
  'compose.scope': 'Scope',
  'compose.searchScope': 'Search scope',
  'compose.scopeCurrent': 'Current',
  'compose.scopeBranchFamily': 'Branch family',
  'compose.scopeAll': 'All chats',
  'compose.filterImages': 'Images',
  'compose.filterAttachments': 'Attachments',
  'compose.search': 'Search',
  'compose.closeSearch': 'Close search',
  'compose.shareLocation': 'Share location',
  'compose.attachFile': 'Attach file',
  'workspace.title': 'Workspace',
  'workspace.newFile': 'New file',
  'workspace.refresh': 'Refresh',
  'workspace.actions': 'Workspace actions',
  'workspace.uploadFiles': 'Upload files',
  'workspace.reindexing': 'Reindexing workspace…',
  'workspace.deleteFile': 'Delete file',
  'workspace.download': 'Download',
  'workspace.uploadToFolder': 'Upload files to this folder',
  'workspace.addFolderHint': 'Add folder hint to compose',
  'workspace.downloadZip': 'Download folder as zip',
  'workspace.openInTab': 'Open in tab',
  'workspace.openInEditor': 'Open in editor',
  'workspace.renameSelected': 'Rename selected',
  'workspace.downloadSelectedFile': 'Download selected file',
  'workspace.downloadSelectedFolder': 'Download selected folder (zip)',
  'workspace.deleteSelectedFile': 'Delete selected file',
  'shell.settings': 'Settings',
  'shell.newChat': 'New chat',
  'shell.connecting': 'Connecting…',
  'shell.connected': 'Connected',
  'language.label': 'Language',
  'menu.title': 'Menu',
  'menu.showWorkspace': 'Show workspace',
  'menu.hideWorkspace': 'Hide workspace',
  'menu.openExplorer': 'Open explorer',
  'menu.chatOnly': 'Chat-only mode',
  'menu.exitChatOnly': 'Exit chat-only mode',
  'menu.openTerminal': 'Open terminal in tab',
  'menu.openVnc': 'Open VNC in tab',
  'menu.newFile': 'New file',
  'menu.openRecent': 'Open Recent',
  'menu.refreshTree': 'Refresh tree',
  'menu.reindex': 'Reindex workspace',
  'menu.showHidden': 'Show hidden files',
  'menu.hideHidden': 'Hide hidden files',
  'menu.scale': 'Scale',
  'menu.settings': 'Settings',
};

const ZH_CN: Partial<Record<MessageKey, string>> = {
  'compose.placeholder': '输入消息（回车发送，Shift+回车换行）...',
  'compose.send': '发送',
  'compose.stop': '停止',
  'compose.searchPlaceholder': '搜索（回车运行）...',
  'compose.clearAll': '清除全部',
  'compose.clearAllTitle': '清除所有附件和引用',
  'compose.scope': '范围',
  'compose.searchScope': '搜索范围',
  'compose.scopeCurrent': '当前',
  'compose.scopeBranchFamily': '分支系列',
  'compose.scopeAll': '所有聊天',
  'compose.filterImages': '图片',
  'compose.filterAttachments': '附件',
  'compose.search': '搜索',
  'compose.closeSearch': '关闭搜索',
  'compose.shareLocation': '分享位置',
  'compose.attachFile': '附加文件',
  'workspace.title': '工作区',
  'workspace.newFile': '新建文件',
  'workspace.refresh': '刷新',
  'workspace.actions': '工作区操作',
  'workspace.uploadFiles': '上传文件',
  'workspace.reindexing': '正在重建索引…',
  'workspace.deleteFile': '删除文件',
  'workspace.download': '下载',
  'workspace.uploadToFolder': '上传文件到此文件夹',
  'workspace.addFolderHint': '将文件夹提示添加到输入框',
  'workspace.downloadZip': '将文件夹下载为 zip',
  'workspace.openInTab': '在标签页打开',
  'workspace.openInEditor': '在编辑器打开',
  'workspace.renameSelected': '重命名所选',
  'workspace.downloadSelectedFile': '下载所选文件',
  'workspace.downloadSelectedFolder': '下载所选文件夹（zip）',
  'workspace.deleteSelectedFile': '删除所选文件',
  'shell.settings': '设置',
  'shell.newChat': '新建对话',
  'shell.connecting': '连接中…',
  'shell.connected': '已连接',
  'language.label': '语言',
  'menu.title': '菜单',
  'menu.showWorkspace': '显示工作区',
  'menu.hideWorkspace': '隐藏工作区',
  'menu.openExplorer': '打开资源管理器',
  'menu.chatOnly': '仅聊天模式',
  'menu.exitChatOnly': '退出仅聊天模式',
  'menu.openTerminal': '在标签页中打开终端',
  'menu.openVnc': '在标签页中打开 VNC',
  'menu.newFile': '新建文件',
  'menu.openRecent': '打开最近文件',
  'menu.refreshTree': '刷新目录树',
  'menu.reindex': '重建工作区索引',
  'menu.showHidden': '显示隐藏文件',
  'menu.hideHidden': '隐藏隐藏文件',
  'menu.scale': '缩放',
  'menu.settings': '设置',
};

const JA: Partial<Record<MessageKey, string>> = {
  'compose.placeholder': 'メッセージ（Enterで送信、Shift+Enterで改行）...',
  'compose.send': '送信',
  'compose.stop': '停止',
  'compose.searchPlaceholder': '検索（Enterで実行）...',
  'compose.clearAll': 'すべてクリア',
  'compose.clearAllTitle': 'すべての添付と参照をクリア',
  'compose.scope': '範囲',
  'compose.searchScope': '検索範囲',
  'compose.scopeCurrent': '現在',
  'compose.scopeBranchFamily': 'ブランチファミリー',
  'compose.scopeAll': 'すべてのチャット',
  'compose.filterImages': '画像',
  'compose.filterAttachments': '添付',
  'compose.search': '検索',
  'compose.closeSearch': '検索を閉じる',
  'compose.shareLocation': '位置を共有',
  'compose.attachFile': 'ファイルを添付',
  'workspace.title': 'ワークスペース',
  'workspace.newFile': '新規ファイル',
  'workspace.refresh': '更新',
  'workspace.actions': 'ワークスペース操作',
  'workspace.uploadFiles': 'ファイルをアップロード',
  'workspace.reindexing': 'ワークスペースを再インデックス中…',
  'workspace.deleteFile': 'ファイルを削除',
  'workspace.download': 'ダウンロード',
  'workspace.uploadToFolder': 'このフォルダにファイルをアップロード',
  'workspace.addFolderHint': 'フォルダのヒントを入力欄に追加',
  'workspace.downloadZip': 'フォルダをzipでダウンロード',
  'workspace.openInTab': 'タブで開く',
  'workspace.openInEditor': 'エディタで開く',
  'workspace.renameSelected': '選択項目の名前を変更',
  'workspace.downloadSelectedFile': '選択したファイルをダウンロード',
  'workspace.downloadSelectedFolder': '選択したフォルダをダウンロード（zip）',
  'workspace.deleteSelectedFile': '選択したファイルを削除',
  'shell.settings': '設定',
  'shell.newChat': '新規チャット',
  'shell.connecting': '接続中…',
  'shell.connected': '接続済み',
  'language.label': '言語',
  'menu.title': 'メニュー',
  'menu.showWorkspace': 'ワークスペースを表示',
  'menu.hideWorkspace': 'ワークスペースを非表示',
  'menu.openExplorer': 'エクスプローラーを開く',
  'menu.chatOnly': 'チャットのみモード',
  'menu.exitChatOnly': 'チャットのみモードを終了',
  'menu.openTerminal': 'ターミナルをタブで開く',
  'menu.openVnc': 'VNC をタブで開く',
  'menu.newFile': '新規ファイル',
  'menu.openRecent': '最近のファイルを開く',
  'menu.refreshTree': 'ツリーを更新',
  'menu.reindex': 'ワークスペースを再インデックス',
  'menu.showHidden': '隠しファイルを表示',
  'menu.hideHidden': '隠しファイルを非表示',
  'menu.scale': '拡大縮小',
  'menu.settings': '設定',
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
