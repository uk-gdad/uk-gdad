# Senior Application Operations Engineer - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for senior application operations engineer, within the UK Government Digital and Data profession. At this level a candidate deals with more complex issues: responsibility for code deployment and for co-ordinating change-based activities such as taking services live, and depending on a project's complexity and business impact, potentially managing and maintaining significant aspects of an application in their own right.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and professional judgement that predict success in a role. For a senior application operations engineer, that means far more than abstract puzzles. The assessments described here are job-specific: they use the artefacts the role genuinely handles — change requests, configuration records, availability and capacity reports, deployment plans, test results, incident timelines, and performance statistics — and the decisions the role genuinely makes, such as assessing the impact of a change, sequencing a go-live, diagnosing an incident from partial evidence, and deciding when to consult a specialist.

Why does this matter for the role? It sits at the point where change meets stability. Every deployment co-ordinated is a controlled risk; every incident diagnosed is reasoning under pressure; every capacity forecast is applied numeracy; every change request documented is an exercise in precise writing that others must act on safely. Assessments of cognitive ability, numerical reasoning, verbal reasoning, and situational judgement map directly onto those demands.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and the format to expect, a mapping of the assessment's dimensions to the specific skills in the role summary, a substantial set of items with full worked explanations for you to use as an answer key, administration notes, and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and the same time allowance for every candidate you assess at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so your record is honest. Afterwards, use the explanations to structure a debrief: what a strong answer looked like, and why. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. Instead of shapes and number sequences, it presents the everyday materials of application operations — change schedules, configuration baselines, deployment runbooks, monitoring output, dependency maps — and asks the candidate to reason quickly and accurately about them: recognising patterns, deducing consequences from rules, checking artefacts for errors, prioritising competing demands, and solving multi-constraint problems.

The typical format is an online, timed test lasting 15 to 30 minutes, with 20 to 30 questions of graduated difficulty. Scoring is objective against a norm group, and many modern platforms are adaptive, adjusting item difficulty to performance — so a test that feels progressively harder is often one going well. Employers usually receive a profile of speed versus accuracy rather than a single number.

For a senior application operations engineer, cognitive assessment is particularly relevant because professional value at this level is structured thinking under operational pressure. Diagnosing an incident is hypothesis elimination against evidence. Assessing a change's impact is tracing a dependency graph to its consequences. Reviewing a configuration record is error checking with an outage as the cost of a miss. Sequencing a go-live is constraint satisfaction with stakeholders attached. A well-designed cognitive assessment simulates precisely these demands in miniature — and because a candidate's decisions at this level would carry deployment authority and change co-ordination responsibility, the accuracy the test measures is the accuracy their colleagues would come to rely on.

### What it measures for the role

The assessment's dimensions map directly onto the named skills in the role summary:

- **Pattern recognition** maps to **Problem management** and **Technical specialism**: initiating and monitoring actions to investigate patterns and trends, and using logical schemata to investigate problems and collect performance statistics, both begin with seeing the recurring structure inside noisy operational data.
- **Logical deduction** maps to **Change management** and **Incident management**: analysing and assessing the impact of change means reasoning from dependency rules to consequences; diagnosing incidents means eliminating hypotheses that the evidence contradicts until a cause remains.
- **Error checking** maps to **Asset and configuration management** and **Testing**: maintaining secure configuration and accurate information, verifying the location and state of IT assets, and reviewing requirements and specifications to define test conditions all depend on spotting the record that contradicts reality or the specification that contradicts itself.
- **Prioritisation** maps to **Incident management** and **Availability and capacity management**: diagnosing and prioritising incidents, and managing service components against business needs and KPIs, require rapid, defensible ranking of what matters most right now.
- **Applied problem solving** maps to **Ownership and topic** and **Service focus**: owning an issue until it is resolved, mitigated, or properly handed over means driving multi-step reasoning to a conclusion; taking inputs and establishing coherent frameworks that work is problem solving at the level of process design.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition in a deployment naming convention**

A team tags releases using the pattern: application code (three letters), hyphen, environment (DEV, TST, or PRD), hyphen, version as major.minor.patch (for example, CMS-PRD-2.4.1). During an audit a candidate reviews five tags:

1. CMS-PRD-2.4.1
2. CMS-TST-2.4.2
3. CMS-PRD-2.5
4. DOC-DEV-1.0.0
5. DOC-TST-1.0.1

Which tag breaks the convention?

- A) Tag 2
- B) Tag 3
- C) Tag 4
- D) Tag 5

**Correct answer: B**

**Explanation:** Checking each element of the pattern in sequence — three-letter application code, environment from the permitted set, and a three-part version number — tags 1, 2, 4 and 5 conform in every element. Tag 3 has a two-part version, "2.5" instead of major.minor.patch, so it breaks the convention. This is trivial to fix and expensive to miss: automated deployment tooling frequently parses tags, and a malformed version can cause a pipeline to select the wrong artefact or fail silently. A candidate at this level, responsible for code deployment, is the person expected to catch this before the pipeline does — or does not. The item rewards verifying each component of a pattern rather than judging the string's overall shape, since the eye will happily normalise "2.5" into acceptability otherwise.

**Question 2 (easy) — Deduction from a change freeze rule**

A department's change policy states: "No production changes may be deployed during the change freeze, except emergency changes approved by the duty service manager." It is currently the change freeze, and a production change was deployed this morning. Which conclusion must be true?

- A) The change was an emergency change approved by the duty service manager.
- B) The change policy was breached.
- C) Either the change was an approved emergency change, or the policy was breached.
- D) The duty service manager deployed the change personally.

**Correct answer: C**

**Explanation:** The rule is a prohibition with a single permitted exception. A production deployment during the freeze is therefore either within the exception (an emergency change with the required approval) or a breach, and the facts given do not say which. Option A assumes compliance; option B assumes violation; neither is guaranteed. Option D confuses approving a change with executing it — the policy assigns the duty service manager an approval role, nothing more. Only option C, the disjunction, must be true in every scenario consistent with the facts. This has direct operational value: on discovering an unexpected production change, the professional first move is to check the emergency change record before concluding anything — an accusation of breach that turns out to be an approved emergency fix damages trust, while an assumption of approval that turns out to be a cowboy deployment misses a governance failure.

**Question 3 (easy) — Error checking a configuration record**

The configuration management database (CMDB) should record, for each server: hostname, environment, application, operating system version, and last patch date. A candidate is verifying this record against reality:

- Hostname: app-prd-03
- Environment: Production
- Application: Licensing Service
- OS version: 22.04 LTS
- Last patch date: 2026-11-03

Today is 14 August 2026. What is wrong with the record?

- A) The hostname format is invalid.
- B) The last patch date is in the future.
- C) The environment contradicts the hostname.
- D) Nothing is wrong.

**Correct answer: B**

**Explanation:** Sweeping every field: the hostname "app-prd-03" is well formed and its "prd" element agrees with the Production environment entry, so A and C fail. The application and OS entries are plausible. The last patch date, however, is 3 November 2026 — nearly three months after today's date of 14 August 2026, and a patch cannot have been applied in the future, so the record contains a data error (plausibly a transposition of 2026-03-11, or a mistyped month). This matters beyond tidiness: **Asset and configuration management** requires accurate information because patch dates drive security compliance reporting — a future-dated record could mask a server months overdue for patching. Dates deserve explicit checking against "today", since they are the field where plausible-looking nonsense most often hides.

**Question 4 (moderate) — Impact analysis across a dependency map**

A dependency documentation states: the Reporting application reads from the Data Warehouse; the Data Warehouse is loaded nightly from the Case System; the Notification service depends on the Case System's API; the Licensing service is fully independent. A change request proposes taking the Case System offline for four hours on Saturday night, spanning the nightly load window. Which services are affected, directly or indirectly?

- A) Case System only
- B) Case System and Notification service only
- C) Case System, Notification service, Data Warehouse load, and next-day Reporting freshness
- D) All services including Licensing

**Correct answer: C**

**Explanation:** Tracing the dependency graph outward from the changed component: direct dependents of the Case System are the Notification service (via the API — down for the outage window) and the nightly Data Warehouse load (which spans the outage and will fail or be incomplete). Tracing one more hop, Reporting reads from the Data Warehouse, so while Reporting itself stays up, its data will be stale the next day — an indirect but real business impact. Licensing is stated to be independent, so option D over-scopes. Options A and B stop tracing too early — the classic impact-analysis failure, since second-order effects are precisely the ones that surprise stakeholders. This is the **Change management** skill in its purest form: analysing and assessing the impact of change means following every edge of the graph to quiescence, then documenting the full blast radius in the change request so approvers decide with complete information.

**Question 5 (moderate) — Pattern recognition in performance statistics**

A candidate is reviewing weekly average response times (in milliseconds) for the case application over eight weeks: 210, 215, 208, 213, 260, 305, 352, 401. Which reading of this series is most accurate and most useful?

- A) Response times are stable — the average across all eight weeks is acceptable.
- B) The series shows a stable baseline around 210 ms for four weeks, then a sustained upward trend beginning in week 5, worsening by roughly 45-50 ms per week — an emerging degradation worth investigating now.
- C) Week 8 is a one-off outlier and can be ignored.
- D) The application is down.

**Correct answer: B**

**Explanation:** Partitioning the series before summarising it: weeks 1-4 oscillate tightly around 210 ms — a healthy, stable baseline. From week 5 the values climb: 260, 305, 352, 401 — four consecutive increases of roughly 45-50 ms each, a trend, not noise. Option A commits the averaging fallacy: a single mean across a regime change (about 271 ms) describes neither the healthy period nor the degrading one, and "acceptable on average" is how services drift into breach. Option C mislabels a four-point trend as a one-point outlier. Option D overstates — slow is not down. Reading B correctly matters for timing: **Availability and capacity management** means acting while the KPI is threatened rather than after it is breached, and the **Technical specialism** duty to collect performance statistics and forecast resource needs is exactly this — extrapolate the trend and intervene before users feel it.

