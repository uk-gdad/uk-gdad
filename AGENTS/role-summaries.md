# Role summaries

Contract: [`uk-gdad-pcf-role-summaries/spec/index.md`](../uk-gdad-pcf-role-summaries/spec/index.md).

## What makes these different

They are **plain text**, not markdown, despite the `.md` extension. No headings,
no bold, no links. Line-oriented so that a parser needs nothing but string
prefixes. The website parses them with a hand-written parser, not a markdown
library.

Do not "improve" them into markdown. Every consumer would break.

## The prefixes

```
Software development role: Software developer     <- line 1, exactly one
- A software developer designs, runs and improves software.

In this role, you will:                           <- optional
- write clean, secure code following a test-driven approach

Role level: Senior developer                      <- exactly one
- A senior developer delivers and integrates software.

At this role level, you will:                     <- optional
- plan and lead development on sets of related stories

Skill: User focus                                 <- at least one
- collaborate with user researchers and represent users internally
```

Any other non-blank line is prose belonging to the block above it — the
framework occasionally adds a note, such as "There are 2 different roles at this
level - a technical role and a management role."

## Two traps

1. **A file may name the same skill twice.** The framework sometimes lists a
   skill under two headings. Both blocks stay as written. Consumers merge the
   bullets — the website does, and anything counting skills must too. Do not
   key a list on skill name without merging first.

2. **Retired levels say `NOT IN USE`** in the level name and in every skill
   block. Detect them by that literal text. The website titles them by role name
   and adds a badge rather than showing a page called "NOT IN USE".

## Changing one

These are adapted from the framework, so a change needs a source. Nothing goes
in that the framework does not say. If a skill name looks wrong, check it
against <https://ddat-capability-framework.service.gov.uk/skills> and the
self-assessment tool's list before editing 46 files — see
[known drift](../spec/index.md#known-drift).
