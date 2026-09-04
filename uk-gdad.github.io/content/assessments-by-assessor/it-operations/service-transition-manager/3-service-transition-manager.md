# Service Transition Manager - Psychometric Assessments

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for service transition manager, within the UK Government Digital and Data profession. The material is job-specific: it draws on the artefacts a service transition manager genuinely handles — service acceptance criteria, go-live recommendations, early-life support plans, change impact assessments, incident trend reports, configuration baselines, and readiness evidence from multiple teams — and the judgements genuinely made, such as determining whether a product is fit for purpose, recommending go or no-go with defensible reasoning, and ensuring the wider IT operations community actually understands the acceptance criteria it will be held to.

This role sits at the decision point of every transition. Analysts gather evidence; suppliers make claims; project teams push for dates; operations teams brace for what lands on them. A service transition manager weighs all of it and makes a recommendation that others rely on. That is a role built on accurate reasoning under pressure: spotting the inconsistency in an evidence pack, reading a trend table correctly before it becomes an incident spike, extracting the exact commitment from a carefully worded supplier report, and choosing the most effective course of action when a go-live decision is contested. Cognitive, numeric, verbal, and situational judgement assessments map directly onto those four demands.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why it matters at this level, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief — a candidate who reasons well but lands on the wrong answer is a different signal from one who guesses, and a short conversation surfaces which. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the mental processes this role demands, using realistic workplace material rather than abstract puzzles. For a service transition manager, that means items built from acceptance evidence, dependency plans, configuration baselines, incident data, and the competing constraints of a live transition — tasks that mirror the role's real reasoning: detecting inconsistencies, deducing consequences from rules, sequencing under dependencies, and prioritising when everything claims to be urgent.

The typical format is an online, timed test of 15 to 30 minutes with 15 to 30 multiple-choice questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, and many platforms adapt difficulty to the candidate's performance. Most platforms provide short ungraded warm-up questions so the candidate can learn the interface without cost.

Cognitive assessment matters for transition roles because the role's professional output is judgement, and judgement is only as good as the reasoning underneath it. Determining whether a product is fit for purpose means integrating evidence from testing, security, operations, and users, and checking it for gaps and contradictions. Making a go-live recommendation means reasoning about risk, dependency, and consequence — and defending it under interrogation. Assessing readiness against agreed service acceptance criteria is systematic rule-application at scale. A cognitive assessment samples those processes in miniature, under time pressure, with a right answer — which is exactly what makes it predictive.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Error checking** maps to the core duty of assessing readiness against agreed service acceptance criteria: fitness-for-purpose decisions rest on finding the mismatch, the gap, or the stale evidence in a pack assembled by people who believe it is complete.
- **Logical deduction** maps to the **Change management** skill — analysing and assessing the impact of change — and to the **Service management framework knowledge** skill: reasoning correctly from lifecycle rules and dependency chains to their consequences is applied deduction.
- **Pattern recognition** maps to the **Problem management** skill: initiating and monitoring actions to investigate patterns and trends means seeing the structure in incident data before it becomes an outage, and knowing when to consult specialists.
- **Prioritisation** maps to the **Incident management** skill — diagnosing and prioritising incidents — and to the daily reality of co-ordinating a transition: ranking competing demands by impact and urgency, defensibly.
- **Applied problem solving** maps to the **Service focus** skill: seeing the bigger picture across groups of services and investigating how to get the best from underlying services requires decomposing messy, interconnected situations into tractable reasoning.
- **Verification discipline** maps to the **Asset and configuration management** skill: maintaining secure configuration and accurate information, and verifying the location and state of IT assets, is error checking institutionalised.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in a configuration baseline**

The configuration baseline requires every production server record to follow the naming pattern: environment code (P for production), two-letter service code, hyphen, then a three-digit number — for example, PCS-001 for the case service. A baseline extract shows:

1. PCS-001
2. PCS-002
3. PDM-001
4. SCS-003
5. PDM-002

Which entry breaks the pattern for a production baseline?

- A) Entry 2
- B) Entry 3
- C) Entry 4
- D) Entry 5

**Correct answer: C**

**Explanation:** State the rule in words before scanning: first character P, then two letters, hyphen, three digits. Entries 1, 2, 3 and 5 all begin with P and follow the format. Entry 4 begins with S — either a staging server has been recorded in the production baseline, or the record is misnamed; both possibilities matter. This tests verbalising a pattern and then testing each candidate item against it one element at a time, rather than trusting a visual skim. In configuration management terms this is not pedantry: a staging record inside a production baseline corrupts every report, audit, and impact assessment built on that baseline.

**Question 2 (easy) — Deduction from acceptance criteria**

Service acceptance criteria state: "A product may be recommended for go-live only if all critical defects are closed AND early-life support arrangements are agreed." The project reports: "All critical defects are closed." Which conclusion is correct?

- A) Go-live may be recommended.
- B) Go-live may not be recommended.
- C) It cannot yet be concluded either way — the early-life support condition must still be checked.
- D) Early-life support arrangements are probably agreed, since defect closure took longer.

**Correct answer: C**

**Explanation:** The criterion is a conjunction: both conditions must hold. One is confirmed; the other is simply unaddressed. Concluding "may recommend" (A) treats one condition as two; concluding "may not" (B) assumes the unchecked condition fails, which is equally unsupported; option D substitutes plausibility for verification. This tests enumerating the conditions in a compound criterion and ticking them independently, without letting one strong tick radiate confidence onto its neighbours — a structure that recurs constantly in acceptance work because criteria are nearly always compound.

**Question 3 (easy) — Error checking a go-live readiness summary**

A readiness summary states: "All 6 acceptance criteria are met. Evidence: (1) functional testing complete — report attached; (2) performance testing complete — report attached; (3) security assessment complete — certificate attached; (4) operations runbook delivered — link attached; (5) service desk training complete — register attached; (6) early-life support plan agreed — draft attached." What is wrong?

- A) Six criteria is too many for one summary.
- B) Criterion 6's evidence is a draft, which contradicts "agreed" — so the claim "all 6 met" is not supported.
- C) Criterion 3 should be a report, not a certificate.
- D) Nothing is wrong.

**Correct answer: B**

**Explanation:** Check each evidence item against the status word it is meant to support. Items 1 to 5 pair a completion claim with an artefact of completion. Item 6 pairs "agreed" with a draft — and a draft is by definition not yet agreed, so the headline "all 6 criteria are met" overstates by exactly one criterion. Options A and C invent standards the question does not give. This tests matching the evidence's own status against the claimed status, item by item — the core mechanic of acceptance review, and the most common finding in real packs is precisely this one: a plan, briefing, or agreement claimed as done while its artefact is still marked draft, scheduled, or in review.

**Question 4 (moderate) — Prioritisation across a transition portfolio**

The candidate is co-ordinating three transitions and it is 9:00 Monday. Four items compete:

1. Transition A's go/no-go review is tomorrow morning; the recommendation paper is half-written.
2. Transition B's project manager wants a meeting today to discuss re-planning a slipped test phase; go-live is six weeks away.
3. A major incident review this afternoon needs input on whether last week's failed change followed the agreed implementation sequence — the evidence is available but has not been reviewed.
4. Transition C's supplier has sent revised acceptance evidence, requested for review "this week".

Which sequencing is most defensible?

- A) 1, 3, 2, 4
- B) 3, 1, 4, 2
- C) 1, 2, 3, 4
- D) 3, 1, 2, 4

**Correct answer: D**

**Explanation:** Two items have hard same-day or next-morning deadlines: the incident review is this afternoon and the recommendation paper is due tomorrow morning. Between them, the incident review comes first — its deadline lands first, the input is blocking a review that others attend, and the evidence check is bounded work. The recommendation paper takes the rest of the day. Item 2 comes next: a six-week horizon is comfortable, but a slipped test phase compounds if replanning waits, so a short meeting this week beats deferring it behind item 4's routine review, which has a soft "this week" deadline. Option A defers B's meeting behind C's evidence with no reason; option C sequences by list order, letting tomorrow's paper displace this afternoon's commitment; option B gets the first two right and then inverts the last two. This tests sequencing by deadline hardness first, then by how much a delay compounds.

**Question 5 (moderate) — Impact deduction across service dependencies**

The dependency model records: the document service depends on the storage platform; the case service depends on the document service and the identity service; the reporting service depends on the case service's database replica but not on its application layer. A change will take the storage platform offline for two hours. Assuming the model is complete and dependencies are hard, which services will be unavailable during the window?

- A) Document service only
- B) Document service and case service
- C) Document service, case service, and reporting service
- D) All services including identity

**Correct answer: B**

**Explanation:** Trace the chain from the changed component outward. Storage platform down → document service down (direct dependency). Document service down → case service down (it depends on the document service; its other dependency, identity, is irrelevant once one hard dependency fails). Case service down → reporting? Check the model's precision: reporting depends on the case service's database replica, not its application layer — and nothing says the replica depends on the storage platform or fails when the case application is down. So reporting stays up, and identity was never in the chain. Answer B. This tests reading a dependency model exactly as written rather than rounding it to "everything connected breaks". Impact assessment lives on that precision: over-scoping outage warnings costs credibility just as under-scoping costs users.

**Question 6 (moderate) — Spotting the trend that matters**

Reviewing incident data for a service in early-life support, weekly incident counts read: 41, 38, 40, 37. Within those totals, incidents tagged "data quality": 4, 7, 11, 16. Which reading is correct?

