# Lead DevOps Engineer - Psychometric Assessment Resources

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for lead DevOps engineer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a lead DevOps engineer, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — product roadmaps, platform adoption dashboards, standards documents, integration procedures, capacity and cost reports, deprecation notices, and messages from delivery managers with competing demands — and decisions genuinely made by someone who leads one or a small number of related project teams, acts as a technical product owner, and contributes to strategic direction.

At this level, influence is exercised largely through others: developing medium to long term strategies for product lines, providing technical leadership through coaching and mentoring, leading the sharing of knowledge and good practice, and establishing standards and procedures that other practitioners must follow across a service product life cycle. Cognitive ability now means reasoning about dependencies that span teams; numerical reasoning means reading adoption trends and costs across a portfolio; verbal reasoning means parsing policy and strategy documents precisely and writing announcements a dozen teams will act on; situational judgement means navigating competing stakeholders, resistant teams and struggling individuals.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for reasoning quality, not only the final choice — several items deliberately test whether a candidate can distinguish what a set of rules *forces* from what it merely *allows*, and whether they walk an artefact's full lifecycle through a proposed standard rather than spot-checking it. Situational judgement items at this level often turn on whether a response fixes both the immediate instance and the underlying system, and whether it protects a colleague's dignity while still holding the substance of an issue; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles — cross-team roadmaps, standards adoption matrices, deprecation schedules, integration procedures, support policies, and platform telemetry — that ask a candidate to reason quickly and accurately about them.

Typical format: an online, timed test lasting 15 to 30 minutes, with questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

For a lead DevOps engineer, cognitive ability is particularly relevant because the role multiplies the consequences of structured thinking: a flawed dependency analysis as technical product owner delays several teams, and an inconsistency missed when establishing standards is inherited by every practitioner who follows them.

### How this assessment maps to the role

- **Pattern recognition** maps to **Service support** and **Availability and capacity management**: spotting when a KPI trend across several services is one shared cause rather than several local ones.
- **Logical deduction** maps to **Systems design** and **Systems integration**: reasoning validly from rules — promotion policies, support tiers, deprecation clauses — to their consequences for real teams.
- **Error checking** maps to **Modern development standards** and **Programming and build (software engineering)**: finding the inconsistency in a standards matrix, a procedure, or a submitted design before a dozen teams inherit it.
- **Prioritisation** maps to the duty to act as a technical product owner: backlog ordering ripples across every team that depends on the product line.
- **Applied problem solving** maps to **Development process optimisation** and the technical leadership duty: decomposing cross-cutting problems and choosing interventions that work through other people.

### Practice questions

**Question 1 (easy) — Pattern recognition in release versioning**

Versioning is semantic: `MAJOR.MINOR.PATCH`, where breaking changes increment MAJOR and reset the others, new features increment MINOR and reset PATCH, and fixes increment PATCH. Release history: (1) 2.3.1 — bug fix (previous 2.3.0); (2) 2.4.0 — new feature (previous 2.3.1); (3) 3.0.0 — breaking change (previous 2.4.0); (4) 3.1.1 — new feature (previous 3.0.0); (5) 3.1.2 — bug fix (previous 3.1.1). Ask which release breaks the standard.

- A) Release 2
- B) Release 3
- C) Release 4
- D) Release 5

**Correct answer: C**

**Explanation:** A new feature after 3.0.0 should give 3.1.0 (MINOR incremented, PATCH reset), but release 4 gives 3.1.1, incrementing PATCH without cause. This tests a consistency check of the kind performed when leading others in applying modern development standards: a version number is a contract with every consumer, and drift breaks downstream automation that pins ranges against a version that never existed.

**Question 2 (easy) — Logical deduction from a support policy**

Policy: "Services on the standard pipeline receive full platform support. Services on custom pipelines receive best-effort support only, unless a support agreement has been signed with the platform team." A delivery manager says: "Our service receives full platform support and is not on the standard pipeline." Ask which conclusion must be true.

- A) The service has a signed support agreement.
- B) The policy has been misapplied to this service.
- C) Either the service has a signed support agreement, or the policy has been misapplied.
- D) The service should migrate to the standard pipeline.

**Correct answer: C**

**Explanation:** The policy permits full support for a non-standard service only through a signed agreement, and the facts given do not establish whether one exists — neither A nor B is guaranteed alone, and D is advice rather than a deduction. Only the disjunction in C must hold. This tests concluding only what the information guarantees, before correcting a delivery manager's stated support status.

**Question 3 (easy) — Sequencing epics across teams**

Roadmap rules: Identity migration before Single sign-on; Single sign-on before both Session management and Audit logging; Audit logging before Compliance reporting. Each epic takes one quarter, one at a time. Ask which epic is delivered third.

- A) Single sign-on
- B) Session management
- C) Audit logging
- D) Either Session management or Audit logging, depending on ordering choice

**Correct answer: D**

**Explanation:** The chain forces Identity migration first and Single sign-on second; after that, Session management and Audit logging are both unlocked with nothing ordering them against each other, so either may legitimately occupy the third slot. This tests distinguishing what a rule set *forces* from what it merely *allows* — the forced orderings are the critical path, and the free choices are where product judgement is applied.

**Question 4 (moderate) — Error checking a standards adoption matrix**

Standards: (i) every repository must have branch protection enabled; (ii) repositories handling personal data must also have secret scanning enabled; (iii) archived repositories are exempt from all requirements. Extract: case-api (active, personal data, branch protection enabled, secret scanning enabled); notify-worker (active, no personal data, branch protection enabled, secret scanning disabled); legacy-import (archived, personal data, both disabled); report-ui (active, personal data, branch protection enabled, secret scanning disabled). Ask how many repositories are non-compliant.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** case-api is compliant; notify-worker has no personal data so only rule (i) applies, and it is met; legacy-import is archived so exempt under rule (iii); report-ui has personal data so both rules apply, and secret scanning is disabled — non-compliant. Exactly one. This tests scoping each rule correctly before checking compliance — flagging notify-worker or legacy-import would be false positives that erode a standard's credibility.

**Question 5 (moderate) — Prioritisation as technical product owner**

Four items compete for attention: (1) a critical vulnerability announced in a component bundled into every team's pipeline, with a patch available; (2) a director has asked for a demonstration of new platform features at Thursday's show-and-tell; (3) a project team is blocked today because their tech lead is off sick and two engineers need direction on this sprint's integration work; (4) a draft product strategy for next financial year is due to the head of profession in two weeks. Ask which sequencing is most defensible.

- A) 1, 3, 2, 4 — remove the security exposure, unblock the team, then prepare the demo, then the strategy
- B) 2, 1, 3, 4 — the director outranks other demands
- C) 3, 1, 2, 4 — people first, always
- D) 1, 2, 4, 3 — external commitments before internal ones

**Correct answer: A**

