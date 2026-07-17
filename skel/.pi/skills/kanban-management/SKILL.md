---
name: kanban-management
description: ARCHIVED — project work items are tracked in GitHub Issues and GitHub Projects. Use the github-issues skill when installed, or use gh directly.
distribution: public
---

# Kanban management — archived

The file-based `workitems/` board is archived. Do not create or move Markdown work-item files for active Piclaw work.

## Current workflow

Use GitHub Issues and GitHub Projects v2:

```bash
# Create an issue
gh issue create -R rcarmo/piclaw --title "..." --body "..."

# List open issues
gh issue list -R rcarmo/piclaw --state open

# Close a completed issue
gh issue close <number> -R rcarmo/piclaw --reason completed
```

If the `github-issues` skill is installed, load it for project-field IDs, status changes, labels, and board queries. Otherwise inspect the project with `gh issue` and `gh project` before changing it.

## Migration records

- `docs/workitems-github-migration.md` records the completed migration.
- `docs/github-issues-migration-plan.md` preserves the superseded plan.
- `scripts/migrate-workitems-to-github.ts` and `scripts/migrate-state.json` preserve the migration tooling and state map.
- `skel/workitems/` remains compatibility scaffolding and is protected by `.github/workflows/workitems-lock.yml`; it is not the active work tracker.
