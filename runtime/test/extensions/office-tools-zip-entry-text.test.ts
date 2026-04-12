import { expect, test } from "bun:test";
import { deflateRawSync } from "node:zlib";

import { decodeZipEntryText } from "../../extensions/integrations/office-tools/zip-entry-text.ts";

test("decodeZipEntryText reads stored and deflated OOXML zip entries", () => {
  expect(decodeZipEntryText("word/document.xml", 0, Buffer.from("plain text"))).toBe("plain text");
  expect(decodeZipEntryText("word/document.xml", 8, deflateRawSync(Buffer.from("compressed text")))).toBe("compressed text");
});

test("decodeZipEntryText suppresses corrupt deflated entries", () => {
  expect(decodeZipEntryText("word/document.xml", 8, Buffer.from("not-deflate"))).toBeNull();
});