**Explanation:** Item 1 is a critical vulnerability multiplied across every team on the platform and comes first; item 3 is next, since a whole team loses productivity today and direction-setting takes an hour; item 2 is important but three days away; item 4 has a two-week horizon needing protected deep-work time. This tests ranking by blast radius and time-criticality together, rather than by seniority (B), a fixed rule of thumb (C), or an internal/external distinction (D).

**Question 6 (moderate) — Logical deduction from a deprecation policy**

Policy: (i) a feature must be marked deprecated for at least two full release cycles before removal; (ii) removal may only occur in a MAJOR release; (iii) consuming teams must be notified at marking. Releases: 4.2 (1 June), 4.3 (1 September), 5.0 (1 December), each a quarterly cycle. A feature is marked deprecated, with notification, on 15 May. Ask for the earliest release in which it can be removed.

- A) 4.3 on 1 September
- B) 5.0 on 1 December
- C) The MAJOR release after 5.0
- D) 4.2 on 1 June

**Correct answer: C**

**Explanation:** Marking on 15 May occurs before the 4.2 cycle completes, so 4.2's cycle is only partial. Two full cycles then run June–September and September–December, completing only at the moment 5.0 ships — so the feature has not yet been deprecated *for* two full cycles *before* a removal in 5.0 itself; the earliest release satisfying "at least two full cycles before removal" that is also a MAJOR release (rule ii) is the MAJOR release after 5.0. This tests testing a stacked rule (minimum duration, release-type restriction) against its boundary case pessimistically before publishing a schedule that other teams will plan migrations against.

**Question 7 (moderate) — Pattern recognition across team metrics**

Four teams' delivery metrics this month: Team A — deployment frequency down 40%, lead time up 60%; Team B — down 35%, up 55%; Team C — down 45%, up 70%; Team D — unchanged. Teams A, B and C deploy through the shared platform pipeline; Team D uses a separately approved custom pipeline. Ask for the most reasonable first interpretation.

- A) Teams A, B and C have simultaneously developed delivery problems and need coaching.
- B) The pattern points to a shared cause in the platform pipeline; investigate what changed in the platform during the month.
- C) Team D's custom pipeline should be rolled out to all teams.
- D) The metrics are probably wrong and should be recollected.

**Correct answer: B**

**Explanation:** Three teams sharing the same pipeline degrade together by similar magnitudes while the one team on a different pipeline is unaffected — the pattern isolates the shared dependency. This tests following the evidence to its cheapest decisive test (what changed in the platform) rather than an improbable-coincidence explanation (A), a premature architecture decision from one data point (C), or unwarranted scepticism about coherent data (D).

**Question 8 (hard) — Multi-constraint migration scheduling**

Migrating three teams — Alpha, Beta, Gamma — to a new artefact registry across six working weeks, one team per week at most. Constraints: (i) Alpha before Gamma, since Gamma consumes Alpha's published libraries; (ii) Beta is in a change freeze weeks 1, 2 and 5, so is available only in weeks 3 or 4; (iii) after each migration, the immediately following week must be kept migration-free to monitor stability before the next team migrates; (iv) the old registry decommissions at the end of week 6, and every migration must be followed by a completed monitoring week before then, so no team may migrate in week 6. Ask in which week Beta must migrate.

- A) Week 2
- B) Week 3
- C) Week 4
- D) Week 5

**Correct answer: B**

**Explanation:** Migrations are confined to weeks 1–5 (rule iv) and must sit at least two weeks apart (rule iii); the only three weeks in that range spaced accordingly are 1, 3 and 5. Beta is available only in week 3 or 4, and week 4 is not in that feasible set, so Beta must take week 3 — leaving Alpha in week 1 and Gamma in week 5, consistent with rule (i). This tests finding the unique feasible slot set first, then intersecting it with each team's own constraint, rather than trying to fit a team's availability without first establishing which weeks are structurally possible at all.

**Question 9 (hard) — Contrapositive reasoning on escalation rules**

Escalation procedure: (i) a platform incident affecting more than one delivery team must be classified as major; (ii) every major incident triggers a stakeholder notification within 30 minutes; (iii) every stakeholder notification is logged automatically. This morning's audit shows no logged notification for yesterday's platform incident, and the notification service was functioning. Ask which conclusion must be true.

- A) Yesterday's incident affected no delivery teams.
- B) Yesterday's incident affected at most one delivery team, or the procedure was breached.
- C) Yesterday's incident was misclassified.
- D) The procedure was followed correctly.

**Correct answer: B**

**Explanation:** No logged notification, with logging automatic and functioning, means no notification occurred (rule iii); no notification means either the incident was not classified major, or rule (ii) was breached; not classified major means either the incident affected at most one team, or rule (i) was breached. Collapsing the branches gives exactly the disjunction in B. This tests reasoning through a chain of contrapositives without asserting more than the chain guarantees — an empty log is proof of a disjunction, not of any single branch.

**Question 10 (hard) — Error checking a proposed branching standard**

A proposed standard: work happens on short-lived feature branches off `main`; feature branches merge to `main` via pull request with one approving review; releases are cut from `main` by tagging; hotfixes branch from the release tag, merge back to the release tag, and are deployed from there; `main` must always be deployable. Ask for the most serious flaw.

- A) One approving review is too few for a cross-team standard.
- B) The hotfix rule never merges fixes back to `main`, so every hotfix will be silently lost at the next release.
- C) Short-lived feature branches are incompatible with large features.
- D) The rule that `main` must always be deployable is aspirational and cannot be enforced.

**Correct answer: B**

**Explanation:** Tracing the hotfix lifecycle: it branches from the release tag and merges back to the release tag, but nothing ever carries the fix to `main`, which is what the next release is cut from — the defect the hotfix repaired ships again at the next release. Options A and C are judgement calls, not defects; D is answerable through the merge gates the standard already implies. This tests walking each artefact's full lifecycle (a feature, a release, a hotfix) through the rules to find a path that never rejoins the trunk — the kind of flaw a dozen teams inherit silently.

**Question 11 (hard) — Applied problem solving on platform adoption**

Adoption of a standard pipeline has stalled at 60% of services for three months, against a target of 90% by year end. Facts: (a) the last five teams to migrate each took under a week and report satisfaction; (b) the remaining teams are disproportionately those with older, stateful services; (c) the migration guide assumes stateless services; (d) two delivery managers say their teams "have no capacity this quarter"; (e) show-and-tell demos are well attended. Ask for the most effective next intervention.

- A) Announce a hard deadline after which unmigrated services lose platform support.
- B) Extend the migration tooling and guide to cover stateful services, and offer hands-on migration support to the first stateful team as a pathfinder, using the results to build a realistic effort estimate for the rest.
- C) Run more show-and-tell demos to increase enthusiasm.
- D) Escalate the two delivery managers' capacity refusals to their programme director.

**Correct answer: B**