- A) The service is stabilising — total incidents are trending down.
- B) Totals are roughly flat, but data-quality incidents are doubling roughly every fortnight and now drive over 40% of the total; the trend needs investigation before it dominates.
- C) The data is too noisy to conclude anything.
- D) Data-quality tagging has probably improved; the underlying position is unchanged.

**Correct answer: B**

**Explanation:** Look past the headline series to its composition. Totals drift within a narrow band (37–41): roughly flat. The tagged subset grows 4 → 7 → 11 → 16 — approaching a doubling pattern, and 16 of 37 is about 43% of the latest week. A flat total concealing an accelerating category means the rest of the incident mix is falling while one problem grows — the classic early-life-support signature of an emerging systemic defect. Option A reads only the totals; option C mistakes a clear sub-trend for noise; option D invents a measurement explanation with no supporting evidence. This tests the **Problem management** skill in data form: initiating and monitoring actions to investigate patterns and trends — and the pattern worth initiating on is almost always inside the total, not on top of it.

**Question 7 (moderate) — Error checking early-life support arrangements**

An early-life support plan states: "Hypercare runs for four weeks from go-live (Monday 2 March). The supplier provides on-site support Monday to Friday during hypercare. Weekly service reviews occur every Friday, with the final review on Friday 27 March marking hypercare exit." What is the internal inconsistency?

- A) Four weeks from Monday 2 March ends Sunday 29 March, but the "final" review on Friday 27 March would occur before hypercare ends — leaving the last weekend inside hypercare but after the exit review.
- B) Suppliers never provide on-site support.
- C) Weekly reviews should be on Mondays.
- D) There is no inconsistency.

**Correct answer: A**

**Explanation:** Convert the words into dates and check them against each other. Four weeks from Monday 2 March spans 2–29 March, ending Sunday 29 March. The plan designates Friday 27 March's review as the exit marker — two days before the stated four weeks elapse, and with a weekend still inside the hypercare window but after the "final" review. Either hypercare is actually 3.8 weeks, or the exit review is mislabelled, or weekend cover for 28–29 March is unowned; the document must pick one. Options B and C impose outside opinions; the question asks for internal inconsistency — the document disagreeing with itself. This tests date arithmetic against stated durations, among the highest-yield checks in transition documents, because plans are edited by many hands and the dates drift apart from the durations quietly.

**Question 8 (moderate) — Sequencing a cutover under constraints**

A cutover requires five activities: final data sync (S), DNS switchover (D), smoke tests (T), service desk go-live comms (C), and supplier handover call (H). Constraints: (i) S must complete before D; (ii) T can only run after D; (iii) C must be sent before users can access the new service, i.e. before D completes; (iv) H must occur after T passes; (v) S takes 3 hours, D takes 1 hour, T takes 1 hour, C takes 30 minutes and can run in parallel with anything, H takes 30 minutes. If S starts at 18:00, what is the earliest H can finish?

- A) 22:30
- B) 23:00
- C) 23:30
- D) 22:00

**Correct answer: C**

**Explanation:** Build the critical path. S: 18:00–21:00. D: 21:00–22:00. T: 22:00–23:00. H: 23:00–23:30. C runs in parallel and needs only to be sent before D completes (22:00) — it can go at any point earlier, say during the sync, so it adds nothing to the path. Earliest H finish: 23:30. Option A forgets T; option D forgets both T and H's duration; option B forgets H takes 30 minutes. This tests identifying which activities chain and which genuinely parallelise, then adding only the chain — exactly how a cutover plan should be pressure-tested, and the most common real-world planning error is the one options A and D model: treating a dependent activity as parallel because it is short.

**Question 9 (hard) — Multi-criteria fitness-for-purpose judgement**

A product presents this position at acceptance: functional tests 97% passed with no critical defects; performance meets targets except one report that runs 20% slow, used monthly by 3 internal analysts; security assessment clean; operations runbook complete; service desk trained; but the data migration reconciliation shows 1,200 of 480,000 records (0.25%) with mismatched address fields, correctable by a scripted fix in week one post-go-live. The acceptance criteria require: no critical defects, performance targets met for citizen-facing functions, security clean, operations ready. Which recommendation is most defensible?

- A) No-go: performance and data are imperfect.
- B) Go, with conditions: the slow monthly report and the address-field fix are logged as accepted risks with owners and dates, since no acceptance criterion is breached — the slow report is not citizen-facing and the data mismatch is bounded, quantified, and has a remediation plan.
- C) Go, unconditionally: 97% is a high pass rate.
- D) Defer the decision until the product is perfect.

**Correct answer: B**

**Explanation:** Test the position against the criteria as written, not against an instinct for perfection. No critical defects: met. Performance for citizen-facing functions: met — the one slow report is internal and monthly, outside the criterion's scope. Security: met. Operations ready: met. No criterion is breached, so a no-go (A) would be imposing criteria retrospectively — a credibility-destroying move with project teams. But unconditional go (C) discards the leverage to ensure the two known imperfections are actually fixed: acceptance is the last moment conditions can be attached that anyone will honour. Option D confuses fitness for purpose with flawlessness; products transition with known, managed imperfections or they never transition at all. B is the professional answer: go, with the residual items converted into owned, dated, logged commitments. This tests the judgement the role exists to make — criteria check, scope check, residuals converted to conditions.

**Question 10 (hard) — Diagnosing a pattern across transitions**

Across the last four transitions: transition 1 slipped two weeks (late security assessment); transition 2 went live on time but had a major incident in week one (unbriefed service desk); transition 3 slipped one week (late security assessment); transition 4 went live on time but early-life support was chaotic (runbook incomplete). Which single systemic hypothesis best explains the pattern, and what evidence would test it?

- A) Suppliers are underperforming; evidence: supplier contract reviews.
- B) Operations teams are resistant to change; evidence: staff surveys.
- C) Acceptance criteria are being engaged too late in the delivery lifecycle — security, service desk, and operations readiness all surface as last-minute surprises; evidence: check when in each project the criteria were first shared and when each readiness activity was scheduled versus when it was needed.
- D) The transitions were unlucky; evidence: none needed.

**Correct answer: C**

**Explanation:** Look for what the four failures share. Each is a different symptom — late security work, unbriefed desk, incomplete runbook — but every one is a readiness activity discovered late, either delaying go-live or degrading it. A single upstream cause explains all four: the criteria and their lead times are not reaching delivery teams early enough to be planned in. Option C also proposes a discriminating test: dates of criteria engagement versus dates of need — evidence that would confirm or kill the hypothesis. Options A and B each explain at most one symptom and carry an accusatory frame the data does not support; option D abandons analysis. This connects to the duty to ensure acceptance criteria are understood by the wider IT operations and delivery community — this question is the diagnostic case for why that duty exists, and it tests whether pattern-and-trend investigation (the **Problem management** skill) is applied to the transition process itself, not just to live services.

**Question 11 (hard) — Reasoning under contradictory evidence**

Two evidence sources disagree. The supplier's performance report (dated 10 July, against release candidate RC3) shows all transactions under the 2-second threshold. An analyst's spot-check (dated 18 July, against RC4 — the build actually proposed for go-live) shows the search transaction averaging 2.6 seconds. The supplier responds: "Our full test was rigorous; the spot-check environment was probably misconfigured." Which position is most defensible?

- A) Accept the supplier's full report — a rigorous full test outweighs a spot-check.
- B) Accept the spot-check — internal evidence always beats supplier evidence.
- C) Neither result validates RC4 yet: the rigorous test was against a superseded build, and the spot-check — while indicative and concerning — needs its environment verified; require a performance re-run against RC4 in a verified environment before acceptance.
- D) Split the difference and record search performance as 2.3 seconds.

**Correct answer: C**

**Explanation:** Evaluate each source on two axes: rigour and relevance. The supplier's test is rigorous but stale — RC3 is not the go-live build, and performance can regress between candidates; a rigorous answer to a superseded question validates nothing. The spot-check is relevant (RC4) but of unverified rigour — the supplier's environment challenge is self-serving but not impossible. So neither source, alone, evidences the criterion "RC4 meets performance targets", and the correct move is the one that repairs both axes at once: re-run against the right build in a verified environment. Options A and B each pick an axis and ignore the other; option D is the worst kind of resolution — averaging two measurements of different things produces a number that describes neither. This tests the reusable technique of asking of every artefact "rigorous? relevant to this build, this environment, this criterion?" and treating any "no" as a gap to close, not a debate to win.

**Question 12 (hard) — Co-ordination logic across teams**

Three teams must complete work before a shared go-live: the network team needs 10 working days and can start immediately; the security team needs 5 working days but cannot start until the network work is 60% complete; the training team needs 8 working days, cannot start until security has started, and must finish at least 2 working days before go-live to allow rota planning. What is the minimum number of working days from start to go-live?

- A) 15
- B) 16
- C) 17
- D) 23

**Correct answer: B**

**Explanation:** Work the dependencies numerically. Network: days 1–10; 60% complete after day 6. Security starts day 7, runs 5 days: days 7–11. Training starts when security starts — day 7 at the earliest — and runs 8 days: days 7–14. All work completes at the latest of: network day 10, security day 11, training day 14 → day 14. Training must finish at least 2 working days before go-live, so go-live is no earlier than day 14 + 2 = day 16. Check nothing else binds: network and security finish well before day 16. Answer: 16. Option A forgets the 2-day buffer; option C misplaces training's start at day 8 (it may start the same day security starts, day 7); option D adds all durations serially (10 + 5 + 8), ignoring the parallelism the constraints permit. This tests the arithmetic core of a co-ordination duty: overlapping constraints are neither fully serial nor fully parallel, and computing the true critical path is what lets a transition manager book go-live dates that survive contact with reality.

