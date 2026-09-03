# Software developer (Senior developer) - Competency Assessment

## Introduction

This is a competency assessment for the **senior developer** level of the
**software developer** role, technical track, in the UK Government Digital
and Data (GDAD) Profession Capability Framework. It is written for the
assessor — a line manager, an interview panel member, or a reviewer —
judging whether a candidate or an existing employee meets the baseline
abilities this role level requires.

Use it for a hiring decision, a promotion board, an onboarding capability
check, or a periodic review against the framework. It measures one person
against the framework's own description of the senior developer level. It is
one input among several, never the whole of a decision — see `## Advisory`
below for why, and `## How to use this assessment` for how to keep it fair.

## Advisory

This competency assessment is created by AI and is a work in progress for
educational purposes. It is not a validated assessment instrument — it has
not been piloted, normed or checked for adverse impact — and a rating on this
form must never be the sole basis for a hiring, promotion, pay, performance or
disciplinary decision. Before using it, consult your organisation's human
resources, people development, occupational psychology or legal compliance
colleagues.

## How to use this assessment

**Preparing.** Read `## About this role level` first, so you are scoring
against what this level actually requires rather than a general idea of
"senior developer". Gather whatever evidence exists before you start scoring:
a CV or portfolio, a structured interview, a work sample or take-home task, a
code review sample, direct observation of the person's work, or references
from people who have worked with them.

**Score on evidence, not impression.** Every rating must trace to something
the person did, said, produced, or was observed doing — a system they
designed, an incident they resolved, a piece of mentoring you watched happen.
If you cannot point to evidence for a rating, record it as unknown rather than
guess from general impression, seniority elsewhere, or how confident the
person sounds.

**Score consistently.** Use the same evidence sources and the same standard
for every candidate being considered for the same role level. Where you can,
have more than one assessor score independently and compare notes afterwards
rather than scoring together — this matters most for a hiring or promotion
decision, where the cost of a shared blind spot is highest.

**Stay fair.** This is an unvalidated, AI-drafted instrument. Used
inconsistently — different evidence for different people, different
assessors applying different standards, or ratings that drift toward general
impression rather than demonstrated behaviour — it can produce unlawful
adverse impact under the Equality Act 2010, whatever the intent behind it.
Consistent, evidence-based administration by more than one assessor
materially reduces that risk. See `## Fair and lawful use` principles carried
throughout this document: score the behaviour in front of you, never a
person's background, characteristics, or how they compare to someone else
being assessed.

## Rating scale

Every skill in the competency matrix is rated on the same five-point scale:

| Value | Rating | Meaning |
| ---: | --- | --- |
| 0 | None | No demonstrated experience of this skill |
| 1 | Beginner | Just starting to learn the skill; requires close supervision |
| 2 | Intermediate | Knows the basics and can perform tasks with some guidance |
| 3 | Advanced | Has a strong grasp of the skill and can work independently |
| 4 | Expert | Demonstrates full mastery and can teach or guide others in the skill |

This is a **proficiency** scale, not a frequency scale: it measures how well
the person does the thing, on the evidence available, not how often they do
it. A senior developer who occasionally touches systems design but does it
excellently when they do rates higher than one who designs systems every
week but produces work needing heavy rework.

**Worked example — Systems integration.** A candidate rated 1 (Beginner)
might describe having wired one service to a single third-party API, following
a colleague's existing pattern step by step, with no involvement in planning
the sequence of the build. A candidate rated 3 (Advanced) can describe
defining the integration build for a multi-service change themselves —
deciding what gets built and tested in what order, coordinating the work
across two or three systems and the teams that own them, and running the
integration tests without needing another engineer to check their plan first.
A candidate rated 4 (Expert) does all of that and is also the person other
developers bring their own integration plans to for a sanity check before
they start.

## About this role level

**The role.** A software developer designs, runs and improves software that
meets user needs. In this role, a developer is responsible for writing clean,
secure code following a test-driven approach, and for creating code that is
open by default and easy for others to reuse.

**The level.** A senior developer delivers and integrates software to form a
complete service. At this level, the framework expects someone to:

- plan and lead development on sets of related stories
- have an understanding of the whole system and take responsibility for
  teaching this to others
- work with other disciplines to understand what needs to be built
- coach and mentor more junior colleagues
- operate the production services they build
- find ways to improve system robustness, resilience and stability

**Two tracks at this level.** The framework's own note here reads: "There are
2 different roles at this level - a technical role and a management role."
This document assesses the **technical track** — the senior developer who
continues to write and own software directly. A parallel document assesses
the **senior developer (management)** track, which is a different role level
with its own summary and its own competency assessment; do not use this
document to assess someone in the management track.

