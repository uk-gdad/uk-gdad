# Lead DevOps Engineer (Management) - Psychometric Assessment Resources

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for lead DevOps engineer on the management track. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a lead DevOps engineer with management responsibilities, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — product line roadmaps, toolchain strategies, team capacity plans, policy and standards proposals, incident trend reports, and budget lines for platform services — and decisions genuinely made by someone acting as technical product owner for a platform product line, developing medium to long term strategies, leading one or several related project teams, and leading the sharing of knowledge and good practice across them.

At this level, the primary output is no longer the work done with one's own hands but the direction, standards and capability of the teams led: contributing to the strategic direction of an organisation's engineering, setting policy and standards for how change is implemented, and developing the experts who deliver service improvements. Cognitive ability at this level means reasoning about dependencies that bind multiple teams at once; numerical reasoning means reading a quarter's delivery and cost data across a portfolio; verbal reasoning means extracting precise meaning from policy consultations and supplier contract summaries; situational judgement means navigating cases where strategy, team wellbeing and a live service pull in different directions.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for reasoning quality as well as the final choice — several items test whether a candidate separates a rule breach from a merely unwise but compliant decision, whether they identify which event a deadline clause actually binds to, and whether they measure risk by its likely realisation rather than by the date it is scheduled to be reviewed. Situational judgement items at this level frequently turn on whether a response fixes both the instance and the underlying system, and whether it protects the channel by which bad news reaches a leader; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles — product line roadmaps, multi-team dependency maps, standards documents, platform service catalogues, incident trend summaries, and migration plans — that ask a candidate to reason quickly and accurately about them.

Typical format: an online, timed test lasting 15 to 30 minutes, with questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

For a lead DevOps engineer on the management track, cognitive assessment is particularly relevant because decisions at this level bind multiple teams at once: an error in reasoning as technical product owner can commit several teams to a flawed migration sequence, and the management track adds constant reasoning about people — capacity, capability, succession, and where knowledge is dangerously concentrated.

### How this assessment maps to the role

- **Pattern recognition** maps to **Development process optimisation**: recognising recurring structures across several teams' operational data — the same bottleneck, the same failure signature, the same reinvented workaround.
- **Logical deduction** maps to **Systems design**, **Systems integration** and the product ownership duty: testing whether a medium to long term strategy is internally coherent.
- **Error checking** maps to **Modern development standards**: spotting inconsistencies between artefacts — a roadmap contradicting a set policy, a design breaching a standard.
- **Prioritisation** maps to **Availability and capacity management** and leading a team of experts: ranking impact and urgency together across a wider portfolio than a single service.
- **Applied problem solving** maps to **Information security** and **Service support**: decomposing cross-team escalations and choosing the intervention that fixes the cause.

### Practice questions

**Question 1 (easy) — Pattern recognition in a service catalogue**

A service catalogue requires each entry to follow `<product-line>/<service>/<tier>`, tier being `critical`, `standard`, or `dev`. Entries: (1) `payments/gateway/critical`; (2) `payments/ledger/standard`; (3) `identity/critical/verify`; (4) `identity/tokens/dev`; (5) `notify/email/standard`. Ask which entry breaks the pattern.

- A) Entry 2
- B) Entry 3
- C) Entry 4
- D) Entry 5

**Correct answer: B**

**Explanation:** The order is fixed: product line, service, tier. Entry 3 places the tier word `critical` in the service position and a service-like word `verify` in the tier position. This tests a consistency check of the kind performed when owning a cross-team standard: automation routing by tier and reports aggregating by product line both depend on every entry parsing correctly.

**Question 2 (easy) — Logical deduction from a policy the candidate set**

Policy: "Every service must publish health metrics to the central monitoring platform, unless the service is scheduled for decommissioning within six months and an exception has been recorded in the risk log." A team reports: "Our reporting service does not publish health metrics to the central platform." Ask which conclusion must be true.

- A) The reporting service is scheduled for decommissioning within six months.
- B) The team has breached the policy.
- C) Either the service has a recorded decommissioning exception, or the policy has been breached.
- D) The central monitoring platform does not support the reporting service's technology.

**Correct answer: C**

**Explanation:** The policy is a conditional with a two-part exception; the facts given do not establish whether it applies, so neither A nor B is guaranteed alone, and D invents information. Only the disjunction in C is guaranteed. This tests concluding only what the information given guarantees — a discipline that matters most for a policy owner, who is most tempted to assume breach because they remember the rule more vividly than exceptions they granted.

**Question 3 (easy) — Error checking a roadmap against strategy**

Strategy: (i) the legacy build system retires by end of Q4; (ii) no new services may adopt it from Q1 onwards; (iii) all migration work is scheduled by the platform team, not by service teams individually. A draft roadmap shows: a new service adopting the legacy build system in Q2; two existing services migrated by the platform team in Q3; retirement in Q4. Ask how many strategy points the draft breaches.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** Point (i) is met (retirement in Q4); point (ii) is breached (a new service adopts in Q2, after Q1); point (iii) is met (platform team schedules the migrations). Exactly one breach. This tests separating "what breaches the stated rules" from "what is unwise but compliant" — the Q2 adoption's knock-on risk to the Q4 date is worth raising as a consequence, but it is not itself a second breach the question asked about.

**Question 4 (moderate) — Prioritisation across a portfolio**

Four items compete for attention: (1) a citizen-facing service is degrading intermittently, and the team investigating has asked for help because the fault seems to involve a platform component owned elsewhere; (2) a product line strategy paper is due to the architecture review board on Wednesday and still needs its cost section; (3) a line report has hinted in stand-up at an outside job offer and asked for an urgent conversation; (4) a quarterly knowledge-sharing session scheduled for tomorrow has no agenda yet. Ask which sequencing is most defensible.

- A) 1, 3, 2, 4 — live cross-team fault first, then the retention conversation, then the strategy paper, then the session agenda
- B) 2, 1, 3, 4 — the board deadline outranks everything
- C) 3, 1, 2, 4 — people always come first
- D) 1, 2, 4, 3 — delivery items first, people items later

**Correct answer: A**

**Explanation:** Item 1 is urgent and needs the candidate specifically, since no one else holds both halves of the cross-team picture. Item 3 is next: a possible resignation is time-sensitive and high impact. Item 2 has a real deadline but Wednesday allows Tuesday work; item 4 is delegable — an opportunity to ask a senior engineer to shape the agenda. This tests weighing user harm, people risk and deadlines together, and spotting the item that can be delegated rather than merely sequenced.

**Question 5 (moderate) — Pattern recognition in cross-team incident data**

Configuration-error incident counts this quarter: Team A 2, Team B 3, Team C 11, Team D 2 — teams of similar complexity and change volume, but Team C is the only one whose configuration changes are not yet validated by automated policy checks introduced elsewhere. Ask for the most reasonable interpretation.

- A) Team C's engineers are less careful and need performance management.
- B) The data is consistent with the missing automated validation being a factor — worth verifying by checking whether Team C's incidents would have been caught by the checks, then prioritising the rollout.
- C) The classification is wrong; eleven configuration errors is implausible.
- D) Nothing can be concluded because teams classify root causes differently.