**Question 6 (moderate) — Prioritisation across competing demands**

It is 09:30. Four items compete for a candidate's attention:

1. A severity 2 incident: document uploads failing for one directorate; the candidate is the assigned diagnostician.
2. A change request that must be documented by 16:00 today for tomorrow's Change Advisory Board (CAB), without which next week's go-live slips a fortnight.
3. A junior colleague asks for help interpreting an unfamiliar error message; they are blocked but their task is routine.
4. Monitoring shows disk usage on a production database server at 78%, trending up about 1% per day; the alert threshold is 90%.

Which sequencing is most defensible?

- A) 1, 3, 2, 4 — resolve the incident, unblock the junior briefly, then document the change, then plan disk remediation
- B) 2, 1, 3, 4 — the go-live has the largest long-term impact
- C) 1, 2, 3, 4 — strict severity order, juniors wait
- D) 4, 1, 2, 3 — capacity risks always come first

**Correct answer: A**

**Explanation:** Ranking by impact-weighted urgency and cost-of-delay: item 1 leads — a live severity 2 is degrading service for real users now, and the candidate is the assigned owner, engaging both **Incident management** and **Ownership and topic**. Item 3 comes next, briefly: unblocking a colleague costs minutes but recovers their whole morning, and a 10-minute assist barely delays the change documentation — pure cost-of-delay arithmetic, plus the collaborative behaviour senior engineers are expected to model. Item 2 follows with hours of margin against its 16:00 deadline; high-stakes but not yet time-critical, and incident diagnosis cannot be batch-scheduled while documentation can. Item 4 is genuinely important and genuinely not urgent: at roughly 1% per day, the 90% threshold is about twelve days away — schedule remediation this week, but it displaces nothing today. Option B lets a tomorrow deadline outrank a now impact; option C wastes a colleague's morning to save minutes; option D confuses a forecastable risk with an active one. The pattern this item rewards: sequence by impact and urgency jointly, and price in how cheaply each item can be deferred or delegated.

**Question 7 (moderate) — Deduction in incident diagnosis**

Users in Office A report that the case application is completely unavailable; users in Office B report it working normally. Monitoring shows the application servers healthy, response times normal, and error rates flat. Office A can reach other applications hosted in the same data centre without difficulty. Which hypothesis best fits all the evidence?

- A) The application servers have crashed.
- B) The data centre's internet connection is down.
- C) A network path or configuration issue specific to Office A's route to this application — such as a proxy rule, firewall change, or DNS issue affecting that office.
- D) The application's database is corrupted.

**Correct answer: C**

**Explanation:** Diagnosing by elimination against every fact: server crash (A) is contradicted twice — monitoring shows healthy servers, and Office B is using the application right now. Data centre connectivity (B) is contradicted, since Office A reaches other applications in the same data centre. Database corruption (D) is contradicted, since corruption would affect both offices and surface in error rates, which are flat. Hypothesis C alone is consistent with the full evidence set: the fault lies on the specific path between Office A and this application. The diagnostic power of "who is NOT affected?" is worth noting — Office B's normality eliminated more hypotheses than Office A's outage suggested. This item tests **Incident management** as the framework intends: diagnosis is retaining only the hypotheses that survive every observed fact, then testing the survivor.

**Question 8 (moderate) — Error checking a test specification**

A test plan for a change to the payments application states: (i) "All test conditions must be traceable to a documented requirement." (ii) "Regression tests will cover requirements R1 to R6." (iii) "Test condition TC-9 verifies the new bulk-payment limit described in requirement R7." (iv) "Requirement R7 was descoped from this release at the March board." Assuming statements (i), (ii), and (iv) are correct, what is wrong with the plan?

- A) TC-9 is traceable to R7, so the plan is internally consistent.
- B) TC-9 tests a requirement that is no longer in the release, so either TC-9 should be removed or the plan must explain why a descoped requirement is being tested.
- C) The regression tests should cover R7 as well.
- D) Requirement R7 should be reinstated because a test exists for it.

**Correct answer: B**

**Explanation:** Reconciling the statements: TC-9 traces to R7, satisfying rule (i) mechanically — but statement (iv) says R7 was descoped in March. A test condition verifying functionality not in the release is at best wasted effort and at worst dangerous: if TC-9 "passes", it implies bulk-payment limit behaviour exists in a release that should not contain it, itself a defect. Option A mistakes formal traceability for validity. Option C would extend regression coverage to descoped functionality, compounding the error. Option D inverts authority — test artefacts follow scope decisions, not the reverse. The correct finding is B: flag the stale condition, remove or annotate it, and check whether other artefacts also predate the March descope. This item tests the **Testing** skill — reviewing requirements and specifications, defining test conditions, and identifying issues and risks — applied as document-set consistency checking, which is precisely how release-day surprises are prevented.

**Question 9 (hard) — Sequencing a go-live under constraints**

A go-live requires five activities: database migration (M, 2 hours), application deployment (D, 1 hour), smoke testing (S, 1 hour), DNS cutover (C, 30 minutes), and stakeholder notification of completion (N, immediate). Constraints: (i) D cannot start until M completes; (ii) S cannot start until D completes; (iii) C may only happen if S passes; (iv) the outage window is 22:00 to 03:00; (v) if at any point the remaining required activities cannot fit in the window, rollback must be invoked, which takes 90 minutes and must complete inside the window. M starts on time at 22:00 but completes at 00:15 instead of 00:00. What is the correct decision at 00:15?

- A) Continue: D, S and C need 2.5 hours, finishing at 02:45, inside the window — and rollback remains possible until 01:30 if needed.
- B) Invoke rollback immediately — the migration overran, so the plan has failed.
- C) Continue, but skip smoke testing to recover the lost 15 minutes.
- D) Extend the outage window unilaterally by 30 minutes to restore contingency.

**Correct answer: A**

**Explanation:** Doing the arithmetic before the adrenaline: at 00:15, remaining required work is D (1 h) + S (1 h) + C (0.5 h) = 2.5 hours, completing at 02:45 — 15 minutes inside the 03:00 boundary, so constraint (v) does not trigger and continuing is legitimate. It is also worth computing the rollback horizon: rollback takes 90 minutes and must finish by 03:00, so the last safe moment to invoke it is 01:30 — the true decision point is the end of D (01:15), after which a bad smoke-test verdict at 02:15 would leave rollback no longer available. Option B abandons a still-viable plan — a 15-minute overrun is not a failure condition when the arithmetic still closes. Option C is the classic go-live sin: constraint (iii) makes smoke testing the gate that protects users from a bad cutover, and trading verification for schedule inverts the purpose of the window. Option D exceeds the candidate's authority and breaks faith with every stakeholder who agreed the window. This item rewards recomputing feasibility at each milestone and knowing the last-safe-rollback time in advance — exactly what a senior engineer co-ordinating go-lives is trusted to do.

**Question 10 (hard) — Deducing a root cause from correlated events**

Over three weeks, the licensing application has crashed six times. A candidate assembles the facts: crashes occur only on weekdays; all six occurred between 08:50 and 09:20; memory usage climbs steadily from 07:00 each weekday and the crashes coincide with its peak; a data import job runs at 07:00 on weekdays; weekend memory usage stays flat; the import job was upgraded to handle larger files three weeks ago. Which explanation best fits all the evidence?

- A) Users logging in at 09:00 overload the application.
- B) Since its upgrade three weeks ago, the weekday 07:00 import job consumes progressively more memory, and the application crashes when the morning login load arrives on top of the already-elevated memory — the upgrade is the likely root of the change in behaviour.
- C) The crashes are random and coincidentally cluster in the morning.
- D) Weekend batch processing corrupts the application state.

**Correct answer: B**

**Explanation:** Testing each hypothesis against every fact, especially the discriminating ones: pure login load (A) explains the 08:50-09:20 timing but not why the problem began three weeks ago, nor why memory climbs from 07:00, before users arrive. Randomness (C) is refuted by the tight temporal clustering and the clean weekday/weekend split. Weekend processing (D) is contradicted directly, since weekend memory stays flat and crashes never occur then. Hypothesis B alone accounts for the full set: the upgraded import job elevates memory from 07:00 on exactly the days crashes occur, and the morning login wave supplies the final increment that exceeds the limit. Worth noting the investigative principles this item rehearses: behavioural changes usually trace to system changes ("what changed three weeks ago?"), and absence of symptoms (quiet weekends) eliminates hypotheses as powerfully as their presence. This engages the **Problem management** skill — investigating patterns and trends to resolve problems and determine preventative measures, which here might mean re-profiling the upgraded job's memory or rescheduling it away from the login peak.

**Question 11 (hard) — Multi-constraint change scheduling**

Three changes need scheduling next week: CH-1 (patch the database server, 2-hour outage of the case application), CH-2 (deploy new reporting features, requires the database patch to be in place first, 1-hour outage of reporting), CH-3 (network firmware upgrade, 1-hour outage of everything in the data centre). Constraints: (i) only one change per night; (ii) changes run in the 23:00-04:00 window; (iii) CH-3's network engineer is available only Tuesday and Thursday; (iv) the case application must not be disturbed on Wednesday night because month-end casework runs then; (v) CH-2 must complete before Friday, when the reporting features are announced. Which schedule satisfies all constraints?

- A) CH-1 Monday, CH-2 Wednesday, CH-3 Thursday
- B) CH-1 Tuesday, CH-2 Wednesday, CH-3 Thursday
- C) CH-3 Tuesday, CH-1 Wednesday, CH-2 Thursday
- D) CH-1 Monday, CH-3 Tuesday, CH-2 Thursday

**Correct answer: D**

