import { afterEach, expect, test } from "bun:test";

import { WebSocketRemoteDisplayBoundary } from "../../web/src/panes/remote-display-socket.js";

const originalWebSocket = globalThis.WebSocket;

afterEach(() => {
  if (originalWebSocket === undefined) {
    delete (globalThis as any).WebSocket;
  } else {
    (globalThis as any).WebSocket = originalWebSocket;
  }
});

test("WebSocketRemoteDisplayBoundary tolerates close races during reconnect and dispose", () => {
  const sockets: ThrowingWebSocket[] = [];

  class ThrowingWebSocket {
    url: string;
    binaryType: BinaryType = "blob";
    listeners = new Map<string, Array<(...args: any[]) => void>>();

    constructor(url: string) {
      this.url = url;
      sockets.push(this);
    }

    addEventListener(type: string, listener: (...args: any[]) => void) {
      const current = this.listeners.get(type) || [];
      current.push(listener);
      this.listeners.set(type, current);
    }

    close() {
      throw new Error("already closing");
    }

    send() {}
  }

  (globalThis as any).WebSocket = ThrowingWebSocket;

  const boundary = new WebSocketRemoteDisplayBoundary({
    url: "wss://example.test/remote-display",
  });

  expect(() => boundary.connect()).not.toThrow();
  expect(() => boundary.connect()).not.toThrow();
  expect(sockets).toHaveLength(2);
  expect(() => boundary.dispose()).not.toThrow();
});