**Correct answer: B**

**Explanation:** The outlier is real, and there is a known systemic difference to test against it — B pairs the hypothesis with a concrete verification before committing rollout effort. A leaps to a people judgement while ignoring the known systemic gap; C rejects inconvenient data; D uses a fair caveat to abandon analysis rather than refine it. This tests asking "what differs about this case?" and testing it, rather than blaming people for a system gap.

**Question 6 (moderate) — Deduction about multi-team migration sequencing**

Migration rules: (i) Team A's services must migrate before Team B's, since B consumes A's APIs through the new gateway; (ii) Team A cannot start until the platform team delivers the landing zone, ready at the start of month 2; (iii) Team A's migration takes one full month; (iv) Team B's migration must complete within one month of Team A completing, or dual-running costs double. Team B's migration also takes one month. Ask for the latest month Team B can start without doubling costs.

- A) Month 2
- B) Month 3
- C) Month 4
- D) Month 5

**Correct answer: B**

**Explanation:** Team A migrates during month 2, completing at its end. Rule (iv) binds to A's *completion*: B must complete by end of month 3, and since B's migration takes a month, the latest compliant start is the start of month 3. Starting in month 4 would complete one month late. This tests identifying which event a deadline clause actually binds to — completion, not start — a misreading that turns into a real budget variance across teams when it appears in a signed-off plan.

**Question 7 (moderate) — Error checking a standards matrix**

Standards: (i) every `critical`-tier service must have a tested disaster recovery plan; (ii) every service, regardless of tier, must have a named service owner; (iii) `dev`-tier services must not hold production data. Extract: Gateway (critical, DR tested, owner, holds production data); Ledger (standard, DR not tested, owner, holds production data); Sandbox (dev, DR not tested, no owner, no production data); Tokens (critical, DR not tested, owner, holds production data). Ask how many services are non-compliant.

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: B**

**Explanation:** Gateway and Ledger are compliant (rule i does not bind Ledger, a standard-tier service); Sandbox breaches rule (ii), which applies to every service, since it has no named owner; Tokens breaches rule (i), since its DR plan is untested. Two non-compliant. This tests applying each rule only where it binds — over-flagging Ledger's untested DR plan or under-flagging Sandbox's missing owner are equally wrong.

**Question 8 (moderate) — Applied problem solving on a cross-team failure**

Two teams report overnight batch deployment failures. Facts gathered: both failed at the artefact-download step; a third team, using a regional mirror of the artefact repository, succeeded overnight; the artefact repository's maintenance calendar shows a storage migration scheduled that night; daytime deployments today are succeeding. Ask which hypothesis best fits all the evidence.

- A) Both teams introduced coincidental pipeline bugs on the same evening.
- B) The artefact repository was unavailable overnight during its storage migration, affecting consumers of the primary repository but not of the mirror.
- C) The network between the teams' runners and all repositories failed overnight.
- D) The third team's pipeline is more robustly written.

**Correct answer: B**

**Explanation:** Coincidental bugs would not both localise at the same step and would still fail today; a general network failure should have affected the mirror-using team too; pipeline robustness does not explain the shared failing step or the timing match with the scheduled migration. B explains every fact, including today's recovery. This tests insisting a hypothesis account for all the evidence, and pairing the diagnosis with the two follow-up actions it implies: mirror use for all teams, and better communication of maintenance windows.

**Question 9 (hard) — Multi-constraint scheduling of a strategy rollout**

Scheduling three events for a toolchain strategy — the briefing for all teams (B), the pilot team's cutover (C), and the lessons-learned review (R) — across Monday to Friday, one event per day. Constraints: (i) B before C, since the pilot team's context depends on the briefing; (ii) the head of engineering must attend B and is available only Tuesday and Friday; (iii) after C, at least one full working day of live running is needed before R can usefully review it; (iv) R must happen this week, since next week the pilot team is away. Ask on which day C must take place.

- A) Tuesday
- B) Wednesday
- C) Thursday
- D) Friday

**Correct answer: B**

**Explanation:** B must be Tuesday (Friday would leave no room for C and R within the week). C must follow B, so Wednesday at the earliest. Testing later options: C on Thursday leaves only Friday for live running, pushing R into next week (forbidden by rule iv); C on Friday leaves no room at all. Only C on Wednesday works, with Thursday as the live-running day and R on Friday. This tests anchoring the most constrained element (B's availability) first, then eliminating later options by testing them against the tightest deadline.

**Question 10 (hard) — Deduction across knowledge concentration**

Skills matrix: only engineers P and Q can operate the certificate infrastructure; only Q and R can operate the secrets platform; only P can administer the artefact repository. Q resigns at month end; R is on extended leave for the two months after that; P is present. Ask which capabilities have no available operator apart from a single person, and which have none at all, during that two-month window.

- A) Certificates: single person (P); secrets: none available; artefact repository: single person (P)
- B) Certificates: none available; secrets: single person (R); artefact repository: single person (P)
- C) Certificates: single person (P); secrets: single person (R); artefact repository: none available
- D) All three capabilities have no available operator

**Correct answer: A**

**Explanation:** Certificates (P, Q): Q has left, leaving P — single point of failure, but available. Secrets (Q, R): Q has left and R is on leave for the window — no available operator at all. Artefact repository (P alone): available, single point of failure by design. This tests set intersection with a time window — the exact arithmetic behind succession planning, and the correct next action is prioritising the secrets-platform handover (which goes to zero) over the capabilities that merely thin to one.

**Question 11 (hard) — Prioritising remedial actions across product lines**

Four issues, capacity for substantial work on one this quarter: (1) a critical-tier service's failover has never been tested, next scheduled test in five months; (2) two teams queue an average 90 minutes daily for shared build agents; (3) a supplier's managed database, used by one product line, announces end-of-support in ten months; (4) the same manual deployment step caused three minor incidents this quarter across different teams. Ask for the strongest choice.

- A) Issue 1 — an untested failover on a critical service is an unquantified availability risk that could realise at any time
- B) Issue 2 — it wastes the most engineer-hours per week
- C) Issue 3 — end-of-support is the hardest deadline
- D) Issue 4 — repeated incidents show active harm

**Correct answer: A**

**Explanation:** Issue 1's worst case is severe, immediate and unbounded — the trigger can arrive any day, and the five-month test date is a fact about the calendar, not the risk. Issue 2 is a bounded, tolerable drain; issue 3 has the longest controllable runway; issue 4 is minor, known, and cheaply fixable without "substantial" commissioning. This tests weighing severity times uncertainty, and distinguishing when a risk could realise from when it is merely scheduled to be reviewed.

**Question 12 (hard) — Decomposing a strategic complaint**

The head of delivery says: "Your platform is slowing every team down." Data: average pipeline duration is 22 minutes, down from 30 last quarter; median wait for a new environment is 9 days; the platform team's request queue has 40 open tickets, 28 of them environment requests; deployment failure rates are stable at 4%. Ask which response addresses the evidence most directly.