**Explanation:** Encoding the constraints, then testing each option: CH-1 must precede CH-2 (CH-2 requires the database patch); CH-3 must fall on Tuesday or Thursday (iii); Wednesday night must not disturb the case application (iv), which excludes CH-1 (a case-application outage) and CH-3 (an everything outage) from Wednesday, and prudently excludes CH-2 too, since CH-2 deploys against and exercises the same database that month-end casework depends on; and CH-2 must complete before Friday (v). Option C fails immediately: scheduling CH-1 on Wednesday puts a two-hour case-application outage in the middle of month-end casework, a direct breach of (iv). Options A and B both place CH-2 on Wednesday night — the reporting outage does not touch the case application directly, but deploying database-dependent features during the one protected night creates exactly the interpretive risk a change advisory board exists to reject. Option D alone keeps Wednesday entirely change-free: CH-1 on Monday, CH-3 on Tuesday matching the network engineer's availability, CH-2 on Thursday running after CH-1 and completing before Friday's announcement. This item mirrors real CAB practice: when one schedule merely probably respects a business-protection constraint and another certainly does, the certain one is the defensible submission.

**Question 12 (hard) — Establishing a coherent framework from messy inputs**

A candidate inherits an application whose operational practices are inconsistent: some changes are logged in the ticketing system, some in a spreadsheet, some only in emails; three of nine servers are missing from the CMDB; monitoring alerts go to a mailbox nobody owns; and two undocumented "temporary" configuration workarounds have been live for over a year. Time is limited and not everything can be fixed at once. Which first move creates the most coherent foundation for everything else?

- A) Delete the spreadsheet and emails, and declare the ticketing system the single source of truth from today.
- B) Establish an accurate baseline first: audit and register all nine servers and the two workarounds in the CMDB, then route all change recording through the ticketing system, then assign ownership of the alert mailbox — because every other control depends on knowing what actually exists.
- C) Fix the two workarounds first, since they are the oldest problems.
- D) Set up a new monitoring dashboard to get visibility of live issues.

**Correct answer: B**

**Explanation:** This item poses the **Service focus** skill — taking inputs and establishing coherent frameworks that work — as a sequencing problem, and the key is dependency ordering among the controls themselves. Change control (option A's instinct) cannot work while the CMDB is missing a third of the estate and two live workarounds are invisible: assessing the impact of a change to assets nobody knows exist is impossible, so declaring a single source of truth before making it true merely centralises the fiction. Remediating the workarounds first (C) is action without assessment — undocumented year-old workarounds may be load-bearing, and touching them before registering and understanding them is how "temporary fix removed" becomes a severity 1. New dashboards (D) add observation without ownership. Option B sequences correctly: first make the configuration record match reality (**Asset and configuration management**), because an accurate baseline is the precondition for meaningful change control, impact assessment, and monitoring; then channel changes through one system; then give alerts an owner.

### Administration tips

- **Let the candidate see the working, not just the answer**, where your platform allows it — reasoning that reaches the wrong answer through a sound method is a different signal from a guess.
- **Watch specifically for whether a candidate traces impact to second-order effects** (Question 4) — this is one of the strongest predictors of change-management competence at this level.
- **Note how a candidate handles the arithmetic-under-pressure items** (Questions 9 and 11) — recomputing feasibility at a milestone, rather than reacting emotionally to a slip, is exactly the behaviour the role needs live.
- **Keep timing consistent** across candidates for this level.
- **Use the explanations as debrief material**, especially where a candidate's reasoning diverged from the model answer in an interesting way.

### Common pitfalls to watch for when scoring

- **Stopping impact analysis at first-order effects.** A candidate who names only the directly affected service, missing the second-order consequence, is showing an incomplete version of change-impact thinking worth probing further.
- **Averaging across a regime change**, rather than partitioning a data series before summarising it.
- **Letting formal consistency mask real inconsistency** — accepting that a test traces to a requirement without checking whether that requirement is still in scope.
- **Treating overruns as automatic failures**, rather than recomputing feasibility.
- **Skipping verification to recover schedule** — any answer that trades a smoke test or health check for time should be scored as a risk signal, not efficiency.
- **Trusting plausible-looking data** without checking content against context, such as a future-dated patch record.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the quantitative material this role genuinely produces: availability percentages, capacity utilisation figures, incident and change volumes, deployment success rates, performance statistics, and resource forecasts. The candidate will read tables and charts, calculate percentages, ratios, weighted averages, and rates of change, and — the distinctly senior element — interpret what the numbers imply for decisions: when will this disk fill, is this KPI trending toward breach, did that remedy actually work?

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 questions, each presenting data and four options. Calculators are permitted; methodical rough work is expected. The arithmetic itself is deliberately unexotic — the challenge is applying it precisely to operational data under time pressure, choosing the right numerator, the right denominator, and the right interpretation.

Why does this matter for the role? Because at senior level these numbers become commitments. A resource forecast is what procurement acts on. An availability figure reported against a KPI is what a service review meeting acts on. A capacity impact assessment is what a CAB approves on. The role summary is explicit: optimise performance and forecast resource needs, collect performance statistics and create reports, and manage service components against business needs and KPIs. Every one of those duties has a calculation at its core, and a senior engineer whose calculations are trusted saves the organisation from both outages (under-provisioning) and waste (over-provisioning).

The items below use the data this role actually handles, and every explanation shows the arithmetic step by step for your reference when scoring, since in this role the working matters as much as the answer — it is what a candidate would be asked to show when a stakeholder challenges the figure.

### What it measures for the role

- **Percentages, availability and KPI arithmetic** map to **Availability and capacity management**: managing service components to meet business needs and KPIs means converting between availability percentages and downtime minutes, comparing performance against targets, and knowing exactly what "99.9%" commits you to.
- **Trends, rates and forecasting** map to **Technical specialism**: optimising performance and forecasting resource needs is extrapolation done honestly.
- **Before-and-after comparison** maps to **Problem management**: determining whether a resolution or preventative measure worked is a numerical question.
- **Volume, ratio and workload analysis** map to **Incident management** and **Change management**: prioritising incidents and assessing change impact both draw on volumes, proportions, and failure rates, including deployment success statistics.
- **Test result analysis** maps to **Testing**: analysing and reporting test activities and results means pass rates, defect densities, and coverage percentages, reported without distortion.
- **User data interpretation** maps to **User focus**: using quantitative and qualitative data about users to turn user focus into outcomes starts with reading usage and satisfaction figures correctly.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Availability percentage**

The case application was unavailable for a total of 6 hours during a 30-day month. Assuming a 24-hour service, what was its availability for the month, to one decimal place?

- A) 99.2%
- B) 99.7%
- C) 98.8%
- D) 97.5%

**Correct answer: A**

**Explanation:** Total hours in the month = 30 × 24 = 720. Available hours = 720 − 6 = 714. Availability = 714 ÷ 720 = 0.99166…, which is 99.2% to one decimal place. A useful cross-check: 1% of 720 hours is 7.2 hours, so 6 hours of downtime must cost slightly less than one percentage point, landing just above 99% — consistent with 99.2%. This conversion fluency is foundational to **Availability and capacity management**: KPIs are set in percentages, but outages happen in hours, and a senior engineer needs to translate between them accurately in both directions.

**Question 2 (easy) — Change success rate**

Last quarter a team implemented 80 changes: 68 succeeded, 7 succeeded with minor issues, and 5 failed and were rolled back. What percentage of changes failed?

- A) 5%
- B) 6.25%
- C) 8.75%
- D) 15%

**Correct answer: B**

**Explanation:** The part is 5 failed changes, the whole is 80 total: 5 ÷ 80 = 0.0625, × 100 = 6.25%. Option A mistakes the raw count for a percentage. Option C is the "succeeded with minor issues" proportion (7 ÷ 80), and option D is those two categories combined (12 ÷ 80 = 15%) — worth noticing, because how an organisation classifies "succeeded with issues" changes the headline figure, and a senior engineer documenting change outcomes should state the definition alongside the number.

**Question 3 (easy) — Reading a capacity table**

A storage report for three production database servers shows:

| Server | Capacity (GB) | Used (GB) |
|---|---|---|
| db-prd-01 | 500 | 425 |
| db-prd-02 | 800 | 560 |
| db-prd-03 | 400 | 350 |

Which server has the highest percentage utilisation?

- A) db-prd-01
- B) db-prd-02
- C) db-prd-03
- D) They are equal

**Correct answer: C**

**Explanation:** Calculating each utilisation separately: db-prd-01: 425 ÷ 500 = 85%. db-prd-02: 560 ÷ 800 = 70%. db-prd-03: 350 ÷ 400 = 87.5%. The highest is db-prd-03, despite holding the least data in absolute terms. The trap is db-prd-02, whose 560 GB is the biggest raw number. In capacity management, percentage utilisation (with growth rate) determines urgency, not absolute usage — db-prd-03 is the server closest to its ceiling and the one a candidate's forecasting should flag first.

**Question 4 (moderate) — Downtime budget for a KPI**

A service's availability KPI is 99.9% measured over a 365-day year, 24 hours a day. To the nearest quarter of an hour, how much total downtime per year does the KPI permit?

- A) About 4 hours 30 minutes
- B) About 8 hours 45 minutes
- C) About 17 hours 30 minutes
- D) About 43 hours 45 minutes

**Correct answer: B**

**Explanation:** Total hours per year = 365 × 24 = 8,760. The KPI permits 0.1% downtime: 8,760 × 0.001 = 8.76 hours, and 0.76 × 60 ≈ 45.6 minutes, so approximately 8 hours 45 minutes. Option D is the 99.5% budget and option A is roughly the 99.95% budget — the wrong-decimal traps. This is a number worth a candidate knowing cold: a single mishandled four-hour outage consumes nearly half the annual budget of a 99.9% service, which is why incident diagnosis speed and change scheduling both connect directly to this KPI.

**Question 5 (moderate) — Percentage change in incident volume after a fix**

A recurring defect generated 45 incidents in June. A preventative measure was implemented in early July, and July saw 27 incidents of the same type. By what percentage did the monthly incident count fall?

