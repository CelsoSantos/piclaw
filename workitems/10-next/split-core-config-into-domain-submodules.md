---
id: split-core-config-into-domain-submodules
title: Split core/config into domain submodules
status: next
priority: medium
created: 2026-04-13
updated: 2026-04-13
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - quality
  - config
  - refactor
  - runtime
owner: pi
blocked-by: []
---

# Split core/config into domain submodules

## Summary

Reduce `runtime/src/core/config.ts` below the quality umbrella's oversized-file
threshold by extracting coherent config parsing/building logic into a small set
of domain-focused submodules without changing the external config contract.

The current file remains one of the smaller oversized files left in the quality
umbrella, which makes it a good next structural slice: bounded, non-UI, and
directly tied to the umbrella completion criterion that no source file should
exceed 800 lines.

## Problem Statement

`runtime/src/core/config.ts` is still oversized and mixes several concerns:

- environment reading/defaulting
- typed config construction
- domain-specific config sections
- validation/normalization helpers
- outward-facing config exports

That makes the config surface harder to scan and keeps the umbrella's `src >
800 lines` criterion open even though many larger refactors have already landed.

## Desired Behavior

- `runtime/src/core/config.ts` becomes a thin coordinator/entrypoint.
- Domain-specific config parsing/building lives in nearby focused modules.
- The exported config contract remains compatible with existing callers.
- Existing import sites should continue to import from `runtime/src/core/config.ts`; do not turn this into repo-wide caller churn.
- CLI → env → config-file → default precedence remains unchanged.
- Mutable runtime behavior remains unchanged for live settings such as identity updates and `setWebTotpSecret(...)`.
- Tests continue to cover current config behavior with no behavioral regressions.
- The main `core/config.ts` file falls below 800 lines.

## Suggested extraction seams

Potential seams to evaluate:

1. **Environment parsing helpers**
   - env bool/int/path parsing
   - normalization/default helpers
2. **Web/runtime config sections**
   - HTTP/web limits
   - auth/session-related config
   - workspace/runtime-path config
3. **Feature/integration config sections**
   - scheduler/background settings
   - remote/interop settings
   - extension-related config seams
4. **Mutable config/state seam**
   - keep runtime-live setters (`setAssistantName`, `setAssistantAvatar`, `setUser*`, `setWebTotpSecret`) on a stable surface
   - avoid creating confusing split ownership for mutable exported state

Likely first extraction candidates based on the current file shape:

- web server/runtime config builders
- remote interop config
- session/tool/workspace-search config
- pushover / WhatsApp leaf config groups

### Preferred module layout

Keep `runtime/src/core/config.ts` as the stable public entrypoint and split
internals into a small set of nearby helpers/modules, for example:

- `runtime/src/core/config-sources.ts`
  - `.env` loading, JSON config loading, CLI arg helpers, shared precedence glue
- `runtime/src/core/config-paths.ts`
  - workspace/store/data/config paths, TLS default-path detection
- `runtime/src/core/config-web.ts`
  - `WEB_SERVER_CONFIG`, `WEB_RUNTIME_CONFIG`, web defaults, auth/session/TOTP/passkey settings
- `runtime/src/core/config-runtime.ts`
  - runtime timing, logging, agent timeout, routing config
- `runtime/src/core/config-interop.ts`
  - remote interop config
- `runtime/src/core/config-storage.ts`
  - session storage, tool activation, workspace search, tool-output retention
- `runtime/src/core/config-integrations.ts`
  - WhatsApp and Pushover

This layout is illustrative rather than mandatory; the main constraint is to
keep the split cohesive and small.

### Public API rule

- Existing callers should continue importing from `runtime/src/core/config.ts`.
- New submodules should be internal implementation detail for this tranche.
- Do not broaden this ticket into repo-wide import-path migration.

### Recommended extraction order

1. `config-integrations.ts`
2. `config-storage.ts`
3. `config-sources.ts`
4. `config-web.ts`
5. only then consider `config-runtime.ts` / `config-interop.ts` if still needed

The goal is not to maximize abstraction, only to separate clearly cohesive
blocks.

## Acceptance Criteria

- [ ] `runtime/src/core/config.ts` is reduced below 800 lines.
- [ ] Extracted helpers/modules are organized by coherent config concern rather
      than arbitrary splitting.
- [ ] Public config exports and caller behavior remain compatible.
- [ ] Existing callers do not need broad import-path rewrites.
- [ ] CLI → env → config-file → default precedence is preserved for touched settings.
- [ ] Mutable config setters and live state updates still behave correctly.
- [ ] No new config import cycles or module-init ordering regressions are introduced.
- [ ] Existing config tests are updated or rerun successfully.
- [ ] Type check passes.
- [ ] The ticket update records the final extraction boundaries and validation
      commands.

## Implementation Paths

### Path A — thin coordinator + focused config helpers (recommended)
1. Keep `core/config.ts` as the main import surface.
2. Extract cohesive parsing/building groups into a few adjacent modules.
3. Re-export or compose from the main file so callers do not need churn.
4. Validate behavior with existing config/runtime tests.

**Pros:**
- bounded refactor
- low product risk
- directly improves umbrella completion metrics

**Cons:**
- requires discipline to avoid over-splitting tiny helpers

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed.
- [ ] Real-browser smoke pass required? If yes, record the surface.

### Existing tests to rerun
- `runtime/test/config/config.test.ts`
- `runtime/test/config/config-coverage-import.test.ts`
- `runtime/test/core/config.test.ts`
- `runtime/test/agent-control/passkey-totp-handler.test.ts`
- `runtime/test/agent-control/agent-control-handlers.test.ts`
- `runtime/test/ipc/ipc.test.ts`
- relevant web-channel constructor/auth tests if touched by config shape changes

### New regression coverage to add (only if needed)
- import-cycle / module-init safety for extracted config modules
- explicit guard for unchanged precedence on one or two moved config groups
- explicit guard for live setter behavior if extraction changes ownership

### Likely validation
- rerun `core/config`-related tests
- rerun any touched runtime config consumer tests
- `bun run typecheck`
- targeted build/lint if needed

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

### 2026-04-13
- Refinement pass added a preferred module layout and extraction order to keep the implementation bounded:
  - prefer `config-integrations` / `config-storage` / `config-sources` first
  - keep `runtime/src/core/config.ts` as the stable public entrypoint
  - avoid repo-wide import churn in this ticket
- Explicitly called out the mutable-state seam (`setAssistantName`, `setUser*`, `setWebTotpSecret`) as the main ownership risk to keep visible during implementation.
- Created as the next concrete structural quality slice after confirming the runtime/server logging cleanup ticket is already done.
- Chosen because `runtime/src/core/config.ts` remains just above the umbrella threshold while being much more bounded than the larger web/UI monoliths.
- This is intended as a low-drama refactor that advances the umbrella's `no file in src exceeds 800 lines` criterion without opening new product scope.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

Prefer extraction by coherent config concern, not by mechanical line-count
sharding.

Keep this ticket scoped to structural improvement, not config redesign. If the
work uncovers real config-contract problems, split those into follow-up tickets
instead of broadening this tranche.

## Links

- `workitems/20-doing/codebase-quality-cleanup-2026.md`
- `runtime/src/core/config.ts`
- `workitems/50-done/add-tests-core-config-and-keychain.md`
- `workitems/50-done/extract-typed-config-objects.md`
