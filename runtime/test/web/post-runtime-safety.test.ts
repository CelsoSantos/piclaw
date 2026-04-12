import { expect, test } from "bun:test";

import {
  readSessionStorageFlagBestEffort,
  resolveLinkPreviewSiteName,
  writeClipboardTextBestEffort,
  writeSessionStorageFlagBestEffort,
} from "../../web/src/components/post-runtime-safety.js";

test("writeClipboardTextBestEffort tolerates blocked clipboard writes", async () => {
  const writes: string[] = [];
  await expect(writeClipboardTextBestEffort({ writeText: async (value: string) => { writes.push(value); } }, "hello")).resolves.toBe(true);
  expect(writes).toEqual(["hello"]);
  await expect(writeClipboardTextBestEffort({ writeText: async () => { throw new Error("blocked"); } }, "hello")).resolves.toBe(false);
});

test("post runtime safety storage helpers tolerate blocked sessionStorage", () => {
  const writes: Array<[string, string]> = [];
  const workingStorage = {
    getItem: (key: string) => (key === "widget_opened_1" ? "1" : null),
    setItem: (key: string, value: string) => writes.push([key, value]),
  };
  const blockedStorage = {
    getItem: () => {
      throw new Error("blocked");
    },
    setItem: () => {
      throw new Error("blocked");
    },
  };

  expect(readSessionStorageFlagBestEffort(workingStorage, "widget_opened_1")).toBe(true);
  expect(readSessionStorageFlagBestEffort(blockedStorage, "widget_opened_1")).toBe(false);
  expect(writeSessionStorageFlagBestEffort(workingStorage, "widget_opened_2", "1")).toBe(true);
  expect(writes).toEqual([["widget_opened_2", "1"]]);
  expect(writeSessionStorageFlagBestEffort(blockedStorage, "widget_opened_2", "1")).toBe(false);
});

test("resolveLinkPreviewSiteName prefers explicit site names and falls back for malformed urls", () => {
  expect(resolveLinkPreviewSiteName("Example", "https://example.test/path")).toBe("Example");
  expect(resolveLinkPreviewSiteName("", "https://example.test/path")).toBe("example.test");
  expect(resolveLinkPreviewSiteName(null, "not a url")).toBe("not a url");
  expect(resolveLinkPreviewSiteName(null, null)).toBeNull();
});
