# UK GDAD PCF continuing professional development checklists

A continuing professional development (CPD) checklist for every role level in
the United Kingdom Government Digital and Data (GDAD) Profession Capability
Framework (PCF).

**205 documents**, one per role level, each written from that level's
[role summary](../uk-gdad-pcf-role-summaries).

CPD is the deliberate, ongoing practice of building and recording skills,
knowledge and experience across a career — formally and informally. These
checklists give that practice a shape.

## What a document contains

Four general sections, identical in every file and shared from
[spec/template.md](spec/template.md):

- **Types** — structured, reflective and self-directed CPD
- **Phases** — reflect and plan, select and execute, track and apply
- **Events** — conferences, meetups, courses, communities
- **Teamwork** — learning with and from colleagues

Then the section that makes the file worth opening:

- **UK GDAD PCF Role Skill Specifics** — a checklist built from the skills that
  this role level actually requires

Every item is a markdown task item, so you can tick it:

```
- [ ] Lead the response to one incident this quarter, and write the timeline up
      the same week while it is fresh.
```

Things to do, not things to know. Full contract: [spec/index.md](spec/index.md).

## Use it

```sh
# Just the level-specific checklist
sed -n '/## UK GDAD PCF Role Skill Specifics/,$p' \
  roles/software-development/software-developer/4-senior-developer.md
```

Or read it on the web: <https://uk-gdad.github.io/continuing-professional-development/>

## Advisory

Created with AI assistance and human review, for educational purposes, and work
in progress. Before using it in any way that affects someone's job, consult your
organisation's human resources, people and organisational development, or legal
compliance colleagues.
