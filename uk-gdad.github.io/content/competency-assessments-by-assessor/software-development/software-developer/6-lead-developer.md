# Lead Developer - Competency Assessment

## Introduction

This is a competency assessment for the **lead developer** role level in the
**software developer** role, technical track. It is written for the person
doing the assessing — a line manager, a hiring panel, or a reviewer — who
needs to judge whether a candidate or an employee has the baseline abilities
this role level requires.

A lead developer leads development on one or a small number of related
project teams: guiding how the team works, deciding when software should be
written at all, providing technical leadership and mentoring, and setting
team-based standards. This assessment turns the skills the framework names
for that level into a matrix an assessor can score against observed evidence.

Use it as **one input among several** in a hiring, promotion or development
decision — never the whole of one. See `## Advisory` below for why.

## Advisory

> This competency assessment is created by AI and is a work in progress for
> educational purposes. It is not a validated assessment instrument — it has
> not been piloted, normed or checked for adverse impact — and a rating on this
> form must never be the sole basis for a hiring, promotion, pay, performance or
> disciplinary decision. Before using it, consult your organisation's human
> resources, people development, occupational psychology or legal compliance
> colleagues.

## How to use this assessment

**Preparing.** Read `## About this role level` before you score anything, so
the matrix makes sense against the role's own accountabilities. Gather
whatever evidence exists ahead of time: a CV or portfolio, notes from a
structured interview, a work sample or task, direct observation of the person
doing the job, or references.

**Score on evidence, not impression.** Every rating must trace back to
something the person did, said, produced or was observed doing. If you cannot
point to evidence for a rating, record it as unknown rather than guess — a
confident guess is worse than an honest gap.

**Be consistent.** Score every candidate for this role level the same way.
Where you can, have more than one assessor score independently before
comparing notes, especially for a hiring or promotion decision — two
independent scores that agree are far more trustworthy than one.

