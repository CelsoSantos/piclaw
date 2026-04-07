---
id: merge-chinese-i18n-and-add-japanese-variant
title: Merge Chinese i18n support from Lingzo fork and add Japanese variant
status: next
priority: medium
created: 2026-04-07
updated: 2026-04-07
target_release: next
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - i18n
  - localization
  - web-ui
  - fork-integration
owner: pi
---

# Merge Chinese i18n support from Lingzo fork and add Japanese variant

## Summary

Review the internationalization/localization support added in
[`Lingzo/piclaw`](https://github.com/Lingzo/piclaw), merge the useful Chinese
language support into Piclaw, and create a parallel Japanese variant using the
same or improved localization architecture.

This should not be a blind fork sync. The first implementation slice should
extract the fork's useful web-localization substrate, upstream it in a
Piclaw-native way, and land Japanese as a first-class peer locale rather than a
follow-on patch.

## First-pass fork review findings

The relevant work is on the fork branch:

- `https://github.com/Lingzo/piclaw/tree/feat/i18n`

### What exists there now

The branch adds a small client-side i18n layer focused on the web UI:

- new `runtime/web/src/utils/i18n.ts`
  - locale union currently `en | zh`
  - in-memory translation table plus localStorage persistence (`piclaw_locale`)
  - browser-language autodetect for Chinese
  - runtime `t()` helper plus `useLocale()` / `useTranslation()` hooks
- new `runtime/web/src/components/language-switcher.ts`
  - explicit locale picker UI
- partial adoption in:
  - `runtime/web/src/components/workspace-explorer.ts`
  - `runtime/web/src/components/compose-box.ts`
  - `runtime/web/src/ui/app-main-shell-render.ts`

### Important constraints from the review

The branch is **not** an isolated i18n-only change set.

Compared with fork `main`, `feat/i18n` also carries a wide set of unrelated
changes across:

- agent/session runtime
- keychain and shell-secret handling
- markdown/highlight behavior
- infra client surfaces
- docs and generated/runtime-adjacent code

So the i18n work should be **recreated or selectively extracted**, not
cherry-picked wholesale.

### What is promising

- the fork proves a lightweight web-only localization layer is practical
- explicit language switching is already modeled
- the first translated locale is Chinese, which matches the requested merge goal

### What is incomplete / needs redesign upstream

- the locale model is currently only `en | zh`; Japanese is absent
- `zh` is generic; upstream should decide whether to keep `zh` or normalize to
  `zh-CN` for the first shipped Chinese variant
- translation coverage is partial; many UI strings remain hardcoded English
- branch placement of the language switcher and key naming should be reviewed
  rather than copied blindly
- the branch does not justify expanding v1 into runtime-generated messages,
  adaptive-card text, or agent-authored content yet

## First implementation slice (locked)

Lock the first upstream slice to:

### Slice 1 — web-localization substrate
Add a Piclaw-native i18n utility for the web client with:

- English default/fallback locale
- persisted explicit locale override
- browser-language detection as a default hint only
- a shared `t()`/hook-based translation path for web chrome strings

### Slice 2 — merge Chinese support from the fork
Port the Chinese translations from `Lingzo/piclaw` where they map cleanly to the
upstream key set.

For v1, treat this as:

- **Simplified Chinese** support
- either exposed as `zh` with documented meaning, or normalized to `zh-CN`
- the exact code choice must be locked during implementation and applied
  consistently

### Slice 3 — add Japanese as a peer locale
Add a Japanese locale on the same substrate and key set as English and Chinese.

Japanese should ship in the same architecture, not as a one-off hardcoded
special case.

### Slice 4 — keep v1 surface area intentionally narrow
Limit the first translated surface to web-client chrome only:

- workspace explorer menu/actions
- compose box chrome and related action labels
- main shell controls/badges/tooltips touched by the shared shell
- any other small shared labels required by those flows

## Out of scope for v1

- translating user-authored message content
- translating agent-authored content dynamically
- translating all runtime/server-generated strings
- adaptive-card content localization unless the card strings are already in the
  same v1 web-chrome path
- per-channel language policies for WhatsApp/Pushover
- route-per-locale or documentation-site localization
- broad fork sync of unrelated runtime changes from `feat/i18n`

## Desired Behavior

- Piclaw web UI has a maintainable localization substrate.
- English remains the default fallback.
- Chinese support from the fork is merged safely, without pulling in unrelated
  fork divergence.
- Japanese is added on the same key set and fallback rules.
- Locale choice can be set explicitly and persists locally.
- Browser language can suggest a default, but explicit user choice wins.
- Missing keys fail safely to English rather than breaking the UI.

## Acceptance Criteria

- [ ] `Lingzo/piclaw` i18n changes are isolated from unrelated fork deltas.
- [ ] A Piclaw-native web i18n substrate is selected and documented.
- [ ] Locale persistence and browser-language defaulting behavior are defined.
- [ ] Chinese support from the fork is merged in a maintainable way.
- [ ] A Japanese locale variant is added using the same key set.
- [ ] English fallback behavior is defined and verified.
- [ ] The initial v1 localized surface area is explicitly limited to web chrome.
- [ ] Follow-up tickets are created for broader localization surfaces if needed.
- [ ] Regression coverage exists for locale resolution, fallback, and representative translated UI surfaces.

## Implementation Paths

### Path A — extract the minimal web i18n substrate and upstream it cleanly (recommended)
1. Review `feat/i18n` and isolate only the useful web-localization pieces.
2. Recreate or selectively port the minimum upstream architecture:
   - locale state
   - translation lookup
   - persistence
   - explicit switcher UI
3. Normalize the key set and locale naming.
4. Land Chinese translations.
5. Add Japanese translations on the same key set.
6. Split broader runtime/card/message localization into follow-up tickets.

**Pros:**
- avoids importing unrelated fork/runtime changes
- gives upstream a maintainable i18n shape
- keeps Japanese aligned with the same model from day one

**Cons:**
- requires some recreation instead of direct cherry-pick
- translation coverage still needs explicit scoping discipline

### Path B — import fork i18n files more directly, then clean up
1. Pull the fork’s i18n utility and switcher with minimal changes.
2. Patch upstream around them.
3. Add Japanese translations after the import.

**Pros:**
- potentially faster for the first visible result

**Cons:**
- higher architectural risk
- easier to inherit fork assumptions and naming drift
- harder to separate i18n from unrelated fork changes cleanly

## Recommended Path

Execute **Path A**.

The fork has enough concrete work to prove the feature shape, but the branch is
far too broad to merge as-is. Upstream should extract the concept, port the
Chinese translations selectively, and add Japanese on the cleaned-up upstream
substrate.

## Likely implementation surfaces

- `runtime/web/src/utils/i18n.ts`
  - new or equivalent upstream i18n utility
- `runtime/web/src/components/language-switcher.ts`
  - explicit locale picker
- `runtime/web/src/components/workspace-explorer.ts`
  - first visible locale-switcher placement and menu/action labels
- `runtime/web/src/components/compose-box.ts`
  - compose placeholder and action chrome
- `runtime/web/src/ui/app-main-shell-render.ts`
  - shell-level labels, badges, and tooltips

Likely follow-up surfaces after v1:

- timeline/system copy
- auth/login/adaptive-card copy
- onboarding/empty-state copy
- server-generated text surfaces where localization is desirable

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| The fork branch imports unrelated runtime changes along with i18n | high | do not cherry-pick the branch wholesale; extract only the i18n substrate and translations |
| Locale naming becomes inconsistent (`zh` vs `zh-CN`) | medium | lock the locale-code scheme explicitly before implementation lands |
| Translation coverage is too broad for one ticket | medium | keep v1 limited to web chrome and split broader surfaces into follow-up tickets |
| Missing keys regress the UI | medium | require English fallback and test missing-key behavior |
| Japanese is added as an afterthought rather than a peer locale | medium | make Japanese part of the same first implementation slice and key set |

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [x] Real-browser smoke test
- [ ] Existing tests to rerun are listed:
  - [ ] representative web UI component tests for compose/workspace/shell surfaces
- [ ] New regression coverage to add is listed:
  - [ ] locale resolution and fallback behavior
  - [ ] persisted explicit locale override wins over browser default
  - [ ] missing-key fallback resolves to English safely
  - [ ] Chinese locale renders on the chosen v1 surfaces
  - [ ] Japanese locale renders on the same surfaces
  - [ ] default English behavior remains unchanged when no locale is selected
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] language picker + representative workspace/compose/shell translated strings

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