### Administration tips

- **Score for whether a candidate verbalises rules and criteria before applying them.** Compound criteria fail silently when read as single conditions.
- **Watch for whether a candidate draws the chain** for dependency and sequencing items — sketching the path with times on it, rather than tracking links in working memory alone.
- **Note whether a candidate decomposes composed data** — asking what a total's components are doing, since flat headlines hide accelerating categories.
- **Note whether a candidate lets one strong tick validate its neighbours**, or checks each condition independently.
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that rounds a dependency model to "everything breaks".** Impact follows the model as written — over-scoping costs credibility exactly as under-scoping costs users.
- **Crediting an answer that judges fitness for purpose against perfection** rather than against the criteria as written.
- **Missing when a candidate accepts rigorous evidence about the wrong thing** — a thorough test of a superseded build answers a superseded question.
- **Accepting an answer that adds durations serially when constraints permit overlap**, or its twin: paralleling activities that actually chain.
- **Missing when a candidate reads only the headline series** rather than decomposing before concluding "stable".

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate interprets and manipulates the numbers this role runs on. It is not an examination in mathematics: the toolkit is percentages, ratios, averages, rates, percentage change, and the disciplined reading of tables and charts. What makes it job-specific is the data — for a service transition manager, that means test pass rates, defect closure velocities, availability and SLA figures, incident trends, capacity projections, and the migration reconciliation counts on which go-live recommendations rest.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 multiple-choice questions, each built around a small data set. Calculators are almost always permitted, rough working is expected, and many platforms adapt difficulty to performance.

Numeric reasoning matters for transition roles because recommendations are, underneath the prose, numeric claims. "Testing is sufficiently complete" is a pass rate and a defect severity distribution. "The service is stable enough to exit early-life support" is an incident trend and a backlog trajectory. "Migration succeeded" is a reconciliation percentage with a bounded error. The role demands not advanced mathematics but numerical scepticism: recomputing headline figures from raw counts, refusing averaged percentages across unequal groups, and projecting trends against thresholds before they arrive.

### How this assessment maps to the role

- **Pass rates, severity distributions and reconciliation percentages** map to the core duty of assessing readiness against acceptance criteria: acceptance thresholds are numeric, and fitness-for-purpose judgements begin with verifying claimed figures from raw counts.
- **Availability, SLA and KPI arithmetic** maps to the **Availability and capacity management** skill: managing service components against business needs and KPIs means converting between downtime minutes and availability percentages, and projecting utilisation against triggers.
- **Trend analysis** maps to the **Problem management** and **Incident management** skills: diagnosing and prioritising incidents, and investigating patterns and trends, are quantitative acts — rates, compositions, and trajectories.
- **Impact quantification** maps to the **Change management** skill: assessing the impact of change means counting affected users, transactions, and services, and expressing risk as proportions a decision-maker can weigh.
- **Asset and estate figures** map to the **Asset and configuration management** skill: verifying the location and state of assets produces reconciliations, and reconciliations are arithmetic with consequences.
- **Evidence-grade numbers for decisions** map to the go-live recommendation duty and the **User focus** skill: quantified user impact ("18% of citizen transactions") is what turns a concern into a decision input.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Verifying a claimed pass rate**

A supplier's summary claims a "98% pass rate". The detailed report shows 540 tests executed, 522 passed. Is the claim accurate?

- A) Yes — the pass rate is 98%
- B) No — the pass rate is about 96.7%
- C) No — the pass rate is 95%
- D) Cannot be determined

**Correct answer: B**

**Explanation:** Recompute from raw counts: 522 ÷ 540 = 0.9667, or about 96.7% — not 98%. A quick route: 18 tests failed, and 18 ÷ 540 = 1 ÷ 30 ≈ 3.3% failed, so about 96.7% passed. The gap between 96.7% and 98% may or may not matter against a given threshold, but the discrepancy itself always matters: a summary that inflates its own detail by 1.3 points invites the question "what else is rounded up?" This tests recomputing one headline figure from raw counts — the single fastest credibility check available on any evidence pack.

**Question 2 (easy) — Availability target arithmetic**

A service has a 99.7% monthly availability target. In a 30-day month (43,200 minutes), what is the maximum downtime permitted, in minutes?

- A) About 43 minutes
- B) About 86 minutes
- C) About 130 minutes
- D) About 300 minutes

**Correct answer: C**

**Explanation:** Permitted downtime = (100% − 99.7%) × total minutes = 0.3% × 43,200. Compute: 1% of 43,200 = 432; 0.3% = 432 × 0.3 = 129.6 — about 130 minutes. Option A corresponds to a 99.9% target, option B to 99.8%, option D to roughly 99.3%. This tests fluency in both directions of this conversion — a reflex that matters when, for example, a proposed maintenance window is 90 minutes and the availability target leaves 130 for the whole month, meaning one overrunning change could consume the month's entire error budget.

**Question 3 (easy) — Average resolution time**

Five priority-2 incidents during early-life support took 3, 5, 4, 6 and 7 hours to resolve. What is the mean resolution time?

- A) 4 hours
- B) 5 hours
- C) 6 hours
- D) 25 hours

**Correct answer: B**

**Explanation:** Sum: 3 + 5 + 4 + 6 + 7 = 25. Divide by count: 25 ÷ 5 = 5 hours. Option D is the total, mistaken for the mean. Sense-check: the mean must lie between the minimum (3) and maximum (7) — 5 does. This tests basic mean calculation and sense-checking against a data range; a strong candidate's answer also notes that with small samples the spread matters as much as the mean — a single 7-hour resolution may breach an SLA that the mean comfortably hides.

**Question 4 (easy) — Migration reconciliation percentage**

A data migration transferred 384,000 records; reconciliation matched 383,232 exactly. What percentage of records failed to reconcile?

- A) 0.02%
- B) 0.2%
- C) 2%
- D) 0.5%

**Correct answer: B**

**Explanation:** Unreconciled = 384,000 − 383,232 = 768 records. Percentage = 768 ÷ 384,000 = 0.002 = 0.2%. A tidy route: 1% of 384,000 is 3,840; 768 is a fifth of that, and a fifth of 1% is 0.2%. This tests decimal discipline — options A, B and C differ only by factors of ten, and misplaced decimals are the dominant error in percentage questions under time pressure. A strong candidate's answer quotes both the percentage and the count ("0.2% — 768 records"), since the percentage sizes the problem while the count sizes the remediation.

**Question 5 (moderate) — Defect closure velocity against a deadline**

Eighteen must-fix defects remain, with go/no-go in 8 working days. Closure over the last 10 working days totalled 20 defects. Is the current velocity sufficient, and with what margin?

- A) Yes — projected closures of 16 exceed 18 with margin
- B) No — at 2 per day, projected closures are 16 against 18 needed, a shortfall of 2
- C) Yes — 20 closed exceeds 18 remaining
- D) No — the shortfall is 10 defects

**Correct answer: B**

**Explanation:** Velocity = 20 ÷ 10 = 2 defects per working day. Projection over 8 days: 2 × 8 = 16 closures against 18 needed — a shortfall of 2. Option C compares a past total to a future requirement, which is meaningless without the time dimension; option A miscounts 16 as exceeding 18; option D invents a number. This tests converting a vague worry ("we're behind on defects") into a decision-ready statement — quantifying the gap precisely is what turns "on current velocity we land 2 short" into something a project can act on, naming the levers of scope, capacity, or time.

**Question 6 (moderate) — Combining test results across suppliers**

Two suppliers contribute to one release. Supplier A ran 250 tests with 92% passing; supplier B ran 750 tests with 96% passing. What is the overall pass rate?

- A) 94%
- B) 95%
- C) 95.5%
- D) 96%

**Correct answer: B**

**Explanation:** Rebuild counts before combining. Supplier A: 92% of 250 = 230 passed. Supplier B: 96% of 750 = 720 passed. Combined: (230 + 720) ÷ (250 + 750) = 950 ÷ 1,000 = 95%. The tempting error is the unweighted average (92 + 96) ÷ 2 = 94% (option A), which treats a 250-test contribution as equal to a 750-test one. Sense-check: the combined rate must sit between the two component rates, weighted toward the larger group — 95% sits three-quarters of the way from 92% to 96%, matching B's three-quarters share of the tests. This tests recomputing rather than averaging when multi-supplier figures combine — the difference between 94% and 95% can sit precisely on an acceptance threshold.

**Question 7 (moderate) — Percentage change in incident volumes across go-live**

A service averaged 32 incidents per week before a major release. In the three weeks after go-live it logged 44, 41 and 47 incidents. What is the percentage increase of the post-release average over the pre-release average?

- A) 27.5%
- B) 37.5%
- C) 44%
- D) 12%

**Correct answer: B**