**Stay fair.** This is an unvalidated, AI-drafted instrument. Used
inconsistently — different questions for different people, ratings coloured by
rapport rather than evidence, one assessor working alone on a high-stakes
decision — it can produce unlawful adverse impact even without anyone
intending it. Consistent, evidence-based administration, ideally by more than
one assessor, materially reduces that risk. See
[Fair and lawful use](../../../../uk-gdad-pcf-competency-assessments-by-assessor/spec/index.md#fair-and-lawful-use) — never let a rating be
influenced by anything other than demonstrated, job-related evidence.

## Rating scale

Every skill in the competency matrix is rated on the same five-point scale:

| Value | Rating | Meaning |
| ---: | --- | --- |
| 0 | None | No demonstrated experience of this skill |
| 1 | Beginner | Just starting to learn the skill; requires close supervision |
| 2 | Intermediate | Knows the basics and can perform tasks with some guidance |
| 3 | Advanced | Has a strong grasp of the skill and can work independently |
| 4 | Expert | Demonstrates full mastery and can teach or guide others in the skill |

This is a **proficiency** scale, not a frequency scale — it rates how well the
person does the thing, on the evidence available, not how often they do it or
how confident they feel about it.

**Worked example**, using *Programming and build (software engineering)*:

- At **1 — Beginner**, a person can build a feature to a specification someone
  else wrote, but hands technical decisions about tooling or approach to a
  more senior colleague, and cannot yet say why one approach was chosen over
  another.
- At **3 — Advanced**, a person takes technical responsibility for a whole
  project through several iterations, makes sound build and tooling decisions
  without checking them with someone else first, and can explain the
  trade-offs behind those decisions unprompted.
- At **4 — Expert**, a person holds technical responsibility for a project end
  to end, sets the programming tools and techniques their team is expected to
  use, and is the person stakeholders come to for advice when a technical
  trade-off is contested.

Use evidence like this — what the person actually did, decided or was
consulted on — to place a real observation on the scale, rather than scoring
from a general sense of how senior someone seems.

## About this role level

**The role: software developer.** A software developer designs, runs and
improves software that meets user needs. In this role, a software developer is
responsible for writing clean, secure code following a test-driven approach,
and for creating code that is open by default and easy for others to reuse.

**The level: lead developer.** A lead developer leads development on one or a
small number of related project teams. At this role level, a lead developer
guides the ways in which the team works, is proficient in a wide range of
technical systems, is involved in identifying appropriate technology and
approaches and in deciding when software should be written at all,
contributes to the developer community, provides technical leadership,
coaching and mentoring to their team, and promotes knowledge sharing and the
adoption of good practice.

**Two tracks at this level.** The framework publishes two roles at lead
developer: a technical role and a management role. This document assesses the
**technical** track. The management track — *Lead developer (management)* —
is assessed by a sibling document in this project, with its own matrix.

**Where this sits in the ladder.** The software developer role runs, in
order:

1. Apprentice developer
2. Junior developer
3. Developer
4. Senior developer
5. Senior developer (management)
6. **Lead developer — this level**
7. Lead developer (management)
8. Principal developer
9. Principal developer (management)

**The skills this level names**, in the order the framework lists them:

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

A lead developer manages the service components they are responsible for so
that they continue to meet business needs and agreed key performance
indicators (KPIs).

**Baseline for this role level**

Baseline: 3 — Advanced. The framework's wording expects the components in a
lead developer's remit to be actively managed against business needs and
KPIs, which is independent ownership of availability and capacity for the
services they lead, without describing organisation-wide ownership or
teaching this to others, which would be Expert.

**Behavioural indicators**

- 0 — None: cannot say what a service's availability or capacity targets are
  or how they are monitored, and has never adjusted a system in response to
  load or downtime.
- 1 — Beginner: can read a dashboard showing uptime, latency or throughput
  when shown one, but needs help interpreting whether it is within target and
  supervision to make a change.
- 2 — Intermediate: monitors known KPIs or service-level targets for a
  component they own and raises a concern when a trend looks wrong, but needs
  a more senior colleague to size a capacity change or decide whether a
  breach needs escalating.
- 3 — Advanced: independently tracks the availability and capacity of the
  components in their remit against agreed KPIs, and plans and implements the
  change needed to keep the service within target without being asked.
- 4 — Expert: sets or renegotiates the KPIs a service is measured against,
  coaches other developers on where to find and interpret capacity data, and
  is trusted to make an availability trade-off that affects other teams'
  services.

**Evidence to gather**

- Ask the candidate to walk through a real incident or period where they used
  capacity or availability data to make or justify a technical decision — for
  example adding caching, scaling a queue, or changing a deployment pattern.
- Review a capacity dashboard, runbook or on-call document they authored or
  materially contributed to.
- Structured interview question: "Describe a service you were responsible for
  that came close to breaching a KPI target. What did you do, and how did you
  decide it was the right response?"

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Development process optimisation

**What the framework expects at this level**

A lead developer works under guidance to identify opportunities to optimise
the development process, and contributes to putting proposed solutions into
place.

**Baseline for this role level**

Baseline: 2 — Intermediate. The framework's own wording for this skill at
this level says "work under guidance" and "contribute to the implementation",
rather than lead or own the change, so the baseline stays at guided but
competent rather than fully independent, even though most of this level's
other accountabilities describe leadership.

**Behavioural indicators**

- 0 — None: has never suggested a change to how their team builds, tests,
  reviews or ships code.
- 1 — Beginner: notices friction in the day-to-day development process — a
  slow build, a painful review process — but needs prompting to raise it or
  to propose an alternative.
- 2 — Intermediate: with some steer from a more senior colleague, identifies a
  specific bottleneck in the team's development process, such as a flaky
  pipeline or an unclear branching model, and helps put an agreed fix in
  place.
- 3 — Advanced: independently spots recurring process pain across the team,
  proposes a concrete change, and drives it through to adoption without
  needing guidance on what to look for.
- 4 — Expert: is sought out by other teams to review or redesign their
  development process, and has changed practice at a scale wider than their
  own team.

**Evidence to gather**

- Ask for an example of a development-process change they helped identify and
  implement — a build pipeline, code review norms, a branching strategy — and
  who set the direction for it.
- Look for a retrospective note, RFC, or pull request description where they
  proposed a process change.
- Structured interview question: "Tell me about a time your team's way of
  working was slowing you down. What was your part in fixing it, and whose
  idea was it originally?"

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Information security

**What the framework expects at this level**

A lead developer designs solutions and services with security controls
included, specifically engineered to mitigate security threats.

**Baseline for this role level**

Baseline: 3 — Advanced. A lead developer is expected to build security in at
design time across the systems they lead, which is independent, skilled
application of security design — short of the organisation-wide advisory
role or novel threat research that would justify Expert.

**Behavioural indicators**

- 0 — None: writes code without considering how it could be misused, and has
  never included a security control in a design.
- 1 — Beginner: can name common security risks, such as injection or broken
  authentication, when asked, but needs a security specialist or senior
  colleague to point out where they apply in a specific design.
- 2 — Intermediate: applies standard security controls — input validation,
  authentication checks, least-privilege access — when told they are needed,
  and can explain what a control they have implemented protects against.
- 3 — Advanced: builds security controls into a system's design from the
  outset without being told to, and can explain the specific threat each
  control in their design mitigates.
- 4 — Expert: is consulted by other teams on how to design for a novel or
  unusual threat, and has changed a system's architecture specifically because
  of a security risk they identified before anyone else raised it.

**Evidence to gather**

- Review a design document or architecture decision record they authored that
  names a security threat and the control chosen to mitigate it.
- Ask them to walk through a system they designed and identify a point where
  they made a deliberate security trade-off.
- Structured interview question: "Describe a design you led where security
  shaped a decision. What threat were you mitigating, what did you choose
  instead, and why?"

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Modern development standards

**What the framework expects at this level**

A lead developer identifies and applies modern development standards to
support complex projects and programmes, and leads others in applying modern
development standards.

**Baseline for this role level**

Baseline: 4 — Expert. The framework's own wording for this skill at this
level explicitly names "lead others in applying" as well as applying the
standards personally — the rating scale's own definition of Expert is
demonstrating mastery and being able to teach or guide others, which is what
this skill's wording asks for directly.

**Behavioural indicators**

- 0 — None: is unaware of, or does not follow, the team's agreed development
  standards for coding conventions, testing approach, or documentation.
- 1 — Beginner: follows development standards when told which apply, but
  cannot explain why a standard exists or apply it in an unfamiliar context.
- 2 — Intermediate: applies the team's established development standards
  independently on familiar work, but needs support to judge which standard
  applies to a complex or unusual piece of work.
- 3 — Advanced: applies modern development standards correctly across complex
  projects, including where the right standard is not obvious, without
  needing to check with someone else.
- 4 — Expert: actively teaches, reviews and corrects other developers'
  application of development standards, and has introduced or updated a
  standard that the wider team or programme now follows.

**Evidence to gather**

- Review a coding standard, style guide or contribution guideline they wrote
  or substantially revised.
- Look for review comments they have left on colleagues' pull requests that
  teach a standard rather than simply flag its absence.
- Structured interview question: "Tell me about a development standard you
  introduced or changed for your team. What was wrong with what came before,
  and how did you get others to adopt it?"

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Programming and build (software engineering)

**What the framework expects at this level**

A lead developer advises on the right way to apply standards and methods to
ensure compliance, maintains technical responsibility for all the stages and
iterations of a software development project, and provides technical advice
to stakeholders while setting the team-based standards for programming tools
and techniques.

**Baseline for this role level**

Baseline: 4 — Expert. The framework's wording — "maintain technical
responsibility for all the stages", "set the team-based standards" — describes
someone stakeholders rely on for advice and whose standards others follow,
which is this scale's own definition of Expert.

**Behavioural indicators**

- 0 — None: writes code but takes no responsibility for a project's technical
  direction beyond their own individual tasks.
- 1 — Beginner: can build a feature to a given specification, but needs a
  more senior developer to make decisions about tooling, structure or
  approach.
- 2 — Intermediate: takes technical responsibility for a well-defined piece of
  work, but escalates decisions that affect the wider project or its tooling.
- 3 — Advanced: takes technical responsibility for a whole project through
  multiple iterations, making sound build and tooling decisions
  independently.
- 4 — Expert: holds technical responsibility for a project end to end, sets
  the programming tools and techniques their team is expected to use, and is
  the person stakeholders go to for advice on technical trade-offs.

**Evidence to gather**

- Review a technical decision record, architecture document or tooling
  standard they authored that their team follows.
- Ask for an example of a stakeholder conversation where their technical
  advice changed the direction of a piece of work.
- Structured interview question: "Describe a project where you held technical
  responsibility from start to finish. What tooling or technique decisions
  did you make, and how did you bring stakeholders along with a decision they
  didn't expect?"
- Work sample: give a short, realistic technical proposal to critique, and ask
  what standards they would set for a team building it.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Prototyping

**What the framework expects at this level**

A lead developer approaches prototyping as a team activity, actively
soliciting prototypes and testing with others, establishes design patterns
and iterates them, and uses a variety of prototyping methods, choosing the
most appropriate one for the situation.

**Baseline for this role level**

Baseline: 3 — Advanced. This level's wording describes running prototyping as
a team practice and choosing the right method with sound judgement, which is
independent, skilled practice; it does not describe teaching prototyping
practice to other teams, so it stops short of Expert.

**Behavioural indicators**

- 0 — None: has never built or contributed to a prototype, or treats
  prototyping as a formality rather than a way of testing an idea.
- 1 — Beginner: builds a prototype when told to, using whatever method they
  already know, without considering whether it fits the question being
  asked.
- 2 — Intermediate: chooses between a small number of familiar prototyping
  methods, such as a spike or a throwaway script, with some guidance on which
  fits the situation.
- 3 — Advanced: runs prototyping as a team activity, actively invites others
  to contribute and test ideas, chooses the prototyping method that fits the
  question at hand, and iterates a design pattern that comes out of it.
- 4 — Expert: establishes a prototyping practice that other teams adopt, and
  coaches others in choosing between prototyping methods.

**Evidence to gather**

- Review an example prototype — a spike branch, a design pattern document, a
  proof of concept — they led, and the decision it was used to inform.
- Ask about a time they chose one prototyping method over another, and what
  made that the right choice.
- Structured interview question: "Tell me about a design pattern that came
  out of a prototype you ran. How did the pattern change as you iterated it,
  and who else was involved?"

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Service support

**What the framework expects at this level**

A lead developer identifies, locates and fixes service faults.

**Baseline for this role level**

Baseline: 3 — Advanced. This skill's wording at this level is a plain,
practical accountability, not phrased around leading or teaching others, so
the baseline is set from the wording itself: a lead developer is expected to
do this independently and well.

**Behavioural indicators**

- 0 — None: cannot diagnose a service fault without being walked through it
  step by step.
- 1 — Beginner: can follow a runbook or a more senior colleague's instructions
  to fix a known, previously documented fault.
- 2 — Intermediate: diagnoses and fixes straightforward, familiar faults
  independently, but needs support with one that is unfamiliar or
  intermittent.
- 3 — Advanced: identifies, locates and fixes service faults independently,
  including ones that are unfamiliar or hard to reproduce, using logs,
  monitoring and code knowledge to narrow down the cause.
- 4 — Expert: is the person others bring the hardest, longest-standing or
  most ambiguous faults to, and has fixed a fault whose root cause several
  other people had already looked at and missed.

**Evidence to gather**

- Review an incident report or fault ticket they resolved, focusing on how
  they narrowed down the cause rather than just what the fix was.
- Structured interview question: "Walk me through the hardest service fault
  you've fixed. How did you locate it, and what made it hard?"
- Work sample: present a realistic fault scenario, such as a set of logs or a
  bug report, and ask them to talk through how they would locate the cause.

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Systems design

**What the framework expects at this level**

A lead developer designs systems characterised by medium levels of risk,
impact, and business or technical complexity, selects appropriate design
standards, methods and tools and ensures they are applied effectively, and
reviews the systems designs of others to check the selection of appropriate
technology, efficient use of resources, and integration of multiple systems
and technology.

**Baseline for this role level**

Baseline: 3 — Advanced. The framework caps the complexity this level is
expected to handle at "medium", which is what keeps the baseline at
independent, strong practice rather than Expert, even though reviewing
others' designs is part of the accountability at this level.

**Behavioural indicators**

- 0 — None: cannot produce a system design without a more senior colleague
  specifying the approach.
- 1 — Beginner: can follow a design template or pattern given to them, but
  cannot select the appropriate standard or tool for a new piece of work
  unaided.
- 2 — Intermediate: designs a system of limited scope independently, but
  needs a second opinion once risk, impact or complexity is more than
  straightforward.
- 3 — Advanced: designs systems of medium risk, impact and complexity
  independently, selects the design standards and tools that fit the problem,
  and reviews a colleague's design for appropriate technology choice,
  efficient resourcing and integration.
- 4 — Expert: is trusted to design systems at the highest levels of risk,
  impact or complexity the organisation faces, and their design reviews
  routinely change other senior colleagues' technical direction.

**Evidence to gather**

- Review a system design document or architecture decision record they
  authored, and one review comment they gave on a colleague's design.
- Ask them to describe the risk, impact and complexity of a system they
  designed, and how that shaped the standards and tools they chose.
- Structured interview question: "Tell me about a colleague's system design
  you reviewed. What did you check for, and did you change the outcome?"

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: Systems integration

**What the framework expects at this level**

A lead developer defines the integration build, co-ordinates build activities
across systems, and understands how to undertake and support integration
testing activities.

**Baseline for this role level**

Baseline: 3 — Advanced. Defining and coordinating a build across systems,
rather than simply taking part in one, is independent, project-level
responsibility, matching this level's remit of leading one or a small number
of related teams.

**Behavioural indicators**

- 0 — None: has never worked across a system boundary, or does not understand
  what an integration build involves.
- 1 — Beginner: can carry out an integration task when told exactly what to
  do and in what order.
- 2 — Intermediate: contributes to an integration build and understands how
  their part fits with others, but needs a more senior colleague to define
  the build or coordinate across systems.
- 3 — Advanced: defines the integration build for a piece of work, co-ordinates
  build activities across the systems involved, and understands how to set up
  and support integration testing.
- 4 — Expert: is brought in to define the integration approach across
  programmes with many interdependent systems, and has resolved an
  integration failure that crossed team or organisational boundaries.

**Evidence to gather**

- Review an integration plan, interface specification or build coordination
  document they authored.
- Ask for an example where they coordinated an integration build across two
  or more systems owned by different teams.
- Structured interview question: "Describe an integration build you defined.
  What systems were involved, how did you coordinate the teams responsible
  for each, and how did you support the integration testing?"

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

### Skill: User focus

**What the framework expects at this level**

A lead developer collaborates with user researchers and can represent users
internally, can explain the difference between user needs and the desires of
the user, champions user research to focus on all users, prioritises and
defines approaches to understanding the user story while guiding others in
doing so, and offers recommendations on the best tools and methods to use.

**Baseline for this role level**

Baseline: 3 — Advanced. Guiding others and championing research beyond their
own work is a leadership behaviour that goes past applying user focus to
one's own tasks, but the wording stops short of setting user-focus practice
for a whole team or programme as the organisation's standard, which is what
would justify Expert.

**Behavioural indicators**

- 0 — None: makes technical decisions without reference to user needs, or
  cannot describe who the users of the system they are building are.
- 1 — Beginner: can repeat user needs when told them, but does not
  distinguish a user's stated desire from their underlying need.
- 2 — Intermediate: works with user researchers on their own piece of work,
  and can explain the difference between a need and a desire when asked.
- 3 — Advanced: collaborates with user researchers and represents users
  internally without prompting, explains needs versus desires to others
  unasked, champions research covering all users rather than only the
  loudest or most convenient, and guides colleagues in defining their
  approach to understanding the user story.
- 4 — Expert: sets how their wider team or programme approaches user research
  and tool selection, and is the person other leads ask when a user-focus
  approach is contested.

**Evidence to gather**

- Review a user story, discovery document or research plan they shaped,
  looking for evidence of representing users' needs rather than a
  stakeholder's assumptions.
- Ask about a time they championed research into an under-represented group
  of users.
- Structured interview question: "Tell me about a time you had to explain the
  difference between what a user asked for and what they actually needed.
  How did that change the outcome, and did you help someone else make that
  distinction?"

**Rate this skill**

- [ ] 0 — None
- [ ] 1 — Beginner
- [ ] 2 — Intermediate
- [ ] 3 — Advanced
- [ ] 4 — Expert

*Assessor notes:*

## Overall determination

Complete this table once every skill above has been scored.

| Skill | Baseline target | Rating given | Met baseline? |
| --- | ---: | --- | --- |
| Availability and capacity management | 3 |  |  |
| Development process optimisation | 2 |  |  |
| Information security | 3 |  |  |
| Modern development standards | 4 |  |  |
| Programming and build (software engineering) | 4 |  |  |
| Prototyping | 3 |  |  |
| Service support | 3 |  |  |
| Systems design | 3 |  |  |
| Systems integration | 3 |  |  |
| User focus | 3 |  |  |

**Combining the ratings.** The baseline for this role level is normally met
when every skill is rated at or above its baseline target. One or two skills
below target is not automatically a fail — a reasonable assessor weighs how
central that skill is to a lead developer's accountabilities, considers
whether the gap is something the person could coach up quickly once in the
role, and records that reasoning rather than only the number. A shortfall in
*Programming and build (software engineering)* or *Modern development
standards* — the two skills whose own wording sets the baseline at Expert —
deserves closer attention than a shortfall in a skill whose baseline already
reflects guided, developing practice, such as *Development process
optimisation*.

- [ ] Meets baseline for this role level
- [ ] Does not yet meet baseline
- [ ] Meets baseline, with development areas noted below

This determination is an input to your organisation's own hiring, promotion or
development process — never the decision itself. Combine it with the other
evidence your process requires before acting on it.

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
- [ ] Other:

**Overall notes:**

**Follow-up actions:**

For any hiring or promotion decision, a second assessor or a panel
calibration session is recommended before the determination above is acted
on — an independent second score, or a short discussion comparing reasoning,
catches evidence one assessor missed or read differently.

## Conclusion

Thank you for taking the time to assess this role level carefully — a lead
developer carries real technical and team responsibility, and a fair,
evidence-based assessment matters to the person on the other side of it as
much as it does to the organisation.

The result of this assessment feeds into your organisation's own hiring,
promotion or development process; it is not a decision on its own. Where you
have noted development areas, the following documents for this exact role
level may help plan what comes next:

- [Continuing professional development checklist](../../../../uk-gdad-pcf-continuing-professional-development-checklists/roles/software-development/software-developer/6-lead-developer.md)
- [Upskilling resources](../../../../uk-gdad-pcf-upskilling-resources/roles/software-development/software-developer/6-lead-developer.md)

As a reminder, this is one input among several, drawn from an unvalidated,
AI-drafted instrument — weigh it alongside your organisation's other evidence
and its own process, and lean on your human resources, people development or
occupational psychology colleagues where the decision is a high-stakes one.
Thank you for doing this work well.
