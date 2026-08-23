# UK GDAD PCF skills self-assessment

A single web page for rating yourself against the skills in the United Kingdom
Government Digital and Data (GDAD) Profession Capability Framework (PCF).

**Use it:** <https://uk-gdad.github.io/tools/skills-self-assessment.html> — or
open `index.html` in a browser. No build step, no install, no server.

## How it works

One slider per skill, 0 to 4:

| Value | Rating |
| ---: | --- |
| 0 | None |
| 1 | Awareness |
| 2 | Working |
| 3 | Practitioner |
| 4 | Expert |

A **Download** button writes `skills.tsv` — one header row of skill ids, one
data row of your ratings — which opens in any spreadsheet program and reads
cleanly in Python, R or Julia.

## Privacy

Everything runs in your browser. Nothing is transmitted, nothing is stored on a
server, and nothing is kept between visits. That last part is why the download
exists: it is the only way to keep a result.

## What it is for

It is a **self**-assessment. The output is for the person who filled it in — to
find the two or three gaps worth working on next. It is not a management tool,
not a performance record, and not evidence for a promotion board.

Pair it with your [role summary](../uk-gdad-pcf-role-summaries), which tells you
which of these skills your level actually needs, and with the
[CPD checklist](../uk-gdad-pcf-continuing-professional-development-checklists)
for what to do about a gap.

## Note on the skill list

The tool carries 189 skills from
<https://ddat-capability-framework.service.gov.uk/skills>. The role summaries
name 183. The two lists are different vintages of the framework; see
[known drift](../spec/index.md#known-drift).

Full contract: [spec/index.md](spec/index.md).