**Explanation:** Post-release average = (44 + 41 + 47) ÷ 3 = 132 ÷ 3 = 44 incidents per week. Increase = 44 − 32 = 12. Percentage increase = 12 ÷ 32 = 0.375 = 37.5%. Dividing by the pre-release base (32), not the new value, is the discipline — 12 ÷ 44 ≈ 27.3% is the classic wrong turn (option A), and option D reports the raw difference as a percentage. This tests dividing by the correct base and connecting the figure to what it evidences: a sustained 37.5% rise three weeks in is a strong early-life support signal that should shape an exit recommendation.

**Question 8 (moderate) — Reading a stacked evidence table**

| Criterion | Items required | Items evidenced | Items outstanding |
|---|---|---|---|
| Testing | 12 | 11 | 1 |
| Security | 8 | 8 | 0 |
| Operations | 10 | 7 | 3 |
| Data | 6 | 5 | 1 |

Which statement is accurate?

- A) 86% of all required items are evidenced, with operations the weakest area at 70%.
- B) 92% of items are evidenced, with data the weakest area.
- C) 86% of items are evidenced, with testing the weakest area.
- D) The table contains an arithmetic inconsistency.

**Correct answer: A**

**Explanation:** Verify the rows first: 11+1=12 ✓, 8+0=8 ✓, 7+3=10 ✓, 5+1=6 ✓ — internally consistent, eliminating D. Totals: required = 12+8+10+6 = 36; evidenced = 11+8+7+5 = 31. Overall: 31 ÷ 36 ≈ 0.861 — 86%. Weakest area by proportion: testing 11/12 ≈ 92%, security 8/8 = 100%, operations 7/10 = 70%, data 5/6 ≈ 83% — operations, at 70%. This tests the two-step habit of verifying a table's internal arithmetic before computing comparative figures, and treating "weakest" as a proportional judgement rather than a raw count of outstanding items.

**Question 9 (moderate) — Capacity projection to a trigger**

A platform's peak concurrent users have grown: 1,800 (March), 1,980 (April), 2,178 (May) — 10% growth each month. The platform's tested capacity is 3,200 concurrent users, and the standard requires remedial action when peak load is projected to exceed 85% of tested capacity within three months. Is the trigger met at the end of May?

- A) No — 2,178 is only 68% of capacity.
- B) Yes — projecting 10% monthly growth gives about 2,899 in August, which exceeds the 2,720 trigger level.
- C) No — the projection for August is below the trigger level.
- D) Yes — any growth trend requires remedial action.

**Correct answer: B**

**Explanation:** Trigger level: 85% of 3,200 = 2,720 concurrent users. Project three months forward from May at 10% compound growth: June 2,178 × 1.1 = 2,395.8; July ≈ 2,635.4; August ≈ 2,898.9. August's ~2,899 exceeds 2,720, so a breach is projected within the three-month window — the trigger is met and remedial action is due now. Option A answers about the present when the standard asks about the projection; option D replaces the standard with anxiety. This tests compound projection against thresholds — the arithmetic heart of the **Availability and capacity management** skill, where the point of the standard is to buy remediation time before users feel the ceiling.

**Question 10 (hard) — Severity-weighted defect position**

The acceptance framework scores open defects by severity: critical = 10 points, major = 4, minor = 1, and requires a total defect score of 25 or below for a go recommendation. The current log: 1 critical, 3 major, 8 minor. The project proposes closing the critical and one major before the gate. If they succeed, what is the score at the gate, and does it meet the threshold?

- A) 30 now, 16 at the gate — meets the threshold
- B) 30 now, 20 at the gate — does not meet
- C) 26 now, 12 at the gate — meets
- D) 34 now, 16 at the gate — meets

**Correct answer: A**

**Explanation:** Current score: (1 × 10) + (3 × 4) + (8 × 1) = 10 + 12 + 8 = 30. Proposed closures remove one critical (−10) and one major (−4): 30 − 14 = 16. Against a threshold of 25 or below: 16 meets it. Option A carries both computations correctly. This tests severity-weighted arithmetic and appreciating what the framework encodes: one critical outweighs eight minors (10 > 8), so teams cannot game the gate by closing easy minors while the critical festers — the only efficient route to the threshold runs through the severe defects.

**Question 11 (hard) — Asset estate reconciliation across sources**

The configuration management database (CMDB) lists 1,250 production servers. A discovery scan finds 1,282 servers responding in production network ranges. Cross-matching shows 1,214 servers present in both sources. How many servers are in the CMDB but not found by the scan, how many were found but are absent from the CMDB, and which situation is the more urgent security concern?

- A) 36 unfound; 68 unregistered; the 68 unregistered are the more urgent security concern
- B) 68 unfound; 36 unregistered; the 68 unfound are more urgent
- C) 36 unfound; 68 unregistered; the 36 unfound are more urgent
- D) 32 unfound; 32 unregistered; both equal

**Correct answer: A**

**Explanation:** Work from the intersection. In CMDB but not scanned: 1,250 − 1,214 = 36 (recorded servers not responding — possibly decommissioned without record-keeping, or offline). Scanned but not in CMDB: 1,282 − 1,214 = 68 (live servers nobody's records own). Option D falls for differencing the two totals (1,282 − 1,250 = 32), which conflates two distinct populations — the intersection, not the difference of totals, is the reconciliation anchor. On urgency: the 68 unregistered servers are running in production with no recorded owner, no patch accountability, and no place in any impact assessment — unknown and live beats known and silent as a security exposure, which options B and C invert. This tests the **Asset and configuration management** skill as arithmetic with consequences: maintaining accurate information, verifying the state of assets, and treating the unowned live estate as the finding that moves first.

**Question 12 (hard) — Early-life support exit: reading the full table**

| Week | Incidents | Resolved in SLA | P1 incidents | User satisfaction |
|---|---|---|---|---|
| 1 | 52 | 44 | 2 | 71% |
| 2 | 45 | 40 | 1 | 74% |
| 3 | 38 | 35 | 1 | 78% |
| 4 | 33 | 32 | 0 | 81% |

Exit criteria: weekly incidents below 35; SLA resolution rate at or above 92%; no P1 incidents in the final fortnight; satisfaction above 80%. Which criteria are met in week 4, and is exit supported?

- A) All four are met — exit supported.
- B) Three are met, but a P1 in week 3 breaches the final-fortnight condition — exit not yet supported.
- C) Two are met — incidents and satisfaction; SLA and P1 conditions fail.
- D) Exit is unsupported because week 1 performance was poor.

**Correct answer: B**

**Explanation:** Check each criterion against its own definition — including its time window. Incidents: 33 < 35 ✓. SLA rate: 32 ÷ 33 = 0.9697 ≈ 97% ≥ 92% ✓. Satisfaction: 81% > 80% ✓. P1 condition: "no P1 in the final fortnight" means weeks 3 and 4 together — week 3 logged one P1, so the condition fails despite week 4's zero. Three of four met; exit not yet supported (typically: one more clean week re-satisfies the fortnight window). Option A reads the P1 criterion against week 4 alone — the classic window error; option C mis-computes the SLA rate; option D judges against history the criteria do not reference. This tests the transferable lesson that criteria carry their own measurement windows and denominators, and exit recommendations survive scrutiny only when each criterion is checked on its own terms.

### Administration tips

- **Score for whether a candidate recomputes a claimed headline figure from raw counts** rather than accepting it.
- **Watch for whether a candidate combines multi-source figures via raw counts**, not by averaging percentages.
- **Note whether a candidate verifies a table's internal arithmetic** before trusting a headline claim.
- **Note whether a candidate projects a trend against the correct threshold and window**, not a nearby one.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an average of percentages across differently sized groups.**
- **Crediting a percentage change divided by the wrong base.**
- **Missing when a candidate compares a past total to a future requirement** without converting both to rates over time.
- **Accepting a simple-growth projection for a phenomenon that compounds.**
- **Missing when a candidate ignores a criterion's measurement window** — "no P1 in the final fortnight" is not "no P1 this week".

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate reads, interprets, and draws conclusions from written material — and for a service transition manager, written material is the medium of the job. Acceptance criteria, supplier contracts and reports, service level agreements, ITIL-aligned process documents, go-live recommendations, and the carefully drafted emails of people who want a particular decision: the role is conducted through documents whose exact wording carries operational and commercial weight.

The dominant format is true / false / cannot say: a short passage followed by statements judged as definitely true (stated or necessarily following), definitely false (contradicted), or indeterminable (the passage is silent). Supporting formats include best-summary questions, logical-completion questions, and clear-writing judgements. A typical test runs 15 to 25 minutes with 20 to 30 questions across several passages.

The discipline the format demands — answer from the passage alone — is the same discipline the role demands. A candidate may know how transitions usually go; the question is what a given contract actually commits the supplier to, what a given SLA actually measures, what a given acceptance report actually evidences. Professional experience whispers plausible inferences, and the format tests whether a candidate holds the line between what a document says and what they expect it to say. That line is where acceptance disputes, SLA arguments, and supplier negotiations are won and lost.

This role is also a producer of consequential text. Go-live recommendations are read by senior decision-makers who were not in the detail; acceptance criteria must be understood identically by every team held to them — the role summary makes that understanding an explicit duty. Reading precisely and writing unambiguously are one competence viewed from two sides, and this assessment samples both.

### How this assessment maps to the role

