import { expect, test } from "bun:test";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";

function writeDailyNote(workspace: string, date: string, summary: string) {
  const dir = join(workspace, "notes", "daily");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${date}.md`), `---\ndate: ${date}\nsummarised_until: ${date}T23:59:59.000Z\nmessages_total: 4\nmessages_user: 2\nmessages_assistant: 2\nsession_trees: 1\nsession_chats: 1\nfirst_message: ${date}T12:00:00.000Z\nlast_message: ${date}T12:15:00.000Z\nscope_mode: all-web-session-trees\nscope_anchor: web:default\n---\n# ${date}\n\n## Summary\n\n${summary}\n`, "utf8");
}

test("refresh keeps notes/memory/days sparse by default and only indexes sparse day files when they already exist", async () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-refresh-sparse-"));
  const store = join(base, "store");
  const data = join(base, "data");
  mkdirSync(store, { recursive: true });
  mkdirSync(data, { recursive: true });

  try {
    writeDailyNote(base, "2026-04-05", "Infra tooling and memory maintenance landed.");

    const script = `
      import { initDatabase, storeMessage } from ${JSON.stringify(new URL("../../src/db.js", import.meta.url).pathname)};
      import { refreshAgentMemoryFromDailyNotes } from ${JSON.stringify(new URL("../../src/agent-memory/refresh.js", import.meta.url).pathname)};
      initDatabase();
      storeMessage({
        id: 'msg-' + Date.now(),
        chat_jid: 'web:default',
        sender: 'user',
        sender_name: 'You',
        content: 'database, not just daily-note summaries',
        timestamp: '2026-04-05T12:10:00.000Z',
        is_bot_message: false,
      });
      refreshAgentMemoryFromDailyNotes({ recentDays: 7 });
    `;

    const env = {
      ...process.env,
      PICLAW_WORKSPACE: base,
      PICLAW_STORE: store,
      PICLAW_DATA: data,
      PICLAW_DB_IN_MEMORY: "1",
    };

    let proc = Bun.spawnSync([process.execPath, "-e", script], { env, stdout: "pipe", stderr: "pipe" });
    expect(proc.exitCode).toBe(0);

    const sparsePath = join(base, "notes", "memory", "days", "2026-04-05.md");
    expect(await Bun.file(sparsePath).exists()).toBe(false);
    let memoryIndex = readFileSync(join(base, "notes", "memory", "MEMORY.md"), "utf8");
    expect(memoryIndex).toContain("[2026-04-05](../daily/2026-04-05.md)");

    mkdirSync(join(base, "notes", "memory", "days"), { recursive: true });
    writeFileSync(sparsePath, "# 2026-04-05\n\n## Durable takeaways\n\n- Custom sparse memory file.\n", "utf8");

    proc = Bun.spawnSync([process.execPath, "-e", script], { env, stdout: "pipe", stderr: "pipe" });
    expect(proc.exitCode).toBe(0);
    expect(readFileSync(sparsePath, "utf8")).toContain("Custom sparse memory file");
    memoryIndex = readFileSync(join(base, "notes", "memory", "MEMORY.md"), "utf8");
    expect(memoryIndex).toContain("[2026-04-05](days/2026-04-05.md)");
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});