- A) Dispute the claim — pipeline durations improved 27% this quarter.
- B) Accept the complaint applies to pipelines and commission further pipeline optimisation.
- C) Identify environment provisioning as the dominant bottleneck the complaint most plausibly refers to, and propose a self-service provisioning capability plus an interim triage of the 28 queued requests.
- D) Ask the head of delivery to tell every team to raise fewer tickets.

**Correct answer: C**

**Explanation:** Pipelines are improving and take minutes; provisioning takes days and dominates the queue. A team's experienced "slowness" is governed by its worst wait, not its average one. A wins an argument on the wrong metric; B optimises what is already improving; D punishes the demand signal. This tests locating the specific process whose numbers could generate the reported experience before accepting or disputing a vague complaint.

### Administration tips

- Score for whether the candidate distinguishes a stated rule breach from a merely unwise but compliant decision.
- Note whether the candidate identifies which event (start or completion) a deadline clause actually binds to.
- Watch for whether the candidate measures risk by likely realisation rather than by a scheduled review date.
- Score for whether outliers are attributed to a known systemic factor and tested, rather than to individual blame.
- Note whether the candidate anchors the most constrained element in a scheduling problem first, before reasoning about the rest.

### Common pitfalls to watch for when scoring

- Crediting an assumption of breach where the candidate has not checked whether a known exception applies.
- Missing when a candidate blames individuals for what the evidence attributes to a systemic gap.
- Rewarding a candidate who double-counts one non-compliant item's downstream consequences as additional breaches.
- Accepting a risk ranked by its calendar review date rather than by when it could actually occur.
- Missing when a candidate optimises the metric that has already improved rather than the one driving the complaint.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately a candidate interprets, manipulates and draws sound conclusions from numerical information of the kind this role genuinely produces — portfolio delivery metrics, availability and capacity figures across product lines, platform cost breakdowns, team utilisation and recruitment numbers, migration budgets, and supplier pricing comparisons.

Typical format: an online, timed test of 20 to 35 minutes, usually 15 to 20 questions, each based on a data table or chart.

For a lead DevOps engineer on the management track, numeric fluency is the difference between owning a product line's story and having it told to them: roadmap defence at portfolio reviews rests on cost, capacity and delivery numbers, and pay, recruitment and on-call arithmetic shapes people decisions.

### How this assessment maps to the role

- **Percentages and rates** map to **Availability and capacity management**: availability achieved against target, utilisation, growth rates and error budgets across several product lines.
- **Ratios and proportions** map to **Development process optimisation** and team leadership: engineer-to-service ratios and on-call load per person.
- **Averages and distributions** map to the product ownership duty: knowing when a mean misleads and a percentile tells the truth.
- **Trend reading and projection** map to the **medium to long term strategy** duty: multi-quarter cost curves and capacity runway calculations.
- **Table and chart comprehension** maps to **Systems design** review and **Information security** oversight: reading supplier proposals and risk registers more carefully than they were written.

### Practice questions

**Question 1 (easy) — Availability across a product line**

A service has a 99.95% availability target over a 30-day month. Ask, to the nearest minute, how much downtime it can incur while still meeting the target.

- A) 4 minutes
- B) 22 minutes
- C) 43 minutes
- D) 66 minutes

**Correct answer: B**

**Explanation:** 43,200 × 0.0005 = 21.6, rounding to 22 minutes. This tests knowing the standard availability-to-downtime conversions across tiers — 99.9% ≈ 43 minutes, 99.95% ≈ 22, 99.99% ≈ 4 — well enough to challenge a proposed target in the meeting where it is proposed.

**Question 2 (easy) — Portfolio change failure rate**

Three teams deployed 120, 200 and 80 times last quarter, with change failure rates of 5%, 4%, and 10%. Ask for the total failed changes across the portfolio.

- A) 19
- B) 22
- C) 25
- D) 76

**Correct answer: B**

**Explanation:** 6 + 8 + 8 = 22 (5% of 120, 4% of 200, 10% of 80). The portfolio rate is 22 ÷ 400 = 5.5%, not the simple average of 5, 4 and 10. This tests building a portfolio total from each team's own volume and rate rather than averaging the rates directly.

**Question 3 (easy) — Team capacity arithmetic**

A team of 8 engineers, each with 6 productive hours a day, has two engineers on leave for the whole of a 10-day sprint, plus 40 hours total committed to interviews and knowledge-sharing. Ask for the productive engineering hours remaining for sprint work.

- A) 320 hours
- B) 360 hours
- C) 400 hours
- D) 440 hours

**Correct answer: A**

**Explanation:** 6 available engineers × 6 hours × 10 days = 360; minus 40 hours of overhead = 320. This tests planning sprint capacity from available hours, not nominal headcount — a subtraction done before a commitment is made, not after it is missed.

**Question 4 (moderate) — Platform cost per deployment trend**

Q1: £30,000/month, 300 deployments/month. Q4: £36,000/month, 500 deployments/month. Ask what happened to cost per deployment.

- A) It rose from £100 to £120
- B) It fell from £100 to £72
- C) It fell from £120 to £100
- D) It rose because total cost rose 20%

**Correct answer: B**

**Explanation:** Q1: £30,000÷300=£100; Q4: £36,000÷500=£72 — unit cost fell 28% even as total cost rose 20%, because volume rose 67%. This tests computing the per-unit figure before a budget conversation — a platform scaling efficiently tells a very different story from "costs went up".

**Question 5 (moderate) — Weighted average lead time**

Team A completed 30 changes averaging 2 days; Team B completed 10 changes averaging 8 days. Ask for the mean lead time across all 40 changes.

- A) 5 days
- B) 3.5 days
- C) 4 days
- D) 2.75 days

**Correct answer: B**

**Explanation:** (30×2 + 10×8) ÷ 40 = 140 ÷ 40 = 3.5 days. Option A is the unweighted average, which ignores that three-quarters of the changes came from the faster team. This tests weighting by volume, and noticing the portfolio mean conceals that Team B's changes take four times as long — worth investigating before the number is quoted anywhere.

**Question 6 (moderate) — Comparing supplier pricing models**

Model X: £4,000/month flat, including 10,000 build minutes, then £0.30/minute. Model Y: £0.55/minute flat rate, no fixed fee. Current usage: 14,000 minutes/month. Ask which model is cheaper, and by how much.

- A) Model X, by £1,500
- B) Model Y, by £1,500
- C) Model X, by £2,500
- D) They cost the same

**Correct answer: C**

**Explanation:** X: £4,000 + (4,000×£0.30) = £5,200. Y: 14,000×£0.55 = £7,700. Difference £2,500. This tests computing both totals fully before subtracting — a right conclusion with the wrong magnitude still misstates a business case, and the crossover point (around 9,500 minutes) is worth computing too, since a shift in usage could flip the recommendation.

**Question 7 (moderate) — On-call load fairness**

A 42-week rota covers 6 engineers; two have agreed adjustments limiting them to 4 weeks each. The rest is shared equally among the other 4. Ask how many weeks each of those 4 carries, and what percentage more that is than the all-equal share of 7 weeks.