- A) 18%
- B) 27%
- C) 40%
- D) 60%

**Correct answer: C**

**Explanation:** The fall is 45 − 27 = 18, divided by the original figure: 18 ÷ 45 = 0.4, so 40%. Option A presents the raw difference as a percentage; option D is 27 ÷ 45 = 60%, the proportion remaining, not the fall — "fell by 40%" and "fell to 60%" describe the same data, and confusing the two is a common and consequential error. This calculation is central to the **Problem management** duty to determine and verify preventative measures: a 40% reduction is evidence of partial effectiveness, and an honest report says exactly that — the measure helped, but 27 incidents a month means the root cause is not fully addressed.

**Question 6 (moderate) — Weighted average resolution time**

Last month a candidate resolved 30 severity 3 incidents averaging 3 hours each, 12 severity 2 incidents averaging 7 hours each, and 3 severity 1 incidents averaging 11 hours each. What was the overall average resolution time across all 45 incidents, to one decimal place?

- A) 7.0 hours
- B) 4.6 hours
- C) 4.1 hours
- D) 5.2 hours

**Correct answer: B**

**Explanation:** A simple average of 3, 7 and 11 gives 7.0 (option A) — wrong, because the groups differ greatly in size. Weighting by volume: severity 3 total = 90 hours, severity 2 total = 84 hours, severity 1 total = 33 hours, grand total 207 hours ÷ 45 incidents = 4.6 hours. Sense-check: two-thirds of incidents are the 3-hour kind, so the answer must sit much nearer 3 than 11 — 4.6 passes; 7.0 fails on inspection alone. Weighted thinking pervades senior reporting: whenever categories of different sizes are combined, combine the totals first, since a report built on unweighted averages overstates the experience of the rare cases.

**Question 7 (moderate) — Forecasting disk exhaustion**

A production database currently uses 620 GB of its 800 GB allocation. Usage has grown consistently by 30 GB per month. Procurement of additional storage takes two months from request to availability, and the team's standard practice is to keep at least one month of growth in reserve as a safety margin. If growth continues at the current rate, how many months from now will the disk reach capacity, and what should be done?

- A) 12 months — no action needed this year.
- B) 6 months — note it in the capacity plan and review again next quarter.
- C) 3 months — raise the request immediately.
- D) 6 months — raise the request within the next month or two, because the two-month lead time plus the one-month safety margin consumes half the runway.

**Correct answer: D**

**Explanation:** Remaining headroom = 800 − 620 = 180 GB, and 180 ÷ 30 = 6 months to exhaustion. Working backwards from exhaustion is the step that separates a calculation from a forecast: new storage must be available one month of growth before exhaustion (the safety margin), by month 5; procurement takes two months, so the request must be raised by month 3. Waiting until "next quarter's review" (option B) burns half of that decision window. Option A's 12 months would require half the observed growth rate; option C confuses the request-by date with the exhaustion date. This item rewards reporting both the forecast and the timed recommendation: runway minus lead time minus safety margin equals the true decision window, which a senior engineer should report rather than the raw runway alone.

**Question 8 (moderate) — Test pass rates across cycles**

A regression suite of 240 tests was run in two cycles before a release. Cycle 1: 216 passed. Cycle 2 (after fixes): 234 passed. What were the pass rates for each cycle, and what was the percentage-point improvement?

- A) 90% then 97.5%; improvement 7.5 percentage points
- B) 90% then 97.5%; improvement 8.3 percentage points
- C) 92.5% then 99%; improvement 6.5 percentage points
- D) 90% then 95%; improvement 5 percentage points

**Correct answer: A**

**Explanation:** Cycle 1: 216 ÷ 240 = 90%. Cycle 2: 234 ÷ 240 = 97.5%. Improvement in percentage points = 97.5 − 90 = 7.5. Option B's "8.3" is the relative improvement (7.5 ÷ 90) mislabelled as points — the distinction between percentage points and relative percentage change is a favourite discriminator and a genuine reporting hazard, and this item tests whether a candidate keeps the two separate. Worth noting operationally: 6 tests still fail, and a release decision needs to know which six — pass rates summarise, but go-live gates are about the content of the failures, not the percentage alone.

**Question 9 (hard) — Deployment window arithmetic**

A deployment consists of: pre-checks (15 minutes), database migration (75 minutes), application deployment (40 minutes), smoke tests (30 minutes), and DNS cutover (10 minutes), executed sequentially. Rollback, if needed, takes 50 minutes from the moment it is invoked. The change window is 23:00 to 03:00. What is the latest clock time at which rollback can be invoked and still complete within the window, and does the plan leave any slack if everything runs to time?

- A) Latest rollback 02:10; the plan has 70 minutes of slack.
- B) Latest rollback 02:10; the plan has 30 minutes of slack.
- C) Latest rollback 01:50; the plan has 30 minutes of slack.
- D) Latest rollback 02:30; the plan has no slack.

**Correct answer: B**

**Explanation:** Two calculations: rollback horizon — 50 minutes, must finish by 03:00, so latest invocation is 02:10. Plan duration — 15 + 75 + 40 + 30 + 10 = 170 minutes against a 240-minute window, giving 70 minutes of schedule slack. But schedule slack and decision-preserving slack are different things: smoke tests nominally end at 01:40, and the option to still choose rollback survives only until 02:10, giving 30 minutes of genuinely usable contingency that keeps the abort option alive. Option B captures both figures correctly. This layered arithmetic — schedule slack versus decision-preserving slack — is exactly the calculation a senior engineer runs when co-ordinating a go-live.

**Question 10 (hard) — Capacity headroom under growth and a step change**

An application server pool handles a peak of 1,200 requests per minute and has a tested capacity of 2,000 requests per minute. Organic traffic grows 5% per quarter (compounding). Next quarter, a departmental consolidation will also migrate a workload adding a one-off 300 requests per minute to the peak. If both occur, what will peak demand be at the end of next quarter, and how much headroom remains?

- A) 1,560 rpm; 440 rpm headroom (22% of capacity)
- B) 1,500 rpm; 500 rpm headroom (25% of capacity)
- C) 1,575 rpm; 425 rpm headroom
- D) 1,860 rpm; 140 rpm headroom (7% of capacity)

**Correct answer: A**

**Explanation:** One quarter of organic growth: 1,200 × 1.05 = 1,260 rpm. Adding the migration's step change: 1,260 + 300 = 1,560 rpm. Headroom: 2,000 − 1,560 = 440 rpm, or 22% of capacity. Option B forgets the organic growth; option C applies 5% after adding the step, which is the wrong order since the migration lands at quarter end after organic growth has accrued; option D erroneously compounds several quarters. The senior-level insight this item tests is the trajectory, not the snapshot: 22% headroom sounds tolerable, but with continued compounding growth on a 1,560 base, the pool crosses a typical 80% utilisation planning threshold almost immediately — the correct operational output is a capacity plan and a procurement recommendation now.

**Question 11 (hard) — Comparing incident profiles across two applications**

Two applications a candidate supports produced this quarter's figures: App X — 120 incidents, of which 18 were severity 1 or 2; App Y — 45 incidents, of which 9 were severity 1 or 2. A colleague says: "App X is the bigger problem — it produced nearly three times the incidents and twice the serious ones." What do the proportions show?

- A) The colleague is right: App X is worse on both measures.
- B) App X produces more incidents in total, but App Y has the higher *rate* of serious incidents: 20% of its incidents are severity 1-2 versus 15% for App X.
- C) The applications have identical serious-incident rates.
- D) App Y is worse on both measures.

**Correct answer: B**

**Explanation:** App X: 18 ÷ 120 = 15% serious. App Y: 9 ÷ 45 = 20% serious. The colleague's absolute claims are true (120 > 45; 18 > 9), but the profile claim is not: when an App Y incident occurs, it is more likely to be serious. Both views matter and drive different actions: App X's volume argues for problem-management attention to its high-frequency defects; App Y's severity skew argues for investigating why its failures tend to be grave. Option B is the only statement the arithmetic supports. This item quantifies **Problem management**: initiating investigations into patterns and trends starts with computing rates, not just counts, because counts follow size and usage while rates reveal character.

**Question 12 (hard) — User research data and an outcome decision**

To assess a new self-service password reset feature, a candidate gathers data: in the four weeks before launch, the service desk averaged 190 password-reset tickets per week. In the four weeks after launch, the weekly numbers were 150, 130, 115, 105. A survey of 400 users who tried the feature found 340 rated it "easy" or "very easy". What weekly reduction (final week versus baseline) and satisfaction rate do the data show, and what is the soundest conclusion?

- A) 45% reduction; 85% satisfaction; the feature is succeeding and the trend suggests further improvement as adoption grows.
- B) 26% reduction; 85% satisfaction; the feature has plateaued.
- C) 45% reduction; 340% satisfaction; success.
- D) 45% reduction; 85% satisfaction; the feature has failed because 105 tickets still arrive weekly.

**Correct answer: A**

**Explanation:** Reduction: 190 − 105 = 85, and 85 ÷ 190 ≈ 45%. Satisfaction: 340 ÷ 400 = 85%. Option B's 26% uses the average of the four post-launch weeks (125) — defensible, but the question asks final week versus baseline, and the week-on-week series (150 → 130 → 115 → 105) shows continuing decline, contradicting "plateaued". Option C's "340%" divides by nothing sensible, a reminder to sanity-check that a percentage of people cannot exceed 100. Option D demands perfection — some resets will always need human help, and 105 weekly tickets against a falling trend is not failure. This item tests the **User focus** skill exactly as the role summary states it: using quantitative data about users to turn user focus into outcomes — a strong candidate would state both figures, note the still-declining trend, and recommend re-measuring after adoption stabilises.

### Administration tips

