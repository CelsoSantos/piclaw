---
id: upgrade-to-typescript-6
title: Upgrade repository toolchain to TypeScript 6
status: inbox
created: 2026-04-16
updated: 2026-04-16
priority: medium
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - dependencies
  - typescript
  - toolchain
owner:
---

# Upgrade repository toolchain to TypeScript 6

## Summary

Upgrade the repo from `typescript` `5.9.3` to `6.0.2` after a focused config
and compiler-behavior audit.

The upstream TypeScript 6 release is a transition release with changed defaults
and deprecations. Piclaw's main runtime config is already explicit, but the
experimental M365 extension still uses `"moduleResolution": "Node"` and already
carries `"ignoreDeprecations": "6.0"`, which suggests that area is the most
likely migration hotspot.

## Acceptance Criteria

- [ ] `typescript` is upgraded to `6.0.2` in `package.json` and lockfile.
- [ ] All `tsconfig*.json` files are audited for TS6 default/deprecation impact.
- [ ] Deprecated or risky config values are updated, justified, or explicitly
      deferred with notes.
- [ ] `runtime/extensions/experimental/m365/tsconfig.json` is reviewed for
      `moduleResolution: "Node"` and related TS6 behavior.
- [ ] Build and test flows pass locally after the upgrade.
- [ ] Any user-visible or contributor-facing migration notes are documented.

## Implementation Paths

### A — Safe config-first upgrade
- Audit every `tsconfig*.json` for explicit `target`, `module`, `moduleResolution`,
  `strict`, `types`, and deprecated flags.
- Make config intent explicit before bumping the compiler.
- Upgrade TypeScript and fix surfaced errors.

### B — Compiler-first spike
- Bump `typescript` first.
- Run the full test/build/type flows.
- Triage errors and then harden configs.

Preferred: **A**.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [ ] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [x] Existing tests to rerun are listed
- [ ] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

Existing checks to rerun:
- `bun run test`
- `bun run build:web`
- any targeted type/build flows surfaced by the upgrade

Potential new coverage:
- config tests that lock expected `tsconfig` behavior where TS6 defaults could
  otherwise change behavior silently
- targeted coverage around the experimental M365 extension config

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

### 2026-04-16
- Created after reviewing the TypeScript 6 release notes and identifying
  `runtime/extensions/experimental/m365/tsconfig.json` as the likeliest first
  migration hotspot.

## Notes

Relevant TS6 items to verify against repo config:
- changed defaults for `strict`, `module`, and `target`
- deprecation of `target: es5`
- deprecation of `moduleResolution: node` / `node10`
- deprecation of legacy module targets like `amd`, `umd`, `system`, and `none`
- path resolution behavior changes that may affect non-bundler setups

## Links

- `runtime/tsconfig.json`
- `runtime/extensions/experimental/m365/tsconfig.json`
- `https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html`