- A) 8.5 weeks each — about 21% more
- B) 8 weeks each — about 14% more
- C) 9 weeks each — about 29% more
- D) 8.5 weeks each — about 14% more

**Correct answer: A**

**Explanation:** Remaining weeks: 42 − 8 = 34, across 4 engineers = 8.5 weeks each; excess over the all-equal share of 7 is 1.5 ÷ 7 ≈ 21%. This tests quantifying the load an agreed adjustment shifts onto others, so the rest of the rota stays consensual and a genuine capacity gap (a seventh person needed) is recognised rather than absorbed silently.

**Question 8 (moderate) — Error budget across a quarter**

A service's monthly error budget is 43.2 minutes (99.9% over 30 days). Month one consumed 12 minutes; month two consumed 58 minutes. The team asks to "borrow" month three's budget to keep releasing at full speed. Ask what the data supports.

- A) The quarter's total budget is 129.6 minutes and only 70 are used, so full-speed releasing is fine.
- B) The objective is monthly: month two breached it (58 > 43.2), the breach cannot be offset by other months, and month three should run with heightened caution and a review of what caused month two's consumption.
- C) Month two's overrun means all releases must stop for a quarter.
- D) The error budget concept no longer applies once breached.

**Correct answer: B**

**Explanation:** 58 minutes against a 43.2-minute monthly budget is a breach of month two's own objective, regardless of month one's headroom — a monthly objective does not pool across the quarter unless it says so. Option A silently redefines the measurement window to rescue a conclusion. This tests reading a measurement window as part of a target's definition, before computing anything against it, and pairing the correct reading with a proportionate response.

**Question 9 (hard) — Capacity runway with changing growth**

A shared database cluster is at 3.0 TB of 5.0 TB capacity, growing 0.25 TB/month; a new service joining next month adds a further 0.15 TB/month from its first month. Policy requires expansion to begin at 80% utilisation, and expansion takes two months. Ask in which month the work must begin to finish before the threshold is crossed.

- A) Work must begin in month 2; feasible with a month to spare
- B) Work must begin by month 0 (now); only just feasible
- C) Work must begin in month 1; exactly feasible
- D) The threshold will not be crossed for six months, so month 4 is fine

**Correct answer: C**

**Explanation:** Threshold 4.0 TB; headroom 1.0 TB. From month 1, growth is 0.25+0.15=0.40 TB/month: 3.40 TB end of month 1, 3.80 TB end of month 2, crossing during month 3. Two-month expansion starting at month 1 completes at end of month 2, just before the crossing. This tests recomputing a runway the moment demand changes shape — the old forecast (option D, based on 0.25 TB/month alone) dies the day the new service signs up.

**Question 10 (hard) — Reading a portfolio metrics table**

Alpha: 180 deploys, 5% change failure rate, 30-minute mean restore time, 99.9% target, 99.92% achieved. Beta: 60 deploys, 5%, 120 minutes, 99.9% target, 99.88% achieved. Gamma: 240 deploys, 2.5%, 45 minutes, 99.5% target, 99.7% achieved. Ask which team caused the most failed changes, and which team's profile best explains a missed availability target.

- A) Gamma caused most failures; Beta's long restore time explains its miss
- B) Alpha caused most failures; Beta's failure rate explains its miss
- C) Alpha and Beta tie on failures; Gamma missed its target
- D) Alpha caused most failures; Beta's long restore time explains its miss

**Correct answer: D**

**Explanation:** Failed changes: Alpha 5%×180=9; Beta 5%×60=3; Gamma 2.5%×240=6 — Alpha causes most. Only Beta missed its target (99.88<99.9); with the same failure rate as Alpha, the discriminator is Beta's 120-minute restore time against Alpha's 30. This tests recognising that availability misses come from failure count times duration, so a slow-recovery team needs restore capability investment, not release gating.

**Question 11 (hard) — Compound growth in platform costs**

A platform cost line is £20,000/month, growing 8% per quarter, compounding. Ask for the projected monthly cost in one year (four quarters), to the nearest £500.

- A) £26,400
- B) £27,000
- C) £27,200
- D) £25,600

**Correct answer: B**

**Explanation:** 1.08⁴ ≈ 1.3605; £20,000 × 1.3605 ≈ £27,210, which rounds to £27,000 to the nearest £500. Option A wrongly treats four quarters of 8% as 32% simple growth. This tests compounding correctly and applying a rounding instruction once, at the end — a forecast quoted at the wrong precision invites either false confidence or needless alarm.

**Question 12 (hard) — Business case for a process investment**

Investing 120 engineer-days in self-service environment provisioning. Currently: 25 requests/month, each costing 1.5 platform-engineer days and imposing 6 working days' wait on the requesting team. Future: 90% self-served instantly; the remaining 10% still cost 1.5 days each. Ask, measured in platform-engineer effort alone, how many months the investment takes to pay back.

- A) About 2.5 months
- B) About 3.6 months
- C) About 4.8 months
- D) About 8 months

**Correct answer: B**

**Explanation:** Current effort 25×1.5=37.5 days/month; future 2.5×1.5=3.75 days/month; saving 33.75 days/month; payback 120÷33.75≈3.6 months. This tests keeping effort savings (which pay back the build) separate from the larger, differently-categorised benefit — roughly 150 team-days of waiting removed per month — rather than conflating the two in a business case.

### Administration tips

- Score for whether the candidate builds a portfolio total from each team's own volume before aggregating, rather than averaging rates directly.
- Note whether the candidate reads a measurement window (monthly, quarterly, per-sprint) as part of a target's definition before calculating against it.
- Watch for whether both sides of a comparison (two pricing models, before/after states) are computed fully before a conclusion is drawn.
- Score for whether the candidate recomputes a capacity runway when demand changes shape, rather than reusing an old growth rate.
- Note whether a rounding instruction is applied once, correctly, at the end of a multi-step calculation.

### Common pitfalls to watch for when scoring

- Crediting an unweighted average of team rates or averages where volumes differ.
- Missing a linear projection of a stated compound growth rate.
- Rewarding a total-cost conclusion where a unit-cost or per-deployment figure was the one that mattered.
- Accepting a conclusion that redefines or ignores a stated measurement window.
- Missing a capacity runway computed on a stale growth rate after demand has changed.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, interprets and evaluates written material of the kind this role deals with daily — extracts from technology strategies, spend approval guidance, supplier contract summaries, audit findings, policy consultations, and correspondence from senior stakeholders. The dominant format presents a passage followed by statements to classify True, False, or Cannot Say. Other formats test inference, main-point identification, and judging which formulation is clearest. The candidate must answer only from the passage.

For a lead DevOps engineer on the management track, verbal precision is a leadership instrument: knowing exactly what a governance document permits before committing teams to a course, separating what an audit finding evidences from what it infers, and writing strategy papers whose every qualifier will be quoted back.

### How this assessment maps to the role