- **Have the candidate show working where your platform allows it.** A candidate who divides by the wrong base but shows their steps is easier to coach than one whose answer is simply wrong.
- **Watch specifically for the weighted-average and percentage-points traps** (Questions 6 and 8) — both appear constantly in real senior reporting.
- **Score the decision-window items (Questions 7 and 9) for the reasoning, not just the final number** — a candidate who reasons through lead time and safety margin, even with a small arithmetic slip, is showing the judgement the role needs.
- **Keep timing consistent** across candidates for this level.
- **Use the explanations to debrief on reporting practice** — several items map directly onto real stakeholder-facing figures the candidate would produce.

### Common pitfalls to watch for when scoring

- **Ranking by raw numbers when rates are asked.** The biggest server or largest count is not necessarily the closest to its limit or the worst per-incident.
- **Averaging away a regime change**, rather than partitioning a series before comparing.
- **Confusing "fell by 40%" with "fell to 40%"**, reversing a conclusion about whether a remedy worked.
- **Forgetting lead times in forecasts** — reporting raw runway rather than the true decision window.
- **Reporting percentages without stating the definition used**, which invites the figure to be challenged.
- **Spending disproportionate time rescuing one hard item** at the expense of several easier ones.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how precisely a candidate extracts meaning, conditions, and implications from the written material this role runs on: change policies, service management standards, supplier notices, incident reports, test summaries, and stakeholder communications. The dominant format presents a short passage followed by statements to classify as **True** (the passage supports it), **False** (the passage contradicts it), or **Cannot say** (the passage provides insufficient information). Supporting formats include best-summary questions, inference questions, and clear-writing judgement.

The typical format is an online, timed test of 15 to 25 minutes covering 20 to 30 statements across several passages. The governing rule for the candidate: answer from the passage alone, not from professional knowledge. This is harder for experienced practitioners than for novices — an experienced candidate knows how change management usually works, and this section deliberately includes passages that deviate from common practice to check whether the candidate reads what is written or what they expect.

Why does this matter for the role? Because at senior level, misreading is an operational hazard with a blast radius. A candidate at this level would be responsible for code deployment and for co-ordinating change activities: the difference between "changes must be approved before scheduling" and "changes must be scheduled before approval" is a governance breach; the difference between "the patch may be applied to clustered nodes sequentially" and "must be applied simultaneously" is an outage. The role also writes documents others act on, so the clear-writing dimension measures the other half of the same skill: producing text that cannot be reasonably misread.

The passages below are drawn from the role's genuine document diet: a change management policy extract, a supplier security notice, and an incident report with stakeholder communications.

### What it measures for the role

- **Precise reading of conditions** maps to **Change management**: documenting change requests and actioning changes from change requests requires exact comprehension of approval conditions, freeze exceptions, and rollback triggers.
- **Inference discipline** maps to **Incident management** and **Problem management**: diagnosing causes and investigating trends both demand the distinction between what the evidence states, what it implies, and what it merely fails to rule out.
- **Standards comprehension** maps to **Service management framework knowledge**: precise reading of framework definitions — the difference between an incident and a problem, a change and a release.
- **Reading user and stakeholder language** maps to **User focus**: collating user needs evidence begins with accurately understanding what users and stakeholders have actually said.
- **Clear-writing judgement** maps to **Ownership and topic** and **Testing**: owning an issue through to handover, and analysing and reporting test activities and results, both culminate in written artefacts whose value is exactly their clarity.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Passage 1 — Change management policy extract**

*"Standard changes are pre-approved, low-risk changes with an established procedure; they may be implemented without Change Advisory Board (CAB) review but must still be recorded before implementation. Normal changes require CAB approval before scheduling. Emergency changes may be implemented before approval is obtained, but only where delay would cause significant service impact, and retrospective approval must be sought at the next CAB meeting. Any change that fails must be reported to the CAB regardless of its category. The CAB meets every Wednesday. A change implemented under the emergency provision that is subsequently refused retrospective approval must be reversed within five working days of the refusal, unless reversal would itself cause greater service impact, in which case the service owner decides the way forward."*

**Question 1 (easy) — True, false, or cannot say**

Statement: "Standard changes do not need to be recorded."

- A) True
- B) False
- C) Cannot say
- D) True, provided the change succeeds

**Correct answer: B**

**Explanation:** The passage states that standard changes "may be implemented without Change Advisory Board (CAB) review but must still be recorded before implementation." The statement directly contradicts the recording requirement, so it is False. This item mirrors a real comprehension hazard: "pre-approved" and "without CAB review" create an impression of informality that extends — incorrectly — to "no recording either". Policies frequently relax one control while retaining another, and the retained control is what audits check.

**Question 2 (easy) — True, false, or cannot say**

Statement: "Normal changes must be approved by the CAB before they are scheduled."

- A) True
- B) False
- C) Cannot say
- D) False, because approval follows scheduling

**Correct answer: A**

**Explanation:** The passage says: "Normal changes require CAB approval before scheduling." The statement restates this accurately, so it is True. Note the ordering language: "approval before scheduling" is a sequence constraint, and sequence constraints are where paraphrase most often goes wrong (option D asserts the reversed sequence). Verbal reasoning at senior level is substantially the accurate handling of before/after, may/must, and unless/only-if structures, because an operational calendar is built from them.

**Question 3 (moderate) — True, false, or cannot say**

Statement: "An emergency change implemented on a Thursday must receive retrospective approval within five working days."

- A) True
- B) False
- C) Cannot say
- D) True, because the CAB meets weekly

**Correct answer: B**

**Explanation:** Retrospective approval for an emergency change "must be sought at the next CAB meeting". The CAB meets every Wednesday, so a Thursday emergency change goes to the following Wednesday's meeting — approval must be sought there, but the passage sets no deadline for approval to be received, and the five-working-day figure belongs to a different rule entirely: the reversal deadline after a refusal of retrospective approval. The statement splices two provisions into a requirement the passage never makes — False. This splicing pattern is a premium trap: when a statement quotes a figure, a candidate should return to the passage and confirm which rule the figure genuinely governs.

**Question 4 (moderate) — True, false, or cannot say**

Statement: "If an emergency change is refused retrospective approval, it will always be reversed."

- A) True
- B) False
- C) Cannot say
- D) True, within five working days

**Correct answer: B**

**Explanation:** The passage requires reversal within five working days of refusal — "unless reversal would itself cause greater service impact, in which case the service owner decides the way forward." The exception means reversal is not guaranteed in every case. "Always" is contradicted by the explicit exception, making the statement False (and D fails with it). Absolute quantifiers — always, never, all, none — are the highest-value words in any statement to be judged: a single documented exception defeats them.

**Passage 2 — Supplier security notice**

*"Security bulletin SB-2044: A vulnerability has been identified in versions 8.0 through 8.6 of the platform. Version 8.7, released today, resolves the issue. Customers running affected versions should apply the 8.7 update within 14 days. For clustered deployments, nodes may be updated sequentially without a full outage, provided all nodes are updated within a single 24-hour period; mixed-version clusters operating beyond 24 hours are unsupported and may exhibit data synchronisation errors. Customers unable to update within 14 days should apply the interim mitigation described in appendix A, which reduces but does not eliminate exposure. Exploitation of this vulnerability has been observed in the wild. This bulletin will be updated if further information becomes available."*

**Question 5 (moderate) — True, false, or cannot say**

Statement: "A clustered deployment can be updated to 8.7 without any full outage, as long as every node is updated within 24 hours."

- A) True
- B) False
- C) Cannot say
- D) True, but only for version 8.6 clusters

**Correct answer: A**

**Explanation:** The passage states: "For clustered deployments, nodes may be updated sequentially without a full outage, provided all nodes are updated within a single 24-hour period." The statement reproduces both the permission and its condition, so it is True. Option D invents a version restriction the passage does not make. This item samples condition-complete reading: a permission and its proviso form a single unit of meaning, and transcribing the permission without the 24-hour proviso is how a two-day rolling update becomes an unsupported mixed-version cluster.

**Question 6 (moderate) — Inference from the bulletin**

Which one of the following can properly be inferred from the bulletin?

- A) Version 7.9 is affected by the vulnerability.
- B) The supplier regards this vulnerability as carrying real, current risk, since exploitation has been observed in the wild and the mitigation only reduces exposure.
- C) Applying the appendix A mitigation makes updating to 8.7 unnecessary.
- D) All customers will be able to update within 14 days.

**Correct answer: B**

**Explanation:** A: the affected range is "8.0 through 8.6"; the bulletin says nothing about 7.9. C: the mitigation "reduces but does not eliminate exposure" and is explicitly for customers unable to update within 14 days — an interim measure, not a substitute. D: the existence of provisions for customers "unable to update within 14 days" points the other way. B synthesises two stated facts — observed exploitation and residual exposure — into the conclusion they jointly compel. Sound inference combines stated facts into their necessary consequence; unsound inference imports facts from outside the text — and B is also the sentence a candidate at this level would write in a change request's justification field to secure expedited approval.

**Question 7 (hard) — True, false, or cannot say**

Statement: "A customer who updates half their cluster's nodes on Monday morning and the remainder on Thursday will have an unsupported configuration in the interim."

- A) True
- B) False
- C) Cannot say
- D) True, but only if data synchronisation errors actually occur

**Correct answer: A**

**Explanation:** The bulletin permits sequential updates "provided all nodes are updated within a single 24-hour period" and states that "mixed-version clusters operating beyond 24 hours are unsupported". Monday morning to Thursday is roughly three days, far beyond 24 hours, so the cluster is unsupported in the interim — True. Option D confuses status with symptoms: the configuration is unsupported by rule, whether or not synchronisation errors materialise. This is operationally sharp — an unsupported configuration that happens to be working is still a risk position that must be reported honestly.

**Passage 3 — Incident report and stakeholder communication**

