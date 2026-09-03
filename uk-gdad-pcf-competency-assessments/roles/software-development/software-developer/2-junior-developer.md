# Junior developer - Competency Assessment

## Introduction

This assessment is for the person doing the assessing — a line manager, a
technical lead, or a panel — judging whether a candidate or an employee meets
the baseline abilities the UK GDAD Profession Capability Framework sets out
for a **junior developer** in the **software developer** role. It is built
around what the framework says this role level actually does: learning on
the job, under supervision, while delivering real components of working
software in a multidisciplinary team.

Use it when hiring into a junior developer post, when confirming someone at
this level in post, or as a structured check-in against the framework partway
through onboarding. It is one input among several into that process, never
the whole of it — see the advisory below for why.

## Advisory

This competency assessment is created by AI and is a work in progress for
educational purposes. It is not a validated assessment instrument — it has
not been piloted, normed or checked for adverse impact — and a rating on this
form must never be the sole basis for a hiring, promotion, pay, performance or
disciplinary decision. Before using it, consult your organisation's human
resources, people development, occupational psychology or legal compliance
colleagues.

## How to use this assessment

**Preparing.** Read `## About this role level` before you score anything, so
the baseline for each skill makes sense against what a junior developer is
actually accountable for. Gather whatever evidence already exists before you
start: a CV or portfolio, a structured interview, a work sample or supervised
task, direct observation of the person's day-to-day work, or a reference.

**Scoring on evidence, not impression.** Every rating you give must trace back
to something the person actually did, said, wrote or was observed doing. If
you cannot point to a piece of evidence for a rating, record it as unknown
rather than guess — a junior developer's file will often have gaps, and a gap
is a fact worth recording honestly.

**Consistency.** Score every candidate or employee for this role level the
same way, using the same evidence types where you can. Where possible, have a
second assessor score independently before you compare notes and agree a
final rating — this matters most for a hiring or promotion decision.