**Where this sits in the role's ladder.** The software developer role runs:

1. Apprentice developer
2. Junior developer
3. Developer
4. **Senior developer** — this level, technical track
5. Senior developer (management) — the parallel management track
6. Lead developer
7. Lead developer (management)
8. Principal developer
9. Principal developer (management)

A senior developer has moved past individual delivery on a single strand of
work: they now plan and lead a set of related stories, hold a working
understanding of the whole system rather than one part of it, and are
expected to pass that understanding on to others. They are not yet leading
across teams — that step belongs to lead developer.

**The skills this level names**, in the summary's order:

- Availability and capacity management
- Development process optimisation
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

Manage the components of a service so that they continue to meet business
needs and agreed key performance indicators (KPIs).

**Baseline for this role level**

Baseline: 3 — Advanced. A senior developer operates the production services
they build, so managing components against business needs and KPIs is
day-to-day, independent work at this level, not a supervised task.

**Behavioural indicators**

- 0 — None: Has never monitored a live service against a capacity or
  performance target, and cannot describe what a KPI for a service component
  would look like.
- 1 — Beginner: Can read a dashboard showing whether a service is meeting a
  target when someone else has set it up and explained what the numbers mean,
  but would not know where to start setting the target themselves.
- 2 — Intermediate: Has adjusted a known component — for example, a
  connection pool size or a cache expiry — to bring a service back within its
  target, following a runbook or a more senior colleague's direction.
- 3 — Advanced: Independently identifies which component of a service is at
  risk of breaching a business need or KPI, works out why, and makes or
  proposes the change needed, without waiting to be told there is a problem.
- 4 — Expert: Sets availability and capacity targets for a service from
  scratch based on business need, and teaches other developers how to reason
  about the trade-off between capacity, cost and resilience for their own
  services.

**Evidence to gather**

- Ask the candidate to walk through a real incident or near-miss where a
  service was at risk of breaching a capacity or availability target: what
  they noticed, what they changed, and how they confirmed it worked.
- Give a work sample: a simplified service with a described KPI and a
  dashboard snapshot, and ask them to identify the at-risk component and
  propose a fix.
- Ask a referee whether this person has been the one who first spotted a
  capacity problem before it became visible to users, or has only responded
  once flagged by someone else.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Development process optimisation

**What the framework expects at this level**

Work under guidance to identify opportunities to optimise the development
process, and contribute to implementing the solutions proposed.

**Baseline for this role level**

Baseline: 2 — Intermediate. The framework's own wording says "work under
guidance" for this skill at this level, which is a lower bar than the
independent practice expected elsewhere in this level's accountabilities —
the senior developer contributes to process change here rather than leading
it.

**Behavioural indicators**

- 0 — None: Has never suggested a change to how their team builds, tests, or
  ships software, and treats the development process as fixed.
- 1 — Beginner: Has raised a frustration with part of the process — a slow
  build, a flaky test suite — but has not proposed or helped implement a fix.
- 2 — Intermediate: Under a lead's or a more senior colleague's direction,
  has identified a specific bottleneck in the team's process — for example,
  duplicated manual testing, or a slow deployment step — and helped build the
  agreed fix.
- 3 — Advanced: Independently spots a process problem, proposes a specific
  solution to the team, and drives it through to adoption without needing
  someone more senior to set the direction first.
- 4 — Expert: Has changed development process across more than one team, and
  can describe how they measured whether the change actually helped rather
  than just feeling like an improvement.

**Evidence to gather**

- Ask for a specific example of a development process problem they noticed —
  a slow pipeline, noisy tests, a painful release step — and what happened
  next, including who decided to make the change.
- Review a pull request or ticket history, if available, for evidence of
  process-improvement work (tooling changes, CI configuration, test
  infrastructure) rather than only feature code.
- Ask a structured interview question: "Tell me about a time your team's way
  of working was slowing you down, and what you did about it."

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Information security

**What the framework expects at this level**

Design solutions and services with security controls built in from the
start, specifically engineered to mitigate identified security threats.

**Baseline for this role level**

Baseline: 3 — Advanced. Designing security controls into a solution, rather
than applying them from a checklist someone else wrote, matches this level's
independent, whole-system responsibility.

**Behavioural indicators**

- 0 — None: Cannot name a security threat relevant to the systems they have
  worked on, or describe a control that mitigates one.
- 1 — Beginner: Applies a security control when told to — for example,
  adding input validation because a reviewer flagged it — without being able
  to explain what threat it mitigates.
