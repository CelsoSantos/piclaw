---
id: audit-timeline-search-experience
title: Audit the timeline search experience
status: inbox
priority: medium
created: 2026-04-07
updated: 2026-04-07
target_release: later
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - timeline
  - search
  - ux
owner: pi
---

# Audit the timeline search experience

## Summary

Review the current web timeline search experience end to end and identify where
it is confusing, incomplete, visually inconsistent, or inefficient.

This should begin as an audit/refinement ticket, not an implementation
commitment. The goal is to turn search UX complaints and rough edges into a
clear set of concrete follow-up fixes.

## Questions to answer

- How does timeline search currently behave in:
  - search entry
  - loading/empty states
  - result navigation
  - inline highlighting
  - jump-to-message behavior
  - search exit/reset?
- Are search results clearly scoped and explained?
- Do highlighted rows/terms feel visually consistent with the rest of the UI?
- Is the search mode discoverable and reversible?
- Are there regressions or awkward interactions with:
  - threaded replies
  - message references
  - rich markdown/code blocks
  - adaptive cards/resources/attachments?
- Which rough edges are pure polish vs. which need behavioral changes?
- What are the smallest high-value fixes to land first?

## Rough Acceptance Criteria

- [ ] Current timeline search flow is reviewed end to end.
- [ ] UX pain points are documented with concrete examples.
- [ ] Visual, behavioral, and interaction issues are separated clearly.
- [ ] A prioritized follow-up fix list is created.
- [ ] If warranted, concrete implementation tickets are split out.

## Implementation Paths

### Path A — focused UX audit with follow-up tickets (recommended)
1. Walk the search experience from entry to result navigation and exit.
2. Record concrete issues and classify them.
3. Split the highest-value fixes into implementation tickets.

**Pros:**
- low risk
- keeps discovery separate from implementation
- helps avoid mixing unrelated search fixes into one vague ticket

**Cons:**
- does not itself improve the UI until follow-up work lands

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [x] Real-browser smoke test
- [ ] Existing tests to rerun are listed.
- [ ] New regression coverage to add is listed if follow-up fixes are created.
- [ ] Real-browser smoke pass required? If yes, record the surface:
  - [ ] timeline search entry, result highlighting, result navigation, and exit/reset

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
- Created from request to audit the current timeline search experience.
- Kept in `00-inbox` pending first-pass UX review and issue inventory.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Keep the audit separate from workspace search / FTS indexing tickets unless overlap is explicit.
- Prefer splitting resulting fixes into narrow implementation tickets rather than one broad “improve search” bucket.

## Links

- `runtime/web/src/ui/app-timeline-actions.ts`
- `runtime/web/src/components/post.ts`
- `runtime/web/src/components/compose-box.ts`
- `runtime/web/static/css/content.css`
