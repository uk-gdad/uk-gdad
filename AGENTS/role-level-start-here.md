# Role level start here

Contract: [`uk-gdad-pcf-role-level-start-here/spec/index.md`](../uk-gdad-pcf-role-level-start-here/spec/index.md).

## What this is

The page a reader lands on first. It orients them to one role level, points
them at the other nine pages this repository publishes for it, and gives them
a novice-to-skilled learning pathway to work through before, or instead of,
reading anything else.

It completed its rollout on 2026-08-28: all 205 files exist, and it is part of
the fully-mirrored set like the other seven derived projects — `bin/check`
requires all 205 from it, exactly as it does from them. See the root
[`spec/index.md`](../spec/index.md) § Projects.

## Shape

Title `# <Level> - start here`, then three `##` sections:

`Purpose` · `Explore the framework` · `Learning pathway`

## Purpose

One paragraph. Inspirational and motivational, but grounded in what this
specific role level actually does — its accountabilities and its skills, not a
generic "you'll make a difference" line that could sit on any level's page.

## Explore the framework

Nine links, to the sibling page for this exact role level on each of:

1. Role summary
2. Assessments (by assessor) — the assessor-administered project
3. Assessments (by yourself) — the self-practice project
4. Competency assessment (by assessor) — the assessor-administered project
5. Competency assessment (by yourself) — the self-rating project
6. Continuing professional development
7. Skills gap form
8. Skills self-assessment (the one page that is not per-level — link the tool
   itself)
9. Upskilling resources

Link with the absolute website URL, not a relative `.md` path — this document
is a signpost to the published site, and it names the site explicitly per its
own spec. See `uk-gdad.github.io/spec/index.md` § URLs for the path shape per
document kind.

## Learning pathway

Turn the level's skills into a checklist a complete novice could start
working through, ordered by what to learn first, not by the order the summary
lists them in — the summary is authoritative on content, not on teaching
sequence.

For each item:

- A checkbox and a short name for what it covers.
- A few sentences of description, grounded in what the summary says this level
  actually does.
- A line coaching the reader to find their own resources: `Ask AI: "..."` with
  a real, specific prompt they could paste into any AI tool.

Three rules the validator does not check, so hold them by hand:

- **No resource links**, other than to GOV.UK, the UK GDAD framework's own
  site, or `uk-gdad.github.io`. The pathway teaches the reader to find
  resources, it does not hand them a reading list — that is what the
  upskilling resources document is for.
- **No product names.** Describe a kind of tool ("a test automation
  framework", "a version control system") rather than naming one, even where
  the role level obviously implies a common choice.
- **Never copy another level's pathway.** A senior and a lead in the same role
  share a title shape and nothing else — the checklist items, the framing, and
  the "Ask AI" prompts all have to earn their place at this specific level.

## Register

The register rule in [`AGENTS/writing.md`](writing.md) applies as everywhere
else, and bites hardest in the Learning pathway: an apprentice item is small,
concrete, and one AI question away from an answer; a principal item is about
judgement, trade-offs and other people, and the AI question it suggests should
be at that altitude too.