*"Incident INC-4471 summary (drafted by the resolving engineer): The document service failed at 10:42 on Tuesday following the morning's deployment of release 3.9. Initial diagnosis suspected the release; rollback was performed at 11:15 but the failure persisted. Further investigation identified the actual cause as expiry of the service's TLS certificate at 10:42, which the monitoring system was not configured to track. The certificate was renewed and service restored at 12:05. Release 3.9 was redeployed at 14:00 without incident. Total user-facing outage: 83 minutes. Actions proposed: add certificate expiry monitoring for all services in the estate; review the certificate inventory for other certificates expiring within 90 days; document the renewal procedure, which currently exists only as informal knowledge."*

*"Stakeholder update sent at 11:00 (before diagnosis completed): 'The document service is currently unavailable following this morning's software release. We have begun rolling back the release and expect service to be restored shortly.'"*

**Question 8 (moderate) — True, false, or cannot say**

Statement: "The rollback performed at 11:15 restored the service."

- A) True
- B) False
- C) Cannot say
- D) True, in combination with the certificate renewal

**Correct answer: B**

**Explanation:** The report states rollback "was performed at 11:15 but the failure persisted", and restoration came at 12:05 from certificate renewal. The rollback restored nothing — the statement is contradicted. Option D tries to credit the rollback with a contribution the report does not attribute to it. Beyond the reading exercise, the timeline is a diagnostic parable for **Incident management**: "the failure began at the same time as the deployment" was a correlation that consumed 33 minutes of rollback effort, while the true cause — certificate expiry — was a coincidence of timing. When a plausible cause is disproved, the disproof is itself high-grade evidence.

**Question 9 (hard) — True, false, or cannot say**

Statement: "The 11:00 stakeholder update contained information that later proved inaccurate."

- A) True
- B) False
- C) Cannot say
- D) False, because the update was reasonable given what was known at 11:00

**Correct answer: A**

**Explanation:** The update attributes the outage to the release and says rollback should restore service "shortly". Both later proved wrong: the cause was the certificate, and rollback did not restore service. So the update contained information that later proved inaccurate — True. Option D is a fair judgement about a different property: the update was indeed reasonable on the 11:00 evidence, but reasonableness and accuracy are different, and the statement asks only about accuracy. This distinction matters in real communications practice — the lesson is not "never update stakeholders before diagnosis" but "phrase interim updates as hypotheses", which would have been both reasonable and accurate.

**Question 10 (hard) — True, false, or cannot say**

Statement: "Certificate expiry monitoring was in place for some services in the estate before the incident."

- A) True
- B) False
- C) Cannot say
- D) False, because the monitoring system was not configured to track the expired certificate

**Correct answer: C**

**Explanation:** The report says monitoring "was not configured to track" the document service's certificate, and proposes to "add certificate expiry monitoring for all services in the estate". That proposal is compatible with extending partial coverage to completeness, and with introducing monitoring from zero — the text supports neither reading decisively, so the answer is Cannot say. Option D over-generalises from one certificate to the whole estate — precisely the over-extension Cannot say exists to catch. The professional habit this item trains is scope discipline: "add X for all services" states the desired end state, not the current one, and a senior engineer reviewing the action would ask the scoping question rather than assume.

**Question 11 (hard) — Best summary of the incident**

Which option best summarises INC-4471 for a service review audience?

- A) "Release 3.9 caused an 83-minute outage of the document service; the release was rolled back and later redeployed."
- B) "The document service suffered an 83-minute outage caused by an untracked TLS certificate expiring; the coincident release 3.9 was initially suspected and rolled back, but was exonerated and redeployed successfully. Actions: certificate expiry monitoring across the estate, a 90-day certificate inventory review, and documentation of the renewal procedure."
- C) "A certificate expired but was quickly renewed; impact was minimal and the release proceeded as planned."
- D) "Monitoring failures caused a certificate to expire, resulting in an outage."

**Correct answer: B**

**Explanation:** A repeats the initial misdiagnosis as fact — the report explicitly exonerates the release. C minimises: 83 user-facing minutes is not "minimal". D contains a causal error: monitoring did not cause the expiry — certificates expire by calendar; the monitoring gap caused the expiry to be unanticipated. B preserves the true cause, the honest narrative of suspicion and exoneration, the accurate impact figure, and all three proposed actions in four sentences. Summary items are compression tests: the best answer loses bulk while preserving every causal link and every decision-relevant fact — the final act of **Ownership and topic** on any incident, since the record handed to the organisation is the incident, as far as the future is concerned.

**Question 12 (hard) — Clear-writing judgement in a change request**

A candidate is documenting the change request for the estate-wide certificate monitoring work. Which implementation-summary wording is clearest and most complete for CAB approval?

- A) "Add cert monitoring to fix the INC-4471 thing so it doesn't happen again."
- B) "Configure certificate expiry monitoring (30-day and 7-day alerts) for all 23 production services; no service outage required; implementation via the standard monitoring pipeline over five working days; rollback is removal of the monitoring configuration; risk: alert noise during initial tuning, mitigated by routing first-week alerts to the operations channel only. Addresses the monitoring gap identified in INC-4471."
- C) "Certificate monitoring will be implemented in accordance with best practice at the earliest opportunity, leveraging synergies with the existing observability estate."
- D) "Monitoring for certificates. 23 services. See INC-4471."

**Correct answer: B**

**Explanation:** A CAB needs to approve a specific, bounded action, so the clearest wording answers the approver's questions in one pass: what exactly, where, impact, how and when, reversibility, risk and mitigation, and why. Option B does all of this in five lines. Option A is informal and unbounded. Option C is the most instructive failure: grammatical and professional-sounding, and empty — "best practice", "earliest opportunity" and "leveraging synergies" convey no scope, schedule, impact, or reversibility, and a CAB approving it would not know what it had approved. Option D transfers the assembly work to the reader. This item tests the **Change management** skill of documenting change requests, and B is what that duty looks like when done so well that approval takes one reading.

### Administration tips

- **Emphasise the "answer from the passage" rule especially strongly at this level** — experienced candidates lose marks by answering from professional convention when the passage deviates from it, which is deliberate.
- **Watch for how a candidate handles the spliced-provision items** (Questions 3 and 4) — tracking a figure back to the clause that actually governs it is a strong predictor of documentation accuracy on the job.
- **Note the accuracy-versus-reasonableness distinction (Question 9)** as a specific scoring point — a candidate who conflates the two is worth a follow-up question at debrief.
- **Use the clear-writing item (Question 12) as a live discussion point** — asking a candidate to critique option C's polished vagueness often reveals more than the multiple-choice answer alone.
- **Time by passage, not by statement.**

### Common pitfalls to watch for when scoring

- **Letting one relaxed control appear to relax its neighbours** — assuming "no CAB review needed" implies "no recording needed".
- **Confusing "must be sought" with "must be received"** — obligations to attempt are not obligations to obtain.
- **Treating vivid correlation as stated causation** — an outage "following" a release is a sequence, not a verdict.
- **Rescuing a contradicted statement with outside charity**, such as crediting a rollback with a restoration the text does not attribute to it.
- **Under-using Cannot say on scope questions**, where the passage states an end state but is silent on the current baseline.
- **Rewarding polished vagueness in clear-writing items** over a plain answer that leaves fewer questions unanswered.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace dilemmas and asks the candidate to evaluate possible responses — typically identifying the most effective, the least effective, or ranking all options. There is rarely a flawless option; the scenarios are engineered so every response is something a real professional might plausibly do, and the discrimination is between good and slightly-less-good as often as between right and wrong. Scoring compares the candidate's judgements with those of experienced practitioners and with the behaviours the organisation values: user and service focus, ownership, collaboration, honest communication, proportionate escalation, and integrity under pressure.

The typical format is an online test of 12 to 20 scenarios, untimed or generously timed, with four responses each. For senior roles, scenarios shift characteristically: less "should I ask for help?" and more "I am the person others are asking" — pressure from stakeholders to compress testing, discretion over emergency changes, conflicts between a deadline and a freeze, a junior engineer's mistake happening on the candidate's watch, and the ever-present question of what to communicate, to whom, and when.

Why does this matter for senior operations roles? Because at this level, technical correctness is assumed and judgement is the differentiator. A candidate at this level would hold deployment authority and change co-ordination responsibility, so the organisation's exposure to their decisions is highest precisely in the ambiguous moments. The role summary's **Ownership and topic** skill states the standard plainly: own an issue until a new owner has been found or the problem has been mitigated or resolved. SJT items measure whether a candidate's instincts implement that standard when it is costly.

As you score the scenarios, notice the recurring anatomy of strong answers: they secure the service first, preserve truthful records and communications, use the change and incident processes rather than bypassing them, keep the user's outcome in view, and treat colleagues — junior, senior, and supplier — in ways that keep information flowing. Weak answers hide, gamble, bypass, or optimise a metric at the expense of the mission.

### What it measures for the role

- **Deployment and go-live dilemmas** map to **Change management** and **Testing**: pressure to skip verification, ambiguous test results before a release, and freeze-period requests test whether a candidate actions changes as documented and lets evidence gate releases.
- **Incident command scenarios** map to **Incident management** and **Ownership and topic**: diagnosing under pressure, communicating honestly mid-incident, and holding ownership until genuine handover are the core senior behaviours.
- **Escalation and consultation judgement** maps to **Problem management**: consulting specialists effectively means neither hoarding a problem beyond one's expertise nor dumping it prematurely.
- **Configuration integrity scenarios** map to **Asset and configuration management**: undocumented workarounds, unrecorded changes, and tempting shortcuts test whether a candidate keeps records matching reality when nobody is checking.
- **Service performance dilemmas** map to **Availability and capacity management** and **Service focus**: choosing between a KPI's appearance and its meaning reveals what a candidate actually optimises for.
- **Stakeholder and user scenarios** map to **User focus**: keeping user outcomes central when technical and political pressures point elsewhere.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pressure to skip smoke tests**

