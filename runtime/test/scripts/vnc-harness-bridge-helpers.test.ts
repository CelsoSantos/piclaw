import { expect, test } from "bun:test";

import {
  closeHarnessWebSocket,
  destroyHarnessUpstream,
  parseHarnessControlMessage,
  sendHarnessPayload,
} from "../../scripts/vnc-harness-bridge-helpers.ts";

test("sendHarnessPayload returns true on success and suppresses send failures", () => {
  const sent: unknown[] = [];
  expect(sendHarnessPayload({ send: (payload) => { sent.push(payload); } }, "hello")).toBe(true);
  expect(sent).toEqual(["hello"]);
  expect(sendHarnessPayload({ send: () => { throw new Error("closed"); } }, "hello")).toBe(false);
});

test("closeHarnessWebSocket suppresses close failures", () => {
  const closed: Array<{ code?: number; reason?: string }> = [];
  expect(closeHarnessWebSocket({ close: (code, reason) => { closed.push({ code, reason }); } }, 1000, "done")).toBe(true);
  expect(closed).toEqual([{ code: 1000, reason: "done" }]);
  expect(closeHarnessWebSocket({ close: () => { throw new Error("already closed"); } }, 1000, "done")).toBe(false);
  expect(closeHarnessWebSocket({ send: () => {} }, 1000, "done")).toBe(false);
});

test("destroyHarnessUpstream suppresses destroy failures", () => {
  let destroyed = 0;
  expect(destroyHarnessUpstream({ destroy: () => { destroyed += 1; } })).toBe(true);
  expect(destroyed).toBe(1);
  expect(destroyHarnessUpstream({ destroy: () => { throw new Error("gone"); } })).toBe(false);
  expect(destroyHarnessUpstream(null)).toBe(false);
});

test("parseHarnessControlMessage only parses probable JSON control payloads", () => {
  expect(parseHarnessControlMessage("ping")).toBeNull();
  expect(parseHarnessControlMessage("{\"type\":\"ping\"}")).toEqual({ type: "ping" });
  expect(parseHarnessControlMessage("{not-json")).toBeNull();
});
