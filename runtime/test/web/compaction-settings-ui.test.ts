import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const runtimeRoot = join(import.meta.dir, "../..");

function source(path: string): string {
  return readFileSync(join(runtimeRoot, path), "utf8");
}

test("classic compaction settings expose and persist both canonical processing methods", () => {
  const component = source("web/src/components/settings/compaction.ts");
  const i18n = source("web/src/utils/i18n.ts");
  const bundle = source("web/static/classic/dist/app.bundle.js");

  expect(component).toContain("smartCompactionMethod: normalizeSmartCompactionMethod(data.smartCompactionMethod)");
  expect(component).toContain("smartCompactionMethod,\n        compactionTimeoutSec");
  expect(component).toContain("body: currentSnapshot");
  expect(component).toContain('<option value="selective">');
  expect(component).toContain('<option value="traditional_pipelined">');
  expect(component).toContain("mergeSettingsData?.(payload.settings)");
  expect(component).toContain("applyIncoming({ ...(settingsData || {}), ...(payload.settings || {}) })");
  expect(i18n).toContain("'settings.compaction.methodSelective': 'Selective'");
  expect(i18n).toContain("'settings.compaction.methodTraditionalPipelined': 'Traditional pipelined'");
  expect(bundle).toContain('value="traditional_pipelined"');
});

test("visual compaction settings use the same canonical processing-method contract", () => {
  const component = source("web/static/visual/frontend/src/panels/settings/CompactionSection.tsx");
  const types = source("web/static/visual/frontend/src/panels/settings/types.ts");
  const bundle = source("web/static/visual/dist/app.bundle.js");

  expect(types).toContain('smartCompactionMethod?: "selective" | "traditional_pipelined"');
  expect(component).toContain('data.smartCompactionMethod === "traditional_pipelined" ? "traditional_pipelined" : "selective"');
  expect(component).toContain('<option value="selective">Selective</option>');
  expect(component).toContain('<option value="traditional_pipelined">Traditional pipelined</option>');
  expect(component).toContain('onSaveCompaction("smartCompactionMethod", value)');
  expect(component).toContain('saveSetting("compaction", field, value)');
  expect(bundle).toContain("traditional_pipelined");
  expect(bundle).toContain("Traditional pipelined");
});