- **Literal comprehension** maps to **Modern development standards** and **Information security**: reading mandates, scopes and exemptions precisely enough to resolve interpretive disputes correctly.
- **True/False/Cannot Say discipline** maps to the product ownership and **Service support** duties: separating evidence from assertion in incident reports, supplier claims and delivery updates.
- **Inference** maps to **Systems design** and **Systems integration**: sound inference, and recognising the point where it must give way to a clarifying question.
- **Clear-writing judgement** maps to the duty to provide technical leadership through coaching and mentoring: the standard applied to reviewing others' writing becomes their standard.
- **Identifying the main point** maps to the **strategic direction** contribution: extracting a consultation's central claim from its surrounding qualification.

### Practice questions

**Passage 1 (for Questions 1–3).** "Departmental spend approval is required for any new technology commitment exceeding £100,000 over the contract lifetime. Renewals of existing commitments are exempt from approval provided the renewal value does not exceed the previous contract value by more than 10%. Cloud consumption commitments are treated as new commitments at each renewal, regardless of value. Where approval is required, teams must allow a minimum of 15 working days for the approval process."

**Question 1 (easy) — True/False/Cannot Say**

Statement: "A renewal of a £200,000 software licence at £215,000 is exempt from spend approval."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** 10% of £200,000 is £20,000, giving a ceiling of £220,000; £215,000 is within it, and the item is a licence, not a cloud consumption commitment, so the carve-out does not apply. This tests converting a percentage condition to an absolute figure before judging a statement — a question a policy owner will be asked often.

**Question 2 (easy) — True/False/Cannot Say**

Statement: "A cloud consumption commitment renewing at 5% above its previous value is exempt from spend approval, provided it is under £100,000."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** Cloud consumption commitments are always treated as new, so the renewal exemption cannot apply, and the 5% figure is irrelevant. As a new commitment under £100,000, this rule does not require approval — but the passage never states that commitments under £100,000 are exempt from all approval routes. This tests the fine distinction between "this rule doesn't require it" and "nothing requires it" — exactly the gap where non-compliance hides.

**Question 3 (moderate) — True/False/Cannot Say**

Statement: "A team that needs approval for a new £150,000 commitment and wants to sign within 10 working days will be unable to sign on time through the standard process."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The commitment is new and exceeds £100,000, so approval is required, and the passage sets a *minimum* of 15 working days — which guarantees the process cannot be assumed shorter than 10. This tests reading "minimum" as a guarantee rather than an estimate, and matching a statement's scope ("through the standard process") to the passage's own scope.

**Passage 2 (for Questions 4–6).** "Internal audit reviewed the department's deployment controls across five services. In three services, production changes were consistently traceable to approved tickets. In one service, 12 of 250 sampled changes could not be matched to an approved ticket; the service team states that these were emergency fixes, but the emergency process log records only 5 emergency changes in the period. In the remaining service, sampling was not possible because deployment logs are retained for only 30 days. The audit rates the department's overall deployment control environment as 'requires improvement' and recommends extending log retention to 12 months across all services."

**Question 4 (moderate) — True/False/Cannot Say**

Statement: "In the service with unmatched changes, at least 7 changes were neither matched to an approved ticket nor recorded in the emergency process log."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** Even under the most generous assumption — that all 5 logged emergencies are among the 12 unmatched — at least 12 − 5 = 7 remain unexplained. This tests checking whether an offered explanation has the capacity to cover the whole discrepancy, using the most generous assumption first, so the conclusion survives challenge.

**Question 5 (moderate) — True/False/Cannot Say**

Statement: "The department's deployment controls failed in two of the five services reviewed."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** One service shows a clear control weakness, but the fifth service could not be sampled at all — absence of evidence that controls worked is not evidence that they failed. This tests keeping "found a failure", "couldn't test", and "the testing infrastructure is deficient" as three separate categories, which matters directly when drafting a management response to audit findings.

**Question 6 (moderate) — Inference**

Ask for the best-supported conclusion from Passage 2.

- A) The service team with unmatched changes fabricated its emergency-fix explanation.
- B) The department cannot currently demonstrate full deployment control traceability, and its ability to evidence controls is limited in at least one service by log retention.
- C) Extending log retention to 12 months will fix the control weaknesses.
- D) The three fully traceable services have the best engineering teams.

**Correct answer: B**

**Explanation:** B states only what is established; A overreaches from "insufficient explanation" to "dishonest"; C converts a recommendation into a guaranteed outcome that does not touch the approval-discipline weakness; D invents a comparison. This tests the general pattern in audit-adjacent reading — the supported conclusion is usually about what can and cannot be demonstrated, not about motives or guaranteed fixes.

**Passage 3 (for Questions 7–9).** "The proposed engineering strategy commits the department to consolidating onto a single deployment platform within two years. The paper argues this will reduce duplicated tooling effort, currently estimated at 20% of platform engineering time, and improve security posture through consistent controls. Funding covers migration of the eight services on supported legacy platforms. Three further services run on platforms that are already out of support; their migration is described as 'urgent but unfunded, subject to the next spending review'. The paper notes that consolidation increases concentration risk: an outage of the single platform would affect all services simultaneously. It proposes mitigating this through multi-region deployment and a tested platform recovery capability, and states that the residual risk 'is judged acceptable by the design authority, subject to annual review'."

**Question 7 (moderate) — True/False/Cannot Say**

Statement: "The strategy paper claims consolidation will reduce duplicated tooling effort by 20%."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** 20% describes the current size of the duplicated-effort problem, not the promised reduction, which the passage never quantifies. This tests catching a "quantity transplant" — a true number attached to the wrong noun — one of the most common and consequential distortions when strategy papers are summarised upwards.

**Question 8 (hard) — True/False/Cannot Say**

Statement: "All eleven services requiring migration have funded migration paths."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Eight services are funded, three (the already out-of-support ones) are "urgent but unfunded" — not all eleven are funded, contradicted. This tests noticing that funding follows the easier population while the most urgent, at-risk one waits for a spending review — a prioritisation inversion the passage presents without comment, which a lead reviewing the strategy should flag explicitly.

**Question 9 (hard) — Evaluating a risk statement**

Ask which reading of the concentration-risk position is most accurate, based only on Passage 3.

- A) The concentration risk has been eliminated by multi-region deployment.
- B) The risk is acknowledged, mitigations are proposed, and a named authority has accepted the residual risk with a review cycle — but the passage does not state that the mitigations are yet in place or tested.
- C) The design authority has rejected the strategy because of concentration risk.
- D) The concentration risk makes consolidation inadvisable.

**Correct answer: B**

**Explanation:** The paper "proposes mitigating" (not "has mitigated") and states the residual risk "is judged acceptable... subject to annual review" — an acceptance with conditions. A upgrades mitigation to elimination, which mitigations by nature do not achieve; C contradicts the recorded acceptance; D substitutes the reader's own risk appetite for the evidence. This tests tracking verb tense and force — the difference between mitigations proposed and mitigations in place defines what work a team inheriting the strategy has actually been signed up for.

**Question 10 (moderate) — Clear-writing judgement**

Reviewing a senior engineer's draft announcement of a new standard, ask which version is most effective.

