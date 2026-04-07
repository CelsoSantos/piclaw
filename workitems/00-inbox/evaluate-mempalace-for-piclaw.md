---
id: evaluate-mempalace-for-piclaw
title: Evaluate mempalace for Piclaw
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
  - evaluation
  - memory
  - knowledge-management
  - integration
owner: pi
---

# Evaluate mempalace for Piclaw

## Summary

Review [`milla-jovovich/mempalace`](https://github.com/milla-jovovich/mempalace)
and assess whether Piclaw should adopt, integrate, emulate, or ignore any part
of its memory model, UX, or implementation approach.

This should begin as an evaluation/design ticket, not an implementation
commitment.

## Questions to answer

- What problem is `mempalace` solving?
- Is it primarily a memory store, retrieval layer, workflow pattern, UI surface,
  or agent-coordination mechanism?
- How does it overlap with Piclaw’s current memory stack:
  - workspace notes
  - Dream / AutoDream
  - message DB search
  - workspace FTS
  - note indexing and structured preferences?
- What parts, if any, would improve Piclaw’s current memory and recall model?
- What assumptions in `mempalace` would conflict with Piclaw’s architecture,
  privacy boundaries, or timeline-first UX?
- If it is promising, what is the smallest Piclaw-native MVP worth trying?
- Should the result become:
  - a skill,
  - an extension,
  - a runtime memory primitive,
  - or only inspiration for existing memory work?

## Rough Acceptance Criteria

- [ ] `mempalace` is reviewed for product shape, memory model, and architecture assumptions.
- [ ] Overlap and differences with current Piclaw memory behavior are documented.
- [ ] A recommendation is made: adopt, adapt, emulate, or reject.
- [ ] If worth pursuing, a concrete follow-up implementation ticket is created.

## Notes

- Prefer a Piclaw-native interpretation over a literal clone.
- Keep workspace-note privacy, durable local state, and existing Dream/indexing flows in mind during evaluation.
- If the idea overlaps strongly with existing memory tickets or notes, fold the useful parts into the best existing ticket rather than creating parallel implementation tracks.

## Updates

### 2026-04-07
- Created from request to review `milla-jovovich/mempalace` for possible Piclaw adoption or inspiration.
- Kept in `00-inbox` pending a first-pass review of the repository and its memory model.

## Links

- `https://github.com/milla-jovovich/mempalace`
