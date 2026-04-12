import { expect, test } from "bun:test";

import {
  readStoredPanelHeight,
  writeStoredPanelHeight,
} from "../../web/src/components/markdown-preview-storage.js";

test("readStoredPanelHeight falls back when storage is blocked", () => {
  const storage = {
    getItem() {
      throw new Error("blocked");
    },
  };

  expect(readStoredPanelHeight(storage, "mdPreviewHeight", 60, 220)).toBe(220);
});

test("writeStoredPanelHeight rounds persisted heights and tolerates blocked storage", () => {
  const writes: Array<[string, string]> = [];
  const workingStorage = {
    setItem(key: string, value: string) {
      writes.push([key, value]);
    },
  };
  const blockedStorage = {
    setItem() {
      throw new Error("blocked");
    },
  };

  expect(writeStoredPanelHeight(workingStorage, "mdPreviewHeight", 221.6)).toBe(true);
  expect(writes).toEqual([["mdPreviewHeight", "222"]]);
  expect(writeStoredPanelHeight(blockedStorage, "mdPreviewHeight", 221.6)).toBe(false);
});