- A) "Following extensive stakeholder consultation and in alignment with our strategic direction of travel, it has been determined that containerisation approaches should, where practicable, be harmonised going forward."
- B) "From 1 October, all new services must use the approved container base images (list linked below). Existing services must migrate by 31 March. Exemptions: apply via the design authority. Questions: #platform-standards channel."
- C) "We are excited to announce a transformative change to our container journey!"
- D) "Teams should probably start thinking about using the standard base images at some point soon, unless it doesn't suit their service."

**Correct answer: B**

**Explanation:** B answers what is required, from when, what happens to existing work, and what to do if it does not fit. A mandates nothing despite its length; C is tone without substance; D converts a standard into an optional suggestion with its own escape clause. This tests judging an announcement by decidability — whether every sentence lets a reader act — rather than brevity or tone alone.

**Question 11 (hard) — Comprehension of contractual language**

Contract summary: "The provider guarantees 99.9% monthly availability of the build service, measured at the provider's service boundary. Service credits of 10% of the monthly fee apply for each 0.1 percentage point below the guarantee, capped at 50% of the monthly fee. Credits are the sole remedy for availability failures. Scheduled maintenance, notified 5 working days in advance and not exceeding 4 hours per month, is excluded from the availability calculation." Ask which statement is correct.

- A) If availability falls to 99.5% in a month, the department receives a 40% service credit and may also claim consequential losses.
- B) A 6-hour maintenance window notified 10 working days in advance is fully excluded from the availability calculation.
- C) If availability measured at the department's network edge falls below 99.9% but the provider's boundary measurement shows 99.95%, no credit is due under this clause.
- D) Credits are capped at 40% of the monthly fee.

**Correct answer: C**

**Explanation:** A fails because credits are "the sole remedy"; B fails because the exclusion caps duration at 4 hours regardless of notice; D misstates the cap (50%, not 40%). C is correct: availability is measured at the provider's boundary, so degradation between there and the department is invisible to the guarantee. This tests reading each qualifying phrase — especially the measurement point — as a live constraint, since each was drafted to limit the promise.

**Question 12 (hard) — Main point of a strategic consultation**

"This consultation seeks views on the proposed Engineering Excellence Framework. The framework would not mandate specific tools. Instead, departments would self-assess annually against outcome-based criteria — deployment safety, recovery capability, supply chain assurance — with results shared across government to identify where support is most needed. Self-assessments would not be used for departmental league tables or funding decisions in the first two years, while the criteria are calibrated. Views are particularly sought on whether the criteria adequately reflect the differing scales of departments' engineering functions." Ask which statement best captures the main point.

- A) The framework mandates standard tools across government engineering functions.
- B) The framework proposes annual outcome-based self-assessment with cross-government sharing to target support, explicitly not linked to league tables or funding for two years, and the consultation especially wants views on whether the criteria suit different scales of engineering function.
- C) The framework will rank departments to determine funding.
- D) The consultation has concluded that current engineering practice is inadequate.

**Correct answer: B**

**Explanation:** B preserves the mechanism, purpose, temporal safeguard, and the specific question asked. A contradicts "would not mandate specific tools"; C inverts the safeguard; D invents an unstated conclusion. This tests producing a complete, calibrated summary — the difference between calm engagement with a consultation and needless alarm circulated internally.

### Administration tips

- Score for whether the candidate converts a percentage condition to an absolute figure before judging a statement about it.
- Note whether the candidate distinguishes "this specific rule doesn't require it" from "nothing requires it" when a passage's scope is narrower than a general claim.
- Watch for whether the candidate checks an offered explanation's capacity to cover a whole discrepancy, using the most generous assumption.
- Score for whether verb tense and force (proposes vs guarantees, is judged vs has been confirmed) are tracked accurately.
- For clear-writing items, score on decidability — whether every sentence lets a reader act — not on tone or brevity alone.

### Common pitfalls to watch for when scoring

- Crediting a statement marked True on the strength of outside professional knowledge rather than the passage.
- Missing when a candidate treats "could not be tested" as equivalent to "failed".
- Rewarding an inference that upgrades a proposed mitigation to an implemented, tested one.
- Accepting a contractual reading that ignores where a figure is measured (provider boundary vs network edge).
- Missing a main-point summary that drops a qualifier such as "in the first two years" or "where approval is required".

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses. Responses are scored against the judgement of experienced practitioners and the behaviours UK government digital organisations value: user focus, collaboration, ownership, sound escalation, developing others, and inclusion.

Typical format: 10 to 20 scenarios, often untimed or generously timed.

For a lead DevOps engineer on the management track, the SJT examines the judgement calls that define the job: line management (a struggling senior engineer, an underperformer others compensate for, conflict between two teams), product ownership (a stakeholder demanding an uncapacitated commitment, a strategic bet undermined by pilot data), and organisational citizenship (a peer's team heading into a known trap, a governance decision disagreed with, credit and blame flowing to the wrong places).

### How this assessment maps to the role

- **Ownership and escalation judgement** map to **Availability and capacity management** and **Service support**: knowing which problems to resolve on one's own authority, which to escalate, and keeping accountability clear across teams.
- **Developing others** maps to the duty to provide technical leadership through coaching and mentoring: growing senior engineers into leaders, addressing underperformance honestly, and delegating real authority.
- **Collaboration and influence** map to **Development process optimisation** and leading the sharing of knowledge and good practice: improving processes across teams not directly managed.
- **Integrity under pressure** maps to **Information security** and **Modern development standards**: whether a control or standard survives commercial, political or schedule pressure.
- **User focus** maps to the **User focus** skill: guardianship of user needs against internal convenience, stakeholder desire and sunk costs.

### Practice questions

**Question 1 (easy) — A senior engineer struggling with a new leadership role**

A strong engineer promoted three months ago into a senior role leading a workstream has excellent technical output, but two engineers report workstream meetings are disorganised and decisions keep reopening; the senior engineer has not raised concerns. Ask for the most effective response.

- A) Wait — they are technically excellent, and leadership skills come with time.
- B) Raise it in their next one-to-one: share the specific observations, ask for their view of how the workstream is going, and agree a development plan — for example facilitation coaching, pairing them with an experienced chair, and a follow-up review.
- C) Quietly attend their meetings and take over facilitation when discussions drift.
- D) Move the meeting-chairing duties to another engineer so they can focus on technical work.

**Correct answer: B**

**Explanation:** B surfaces specific, behavioural observations, invites self-assessment first, and treats the gap as a skills gap with a plan. A mistakes hope for development; C rescues the meeting but publicly undermines the leader; D quietly demotes without honesty. This tests addressing performance early, specifically, and developmentally, in someone whose success is squarely the candidate's own development responsibility since they made the promotion.

**Question 2 (easy) — Stakeholder pressure to commit beyond capacity**

At a programme board, a senior stakeholder asks for a commitment to deliver a new integration by end of next quarter; capacity data shows existing commitments already consume the quarter, and the new work needs roughly 40% of one team's capacity. Ask for the most effective response.