**Explanation:** Recent migrations were easy and satisfying (a), and attendance is healthy (e), so enthusiasm is not the constraint, ruling out C. The unmigrated population is systematically different (b) and the guide does not cover their case (c), so "no capacity" (d) reads as a rational response to an unscoped, risky task rather than obstruction, deflating D as a first move. This tests diagnosing before intervening and removing the actual obstacle, rather than applying pressure (A) that would force teams into an unsupported path.

**Question 12 (hard) — Deduction about shared runner capacity**

CI rules: (i) each team's pipelines run on the shared runner pool unless the team has dedicated runners; (ii) jobs on the shared pool queue when all shared runners are busy; (iii) dedicated runners never accept other teams' jobs. During an incident, Team X (which has dedicated runners) reports queued jobs, and the shared pool shows idle runners. Ask which statement must be true.

- A) Team X's dedicated runners are at capacity or unavailable.
- B) The shared pool is misconfigured.
- C) Team X's jobs should have overflowed to the idle shared runners.
- D) Rule (i) has been breached.

**Correct answer: A**

**Explanation:** Team X has dedicated runners, so by rule (i) its jobs never touch the shared pool at all — the idle shared runners are irrelevant to X's queue, and nothing in the rules describes an overflow mechanism, ruling out B and C. Rule (i) is not breached by X's jobs queuing on the pool they do use. This tests deducing from the actual routing rules rather than pattern-matching "queued jobs plus idle runners" onto misconfiguration.

### Administration tips

- Score for whether the candidate distinguishes what a rule set forces from what it merely allows, especially in scheduling and sequencing items.
- Note whether the candidate scopes each rule to the population it actually governs before checking compliance.
- Watch for whether the candidate walks an artefact's full lifecycle through a proposed standard, rather than spot-checking individual rules.
- Score for whether the candidate ranks competing demands by blast radius and time-criticality together, rather than by a fixed heuristic.
- Note whether a chain of contrapositive reasoning is followed to the disjunction it actually guarantees, without asserting a single branch as certain.

### Common pitfalls to watch for when scoring

- Crediting an answer drawn from the candidate's own organisation's conventions rather than the rules stated in the scenario.
- Missing when a candidate treats seniority as a proxy for urgency in a prioritisation item.
- Rewarding over-flagging in error-checking items where a rule's scope does not actually cover the flagged resource.
- Accepting a schedule answer that satisfies some but not all stated constraints, or that stops at the first feasible-looking slot.
- Missing when a candidate polishes a cosmetic flaw while missing the flaw with the larger, silent multiplier.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately a candidate interprets, manipulates and draws sound conclusions from numerical information of the kind this role actually produces. Calculators are usually permitted; the skill measured is choosing the right calculation, executing it accurately, and interpreting the result in context.

Typical format: an online, timed test of 20 to 40 minutes with 15 to 25 questions, each presenting data — a table, a chart, a short scenario with figures.

For a lead DevOps engineer, numbers operate at portfolio altitude: adoption percentages and migration rates justify roadmap decisions, delivery metrics across teams must be weighted correctly, and growth trends convert into capacity and headcount asks that finance will interrogate.

### How this assessment maps to the role

- **Percentages and adoption metrics** map to the duty to act as a technical product owner: product health for an internal platform is measured in adoption rates and migration completion.
- **Weighted averages and portfolio statistics** map to **Availability and capacity management** and leadership of multiple teams: KPIs aggregated across services or teams must be weighted by volume.
- **Rates, trends and compound growth** map to **Development process optimisation** and strategy development: projecting usage, cost and demand forward correctly.
- **Cost modelling and breakeven analysis** map to **Systems design**'s requirement for efficient use of resources: choosing between hosting models is rate-times-volume arithmetic with a breakeven point.
- **Reading tables accurately** maps to **Modern development standards** and **Service support** reporting.
- **Ratio and scaling calculations** map to **Systems integration** resource management: support ratios and coverage models.

### Practice questions

**Question 1 (easy) — Adoption percentage**

A product strategy targets migration of all 24 departmental services onto the standard pipeline; 18 have migrated. Ask for the percentage adoption reached.

- A) 66%
- B) 70%
- C) 75%
- D) 80%

**Correct answer: C**

**Explanation:** 18 ÷ 24 = 75%. This tests basic adoption arithmetic — the figure that opens a show-and-tell and anchors a strategy paper, and that later defines the denominator for the harder question of which services remain.

**Question 2 (easy) — Annual licence cost**

A monitoring product is licensed at £22 per user per month for 45 licensed users. Ask for the annual licence cost.

- A) £990
- B) £9,900
- C) £11,880
- D) £12,540

**Correct answer: C**

**Explanation:** Monthly £990; annual £990 × 12 = £11,880. Option A is the monthly figure presented as annual, a common slip in quick licence discussions. This tests carrying a period alongside a figure — the difference between a card payment and a procurement exercise.

**Question 3 (easy) — Percentage decrease in incidents**

Platform-related incidents fell from 24 last quarter to 18 this quarter, following a new deployment checklist. Ask for the percentage decrease.

- A) 20%
- B) 25%
- C) 30%
- D) 33%

**Correct answer: B**

**Explanation:** Decrease 6 ÷ original 24 = 25%. The trap is dividing by the new value (6÷18≈33%, option D). This tests anchoring on the original value — a leader whose reported figure is re-quoted upward risks their credibility on getting this right.

**Question 4 (moderate) — Weighted average lead time across teams**

Team A made 30 changes averaging 12 hours; Team B 20 changes averaging 24 hours; Team C 50 changes averaging 6 hours. Ask for the average lead time per change across the product line.

- A) 11.4 hours
- B) 14.0 hours
- C) 12.0 hours
- D) 10.5 hours

**Correct answer: A**

**Explanation:** (30×12 + 20×24 + 50×6) ÷ 100 = 1,140 ÷ 100 = 11.4 hours. Option B is the unweighted mean of 12, 24 and 6, overstating the influence of the least-frequent team. This tests weighting by volume when aggregating any per-team metric into a portfolio report.

**Question 5 (moderate) — Required migration rate**

A migration covers 40 services; 6 migrated in the first 3 sprints, with 12 sprints remaining before the deadline. Ask for the migration rate per sprint now required to finish on time.

- A) 2 services per sprint
- B) 2.5 services per sprint
- C) 3 services per sprint (rounding up the required 2.83)
- D) 4 services per sprint

**Correct answer: C**

**Explanation:** Remaining 34 ÷ 12 sprints = 2.83, rounded up to 3. The historical rate is 2 per sprint (option A) — comparing the two shows the required rate is 1.5 times the demonstrated rate, meaning the plan needs a change, not just encouragement. This tests distinguishing run-rate from required-rate, and rounding a whole-unit requirement up.

**Question 6 (moderate) — Compound growth in CI usage**

CI usage is 120,000 build-minutes this month, growing at 15% per month. Ask for consumption in two months.

