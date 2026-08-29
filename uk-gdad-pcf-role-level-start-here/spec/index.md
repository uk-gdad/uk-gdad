# Role level start here — specification

Refines [`spec/index.md`](../../spec/index.md), which governs the taxonomy, the
role index, slugs, style and licensing. This file covers only what is specific
to the start here pages.

## Purpose

For each UK GDAD PCF role level, a single "start here" page: what the level is
for, where to find the other five documents this repository publishes for it,
and a learning pathway a complete novice could follow toward it.

## Status

This project completed its rollout on 2026-08-28 and now holds all 205 role
levels, the same as the other four derived projects. `bin/check` requires all
205 from it, and validates every file's title, sections, and that its slug is
a real role level. See the root [`spec/index.md`](../../spec/index.md)
§ Projects.

## Input

`uk-gdad-pcf-role-summaries/roles/<slug>.md` — nothing else. The role, the
level, its accountabilities and its skills are the whole input. Do not derive
one level's page from another level's page: a senior and a lead in the same
role need different pathways even though the shape of the page is identical.

## Output

`roles/<slug>.md`, the same slug as the summary.

### Title

```
# <Level> - start here
```

Sentence case, level name as the framework writes it, e.g.
`# Senior test engineer - start here`.

### Tone

Friendly, welcoming, helpful — see [`AGENTS/writing.md`](../../AGENTS/writing.md).
This page is often the first thing a reader sees for this role level, before
the role summary's flatter, quoted prose.

### Required sections

In this order:

#### `## Purpose`

One paragraph. Inspirational and motivational, and specific to this role
level's actual accountabilities and skills — not a paragraph that would read
equally well on the level above or below it.

#### `## Explore the framework`

One line of framing, then six links — the sibling pages this repository
publishes for this exact role level, plus the one tool that is not per-level:

| Link text                          | Target                                                      |
| ----------------------------------- | ------------------------------------------------------------ |
| Role summary                        | `https://uk-gdad.github.io/roles/<slug>/`                    |
| Assessments                         | `https://uk-gdad.github.io/assessments/<slug>/`              |
| Continuing professional development | `https://uk-gdad.github.io/continuing-professional-development/<slug>/` |
| Skills gap form                     | `https://uk-gdad.github.io/skills-gap-forms/<slug>/`         |
| Skills self-assessment              | `https://uk-gdad.github.io/skills-self-assessment/`          |
| Upskilling resources                | `https://uk-gdad.github.io/upskilling/<slug>/`               |

Absolute URLs to the published site, not relative `.md` links — unlike the
other derived documents, this page's whole job is to point a reader at the
live site, so it names it directly. `<slug>` is this role level's slug, path
segments unchanged.

#### `## Learning pathway`

A short paragraph on how to use the pathway, then one checklist item per skill
the summary names — ordered as a novice should learn them, not necessarily the
summary's order — each as:

```
- [ ] **<what this skill covers>**

  <two or three sentences: what this means at this level, grounded in the
  summary's own wording>

  Ask AI: "<a real, specific prompt the reader could paste into any AI tool to
  go deeper on this exact thing>"
```

Rules, none of them mechanically checked, all of them load-bearing:

- **No direct resource links**, other than to GOV.UK (`gov.uk`), the UK GDAD
  framework's own site (`ddat-capability-framework.service.gov.uk`), or
  `uk-gdad.github.io`. The pathway coaches the reader to find and evaluate
  resources themselves; naming one here would duplicate — and date faster
  than — the upskilling resources document.
- **No specific product names.** Say "a test automation framework" or "a
  version control system", not the name of one, even where a common choice is
  obvious for the role.
- **Every checkbox unchecked.** These are for the reader to tick, like the CPD
  checklist.

### Retired levels

The four `chief-digital-and-data` roles are marked `Role level: NOT IN USE` in
their summary, with every named skill body reading `NOT IN USE` too — see the
root [`spec/index.md`](../../spec/index.md) § Taxonomy. There is nothing to
build a Purpose paragraph or a skill-by-skill pathway from in the usual way.

Follow the convention the other four derived projects already use for these
four files: title the page with the role name, not `NOT IN USE`; say plainly,
once, that the framework marks this role level as not in use and that the
pathway below works from the role's own duties instead; then write the
Learning pathway from the `In this role, you will:` bullets, one item per named
skill heading, grouping duties under the skill name they best fit. The other
rules — no resource links, no product names, unchecked boxes — still apply.

## Authoring

1. Read the summary for the slug.
2. Write the Purpose paragraph from the level's own accountabilities.
3. Build the six links from the slug.
4. Order the skills into a teaching sequence, and write one checklist item per
   skill with a genuinely specific "Ask AI" prompt — not "Ask AI: how do I get
   better at this?" for every item.
5. Write `roles/<slug>.md`.
6. Run `bin/check` from the repository root.
7. Human review: confirm nothing was copied from a neighbouring level, and
   that no product name or resource link slipped into the pathway.

## Quality bar

- The Purpose paragraph says something true of this level that is not true of
  its neighbours.
- Every skill the summary names for this level has a pathway item.
- No product name and no resource link outside the three allowed domains.
- Nothing in the file was copied from another role level's file.
