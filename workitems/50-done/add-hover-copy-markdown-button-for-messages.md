---
id: add-hover-copy-markdown-button-for-messages
title: Add a hover-revealed Copy Markdown button for messages
status: done
priority: medium
created: 2026-04-07
updated: 2026-04-07
completed: 2026-04-07
target_release: next
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - timeline
  - markdown
  - copy
owner: pi
---

# Add a hover-revealed Copy Markdown button for messages

## Summary

Add a message-level copy control in the web timeline so each message can be
copied as Markdown.

The control should live next to the existing delete button and stay visually
hidden until hover/focus so the timeline chrome remains quiet by default.

## Problem Statement

Messages are readable in the timeline, but there is no fast way to copy a
single message in a reusable Markdown form.

That makes it harder to:

- quote a prior response elsewhere
- reuse formatted code/text output
- preserve markdown structure instead of copying rendered/plain text only

## Desired Behavior

- Each message exposes a copy control near the existing delete button.
- The copy control is hidden by default and becomes visible on hover/focus.
- Activating it copies the message as Markdown.
- The copied content should preserve useful markdown structure where possible.
- The button should not make the timeline feel visually noisy when not hovered.

## V1 copy contract

For the first implementation slice, copying as Markdown should preserve at least:

- plain text content
- fenced code blocks where present in the original message text
- markdown formatting already present in the source text
- inline/file/message reference labels in a sensible textual form if included

V1 does not need to reconstruct every rendered-only visual surface perfectly.
Use the best available message source text/blocks rather than reverse-engineering
rendered HTML.

## Acceptance Criteria

- [x] A copy button exists next to the delete button on message rows.
- [x] The copy button is hidden until hover/focus (with accessible keyboard visibility).
- [x] Clicking the button copies the message as Markdown.
- [x] The copied output preserves original markdown/code formatting where available.
- [x] Success/error feedback is visible but unobtrusive.
- [x] The new button does not regress delete-button behavior or message-row layout.
- [x] Regression coverage exists for visibility and copy payload generation.

## Implementation Paths

### Path A — source-text-first markdown copy (recommended)
1. Add a hover/focus-revealed copy button beside the delete button.
2. Build the copied payload from the message's source text / structured content blocks.
3. Fall back conservatively when only rendered content is available.
4. Reuse existing clipboard/copy affordances where possible.

**Pros:**
- preserves author/source intent better than scraping rendered HTML
- narrower and lower risk
- should behave well for code-heavy messages

**Cons:**
- needs some care for messages with attachments/cards/resources

### Path B — reverse-render the visible HTML into markdown
1. Copy from the rendered message surface.
2. Convert visible HTML back into markdown-like text.

**Pros:**
- could match the visible UI exactly in some cases

**Cons:**
- brittle
- likely worse for code blocks and structured content
- higher maintenance cost

## Recommended Path

Execute **Path A**.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [x] Existing tests to rerun are listed:
  - [x] timeline post/message component tests
- [x] New regression coverage to add is listed:
  - [x] hover/focus reveals the copy button
  - [x] copied payload uses source markdown/text rather than rendered HTML scraping when available
  - [x] code-block-containing messages copy correctly
  - [x] button placement does not interfere with delete controls
- [x] Real-browser smoke pass required? If yes, record the surface:
  - [x] timeline message row hover/focus and clipboard copy behavior

## Definition of Done

- [x] All acceptance criteria satisfied and verified
- [x] Tests added or updated — passing locally
- [x] Type check clean
- [x] Docs and notes updated with links to ticket
- [x] Operational impact assessed
- [x] Follow-up tickets created for deferred scope
- [x] Update history complete with evidence
- [x] Ticket front matter updated

## Updates

### 2026-04-07
- Lane change: `20-doing` → `50-done`.
- Completion verified after implementation, reload, and live web use.
- Final implementation includes:
  - hover/focus-revealed message action group in `runtime/web/src/components/post.ts`
  - source-first markdown copy payload generation in `runtime/web/src/utils/post-copy-markdown.ts`
  - action styling/placement in `runtime/web/static/css/content.css`
  - regression coverage in `runtime/test/web/post-copy-markdown.test.ts`
- Verified with:
  - `cd /workspace/piclaw/runtime && PICLAW_DB_IN_MEMORY=1 bun test test/web/post-copy-markdown.test.ts test/web/markdown-rendering.test.ts`
  - `cd /workspace/piclaw && bun run typecheck`
  - `cd /workspace/piclaw && bun run build:web`
  - live web verification after reload
- Follow-up search/highlight UX concerns remain tracked separately and do not block closing this ticket.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-04-07
- Lane change: `10-next` → `20-doing`.
- Implemented a hover/focus-revealed message action group in `runtime/web/src/components/post.ts` with a new Copy Markdown button next to delete.
- Added source-first markdown copy payload generation in `runtime/web/src/utils/post-copy-markdown.ts`.
- Added regression coverage in `runtime/test/web/post-copy-markdown.test.ts`.
- Verified with:
  - `cd /workspace/piclaw/runtime && PICLAW_DB_IN_MEMORY=1 bun test test/web/post-copy-markdown.test.ts test/web/markdown-rendering.test.ts`
  - `cd /workspace/piclaw && bun run typecheck`
  - `cd /workspace/piclaw && bun run build:web`
- Current state: markdown-copy behavior is implemented and ready for live verification after reload.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-04-07
- Created from request for a message-level copy control that appears on hover and copies message content as Markdown.
- Scoped to the web timeline and explicitly aligned with the existing delete-button area.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Keep keyboard accessibility on par with hover behavior.
- Prefer copying from source message content rather than reverse-converting rendered HTML.

## Links

- `runtime/web/src/components/post.ts`
- `runtime/web/static/css/content.css`