- A) 156,000 build-minutes
- B) 158,700 build-minutes
- C) 152,000 build-minutes
- D) 165,600 build-minutes

**Correct answer: B**

**Explanation:** 120,000 × 1.15 × 1.15 = 158,700. Option A adds 15% of the original twice (simple, not compound growth). This tests compounding correctly — over a year, 15% monthly growth is a factor of roughly 5.35, not 2.8, which changes a quota tweak into a re-architecture.

**Question 7 (moderate) — Breakeven between hosting models**

Self-hosted CI runners: £3,200/month fixed plus £0.008 per build-minute. SaaS: £0.03 per build-minute, no fixed cost. Ask for the monthly build-minute volume at which the two cost the same.

- A) About 106,700 build-minutes
- B) About 145,500 build-minutes
- C) About 160,000 build-minutes
- D) About 400,000 build-minutes

**Correct answer: B**

**Explanation:** 3,200 + 0.008m = 0.03m → m ≈ 145,500. Below that volume SaaS is cheaper; above it, self-hosting wins. This tests setting up and solving a breakeven equation rather than dividing by one rate while ignoring the other cost component — the workhorse of a build-versus-buy case.

**Question 8 (moderate) — Reading improvement from a table**

Change failure rates: Team A 12.0% → 9.0%; Team B 5.0% → 3.5%; Team C 10.0% → 7.5%; Team D 6.0% → 5.0%. Ask which team achieved the largest relative improvement.

- A) Team A
- B) Team B
- C) Team C
- D) Team D

**Correct answer: B**

**Explanation:** Relative improvement (old−new)÷old: A 25%, B 30%, C 25%, D 16.7%. B's 30% is largest, despite A's 3.0-point drop being the largest absolute change. This tests the difference between percentage-point change and relative change — a recognition scheme that only rewards absolute drops systematically discourages a team starting from a low base.

**Question 9 (hard) — Scaling the support model**

A platform team of 6 engineers supports 9 delivery teams at the agreed maximum ratio of 1.5 delivery teams per engineer. The supported population grows to 15 teams by year end. Ask for the additional engineers needed, keeping the same ratio.

- A) 2
- B) 3
- C) 4
- D) 6

**Correct answer: C**

**Explanation:** 15 ÷ 1.5 = 10 required; 10 − 6 = 4 additional. This can also be checked directly: the 6 additional teams at 1.5 per engineer need 6 ÷ 1.5 = 4 more engineers, confirming the same answer by a second route. This tests computing a workforce ask two independent ways before it goes into a hiring case.

**Question 10 (hard) — Request-weighted availability**

Service P: 60 million requests, 99.9% availability; Service Q: 30 million, 99.5%; Service R: 10 million, 98.0%. Ask for the request-weighted availability across the platform.

- A) 99.13%
- B) 99.59%
- C) 99.47%
- D) 99.80%

**Correct answer: B**

**Explanation:** (0.999×60 + 0.995×30 + 0.980×10) ÷ 100 = 99.59%. Option A is the unweighted mean of the three figures, treating the smallest service as equal in weight to the largest. This tests answering "what fraction of requests succeeded?" rather than "what does a typical service achieve?" — a different question with its own uses, but not the one that should headline an availability report.

**Question 11 (hard) — Reversing a percentage increase**

This year's platform hosting cost is £268,800, a 12% increase on last year. Ask for last year's cost.

- A) £236,544
- B) £240,000
- C) £241,920
- D) £256,800

**Correct answer: B**

**Explanation:** L × 1.12 = 268,800 → L = 240,000. Option A wrongly subtracts 12% of the new figure (268,800 × 0.88), which does not reverse a percentage increase. This tests dividing by (1 + rate) rather than multiplying by (1 − rate) — asymmetry that catches budget baselines constantly.

**Question 12 (hard) — Quantifying an optimisation's benefit**

A process optimisation saves each of 120 developers an estimated 20 minutes per working day, across 220 working days a year. Ask for the annual developer-hours saved.

- A) 880 hours
- B) 5,280 hours
- C) 8,800 hours
- D) 10,560 hours

**Correct answer: C**

**Explanation:** 120 × 20 = 2,400 minutes/day; × 220 = 528,000 minutes/year; ÷ 60 = 8,800 hours. Option B divides by 100 instead of 60. This tests unit conversion carried through fully — the figure that turns "it will save time" into a fundable business case, roughly 5.5 full-time-equivalent developer-years.

### Administration tips

- Score for whether the candidate weights averages by volume when aggregating across teams or services of unequal size.
- Note whether the candidate distinguishes relative (percentage) change from percentage-point change when both are plausible readings.
- Watch for whether successive percentage changes are compounded rather than added.
- Score for whether a percentage increase is reversed by dividing by (1 + rate), not by subtracting the percentage from the new figure.
- Note whether units and time periods are carried through a multi-step calculation consistently.

### Common pitfalls to watch for when scoring

- Crediting an unweighted average of averages across teams or services of unequal size.
- Missing confusion between percentage-point change and relative (percentage) change.
- Rewarding an added, rather than compounded, sequence of percentage changes.
- Accepting a reversed percentage calculated by subtraction rather than division.
- Missing a unit-conversion slip (minutes read as hours, or divided by the wrong factor) in a multi-step calculation.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate extracts meaning from written material of the kind this role runs on: strategy papers, policies, supplier agreements, governance minutes, incident reviews, and stakeholder correspondence. The dominant format presents a passage followed by statements to classify True, False, or Cannot say. Other formats test inference, main-point identification, and judging which rewrite communicates most clearly.

Typical format: an online, timed test of 15 to 25 minutes with 20 to 30 statements across several passages. The candidate must answer from the passage alone.

For a lead DevOps engineer, verbal precision is a leadership instrument: reading supplier agreements to know exactly what an SLA promises, briefing a dozen practitioners on what a policy requires, and writing deprecation notices and roadmap announcements that teams plan quarters around.

### How this assessment maps to the role

- **Precise comprehension of rules and agreements** maps to **Modern development standards** and **Systems integration**: reading obligations exactly — "must" versus "should", "all environments" versus "production".
- **True/False/Cannot say discipline** maps to **Service support** and **Availability and capacity management**: keeping what a post-incident review established distinct from what it assumed.
- **Inference** maps to **User focus** and the product-owner duty: discerning the need beneath a stakeholder's request without inventing facts.
- **Clear-writing judgement** maps to the duties to lead the sharing of knowledge and good practice and to develop medium to long term strategies.
- **Comprehension of security and contractual text** maps to **Information security**: reading supplier security commitments precisely enough to know which threats remain the candidate's own.

### Practice questions

**Passage 1 (for Questions 1–3).** "By the end of the financial year, all new services must be built on the shared platform. Existing services should migrate when they next undergo significant change, and in any case within three years. Teams may request an exception from the Engineering Standards Board where a service has fewer than two years of expected life remaining; excepted services must maintain their own support arrangements at the owning team's cost. The shared platform team will publish a migration guide and offer onboarding support to the first ten migrating services."