**Fairness.** This is an unvalidated, AI-drafted instrument. Used
inconsistently — different questions for different people, ratings adjusted
after the fact, evidence weighed differently for different candidates — it
can produce unlawful adverse impact, whether or not that is intended.
Consistent, evidence-based administration, ideally by more than one assessor,
materially reduces that risk. Every rating and every note you make must be
about demonstrated, job-related behaviour only — see
[Fair and lawful use](../../../../uk-gdad-pcf-competency-assessments/spec/index.md#fair-and-lawful-use)
for what that rules out.

## Rating scale

Every skill in the competency matrix is rated on the same five-point scale:

| Value | Rating | Meaning |
| ---: | --- | --- |
| 0 | None | No demonstrated experience of this skill |
| 1 | Beginner | Just starting to learn the skill; requires close supervision |
| 2 | Intermediate | Knows the basics and can perform tasks with some guidance |
| 3 | Advanced | Has a strong grasp of the skill and can work independently |
| 4 | Expert | Demonstrates full mastery and can teach or guide others in the skill |

This is a **proficiency** scale, not a frequency scale — it rates how well
someone does the thing, on the evidence in front of you, not how often they
do it.

**Worked example — Programming and build (software engineering).** Imagine
two junior developer candidates, both of whom have written code before.

- Candidate A can write a small, working function when told exactly what it
  needs to do, but struggles to break a slightly larger task into steps
  without help, and needs a colleague to point out where their tests are
  missing. That is **1 — Beginner**: real ability, but still needing close
  direction on how to approach the work, not just what to build.
- Candidate B, given a small well-defined task, breaks it down themselves,
  writes the code and a reasonable set of tests, and only checks in with a
  senior developer at natural points — for example, to confirm an
  assumption. That is **2 — Intermediate**: they can perform the task with
  some guidance, rather than needing to be walked through it.
- A candidate who could design, code, test and document a simple component
  with only occasional check-ins, producing documentation someone else could
  pick up unaided, would be **3 — Advanced** — beyond what this role level's
  baseline requires, but worth noting if you see it.

## About this role level

**The role: software developer.** A software developer designs, runs and
improves software that meets user needs. In this role, people are responsible
for writing clean, secure code following a test-driven approach, and for
creating code that is open by default and easy for others to reuse.

**This level: junior developer.** A junior developer learns on the job by
delivering software components. At this role level, a person is expected to:

- develop skills while working under supervision to deliver stories in a
  multidisciplinary team
- understand and be proficient in different types of testing
- be aware of, but not responsible for, security
- coach and mentor more junior colleagues

That last point matters for how you read this assessment: a junior developer
is still under supervision themselves, but the framework already expects them
to be a supportive presence for anyone even newer — for example, an
apprentice developer.

**Where this level sits in the software developer ladder**, in order:

1. Apprentice developer
2. **Junior developer** — this level
3. Developer
4. Senior developer
5. Senior developer (management)
6. Lead developer
7. Lead developer (management)
8. Principal developer
9. Principal developer (management)

**The skills this level names**, in the order the framework lists them:

- Availability and capacity management
- Information security
- Modern development standards
- Programming and build (software engineering)
- Prototyping
- Service support
- Systems design
- Systems integration
- User focus

## Competency matrix

### Skill: Availability and capacity management

**What the framework expects at this level**

Explain availability and capacity management processes.

**Baseline for this role level**

Baseline: 1 — Beginner. The framework's wording for this skill at this level
is purely explanatory — "explain ... processes" — with no expectation that a
junior developer applies, monitors or manages availability and capacity
themselves. The baseline sits at understanding what keeps a service available
and within capacity, not at doing anything about it yet.

**Behavioural indicators**

- 0 — None: Cannot describe what availability or capacity means for a
  service, or confuses the two terms.
- 1 — Beginner: Can explain, with some prompting and in their own words, what
  an availability target or a capacity limit means for a service they work
  on, but cannot yet describe how the team monitors or responds to either.
- 2 — Intermediate: Explains unprompted how their team monitors availability
  and capacity — for example, what dashboards or alerts exist — and describes
  the escalation process if a threshold is breached.
- 3 — Advanced: Notices, without being asked, when a change they are making
  could affect availability or capacity, and raises it with the team before
  it is merged.
- 4 — Expert: Sets or reviews availability and capacity targets for a
  service, and explains the trade-offs behind them to less experienced
  colleagues.

**Evidence to gather**

- Ask the candidate to walk through, for a service they have worked on, what
  happens if it runs out of capacity or goes down — what they would expect to
  see, and who they would tell.
- During a pairing session or code review, note whether they mention
  availability or capacity impact unprompted when a change touches
  infrastructure or load-bearing code.
- Ask them to describe one occasion they read a monitoring dashboard or an
  incident channel, and what they took from it.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Information security

**What the framework expects at this level**

Use information security practices and available security controls to
contribute to protecting solutions and services.

**Baseline for this role level**

Baseline: 2 — Intermediate. This wording has moved up from an apprentice's
explain-only expectation: it asks a junior developer to actively *use*
existing practices and controls, not just describe them. It has not moved as
far as it will — the level's own accountabilities are explicit that a junior
developer is "aware of but not responsible for security" — so the baseline is
consistent, everyday use of what the team already has in place, not owning
or designing security controls.

**Behavioural indicators**

- 0 — None: Does not follow, or is unaware of, the team's existing security
  practices, such as secrets handling or dependency checks.
- 1 — Beginner: Follows a security control when told to at the point of
  review, but does not apply it consistently on their own.
- 2 — Intermediate: Routinely applies the team's existing security controls
  without being reminded — never commits a secret, runs the linked
  dependency scanner, validates input on a form they build — though may need
  help understanding why a particular control matters.
- 3 — Advanced: Notices a security gap in their own or a teammate's code
  during review, and either fixes it or flags it clearly, explaining the
  risk in their own words.
- 4 — Expert: Helps design or improve a security control or practice for the
  team, and explains security trade-offs to other developers.

**Evidence to gather**

- Review a recent pull request of theirs for evidence of applied security
  practice: no secrets committed, inputs validated, dependencies checked.
- Ask a structured question: "Tell me about a time you noticed something
  that looked like a security risk in code. What did you do?"
- Observe, or ask about, their use of the team's existing security tooling —
  scanners, linting, secret managers.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Modern development standards

**What the framework expects at this level**

Explain the most important principles of modern development standards and
how they apply to your work. Apply modern development standards principles
under guidance.

**Baseline for this role level**

Baseline: 2 — Intermediate. As with information security, this skill's
wording has moved past explaining and into applying — under guidance, but
applying nonetheless. A junior developer should already be putting the
team's standards into practice with support, not only describing what they
are.

**Behavioural indicators**

- 0 — None: Code does not reflect the team's coding standards — style,
  structure, testing approach — even after being shown them.
- 1 — Beginner: Names one or two of the team's development standards when
  asked, but code needs significant correction to standard in review.
- 2 — Intermediate: Applies the team's coding standards to most of their own
  work, and asks for help correctly when unsure how a standard applies to an
  unfamiliar situation.
- 3 — Advanced: Applies standards consistently without reminders, and
  explains, when asked, why a particular standard exists.
- 4 — Expert: Proposes an improvement to the team's development standards, or
  helps another developer understand why a standard applies to their work.

**Evidence to gather**

- Compare two or three of their recent pull requests against the team's
  documented standards — style guide, test conventions, commit conventions.
- Ask them to explain, in their own words, why the team follows one of its
  standards, for example why tests are written before code, or why a
  particular naming convention is used.
- During a pairing session, note whether they ask for guidance appropriately
  when a standard does not obviously apply.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Programming and build (software engineering)

**What the framework expects at this level**

Design, code, test, correct and document simple programs or scripts under
the direction of others.

**Baseline for this role level**

Baseline: 1 — Beginner. This wording reads almost the same as an apprentice
developer's — the whole task stays "under the direction of others" — so the
baseline does not move up the scale between the two levels. What changes
between apprentice and junior shows up as growing independence within a
single small task, not as a higher scale point here.

**Behavioural indicators**

- 0 — None: Cannot produce a working simple program or script even with
  step-by-step direction.
- 1 — Beginner: Produces a small, working piece of code — a function, a
  script, a simple component — when given clear direction on what it should
  do, but needs help breaking the task down.
- 2 — Intermediate: Breaks a simple, well-defined task into steps
  themselves, writes code, tests it and corrects it, checking in with a more
  senior developer at natural points rather than needing constant direction.
- 3 — Advanced: Designs, codes, tests and documents a simple component with
  only occasional check-ins, and the documentation is clear enough for
  someone else to pick up.
- 4 — Expert: Is trusted to take on a small, simple piece of work end-to-end
  with no direction, and their code and documentation need no correction
  before merge.

**Evidence to gather**

- Set a small, well-scoped coding task — a function or a script — and
  observe how much direction is needed to complete it.
- Review the tests, code and any documentation they produced for a recent
  small task.
- Ask them to explain a bug they found and fixed in their own code, and how
  they went about correcting it.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Prototyping

**What the framework expects at this level**

Understand when to use a specific prototyping technique or method. Show the
value of prototyping to your team.

**Baseline for this role level**

Baseline: 1 — Beginner. Both bullets are about understanding and about
communicating value, not about producing a prototype unsupervised, which
fits a level still developing skills under supervision.

**Behavioural indicators**

- 0 — None: Cannot say what a prototype is for or name a way of making one.
- 1 — Beginner: Describes, with prompting, one prototyping technique — a
  paper sketch, a throwaway script, a static mock-up — and roughly when it
  might be used.
- 2 — Intermediate: Chooses an appropriate lightweight prototyping technique
  for a small task themselves, and explains to the team what it showed.
- 3 — Advanced: Actively suggests prototyping as a way to answer a question
  the team has, before code is committed to, and picks a technique that fits
  the question.
- 4 — Expert: Coaches others on when a prototype would save the team time,
  and helps them choose between techniques.

**Evidence to gather**

- Ask them to describe a time, in this role or in training, they built a
  quick throwaway version of something to check an idea, and what happened
  next.
- Present a small hypothetical — "we're not sure if this approach will work"
  — and ask how they would find out cheaply.
- Ask a teammate whether this person has suggested a quick prototype or spike
  during planning.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Service support

**What the framework expects at this level**

Help fix service faults following agreed procedures. Carry out maintenance
tasks on service support infrastructure.

**Baseline for this role level**

Baseline: 2 — Intermediate. Both bullets describe real, hands-on work —
helping fix faults and carrying out maintenance — rather than only observing
or explaining, so the baseline sits a point above the skills in this matrix
that stay at explain-only for this level, provided the person can follow an
agreed procedure with some guidance available.

**Behavioural indicators**

- 0 — None: Cannot follow a written runbook or support procedure even when
  walked through it.
- 1 — Beginner: Carries out one step of an agreed fault-fixing or
  maintenance procedure when directly supervised, but cannot complete the
  procedure alone.
- 2 — Intermediate: Follows an agreed procedure to help fix a straightforward
  service fault, or to carry out a routine maintenance task, with some
  guidance available if something unexpected happens.
- 3 — Advanced: Completes routine fault-fixing and maintenance procedures
  independently, and knows when a fault falls outside the agreed procedure
  and needs escalating.
- 4 — Expert: Helps write or improve a support procedure based on faults
  they have seen, so the next person has a clearer runbook.

**Evidence to gather**

- Ask them to walk through the last service fault or maintenance task they
  helped with, and which procedure or runbook they used.
- Observe them shadowing, or taking part in, a support rotation or an
  on-call handover.
- Review a maintenance task or fault-fix they have logged, and check whether
  it followed the agreed procedure.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Systems design

**What the framework expects at this level**

Assist as part of a team in the design of components of larger systems.

**Baseline for this role level**

Baseline: 1 — Beginner. "Assist" places this firmly as a supporting
contribution within a team design effort, not someone designing components
alone, which is consistent with a level still working under supervision.

**Behavioural indicators**

- 0 — None: Cannot contribute to a design discussion about a component, even
  when the team explains the context.
- 1 — Beginner: Contributes a small, specific idea or question when invited
  into a design discussion about a component they will help build, but does
  not yet propose design options themselves.
- 2 — Intermediate: Prepares a small design idea ahead of a discussion — a
  rough diagram, a couple of options — and presents it for the team to
  consider.
- 3 — Advanced: Takes joint responsibility for the design of a component
  with a more senior developer, and can explain the reasoning behind the
  choices made.
- 4 — Expert: Leads the design of a component of a larger system,
  incorporating input from the rest of the team.

**Evidence to gather**

- Ask them to describe a design discussion for a component they took part
  in, and what their contribution was.
- Review any design notes, diagrams or decision records they contributed to.
- Observe them in a design or architecture discussion, noting whether they
  ask relevant questions or offer ideas when invited.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Systems integration

**What the framework expects at this level**

Explain the process and principles of integrating systems. Describe
challenges of designing, building and testing interfaces between systems.

**Baseline for this role level**

Baseline: 1 — Beginner. Both bullets are explain and describe only, with no
expectation that a junior developer carries out an integration unsupervised,
so the baseline stays at understanding rather than doing.

**Behavioural indicators**

- 0 — None: Cannot describe what it means for two systems to be integrated,
  or why an interface between them matters.
- 1 — Beginner: Explains, in general terms and with prompting, what
  integrating two systems involves — for example, an API call between two
  services.
- 2 — Intermediate: Explains, unprompted, at least one challenge of building
  or testing an interface between systems they have worked with — for
  example, versioning, error handling, or data format mismatches.
- 3 — Advanced: Identifies a specific integration risk in a piece of work
  before it becomes a problem, and raises it with the team.
- 4 — Expert: Helps design an interface between two systems and explains the
  reasoning to the rest of the team.

**Evidence to gather**

- Ask them to describe, for a system they have worked on, how it talks to
  another system and what could go wrong at that boundary.
- Review any tests they have written for an interface or an integration
  point.
- Ask a structured question: "What's the difference between testing a
  function on its own and testing how two systems talk to each other?"

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: User focus

**What the framework expects at this level**

Show an awareness or understanding of user experience analysis and its
principles. Explain the purpose of user stories and the focus on user needs.

**Baseline for this role level**

Baseline: 1 — Beginner. Like Programming and build, this skill's wording
reads almost the same as an apprentice's — awareness and explanation, rather
than applying user research or writing user stories — so the baseline stays
at the same point rather than moving up between the two levels.

**Behavioural indicators**

- 0 — None: Cannot say why a piece of work exists in terms of a user need,
  even when told the user story.
- 1 — Beginner: Explains, when asked, what a user story is for and who the
  user of the software is, but does not connect this to their own day-to-day
  coding choices.
- 2 — Intermediate: Refers to the user need behind a story when discussing
  their own work, and asks a clarifying question about a user need when a
  story is unclear.
- 3 — Advanced: Notices when a technical decision might make the software
  harder to use, and raises it with the team or the person who wrote the
  story.
- 4 — Expert: Contributes to shaping a user story or a piece of user
  research, and helps other developers connect their code to the user need
  behind it.

**Evidence to gather**

- Ask them to pick a recent story they worked on and explain, in their own
  words, the user need behind it.
- During a stand-up or a planning session, note whether they refer to user
  needs when discussing their work.
- Ask a structured question: "Tell me about a time a technical choice you
  made affected how easy the software was for someone to use."

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

## Overall determination

| Skill | Baseline target | Rating given | Met baseline? |
| --- | --- | --- | --- |
| Availability and capacity management | 1 — Beginner | | |
| Information security | 2 — Intermediate | | |
| Modern development standards | 2 — Intermediate | | |
| Programming and build (software engineering) | 1 — Beginner | | |
| Prototyping | 1 — Beginner | | |
| Service support | 2 — Intermediate | | |
| Systems design | 1 — Beginner | | |
| Systems integration | 1 — Beginner | | |
| User focus | 1 — Beginner | | |

The baseline for this role level is normally met when every skill is rated at
or above its baseline target above.

One or two skills falling short of target is not automatically a fail. Weigh
how central the skill is to a junior developer's core accountabilities — for
example, Programming and build sits at the heart of the role, while a gap in
Prototyping may be less immediately limiting. Consider whether the shortfall
looks quickly coachable once the person is in post and receiving normal
supervision, which is, after all, what this level is built around. Record
your reasoning alongside the numbers, not just the numbers themselves, so
whoever reads this form later understands the judgement that was made and
why.

- [ ] Meets baseline for this role level
- [ ] Does not yet meet baseline
- [ ] Meets baseline, with development areas noted below

This determination is an input to your organisation's own recruitment,
onboarding or performance process. It is not, on its own, the decision.

## Assessor notes and evidence log

**Candidate or employee name:**

**Assessor name:**

**Date:**

**Evidence sources used** (tick all that apply):

- [ ] CV or portfolio
- [ ] Structured interview
- [ ] Work sample or task
- [ ] References
- [ ] Direct observation
- [ ] Other (describe below)

**Overall notes:**

**Follow-up actions:**

For any hiring or promotion decision, a second assessor or a panel
calibration session is recommended before this determination is acted on.

## Conclusion

This assessment measures one thing: whether the evidence gathered shows this
person meets the framework's baseline for a junior developer, skill by skill.
It is not a verdict on the person as a whole, and it should sit alongside
whatever else your organisation's recruitment or performance process
normally uses.

Where you have noted development areas, two sibling documents for this exact
role level take the conversation further:

- [Continuing professional development checklist](../../../../uk-gdad-pcf-continuing-professional-development-checklists/roles/software-development/software-developer/2-junior-developer.md)
- [Upskilling resources](../../../../uk-gdad-pcf-upskilling-resources/roles/software-development/software-developer/2-junior-developer.md)

As the advisory above says, this is one input among several, drafted by AI
and not validated — treat it as a starting point for a conversation, not the
last word. Thank you for taking the time to assess someone carefully. Getting
this right, for a colleague early in a software development career, is work
worth doing well.
