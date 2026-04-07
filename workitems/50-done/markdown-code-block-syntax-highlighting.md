---
id: markdown-code-block-syntax-highlighting
title: Add syntax highlighting for Markdown code blocks
status: done
priority: medium
created: 2026-04-07
updated: 2026-04-07
completed: 2026-04-07
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web-ui
  - markdown
  - syntax-highlighting
  - fork-integration
owner: pi
---

# Add syntax highlighting for Markdown code blocks

## Summary

Add syntax highlighting for fenced code blocks rendered in the web timeline and
other markdown-rendered web surfaces.

A relevant implementation exists in `Lingzo/piclaw` on branch `feat/i18n`, but
that branch also carries unrelated runtime and UX changes. This ticket tracks a
clean upstream implementation of just the syntax-highlighting feature.

## Problem Statement

Markdown code blocks currently render as plain code text. That is readable, but
it makes longer snippets and mixed-language examples harder to scan.

For code-heavy chats and notes, the missing highlighting makes the timeline feel
less informative than it could be.

## Fork evidence reviewed

Relevant fork work:

- branch: `https://github.com/Lingzo/piclaw/tree/feat/i18n`
- commit: `80c35cd` / `1ee0285`

Observed shape:

- adds a bundled `highlight.js` entrypoint
- registers a curated language set
- applies highlighting after markdown rendering for fenced code blocks
- keeps non-recognized languages on a plaintext fallback

## First implementation slice (locked)

Limit v1 to:

- fenced markdown code blocks in web-rendered markdown
- explicit language labels where present (for example ```ts, ```python)
- safe plaintext fallback when the language is missing or unsupported
- no attempt to make the editor itself a new highlighting feature in this ticket

## Out of scope for v1

- editor syntax-highlighting changes unrelated to markdown rendering
- server-side markdown transformation changes unless strictly required
- line numbers, copy buttons, or code-block toolbars
- full auto-detect across arbitrary languages if it harms performance or safety
- broad theme redesign for code highlighting beyond making it visually coherent

## Desired Behavior

- Fenced code blocks render with syntax highlighting in the web UI.
- Unsupported or unlabeled code fences still render safely as plaintext.
- Existing markdown safety/sanitization behavior is preserved.
- Mermaid, KaTeX, hashtags, and other markdown post-processing continue to work.

## Acceptance Criteria

- [x] Web-rendered markdown code fences support syntax highlighting.
- [x] A bounded language set is selected and registered explicitly.
- [x] Unsupported or missing language labels fall back to plaintext safely.
- [x] Existing markdown sanitization and post-processing behavior remains intact.
- [x] Representative regression coverage exists for highlighted and plaintext fallback cases.
- [x] Real-browser verification confirms highlighted code blocks are readable in the shipped themes.

## Implementation Paths

### Path A — add a small bundled highlighter to the existing markdown pipeline (recommended)
1. Add a bounded client-side syntax-highlighting entrypoint.
2. Register a curated set of languages actually useful for Piclaw content.
3. Apply highlighting after markdown rendering but before final display.
4. Keep a plaintext fallback for unknown languages.

**Pros:**
- narrow surface area
- close to the reviewed fork implementation
- easy to test against current markdown rendering behavior

**Cons:**
- adds client bundle weight
- needs care to avoid interfering with existing markdown transformations

### Path B — lighter custom highlighting or CSS-only emphasis
1. Keep code blocks mostly plain.
2. Add minimal tokenization or visual enhancement without a full highlighter.

**Pros:**
- smaller bundle impact

**Cons:**
- weaker result
- more bespoke maintenance for less value

## Recommended Path

Execute **Path A** with a deliberately bounded language set and plaintext
fallback.

## Likely implementation surfaces