**Question 1 (easy) — True/False/Cannot say**

Statement: "A new service started next quarter must be built on the shared platform."

- A) True
- B) False
- C) Cannot say
- D) True only if the service has more than two years of expected life

**Correct answer: A**

**Explanation:** "All new services must be built on the shared platform" admits no discretion, and next quarter falls within scope. Option D imports the exception clause, but that clause is attached to the migration obligation for *existing* services, not the new-build obligation. This tests scoping an exception to the specific obligation it modifies.

**Question 2 (easy) — True/False/Cannot say**

Statement: "An existing service not undergoing significant change is free to remain off the shared platform indefinitely."

- A) True
- B) False
- C) Cannot say
- D) True, because migration is only triggered by significant change

**Correct answer: B**

**Explanation:** The migration clause has two triggers: at next significant change, "and in any case within three years" — a backstop that applies regardless of change activity. This tests catching an "in any case no later than" backstop rather than reading only the first trigger, which is how teams arrive at a compliance deadline in good faith and out of time.

**Question 3 (moderate) — True/False/Cannot say**

Statement: "The shared platform team will provide onboarding support to all migrating services."

- A) True
- B) False
- C) Cannot say
- D) True, because the platform team is responsible for migration

**Correct answer: B**

**Explanation:** Support is committed "to the first ten migrating services" — a bounded offer that "all migrating services" contradicts. This tests reading a bounded commitment as bounded rather than general — a delivery manager planning around unbounded support discovers the limit only at service eleven.

**Passage 2 (for Questions 4–6).** "The Supplier guarantees 99.95% monthly availability of the control plane. Availability of customer workloads is dependent on customer configuration and is expressly excluded from this guarantee. Service credits of 10% of the monthly fee apply for each 0.05 percentage point shortfall in control plane availability, capped at 50% of the monthly fee. Credits must be claimed within 30 days of the month in which the shortfall occurred. Planned maintenance, notified at least 72 hours in advance and not exceeding four hours per month, is excluded from the availability calculation."

**Question 4 (moderate) — True/False/Cannot say**

Statement: "If a misconfigured customer workload is unavailable for a day while the control plane remains available, the supplier owes no service credits."

- A) True
- B) False
- C) Cannot say
- D) False, because a full day's outage must breach the guarantee

**Correct answer: A**

**Explanation:** The guarantee covers the control plane only; workload availability is expressly excluded. This tests identifying precisely what unit a guarantee covers — a lead who builds an availability strategy on a supplier's headline figure without checking its scope has quietly transferred unbudgeted risk to their own side of the contract.

**Question 5 (moderate) — Applying contractual arithmetic in text**

In a given month, control plane availability was 99.80% with no planned maintenance; the monthly fee is £8,000, claimed within 30 days. Ask for the credit due.

- A) £800
- B) £2,400
- C) £4,000
- D) £1,600

**Correct answer: B**

**Explanation:** Shortfall 0.15 points ÷ 0.05 = 3 increments × 10% = 30% of £8,000 = £2,400, under the 50% cap. This tests extracting a formula embedded in prose (increments = shortfall ÷ 0.05; credit = min(increments × 10%, 50%) × fee) before computing.

**Question 6 (hard) — True/False/Cannot say**

Statement: "A six-hour maintenance window notified a week in advance would be excluded from the availability calculation."

- A) True
- B) False
- C) Cannot say
- D) True, because the notification exceeded 72 hours

**Correct answer: B**

**Explanation:** The exclusion requires both conditions — at least 72 hours' notice *and* a duration not exceeding four hours; a six-hour window meets the first but breaches the second. This tests checking every limb of a conjunctive condition rather than stopping once one limb is satisfied.

**Passage 3 (for Questions 7–9).** "The registry migration completed two days late. The pathfinder team's migration surfaced an undocumented dependency on the legacy registry's search API, which three further teams were subsequently found to share. A workaround was developed and applied to all four teams, adding approximately one day of effort each. The review notes that the dependency was discoverable in advance: registry access logs listing API consumers were available to the migration planners but were not consulted. The migration guide has since been updated to require a consumer-log review during planning. No user-facing impact occurred. The review also records that the pathfinder team's early flag of the issue prevented an estimated further four teams from beginning migrations that would have failed."

**Question 7 (moderate) — True/False/Cannot say**

Statement: "The undocumented dependency caused user-facing impact for the four affected teams."

- A) True
- B) False
- C) Cannot say
- D) True, because the migration completed late

**Correct answer: B**

**Explanation:** The passage states plainly: "No user-facing impact occurred." This tests keeping internal cost (delay, rework) separate from user-facing impact, a distinction reviewers must police so that availability reporting stays trustworthy.

**Question 8 (hard) — Inference**

Ask for the most defensible inference from the passage.

- A) The migration planners were careless and should be reassigned.
- B) Consulting the access logs during planning would probably have surfaced the dependency before any team migrated.
- C) The pathfinder approach saved no time overall, since the migration still finished late.
- D) The remaining teams' migrations will now proceed without issues.

**Correct answer: B**

**Explanation:** The review's own causal claim — the dependency "was discoverable in advance" because the logs were available but unconsulted, and the guide now requires that review — supports B at the strength the passage licenses. A leaps to an unsupported personnel verdict; C ignores that the early flag prevented four further failed migrations; D converts one fixed failure mode into a guarantee. This tests calibrating a conclusion to the strength the passage actually supports.

**Question 9 (hard) — Main point**

Ask which sentence best captures the main point of Passage 3.

- A) The registry migration was a failure that finished two days late.
- B) A discoverable dependency was missed in planning, at modest recovered cost; the planning process has been fixed, and the pathfinder approach limited the damage.
- C) Registry access logs must always be reviewed before any migration.
- D) The pathfinder team performed better than the other teams.

**Correct answer: B**

**Explanation:** B covers the miss, its cost, its cause, the systemic fix, and the mitigating structure at calibrated strength. A reads only the opening line; C promotes a specific fix into a universal rule; D invents a comparison the passage never makes. This tests producing a complete, calibrated summary rather than one anchored on a single fragment.

**Passage 4 (for Questions 10–11).** "Hi — two things. First: the product team have asked us to add the new export feature to this sprint, but doing so means dropping the pipeline hardening work you asked for. I think the hardening can wait a sprint, but I didn't want to make that call without you since you own the platform roadmap. Second: Priya has been carrying the on-call rota more or less alone since Sam left, and she mentioned yesterday she's exhausted. I know rota design is my responsibility, but you know the platform constraints better than I do — could we talk this week about what coverage actually requires? Also, for what it's worth, the export request came directly from the programme director's office."

**Question 10 (moderate) — Comprehension**

Ask what the email actually requests of the reader.

