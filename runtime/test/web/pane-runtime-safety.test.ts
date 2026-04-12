import { expect, test } from "bun:test";

import {
  disposeSocketBoundaryBestEffort,
  readRandomUuidBestEffort,
  removeStorageItemBestEffort,
} from "../../web/src/panes/pane-runtime-safety.js";

test("readRandomUuidBestEffort tolerates missing and throwing crypto implementations", () => {
  expect(readRandomUuidBestEffort(null)).toBeNull();
  expect(readRandomUuidBestEffort({ crypto: { randomUUID: () => "uuid-1" } })).toBe("uuid-1");
  expect(readRandomUuidBestEffort({ crypto: { randomUUID: () => { throw new Error("blocked"); } } })).toBeNull();
});

test("removeStorageItemBestEffort tolerates blocked storage cleanup", () => {
  const removed: string[] = [];
  const workingStorage = {
    removeItem(key: string) {
      removed.push(key);
    },
  };
  const blockedStorage = {
    removeItem() {
      throw new Error("blocked");
    },
  };

  expect(removeStorageItemBestEffort(workingStorage, "pane-key")).toBe(true);
  expect(removed).toEqual(["pane-key"]);
  expect(removeStorageItemBestEffort(blockedStorage, "pane-key")).toBe(false);
});

test("disposeSocketBoundaryBestEffort tolerates already-torn-down boundaries", () => {
  expect(disposeSocketBoundaryBestEffort({ dispose: () => undefined })).toBe(true);
  expect(disposeSocketBoundaryBestEffort({ dispose: () => { throw new Error("gone"); } })).toBe(false);
  expect(disposeSocketBoundaryBestEffort(null)).toBe(true);
});
