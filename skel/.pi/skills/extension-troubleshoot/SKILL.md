---
name: extension-troubleshoot
description: Diagnose and fix piclaw extension issues (imports, DB init errors, watcher perms), update skel, and restart safely.
distribution: public
---

# Extension troubleshoot

Use this when piclaw web chats only show thinking or extensions throw errors.

## Steps

1. Check extension errors:
   ```bash
   tail -n 80 /var/log/piclaw/piclaw.stderr.log
   ```

2. Inspect the current extension file:
   ```bash
   readlink -f /workspace/.pi/extensions/context-mode.ts
   sed -n '1,120p' /workspace/.pi/extensions/context-mode.ts
   ```

3. Ensure imports reference installed Piclaw, not workspace source.
   - In the container layout, use packaged sources under `/usr/local/lib/bun/install/global/node_modules/piclaw/runtime/...`.
   - Avoid imports from `/workspace/piclaw` or workspace-local `node_modules`; those paths can drift after reloads.

4. Harden the extension.
   - Remove startup cleanup that touches the DB before init.
   - Wrap tool executes in `try/catch`.
   - Guard `saveToolOutput` with `try/catch`.

5. Update the matching skel extension:
   ```bash
   cp /workspace/.pi/extensions/context-mode.ts /workspace/piclaw/skel/.pi/extensions/context-mode.ts
   ```

6. Fix workspace watcher permissions if `fs.watch` warns on tailscale:
   ```bash
   sudo chown -R agent:agent /workspace/.piclaw/tailscale
   ```

7. Restart piclaw.

   If you are finishing an in-agent deploy or fix, prefer `exit_process` as the last action so the managed process exits cleanly and the enclosing service manager restarts it.

   For a shell restart, use the active service manager:
   ```bash
   # container / Supervisor
   supervisorctl restart piclaw

   # host-native / systemd --user
   systemctl --user restart piclaw.service
   ```

8. Verify:
   ```bash
   tail -n 40 /var/log/piclaw/piclaw.stderr.log
   ```