- A) A decision on whether the hardening work can slip a sprint, and a conversation this week about on-call coverage requirements.
- B) Approval to add the export feature, and a decision on Priya's workload.
- C) An escalation to the programme director about scope pressure.
- D) Agreement that the hardening work can wait, since the delivery manager has already decided it can.

**Correct answer: A**

**Explanation:** The delivery manager offers a view but explicitly defers the decision on hardening to the roadmap owner, and retains rota design while asking for a conversation about coverage constraints. This tests parsing a multi-part email that carefully allocates decision rights, rather than answering the request that is easiest.

**Question 11 (hard) — Inference**

Ask for the most defensible inference from the email.

- A) The programme director has instructed that the hardening work be dropped.
- B) The delivery manager is managing the boundary between their authority and the reader's deliberately, and is surfacing a welfare risk early.
- C) Priya will resign if the rota is not fixed this week.
- D) The export feature is more valuable than the hardening work.

**Correct answer: B**

**Explanation:** The email's structure — deferring the roadmap decision, retaining rota accountability while asking for expertise, and raising exhaustion early — supports B directly. A inflates provenance ("came from the director's office") into an instruction the text never gives; C escalates a welfare signal into an ultimatum; D mistakes the existence of a request for a settled value judgement. This tests inferring from how a colleague structures a request, not only from its content.

**Question 12 (hard) — Clear-writing judgement**

Announcing a deprecation to consuming teams, ask which formulation serves them best.

- A) "As part of our ongoing commitment to continuous improvement and platform excellence, certain legacy API functionality will be sunset in due course, and teams are encouraged to consider modernisation pathways at their earliest convenience."
- B) "The v1 export API is deprecated from today. It will be removed in release 6.0, scheduled for 1 March. Migrate to the v2 export API before then; the migration guide is linked below, typical effort is one to two days, and the platform team offers pairing support — book via the linked form. From today, v1 responses include a deprecation header. Questions: #platform-support."
- C) "The v1 export API is deprecated and will be removed soon. Please migrate when you can. Details to follow."
- D) "Per architectural decision record 47, consumers of deprecated interface v1 are required to effect migration to the successor interface in accordance with the platform lifecycle policy, non-compliance with which may result in service interruption."

**Correct answer: B**

**Explanation:** B answers what is deprecated, when it breaks, what to do instead, and what it will cost, with dates, an effort estimate, a migration path, support, and an observable signal — completeness a busy team needs, not brevity. A and C give no dates and generate follow-up traffic; D is precise about authority and vague about everything a reader needs. This tests judging a notice by whether every consuming team can act on it after one reading.

### Administration tips

- Score for whether the candidate scopes an exception clause to the specific obligation it modifies, rather than to the passage's broadest reading.
- Note whether the candidate catches an "in any case no later than" backstop clause distinct from its primary trigger.
- Watch for whether every limb of a conjunctive condition is checked before a True verdict is given.
- Score inference and main-point items on calibration — a conclusion no stronger and no weaker than the passage supports.
- For multi-part emails, score on whether the candidate identifies exactly what is requested, of whom, and what is context rather than a request.

### Common pitfalls to watch for when scoring

- Crediting a bounded commitment ("the first ten") read as a general one.
- Missing when a candidate stops at the first satisfied limb of a conjunctive rule.
- Rewarding a summary or inference that ignores a stated backstop or exception clause.
- Accepting provenance ("came from senior office X") read as an instruction rather than context.
- Missing when a candidate chooses the shortest writing-judgement option over the most complete one for its actual audience.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace dilemmas and asks the candidate to judge the effectiveness of possible responses — most and least effective, a full ranking, or independent ratings. Correct answers are set by subject-matter experts and reflect the professional behaviours UK government digital organisations value: user focus, collaboration, ownership, sound escalation, integrity, inclusion, and developing others.

Typical format: 8 to 15 scenarios, generously timed (20 to 40 minutes).

For a lead DevOps engineer, situational judgement is the assessment closest to the actual difficulty of the job. The technical problems at this level usually have discoverable answers; the leadership problems rarely do — holding a standard against a team with a genuine grievance about it, refusing a director's pet feature without refusing the director, or noticing a strong engineer quietly burning out on a rota that is technically "working". A single awkward situation handled well or badly becomes case law for every practitioner watching.

### How this assessment maps to the role

- **Ownership and escalation** map to **Availability and capacity management** and **Service support**: owning KPI breaches and complex faults at the level where they are the candidate's to fix, and escalating with evidence when they are not.
- **Collaboration and influence** map to **Systems integration** (standards work is influence, not decree) and the duty to contribute to strategic direction alongside peers who may disagree.
- **Integrity under pressure** maps to **Information security** and **Modern development standards**: whether a control or an honest metric survives when inconvenient to someone senior.
- **Developing others** maps to the duties of coaching, mentoring and leading the sharing of knowledge and good practice: whether a response grows capability or merely redistributes tasks.
- **User focus** maps to the **User focus** skill: as product owner of the toolchain, users are delivery teams and, beyond them, citizens.

### Practice questions

**Question 1 (moderate) — The team that rejects the standard**

A deployment standard established six months ago has otherwise complete adoption; one team continues deploying their own way, their tech lead saying the standard "adds twenty minutes to every release for zero benefit at our scale — we tried it for a month." Their delivery metrics are among the best in the product line. Ask for the most and least effective response.

- Option A: Insist on adoption — a standard with voluntary exceptions is not a standard.
- Option B: Examine their month of experience with them: identify which steps cost the twenty minutes and what those steps protect against; if the costs are real and the protections genuinely do not apply at their scale, adapt the standard to include a documented lighter path with entry criteria; if the protections do apply, show them the specific risk they are carrying.
- Option C: Let the exception stand quietly — their metrics are excellent, and pushing would damage the relationship.
- Option D: Escalate the non-compliance to their delivery manager and ask for adoption to be added to the team's objectives.

**Most effective: B. Least effective: C.**

**Explanation:** B treats the team's trial as field evidence, which either improves the standard with a transparent tiered path or produces the specific risk case that persuades better than authority can. A defends the standard's letter while refusing the information that would defend its purpose; D outsources influence work to line management before it has been attempted. C is least effective: an unexamined, undocumented exception is governance by mood, its legitimacy will erode as other teams notice, and nobody is tracking the risk if the team's scale later changes. This tests examining and adapting or persuading, never ignoring, with escalation only after engaging.

**Question 2 (moderate) — Two teams, one roadmap slot**

One team-quarter of capacity remains this quarter. Team One wants it for observability improvements benefiting every service modestly; Team Two wants it for a self-service database feature three delivery teams have requested loudly and repeatedly. Support-load data shows unplanned support requests, half database-related, consume 30% of platform team time. Ask for the most and least effective response.

