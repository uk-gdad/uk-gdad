# Continuing professional development checklists — specification

Refines [`spec/index.md`](../../spec/index.md), which governs the taxonomy, the
role index, slugs, style and licensing. This file covers only what is specific
to CPD checklists.

## Purpose

For every role level, a checklist the person in that job can use to plan, do and
record their continuing professional development.

Continuing professional development is the deliberate, ongoing practice of
building and recording skills, knowledge and experience across a career, both
formally and informally. The checklist exists so that the practice has a shape
rather than being a good intention.

## Input

- `uk-gdad-pcf-role-summaries/roles/<slug>.md` — the role, level and skills.
- [`spec/template.md`](template.md) — the general-purpose material, identical in
  every file.
- For context on what the level is working towards, the matching documents in
  `uk-gdad-pcf-upskilling-resources` and `uk-gdad-pcf-assessments`.

## Output

`roles/<slug>.md`, the same slug as the summary.

### Title

Identical in all 205 files:

```
# UK GDAD PCF Continuing Professional Development Checklist
```

The level is identified by the file path and by the website page around it, not
by the title. This is deliberate: the general checklists are the same for
everyone, and only the last section is level-specific.

### Required sections

| Section | Level-specific? | What it holds |
| --- | --- | --- |
| `## Types` | No | Structured, reflective and self-directed CPD |
| `## Phases` | No | Reflect and plan · select and execute · track and apply |
| `## Events` | No | Conferences, meetups, courses, communities |
| `## Teamwork` | No | Learning with and from colleagues |
| `## UK GDAD PCF Role Skill Specifics` | **Yes** | The checklist for this level |

The four general sections come from `spec/template.md` and are copied verbatim.
Change the template, and every file changes with it.

### Checklist items

Every item is a markdown task item, so the reader can tick it:

```
- [ ] Planned training with clear goals and set outcomes.
```

Unchecked. These are for the reader to complete, not a record of what the
project has done.

### The level-specific section

`## UK GDAD PCF Role Skill Specifics` is the whole reason the file is per-level.
It must:

- Work through the skills the summary names for this level, in the summary's
  order, so a reader can hold both documents side by side.
- Turn each skill into things to do, not things to know. "Run a retrospective on
  an incident you led and write up what you would change" is a CPD item;
  "understand incident management" is not.
- Match the register to the level. An apprentice gets concrete, small,
  supported steps. A principal gets items about influence, standards across
  teams, and developing others.
- Never say `TODO`. An unwritten section is a defect, not a placeholder.

## Authoring

1. Read the summary for the slug and list its skills.
2. Copy `spec/template.md` as the base.
3. Write `## UK GDAD PCF Role Skill Specifics` against those skills.
4. Write `roles/<slug>.md`.
5. Run `bin/check` from the repository root.
6. Human review, with the summary open alongside.

## Quality bar

- Every skill in the summary is represented in the level-specific section.
- Every item is an action the reader could start this month.
- The advisory paragraph is present: AI-assisted, work in progress, educational,
  consult HR / people development / legal colleagues before relying on it.
