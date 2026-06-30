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
  | 'compose.queueControls'
  | 'compose.moveUp'
  | 'compose.moveUpQueue'
  | 'compose.moveDown'
  | 'compose.moveDownQueue'
  | 'compose.editInCompose'
  | 'compose.returnToEditor'
  | 'compose.injectSteer'
  | 'compose.steer'
  | 'compose.cancelQueued'
  | 'compose.resizeInput'
  | 'compose.resizeInputHint'
  | 'compose.modelPicker'
  | 'compose.sessionsAndAgents'
  | 'compose.openModelPicker'
  | 'compose.newBranchTitle'
  | 'compose.newRootTitle'
  | 'compose.renameSessionTitle'
  | 'compose.pruneSessionTitle'
  | 'compose.filterImagesTitle'
  | 'compose.filterAttachmentsTitle'
  | 'compose.selectModel'
  | 'compose.loadingModels'
  | 'compose.noModels'
  | 'compose.nextModel'
  | 'compose.manageSessions'
  | 'compose.noSessions'
  | 'compose.newBranch'
  | 'compose.newRoot'
  | 'compose.mergeCurrent'
  | 'compose.renameCurrent'
  | 'compose.deleteCurrent'
  | 'compose.mergeInto'
  | 'compose.mergeBlocked'
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
  // Settings dialog chrome (nav labels, header, search placeholders).
  | 'settings.title'
  | 'settings.close'
  | 'settings.filter'
  | 'settings.loading'
  | 'settings.section.general'
  | 'settings.section.sessions'
  | 'settings.section.recordings'
  | 'settings.section.compaction'
  | 'settings.section.keyboard'
  | 'settings.section.workspace'
  | 'settings.section.environment'
  | 'settings.section.providers'
  | 'settings.section.models'
  | 'settings.section.theme'
  | 'settings.section.scheduled-tasks'
  | 'settings.section.quick-actions'
  | 'settings.section.keychain'
  | 'settings.section.tools'
  | 'settings.section.addons'
  | 'settings.placeholder.recordings'
  | 'settings.placeholder.keyboard'
  | 'settings.placeholder.environment'
  | 'settings.placeholder.models'
  | 'settings.placeholder.scheduled-tasks'
  | 'settings.placeholder.quick-actions'
  | 'settings.placeholder.keychain'
  | 'settings.placeholder.tools'
  | 'settings.placeholder.addons'
  // Other top-level surfaces (post, tabs, status, annotator, tree, preview).
  | 'preview.close'
  | 'preview.loading'
  | 'preview.files'
  | 'preview.folders'
  | 'preview.compressed'
  | 'preview.uncompressed'
  | 'preview.name'
  | 'preview.type'
  | 'preview.method'
  | 'preview.size'
  | 'post.deleteMessage'
  | 'post.tooLarge'
  | 'post.previewTruncated'
  | 'post.submitted'
  | 'post.discard'
  | 'post.save'
  | 'post.cancel'
  | 'post.addNote'
  | 'post.addNotePlaceholder'
  | 'tab.close'
  | 'tab.closeOthers'
  | 'tab.closeAll'
  | 'tab.reattach'
  | 'tab.openInWindow'
  | 'tab.openInNewTab'
  | 'tab.pinned'
  | 'tab.detached'
  | 'tab.openSeparateWindow'
  | 'status.trackedVariables'
  | 'status.attachToSession'
  | 'status.files'
  | 'status.proposedDiff'
  | 'status.copyTmux'
  | 'status.experimentDuration'
  | 'status.sinceLastActivity'
  | 'annotator.title'
  | 'annotator.typeLabel'
  | 'annotator.undo'
  | 'annotator.resetZoom'
  | 'tree.filter'
  | 'tree.sessionTree'
  | 'btw.label'
  | 'btw.close'
  | 'btw.thinking'
  | 'mdpreview.close'
  | 'mdpreview.unavailable'
  | 'widget.close'
  | 'oobe.gettingStarted'
  | 'oobe.needsSetupTitle'
  | 'oobe.configuredTitle'
  | 'oobe.needsSetupBody'
  | 'oobe.configuredBody'
  | 'oobe.openSettings'
  | 'oobe.dismiss'
  | 'oobe.done'
  | 'palette.placeholder'
  | 'palette.hideWorkspace'
  | 'palette.showWorkspace'
  | 'palette.hideWorkspaceDesc'
  | 'palette.showWorkspaceDesc'
  | 'palette.exitChatOnly'
  | 'palette.chatOnly'
  | 'palette.exitChatOnlyDesc'
  | 'palette.chatOnlyDesc'
  | 'palette.groupAgents'
  | 'palette.groupWorkspace'
  | 'palette.groupSlash'
  | 'palette.hintMove'
  | 'palette.hintSelect'
  | 'palette.hintPopOut'
  | 'palette.hintClose'
  // Settings sub-panes (slice 1: sessions, editor, appearance).
  | 'settings.appliedNotice'
  | 'settings.sessions.lifecycle'
  | 'settings.sessions.autoRotate'
  | 'settings.sessions.maxSize'
  | 'settings.sessions.maxSizeAria'
  | 'settings.sessions.agentBehaviour'
  | 'settings.sessions.toolBudget'
  | 'settings.sessions.toolBudgetAria'
  | 'settings.sessions.toolBudgetHint'
  | 'settings.sessions.isolation'
  | 'settings.sessions.isolationNone'
  | 'settings.sessions.isolationSummary'
  | 'settings.sessions.isolationFull'
  | 'settings.editor.heading'
  | 'settings.editor.vimMode'
  | 'settings.editor.showWhitespace'
  | 'settings.editor.livePreview'
  | 'settings.editor.fontSize'
  | 'settings.editor.fontSizeAria'
  | 'settings.editor.fontFamily'
  | 'settings.editor.fontFamilyPlaceholder'
  | 'settings.editor.localOnlyHint'
  | 'settings.appearance.syncing'
  | 'settings.appearance.default'
  | 'settings.appearance.autoLightDark'
  | 'settings.appearance.tint'
  | 'settings.appearance.clearTint'
  | 'settings.appearance.none'
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
  'compose.queueControls': 'Queued follow-up controls',
  'compose.moveUp': 'Move up',
  'compose.moveUpQueue': 'Move up in queue',
  'compose.moveDown': 'Move down',
  'compose.moveDownQueue': 'Move down in queue',
  'compose.editInCompose': 'Edit in compose',
  'compose.returnToEditor': 'Return queued message to editor',
  'compose.injectSteer': 'Inject queued follow-up as steer',
  'compose.steer': 'Steer',
  'compose.cancelQueued': 'Cancel queued message',
  'compose.resizeInput': 'Resize message input',
  'compose.resizeInputHint': 'Drag to resize message input',
  'compose.modelPicker': 'Model picker',
  'compose.sessionsAndAgents': 'Sessions and agents',
  'compose.openModelPicker': 'Open model picker',
  'compose.newBranchTitle': 'Create a new branch from this chat',
  'compose.newRootTitle': 'Create a clean root session such as web:ops',
  'compose.renameSessionTitle': 'Rename the current session',
  'compose.pruneSessionTitle': 'Delete (prune) current agent/session branch',
  'compose.filterImagesTitle': 'Only show messages with images',
  'compose.filterAttachmentsTitle': 'Only show messages with attachments',
  'compose.selectModel': 'Select model',
  'compose.loadingModels': 'Loading models…',
  'compose.noModels': 'No models available.',
  'compose.nextModel': 'Next model',
  'compose.manageSessions': 'Manage sessions & agents',
  'compose.noSessions': 'No other sessions yet.',
  'compose.newBranch': 'New branch',
  'compose.newRoot': 'New root…',
  'compose.mergeCurrent': 'Merge current w/ parent',
  'compose.renameCurrent': 'Rename current…',
  'compose.deleteCurrent': 'Delete current…',
  'compose.mergeInto': 'Merge this branch into {target}',
  'compose.mergeBlocked': 'This branch cannot be merged while active or while it has children',
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
  'settings.title': 'Settings',
  'settings.close': 'Close (Esc)',
  'settings.filter': 'Filter…',
  'settings.loading': 'Loading settings…',
  'settings.section.general': 'General',
  'settings.section.sessions': 'Sessions',
  'settings.section.recordings': 'Recordings',
  'settings.section.compaction': 'Compaction',
  'settings.section.keyboard': 'Keyboard',
  'settings.section.workspace': 'Workspace',
  'settings.section.environment': 'Environment',
  'settings.section.providers': 'Providers',
  'settings.section.models': 'Models',
  'settings.section.theme': 'Appearance',
  'settings.section.scheduled-tasks': 'Scheduled Tasks',
  'settings.section.quick-actions': 'Quick Actions',
  'settings.section.keychain': 'Keychain',
  'settings.section.tools': 'Tools',
  'settings.section.addons': 'Add-ons',
  'settings.placeholder.recordings': 'Filter recordings…',
  'settings.placeholder.keyboard': 'Filter shortcuts…',
  'settings.placeholder.environment': 'Filter environment…',
  'settings.placeholder.models': 'Filter models…',
  'settings.placeholder.scheduled-tasks': 'Filter scheduled tasks…',
  'settings.placeholder.quick-actions': 'Filter quick actions…',
  'settings.placeholder.keychain': 'Filter entries…',
  'settings.placeholder.tools': 'Filter tools…',
  'settings.placeholder.addons': 'Filter add-ons…',
  'preview.close': 'Close',
  'preview.loading': 'Loading preview…',
  'preview.files': 'Files',
  'preview.folders': 'Folders',
  'preview.compressed': 'Compressed',
  'preview.uncompressed': 'Uncompressed',
  'preview.name': 'Name',
  'preview.type': 'Type',
  'preview.method': 'Method',
  'preview.size': 'Size',
  'post.deleteMessage': 'Delete message',
  'post.tooLarge': 'Message too large to display.',
  'post.previewTruncated': 'Preview truncated.',
  'post.submitted': 'Submitted',
  'post.discard': 'Discard',
  'post.save': 'Save',
  'post.cancel': 'Cancel',
  'post.addNote': 'Add note',
  'post.addNotePlaceholder': 'Add a note…',
  'tab.close': 'Close',
  'tab.closeOthers': 'Close Others',
  'tab.closeAll': 'Close All',
  'tab.reattach': 'Reattach',
  'tab.openInWindow': 'Open in Window',
  'tab.openInNewTab': 'Open in New Tab',
  'tab.pinned': 'Pinned',
  'tab.detached': 'Detached',
  'tab.openSeparateWindow': 'Open in separate window',
  'status.trackedVariables': 'Tracked variables',
  'status.attachToSession': 'Attach to session',
  'status.files': 'Files',
  'status.proposedDiff': 'Proposed diff',
  'status.copyTmux': 'Copy tmux command',
  'status.experimentDuration': 'Experiment duration',
  'status.sinceLastActivity': 'Since last activity',
  'annotator.title': 'Annotate image',
  'annotator.typeLabel': 'Type label…',
  'annotator.undo': 'Undo',
  'annotator.resetZoom': 'Reset zoom',
  'tree.filter': 'Filter…',
  'tree.sessionTree': 'Session tree',
  'btw.label': 'BTW side conversation',
  'btw.close': 'Close BTW',
  'btw.thinking': 'Thinking',
  'mdpreview.close': 'Close preview',
  'mdpreview.unavailable': 'Preview unavailable',
  'widget.close': 'Close widget',
  'oobe.gettingStarted': 'Getting started',
  'oobe.needsSetupTitle': 'Instance needs setup',
  'oobe.configuredTitle': 'Instance is configured',
  'oobe.needsSetupBody': 'This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.',
  'oobe.configuredBody': 'This instance looks configured. Review or update provider and model settings in Settings.',
  'oobe.openSettings': 'Open Settings',
  'oobe.dismiss': 'Dismiss',
  'oobe.done': 'Done',
  'palette.placeholder': 'Type to jump to an agent, workspace action, or slash command…',
  'palette.hideWorkspace': 'Hide workspace',
  'palette.showWorkspace': 'Show workspace',
  'palette.hideWorkspaceDesc': 'Hide the workspace sidebar.',
  'palette.showWorkspaceDesc': 'Show the workspace sidebar.',
  'palette.exitChatOnly': 'Exit chat-only mode',
  'palette.chatOnly': 'Chat-only mode',
  'palette.exitChatOnlyDesc': 'Return to the split workspace layout.',
  'palette.chatOnlyDesc': 'Switch to the chat-only layout.',
  'palette.groupAgents': 'Agents',
  'palette.groupWorkspace': 'Workspace',
  'palette.groupSlash': 'Slash commands',
  'palette.hintMove': 'Move',
  'palette.hintSelect': 'Select',
  'palette.hintPopOut': 'Pop out',
  'palette.hintClose': 'Close',
  'settings.appliedNotice': 'Settings applied. Changes take effect on the next turn.',
  'settings.sessions.lifecycle': 'Session Lifecycle',
  'settings.sessions.autoRotate': 'Auto-rotate sessions',
  'settings.sessions.maxSize': 'Max session size (MB)',
  'settings.sessions.maxSizeAria': 'max session size',
  'settings.sessions.agentBehaviour': 'Agent Behaviour',
  'settings.sessions.toolBudget': 'Tool use budget',
  'settings.sessions.toolBudgetAria': 'tool use budget',
  'settings.sessions.toolBudgetHint': 'max tool-call messages per turn',
  'settings.sessions.isolation': 'Session isolation',
  'settings.sessions.isolationNone': 'None — full cross-session visibility',
  'settings.sessions.isolationSummary': 'Summary — tools visible, no arguments',
  'settings.sessions.isolationFull': 'Full — sessions cannot see each other',
  'settings.editor.heading': 'Editor',
  'settings.editor.vimMode': 'Vim mode',
  'settings.editor.showWhitespace': 'Show whitespace',
  'settings.editor.livePreview': 'Markdown live preview',
  'settings.editor.fontSize': 'Font size (px)',
  'settings.editor.fontSizeAria': 'editor font size',
  'settings.editor.fontFamily': 'Font family',
  'settings.editor.fontFamilyPlaceholder': 'monospace (default)',
  'settings.editor.localOnlyHint': 'This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.',
  'settings.appearance.syncing': 'Syncing appearance…',
  'settings.appearance.default': 'Default',
  'settings.appearance.autoLightDark': 'auto (light/dark)',
  'settings.appearance.tint': 'Tint:',
  'settings.appearance.clearTint': 'Clear tint',
  'settings.appearance.none': 'none',
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
  'compose.queueControls': '排队后续消息控制',
  'compose.moveUp': '上移',
  'compose.moveUpQueue': '在队列中上移',
  'compose.moveDown': '下移',
  'compose.moveDownQueue': '在队列中下移',
  'compose.editInCompose': '在输入框中编辑',
  'compose.returnToEditor': '将排队消息返回编辑器',
  'compose.injectSteer': '作为引导插入排队的后续消息',
  'compose.steer': '引导',
  'compose.cancelQueued': '取消排队消息',
  'compose.resizeInput': '调整消息输入框大小',
  'compose.resizeInputHint': '拖动以调整消息输入框大小',
  'compose.modelPicker': '模型选择器',
  'compose.sessionsAndAgents': '会话与代理',
  'compose.openModelPicker': '打开模型选择器',
  'compose.newBranchTitle': '从此聊天创建新分支',
  'compose.newRootTitle': '创建一个干净的根会话，例如 web:ops',
  'compose.renameSessionTitle': '重命名当前会话',
  'compose.pruneSessionTitle': '删除（修剪）当前代理/会话分支',
  'compose.filterImagesTitle': '仅显示含图片的消息',
  'compose.filterAttachmentsTitle': '仅显示含附件的消息',
  'compose.selectModel': '选择模型',
  'compose.loadingModels': '正在加载模型…',
  'compose.noModels': '没有可用的模型。',
  'compose.nextModel': '下一个模型',
  'compose.manageSessions': '管理会话与代理',
  'compose.noSessions': '暂无其他会话。',
  'compose.newBranch': '新建分支',
  'compose.newRoot': '新建根会话…',
  'compose.mergeCurrent': '将当前合并到父级',
  'compose.renameCurrent': '重命名当前…',
  'compose.deleteCurrent': '删除当前…',
  'compose.mergeInto': '将此分支合并到 {target}',
  'compose.mergeBlocked': '当此分支处于活动状态或有子分支时无法合并',
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
  'settings.title': '设置',
  'settings.close': '关闭（Esc）',
  'settings.filter': '筛选…',
  'settings.loading': '加载设置中…',
  'settings.section.general': '常规',
  'settings.section.sessions': '会话',
  'settings.section.recordings': '录制',
  'settings.section.compaction': '压缩',
  'settings.section.keyboard': '键盘',
  'settings.section.workspace': '工作区',
  'settings.section.environment': '环境',
  'settings.section.providers': '提供商',
  'settings.section.models': '模型',
  'settings.section.theme': '外观',
  'settings.section.scheduled-tasks': '计划任务',
  'settings.section.quick-actions': '快捷操作',
  'settings.section.keychain': '密钥串',
  'settings.section.tools': '工具',
  'settings.section.addons': '插件',
  'settings.placeholder.recordings': '筛选录制…',
  'settings.placeholder.keyboard': '筛选快捷键…',
  'settings.placeholder.environment': '筛选环境…',
  'settings.placeholder.models': '筛选模型…',
  'settings.placeholder.scheduled-tasks': '筛选计划任务…',
  'settings.placeholder.quick-actions': '筛选快捷操作…',
  'settings.placeholder.keychain': '筛选条目…',
  'settings.placeholder.tools': '筛选工具…',
  'settings.placeholder.addons': '筛选插件…',
  'preview.close': '关闭',
  'preview.loading': '正在加载预览…',
  'preview.files': '文件',
  'preview.folders': '文件夹',
  'preview.compressed': '压缩后',
  'preview.uncompressed': '未压缩',
  'preview.name': '名称',
  'preview.type': '类型',
  'preview.method': '方法',
  'preview.size': '大小',
  'post.deleteMessage': '删除消息',
  'post.tooLarge': '消息过大，无法显示。',
  'post.previewTruncated': '预览已截断。',
  'post.submitted': '已提交',
  'post.discard': '丢弃',
  'post.save': '保存',
  'post.cancel': '取消',
  'post.addNote': '添加备注',
  'post.addNotePlaceholder': '添加备注…',
  'tab.close': '关闭',
  'tab.closeOthers': '关闭其他',
  'tab.closeAll': '全部关闭',
  'tab.reattach': '重新附加',
  'tab.openInWindow': '在窗口中打开',
  'tab.openInNewTab': '在新标签页打开',
  'tab.pinned': '已固定',
  'tab.detached': '已分离',
  'tab.openSeparateWindow': '在独立窗口中打开',
  'status.trackedVariables': '跟踪的变量',
  'status.attachToSession': '附加到会话',
  'status.files': '文件',
  'status.proposedDiff': '建议的差异',
  'status.copyTmux': '复制 tmux 命令',
  'status.experimentDuration': '实验时长',
  'status.sinceLastActivity': '自上次活动以来',
  'annotator.title': '标注图片',
  'annotator.typeLabel': '输入标签…',
  'annotator.undo': '撤销',
  'annotator.resetZoom': '重置缩放',
  'tree.filter': '筛选…',
  'tree.sessionTree': '会话树',
  'btw.label': 'BTW 附加对话',
  'btw.close': '关闭 BTW',
  'btw.thinking': '思考中',
  'mdpreview.close': '关闭预览',
  'mdpreview.unavailable': '预览不可用',
  'widget.close': '关闭小部件',
  'oobe.gettingStarted': '入门指南',
  'oobe.needsSetupTitle': '实例需要设置',
  'oobe.configuredTitle': '实例已配置',
  'oobe.needsSetupBody': '此实例尚未配置。请打开“设置”并设置 AI 提供商/模型以开始发送请求。',
  'oobe.configuredBody': '此实例看起来已配置。请在“设置”中查看或更新提供商和模型设置。',
  'oobe.openSettings': '打开设置',
  'oobe.dismiss': '忽略',
  'oobe.done': '完成',
  'palette.placeholder': '输入以跳转到代理、工作区操作或斜杠命令…',
  'palette.hideWorkspace': '隐藏工作区',
  'palette.showWorkspace': '显示工作区',
  'palette.hideWorkspaceDesc': '隐藏工作区侧边栏。',
  'palette.showWorkspaceDesc': '显示工作区侧边栏。',
  'palette.exitChatOnly': '退出仅聊天模式',
  'palette.chatOnly': '仅聊天模式',
  'palette.exitChatOnlyDesc': '返回分屏工作区布局。',
  'palette.chatOnlyDesc': '切换到仅聊天布局。',
  'palette.groupAgents': '代理',
  'palette.groupWorkspace': '工作区',
  'palette.groupSlash': '斜杠命令',
  'palette.hintMove': '移动',
  'palette.hintSelect': '选择',
  'palette.hintPopOut': '弹出',
  'palette.hintClose': '关闭',
  'settings.appliedNotice': '设置已应用。更改将在下一回合生效。',
  'settings.sessions.lifecycle': '会话生命周期',
  'settings.sessions.autoRotate': '自动轮换会话',
  'settings.sessions.maxSize': '最大会话大小（MB）',
  'settings.sessions.maxSizeAria': '最大会话大小',
  'settings.sessions.agentBehaviour': '代理行为',
  'settings.sessions.toolBudget': '工具使用预算',
  'settings.sessions.toolBudgetAria': '工具使用预算',
  'settings.sessions.toolBudgetHint': '每回合最大工具调用消息数',
  'settings.sessions.isolation': '会话隔离',
  'settings.sessions.isolationNone': '无 — 完全跨会话可见',
  'settings.sessions.isolationSummary': '摘要 — 工具可见，无参数',
  'settings.sessions.isolationFull': '完全 — 会话之间不可见',
  'settings.editor.heading': '编辑器',
  'settings.editor.vimMode': 'Vim 模式',
  'settings.editor.showWhitespace': '显示空白字符',
  'settings.editor.livePreview': 'Markdown 实时预览',
  'settings.editor.fontSize': '字号（px）',
  'settings.editor.fontSizeAria': '编辑器字号',
  'settings.editor.fontFamily': '字体',
  'settings.editor.fontFamilyPlaceholder': 'monospace（默认）',
  'settings.editor.localOnlyHint': '仅限此浏览器。编辑器更改存储在本地浏览器中，并在下次打开或重新加载文件标签页时生效。',
  'settings.appearance.syncing': '正在同步外观…',
  'settings.appearance.default': '默认',
  'settings.appearance.autoLightDark': '自动（浅色/深色）',
  'settings.appearance.tint': '色调：',
  'settings.appearance.clearTint': '清除色调',
  'settings.appearance.none': '无',
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
  'compose.queueControls': 'キュー済みフォローアップの操作',
  'compose.moveUp': '上に移動',
  'compose.moveUpQueue': 'キュー内で上に移動',
  'compose.moveDown': '下に移動',
  'compose.moveDownQueue': 'キュー内で下に移動',
  'compose.editInCompose': '入力欄で編集',
  'compose.returnToEditor': 'キュー済みメッセージを入力欄に戻す',
  'compose.injectSteer': 'キュー済みフォローアップをステアとして挿入',
  'compose.steer': 'ステア',
  'compose.cancelQueued': 'キュー済みメッセージをキャンセル',
  'compose.resizeInput': 'メッセージ入力欄のサイズ変更',
  'compose.resizeInputHint': 'ドラッグしてメッセージ入力欄のサイズを変更',
  'compose.modelPicker': 'モデルピッカー',
  'compose.sessionsAndAgents': 'セッションとエージェント',
  'compose.openModelPicker': 'モデルピッカーを開く',
  'compose.newBranchTitle': 'このチャットから新しいブランチを作成',
  'compose.newRootTitle': 'web:ops のようなクリーンなルートセッションを作成',
  'compose.renameSessionTitle': '現在のセッションの名前を変更',
  'compose.pruneSessionTitle': '現在のエージェント/セッションブランチを削除（プルーン）',
  'compose.filterImagesTitle': '画像付きメッセージのみ表示',
  'compose.filterAttachmentsTitle': '添付付きメッセージのみ表示',
  'compose.selectModel': 'モデルを選択',
  'compose.loadingModels': 'モデルを読み込み中…',
  'compose.noModels': '利用可能なモデルがありません。',
  'compose.nextModel': '次のモデル',
  'compose.manageSessions': 'セッションとエージェントを管理',
  'compose.noSessions': '他のセッションはまだありません。',
  'compose.newBranch': '新しいブランチ',
  'compose.newRoot': '新しいルート…',
  'compose.mergeCurrent': '現在を親にマージ',
  'compose.renameCurrent': '現在の名前を変更…',
  'compose.deleteCurrent': '現在を削除…',
  'compose.mergeInto': 'このブランチを {target} にマージ',
  'compose.mergeBlocked': 'このブランチはアクティブな間または子がある間はマージできません',
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
  'settings.title': '設定',
  'settings.close': '閉じる（Esc）',
  'settings.filter': 'フィルター…',
  'settings.loading': '設定を読み込み中…',
  'settings.section.general': '一般',
  'settings.section.sessions': 'セッション',
  'settings.section.recordings': '録画',
  'settings.section.compaction': '圧縮',
  'settings.section.keyboard': 'キーボード',
  'settings.section.workspace': 'ワークスペース',
  'settings.section.environment': '環境',
  'settings.section.providers': 'プロバイダー',
  'settings.section.models': 'モデル',
  'settings.section.theme': '外観',
  'settings.section.scheduled-tasks': 'スケジュールタスク',
  'settings.section.quick-actions': 'クイックアクション',
  'settings.section.keychain': 'キーチェーン',
  'settings.section.tools': 'ツール',
  'settings.section.addons': 'アドオン',
  'settings.placeholder.recordings': '録画をフィルター…',
  'settings.placeholder.keyboard': 'ショートカットをフィルター…',
  'settings.placeholder.environment': '環境をフィルター…',
  'settings.placeholder.models': 'モデルをフィルター…',
  'settings.placeholder.scheduled-tasks': 'スケジュールタスクをフィルター…',
  'settings.placeholder.quick-actions': 'クイックアクションをフィルター…',
  'settings.placeholder.keychain': 'エントリをフィルター…',
  'settings.placeholder.tools': 'ツールをフィルター…',
  'settings.placeholder.addons': 'アドオンをフィルター…',
  'preview.close': '閉じる',
  'preview.loading': 'プレビューを読み込み中…',
  'preview.files': 'ファイル',
  'preview.folders': 'フォルダ',
  'preview.compressed': '圧縮後',
  'preview.uncompressed': '非圧縮',
  'preview.name': '名前',
  'preview.type': '種類',
  'preview.method': '方式',
  'preview.size': 'サイズ',
  'post.deleteMessage': 'メッセージを削除',
  'post.tooLarge': 'メッセージが大きすぎて表示できません。',
  'post.previewTruncated': 'プレビューは切り詰められました。',
  'post.submitted': '送信済み',
  'post.discard': '破棄',
  'post.save': '保存',
  'post.cancel': 'キャンセル',
  'post.addNote': 'メモを追加',
  'post.addNotePlaceholder': 'メモを追加…',
  'tab.close': '閉じる',
  'tab.closeOthers': '他を閉じる',
  'tab.closeAll': 'すべて閉じる',
  'tab.reattach': '再アタッチ',
  'tab.openInWindow': 'ウィンドウで開く',
  'tab.openInNewTab': '新しいタブで開く',
  'tab.pinned': 'ピン留め済み',
  'tab.detached': '分離済み',
  'tab.openSeparateWindow': '別ウィンドウで開く',
  'status.trackedVariables': '追跡中の変数',
  'status.attachToSession': 'セッションにアタッチ',
  'status.files': 'ファイル',
  'status.proposedDiff': '提案された差分',
  'status.copyTmux': 'tmuxコマンドをコピー',
  'status.experimentDuration': '実験の経過時間',
  'status.sinceLastActivity': '最後のアクティビティから',
  'annotator.title': '画像に注釈',
  'annotator.typeLabel': 'ラベルを入力…',
  'annotator.undo': '元に戻す',
  'annotator.resetZoom': 'ズームをリセット',
  'tree.filter': 'フィルター…',
  'tree.sessionTree': 'セッションツリー',
  'btw.label': 'BTW サイド会話',
  'btw.close': 'BTW を閉じる',
  'btw.thinking': '思考中',
  'mdpreview.close': 'プレビューを閉じる',
  'mdpreview.unavailable': 'プレビューを利用できません',
  'widget.close': 'ウィジェットを閉じる',
  'oobe.gettingStarted': 'はじめに',
  'oobe.needsSetupTitle': 'インスタンスのセットアップが必要',
  'oobe.configuredTitle': 'インスタンスは設定済み',
  'oobe.needsSetupBody': 'このインスタンスはまだ設定されていません。設定を開き、AIプロバイダー/モデルを設定してリクエストの送信を開始してください。',
  'oobe.configuredBody': 'このインスタンスは設定済みのようです。設定でプロバイダーとモデルの設定を確認または更新してください。',
  'oobe.openSettings': '設定を開く',
  'oobe.dismiss': '閉じる',
  'oobe.done': '完了',
  'palette.placeholder': '入力してエージェント、ワークスペース操作、またはスラッシュコマンドにジャンプ…',
  'palette.hideWorkspace': 'ワークスペースを非表示',
  'palette.showWorkspace': 'ワークスペースを表示',
  'palette.hideWorkspaceDesc': 'ワークスペースサイドバーを非表示にします。',
  'palette.showWorkspaceDesc': 'ワークスペースサイドバーを表示します。',
  'palette.exitChatOnly': 'チャットのみモードを終了',
  'palette.chatOnly': 'チャットのみモード',
  'palette.exitChatOnlyDesc': '分割ワークスペースレイアウトに戻ります。',
  'palette.chatOnlyDesc': 'チャットのみのレイアウトに切り替えます。',
  'palette.groupAgents': 'エージェント',
  'palette.groupWorkspace': 'ワークスペース',
  'palette.groupSlash': 'スラッシュコマンド',
  'palette.hintMove': '移動',
  'palette.hintSelect': '選択',
  'palette.hintPopOut': 'ポップアウト',
  'palette.hintClose': '閉じる',
  'settings.appliedNotice': '設定を適用しました。変更は次のターンから有効になります。',
  'settings.sessions.lifecycle': 'セッションのライフサイクル',
  'settings.sessions.autoRotate': 'セッションを自動ローテーション',
  'settings.sessions.maxSize': '最大セッションサイズ（MB）',
  'settings.sessions.maxSizeAria': '最大セッションサイズ',
  'settings.sessions.agentBehaviour': 'エージェントの動作',
  'settings.sessions.toolBudget': 'ツール使用予算',
  'settings.sessions.toolBudgetAria': 'ツール使用予算',
  'settings.sessions.toolBudgetHint': '1ターンあたりの最大ツール呼び出しメッセージ数',
  'settings.sessions.isolation': 'セッションの分離',
  'settings.sessions.isolationNone': 'なし — セッション間で完全に可視',
  'settings.sessions.isolationSummary': '概要 — ツールは可視、引数は非表示',
  'settings.sessions.isolationFull': '完全 — セッション同士は互いに見えない',
  'settings.editor.heading': 'エディター',
  'settings.editor.vimMode': 'Vim モード',
  'settings.editor.showWhitespace': '空白文字を表示',
  'settings.editor.livePreview': 'Markdown ライブプレビュー',
  'settings.editor.fontSize': 'フォントサイズ（px）',
  'settings.editor.fontSizeAria': 'エディターのフォントサイズ',
  'settings.editor.fontFamily': 'フォントファミリー',
  'settings.editor.fontFamilyPlaceholder': 'monospace（デフォルト）',
  'settings.editor.localOnlyHint': 'このブラウザーのみ。エディターの変更はローカルブラウザーストレージに保存され、次にファイルタブを開くか再読み込みしたときに有効になります。',
  'settings.appearance.syncing': '外観を同期中…',
  'settings.appearance.default': 'デフォルト',
  'settings.appearance.autoLightDark': '自動（ライト/ダーク）',
  'settings.appearance.tint': '色調：',
  'settings.appearance.clearTint': '色調をクリア',
  'settings.appearance.none': 'なし',
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
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') return undefined;
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