- Option A: Give the slot to Team Two — three named customers asking loudly beats a diffuse benefit.
- Option B: Split the slot between both teams so neither is disappointed.
- Option C: Decide using the evidence: the support-load data suggests the database feature attacks the largest measured cost, so prioritise it — and publish a decision note recording the criteria, the observability deferral, and when it will be revisited.
- Option D: Ask the three requesting delivery teams to vote.

**Most effective: C. Least effective: B.**

**Explanation:** C decides on measured cost and benefit, and records why — the criteria matter more than this quarter's outcome, since a future quarter may not align the loud request with the evidence. A reaches the same allocation by the wrong route, entrenching "loudest wins" as precedent; D delegates a portfolio decision to a subset of interested stakeholders. B is least effective: halving a team-quarter typically finishes neither improvement to a useful threshold, disappointing both teams and both customer groups. This tests choosing transparently with stated criteria rather than splitting to avoid the discomfort of choosing.

**Question 3 (hard) — The director's pet feature**

A director rarely seen asks directly for a real-time analytics dashboard "so we can showcase the platform at the leadership away-day next month." The quarter's published strategy is fully committed to migration tooling four teams are waiting on, and user research with delivery teams has never surfaced analytics as a need. Ask for the most and least effective response.

- Option A: Commit to the dashboard — a director's sponsorship is worth more than a quarter's roadmap.
- Option B: Decline, citing the published strategy, and copy the head of profession for visibility.
- Option C: Explore the underlying need with the director — what story does the away-day require? — then offer options with costs: a lightweight demonstration using existing metrics (days of effort), the full dashboard as a candidate for next quarter's roadmap if user research supports it, and the migration commitments protected either way; agree the trade-off explicitly if the director still wants more.
- Option D: Agree publicly but have the work absorbed quietly as stretch capacity so the roadmap appears unaffected.

**Most effective: C. Least effective: D.**

**Explanation:** C distinguishes the director's underlying need (a compelling story) from the stated desire (the full feature), offers a cheap option that likely satisfies it, and keeps the four waiting teams' commitments visible in the conversation so any override is informed. A abandons the published strategy for sponsorship; B holds the line but treats a stakeholder's unexplored need as an interruption. D is least effective: it deceives the director, the waiting teams, and the engineers whose evenings fund the "stretch capacity" without their consent. This tests distinguishing a stakeholder's need from their stated desire, upward as well as downward.

**Question 4 (moderate) — The struggling senior engineer**

A technically excellent senior engineer has visibly disengaged this quarter: slower reviews, two overdue design documents, and was short with a junior colleague yesterday. Their delivery manager mentions it; the engineer reports to the delivery manager, but the candidate leads the technical community they belong to. Ask for the most and least effective response.

- Option A: Stay out of it — performance is the delivery manager's job.
- Option B: Talk with the engineer privately as their technical lead: describe what has been observed without diagnosis, ask how things are and listen, and agree together what would help, coordinating with (not replacing) the delivery manager on anything formal.
- Option C: Raise the junior-colleague incident at the next team retrospective so the behaviour is addressed openly.
- Option D: Quietly reassign the overdue design documents to another engineer to protect the deadlines.

**Most effective: B. Least effective: C.**

**Explanation:** B uses the relationship the technical leadership role actually gives — trust — for an early, private, non-judgemental conversation that treats a changed pattern in a strong performer as a signal to understand. A abandons the person by hiding behind the org chart; D strips work without a conversation, likely accelerating disengagement. C is least effective: exposing an individual's bad moment in a group forum humiliates them in front of the community, and teaches everyone the retrospective is unsafe. This tests caring for people privately and early, before correcting behaviour.

**Question 5 (moderate) — Duplicate effort discovered**

Two project teams have each spent several weeks independently building near-identical internal tooling for test-data generation, unaware of each other; both tools are roughly 70% complete, and both teams are proud of their approach. Ask for the most and least effective response.

- Option A: Direct both teams to stop, evaluate the two tools personally, and mandate the better one.
- Option B: Bring the teams together to compare approaches, agree convergence criteria with them, and have them jointly decide which codebase carries forward and what to port from the other — then fix the discovery gap that allowed six weeks of parallel work, such as a lightweight "intent to build" register.
- Option C: Let both teams finish — sunk effort is spent either way, and competition may produce a better tool.
- Option D: Use the incident at the next all-hands as an example of poor communication between teams.

**Most effective: B. Least effective: D.**

**Explanation:** B turns a potential grievance into a shared engineering decision, with the losing codebase's ideas ported and judgement respected, and fixes the systemic discovery gap so duplication cannot recur unnoticed. A reaches an outcome efficiently but spends trust, teaching both teams to hide work-in-progress in future. C doubles down on waste. D is least effective: it punishes teams publicly for a coordination failure that was structurally the candidate's own to prevent. This tests fixing the instance and the discovery mechanism together, never publicly shaming a structural gap.

**Question 6 (hard) — Your change broke the platform**

A configuration change the candidate personally made, reviewed and approved through normal process, caused every team's deployments to fail for three hours; the incident is resolved. A delivery manager comments publicly in a cross-team channel: "Ironic that the platform lead broke the platform. Maybe the standards need to apply to the standards owner." Ask for the most and least effective response.

- Option A: Reply privately explaining the change followed the full review process, and ask the delivery manager to moderate their tone in shared channels.
- Option B: Reply briefly and openly in the channel: acknowledge the impact and authorship without defensiveness, note that a blameless review is underway, and share findings and process improvements with all teams when complete — then do exactly that, including what the review process itself failed to catch.
- Option C: Say nothing in the channel; the incident review will speak for itself in due course.
- Option D: Reply in the channel explaining the change was reviewed and approved by others too, so responsibility is shared across the review chain.

**Most effective: B. Least effective: D.**

**Explanation:** B models ownership at leadership altitude — public impact, public and brief acknowledgement, plus a delivered blameless review — which purchases years of honest incident reporting from everyone watching. D is technically true but culturally poisonous, spreading responsibility across reviewers in public and contradicting the blameless principle everyone else needs to trust. A makes the reply about tone rather than the outage; C leaves a vacuum for the joke to become the narrative. This tests owning impact fast, reviewing blamelessly, and publishing what changes — the standard expected of any team.

**Question 7 (moderate) — The rota that works on paper**

One team's on-call rota is technically compliant and nobody has complained formally, but one engineer has taken 60% of out-of-hours callouts for three months because she is the only person confident with a legacy scheduler component; her manager calls it "just how the skills fall". Ask for the most and least effective response.

- Option A: Leave it — coverage is compliant, nobody has complained, and redistributing would put less capable people on difficult callouts.
- Option B: Treat the skewed load as both a welfare risk and a single-point-of-failure: agree with her manager a plan to cap her share, pair other engineers with her on legacy callouts and run knowledge-transfer sessions until at least two others are confident, and check in with her directly about the past three months — while crediting, visibly, the load she has carried.
- Option C: Immediately equalise the rota so everyone takes identical shares from next week.
- Option D: Ask her whether she minds the current arrangement, and keep it if she says she is fine.

