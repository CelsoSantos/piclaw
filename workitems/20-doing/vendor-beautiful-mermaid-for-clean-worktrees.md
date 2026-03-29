---
id: vendor-beautiful-mermaid-for-clean-worktrees
title: Vendor beautiful-mermaid so clean worktrees can build web assets
status: doing
priority: high
created: 2026-03-29
updated: 2026-03-29
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - build
  - web-ui
  - dependencies
owner: pi
blocked-by: []
---

# Vendor beautiful-mermaid so clean worktrees can build web assets

## Summary

Fresh autoresearch worktrees and other clean checkouts can fail `bun run build:web` because the vendored Mermaid build currently depends on `beautiful-mermaid` being present as an installed package in that worktree context. That makes the web build less hermetic than the rest of the vendored asset pipeline and creates false negatives during refactor/autoresearch validation.

This ticket should make the `beautiful-mermaid` vendor path reliable from a clean repo/worktree state without requiring ad-hoc local installs.

## Acceptance Criteria

- [ ] `bun run build:web` works in a fresh clean worktree without manually installing `beautiful-mermaid` afterward.
- [ ] The Mermaid vendor/update flow remains reproducible and documented.
- [ ] The repo-owned vendor/build path does not depend on hidden host/worktree state.
- [ ] Existing vendored asset outputs and metadata remain correct after the change.
- [ ] Validation covers `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist` from the fixed setup.

## Implementation Paths

### Path A — Make the vendor dependency truly repo-local
Adjust the current vendor build/update flow so `beautiful-mermaid` is available from the checked-out repo/worktree in the same way other build inputs are, without post-checkout repair steps.

### Path B — Make the vendor script self-healing
Keep the current manifest/build layout, but teach the build/update scripts or setup path to ensure `beautiful-mermaid` is installed/resolved automatically before the vendor build runs.

## Test Plan

- [ ] Reproduce the current failure in a fresh clean worktree.
- [ ] Verify `bun run build:web` succeeds after the fix without ad-hoc package installation.
- [ ] Run `bun run lint`.
- [ ] Run `bun run typecheck`.
- [ ] Run `bun run check:stale-dist`.
- [ ] Record the exact clean-worktree validation steps in `## Updates`.

## Definition of Done

- [ ] The worktree/build failure is fixed in the repo, not via manual local repair.
- [ ] Validation evidence from a clean worktree is recorded.
- [ ] Follow-up docs/notes clearly describe the supported vendor/update flow.
- [ ] Autoresearch/refactor worktrees no longer need special handling for `beautiful-mermaid`.

## Updates

### 2026-03-29
- Lane change: `10-next` → `20-doing` because the missing `beautiful-mermaid` dependency is now an active blocker for clean-worktree/autoresearch validation loops.
- Intention at pickup: fix the repo-owned vendor/build path so `bun run build:web` works in fresh worktrees without ad-hoc package installs.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Created after repeated autoresearch/worktree runs hit `build:web` failures from missing `beautiful-mermaid` in clean worktree contexts.
- Scope is specifically the repo/vendor pipeline reliability issue, not general web-shell refactoring.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

Related failure shape observed in worktrees:
- `bun run build:web`
- `build:vendor:mermaid`
- `[vendor:beautiful-mermaid] Missing installed packages: beautiful-mermaid`

## Links

- `package.json`
- `runtime/vendor-manifests/beautiful-mermaid.json`
- `runtime/scripts/build-beautiful-mermaid-vendor.ts`
- `runtime/scripts/update-beautiful-mermaid.ts`
- `workitems/20-doing/continue-decompose-web-app-shell-toward-500-lines.md`
