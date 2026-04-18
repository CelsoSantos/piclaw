import { expect, test } from 'bun:test';

import {
  isEligibleChatSwipeTarget,
  resolveAdjacentSwipeChatJid,
  resolveSwipeableChatAgents,
  shouldTriggerTouchChatSwipe,
} from '../../web/src/ui/chat-swipe-navigation.js';

test('resolveSwipeableChatAgents keeps current + active non-archived chats', () => {
  expect(resolveSwipeableChatAgents([
    { chat_jid: 'web:current', is_active: false },
    { chat_jid: 'web:a', is_active: true },
    { chat_jid: 'web:b', is_active: true, archived_at: '2026-01-01' },
    { chat_jid: 'web:c', is_active: false },
  ], 'web:current')).toEqual(['web:current', 'web:a']);
});

test('resolveAdjacentSwipeChatJid cycles through active chats', () => {
  const candidates = [
    { chat_jid: 'web:current', is_active: true },
    { chat_jid: 'web:a', is_active: true },
    { chat_jid: 'web:b', is_active: true },
  ];

  expect(resolveAdjacentSwipeChatJid({ candidates, currentChatJid: 'web:current', direction: 'next' })).toBe('web:a');
  expect(resolveAdjacentSwipeChatJid({ candidates, currentChatJid: 'web:current', direction: 'prev' })).toBe('web:b');
  expect(resolveAdjacentSwipeChatJid({ candidates, currentChatJid: 'web:b', direction: 'next' })).toBe('web:current');
});

test('shouldTriggerTouchChatSwipe requires a fast, mostly-horizontal gesture', () => {
  expect(shouldTriggerTouchChatSwipe({ dx: 120, dy: 20, elapsedMs: 250 })).toBe(true);
  expect(shouldTriggerTouchChatSwipe({ dx: 50, dy: 4, elapsedMs: 250 })).toBe(false);
  expect(shouldTriggerTouchChatSwipe({ dx: 120, dy: 110, elapsedMs: 250 })).toBe(false);
  expect(shouldTriggerTouchChatSwipe({ dx: 120, dy: 20, elapsedMs: 1200 })).toBe(false);
});

test('isEligibleChatSwipeTarget ignores compose and interactive controls', () => {
  const allowedTarget = {
    closest: (_selector: string) => null,
  };
  const blockedTarget = {
    closest: (selector: string) => {
      if (selector.includes('.compose-box')) {
        // Return an element that is NOT inside a passthrough container
        return { closest: (_s: string) => null } as unknown as Element;
      }
      return null;
    },
  };

  expect(isEligibleChatSwipeTarget(allowedTarget)).toBe(true);
  expect(isEligibleChatSwipeTarget(blockedTarget)).toBe(false);
});

test('isEligibleChatSwipeTarget allows swipe on agent-thinking buttons', () => {
  // Simulates a button inside .agent-thinking (draft/thought/intent panel)
  const thinkingButton = {
    closest: (selector: string) => {
      if (selector.includes('button')) return {
        closest: (s: string) => s.includes('.agent-thinking') ? ({} as Element) : null,
      } as unknown as Element;
      return null;
    },
  };
  expect(isEligibleChatSwipeTarget(thinkingButton)).toBe(true);
});