- A) Commit — capacity can probably be found somehow, and refusing in public is career-limiting.
- B) Refuse flatly — the data says no.
- C) State clearly the intent to support the outcome, that current commitments consume the capacity, and that options will be brought to the board within a week (descoping, trading against an existing commitment, a later start) so the board can choose with full information.
- D) Commit in the meeting, then quietly deprioritise the least visible existing commitment to make room.

**Correct answer: C**

**Explanation:** C converts a yes/no ambush into a structured trade-off, made by the right forum with real numbers, on a stated timescale. A creates an overcommitment spiral funded by teams' evenings; D makes the trade-off in secret, so the board believes everything is on track while a commitment quietly dies. B is factually defensible but fails the influence test — flat refusal without options invites the board to overrule. This tests turning pressure into a structured choice rather than a yes, a no, or a hidden trade-off.

**Question 3 (moderate) — An underperformer the team is quietly carrying**

A mid-level engineer has been underperforming for months — late work, repeated basic errors — and two stronger engineers have been quietly redoing parts of it to keep the sprint on track. The previous lead never raised it formally, and the engineer seems unaware there is a problem. Ask for the most effective response.

- A) Continue as is — the team is compensating successfully and raising it now seems unfair given the previous lead's silence.
- B) Begin a formal performance process immediately with documentation of the past months' failings.
- C) Have an honest, private conversation: describe the gap between expectations and current work with concrete examples, acknowledge that this feedback should have reached them sooner, understand their situation, and agree a clear, supported improvement plan with defined expectations and check-ins — while thanking and relieving the compensating engineers.
- D) Redistribute their responsibilities so their work no longer matters to delivery.

**Correct answer: C**

**Explanation:** C fixes the triple failure — the engineer denied information to improve, the compensating engineers paying a hidden tax, and the team's standards becoming theoretical — while the acknowledgement resets expectations fairly before anyone is judged against them. B is procedurally weak, built on never-communicated concerns; A perpetuates the harm; D hides the problem inside the org chart. This tests delivering honest feedback kindly and early, protecting the whole team's fairness rather than only the underperformer's or only the compensating engineers'.

**Question 4 (moderate) — Conflict between two of the candidate's teams**

Team One wants mandatory progressive-rollout stages on a shared pipeline after a bad incident; Team Two says the added lead time would cripple fast iteration on a low-risk internal service. The dispute has turned personal, with each team calling the other "reckless" or "bureaucratic" in retrospectives. Ask for the most effective response.

- A) Decide personally and mandate one approach.
- B) Bring the teams together to separate real requirements from positions: agree what risk each service tier genuinely carries, shape a tiered policy — stronger safeguards for high-risk services, a lighter path for low-risk ones — and address the interpersonal deterioration directly with both teams.
- C) Let the teams keep separate pipeline configurations and avoid the argument.
- D) Side with Team One — safety concerns always win after an incident.

**Correct answer: B**

**Explanation:** B converts positions into requirements, produces a policy that scales to future services, and treats the name-calling as a first-class problem rather than background noise. A resolves the object dispute but leaves the relationship broken; C fragments a shared asset; D uses recency as a policy engine. This tests resolving conflict by elevating it to shared requirements and building durable policy rather than a one-off verdict.

**Question 5 (moderate) — A championed strategy's pilot returns bad news**

A strategic migration championed and funded on the strength of the candidate's own business case has pilot results showing effort roughly double the estimate and two promised platform features less mature than claimed. Full rollout across six services starts in three weeks; a progress report is due to the programme board on Friday. Ask for the most effective response.

- A) Proceed on schedule — pilots always hit teething problems, and pausing would embarrass the programme.
- B) Report the pilot results accurately on Friday with a revised plan: pause the rollout start, re-estimate with real pilot data, press the vendor on the immature features, and present the board with updated options — including the option that the case no longer holds.
- C) Report the pilot as broadly successful and quietly extend the rollout timeline to absorb the overrun.
- D) Cancel the migration — the estimates were wrong, so the strategy is discredited.

**Correct answer: B**

**Explanation:** B spends the pilot's cheap early truth honestly, re-costing and re-negotiating rather than defending the original case, and preserves the board's trust that reports mean what they say. A doubles the bet; C is a misrepresentation that compounds with every subsequent report; D overcorrects without the analysis the re-estimate exists to provide. This tests intellectual honesty about one's own initiative when the evidence turns against it.

**Question 6 (moderate) — Most and least effective: a peer lead's team heading into a known trap**

A peer lead's team, elsewhere in the organisation, is about to adopt a build orchestration approach the candidate's own teams abandoned last year after painful problems — discovered from a circulated design document, with no request for input. Ask for the most and least effective response among: (1) contact the peer lead directly, sharing the data and offering a joint session, while leaving the decision theirs; (2) say nothing — it is their decision; (3) comment on the circulated document, copying both teams' engineers, listing the reasons the approach failed; (4) mention it to the shared head of profession, suggesting they steer the peer's team away.

- A) Most effective: 1; least effective: 2
- B) Most effective: 1; least effective: 4
- C) Most effective: 3; least effective: 2
- D) Most effective: 1; least effective: 3

**Correct answer: A**

**Explanation:** 1 offers experience peer-to-peer, with data and humility about context, leaving decision rights where they belong. Among 2, 3 and 4: 3 is clumsy but transparent; 4 goes around the peer without ever speaking to them — corrosive to trust; but 2 is least effective, since it guarantees the organisation pays twice for the same lesson to protect a notional etiquette that option 1 shows is easy to respect. This tests recognising that knowledge kept siloed out of misplaced politeness is a failure of the duty to lead the sharing of good practice.

**Question 7 (hard) — Security disclosure versus product deadline**

A penetration test ahead of a major public launch in ten days reports a high-rated vulnerability: complex to exploit, but would expose a subset of citizens' personal data if exploited. The fix takes seven days plus three days' retest, risking the launch date. A programme director, under ministerial expectation, asks whether the launch can proceed with the fix following "shortly after". Ask for the most effective response.

- A) Agree — exploitation is complex, ten days of exposure is a small window, and the ministerial commitment matters.
- B) State that launching with a known high-rated exposure of citizen data is not a risk that can be recommended; propose the realistic options — delay by the few days the fix requires, launch with the vulnerable component disabled or degraded if technically separable, or launch to a limited cohort that reduces exposure — and ensure the decision, if made against the recommendation, is taken explicitly at the accountable level with the risk formally recorded.
- C) Refuse to discuss options and escalate directly to the department's security team to block the launch.
- D) Quietly instruct the team to begin the fix but tell the programme director the launch can proceed, assuming the fix will land in time.

**Correct answer: B**

**Explanation:** B gives an unambiguous professional recommendation while generating real options that might dissolve the dilemma, and routes risk acceptance at this consequence level to its accountable owner, formally recorded. A normalises "complex exploitation" into "acceptable exposure"; C abandons influence for procedure before exploring options; D is a deception with a countdown timer. This tests anchoring on user protection while doing the craft work of generating options, with explicit accountable decision-making as the backstop.

**Question 8 (hard) — Credit flowing to the wrong place**