### 2026-04-07
- Lane change: `00-inbox` → `10-next`.
- First-pass fork review completed against `Lingzo/piclaw` branch `feat/i18n`.
- Confirmed the fork contains a real web-localization prototype rather than just translated copy:
  - `runtime/web/src/utils/i18n.ts`
  - `runtime/web/src/components/language-switcher.ts`
  - partial adoption in `workspace-explorer.ts`, `compose-box.ts`, and `app-main-shell-render.ts`
- Confirmed the current fork locale model is `en | zh` with browser-Chinese detection and localStorage persistence via `piclaw_locale`.
- Confirmed the branch is too broad to merge directly: it also carries unrelated runtime, markdown, keychain, and infra changes.
- Locked the upstream first slice to:
  - web-only i18n substrate
  - selective Chinese merge
  - Japanese peer locale
  - narrow translated web-chrome surface
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Gap: the remaining open implementation choice is whether the first shipped Chinese locale code should remain `zh` for compatibility with the fork or be normalized to `zh-CN` upstream.

### 2026-04-07
- Created from request to review and merge Chinese internationalization support from `Lingzo/piclaw` and add a Japanese locale variant as well.
- Kept in `00-inbox` pending first-pass review of the fork’s i18n architecture, scope, and mergeability.

## Notes

- Prefer an upstream Piclaw-native i18n shape over a literal fork transplant.
- Keep locale fallback and untranslated-key behavior explicit.
- Japanese should be treated as a peer locale in the same system, not a bespoke special case.
- The currently visible fork work appears focused on web-client chrome, which is the right place to keep the v1 merge scoped.

## Links

- `https://github.com/Lingzo/piclaw`
- `https://github.com/Lingzo/piclaw/tree/feat/i18n`
- `runtime/web/src/components/compose-box.ts`
- `runtime/web/src/components/workspace-explorer.ts`
- `runtime/web/src/ui/app-main-shell-render.ts`