A release has run late: the deployment finished 40 minutes behind schedule, and the 30-minute smoke test suite would take the window to its final minute. The delivery manager messages: "Everything deployed cleanly — can we skip the smoke tests and call it done? The team's exhausted." What is the most effective response?

- A) Agree — a clean deployment is strong evidence the release is fine.
- B) Run the smoke tests as planned, explaining that they are the evidence the service works for users, that the window still accommodates them, and that "deployed cleanly" and "working" are different claims.
- C) Skip the tests but monitor closely tomorrow morning and fix anything users report.
- D) Run a hand-picked 10-minute subset of the suite and declare the release verified.

**Correct answer: B**

**Explanation:** The window still fits the full suite — the pressure here is fatigue and optimism, not genuine constraint, and option B holds the evidence gate while explaining rather than merely refusing: deployment success means the artefacts arrived; smoke tests establish the service functions, which is the claim stakeholders and users actually care about. Option A mistakes one for the other. Option C converts users into the test suite, inverting **User focus** and typically costing more engineer-hours than the 30 minutes saved. Option D is the subtle trap for senior candidates — an improvised subset chosen under fatigue has unknown coverage, and declaring it "verified" corrupts the release record.

**Question 2 (easy) — An undocumented workaround discovered**

While investigating slow performance, a candidate discovers that a previous engineer (who has left) applied a manual configuration change to a production server that does not appear in the CMDB or in any change record. The change appears deliberate and is possibly load-bearing. What is the most effective response?

- A) Remove it immediately — undocumented changes have no place in production.
- B) Leave it alone and say nothing; it seems to be working and it is not the candidate's mess.
- C) Document it now as found (server, setting, apparent purpose), raise a record to investigate its function and dependencies, and only then decide — through change management — whether to formalise or remove it.
- D) Quietly replicate it to the other servers in the pool for consistency.

**Correct answer: C**

**Explanation:** Two wrongs are available here, and option C avoids both. Removing on principle (A) treats documentation status as evidence about function — an undocumented change may still be load-bearing, and deleting it untested is how a performance investigation becomes a severity 1. Ignoring it (B) fails **Asset and configuration management** at its core, and fails **Ownership and topic**: a candidate who finds the issue owns it until properly handed over or resolved. Option D propagates an ununderstood change and multiplies unknown risk. Option C sequences correctly: record, understand, decide through the proper mechanism — the configuration-integrity pattern that recurs across senior operations work.

**Question 3 (moderate) — Emergency change temptation**

It is Friday at 17:30. A director calls a candidate directly: a report needed for Monday's ministerial briefing is failing to generate, and she asks the candidate to "just put a fix in tonight — I'll take responsibility." The department's process allows emergency changes only where delay would cause significant service impact, with duty manager approval. The candidate has diagnosed the fault and has a fix ready. What is the most effective response?

- A) Deploy the fix immediately — a director has authorised it.
- B) Refuse: no changes outside the CAB cycle, ministerial briefing or not.
- C) Tell the director the fix exists and can plausibly qualify as an emergency change given the briefing impact, contact the duty manager for the required approval, and deploy tonight through the emergency process with full documentation if approved.
- D) Deploy the fix tonight but record it on Monday as a normal change to avoid weekend paperwork.

**Correct answer: C**

**Explanation:** The emergency change process exists for exactly this shape of situation, so the senior move is neither to bypass governance nor to hide behind it. Option C runs the process at pace, articulating the impact case to the actual approval authority. Option A substitutes seniority for process — verbal responsibility evaporates when an unapproved change breaks something. Option B mistakes the process's letter for its purpose and teaches stakeholders that the process is an obstacle. Option D is the integrity failure: deploying under emergency conditions while falsifying the category corrupts the change record. This item tests whether governance is something a candidate operates skilfully under pressure, rather than either worshipping or evading.

**Question 4 (moderate) — Junior engineer's production mistake**

A junior engineer supervised by a candidate ran a cleanup script against production instead of the test environment. Data has been deleted; the application is erroring; users are affected. The junior is visibly distressed and offers to "fix it quietly before anyone notices". What is the most effective response?

- A) Let them attempt the quiet fix — it will build their confidence and protect them from embarrassment.
- B) Declare the incident through the normal process, take charge of restoration (backups, impact assessment), keep the junior involved in the recovery so they learn, and make clear — publicly if needed — that the systemic gap (production access safeguards) matters more than individual blame.
- C) Take over completely, send the junior home, and handle everything personally.
- D) Report the junior to their line manager as a first step and let the manager decide the incident response.

**Correct answer: B**

**Explanation:** Service first, people second, lessons third — option B honours all three in order. Declaring the incident is non-negotiable; quiet fixing (A) compounds a mistake into a concealment and teaches the junior that hiding is how professionals respond. Keeping the junior inside the recovery converts the worst day of their year into their most durable learning, while a blameless framing surfaces the systemic fix that actually prevents recurrence. Option C protects the service but discards the person and the learning. Option D outsources incident command at precisely the moment **Incident management** and **Ownership and topic** make it the candidate's to hold. This scenario functions as a culture probe: how a senior candidate responds to a junior's mistake sets the team's honesty economics for years.

**Question 5 (moderate) — Mid-incident stakeholder communication**

Ninety minutes into a major incident, the cause remains unknown. The service owner asks for an update to send to directors, adding: "Can we say we've identified the cause and are fixing it? It sounds better than 'still investigating'." What is the most effective response?

- A) Agree — confidence reassures stakeholders and the cause will probably be found soon anyway.
- B) Provide an update that is honest and still substantive: confirmed impact and scope, what has been ruled out, current diagnostic focus, mitigation in place, and the time of the next update — declining to claim a cause not yet known.
- C) Refuse to send any update until the cause is found, to avoid saying anything wrong.
- D) Send the honest version to the service owner but let them alter it as they see fit.

**Correct answer: B**

**Explanation:** Granting the service owner's request creates a specific, predictable failure: when the claimed cause proves wrong, the follow-up must retract a fabrication, and stakeholders re-read every prior update with suspicion. Option B demonstrates the senior communicator's craft: honesty is not emptiness — describing what has been ruled out and the current diagnostic focus is more reassuring than false certainty, because it exhibits control of the process even without control of the cause. Option C confuses accuracy with silence. Option D is the subtle abdication: handing over the pen while knowing the contemplated alteration is a falsehood is participation by omission. This item tests **Ownership and topic** applied to information — owning the truthfulness of what the organisation knows about an incident.

**Question 6 (moderate) — Consult or continue?**

A candidate has spent six hours investigating intermittent database deadlocks, with solid evidence and two hypotheses, but confirming either requires deep database internals expertise at the edge of their own. The organisation has a database specialist team with a two-day response queue; the problem is causing a handful of failed transactions daily — annoying, not critical. Part of the candidate wants to crack it personally. What is the most effective response?

- A) Continue solo — six hours of context would be wasted in a handover, and the answer feels close.
- B) Package the investigation now (timeline, evidence, eliminated causes, both hypotheses, reproduction steps) and engage the specialist team, continuing lower-risk investigation strands and mitigation in parallel while the request is queued.
- C) Drop the problem entirely into the specialists' queue and move on — it is their domain.
- D) Apply both candidate fixes to production and see which stops the deadlocks.

**Correct answer: B**

**Explanation:** The **Problem management** skill names this judgement precisely: consult specialists effectively where required — and the craft is in both halves of option B. Engaging now respects the two-day queue arithmetic: at moderate severity, the cheapest schedule starts the clock today. Packaging well is what makes consultation effective: a specialist receiving a timeline and eliminated hypotheses starts at hour six, not hour zero. Option A also misprices "close" — at the edge of one's expertise, confidence about proximity is exactly the signal to distrust. Option C abandons the packaging value and mitigation. Option D experiments on production with concurrent variables, violating both change management and the discipline that makes problem management converge.

**Question 7 (moderate) — Least effective: capacity warning before a big event**

Capacity monitoring shows the case application will likely exceed safe utilisation during next month's legislative deadline, when submission volumes triple. Additional capacity takes three weeks to provision. It is four and a half weeks before the deadline. Which response is LEAST effective?

- A) Raise the forecast formally now with the evidence, request the capacity, and identify interim levers (caching, deferring batch jobs) in case provisioning slips.
- B) Wait two weeks to see whether the growth trend continues before requesting anything — the forecast might be pessimistic.
- C) Brief the service owner on the risk and the decision deadline, so the cost of inaction is owned at the right level.
- D) Begin load-testing the interim levers now so their effect is quantified before they are needed.

**Correct answer: B**

**Explanation:** This item asks for the LEAST effective option, and the arithmetic damns B: provisioning takes three weeks, the deadline is 4.5 weeks away, so the decision window is about 1.5 weeks. Waiting two weeks consumes the entire window and then some, converting a manageable risk into a fait accompli. Options A, C and D compose the senior playbook: A acts within the window with a fallback; C places the risk-acceptance decision with the accountable owner while there is still a decision to make; D turns the fallback from hope into measured capability. This item tests **Availability and capacity management** where the business need has a statutory date and the engineering calendar must be run backwards from it.

**Question 8 (hard) — The KPI that can be reported two ways**

Preparing the monthly service report, a candidate finds availability can be honestly calculated as 99.6% (counting a 3-hour degradation where the service was up but unusably slow for most users as downtime) or 99.92% (counting only full outages, as the report has historically done). The KPI target is 99.9%. The historical method says "met"; the user-experience method says "missed". What is the most effective response?

- A) Report 99.92% — consistency with the historical method is what makes trends meaningful.
- B) Report 99.6% without comment — the users' experience is the truth.
- C) Report both figures with the definitions, note that the historical method counts the degradation as available while users could not work, and propose that the service review agree the definition going forward.
- D) Report 99.92% this month but quietly switch methods next month.

**Correct answer: C**

