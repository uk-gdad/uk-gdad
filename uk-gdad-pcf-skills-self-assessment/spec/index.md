# Skills self-assessment — specification

Refines [`spec/index.md`](../../spec/index.md), which governs the taxonomy and
style. This file covers only the self-assessment tool.

## Purpose

Let a person rate themselves against the skills in the framework, see where they
sit today, and decide what to work on next.

It is a **self**-assessment: the output is for the person who filled it in. It
is not a management tool, not a performance record, and not evidence for a
promotion board.

## Shape

One file, `index.html`, that runs with no build step and no server.

- Single page, no dependencies to install, no build step.
- [Alpine.js](https://alpinejs.dev) for behaviour, [Pure CSS](https://purecss.io)
  and Font Awesome for presentation, all from a CDN with subresource integrity
  hashes.
- Everything runs in the browser. Nothing is transmitted, nothing is stored on a
  server, and nothing is persisted between visits.

The privacy property is the point, and it is why the tool stays a single file:
a person rating themselves honestly needs to know the answers go nowhere. Any
change that adds a network call, analytics or storage breaks that promise, and
the page says plainly that it tracks nothing and saves nothing.

Because nothing persists, the export is the only way to keep a result.

## Rating scale

One range input per skill, 0 to 4:

| Value | Rating | Meaning |
| ---: | --- | --- |
| 0 | None | You have not worked with this |
| 1 | Awareness | You know what it is and why it matters |
| 2 | Working | You do it with support |
| 3 | Practitioner | You do it unsupported, and handle the usual exceptions |
| 4 | Expert | You set the approach and develop others in it |

## Export

A **Download** button writes `skills.tsv`: a header row of skill ids and one
data row of ratings, tab separated. It opens in any spreadsheet program and
reads cleanly in Python, R or Julia. The file is generated in the browser from
the current slider values; nothing is uploaded.

## Skill list

The tool carries its own list of 189 skills, taken from
<https://ddat-capability-framework.service.gov.uk/skills>, which publishes 185
today. The role summaries name 183. The three lists have been compared against
the catalogue in [`spec/skills.md`](../../spec/skills.md), and what could be
reconciled from the source has been.

The summaries stay canonical for what a *role level* requires; this list stays
canonical for what the framework publishes as a catalogue. When the framework
changes, re-fetch the catalogue and redo that comparison.

## Publishing

The website vendors this file:
`uk-gdad.github.io/static/tools/skills-self-assessment.html`, refreshed by
`uk-gdad.github.io/bin/sync`. It is served at `/tools/skills-self-assessment.html`
and introduced by the page at `/skills-self-assessment/`.

Because it is a copy, edit `index.html` here and re-run sync — never edit the
vendored copy.

## Quality bar

- Opens and works from a file path, with no console errors.
- Every slider is two-way bound, so the number beside it tracks the slider.
- Keyboard operable throughout; every slider has a label.
- No network call other than the CDN stylesheets and script.
- The page states, in the page itself, that nothing is tracked or saved.
- The download produces one header row and one data row, of equal length.
