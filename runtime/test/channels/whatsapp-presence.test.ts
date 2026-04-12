import { expect, test } from "bun:test";

import { sendWhatsAppTypingUpdate } from "../../src/channels/whatsapp-presence.js";

test("sendWhatsAppTypingUpdate sends the expected WhatsApp presence state", async () => {
  const calls: Array<{ state: string; jid: string }> = [];

  await sendWhatsAppTypingUpdate({
    sendPresenceUpdate: async (state, jid) => {
      calls.push({ state, jid });
    },
  }, "12345@s.whatsapp.net", true);

  await sendWhatsAppTypingUpdate({
    sendPresenceUpdate: async (state, jid) => {
      calls.push({ state, jid });
    },
  }, "12345@s.whatsapp.net", false);

  expect(calls).toEqual([
    { state: "composing", jid: "12345@s.whatsapp.net" },
    { state: "paused", jid: "12345@s.whatsapp.net" },
  ]);
});

test("sendWhatsAppTypingUpdate suppresses transient presence failures", async () => {
  await expect(sendWhatsAppTypingUpdate({
    sendPresenceUpdate: async () => {
      throw new Error("presence offline");
    },
  }, "12345@s.whatsapp.net", true)).resolves.toBeUndefined();
});