- 2 — Intermediate: Recognises common threats relevant to their work (such as
  injection, broken authentication, or insecure data handling) and applies
  standard mitigations, with a more senior colleague checking the design.
- 3 — Advanced: Designs a feature or service component with security controls
  built in from the outset — chosen to mitigate specific, identified threats
  to that component — without needing a security specialist to add them
  afterwards.
- 4 — Expert: Is the person others bring a design to for a security review,
  can identify threats a less experienced developer would miss, and has
  changed how their team designs for security as a matter of course.

**Evidence to gather**

- Walk through a design or architecture decision record the candidate
  authored or significantly contributed to, and ask what threats they
  considered and why they chose the controls they did.
- Give a work sample: a simple feature specification with an obvious security
  gap, and ask them to identify the threat and design a mitigation.
- Ask a referee whether this person's designs typically need security issues
  added by someone else after review, or whether the controls are already
  there.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Modern development standards

**What the framework expects at this level**

Apply modern development standards in their own work, and support other
developers in applying them too.

**Baseline for this role level**

Baseline: 3 — Advanced. The framework pairs applying the standards with
supporting others in applying them, which matches this level's explicit
coaching and mentoring accountability.

**Behavioural indicators**

- 0 — None: Does not follow, or is not aware of, the current development
  standards and practices their team expects — version control discipline,
  code review, test coverage, and similar.
- 1 — Beginner: Follows the team's standards when reminded or checked by a
  reviewer, but does not apply them consistently unprompted.
- 2 — Intermediate: Consistently applies the team's modern development
  standards in their own code without prompting, but has not yet helped a
  colleague adopt them.
- 3 — Advanced: Consistently applies modern development standards, and has
  directly helped at least one colleague — through review comments, pairing,
  or explanation — improve how they apply those standards themselves.
- 4 — Expert: Has shaped what "modern development standards" means for their
  team — proposing or updating a standard, not just following and teaching an
  existing one — and other developers treat their practice as the reference
  point.

**Evidence to gather**

- Review a sample of the candidate's code reviews of other developers' work,
  looking for comments that teach a standard rather than just enforce it.
- Ask a structured interview question: "Describe a time you helped a
  colleague improve how they write or ship code. What specifically changed?"
- Ask a referee for an example of this person raising the bar for someone
  else's practice, not just their own.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Programming and build (software engineering)

**What the framework expects at this level**

Collaborate with others where necessary to review specifications, then use
the agreed specifications to design, code, test and document programs or
scripts of medium-to-high complexity, using the right standards and tools.

**Baseline for this role level**

Baseline: 3 — Advanced. Medium-to-high complexity work delivered
independently from an agreed specification is the core, day-to-day expectation
of this level.

**Behavioural indicators**

- 0 — None: Cannot produce working, tested code from a specification without
  substantial help at every step.
- 1 — Beginner: Can implement a small, well-defined piece of a specification
  with close supervision, but needs help breaking down anything more complex.
- 2 — Intermediate: Delivers code, tests and documentation for
  low-to-medium complexity work from an agreed specification, with a more
  senior developer reviewing the approach before or during the work.
- 3 — Advanced: Independently designs, codes, tests and documents programs of
  medium-to-high complexity from an agreed specification, choosing appropriate
  standards and tools without needing the approach checked first.
- 4 — Expert: Handles the highest-complexity work in their team unsupervised,
  and is the person others ask when a specification itself is ambiguous or
  contradictory, because they can reason about the trade-offs it implies.

**Evidence to gather**

- Set a work sample or take-home task representative of medium-to-high
  complexity work in this role, and review the resulting code, tests and
  documentation together.
- Walk through a real piece of delivered work: what the specification said,
  what design decisions the candidate made that were not spelled out in it,
  and why.
- Ask a referee to describe the most complex piece of work this person has
  delivered independently, and what made it complex.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Prototyping

**What the framework expects at this level**

Approach prototyping as a team activity, actively soliciting prototypes and
testing with others. Establish design patterns and iterate them. Use a
variety of prototyping methods and choose the most appropriate one for the
situation.

**Baseline for this role level**

Baseline: 3 — Advanced. Choosing among prototyping methods and establishing
design patterns for others to iterate on requires the independent judgement
expected at this level, rather than following a pattern someone else set.

**Behavioural indicators**

- 0 — None: Has never built a prototype to test an idea before committing to
  a full implementation.
- 1 — Beginner: Has built a prototype when told exactly what to build and
  how, without involving anyone else in testing it.
- 2 — Intermediate: Builds a prototype using one familiar method, and shares
  it for feedback, but does not vary the method to suit the problem or
  actively involve the wider team in shaping it.