- **Precise comprehension** maps to the core duty of assessing readiness against agreed criteria: "agreed", "delivered", "tested", and "operational" are different claims, and acceptance decisions turn on which one a document actually makes.
- **True / false / cannot say discipline** maps to the go-live recommendation duty: a recommendation distinguishes what is evidenced, what is contradicted by evidence, and what remains unknown — the format's three verdicts, applied at the decision that matters most.
- **Inference control** maps to the **Change management** and **Incident management** skills: impact assessments and incident diagnoses must follow from documented facts, with hypotheses labelled as hypotheses.
- **Reading process and framework documents** maps to the **Service management framework knowledge** skill: ITIL lifecycle texts, continuity procedures, and SLA schedules are dense conditional documents, and applying them starts with parsing them exactly.
- **Clear-writing judgement** maps to the duty to ensure acceptance criteria are understood by the wider IT operations community: criteria that admit two readings will be met in the cheaper of the two, and the drafting skill this assessment samples is the main defence.
- **Reading user evidence faithfully** maps to the **User focus** skill: user research summaries support decisions only when read without over-extension — a discipline identical to "cannot say".

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

For Questions 1 to 5, the candidate reads this extract from a service acceptance policy.

> "A go-live recommendation must be produced by the service transition manager for every major release. The recommendation must state whether each acceptance criterion is met, partially met, or not met, and must list all conditions attached to a 'go' recommendation. Where any criterion is not met, a 'go' recommendation may still be made if the residual risk has been formally accepted by the service owner. The final go/no-go decision rests with the service owner, not the service transition manager. Recommendations must be circulated at least two working days before the go/no-go review, except for emergency releases, which follow the expedited process defined in the emergency change procedure."

**Question 1 (easy) — True / false / cannot say**

Statement: "The service transition manager makes the final go/no-go decision."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage is explicit: "The final go/no-go decision rests with the service owner, not the service transition manager." The statement is directly contradicted — false. This tests whether a candidate can locate a role allocation stated in a single explicit sentence: the transition manager produces the recommendation; the service owner owns the decision. Test writers favour a recommender/decider swap because real organisations get it wrong so often — where a statement swaps the actors around a decision, a strong candidate checks the passage's exact allocation of the verb.

**Question 2 (easy) — True / false / cannot say**

Statement: "A 'go' recommendation is impossible if any acceptance criterion is not met."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage provides an explicit route: where a criterion is not met, go "may still be made if the residual risk has been formally accepted by the service owner". The statement's "impossible" denies that route, contradicting the passage — false. The passage's own precision is worth noting: the route requires formal acceptance, by a named role, of the specific residual risk — a controlled exception, not a loophole. This tests recognising that absolute words in test statements ("impossible", "always", "never") should prompt a hunt for a passage's exception clauses; policies at this level almost always have them, and they are almost always conditional.

**Question 3 (moderate) — True / false / cannot say**

Statement: "For an emergency release, the recommendation need not be circulated two working days in advance."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The two-day circulation rule carries an explicit carve-out: "except for emergency releases, which follow the expedited process". It follows necessarily that the two-day requirement does not bind emergency releases — true. What cannot be concluded is what the expedited process does require (same-day circulation? verbal briefing?): the passage delegates that to another document. The statement wisely claims only the exemption, not the replacement — had it said "emergency releases require no recommendation at all", the answer would be cannot say, since the expedited process's content is undisclosed. This tests reading an exception clause for exactly what it excepts — no more.

**Question 4 (moderate) — True / false / cannot say**

Statement: "Recommendations must classify each criterion using a three-state scale."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The passage requires each criterion to be stated as "met, partially met, or not met" — three states, exhaustively listed. The statement paraphrases this accurately, so it is true. This tests paraphrase-matching: verbal tests frequently restate passage content in different words, and the task is to check semantic equivalence rather than verbatim match. "Three-state scale" = three named states; "classify each criterion" = "state whether each criterion is". Where paraphrase questions go wrong is scope creep — had the statement said "a three-state scale defined by ITIL", the added attribution would push it to cannot say, and a strong candidate matches meaning while checking nothing extra has been smuggled in.

**Question 5 (moderate) — Best summary**

Which sentence best summarises the passage?

- A) Service owners produce go-live recommendations for major releases.
- B) The transition manager recommends with stated criterion statuses and conditions, unmet criteria require formally accepted residual risk for a 'go', the service owner decides, and standard releases need two days' notice with emergencies expedited.
- C) Go-live decisions require all criteria to be met at least two days before review.
- D) Emergency releases are exempt from go-live recommendations.

**Correct answer: B**

**Explanation:** Sketch the passage's skeleton: who recommends (transition manager), what the recommendation contains (three-state statuses, conditions), the unmet-criterion route (formal risk acceptance), who decides (service owner), timing (two days, emergency exception). Option B compresses all five elements without distortion. Option A swaps producer and decider. Option C invents a requirement (all criteria met) the passage explicitly declines to impose, and garbles the timing rule. Option D over-extends the exception: emergencies are exempt from the two-day circulation, not from recommendation — the passage says they follow an expedited process, not no process. This tests checking a candidate summary against the passage's skeleton, which catches omission, distortion, and over-extension alike.

For Questions 6 to 9, the candidate reads this extract from a supplier's transition status report.

> "Data migration rehearsal two completed on 4 September. Of the 1.9 million records migrated in rehearsal, 99.4% reconciled automatically; the residual records have been categorised, and remediation scripts for the two largest categories have been written and are in test. We anticipate full remediation coverage before cutover. Training delivery is complete for the north and midlands regions; the southern region's sessions are scheduled for the week commencing 15 September. The service desk knowledge base has been drafted and reviewed by our technical authors. We remain confident in the cutover date of 29 September, subject to the outstanding dependency on the department completing network changes at the southern sites, which remains outside our control."

**Question 6 (easy) — True / false / cannot say**

Statement: "The second migration rehearsal reconciled 99.4% of records automatically."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Stated directly: rehearsal two, 1.9 million records, "99.4% reconciled automatically". This tests locating and matching a directly stated figure, then — as a professional reflex rather than a test requirement — noticing what the sentence's precision quietly establishes: 0.6% of 1.9 million is 11,400 records requiring remediation, a count the report chooses not to state. Suppliers' reports often carry their most important numbers implicitly, as percentages of figures stated elsewhere; a strong candidate multiplies them out.

**Question 7 (moderate) — True / false / cannot say**

Statement: "Remediation scripts exist for all categories of unreconciled records."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The report says scripts "for the two largest categories have been written and are in test" — and that the supplier "anticipates" full coverage before cutover. Scripts for the two largest categories, with the rest anticipated, entails that scripts do not yet exist for all categories: the statement is contradicted — false. This tests tracking verbs stage by stage: written ≠ tested ≠ deployed; and "anticipate" is a forecast, not a status. This report is professionally drafted precisely to blur those stages into an impression of near-completeness. A strong candidate maps each category to its evidence stage — exactly the reading a genuine acceptance review would require.

**Question 8 (moderate) — True / false / cannot say**

Statement: "The service desk knowledge base has been approved by the department's service desk team."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The report says the knowledge base was "drafted and reviewed by our technical authors" — the supplier's own staff. It says nothing about the department's service desk team: no approval, no rejection, no involvement. The statement is neither confirmed nor contradicted — cannot say. The trap is treating "reviewed" as satisfying "approved by [someone else]": the passage's review was performed by a different party than the statement names, and review by the producing organisation is a different assurance event from approval by the consuming one. This tests checking a verb and an actor separately when a statement upgrades both.

**Question 9 (hard) — Reading the risk structure**

Judged strictly on the report's content, which is the most accurate characterisation of the cutover confidence expressed?

- A) Unconditional — the supplier confirms 29 September.
- B) Conditional on a dependency the supplier controls.
- C) Conditional on a dependency the supplier explicitly places outside its control — departmental network changes at the southern sites — meaning the risk sits with the department's own delivery.
- D) The supplier expresses no confidence in the date.

**Correct answer: C**

**Explanation:** The confidence sentence carries its own caveat: "subject to the outstanding dependency on the department completing network changes... which remains outside our control." That is a conditional confidence, with the condition assigned — pointedly — to the customer. Option A reads the confidence and skips the "subject to"; option D reads the caveat and skips the confidence; option B misassigns the dependency's ownership. This tests reading such a sentence twice — once for status, once for risk allocation — since it is doing contractual work: if cutover slips because of the network changes, the report is on record locating the cause on the department's side. A strong candidate also connects the caveat to the earlier detail: the southern region is simultaneously the site of unfinished training and the unfinished network work — the report's two risks cluster geographically, which the report never points out.

For Questions 10 to 12, the candidate reads this extract from a service management framework text.

> "The purpose of the change enablement practice is to maximise the number of successful service and product changes by ensuring that risks have been properly assessed, authorising changes to proceed, and managing the change schedule. Change authority should be assigned to the person or group best positioned to assess the risk of a particular change type: low-risk standard changes may be pre-authorised, while significant changes may require authorisation at board level. Centralising all change authority in a single body regardless of change type tends to increase delay without improving risk assessment, because the central body lacks context for many changes it reviews."

**Question 10 (moderate) — True / false / cannot say**

Statement: "According to the passage, the purpose of change enablement is to minimise the number of changes made to services."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage states the purpose is to "maximise the number of successful service and product changes" — an enabling framing, not a restricting one. The statement inverts it: minimising changes is close to the opposite of maximising successful ones. False. This tests catching an inversion of a stated purpose, and the inversion is worth flagging as a live cultural fault line in service management: change practices exist to make change safe and frequent, not rare — a misreading that turns transition teams into departments of "no".

