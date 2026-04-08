# Development

## Build from source

> Source builds are primarily for development and local testing.

```bash
make build
make up
```

The compose stack passes `PUID` / `PGID` by default (`1000:1000`). To match the container `agent` user/group to your host user:

```bash
PUID=$(id -u) PGID=$(id -g) make up
```

The default compose container name is `pibox`:

```bash
docker exec -u agent -it pibox bash
cd /workspace && pi
```

## Build targets

Run build/package commands from the **repo root**:

```bash
make build-piclaw    # full build: vendor bundle + web assets + TypeScript
make vendor          # rebuild vendored assets
make lint            # ESLint
make test            # full test suite
make ci-fast         # canonical fast CI guardrails + web build
make local-install   # pack and install piclaw globally (no restart)
make restart         # restart piclaw via the detected service manager
```

## Testing

The implementation lives under `runtime/`, so direct Bun test runs should target that subtree. Sequential mode is recommended for SQLite safety:

```bash
cd runtime && bun test --max-concurrency=1
```

## Recent focused integration notes

### MCP adapter

PiClaw now bundles `pi-mcp-adapter` as a normal package dependency and loads it as a packaged session extension from `node_modules/`.

Relevant files when working on MCP integration:

- `package.json` / `bun.lock`
- `runtime/src/agent-pool/session.ts`
- `docs/mcp.md`
- `skel/.pi/mcp.json.example`
- `skel/.pi/skills/mcp-adapter/SKILL.md`

Focused regression test:

```bash
PICLAW_DB_IN_MEMORY=1 bun test runtime/test/agent-pool/mcp-adapter-bundled.test.ts
```

### Workspace search / reindex UI

Recent workspace explorer changes added an index-status surface and manual reindex control on top of the existing FTS search/indexing pipeline.

Relevant files:

- `runtime/src/workspace-search.ts`
- `runtime/src/extensions/workspace-search.ts`
- `runtime/src/channels/web/handlers/workspace.ts`
- `runtime/src/channels/web/workspace/service.ts`
- `runtime/web/src/components/workspace-explorer.ts`

Focused regression tests:

```bash
PICLAW_DB_IN_MEMORY=1 bun test \
  runtime/test/channels/web/http-dispatch-workspace.test.ts \
  runtime/test/channels/web/http-route-classification.test.ts \
  runtime/test/channels/web/workspace-service.test.ts \
  runtime/test/workspace-search.test.ts
```

## Layout

See [architecture.md](architecture.md) for the full source layout and module boundaries.
