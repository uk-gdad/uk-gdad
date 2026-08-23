# Continuing professional development

Contract: [`uk-gdad-pcf-continuing-professional-development-checklists/spec/index.md`](../uk-gdad-pcf-continuing-professional-development-checklists/spec/index.md).

## Shape

Every file has the same title — `# UK GDAD PCF Continuing Professional
Development Checklist` — and five `##` sections. Four are general and identical
everywhere, copied from `spec/template.md`:

`## Types` · `## Phases` · `## Events` · `## Teamwork`

One is per-level and is the whole reason the file exists:

`## UK GDAD PCF Role Skill Specifics`

## Writing the level-specific section

Work through the skills the summary names, in the summary's order, so a reader
can hold both documents side by side.

Turn each skill into **things to do**, not things to know:

> **Skill: Incident management**
>
> - [ ] Lead the response to one incident this quarter, and write the timeline
>       up the same week while it is fresh.
> - [ ] Sit in on a major incident led by someone more experienced, and note
>       what they did in the first ten minutes.

Not:

> - [ ] Understand incident management processes.

Every item is a markdown task item, left unchecked. They are for the reader to
tick, not a record of what this project has done.

## Register

The register rule from `AGENTS/writing.md` bites hardest here, because the same
skill appears at eight levels of the same role. An apprentice item is small,
concrete and supported. A principal item is about standards, influence, and
developing other people.

## Changing the general sections

Edit `spec/template.md`, then propagate to all 205 files in one change. A
template edit that reaches 204 files is a defect that `bin/check` will not catch
— the sections will still be present, just inconsistent.

The template carries some en-US spelling ("recognized", "analyzing",
"organization's"). Fixing that means one sweep across all 205 files.

## Never

Write `TODO` in `## UK GDAD PCF Role Skill Specifics`. An unwritten section is
a defect, not a placeholder.