**Question 11 (moderate) — Logical completion**

According to the passage, centralising all change authority in a single body tends to:

- A) Improve risk assessment at the cost of some delay
- B) Increase delay without improving risk assessment, because the central body lacks context for many changes
- C) Reduce delay by standardising decisions
- D) Work well for low-risk changes only

**Correct answer: B**

**Explanation:** The final sentence states it verbatim: centralisation "tends to increase delay without improving risk assessment, because the central body lacks context". Option B reproduces claim and reason together. Option A concedes the delay but invents an assessment benefit the passage explicitly denies — the most tempting distractor, because it matches a common real-world intuition ("surely central review is more rigorous"). Options C and D contradict the passage outright. This tests reading arguments as claim-plus-mechanism rather than as isolated assertions; the mechanism ("lacks context") also tells a candidate the remedy is assigning authority to where context lives.

**Question 12 (hard) — Clear-writing judgement**

Presented with a task to draft an acceptance criterion for service desk readiness, to be met identically by every future project, which drafting is most effective?

- A) "The service desk should be appropriately prepared for the new service in good time before go-live."
- B) "Service desk readiness activities will be progressed in accordance with relevant best practice."
- C) "At least five working days before go-live: all service desk staff rostered for go-live week have completed the training module; the knowledge base articles for the service are published and approved by the service desk manager; and a named service desk escalation contact for early-life support is recorded in the support plan."
- D) "The service desk must be fully ready, with comprehensive training and complete documentation, to the satisfaction of all stakeholders."

**Correct answer: C**

**Explanation:** A criterion is effective when two independent readers must reach the same met/not-met verdict. Option C achieves that through three properties: a deadline ("at least five working days before go-live"), verifiable events ("completed the training module", "published"), and named approvers and artefacts ("approved by the service desk manager", "recorded in the support plan"). Option A is unverifiable twice over — "appropriately" and "in good time" are opinions wearing adverbs. Option B commits to activity, not outcome. Option D sounds strict and is actually the weakest: "fully", "comprehensive", and "to the satisfaction of all stakeholders" create an undefined, unbounded test that either blocks everything or collapses into negotiation at the gate. This tests clear-writing judgement against the duty to make criteria understood by wider IT operations — understanding follows from verifiability, and vague criteria are not gentler, they are disputes scheduled for the worst possible week.

### Administration tips

- **Score for whether a candidate distinguishes False (contradicted) from Cannot Say (silent).**
- **Watch for whether a candidate tracks verbs and actors separately** — drafted/reviewed/approved is a verb ladder; supplier/department/service owner is an actor list.
- **Note whether a candidate hunts exception clauses** when a statement uses "always", "never", or "impossible".
- **Note whether a candidate multiplies out implicit numbers** embedded in a percentage, rather than leaving them unexamined.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from operational experience** rather than the passage — silence is "cannot say", however plausible the inference.
- **Missing when a candidate lets confidence language stand in for status** — "we remain confident" plus a caveat is a conditional claim with allocated risk.
- **Crediting an answer that merges the verb ladder** — written is not tested; reviewed is not approved; anticipated is not done.
- **Missing when a candidate ignores who performed the verb** — supplier self-review versus customer approval changes the assurance value entirely.
- **Accepting an over-extended exception** — exempt from two-day circulation is not exempt from recommendation.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement test (SJT) presents realistic workplace dilemmas and asks the candidate to identify the most effective — and sometimes least effective — responses. It measures professional judgement: not what a candidate knows, but how they weigh competing pressures, when they escalate, how they handle people, and whether the interests of users and the integrity of the process survive contact with deadline pressure and organisational politics.

Typical formats: choose the most effective of four responses; identify most and least effective; rank all options; or rate each response independently. Timing is generous — usually 20 to 30 minutes for 15 to 20 scenarios — because judgement, not speed, is the construct. Scoring compares responses against a key developed with experienced practitioners and occupational psychologists, usually anchored to a behaviour framework: for GDAD roles, expect user focus, collaboration, ownership, honest communication, appropriate escalation, and inclusion.

For a service transition manager, the SJT is arguably the most job-relevant assessment of the four. Decisions at this level are rarely private calculations; they are positions taken among stakeholders with conflicting interests — project managers with dates to hit, suppliers with contracts to defend, operations teams with services to protect, service owners with outcomes to deliver, and users with no seat at the table. The scenarios below reflect that reality at this level: real authority over recommendations and co-ordination, independent operation, and judgement calls that shape both individual transitions and the credibility of the transition process itself.

A note on what scoring keys reward at this level: not deference, and not heroics. The consistently high-scoring pattern is evidence-based positions held with civility, early and specific escalation, decisions routed to their proper owners with full information, team issues addressed rather than absorbed, and user impact kept visible in every trade-off. The explanations below name these behaviours explicitly, so the assessor finishes this section with a working model of effective transition judgement to score against.

### How this assessment maps to the role

- **Decision-integrity scenarios** map to the core duty of making go-live, early-life support, and service acceptance recommendations: the test probes whether recommendations stay evidence-based under pressure from dates, hierarchy, and sunk cost.
- **Escalation and ownership scenarios** map to the **Ownership and topic** skill — owning an issue until it is resolved, mitigated, or properly transferred — applied at a level where the candidate is often the escalation point as well as the escalator.
- **Team scenarios** map to the **Community collaboration** skill: motivating and empowering teams, creating the right environment, identifying the best team makeup, and recognising and dealing with issues — including conflict between the teams being co-ordinated.
- **Incident and problem scenarios** map to the **Incident management** and **Problem management** skills: diagnosing and prioritising under pressure, consulting specialists effectively, and converting recurring symptoms into systemic fixes.
- **Communication scenarios** map to the duty to ensure acceptance criteria are understood by wider IT operations: several scenarios test how a candidate handles misunderstanding, disagreement, and the difference between informing people and being understood.
- **User-impact scenarios** map to the **User focus** skill: identifying and engaging users, and using quantitative and qualitative evidence to keep user outcomes decisive when they conflict with organisational convenience.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The sponsor wants a different recommendation**

The candidate's draft recommendation for tomorrow's go/no-go is "no-go": the operations runbook is untested and the service desk untrained — two acceptance criteria unmet with no formal risk acceptance. The programme sponsor calls: "The director has announced this date publicly. I need your recommendation to be go." What is the most effective response?

- A) Change the recommendation to go — the sponsor outranks the candidate and owns the political risk.
- B) Keep the recommendation as the evidence dictates, explain to the sponsor exactly what would change it (risk acceptance by the service owner, or the two criteria met), and offer to work with the teams today to close what can be closed before the review.
- C) Withdraw the recommendation entirely and let the review decide without one.
- D) Change the recommendation to go but note private disagreement in an email to self.

**Correct answer: B**

**Explanation:** A recommendation is an evidence product; the sponsor's call is pressure, not evidence. Option B holds the professional line while doing everything legitimately possible to help: the sponsor learns precisely what routes exist to a defensible go — including the formal risk-acceptance route the acceptance policy provides — and the candidate offers real effort toward closing the gaps. That is firmness plus service, and it keeps the decision where it belongs, with the service owner deciding on accurate information. Option A converts the role into decoration; when the untrained desk fails in week one, "the sponsor asked" protects no one — least of all users. Option C abandons the duty precisely when it is hardest. Option D is A with a guilty conscience: the record that reaches the decision is still false to the analysis. This tests evidence-based integrity, constructive assistance, and proper decision routing.

**Question 2 (easy) — Two transitions collide**

The candidate co-ordinates two transitions that have just landed on the same weekend: transition A's cutover was planned for months; transition B's has slipped onto the same dates, and both need the same database administration team, which cannot support both. Both project managers insist theirs cannot move. What is the most effective first action?

- A) Let the two project managers negotiate it between themselves.
- B) Establish the facts — what each cutover needs from the shared team, hour by hour, and what each slip would cost — then convene both PMs with the resource owner, propose the sequencing the facts best support, and escalate jointly with a recommendation if agreement fails.
- C) Award the weekend to transition A because it planned first.
- D) Ask the database team to work continuously across both cutovers.

**Correct answer: B**

**Explanation:** This is the co-ordination core of the role, and the effective pattern is facts, then forum, then — if needed — escalation with a recommendation. Option B builds the factual base first (perhaps the conflict is narrower than it appears: the hour-by-hour view often reveals partial compatibility), brings the parties and the resource owner into one conversation, and prepares the honest fallback: a joint escalation carrying a recommendation, not a shrug. Option A outsources co-ordination — the actual job — to the two parties least able to resolve it, since each holds only half the picture and all of the incentive. Option C uses an arbitrary tiebreaker before establishing whether the conflict is even real; "planned first" may be the right answer, but as a conclusion from impact analysis, not a substitute for it. Option D resolves the calendar by spending the people — a fatigued DBA team across two consecutive cutovers converts a scheduling conflict into an operational risk for both services. This tests fact-finding before positioning, collaborative resolution, and escalation with analysis attached.

**Question 3 (easy) — The criteria nobody read**

At a readiness review, it becomes clear the project team has never seen the service acceptance criteria: they planned against their own definition of done, and two criteria — operations documentation and support-model sign-off — have no corresponding work. The project manager is embarrassed and asks for the criteria to be "flexed this once". What is the most effective response?

