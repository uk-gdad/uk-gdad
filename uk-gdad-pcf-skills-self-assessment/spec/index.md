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

## On the website

The website no longer vendors this file. It carries its own version of the tool
as a page of the SvelteKit app, at `/skills-self-assessment/`, built to behave
like the site's skills gap forms:

- Five-step choices per skill, with search, a progress count, and a filter for
  skills not yet rated. A skill that has not been rated is distinct from one
  rated 0.
- Ratings are saved in the reader's own browser as they go, and restored on the
  next visit. This is the one difference from the standalone page: nothing is
  sent anywhere, but the browser does keep a copy until it is cleared.
- **Download TSV** writes `skills-self-assessment.tsv`: the columns `Form`,
  `URL` and `Exported`, then one column per skill id, and one row of ratings
  with unrated skills blank. **Download JSON** writes the same ratings with
  the scale. **Clear ratings** deletes the saved copy.

The old address, `/tools/skills-self-assessment/`, is a redirect to it.

The site's skill list is `uk-gdad.github.io/src/lib/skills-self-assessment.ts`,
copied from this file's list. The two lists are not synchronised: change a
skill id in one and make the same change in the other, since an id is a column
heading in an export.

This single file stays as the version that needs no build step and no browser
storage, and works opened from a file path.

## Quality bar

- Opens and works from a file path, with no console errors.
- Every slider is two-way bound, so the number beside it tracks the slider.
- Keyboard operable throughout; every slider has a label.
- No network call other than the CDN stylesheets and script.
- The page states, in the page itself, that nothing is tracked or saved.
- The download produces one header row and one data row, of equal length.