At a senior showcase, a head of profession warmly credits the candidate personally for a compliance-checking capability that halved audit preparation time — when in fact the design and advocacy came from a senior engineer watching from the audience, who is currently weighing an external job offer. Ask for the most effective response.

- A) Accept the praise gracefully, and thank the engineer privately later.
- B) Redirect the credit immediately and specifically: name the engineer as the capability's designer and driving force, describe what they did, and let the room's recognition land where it belongs — following up afterwards to ensure the attribution sticks in any written record.
- C) Say "it was a team effort" and move on.
- D) Interrupt to explain that only the governance work was done personally.

**Correct answer: B**

**Explanation:** B converts vague warmth into visible career capital at exactly the moment a retention decision may be forming, and the written-record follow-up ensures the attribution outlives the meeting. A banks the engineer's work in the wrong account, since the engineer watched the public version too; C rewards no one specifically; D makes the moment self-referential. This tests recognising that at this level, credit is largely distributed rather than earned, and the leader is the one who must distribute it accurately.

**Question 9 (hard) — A governance decision against professional judgement**

A design authority rules that all product lines, including the candidate's, must adopt a centrally chosen observability platform, despite evidence presented that it lacks two capabilities their teams depend on and costs triple the central estimate. The ruling is final; teams are angry, and a senior engineer proposes "malicious compliance" — migrate exactly as instructed and let the failures make the case. Ask for the most effective response.

- A) Adopt the platform in good faith: plan the migration honestly, engineer the best available mitigations for the capability gaps, register the risks and costs formally so the record is accurate, and revisit the decision through governance if the predicted problems materialise — telling the teams exactly this plan and why.
- B) Endorse the malicious compliance plan — the fastest way to reverse a bad decision is to let it fail visibly.
- C) Delay migration indefinitely through slow-rolled planning while formally appearing to comply.
- D) Tell the teams the decision is wrong but must be followed, and that their frustration is justified.

**Correct answer: A**

**Explanation:** A is full-faith compliance with full-honesty records — mitigations engineered seriously, risks registered accurately, and the legitimate route to revisit the decision made visible to the teams. B weaponises the services' own reliability against citizens to score a governance point; C is B with plausible deniability; D validates the feeling and abandons leadership. This tests institutional integrity after losing an argument through the right forum, and honest records over quiet sabotage.

**Question 10 (hard) — Building an inclusive senior pipeline**

An open senior engineer position has two internal candidates: M, confident and vocal, who has repeatedly asked for the role and matches the "obvious" profile; and J, quieter, from a group under-represented in the senior cohort, with a delivery record at least as strong but who has not put themselves forward and said, when sounded out, "I'm probably not ready." The senior cohort currently shares similar backgrounds. Ask for the most effective response.

- A) Appoint M — they want it, they fit the profile, and J has self-selected out.
- B) Appoint J — the cohort needs diversity and their record justifies it.
- C) Run a fair, structured process against defined role criteria and actively ensure J genuinely competes: tell them directly and specifically why their record makes them a credible candidate, address the "not ready" self-assessment with evidence, and offer the same preparation support to both — then appoint on merit against the criteria.
- D) Delay the decision and hire externally to avoid choosing between them.

**Correct answer: C**

**Explanation:** C fixes the process rather than rigging the outcome — structured criteria strip the "obvious profile" advantage, direct evidence-based feedback addresses miscalibrated self-assessment without lowering any bar, and identical preparation support keeps the competition genuinely fair. A launders a structural bias through the language of enthusiasm; B corrects demography by abandoning the fairness that makes the correction defensible; D avoids the decision entirely. This tests recognising that a confidence-gated process reproduces its own existing cohort, and that fixing the process is what makes merit and inclusion compatible rather than opposed.

**Question 11 (hard) — Most and least effective: incident accountability across teams**

A serious outage takes three services down for four hours. The immediate cause: a certificate expiry in a shared platform-owned component; renewal automation had been failing silently for weeks, and its alert was accidentally disabled during an unrelated cleanup by an engineer who realises this mid-incident and is distraught. A programme director emails: "who is responsible?" Ask for the most and least effective response among: (1) name the engineer whose cleanup disabled the alert, since that is factually where the chain began; (2) reply that responsibility sits with the candidate as accountable lead, commit to a blameless post-incident review of the systemic failures, and separately support the distraught engineer, noting their honesty shortened the incident; (3) reply that it was a process failure and no individual or team is responsible; (4) accept accountability publicly, but privately move the engineer off platform work as a precaution.

- A) Most effective: 2; least effective: 1
- B) Most effective: 2; least effective: 4
- C) Most effective: 3; least effective: 1
- D) Most effective: 2; least effective: 3

**Correct answer: A**

**Explanation:** 2 holds accountability at the right level, treats the material (silent automation failure, single unmonitored alert, no expiry pre-warning) as systemic, and protects the person whose honesty shortened the incident — the strongest determinant of whether the next near-miss is reported early. Among 1, 3 and 4: 3 is evasive but harms no individual; 4 punishes honesty privately while claiming accountability publicly; 1 is worst, since it names the most junior person in a chain that began in unmonitored automation design years earlier, and guarantees the next engineer who realises their mistake mid-incident says nothing. This tests recognising that a lead's post-incident behaviour is the strongest culture-setting broadcast available.

### Administration tips

- Score for whether the candidate identifies whose decision a scenario belongs to and generates a structured third option rather than accepting a false binary.
- Note whether a response protects the channel by which bad news, mistakes and near-misses reach a leader.
- Watch for quiet, unannounced deceptions — a silently dropped commitment, a softened pilot report, a private punishment behind a public acceptance of accountability.
- Score for whether the candidate redirects credit and holds accountability at the correct level, in each direction.
- Note whether an inclusion scenario is resolved by redesigning the process rather than by either ignoring demography or abandoning merit-based process.

### Common pitfalls to watch for when scoring

- Crediting an option that makes a trade-off in secret rather than surfacing it to the accountable forum.
- Missing when a candidate imposes a personal verdict on a resolvable conflict instead of building durable shared policy.
- Rewarding advocacy for a candidate's own initiative over honest evidence when a pilot or trial returns bad news.
- Accepting silence or over-politeness that lets a peer repeat an expensive, known mistake.
- Missing misdirected credit or deflected accountability — both are scored as failures, in opposite directions.

## Conclusion

This guide has worked through cross-team pattern recognition and dependency reasoning, rule-scoping across a standards matrix, deadline clauses bound to their correct event, and risk measured by likely realisation rather than review date; portfolio-level numeracy — weighted averages, unit cost, compound growth, capacity runway under changing demand, and business cases with cleanly separated categories of benefit; the boundary between what a passage guarantees, contradicts, and merely proposes or reports; and the situational judgement calls that define lead-management work — protecting the channel by which bad news arrives, generating a third option where a scenario offers a false binary, redirecting credit and holding accountability at the right level, and fixing a process rather than either ignoring or overriding it when inclusion is at stake.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around escalation, evidence, and whether a response fixes both the instance and the underlying system. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
