export async function writeClipboardTextBestEffort(
  clipboard: { writeText?: (value: string) => Promise<unknown> } | null | undefined,
  value: string,
): Promise<boolean> {
  try {
    await clipboard?.writeText?.(value);
    return true;
  } catch (_error) {
    return false;
  }
}

export function readSessionStorageFlagBestEffort(
  storage: { getItem?: (key: string) => string | null } | null | undefined,
  key: string,
): boolean {
  try {
    return Boolean(storage?.getItem?.(key));
  } catch (_error) {
    return false;
  }
}

export function writeSessionStorageFlagBestEffort(
  storage: { setItem?: (key: string, value: string) => void } | null | undefined,
  key: string,
  value: string,
): boolean {
  try {
    storage?.setItem?.(key, value);
    return true;
  } catch (_error) {
    return false;
  }
}

export function resolveLinkPreviewSiteName(siteName: unknown, safeUrl: string | null | undefined): string | null {
  const normalizedSiteName = typeof siteName === 'string' && siteName.trim() ? siteName.trim() : null;
  if (normalizedSiteName) return normalizedSiteName;
  if (!safeUrl) return null;
  try {
    return new URL(safeUrl).hostname;
  } catch (_error) {
    return safeUrl;
  }
}