- `runtime/web/src/markdown.ts`
- `runtime/web/src/vendor/highlight-js-entry.ts` (or equivalent upstream module)
- web markdown rendering tests

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Bundle size grows too much | medium | register only a curated language set |
| Highlighting breaks markdown safety or other transforms | high | keep sanitization/post-processing tests and verify ordering carefully |
| Unknown language labels cause broken rendering | medium | always fall back to plaintext |
| Theme contrast is poor | medium | require real-browser verification in both light and dark modes |

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [x] Real-browser smoke test
- [x] Existing tests to rerun are listed:
  - [x] markdown rendering tests
- [x] New regression coverage to add is listed:
  - [x] fenced code block with supported language is highlighted
  - [x] fenced code block with unsupported language falls back safely
  - [x] unlabeled fenced code block renders as plaintext code
  - [x] mermaid/math/hashtag rendering still works after the change
- [x] Real-browser smoke pass required? If yes, record the surface:
  - [x] timeline markdown message containing multiple fenced code blocks in light and dark themes

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
- Completion verified after live UI iteration: syntax highlighting was implemented, reloaded, compared against editor rendering, and tuned until message and editor highlighting behaved consistently in real usage.
- Final implementation includes:
  - shared code-highlighting utility at `runtime/web/src/utils/code-highlighting.ts`
  - markdown code-block highlighting in `runtime/web/src/markdown.ts`
  - editor markdown code blocks switched to the same shared highlighter in `runtime/extensions/viewers/editor/markdown/code-block.ts`
  - theme/tint-aware token foreground variables in `runtime/web/static/css/base.css`
  - shared token-color application in `runtime/web/static/css/editor.css`
  - rendered markdown code-block surface styling in `runtime/web/static/css/content.css`
  - autocomplete active-row scroll-into-view polish in `runtime/web/src/components/compose-box.ts`
- Verification completed:
  - `cd /workspace/piclaw/runtime && PICLAW_DB_IN_MEMORY=1 bun test test/web/markdown-rendering.test.ts test/web/post-copy-markdown.test.ts`
  - `cd /workspace/piclaw && bun run typecheck`
  - `cd /workspace/piclaw && bun run build:web`
  - user-driven live web verification after repeated reloads and theme/color tuning
- Follow-up work remains explicitly tracked in separate tickets, so this ticket can close cleanly.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-04-07
- Lane change: `10-next` → `20-doing`.
- Started implementation directly in the web markdown pipeline and aligned the renderer with the editor's highlighting substrate instead of keeping a separate parser/token map.
- Implemented:
  - shared code-highlighting utility at `runtime/web/src/utils/code-highlighting.ts`
  - markdown code-block highlighting in `runtime/web/src/markdown.ts`
  - editor markdown code blocks switched to the same shared highlighter in `runtime/extensions/viewers/editor/markdown/code-block.ts`
  - theme/tint-aware token foreground variables in `runtime/web/static/css/base.css`
  - token/color surface wiring in `runtime/web/static/css/editor.css` and `runtime/web/static/css/content.css`
  - autocomplete active-row scroll-into-view polish in `runtime/web/src/components/compose-box.ts`
- Verification completed:
  - `cd /workspace/piclaw/runtime && PICLAW_DB_IN_MEMORY=1 bun test test/web/markdown-rendering.test.ts`
  - `cd /workspace/piclaw && bun run typecheck`
  - `cd /workspace/piclaw && bun run build:web`
- Current state: syntax highlighting is working for fenced markdown code blocks and now uses the same parser/token-class logic as the editor code-block renderer.
- Remaining work: smoke-test the live UI after reload and tune any token/theme mismatches found in real usage.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-04-07
- Created from fork review of `Lingzo/piclaw` branch `feat/i18n` after identifying branch-only markdown syntax-highlighting work in commits `80c35cd` and `1ee0285`.
- Scoped explicitly as an upstream markdown-rendering feature, not part of the i18n merge itself.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Keep this separate from localization work.
- Favor a bounded language set over broad auto-detect.

## Links

- `https://github.com/Lingzo/piclaw/tree/feat/i18n`
- `runtime/web/src/markdown.ts`
