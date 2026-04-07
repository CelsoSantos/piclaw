---
id: allow-tab-character-in-compose-box
title: Allow Tab to insert a tab character in the compose box
status: next
priority: medium
created: 2026-04-07
updated: 2026-04-07
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - compose
  - input
  - ux
  - fork-integration
owner: pi
---

# Allow Tab to insert a tab character in the compose box

## Summary

Allow the web compose textarea to insert a literal tab character when the user
presses `Tab`, as long as no compose popup is currently using `Tab` for
navigation or selection.

A concrete implementation exists in `Lingzo/piclaw` branch `feat/i18n`, but the
change is independent of localization and should be tracked separately.

## Problem Statement

The compose box currently behaves like a normal focus-navigation control rather
than a text-editing surface for the `Tab` key.

That makes it awkward to compose:

- indented code snippets
- nested outlines
- tab-aligned quick notes

The desired behavior is narrow and editor-like: use `Tab` to insert `\t` only
when compose popups are not open.

## Fork evidence reviewed

Relevant fork work:

- branch: `https://github.com/Lingzo/piclaw/tree/feat/i18n`
- commit: `5fa1b6a`

Observed behavior in the patch:

- intercept `Tab` in `compose-box.ts`
- insert `\t` at the current selection/caret
- preserve caret position after insertion
- do **not** apply when mention/slash/model/session popups are open

## First implementation slice (locked)

Limit v1 to:

- compose textarea only
- insert a literal tab character at the caret or across the current selection
- preserve textarea selection/caret after the update
- keep existing popup behaviors unchanged when a popup is visible

## Out of scope for v1

- multi-line indent/outdent shortcuts
- Shift+Tab outdent behavior
- special tab handling for mobile keyboards
- editor-pane indentation behavior outside the compose box

## Desired Behavior

- Pressing `Tab` in the compose box inserts `\t`.
- If text is selected, the selection is replaced with `\t` in the narrow v1 behavior.
- If slash, mention, model, or session popups are visible, their existing keyboard behavior wins.
- Search mode and normal compose mode both remain coherent if the feature is enabled there.

## Acceptance Criteria

- [ ] `Tab` inserts a tab character in the compose textarea when no popup is visible.
- [ ] Caret/selection is preserved correctly after insertion.
- [ ] Existing popup keyboard behavior is unchanged while popups are open.
- [ ] No regression is introduced to compose submission, search mode, or autocomplete flows.
- [ ] Minimal regression coverage exists for insertion and popup-visibility gating.

## Implementation Paths

### Path A — narrow keydown interception in compose-box (recommended)
1. Intercept `Tab` in the compose textarea keydown handler.
2. Gate the behavior on compose popup visibility.
3. Insert `\t` into the underlying value and restore selection.

**Pros:**
- very small change
- aligns with the reviewed fork patch
- low-risk and easy to test

**Cons:**
- intentionally narrow; does not address richer indent/outdent workflows

## Recommended Path

Execute **Path A**.

## Likely implementation surfaces

- `runtime/web/src/components/compose-box.ts`
- compose box regression tests

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Tab conflicts with popup keyboard navigation | high | enable only when no relevant popup is open |
| Caret jumps after insertion | medium | explicitly restore selection/caret after state update |
| Search mode behaves inconsistently | low | test both normal compose mode and search mode paths |

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed:
  - [ ] compose box keyboard interaction tests
- [ ] New regression coverage to add is listed:
  - [ ] Tab inserts `\t` with collapsed selection
  - [ ] Tab replaces the selected range with `\t`
  - [ ] popup-visible states keep their current Tab behavior
  - [ ] no regression in search-mode textarea updates
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] optional desktop smoke pass in the compose box

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-07
- Created from fork review of `Lingzo/piclaw` branch `feat/i18n` after identifying branch-only compose UX work in commit `5fa1b6a`.
- Scoped explicitly as a small compose input UX improvement, separate from localization.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)

## Notes

- This is intentionally narrow and should not grow into a full rich-text/editor behavior ticket.

## Links

- `https://github.com/Lingzo/piclaw/tree/feat/i18n`
- `runtime/web/src/components/compose-box.ts`