**Most effective: B. Least effective: C.**

**Explanation:** B treats the load as a burnout trajectory and a bus-factor-of-one on production, fixing both through deliberate knowledge transfer while capping load during the transition. A mistakes formal compliance for health; D quietly transfers the duty of care onto the person carrying the load. C is least effective: instant equalisation puts unskilled engineers on callouts they cannot resolve, extending outages and predictably ending with her being called back anyway. This tests fixing the system that concentrated the load, never confusing "uncomplaining" with "unaffected".

**Question 8 (hard) — Disagreement between leads**

Two leads jointly own engineering standards; one wants a single mandated language and framework for internal tooling, the candidate believes a constrained choice of two or three fits better, and the evidence each has assembled is genuinely mixed. The decision is due at next week's board, discussions have become slightly strained, and teams are asking what to expect. Ask for the most and least effective response.

- Option A: Agree to the colleague's proposal to preserve the relationship.
- Option B: Prepare a joint paper presenting both options fairly with the shared evidence, the genuine trade-offs, and the criteria the board should decide on — agreeing beforehand that both leads will publicly commit to whichever outcome the board chooses.
- Option C: Lobby board members individually before the meeting so the preferred option arrives with momentum.
- Option D: Present competing papers so the board sees the strongest case for each side.

**Most effective: B. Least effective: C.**

**Explanation:** B moves a genuinely balanced decision to the governance forum built for it, converts interpersonal strain into a jointly-owned artefact, and the advance commit-to-the-outcome pact gives the department one aligned voice regardless of the board's choice. A abandons professional judgement to avoid friction; D institutionalises the split and asks the board to pick a winner between two leads who must keep cooperating. C is least effective: pre-meeting lobbying converts an evidence question into a politics question and, if discovered, corrodes trust in both leads. This tests disagreeing in private, integrating in the paper, and committing in public.

**Question 9 (moderate) — The deadline and the delegation**

A complex piece of integration work on the critical path is due in two weeks; the candidate could do it personally in four days, or an engineer whose growth area this is could do it in around eight days with coaching, which the schedule can absorb with little margin. The candidate's own week is heavily committed to a product strategy draft due to the head of profession. Ask for the most and least effective response.

- Option A: Do the integration work personally in four days and catch up on the strategy draft at evenings and weekends.
- Option B: Delegate the work with a structured setup: agree the design approach together on day one, schedule two short checkpoints, define an escalation trigger (if the first milestone slips beyond day four, re-plan together), and protect the week for the strategy draft.
- Option C: Delegate the work but check in daily and review every commit.
- Option D: Postpone the strategy draft and pair full-time with the engineer.

**Most effective: B. Least effective: A.**

**Explanation:** B is real delegation scaffolded against the schedule risk — design alignment, sparse checkpoints, a pre-agreed objective escalation trigger — leaving the strategy draft, the work only the candidate can do, protected. C delegates the task but not the trust, consuming nearly the hours it was meant to save; D sacrifices the unique deliverable to do intensively what B achieves sufficiently. A is least effective despite feeling responsible: it removes the growth opportunity, funds the schedule with unpaid evenings, and leaves the team exactly as dependent on the candidate as before. This tests delegating real, consequential work with structure, rather than absorbing it personally.

**Question 10 (hard) — The compliance report that flatters**

Preparing for an internal audit, a spot check finds two services with credentials in environment files, contrary to the secrets-management standard — despite the owning team's quarterly self-assessments claiming full compliance for at least two quarters. The signing tech lead is capable and well liked; the audit begins in three weeks. Ask for the most and least effective response.

- Option A: Correct the two services quietly before the audit and leave the historical returns as they are.
- Option B: Raise it with the tech lead directly and without ambush: show the findings, understand how the returns came to be wrong (misunderstanding of scope, copy-forward of an old return, or knowing misstatement — each needs a different response), require the services fixed and the current return corrected, inform the head of profession of the discrepancy and remediation before the audit finds it, and review whether the self-assessment process invites copy-forward errors across all teams.
- Option C: Report the tech lead as a conduct matter and let the formal process take over.
- Option D: Add a caveat to the audit submission noting that self-assessments are inherently approximate.

**Most effective: B. Least effective: A.**

**Explanation:** B holds both the security substance and the integrity of the reporting: the tech lead hears it first with evidence, the cause is diagnosed before a response is chosen, disclosure to the head of profession converts a discovered discrepancy into a managed one, and the systemic review checks whether the process itself invites copy-forward errors elsewhere. C skips understanding and goes straight to formal machinery, disproportionate as a first move; D launders a specific falsity as statistical noise. A is least effective: fixing the code while leaving the historical misreporting standing means the candidate now knows the returns are false and is arranging for the audit not to notice — converting a team's process failure into their own integrity failure. This tests holding both the technical substance and the truthfulness of the record, and disclosing proactively rather than quietly patching around a known misstatement.

### Administration tips

- Score for whether a response fixes both the immediate instance and the underlying system that produced it.
- Note whether the candidate respects decision rights in both directions — keeping line-management matters with managers, board matters with boards, product decisions with themselves — rather than seizing or dodging a call.
- Watch for whether hard messages are delivered privately and credit for carried burdens is given visibly, rather than either being handled in public.
- Score for whether the candidate identifies a covert integrity failure (concealment, deflected blame, an uncorrected record) among several plausible-sounding options.
- Note whether the candidate avoids splitting a decision (halving capacity, running competing options) to avoid the discomfort of choosing.

### Common pitfalls to watch for when scoring

- Crediting escalation to a manager or formal process before direct engagement has been tried.
- Missing when a candidate keeps the peace with a director, peer, or resistant team at the cost of abandoning their own professional judgement.
- Rewarding a rescue — doing the critical-path work personally, reassigning a struggling engineer's tasks, reviewing every commit — over a response that develops the other person.
- Accepting public correction of an individual's behaviour in a shared or team-wide forum.
- Missing when a candidate treats formal compliance (a green rota, a clean-looking return) as evidence of underlying health without verifying it.

## Conclusion

This guide has worked through cross-team dependency reasoning, rule-scoping in standards matrices, distinguishing what a constraint set forces from what it allows, and walking an artefact's lifecycle through a proposed standard to find its silent flaw; portfolio-level numeracy — weighted averages, relative versus absolute change, compound growth, breakeven analysis, reversed percentages, and quantified optimisation cases; the boundary between what a passage guarantees, contradicts, and merely reports as bounded or claimed; and the situational judgement calls that define lead-level work — holding a standard while listening to the team that resists it, refusing a director's pet feature without refusing the director, developing an engineer instead of rescuing them, and owning a personal mistake publicly and fast.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around escalation timing, evidence, and whether a response protects both substance and relationship. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