- 3 — Advanced: Chooses an appropriate prototyping method for the problem at
  hand from more than one they know, actively brings colleagues into
  building and testing the prototype, and establishes a design pattern from
  it that others can reuse.
- 4 — Expert: Is sought out to decide how a team should prototype a genuinely
  novel or ambiguous problem, and has established a design pattern from
  prototyping work that has been reused well beyond the original team or
  project.

**Evidence to gather**

- Ask for a specific example of a prototype the candidate built: what
  question it was answering, why they chose that method over another, and who
  else was involved.
- Ask to see, or hear described, a design pattern that came out of prototyping
  work they led, and whether it was reused elsewhere.
- Structured interview question: "Tell me about a time a prototype changed
  the direction of a piece of work. What would have happened if you had
  skipped it?"

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Service support

**What the framework expects at this level**

Identify, locate and fix service faults.

**Baseline for this role level**

Baseline: 3 — Advanced. This level operates the production services it
builds, so diagnosing and fixing faults independently is a core, expected
capability, not a supervised task.

**Behavioural indicators**

- 0 — None: Has never diagnosed or fixed a fault in a live service.
- 1 — Beginner: Can fix a fault once someone else has identified its cause,
  following clear instructions.
- 2 — Intermediate: Can locate the cause of a straightforward fault in a
  system they know well, with support available if the cause is unclear.
- 3 — Advanced: Independently identifies, locates and fixes faults across
  the services they operate, including ones whose cause is not immediately
  obvious, without needing another engineer to diagnose it for them.
- 4 — Expert: Is the person the team escalates the hardest, most obscure
  faults to, and can lead an incident response involving several other
  developers while keeping the diagnosis moving.

**Evidence to gather**

- Ask the candidate to describe the most difficult service fault they have
  diagnosed and fixed: the symptoms, how they narrowed down the cause, and
  what the actual fix was.
- If available, review an incident report or postmortem the candidate
  authored or led.
- Ask a referee whether this person is someone the team turns to when a fault
  is not obvious, or only when the cause has already been found.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Systems design

**What the framework expects at this level**

Design systems with medium levels of risk, impact, and business or technical
complexity. Select appropriate design standards, methods and tools, and
ensure they are applied effectively. Review the systems designs of others to
ensure appropriate technology choices, efficient use of resources, and the
integration of multiple systems and technologies.

**Baseline for this role level**

Baseline: 3 — Advanced. The framework explicitly gives this level review
responsibility over other people's systems designs, which only makes sense
alongside strong, independent design capability of their own.

**Behavioural indicators**

- 0 — None: Has not designed a system component beyond following an existing
  design someone else specified in detail.
- 1 — Beginner: Can design a small, low-risk system component with close
  guidance on the standards and tools to use.
- 2 — Intermediate: Designs system components of low-to-medium complexity
  independently, but has a more senior colleague check the design standards
  and tool choices before or during the work.
- 3 — Advanced: Independently designs systems of medium risk, impact and
  complexity, selects appropriate standards, methods and tools without
  needing them checked first, and reviews other developers' designs for
  sound technology choices and efficient integration.
- 4 — Expert: Designs the highest-complexity systems in their team's remit
  unsupervised, and their design reviews are the standard other senior
  developers calibrate their own reviews against.

**Evidence to gather**

- Walk through a system design the candidate produced: what alternatives they
  considered, what standards and tools they chose and why, and what risk or
  complexity it carried.
- Ask them to review a sample system design (real or constructed) and give
  feedback, then assess the quality and specificity of that feedback.
- Ask a referee for an example of a design review this person did that
  changed the outcome of someone else's work.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Systems integration

**What the framework expects at this level**

Define the integration build. Co-ordinate build activities across systems.
Understand how to undertake and support integration testing activities.

**Baseline for this role level**

Baseline: 3 — Advanced. Defining the build and coordinating it across systems
requires the whole-system understanding and cross-discipline coordination
this level is explicitly accountable for.

**Behavioural indicators**

- 0 — None: Has not been involved in integrating separate systems or
  services together.
- 1 — Beginner: Has carried out one step of an integration build that someone
  else planned, following clear instructions.
- 2 — Intermediate: Has helped define part of an integration build and
  carried out integration testing, with a more senior colleague setting the
  overall plan.
- 3 — Advanced: Independently defines the integration build for a piece of
  work, co-ordinates build activities across the systems involved, and
  understands how to run and support the integration testing needed.
- 4 — Expert: Leads integration across multiple systems and multiple teams on
  work of real complexity, and is brought in specifically because an
  integration is expected to be difficult.

**Evidence to gather**

