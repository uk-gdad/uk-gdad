# Roles skills gap forms

Contract: [`uk-gdad-pcf-roles-skills-gap-forms/spec/index.md`](../uk-gdad-pcf-roles-skills-gap-forms/spec/index.md).

## What this is

A form human resources sends to an employee. They read it, fill it in, and take
it to a development conversation. It covers the skills and skill levels the
framework names for their role level, and asks about job tasks, performance
expectations, legal compliance and how the organisation treats them.

It is a **form**, not an article. Every section either explains something the
reader needs in order to answer, or asks them a numbered question.

## Shape

Title `# <Level> - skills gap form`, then twelve `##` sections in a fixed order:

`Introduction` · `Advisory` · `How to fill in this form` · `Rating scale` ·
`About this role level` · `Job tasks` · `Job skills` ·
`Job performance expectations` · `Legal compliance` ·
`Human resources best practices` · `Your development priorities` · `Next steps`

Questions are numbered `**Q1.**` upwards, in one run across the whole document,
each followed by `*Your answer:*` or a checkbox list. The number is the point:
answers travel back on their own, without the form.

Those two shapes are what the website turns into controls — a textarea, and a
radio or checkbox group — so write them exactly as the contract has them. The
website also saves a reader's answers in their own browser and exports them as
TSV or JSON, keyed by the question number, which is one more reason the
numbering has to be right. The markdown itself stays plain markdown; see the
project specification.

## The three things that make one good

**One block per skill, in the summary's order.** Each gives what the framework
expects at this level, what it looks like in practice, and what changes at the
level above — then the 0–4 rating scale and two or three questions. Quote the
published wording; do not paraphrase it into something tidier.

**Say what the framework actually says.** Where a level repeats the one below,
say so. Where it drops a skill, narrows, or sits below its own subordinate, say
that too. Readers are being assessed against this text, and knowing that four of
their eleven skills are identical at the next level up changes what they ask
for. Never smooth an anomaly into a clean progression.

**Separate capability from access.** The most useful answers on these forms are
"I could do this and nobody has ever asked me to". Where a skill needs authority,
a team or a budget the reader may not have, say so in the block, so a low rating
gets an explanation rather than a shrug.

## Register

Lower levels get short forms, plain language, glossed jargon, and an explicit
statement that 0 and 1 are normal answers. Higher levels get denser prose,
questions about influence and trade-offs, and — at the top of a role — questions
that ask the reader to argue for their own judgement, because there is no level
above to measure against.

## Legal compliance is about training, not law

Ask what briefings someone has had, using a checklist of named instruments that
genuinely bear on the role — UK GDPR and the Data Protection Act 2018, the
Equality Act 2010, the accessibility regulations, the Computer Misuse Act 1990,
and so on. Name them; never interpret them. Add a line telling the reader to
describe risk only at a level they would be comfortable saying out loud.

## Never

- Never copy a neighbouring level's questions. The validator flags forms sharing
  more than a quarter of their job tasks and job skills questions.
- Never attribute a skill to a level whose summary does not name it.
- Never state what a level above or below expects without reading that summary.
  Guessing produces a form that is confidently wrong about someone's next step.
- Never promise something the page cannot do. The website renders the answer
  prompts and tick lists as real controls, and saves the answers in the reader's
  own browser, but there is no server: nothing is submitted and nothing is sent,
  so no "submit", "upload" or "the system will". Prefer "tick" to "click" or
  "tap": the form is printed as often as it is read on screen. This is about
  instructions, not vocabulary — "a clickable prototype" is the right term of
  art in interaction design, and stays.
- Never write HTML, a fake text box, or a rule of underscores into the markdown.
  The controls come from the renderer; the source stays readable as text.

## Before committing

`bin/check` enforces the title, the twelve sections, and that the form's
`### Skill:` blocks are exactly the skills its summary names, in the summary's
order. It does not check register, question quality, overlap between levels, or
whether a claim about another level is true; those need reading.
Re-run `uk-gdad.github.io/bin/sync` after touching content.