- A) Flex the criteria — the gap is partly the process's fault for not reaching them.
- B) Hold the criteria, work with the PM to size the genuinely missing work and replan honestly, and separately fix the systemic gap — build criteria briefing into project initiation so no future team meets them at the review.
- C) Hold the criteria and let the project fail the review as a lesson to others.
- D) Report the project manager's planning failure to the programme board.

**Correct answer: B**

**Explanation:** Two problems arrive together — this project's gap, and the process gap that produced it — and option B is the only response that solves both without sacrificing either. The criteria exist to protect live service; flexing them because they were not read (option A) would make ignorance of the criteria the cheapest route through them, an incentive no transition process survives. But the role summary makes criteria understanding across wider IT operations an explicit duty, so the systemic half of B is not generosity — it is the job, and this review just supplied the evidence for prioritising it. Option C protects the criteria and wastes the lesson: reviews are gates, not punishments. Option D escalates blame before attempting resolution — and the blame is partly structural anyway. This tests holding standards while giving help, owning root cause, and avoiding scapegoating.

**Question 4 (moderate) — Least effective: the supplier's engineer tells the candidate something off the record**

At a working session, the supplier's lead engineer quietly tells the candidate: "Between us — the performance fixes are cosmetic. The architecture can't hit the targets at your user volumes. My management won't put that in writing." The formal supplier position remains that performance targets will be met. Which response is LEAST effective?

- A) Commission an independent load test at production volumes before acceptance, so the question is settled by evidence rather than by either account.
- B) Raise the discrepancy with the supplier's management, without naming the engineer, and require evidence-based reassurance.
- C) Dismiss the conversation — it was informal, and the formal position is what counts.
- D) Note the risk in the transition log and increase scrutiny of the performance evidence at the gate.

**Correct answer: C**

**Explanation:** This tests recognising the option that most endangers the service. Option C is it: it privileges the format of information over its content. An engineer with direct knowledge has flagged that the formal position may be false; "it wasn't in writing" changes the evidential weight, not the risk. Dismissing it entirely means walking into acceptance with a known, specific, credible doubt unexamined. Option A is the strongest response — it resolves the contradiction with independent evidence and protects the engineer completely, since load testing at production volumes is a defensible ask on any major transition. Option B is legitimate escalation handled with appropriate source protection, though it risks a rehearsed reassurance. Option D is weaker but still rational: the risk enters the record and sharpens the gate. The principles being tested: informal intelligence is a trigger for verification, never for either blind belief or blind dismissal — and protecting people who share uncomfortable truths is how a manager keeps being told them.

**Question 5 (moderate) — The analyst who missed something big**

A week before go-live, the candidate discovers that the service readiness analyst — capable, hardworking, recently promoted — signed off the backup-and-restore criterion without evidence: no restore test was ever run. When asked, the analyst admits they assumed the supplier's backup configuration screenshots were sufficient and did not want to raise questions during a busy month. What is the most effective response?

- A) Take the criterion back, run the restore test properly, and say nothing further — everyone makes mistakes.
- B) Correct the record immediately, get the restore test scheduled this week, and hold a candid, blame-aware conversation with the analyst: what "evidence" means for each criterion type, and why questions are never an imposition — then check whether other criteria they signed share the same weakness.
- C) Remove sign-off authority from the analyst and re-verify everything they have ever touched.
- D) Report the failure to HR as a conduct issue.

**Correct answer: B**

**Explanation:** Three obligations arrive at once — the service (a live criterion is unevidenced days before go-live), the record (a sign-off is false), and the person (a promising analyst has revealed a correctable gap in judgement and a worrying reluctance to ask). Option B discharges all three in the right order: record corrected, test scheduled, teaching conversation held, and — the step that separates managers from firefighters — a bounded check of whether the same misunderstanding infects the analyst's other sign-offs. The conversation matters as much as the correction: "didn't want to raise it" is a culture signal, and the **Community collaboration** skill (create the right environment; motivate and empower) means fixing the environment that made silence feel safer than questions. Option A fixes today's criterion and guarantees a repeat. Option C punishes proportionately to fear rather than to the evidence. Option D outsources a management conversation to a disciplinary process, destroying trust for no service benefit. The rewarded pattern: fix the record, fix the risk, grow the person, check the blast radius.

**Question 6 (moderate) — Early-life support is being starved**

The early-life support plan for a just-launched service commits the project's developers to two weeks of dedicated incident support. Three days in, the delivery director quietly reassigns half of them to the next project, saying: "The service is green — you're overstaffed." Incident volumes are indeed low, but the service has not yet faced its first weekly batch run or month-end peak. What is the most effective response?

- A) Accept the reassignment — the current data supports it.
- B) Push back with the plan's rationale: the support commitment was sized for the known risk events still ahead (first batch run, month-end), not for the quiet days between them; propose a compromise if genuine — staged release of developers tied to passing those events — and escalate to the service owner if the commitment is simply overridden.
- C) Escalate immediately to the service owner without speaking to the delivery director first.
- D) Say nothing but keep a record showing an objection was raised, in case the batch run fails.

**Correct answer: B**

**Explanation:** The reassignment reasons from three quiet days; the plan reasoned from the service's risk calendar — and the whole point of early-life support sizing is that risk arrives on schedule (batch runs, month-end) rather than uniformly. Option B re-makes that argument to the person who acted, which is both correct sequencing and respectful of their legitimate interest (the next project is real too); it offers an evidence-based compromise — staged release tied to surviving the actual risk events — and it is honest about the escalation path if the plan's commitments are simply void. This extends the recommendation duty into early-life support: commitments accepted on evidence are commitments defended. Option A mistakes the absence of load for the absence of risk. Option C skips the direct conversation that resolves most of these situations. Option D is the worst kind of prudence — a private record that protects the candidate at the precise cost of not protecting the service. The rewarded behaviours: defend evidence-based plans, negotiate with the risk calendar, escalate transparently when commitments are overridden.

**Question 7 (moderate) — The incident during cutover**

Mid-cutover, 23:30. The data migration is 70% complete when the monitoring dashboard shows a priority-1 incident on an unrelated live service — one the operations counterparts also support, and their team is stretched. The cutover team includes two engineers with exactly the skills the P1 needs. The cutover window closes at 06:00; losing the engineers for two hours makes the window tight but probably achievable. What is the most effective response?

- A) Refuse to release the engineers — the cutover window is committed.
- B) Release both engineers immediately without conditions — P1s outrank everything.
- C) Contact the incident manager, establish whether the two engineers are genuinely the best available option, and if so release them with a defined recall condition; simultaneously re-plan the remaining cutover activities to protect the critical path and identify the no-go-back point.
- D) Pause the entire cutover until the P1 is resolved.

**Correct answer: C**

**Explanation:** Two live commitments genuinely conflict, and the effective response is neither absolutism (A and B each pick one commitment and abandon judgement) nor paralysis (D creates a second failure to keep the first one company). Option C does what a transition manager at this level is for: it verifies the need is real before paying for it (perhaps the incident team has alternatives — establish, don't assume), bounds the concession (defined recall condition, so the cutover's fate stays managed), and immediately converts the new constraint into a re-planned critical path with an explicit no-go-back point — the moment after which the team either completes or rolls back cleanly. That last element is the professional core: cutover safety is not "will it finish?" but "will it always be in a state it can safely exit from?" This tests the **Incident management** skill (prioritise across services, not just within one) operating alongside the co-ordination duty, and the **Service focus** skill's bigger picture: both services belong to the same public. Rewarded behaviours: verify before conceding, bound what is conceded, re-plan explicitly, protect reversibility.

**Question 8 (moderate) — Least effective: the criteria dispute in public**

At a programme board, an experienced delivery manager attacks the acceptance criteria as "gold-plating that delays value", citing a criterion requiring tested rollback for every release. Several board members look persuaded. Which response is LEAST effective?

- A) Explain the criterion's rationale with a concrete example — the release last year that a tested rollback converted from a nine-hour outage into a twenty-minute blip — and offer to review any criterion's cost-benefit with evidence, through the agreed change process for the framework.
- B) Acknowledge the cost the criterion imposes, and commit to examining whether lighter-weight rollback evidence could serve low-risk release types.
- C) Tell the board that the criteria are mandated and not open for discussion.
- D) Invite the delivery manager to bring specific instances where the criterion cost more than it protected, as input to the next framework review.

**Correct answer: C**

**Explanation:** Options A, B and D share a structure: they defend the framework's substance while keeping its authority open to evidence — rationale with a worked example (A), proportionality honestly examined (B), and challenge converted into structured input (D). Any of them can win the room, and together they model how standards survive: by being defensible, not by being undiscussable. Option C is the least effective precisely because it may work today — the board may back down — while teaching every attendee that the criteria rest on assertion rather than reason. Undiscussable standards accumulate quiet workarounds; the next challenge happens not at a board a manager attends but in a corridor they don't. The duty that criteria be understood by wider IT operations includes understood as reasonable — and "mandated, not open for discussion" is the sentence that ends understanding. This tests recognising that authority spent defending standards from scrutiny is authority lost.

**Question 9 (hard) — What the user data says versus what the deadline needs**

A replacement benefits-claim service is at the acceptance gate. All technical criteria are met. But user research completed last week shows that claimants over 65 — 22% of the service's users — fail the new identity-verification step at three times the rate of other groups, mostly abandoning their claims entirely rather than phoning the helpline. The old service is contractually decommissioned in six weeks, and each week of delay costs a substantial extension fee. The service owner asks for a recommendation. What is the most effective position?