- Ask for a specific example of an integration build the candidate defined
  themselves: which systems were involved, how they sequenced the work, and
  how they coordinated with the teams that owned each system.
- Review a design document, integration plan, or test plan the candidate
  authored, if one is available.
- Ask a referee to describe this person's role the last time two or more
  systems had to be integrated on a project they worked on together.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: User focus

**What the framework expects at this level**

Collaborate with user researchers and represent users internally. Explain the
difference between user needs and the desires of the user. Champion user
research so that it covers all users. Prioritise and define approaches to
understand the user story, guiding others in doing so. Offer recommendations
on the best tools and methods to use.

**Baseline for this role level**

Baseline: 3 — Advanced. This level guides others in understanding user
needs and champions research covering all users, which is independent,
teaching-capable practice, not simply following research findings handed to
them.

**Behavioural indicators**

- 0 — None: Builds features from a specification without reference to user
  research or user needs, and cannot describe who the users of their work
  are.
- 1 — Beginner: Can describe the users of a feature they built when someone
  else explains the research, but does not seek that understanding out
  independently.
- 2 — Intermediate: Reads and applies user research findings shared by a
  user researcher, and can explain the difference between what a user asked
  for and what they actually need, when prompted.
- 3 — Advanced: Actively collaborates with user researchers, represents
  users' needs in technical discussions unprompted, champions research
  reaching under-represented users, and guides a colleague in how to approach
  understanding a user story.
- 4 — Expert: Shapes how their whole team approaches user research and tool
  and method choice, and other developers routinely come to them for
  recommendations on how to understand a user need before building anything.

**Evidence to gather**

- Ask for a specific example of a time the candidate changed a technical
  design because of user research findings, or pushed back on a request that
  did not reflect an actual user need.
- Ask a structured interview question: "Tell me about a user need your team
  nearly missed, and how it surfaced."
- Ask a referee whether this person routinely involves user researchers in
  their own work, or works mostly from specifications handed down to them.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

## Overall determination

| Skill | Baseline target | Rating given | Met baseline? |
| --- | :---: | :---: | :---: |
| Availability and capacity management | 3 — Advanced | | |
| Development process optimisation | 2 — Intermediate | | |
| Information security | 3 — Advanced | | |
| Modern development standards | 3 — Advanced | | |
| Programming and build (software engineering) | 3 — Advanced | | |
| Prototyping | 3 — Advanced | | |
| Service support | 3 — Advanced | | |
| Systems design | 3 — Advanced | | |
| Systems integration | 3 — Advanced | | |
| User focus | 3 — Advanced | | |

The baseline for this role level is normally met when every skill above is
rated at or above its baseline target.

One or two skills rated below target is not automatically a fail. A
reasonable assessor weighs how central the skill is to this level's
accountabilities — programming and build, systems design, and systems
integration sit closer to the core of "delivers and integrates software to
form a complete service" than, say, prototyping — considers whether the gap
looks quickly coachable once the person is in post, and records that
reasoning alongside the number rather than treating the table alone as the
answer. A shortfall in service support or systems design, for example, is a
different kind of gap to a shortfall in prototyping, even though both are
one point below target.

- [ ] Meets baseline for this role level
- [ ] Does not yet meet baseline
- [ ] Meets baseline, with development areas noted below

This determination is an input to your organisation's own hiring, promotion,
or development process. It is not the decision itself, and it should not be
the only evidence that process considers.

## Assessor notes and evidence log

**Candidate or employee name:**

**Assessor name:**

**Date of assessment:**

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
calibration discussion is recommended before this determination is acted on
— a single assessor's judgement, however carefully evidenced, carries more
risk of an inconsistent or unfair outcome than two independent views brought
together.

## Conclusion

This assessment gives one structured view of whether a person meets the
baseline the framework sets for a senior developer, technical track. What
happens next belongs to your organisation's own process — a hiring decision,
a promotion board, or a development conversation — and this document is one
input into that process, not the outcome of it.

Where development areas were noted, two sibling documents for this same role
level can help build a plan:

- [Continuing professional development checklist](../../../../uk-gdad-pcf-continuing-professional-development-checklists/roles/software-development/software-developer/4-senior-developer.md)
- [Upskilling resources](../../../../uk-gdad-pcf-upskilling-resources/roles/software-development/software-developer/4-senior-developer.md)

Whatever the result recorded above, it is one input among several, and it
should be weighed alongside the rest of the evidence your organisation
gathers — never used alone. Thank you for taking the time to assess this
fairly and on the evidence: it is a hard, high-stakes job to do well, and it
matters to the person on the other side of it.
