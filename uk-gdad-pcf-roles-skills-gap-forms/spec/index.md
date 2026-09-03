# Roles skills gap forms — specification

Refines [`spec/index.md`](../../spec/index.md), which governs the taxonomy, the
role index, slugs, style, and licensing. This file covers only what is specific
to skills gap forms.

All 205 documents are written, one per role level, mirroring the canonical role
index exactly. The project is registered in [`bin/check`](../../bin/check) and
vendored by the website. See [Registration](#registration).

The 205 cover every case this contract describes: the plainest register and the
densest, levels with nothing above them, single-level roles with no ladder at
all, a role whose lowest published level is *senior*, both `-management` twins,
qualified skill names (`User focus (frontend developer)`), roles that share most
of their skill descriptions with another role — and three roles that share
**every** skill, word for word, at **every** level — skills whose wording never
changes across a whole role, ladders where *lead* sits above *principal*,
expectations that narrow rather than widen at a higher level (including a
head-of level worded below the entry level on one skill, and below its own leads
on four; a principal worded below its own lead on another; and a level that
drops a skill the four below it carry), roles whose accountabilities are barely
represented in their published skills, roles the framework publishes with no
accountabilities at all, a first level that is a gatekeeper rather than a
trainee, an accountability with no matching skill to support it, two adjacent
levels that are different jobs rather than a ladder, qualification requirements
that escalate across three steps to an expert certificate, roles whose work is
sensitive enough to need a warning about what to write down, and the four
retired levels that publish skill names but no expectations.

- [Purpose](#purpose)
- [What this is not](#what-this-is-not)
- [Input](#input)
- [Output](#output)
- [Writing the sections](#writing-the-sections)
- [Register](#register)
- [Legal and privacy constraints](#legal-and-privacy-constraints)
- [Retired levels](#retired-levels)
- [Authoring](#authoring)
- [Quality bar](#quality-bar)
- [Registration](#registration)

## Purpose

For every role level, one form that human resources sends to an employee, and
that the employee reads on their own and fills in.

The form asks the person to compare what they do today against what the
framework says this role level requires — skill by skill, at this level's depth
— and to say where the gaps are and what would close them.

Two audiences, one document:

- **The employee fills it in.** Everything needed to answer is on the page. They
  should not have to look up the framework, ask a manager what a skill name
  means, or guess what "good" looks like at their level. The form explains
  before it asks.
- **Human resources sends it.** It should go out as a link with one sentence of
  covering note, and it should be defensible: fair questions, about the job,
  and nothing that invites an answer the organisation must not hold.

**This is a development conversation, not an assessment.** Nothing here scores a
person, ranks them, or produces evidence for a pay, promotion or disciplinary
decision. Every document says so in `## Advisory`, and the tone has to earn it:
a person who suspects a trap answers safely, and a safe answer is a useless
answer.

## What this is not

| Not | Which is | Where |
| --- | --- | --- |
| A performance review | A management process the organisation owns | Not here |
| A psychometric assessment | Practice material for job-specific testing | `uk-gdad-pcf-psychometric-assessments-by-yourself` |
| A whole-catalogue self-rating | 189 skills, no role context, nothing saved | `uk-gdad-pcf-skills-self-assessment` |
| A learning plan | Resources and a CPD checklist | `uk-gdad-pcf-upskilling-resources`, `…-continuing-professional-development-checklists` |
| Legal advice | Named duties, not interpreted ones | See [Legal and privacy constraints](#legal-and-privacy-constraints) |

The self-assessment tool and this form share the same 0–4 rating scale
deliberately, so a person who has used one recognises the other and the two
results can sit side by side.

## Input

- `uk-gdad-pcf-role-summaries/roles/<slug>.md` — the role, the level, the
  duties, the accountabilities and the skills, in the summary's order. This is
  the whole input for the body of the form.
- The **adjacent level summaries** in the same role directory, used only for the
  one line in each skill block that says what the next step looks like. Three
  cases, all of which occur:
  - **There is no level above.** Say so plainly. It is not a shortcoming.
  - **The next level describes the skill in identical words.** Common — eight of
    the ten skills at senior developer are worded exactly as they are at lead.
    Say so, and say where the step up actually sits, which is usually in the
    accountabilities rather than the skills.
  - **The numerically next level is a `-management` twin**, not a step up. A
    level suffixed `-management` is the same level on a different track, so the
    next step comes from the next level that is a genuine progression — for
    `4-senior-developer` that is `6-lead-developer`, not `5-…-management`. Where
    a level has a twin, `## About this role level` names it, says how the two
    differ, and points at the twin's form; and one question in
    `## Job performance expectations` asks which track the person is actually
    on.

Nothing else. Do not derive one level's form from another level's form — the
whole point of a per-level form is that the expectations differ.

## Output

`roles/<slug>.md`, the same slug as the summary.

### Title

```
# <Level> - skills gap form
```

Sentence case, level name as the framework writes it, e.g.
`# Senior developer - skills gap form`. Where naming both the role and the level
reads better, use `# <Role> (<Level>) - skills gap form`. Only the
`- skills gap form` suffix is enforced.

Where the level name itself carries the `-management` track — the summary says
`Role level: Senior developer - management` — put the track in parentheses:
`# Senior developer (management) - skills gap form`. Keeping the summary's dash
would give a title with two dashes in it, and the second one stops reading as a
separator. Six forms use this.

### Required sections

In this order:

| Section | What it holds |
| --- | --- |
| `## Introduction` | Who this is for, why they received it, how long it takes, and that a gap is normal |
| `## Advisory` | The standing caution, below |
| `## How to fill in this form` | Practical instructions, including that the page cannot capture typing |
| `## Rating scale` | The 0–4 scale, with a worked example |
| `## About this role level` | The role, the level, its duties and accountabilities, and the skills it names |
| `## Job tasks` | Questions about the work the person actually does |
| `## Job skills` | One block per skill in the summary — the heart of the form |
| `## Job performance expectations` | Questions about objectives, standards and how success is judged |
| `## Legal compliance` | Questions about the legal and policy duties attached to this work |
| `## Human resources best practices` | Support, adjustments, development, and what happens to the answers |
| `## Your development priorities` | The three things to work on next, and the first step for each |
| `## Next steps` | What happens after the form goes back, and the sibling documents to use |

Extra `##` sections are allowed. A missing one is a defect.

### The advisory

`## Advisory` carries this, in substance and preferably verbatim:

> This skills gap form is created by AI and is work in progress for educational
> purposes. If you intend to use it in any way, please consult with your
> organization's appropriate teammates, such as with human resources staff, or
> people and organizational development staff, or legal compliance staff.

The en-US spelling of "organization's" is inherited from the same paragraph in
the other projects and stays as it is, per
[`AGENTS/writing.md`](../../AGENTS/writing.md).

### The page can be filled in, but nothing is saved

The markdown carries no HTML. The website builds the controls from the three
answer shapes below when it renders a form, in
[`src/lib/server/gapform.ts`](../../uk-gdad.github.io/src/lib/server/gapform.ts):
a free-text prompt becomes a labelled `<textarea>`, a rating becomes a radio
group, and a choice becomes checkboxes where the question invites more than one
answer and radios where it does not.

What has not changed is where the answers go, which is nowhere but the reader's
own browser. The site is prerendered static HTML with no server. A single
script, `static/assets/gapform.js`, saves the answers to that browser's
`localStorage` under the page's own path, and exports them on request as TSV or
as JSON. Nothing is submitted, and nothing reaches this site or any other.

So `## How to fill in this form` says all of it — that the form can be filled in
on screen, that the answers are saved in that browser and on that device alone,
how they leave (Export TSV, Export JSON, print, or copy), and that Clear
answers empties the form and deletes the saved copy, which matters on a shared
computer. Every question carries a number so that an answer can travel back on
its own, without the question attached.

Never write "submit", "save", "upload" or "the system will", and prefer "tick"
to "click" or "tap", because the form is printed as often as it is read on
screen. Never write HTML form elements, fake text boxes, or rules of underscores
into the markdown: the controls come from the renderer, and the markdown stays
readable as text.

### Question and answer conventions

Questions are numbered continuously through the file, starting at 1, in bold:

```
**Q7.** Think of the last time you reviewed someone else's code. What did you
look for first?
```

Three answer shapes, and no others:

**Free text** — the prompt on its own line, and nothing after it:

```
*Your answer:*
```

**Rating** — a task list of the five scale rows, always all five, always in
order:

```
- [ ] 0 — None: I have not worked with this
- [ ] 1 — Awareness: I know what it is and why it matters
- [ ] 2 — Working: I do it with support
- [ ] 3 — Practitioner: I do it unsupported, and handle the usual exceptions
- [ ] 4 — Expert: I set the approach and develop others in it
```

**Choice** — a task list of the options, ending with an option that lets a
person say they do not know:

```
- [ ] Yes
- [ ] No
- [ ] Not sure
```

Task items are always unchecked. They are for the reader to tick, and the
website renders them as working controls.

The one exception is the worked example in `## Rating scale`, which is inside a
blockquote and uses `- [x]` to show what a filled-in answer looks like. The
website renders that one ticked and disabled, so an example stays an example.

### Standing questions

A small number of questions are **deliberately identical in every form**, in the
way the CPD checklists' general sections are. They are standing questions
because varying their wording would make them worse, not more bespoke:

- *Do you know who will read your answers and what they will be used for?*
- *Is there anything that would make your working day work better for you? You
  do not need to explain why — just say what would help.* — the reasonable
  adjustments question, which must not be reworded into asking why.
- *Which of these have you had training or a briefing on? Tick any that apply.*
  and *Roughly when did you last complete the ones you ticked?*
- *What are your current objectives, and where did they come from?*
- The `## Your development priorities` synthesis: pick three, why each, a first
  step for each, what you need from someone else, and what evidence would show
  it worked.
- *Which of your level's accountabilities do you do routinely, and which have
  you had little chance to do?* and *What have you taken on that your role
  description does not cover?*

Everything else is written for the level. Two forms sharing a standing question
is correct; two forms sharing a skill question is drift.

More generally, the sections divide in two. `## Introduction`,
`## Advisory`, `## How to fill in this form`, `## Rating scale`,
`## Legal compliance`, `## Human resources best practices`,
`## Your development priorities` and `## Next steps` are **deliberately
consistent** across the project, so that a person who fills in two of these over
a career, and a human resources team reading many, meet the same fair framing
each time. `## About this role level`, `## Job tasks`, `## Job skills` and
`## Job performance expectations` are **specific to the level**, and that is
where distinctness is measured.

### Rating scale

The same scale as the self-assessment tool, with the same wording, so the two
are comparable:

| Value | Rating | Meaning |
| ---: | --- | --- |
| 0 | None | You have not worked with this |
| 1 | Awareness | You know what it is and why it matters |
| 2 | Working | You do it with support |
| 3 | Practitioner | You do it unsupported, and handle the usual exceptions |
| 4 | Expert | You set the approach and develop others in it |

`## Rating scale` states two things beyond the table, in every file:

- The rating is about **what you do at work today**, not what you could do, what
  you did in a previous job, or what you have read about.
- There is no target rating. A person new to a level rating themselves 1 and 2
  is describing a normal starting point, not a problem.

Then one worked example, using a skill this role level actually names, showing a
rating and a sentence of evidence, so the person can see what a good answer
looks like before they write one.

## Writing the sections

### Introduction

Who the form is for — this role, this level, named. Why it arrived: the
organisation wants to know what support this person needs, and the framework
gives a shared vocabulary for the answer. How long it takes, honestly:
30 to 45 minutes for most levels. That it is not scored, not marked and not a
test. That everyone has gaps, including the people who sent it.

### About this role level

The comprehensive explanation, and the reason the person does not need the
framework website open. From the summary, in plain words:

- What the role is, and what people in it are there to do.
- What this level is, and where it sits among the role's other levels — name
  them, in order, so the person can see the step behind and the step ahead.
- The duties from `In this role, you will:` and the accountabilities from
  `At this role level, you will:`.
- The full list of skills this level names, as an overview of what the form is
  about to walk through.

Adapt the framework's wording; do not add expectations it does not state.

### Job tasks

8 to 12 questions about the work as it actually is, anchored to the duty and
accountability bullets in the summary. Cover: a typical week; which of the
listed duties the person does often, rarely or never; work they have taken on
that the summary does not list; the tools and systems they use; what takes the
most time; what they hand off and what they wait on; what they would like more
of and less of.

The purpose is to find the gap between the job as written and the job as done,
in both directions — a person doing more than the level describes is as
important a finding as a person doing less.

### Job skills

The heart of the form. One `###` block per skill the summary names, in the
summary's order, using the skill name exactly as written — including any
qualifier, because `User focus` and `User focus (content design)` are different
skills. Where the summary names the same skill twice, merge the bullets into one
block; never write the skill twice.

Each block has these parts, in this order. Parts 2, 4 and 5 are required in
every block; parts 1 and 3 are required wherever they add something.

1. **What this means** — the skill name in plain words, wherever the name is not
   self-explanatory. `Availability and capacity management` is jargon to a
   principal too. It can be its own short paragraph or folded into part 2, but
   a reader must not have to already know the term to answer the questions.
2. **What the framework expects at this level** — the summary's bullets for this
   skill, restated plainly and truly. Say how many there are, and keep the
   count honest: where the published text runs two expectations into one bullet,
   separate them and say that is what you have done.
3. **What that looks like here** — one to four concrete examples from this
   role's actual work, so the expectation is recognisable.
4. **The next step** — one or two sentences on what the same skill looks like at
   the next level **on the same track**, taken from that level's summary. A
   `-management` sibling is the same level on a different track, so it is not
   the next step. Where the wording does not change, say that it is identical
   and name the level; where the role has no level above, say so plainly. Every
   such statement is a claim about a different summary — read it, never infer
   it. This is the single most common way one of these forms goes wrong.
5. **Rate yourself, then answer** — the five-row rating list, then **two to four
   questions**, each answerable only for this skill. Cover a recent example, how
   often they do it, and which part is hardest. Do **not** also ask what is
   missing and what support would close it per skill: `Your development
   priorities` asks both once, for every skill at once, and repeating them
   eleven times produces a form people abandon.

On question counts. An earlier draft of this contract asked for three to five
questions in every block. In practice that pushes an eleven-skill form past
seventy questions and breaks the completion time its own introduction promises,
and it is met by padding rather than by better questions. Two questions that
could only be asked of this skill beat three where the third is filler. The
[writing guidance](../../AGENTS/writing.md) makes the same trade in the other
direction: a short honest list beats a padded one.

### Job performance expectations

Questions about how the work is judged: current objectives and where they came
from; how success is measured; whether the person can say what good looks like
at this level; the feedback they have had and how useful it was; the standards,
service levels or quality bars they work to; whether workload leaves room to
meet them.

At least one question runs the other way — whether the expectations are clear,
and what would make them clearer. An unclear expectation is an organisational
gap, and the form should be able to surface one.

### Legal compliance

Questions about the legal and policy duties that attach to digital and data work
in UK public service, chosen for what this role actually touches. Draw from:

- Data protection — the UK General Data Protection Regulation and the Data
  Protection Act 2018.
- The public sector equality duty, under the Equality Act 2010.
- Accessibility — the Public Sector Bodies (Websites and Mobile Applications)
  (No. 2) Accessibility Regulations 2018, and WCAG where the role builds or
  buys interfaces.
- Information security, and the handling of information by classification.
- Records management and freedom of information — the Public Records Act 1958
  and the Freedom of Information Act 2000.
- The Civil Service Code, and the organisation's own code of conduct.
- Health and safety, and any duty specific to the service the team runs.

Every question asks about **awareness, training and support** — do you know
which of these apply to your work, have you had the training and when, do you
know who to ask, has anything got in the way of doing it properly, what
refresher would help. See [Legal and privacy constraints](#legal-and-privacy-constraints)
for what must never be asked.

Name a duty; never interpret one. The form points at the law and at the people
who advise on it. It does not tell anyone what the law requires of them.

### Human resources best practices

The section that makes the form fair, and says so out loud:

- What happens to the answers: who reads them, what they are used for, how long
  they are kept, and how to ask for a correction. Where this project cannot know
  the answer, the form says the person should ask whoever sent it, and says it
  is a reasonable thing to ask before answering.
- Reasonable adjustments, framed as **what would help**, never as why. A person
  names what they need; they do not have to explain a diagnosis to get it.
- Development goals, career direction, and what they want from the next year.
- The support they want from their manager and their organisation, including
  time and budget to learn.
- How they learn best, so that any plan that follows fits the person.
- Capacity and wellbeing, framed as whether there is room to develop at all.
- One question that asks what the organisation could do better.
- A final open question: anything else you want to say.

### Your development priorities

The synthesis. The person picks the three skills they most want to work on, says
why each one, names a first step they could start this month, says what support
they need, and says how they would know it had worked. This is the section a
manager reads first, so it has to stand on its own.

### Next steps

What happens after the form goes back — that someone will read it, that a
conversation follows, and roughly when. Then the sibling documents for the same
slug, as relative markdown links to the `.md` files:

```
../../../../uk-gdad-pcf-upskilling-resources/roles/<slug>.md
../../../../uk-gdad-pcf-continuing-professional-development-checklists/roles/<slug>.md
../../../../uk-gdad-pcf-psychometric-assessments-by-yourself/roles/<slug>.md
```

Four `../` from a three-segment slug; three from a two-segment one — the four
`chief-digital-and-data` roles sit directly under their profession directory.
The website rewrites these to site URLs where they resolve, and renders them as
plain text where they do not.

Close warmly. The last thing the person reads should make them glad they filled
it in.

## Register

The root specification's rule — register follows seniority — decides more here
than in any other project, because the reader is answering rather than reading.
A question pitched too high does not get a worse answer; it gets no answer.

| Level band | Sentences | Questions | Scaffolding |
| --- | --- | --- | --- |
| Apprentice, junior, associate | Short, one idea each | One thing asked at a time | An example answer, and a reminder that "I don't know" is fine |
| The role itself, senior | Normal working prose | May ask for a reason as well as an example | Occasional example |
| Lead, principal, head of | Longer, denser | May ask about trade-offs, other teams and consequences | Little |

The same question, at two levels of the same role:

> **Apprentice developer** — **Q12.** Think of a time you asked someone for help
> with your code. What happened next?

> **Principal developer** — **Q12.** Where has the review standard you set held
> up in your absence, and where has it depended on you being in the room?

Two rules apply at every level, seniority notwithstanding:

- **Gloss the jargon.** A framework skill name is a term of art. Explain it in
  plain words the first time it appears, even in a principal's form.
- **Never ask two things in one numbered question at junior levels.** A
  compound question gets half an answer.

## Legal and privacy constraints

These are not advisory. A form that breaks one of them is a defect.

**Never ask for**, directly or by implication:

- A protected characteristic under the Equality Act 2010 — age, disability,
  gender reassignment, marriage or civil partnership, pregnancy or maternity,
  race, religion or belief, sex, sexual orientation.
- Health information, a diagnosis, or the reason behind a request for an
  adjustment.
- Trade union membership, political opinion, immigration status, criminal
  record, caring responsibilities or financial circumstances.
- Anything about a named colleague's conduct, performance, or capability.

**Never ask the person** to confess to a breach, admit a compliance failure, or
report wrongdoing. Those have their own routes, and a development form is not
one of them.

**Never use assessment language.** No score, mark, grade, pass, fail, rank,
percentile, benchmark, or comparison with colleagues. No total at the end of the
rating lists.

**Say what an unanswered question means:** nothing. A skipped question is not a
finding, and the form states that in `## How to fill in this form`.

**Warn where the work is sensitive.** Some roles handle classified material,
live vulnerabilities or system detail that would help an attacker — security
architects most obviously, but also network architects, data architects and
anyone in an operational security post. Their forms carry a line in
`## How to fill in this form` telling the reader not to write anything sensitive
on it: describe the work at a level you would be comfortable saying in a
corridor, nothing above the classification the form will be handled at. A form
that invites a detailed answer without that warning is asking someone to create
a document their organisation cannot safely hold.

**Name the law, do not interpret it.** Every statute, regulation, or code named
must be real and named accurately. If you are not certain a duty applies to this
role, leave it out — the root specification's rule against invented facts covers
legislation first of all.

## Retired levels

Four `chief-digital-and-data` roles are published by the framework but marked
`NOT IN USE`. Their role descriptions are substantial — a chief data officer's
runs to ten accountabilities — but the level itself, and every skill expectation
under it, is published as not in use. The skill *names* are published; the
expectations are not.

Their forms still exist, because the projects mirror the canonical index, and
they are written like this:

- `## Introduction` and `## About this role level` say plainly, near the top,
  that the framework publishes the role but marks the level not in use, and that
  there is therefore no published standard to compare against. Say it is the
  framework's position, not an omission in the form.
- `## Job tasks` is built from the role description, which is rich enough to
  carry a dozen real questions.
- `## Job skills` keeps one block per published skill name, in the framework's
  order, so the contract still holds. Each block says **"No expectation is
  published for this skill at this level"**, keeps the 0–4 rating list — reframed
  as *rate your own practice* — and asks two questions about what the person
  actually does. It does **not** describe what good looks like, because the
  framework does not, and inventing one here would be indistinguishable from
  invention anywhere else.
- Where an organisation has its own definition of a named skill, the form says
  that is the standard to answer against, and to say so.
- The remaining sections are written from the role description alone, and the
  form is shorter for it — around 3,000 words rather than 4,500.

These are chief officer roles, so the register is the most senior in the set, the
legal section assumes the reader is often the accountable person, and the
sensitive-content warning above applies — most sharply to the chief information
security officer.

## Length

Roughly 2,500 to 6,000 words, scaling with the number of skills the level
names: about 4,500 for a level naming seven skills, about 5,500 for one naming
ten. Every skill block complete is the constraint; word count is not enforced
and is not a target to pad towards.

## Authoring

1. Read `uk-gdad-pcf-role-summaries/roles/<slug>.md`. List the duties, the
   accountabilities and the skills in the summary's order, merging any skill
   named twice.
2. Read the next level's summary in the same role directory, for the "next step"
   line in each skill block. Note if there is no next level.
3. Note where two *roles* share a skill's wording. It happens: a quality
   assurance test analyst and a test engineer are given identical wording for
   five of their six skills, and the whole published difference between the two
   jobs is the sixth. Say so in `## About this role level` — it is real career
   information — and differentiate the questions through the work the role
   actually does, not through the skill text. The analyst decides what the
   testing must prove; the engineer builds the machinery that proves it, so
   their questions are about layers, pipelines, fixtures, and refactoring.
4. Note where the framework's wording for a skill reads as more senior than the
   level — it happens, because the framework reuses skill blocks across levels.
   A junior frontend developer is told to "motivate and empower teams". Restate
   it as published, then say plainly that the wording is pitched above the job
   and invite the person to answer for what they actually do. Do not soften the
   framework's words, and do not invent an easier version.
5. Draft the twelve sections in order, numbering questions as you go.
6. Read it back at the level's register. An apprentice's form and a principal's
   form for the same role should not read the same way.
7. Walk the legal and privacy constraints, question by question.
8. Write `roles/<slug>.md`.
9. Run `bin/check` from the repository root.
10. Human review, ideally including someone who does human resources work, with
   the summary open alongside.

## Quality bar

- Every skill the summary names has a block, and every block has all five parts.
- Question numbers run from 1 with no gaps and no repeats.
- A person could fill the form in with no other page open.
- Nothing asks for information the organisation should not hold.
- No scoring, ranking or comparison language anywhere in the file.
- The form reads as written for this level, not for the level above or below.
- The advisory is present and unmodified.
- Nothing was copied from another role level's form. Measured on the questions
  in `## Job tasks` and `## Job skills`, which must be about this level's actual
  work: no two forms share more than a quarter of them. The 41 written so far
  peak at 23%, between two levels of two different roles, with a median of 2%. Where a skill is worded identically at two levels, sharing a question
  is reasonable; where a whole section reads the same, it is drift.
- A `-management` form is written for its own track throughout — not only in the
  skill the framework words differently. Its job tasks, performance and human
  resources questions ask about governing, resourcing and developing people; its
  technical twin's ask about building. Drafting a twin from its sibling produces
  a form that passes every structural check and is still the wrong document.

## Registration

This project is registered. Its `roles/` tree holds the 205 documents, and three
things wire it in:

1. **`bin/check`** — the project is in `DERIVED`, its twelve sections are in
   `REQUIRED_SECTIONS`, and `- skills gap form` is in
   `REQUIRED_TITLE_SUFFIX`. The mirroring rule in the root specification covers
   it like the other three derived projects that came before it.
2. **`uk-gdad.github.io/bin/sync`** — `roles/` is vendored to
   `content/roles-skills-gap-forms/`, and the pair is in `SITE_CONTENT` in
   `bin/check`, so a stale copy fails the check.
3. **The website** — the `gapform` resource kind in `src/lib/types.ts` and
   `src/lib/server/content.ts`, the `/skills-gap-forms/<slug>/` route, and the
   sitemap. Role pages link to the form, and the forms link back to the other
   three documents.

`bin/check` enforces one content rule beyond structure: a form's `### Skill:`
blocks must be exactly the skills its summary names, in the summary's order,
named exactly, with repeated headings merged. That rule is stated in
[Job skills](#job-skills) above, and a form that drops or misnames a skill
passes every other check, so it is worth having enforced.

What it does **not** check is whether a claim about another level is true. Every
"identical wording at X" or "a step up from X" is a claim about a different
summary, and getting one wrong produces a form that is confidently wrong about
someone's next step. Verify each against that level's summary as you write it.

One thing to know about the link rewriting. A gap-form path ends in `/roles`,
exactly as a summary path does, so `resolveLink` in `content.ts` tests for
`skills-gap` **before** it tests for a summary. Reordering those tests silently
routes every gap-form link to the summary instead.