- A) Recommend go — technical criteria are all met, and user experience can be improved post-launch.
- B) Recommend no-go until the verification step is redesigned, whatever the extension costs.
- C) Recommend a conditional position built on the evidence: quantify the harm (claims abandoned per week by the affected group, against the extension fee), and present the service owner with worked options — go with an immediate assisted-digital route and monitored abandonment thresholds that trigger intervention, or a short paid extension to fix the step — with an assessment of which best serves users and value together.
- D) Recommend go, and ask the helpline to expect increased call volumes.

**Correct answer: C**

**Explanation:** This scenario is the role at its hardest: every criterion on paper is met, and the service is still not fit for purpose for one user in five — the acceptance framework's letter and its purpose have come apart. Option A hides behind the letter: "user experience" understates what the data shows, which is protected-characteristic users abandoning benefit claims — harm, not friction, and exactly what the **User focus** skill exists to keep decisive. Option B honours the users and abandons the arithmetic: "whatever the costs" is not a recommendation, it is a value judgement pre-empting the service owner's actual decision. Option C does the transition manager's real job: it converts the dilemma into a quantified decision — abandoned claims per week versus extension fees, with mitigation options costed and consequenced — and routes it, with a stated professional view, to the decision's owner. Note what C refuses to do: it will not let the decision be made without the user data on the table, and it will not make the service owner's decision for them. Option D is A with the harm relabelled as a staffing forecast. Rewarded behaviours: user evidence kept decisive, trade-offs quantified rather than absorbed, decisions routed with recommendations attached, and no false comfort in "criteria met".

**Question 10 (hard) — The pattern across a portfolio**

Preparing a quarterly report, the candidate notices that across nine transitions this year, the three that went worst shared one feature: operations teams first engaged with the service less than a month before go-live. The three smoothest had operations engaged from design onward. The report goes to the head of IT operations, who has previously said "ops can't spare people for projects that might not ship." What is the most effective use of this finding?

- A) Include the correlation in the report with the six data points, cost the three bad transitions (incident volumes, early-life overruns, delayed benefits), acknowledge the head of operations' resourcing constraint, and propose a bounded experiment: token operations engagement (two hours weekly) from design stage on the next two transitions, measured against the same outcomes.
- B) Leave it out — the head of operations has already made their position clear.
- C) Present the correlation as proof that the head of operations' policy caused the failures.
- D) Share the finding informally with project managers so they can each lobby operations separately.

**Correct answer: A**

**Explanation:** This is a genuine pattern — six data points across the candidate's own portfolio, the classic "initiate and monitor actions to investigate patterns and trends" of the **Problem management** skill, applied to the transition process itself. Option A converts it into organisational change with every persuasion principle working for it: the data is offered as correlation, not accusation (nine transitions is suggestive, not proof — intellectual honesty here is also tactical wisdom); the costs are quantified in the currency the reader cares about; the reader's stated constraint is treated as real rather than as resistance; and the proposal is small enough to say yes to — two hours weekly, two transitions, measured. That last property is the craft: findings become change when the first step is cheaper than the argument. Option B lets a prior objection veto evidence the objector has never seen. Option C overclaims causation and converts a potential ally into a defendant. Option D fragments a systemic finding into uncoordinated lobbying. Rewarded behaviours: evidence over anecdote, honest claim-sizing, constraints respected, proposals sized to succeed.

**Question 11 (hard) — The handover that isn't one**

The candidate is six weeks from leaving for a new role. The flagship transition — a two-year programme entering its critical phase — will be handed to a successor who has not yet been recruited. The programme director suggests: "Just write everything down; whoever comes can read it." The candidate knows from experience that the transition's real risks live in unwritten context: which supplier commitments are soft, which stakeholders need pre-meetings, why the cutover plan has a strange-looking constraint. What is the most effective response?

- A) Write the comprehensive handover document as asked — it is the best available option.
- B) Propose a structured transfer instead of a document alone: identify an interim owner now from the existing team, brief them into the critical relationships and soft knowledge over the remaining weeks, record the genuinely writable material, and schedule a post-departure call for the eventual successor — putting this plan to the director with the specific risks a document-only handover leaves uncovered.
- C) Delay departure until a successor is recruited and fully inducted.
- D) Leave detailed documentation and a personal phone number, and tell the team to call.

**Correct answer: B**

**Explanation:** This is the **Ownership and topic** skill at its most senior interpretation: owning an issue until a new owner is found — where the issue is the transition itself, and "found" means genuinely equipped, not merely appointed. Option B is built on an accurate theory of knowledge transfer: documents carry facts; relationships and judgement transfer person-to-person, over time, or not at all. Naming an interim owner from the existing team converts the remaining six weeks from documentation time into apprenticeship time, and putting the risk analysis to the director respects their authority while correcting their model — "write everything down" fails not because writing is useless but because the riskiest knowledge is precisely the kind that doesn't write. Option A complies with a plan there is good reason to believe insufficient, without saying so. Option C sacrifices a legitimate career move to an organisational gap the candidate did not create and cannot indefinitely fill. Option D privatises the safety net: informal, unfunded, dependent on goodwill and availability, and structurally guaranteed to decay. Rewarded behaviours: honest risk analysis of proposed plans, ownership defined by outcomes not gestures, succession treated as a transition to be managed.

**Question 12 (hard) — The quiet disagreement in the candidate's own team**

In the transition team's retrospective, a pattern surfaces: two analysts consistently rate the team's psychological safety lower than everyone else, and one comments that "findings get softened between our drafts and the final reports." Reviewing recent papers, the candidate realises it is partly true — they have been moderating the analysts' more alarming language before reviews, believing they were calibrating tone. The analysts have experienced it as being overruled. What is the most effective response?

- A) Explain to the analysts why calibration is necessary and that they will understand when more senior.
- B) Stop editing their sections entirely — publish their drafts verbatim to restore trust.
- C) Acknowledge the pattern openly in the team, distinguish the two things that have been happening (legitimate calibration of language versus changing the substance of findings), agree a visible rule — substance changes only with the finding's author, and disagreements escalate as joint positions showing both views — and invite the analysts to flag the next instance in real time.
- D) Treat the retrospective feedback as a team-dynamics issue for the analysts to work through themselves.

**Correct answer: C**

**Explanation:** The scenario hands the candidate an uncomfortable finding about themselves, with the same structure as any other finding: evidence (ratings, the comment, the candidate's own review of the papers), a mechanism (edits experienced as overruling), and a fix to design. Option C treats it exactly as professional standards would treat a service problem — acknowledged openly, decomposed accurately, remedied structurally. The decomposition is the craft: calibrating tone is a legitimate senior function; changing what a finding says is a different act, and the rule "substance moves only with the author, disagreements travel as joint positions" separates them visibly — protecting both the quality of reports and the ownership of the people who write them. The real-time flagging invitation converts the fix from promise to practice. Option A answers evidence with hierarchy — "you'll understand when senior" is the sentence that stops retrospectives being honest ever again. Option B swings from over-editing to abdication. Option D outsources a problem whose cause sits in the candidate's own editing practice. This tests **Community collaboration** at this level: creating the right environment includes repairing it when the damage traces back to the manager. Rewarded behaviours: non-defensive response to feedback, accurate problem decomposition, structural fixes over reassurance, and modelling the evidence-handling required of others.

### Administration tips

- **Score for whether a candidate's response follows the quantify-options-decide-route structure** when facing a conditional recommendation.
- **Watch for whether a candidate tries a direct, deadline-explicit conversation** before escalating past the person who acted.
- **Note whether a candidate protects the record first, then repairs the relationship with candour** — rather than trading one for the other.
- **Note whether a candidate verifies, bounds, and re-plans** when two genuine commitments conflict, rather than picking one absolutely.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding absolutism in a genuine dilemma** — "the window is committed" and "P1s outrank everything" are both abdications of judgement.
- **Crediting an answer that hides behind met criteria** when evidence shows harm the criteria missed.
- **Missing when a candidate escalates before, or instead of, the direct conversation** that would resolve the situation more cheaply.
- **Accepting an answer that protects people from accountability, or punishes them past it** — the effective middle is correction plus development plus a bounded check of the blast radius.
- **Missing when a candidate's answer keeps a private record instead of raising a timely objection** — documentation that protects the candidate rather than the service is a pattern worth flagging.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a service transition manager: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested the verification and reasoning habits that fitness-for-purpose decisions rest on: checking evidence status against claimed status, tracing dependency models exactly as written, computing critical paths rather than intuiting them, and holding the line between what evidence supports and what pressure prefers. The numeric section tested the arithmetic underneath a recommendation — pass rates recomputed from raw counts, availability converted between percentages and minutes, velocities projected against deadlines, and reconciliations anchored on intersections rather than totals — the numerical scepticism that lets a candidate probe a supplier's figures before the review probes theirs. The verbal section tested reading of the documents this role runs on: verb ladders and actor swaps, exception clauses read for exactly what they except, confidence language separated from status, and criteria drafted so that two strangers must reach the same verdict. The situational judgement section mapped the behavioural terrain of this level: evidence-based positions held with civility, escalation done transparently and in sequence, decisions quantified and routed to their owners, teams repaired rather than managed around, and users kept decisive when every organisational pressure points the other way.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can hold an evidence-based line under pressure, quantify a trade-off honestly, and route a decision to the person who owns it — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