**Explanation:** This item tests whether a candidate understands what reporting is for. Option A's consistency argument is genuinely weighty, but preserves comparability of a number that no longer measures the thing the KPI exists to protect. Option B corrects the meaning but breaks the trend silently. Option D combines A's problem with a concealed methodology change. Option C refuses the false choice: both figures, both definitions, the gap explained in user terms, and the decision about the definition routed to the governance forum that owns the KPI — a definition agreed at service review is a measurement the organisation owns, unlike one adopted unilaterally by the reporter. This is **Service focus** meeting **User focus** in the place they most often collide: a metric.

**Question 9 (hard) — Freeze-period pressure with a twist**

During the pre-Christmas change freeze, a programme manager asks a candidate to deploy "one tiny config change" to enable a feature demo for the minister's visit on 20 December. The change genuinely is small; the candidate has made similar ones dozens of times. The freeze policy allows exemptions via the design authority, which meets tomorrow. The programme manager says: "The exemption route is for real changes. This is nothing — no one will ever know." What is the most effective response?

- A) Make the change — it genuinely is trivial, and ministerial visits matter.
- B) Decline to bypass the freeze, and — because the demo matters — offer the legitimate fast path: help the programme manager draft the exemption request tonight for tomorrow's design authority, including a technical assessment that the change is low-risk.
- C) Refuse and report the programme manager's request to their director.
- D) Make the change in the demo environment only, telling the programme manager it is production.

**Correct answer: B**

**Explanation:** An exemption process exists, its timeline fits, and the requester's argument is not "the process will refuse" but "the process is beneath this change" — the argument for every freeze breach ever made, since no one proposes risky changes as "tiny". Option B wins on both integrity and service: the freeze holds, and the programme manager gets a route to yes, with the candidate's low-risk assessment strengthening their case. "No one will ever know" deserves particular attention — change records mean someone can always know, and willingness to act on that phrase is precisely what this item is calibrated to detect. Option C escalates a resolvable request before trying resolution. Option D is disqualifying on honesty grounds.

**Question 10 (hard) — Ranking: the failed change a candidate co-ordinated**

A change a candidate co-ordinated last night partially failed: the deployment succeeded, but this morning an integration with a partner department's system is erroring, affecting cross-departmental case referrals. Rank these responses from most to least effective:

1. Declare an incident, notify the partner department's operations team with symptoms and timeline, begin diagnosis with rollback explicitly on the table, and record the change as "failed" pending investigation.
2. Begin diagnosing quietly first: if it can be fixed within the hour, the change record can stay "successful" and the partner never needs to be troubled.
3. Roll back immediately without diagnosis, then investigate at leisure in the test environment.
4. Declare an incident and diagnose, but describe the change as "successful with unrelated integration issues" in the record, since the deployment itself worked.

- A) 1, 3, 2, 4
- B) 1, 3, 4, 2
- C) 3, 1, 2, 4
- D) 1, 2, 3, 4

**Correct answer: A**

**Explanation:** Response 1 is clearly first: the incident is declared, the partner is informed, and the change record reflects reality. Response 3 is second: immediate rollback is defensible, but done without diagnosis or partner notification it is a blunt version of the right instinct. The genuinely discriminating judgement is ranking 2 versus 4, the two concealments. Response 2 hides the event temporarily — bad, but it collapses honestly if the fix fails. Response 4 declares the incident yet engineers a permanent falsehood into the change record, corrupting the failure statistics the organisation uses to judge change risk, and never self-corrects. A durable, deliberate misrecord outweighs a short honest-by-default delay: 1, 3, 2, 4. The underlying principle: in operations, records are load-bearing.

**Question 11 (hard) — User needs versus stakeholder assumption**

Budget exists to improve the case application, and the deputy director has directed it toward a dashboard "because caseworkers keep complaining about the system". A candidate reviews the evidence: 68% of recent tickets concern save failures and slow document loading; informal conversations with caseworkers confirm stability is their overwhelming pain point; nobody has mentioned dashboards. The deputy director's programme announcement is next week. What is the most effective response?

- A) Build the dashboard as directed — the deputy director presumably has context the candidate lacks.
- B) Build the dashboard but quietly divert some capacity to fixing the save failures.
- C) Before the announcement, present the evidence: the ticket analysis, the user conversations, and a proposal to fix the stability issues that the complaints actually concern — offering to run a brief structured validation with caseworkers if the deputy director wants firmer ground.
- D) Survey caseworkers over the next month to build an unimpeachable evidence base, then present findings after the announcement.

**Correct answer: C**

**Explanation:** The deputy director and the evidence agree on the problem and diverge on the cause — a divergence checkable now, before public commitment makes correction expensive. Option C is **User focus** executed at senior level: quantitative and qualitative data collated as user needs evidence, offered before the decision point, with a proposal to strengthen the evidence if needed. Crucially, C challenges the direction while respecting the authority — the deputy director still decides, but decides informed. Option A launders an assumption through deference. Option B misuses delegated capacity and denies the deputy director the information to redirect properly. Option D gathers excellent evidence for a decision that will already have been announced. Senior influence is evidence, timed well, offered respectfully.

**Question 12 (hard) — Holding ownership across a boundary**

An intermittent fault in the licensing application traces to a supplier-hosted component. A candidate has raised it with the supplier, who responded: "No fault found our side; closing our ticket." The fault continues — roughly a dozen users affected each day. The candidate's own service desk has begun telling users "it's a supplier issue" and closing tickets. What is the most effective response?

- A) Accept the supplier's finding — they know their component best — and monitor in case it worsens.
- B) Keep the problem record open and owned; assemble evidence the supplier cannot dismiss (timestamps, correlation IDs, traffic captures showing the fault at the boundary); re-engage the supplier through the contract's escalation route; brief the service desk to keep linking user tickets to the problem record; and give affected users a workaround and honest status meanwhile.
- C) Tell the service desk to keep closing tickets as "third party" — the fault is genuinely not in the candidate's code.
- D) Escalate immediately to commercial colleagues to invoke contractual penalties against the supplier.

**Correct answer: B**

**Explanation:** This is the scenario the **Ownership and topic** skill statement might have been written for: own an issue until a new owner has been found or the problem has been mitigated or resolved — and the supplier closing their ticket is neither. Option B works every live front: evidentially (boundary-level evidence changes the conversation with a supplier who says "no fault found"), procedurally (contracts contain escalation routes precisely for disputed findings), organisationally (a service desk closing tickets is quietly destroying the evidence base), and humanly (a dozen users a day deserve a workaround and the truth). Option A abandons users on a first-pass denial. Option C makes the evidence destruction official. Option D reaches for the contractual weapon before exhausting the collaborative-with-evidence route. Boundary problems are the purest test of senior ownership: anyone can own what is clearly theirs.

### Administration tips

- **Score each option against the five-part anatomy of a strong answer**: secures the service, keeps records and communications truthful, runs processes rather than bypassing them, keeps users in view, keeps information flowing.
- **Check the stem's polarity every time** — most-effective and least-effective items interleave, and a candidate applying a correct judgement to the wrong question is a scoring trap for you too.
- **Watch for how a candidate distinguishes a process's letter from its purpose** (Questions 3 and 9) — the strongest answers operate emergency routes and exemptions skilfully rather than either worshipping or evading them.
- **Note how a candidate ranks permanent versus temporary concealment** (Question 10) — this is one of the most senior-specific judgements in the set.
- **Use these scenarios as debrief material** — asking a candidate to talk through their reasoning, especially on the ranking items, often reveals more than the score alone.

### Common pitfalls to watch for when scoring

- **Rewarding the heroic solo fix** — continuing alone past an expertise boundary, or fixing quietly to spare embarrassment, reads as ownership but should score as risk.
- **Rewarding deference dressed as respect** — "the director authorised it" is a trap; authority does not substitute for the named approval.
- **Rewarding metric optimisation over mission** — any option improving a number by degrading its meaning is a designed trap.
- **Rewarding punitive first moves** — reporting a colleague or invoking penalties before attempting evidence-based resolution.
- **Under-weighting abandonment at organisational boundaries** — "supplier issue" or "other team's system" should never be scored as ending a candidate's ownership while users remain affected.
- **Rewarding skipped verification dressed as pragmatism** — fatigue is this section's favourite disguise for risk appetite.

## Conclusion

This document has given you a complete set of assessment material for the four types most relevant to a senior application operations engineer: cognitive, numeric reasoning, verbal reasoning, and situational judgement. It represents a substantial instrument, and it is worth drawing the sections together for scoring and debrief.

The cognitive section tests tracing dependency graphs to their second-order impacts, recomputing go-live feasibility at milestones, diagnosing faults by eliminating hypotheses against evidence, and sequencing changes under overlapping constraints — the structured thinking behind **Change management**, **Incident management**, and **Problem management**. The numeric section tests converting availability targets into downtime budgets, weighting averages honestly, forecasting capacity exhaustion with lead times and safety margins, and verifying remedies with before-and-after arithmetic — the quantitative backbone of **Availability and capacity management** and the **Technical specialism** duty to forecast resource needs. The verbal section tests reading change policies, supplier bulletins, and incident records with clause-level precision, and judging writing by the questions it leaves unanswered. The situational judgement section rehearses the moments that define senior credibility: holding the evidence gate when everyone is tired, running governance at pace instead of bypassing it, communicating honestly mid-incident, developing a junior through their worst day, and owning a problem across a supplier boundary until users are genuinely served.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as your answer key and your talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards, walking through where the candidate's reasoning matched or diverged from the model answer, is often more valuable to them — and more informative to you — than the raw score.

**Records and consistency.** Keep a note of the conditions under which you administered this assessment alongside the result, and use the same items and conditions for every candidate you assess for this role level.

**One assessment among several.** A theme runs through all four sections worth keeping in mind when you interpret the result: at this level, accuracy is a form of trustworthiness, and this assessment measures fragments of it. It is one input into a wider judgement about whether a candidate can be trusted with production systems and go-lives — never the whole of that judgement. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
