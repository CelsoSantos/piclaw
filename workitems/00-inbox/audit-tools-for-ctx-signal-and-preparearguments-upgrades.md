---
id: audit-tools-for-ctx-signal-and-preparearguments-upgrades
title: Audit Piclaw tools/extensions for ctx.signal and prepareArguments adoption
status: inbox
priority: medium
created: 2026-04-03
updated: 2026-04-03
tags:
  - work-item
  - kanban
  - upstream
  - tools
  - extensions
  - compatibility
owner: 
---

# Audit Piclaw tools/extensions for ctx.signal and prepareArguments adoption

## Summary

Recent upstream Pi releases added two upgrade opportunities for Piclaw-owned tools
and extensions:

- `ctx.signal` for forwarding turn cancellation into nested `fetch()`, model
  calls, and other abort-aware async work
- `ToolDefinition.prepareArguments` for compatibility shims when tool input
  schemas evolve and old/resumed sessions may still emit legacy argument shapes

Piclaw should audit its own registered tools, wrappers, and extension handlers to
identify where these hooks improve cancellation behavior, schema migration, or
resumed-session compatibility.

## Why this matters

- Long-running or network-backed tools should stop promptly when a turn is
  aborted.
- Tool schema changes should not break resumed sessions or old persisted tool
  calls if a cheap migration shim can preserve compatibility.
- Piclaw already carries compatibility helpers for other upstream Pi API
  changes; this audit should decide where equivalent hardening is worthwhile for
  local tools.

## Scope

- Inventory Piclaw-owned tool registrations and extension tools
- Identify handlers that call:
  - `fetch()`
  - nested model APIs
  - subprocess / long-running async work with abort support
- Thread `ctx.signal` through any abort-aware code paths that currently ignore
  cancellation
- Identify tools whose input schema has changed or is likely to change across
  upgrades/resumed sessions
- Add `prepareArguments` only where it provides a concrete migration benefit
- Add focused regression tests for any adopted compatibility shim or
  cancellation-sensitive path

## Questions

1. Which current Piclaw tools/extensions already receive an abort signal but do
   not forward it anywhere useful?
2. Which tools are most exposed to resumed-session schema drift?
3. Should internal tools such as activation/discovery wrappers adopt
   `prepareArguments`, or is the bigger win in attachment/workflow helpers?
4. Are there any long-running helper flows where cancellation currently leaves
   stale UI state or wasted backend work?

## Acceptance Criteria

- [ ] Piclaw-owned tool and extension registrations are inventoried.
- [ ] Candidates for `ctx.signal` adoption are documented and prioritized.
- [ ] Candidates for `prepareArguments` schema migration shims are documented.
- [ ] At least the high-value/low-risk upgrades are implemented.
- [ ] Regression coverage exists for any new cancellation or argument-migration
      behavior.

## Updates

### 2026-04-03
- Created after reviewing upstream Pi 0.63.x/0.64.0 additions for
  `ctx.signal` and `ToolDefinition.prepareArguments`.

## Notes

- Likely review areas include internal tools, scheduler/automation helpers,
  browser/network-backed extensions, and any tool whose parameters were renamed
  or reshaped over time.
- Keep compatibility wrappers narrow; do not add schema migration logic unless
  there is a real resumed-session or persisted-call need.

## Links

- Pi 0.63.2 changelog: `ctx.signal`
- Pi 0.64.0 changelog: `ToolDefinition.prepareArguments`
