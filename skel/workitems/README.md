# Workitems compatibility scaffold

Piclaw tracks active project work in GitHub Issues and GitHub Projects. Do not create new Markdown work-item files here unless a generated project explicitly adopts the legacy file-board workflow.

The lane directories and `_templates/work-item.md` remain for compatibility with older workspaces and external project templates. Piclaw's own repository protects this surface with `.github/workflows/workitems-lock.yml`.

For active Piclaw work:

```bash
gh issue list -R rcarmo/piclaw --state open
gh issue create -R rcarmo/piclaw --title "..." --body "..."
```

See `docs/workitems-github-migration.md` in the Piclaw source repository for the migration record.
