# Data Engineer (Lead Data Engineer) - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for lead data engineer, within the UK Government Digital and Data profession. The material is job-specific: it presents what a lead data engineer genuinely handles — data flow diagrams, schema definitions, streaming configurations, test results, capacity reports, data standards, and stakeholder correspondence — and the judgements the role turns on, rather than abstract puzzles.

A lead data engineer is responsible for the design and implementation of numerous complex data flows connecting operational systems, analytics platforms, and business intelligence systems. That work is fundamentally cognitive: spotting the recurring pattern across three teams' pipelines that could be replaced by one reusable flow, deducing which upstream change broke a downstream dashboard, checking a colleague's transformation logic for subtle errors before it reaches production, and prioritising a queue of incidents, feature requests, and standards work every week. Cognitive, numeric, verbal, and situational judgement assessments map directly onto that daily reasoning.

This document covers four assessment types, each in its own section:

1. **Workplace job-specific cognitive assessment** — pattern recognition, logical deduction, error checking, prioritisation, and problem solving using the artefacts a lead data engineer genuinely handles.
2. **Workplace job-specific numeric reasoning assessment** — interpreting tables, percentages, ratios, budgets, throughput figures, and performance metrics of the kind seen in capacity planning and service reporting.
3. **Workplace job-specific verbal reasoning assessment** — drawing accurate conclusions from dense written material such as data standards, integration policies, stakeholder emails, and governance reports.
4. **Workplace job-specific situational judgement assessment** — choosing effective responses to realistic dilemmas involving teams, senior stakeholders, cross-government partners, and suppliers.

Each section explains what the assessment measures, maps it explicitly to the skills in the role profile, and then gives a substantial set of items with full worked explanations for use as an answer key, followed by administration tips and common pitfalls to watch for when scoring.

**How to administer this fairly.** Present every candidate for this role level with the same items and the same time limit, under the same conditions. Keep the worked answers and explanations back from the candidate until scoring and debrief — they are the answer key, not preparation material. Score consistently against the worked answers given, and keep a record of each candidate's responses and the scoring. Afterwards, debrief the candidate: share where they did well and where they diverged from the key, and treat any recurring divergence as material for the debrief conversation rather than simply a failure. Treat the result as one input among several — alongside the interview, the candidate's application, and any other evidence. Read the advisory below before using this material.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the core mental processes a lead data engineer relies on: pattern recognition, logical deduction, error checking, prioritisation, and structured problem solving. Unlike a generic IQ test, every question is built around practical workplace scenarios and data formats drawn from the actual job — data flow diagrams, schema definitions, streaming system configurations, dependency graphs, test outputs, and integration runbooks.

Typical delivery is online and timed, usually 15 to 30 minutes, with objective scoring against a norm group of comparable professionals. Many modern platforms are adaptive, adjusting question difficulty based on previous answers, and most provide a short, ungraded practice set beforehand so the candidate can get comfortable with the interface. A breakdown of speed versus accuracy is usually more informative than a single raw score.

Cognitive assessment matters at this level because the role is fundamentally cognitive: spotting the pattern across pipelines that could be replaced by one reusable flow, deducing which upstream change broke a downstream dashboard, checking transformation logic for subtle errors before it reaches production, and prioritising a queue of incidents, feature requests, and standards work every week. A cognitive assessment is, in effect, a compressed simulation of that daily reasoning.

### How this assessment maps to the role

The assessment dimensions map directly onto the skills in the role profile:

- **Pattern recognition** maps to **Data analysis and synthesis** and **Data modelling**: recognising structural similarity across data sources is exactly what is required when bringing multiple sources together into a conformed model, or spotting opportunities to reuse and align data models across organisations.
- **Logical deduction** maps to **Problem management** and **Systems integration**: tracing cause and effect through connected systems mirrors coordinating a team to investigate, resolve, and anticipate problems.
- **Error checking** maps to **Testing** and **Programming and build**: spotting a mismatched data type, an off-by-one window boundary, or inconsistent naming in a schema reflects the responsibility to review specifications, define test conditions, and ensure code quality.
- **Prioritisation** maps to **Data development process** and **Problem management**: deciding what a team tackles first, under enterprise-scale integration procedures and finite resources.
- **Abstraction and rule induction** map to **Data integration design** and **Metadata management**: inferring the general rule from specific cases is how standards are established and kept current, and how metadata repositories classify things consistently.

### Practice questions

Present these to the candidate; two to three minutes per question is a reasonable guide.

**Question 1 (easy) — Pattern recognition in naming standards**

A team's data integration standard requires dataset names in the form `domain_source_entity_frequency`. Four datasets have just been registered in the metadata repository:

1. `tax_hmrc_returns_daily`
2. `benefits_dwp_claims_weekly`
3. `daily_borders_hof_crossings`
4. `health_nhsd_prescriptions_monthly`

Which dataset violates the standard?

A) Dataset 1  B) Dataset 2  C) Dataset 3  D) Dataset 4

**Correct answer: C.**

**Explanation:** The standard fixes the order of the four segments: domain, source, entity, frequency. Datasets 1, 2, and 4 all follow that order. Dataset 3 begins with the frequency (`daily`), then domain (`borders`), then source (`hof`), then entity (`crossings`) — the right components in the wrong order. This tests the consistency check exercised when ensuring teams adhere to established standards: the error is not a missing element, but a sequencing violation that automated tooling checking only for four segments might miss.

**Question 2 (easy) — Logical deduction from pipeline dependencies**

A dependency chain runs: ingestion job A feeds staging table B; B feeds both the conformed model C and the audit log D; C feeds the BI dashboard E. This morning, E shows yesterday's data, but D is fully up to date.

Which single component is the most likely point of failure?

A) Job A  B) Table B  C) Model C  D) Dashboard E's refresh, or the B→C step

**Correct answer: D.**

**Explanation:** Deduce from what is working. D is up to date, and D is fed by B, so A and B must have run successfully — eliminating options A and B. The failure therefore lies downstream of B on the path to E: either the transformation from B into conformed model C, or C's feed into E, or E's own refresh. Option D is the only one consistent with the evidence. Option C alone is too narrow: with the information given, a C failure cannot be distinguished from an E refresh failure, so the correct deduction identifies the failing *segment*, not a single unproven component. This tests using healthy branches of a flow to bound where a fault can be — real problem management diagnostic practice.

**Question 3 (moderate) — Error checking a transformation specification**

A specification for a data flow states: "Records with a `status` of ACTIVE or PENDING are loaded into the conformed model. Records with a `status` of CLOSED are archived. Records with any other status are rejected to the quarantine queue." A junior engineer implements this as:

- If status = ACTIVE → load
- If status = PENDING → load
- If status = CLOSED → archive
- If status is NULL → reject to quarantine

What is wrong with the implementation?

A) Nothing — it matches the specification
B) CLOSED records should be rejected, not archived
C) The implementation only rejects NULL statuses, but the specification requires rejecting *any* status that is not ACTIVE, PENDING, or CLOSED
D) PENDING records should be archived

**Correct answer: C.**

**Explanation:** The specification's final rule is a catch-all: "any other status" includes NULL, but also SUSPENDED, unknown codes, typos, and future values nobody has thought of yet. The implementation narrows "any other" to "NULL", so a record with status = SUSPENDED would silently fall through all four rules. This tests a classic error-checking trap: each implemented rule is individually correct, so a line-by-line comparison passes, but the *coverage* is incomplete. Testing the unhappy path — values outside the enumerated set — is precisely what catches this class of defect before production.

**Question 4 (moderate) — Rule induction from metadata examples**

A metadata repository classifies datasets by sensitivity. Existing classifications:

- Payroll extracts: OFFICIAL-SENSITIVE
- Aggregated monthly service statistics: OFFICIAL
- Individual citizen case records: OFFICIAL-SENSITIVE
- Published open data on office locations: OFFICIAL
- Staff disciplinary records: OFFICIAL-SENSITIVE

A new dataset arrives: row-level records of individual benefit applications, including national insurance numbers. Applying the induced rule, how should it be classified?

A) OFFICIAL, because benefits data is routine government business
B) OFFICIAL-SENSITIVE, because the pattern shows person-identifiable, row-level data is classified as sensitive
C) It cannot be classified without a new rule
D) OFFICIAL, because it will eventually be aggregated

**Correct answer: B.**

**Explanation:** Inducing the rule from the examples: every OFFICIAL-SENSITIVE item contains information about identifiable individuals, while every OFFICIAL item is aggregated or non-personal. The new dataset is row-level and person-identifiable, so the induced rule places it in OFFICIAL-SENSITIVE. Option D confuses the dataset's *future* derived form with its current form. This tests rule induction exercised when designing a method to categorise data models and metadata: the classification scheme must be learnable, consistent, and predictable for the teams applying it.

**Question 5 (moderate) — Prioritisation under constraint**

It is 09:00 Monday. Four items compete for a team's attention today:

1. A streaming pipeline feeding a ministerial dashboard has stopped; the dashboard is used at a 14:00 briefing.
2. A quarterly review of integration standards is due to the architecture board by Friday.
3. A junior engineer is blocked on a code review for a routine enhancement.
4. A partner department reports that last night's batch file arrived with 3% fewer records than usual; their next consuming job runs Wednesday.

What is the most defensible order of attention?

A) 1, 3, 4, 2  B) 2, 1, 3, 4  C) 1, 4, 3, 2  D) 4, 1, 2, 3

**Correct answer: A.**

**Explanation:** Rank by deadline proximity and impact. Item 1 has both the nearest hard deadline and the highest visibility, so it comes first. Item 3 is a fifteen-minute unblocking action with an outsized effect, so cheap, high-leverage unblocking comes next. Item 4 matters, but its consumer does not run until Wednesday, giving a full day of slack. Item 2 has a Friday deadline and can be scheduled deliberately later in the week. Option C is the strongest distractor: it treats the 3% anomaly as more urgent than the blocked colleague, but the anomaly has slack while the colleague's idle time is being spent right now. This tests weighing deadlines, blast radius, and the cost of delay, rather than how alarming an issue sounds.

**Question 6 (moderate) — Spotting the reusable pattern**

Three teams describe their pipelines:

- Team Alpha: pulls customer records nightly from System X, validates postcodes, standardises addresses, loads to their analytics store.
- Team Beta: pulls supplier records weekly from System Y, validates postcodes, standardises addresses, loads to a reporting database.
- Team Gamma: streams sensor readings from field devices, applies unit conversions, loads to a time-series store.

Which component is the strongest candidate for a shared, reusable data flow, and why?

A) The nightly scheduling logic, because Alpha and Beta both use schedules
B) The postcode validation and address standardisation step, because two teams implement identical business logic on different data
C) The loading step, because all three teams load data somewhere
D) Nothing — the teams work on different data so nothing is reusable

**Correct answer: B.**

**Explanation:** Reuse value is highest where the *logic* is identical even when the *data* differs. Alpha and Beta both validate postcodes and standardise addresses — the same non-trivial, maintenance-heavy business logic, currently duplicated. Option A fails because scheduling is commodity infrastructure, not duplicated business logic, and Alpha and Beta do not even share a schedule. Option C is superficial: "loading data" is not one component when the targets differ entirely. This tests recognising and sharing opportunities to reuse existing data flows — seeing past surface differences to structural sameness.

**Question 7 (moderate) — Deduction across a streaming topology**

A streaming system has topics T1, T2, and T3. Consumer group G1 reads T1 and writes enriched events to T2. Consumer group G2 reads T2 and writes aggregates to T3. Monitoring shows: T1 receiving events normally; consumer lag on T2 growing steadily; T3 receiving no new aggregates for 40 minutes.

Which is the most consistent single explanation?

A) The producers into T1 have stopped
B) G1 has stopped consuming T1
C) G2 has stopped or stalled, so T2 messages accumulate unread and T3 receives nothing
D) T3's storage is full

**Correct answer: C.**

**Explanation:** Work through each claim against the evidence. T1 is receiving normally, so producers are fine — A is out. If G1 had stopped, T2 would receive no new messages; but lag on T2 is growing, which means messages are arriving faster than they are consumed — so G1 is alive, ruling out B. Growing lag on T2 plus silence on T3 points to G2 having stalled, leaving T2's messages unread. Option D would produce write errors from G2, contradicting the observations. This tests end-to-end causal tracing using lag metrics as evidence about which stage is alive — a core diagnostic pattern for anyone responsible for the build of data-streaming systems.

**Question 8 (hard) — Error checking a conformed model mapping**

A mapping document conforms three source systems into one `citizen_contact` model. The mapping states:

- Source A `phone` (format: `+44XXXXXXXXXX`) → target `phone_e164`
- Source B `telephone` (format: `0XXXXXXXXXX`) → target `phone_e164`, transformed by replacing leading `0` with `+44`
- Source C `contact_num` (format: `+44XXXXXXXXXX` or `0XXXXXXXXXX`, mixed) → target `phone_e164`, transformed by replacing leading `0` with `+44`

What defect will this mapping introduce?

A) Source A numbers will be double-prefixed
B) Source B numbers will lose a digit
C) Source C numbers already in `+44` format will pass through the `0`-replacement rule unchanged — which is correct — so there is no defect
D) Source C values starting with `+44` are fine, but the rule as written for C is a blind find-and-replace of leading `0`; the real defect is that C's mixed formats are handled by a rule specified only for one of the two formats, so behaviour for `+44`-format C records is unspecified in the document

**Correct answer: D.**

**Explanation:** The subtle issue is a *specification completeness* defect rather than an arithmetic one. For Source C the document declares two possible input formats but specifies a transformation for only one of them. What happens to a C record already in `+44` format? Probably it passes through — but the document does not say so, and an implementer could equally reject it, re-prefix it, or crash. Option C asserts the pass-through behaviour as fact; the document never states it. This tests the review discipline that every declared input variant must have an explicitly specified outcome, because unspecified behaviour becomes inconsistent behaviour the moment two teams implement the same mapping.

**Question 9 (hard) — Prioritising a problem investigation**

Overnight, four alerts fired across the estate:

1. The metadata repository's nightly sync failed (it retries automatically each night).
2. A conformed model load succeeded but processed 40% more records than any previous run.
3. A streaming consumer restarted three times, recovering each time within seconds.
4. A test environment ran out of disk space.

The team can deep-dive only one alert this morning. Which one deserves it?

A) Alert 1  B) Alert 2  C) Alert 3  D) Alert 4

**Correct answer: B.**

**Explanation:** Alert 2 is the only one where *success* may be hiding a serious defect. A 40% volume spike with a green tick could mean duplicate ingestion, an upstream re-send, a broken deduplication step, or a source system incident — and the bad data is now inside the conformed model, propagating to every consumer with each passing hour. Alerts 1, 3, and 4 are self-limiting. This tests the counter-intuitive lesson that failed jobs announce themselves while anomalous successes do not — effective problem management means coordinating a team to investigate and anticipate problems, and volume anomalies on successful runs are the classic early signal of silent data corruption.

**Question 10 (hard) — Logical consistency of integration standards**

A draft integration standard contains these rules:

1. All inter-departmental data transfers must use the approved API gateway.
2. Bulk historical migrations are exempt from rule 1 and may use secure file transfer.
3. Any transfer containing OFFICIAL-SENSITIVE data must be encrypted in transit and logged in the transfer register.
4. Transfers via the approved API gateway are logged automatically and need no manual register entry.

A team plans a bulk historical migration of OFFICIAL-SENSITIVE case records via secure file transfer. Which obligations apply?

A) None — bulk migrations are exempt from the standard
B) Encryption in transit and a manual entry in the transfer register
C) Encryption in transit only, because logging is automatic
D) They must use the API gateway because the data is OFFICIAL-SENSITIVE

**Correct answer: B.**

**Explanation:** Apply each rule precisely. Rule 2 exempts bulk migrations from *rule 1 only* — the exemption's scope is the gateway requirement, not the whole standard, so option A over-reads it. Rule 3 attaches to the data's sensitivity regardless of transfer mechanism. Rule 4's automatic logging applies only to gateway transfers; this transfer uses secure file transfer, so the register entry must be made manually, eliminating option C. Nothing makes the gateway mandatory over and above rule 1, from which this transfer is exempt, so option D invents a rule. This tests reading scope words ("exempt from rule 1", not "exempt from this standard") with precision — a daily necessity for anyone who establishes standards and keeps them up to date.

**Question 11 (moderate) — Sequence completion in capacity terms**

A streaming topic's daily peak throughput over six successive weeks was: 120, 132, 145, 160, 176, 194 (thousand events per hour). If the pattern continues, which week-seven figure should be planned for, and what is the pattern?

A) About 205 thousand — the series adds a constant ~12
B) About 213 thousand — the series grows by roughly 10% each week
C) About 226 thousand — the series grows by roughly 16% each week
D) About 194 thousand — throughput has plateaued

**Correct answer: B.**

**Explanation:** Test the additive hypothesis first: differences are 12, 13, 15, 16, 18 — not constant, and growing, so option A's model is wrong. Test the multiplicative hypothesis: the ratio is stable at about 1.10 across all six weeks, so growth is roughly 10% per week, and week seven is approximately 194 × 1.10 ≈ 213 thousand. Option D contradicts the data outright. This tests recognising that growing *differences* with stable *ratios* means exponential growth — and exponential growth is what breaks streaming systems that were capacity-planned with straight-line thinking.

**Question 12 (hard) — Multi-constraint scheduling**

Four migration tasks — W, X, Y, Z — must be scheduled one per weekend, over four weekends, subject to:

- W must complete before Y (Y consumes W's outputs).
- Z cannot run on weekend 1 (its source system is frozen for year-end).
- Z must complete before X (X reuses the landing zone that Z's migration frees up).
- Y must run on weekend 3 or 4 (its downstream consumers are unavailable earlier).

Which schedule satisfies all constraints?

A) W, X, Y, Z  B) X, W, Y, Z  C) W, Z, Y, X  D) X, Z, Y, W

**Correct answer: C.**

**Explanation:** The efficient technique is elimination by the strictest constraint first. "Z before X" is highly restrictive: option A places X on weekend 2 and Z on weekend 4 — violated. Option B places X on weekend 1 and Z on weekend 4 — violated. Option D places X on weekend 1 and Z on weekend 2 — violated (and D also fails "W before Y"). Only option C remains, and full verification confirms it: W(1) before Y(3) ✓; Z(2) avoids weekend 1 ✓; Z(2) before X(4) ✓; Y on weekend 3 ✓. This tests identifying the binding constraint — usually a dependency or a frozen window — and letting it collapse the schedule space before fine-tuning, exactly how real migration sequencing works.

**Question 13 (moderate) — Odd one out in data model concepts**

Which of these is *not* a property of a well-designed conformed dimension shared across government data models?

A) It has a single, agreed definition for each attribute
B) It is duplicated into each consuming team's model with local modifications allowed
C) It uses consistent keys so facts from different sources can be joined
D) It is version-controlled so consumers can track definitional change

**Correct answer: B.**

**Explanation:** A conformed dimension exists precisely so that different teams and organisations analyse against the *same* definitions and keys. Options A, C, and D describe that discipline. Option B describes the anti-pattern conformance eliminates — copy-and-diverge, where "local modifications" quietly break comparability until two departments report different numbers for the same measure to the same minister. This tests understanding that the moment local modification is allowed on a shared dimension, alignment ends and reconciliation projects begin.

### Administration tips

- **Look for fluency with real artefacts.** A candidate who has practised quizzing a real roadmap, decision record or dependency map — what must be true, what cannot be true, what is underdetermined — tends to show the entailment habit this section measures.
- **Watch for imported assumptions.** Several items above turn on constraints a candidate might import from experience rather than the text. A strong candidate visibly checks whether a rule is stated or assumed.
- **Note whether hard constraints are filtered first.** For prioritisation and selection items, a candidate who eliminates options violating any mandatory condition before comparing merits is working faster and more accurately.
- **Hold candidates to a steady pace.** A candidate who flags a resistant item after ninety seconds and moves on, rather than fighting it, is showing accuracy-across-the-paper judgement.
- **A brief warm-up before the session is worth offering.**

### Common pitfalls to watch for when scoring

- **Rewarding the plausible over the entailed.** Operationally sensible answers the given rules do not support are the most common wrong answers at senior level.
- **Missing when a candidate lets magnitude trump constraints.**
- **Crediting over-escalation.** A candidate who reaches for "refer it to the board" where the stated rules already resolve the question is deferring decisions rather than making them.
- **Letting a time-sink question distort the overall picture.** A candidate who gets stuck on one instead of banking easier marks first is showing a weaker self-management pattern.
- **Missing scale and scope qualifiers.** "Some", "all", "only", "no later than", "not longer than" — each word changes the logic, and a candidate who answers against the wrong qualifier has misread rather than miscalculated.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make sound decisions using numerical data of the kind the role genuinely produces: pipeline throughput tables, storage growth figures, error-rate percentages, team capacity plans, cloud cost breakdowns, and service performance metrics. The emphasis is business arithmetic — percentages, ratios, rates, proportions, and cost-benefit estimation — not abstract formulae or advanced mathematics.

The typical format is online and strictly timed, often around 60 to 90 seconds per question across 15 to 25 questions. An onscreen calculator is usually allowed, because the test prioritises *interpretation* over mental arithmetic.

For a lead data engineer, numeric fluency is not a nice-to-have. The role manages resources to ensure data services work effectively at an enterprise level, which means defending budgets, forecasting storage and compute, and evidencing performance improvements with numbers. It reviews test results and data-profiling outputs where a misread percentage means a defect ships. It sizes streaming systems where the difference between linear and compound growth determines whether the platform survives the next quarter. And it communicates figures to non-technical stakeholders, which demands the arithmetic is solidly right before it is simplified.

### How this assessment maps to the role

- **Rates, throughput, and capacity arithmetic** map to **Programming and build (data engineering)** and the responsibility for data-streaming systems.
- **Percentages and data quality metrics** map to **Data analysis and synthesis** and **Testing**.
- **Budgets and unit costs** map to **Data development process** — managing resources at enterprise level.
- **Ratios and proportional reasoning** map to **Data integration design** and **Data modelling**.
- **Trend interpretation** maps to **Data innovation** and **Problem management**.

### Practice questions

An onscreen calculator is assumed.

**Question 1 (easy) — Data quality percentage**

A profiling run over a source extract of 1,250,000 records reports 18,750 records failing address validation. What is the failure rate?

A) 0.15%  B) 1.5%  C) 15%  D) 6.7%

**Correct answer: B.**

**Explanation:** Failure rate = 18,750 ÷ 1,250,000 = 0.015 = 1.5%. A quick sanity check protects against the decimal-place traps in options A and C: 1% of 1,250,000 is 12,500, and 18,750 sits between 12,500 (1%) and 25,000 (2%). This tests anchoring percentages to an easy reference — the fastest error-check available under time pressure, and the same habit that lets a data quality report be judged instantly as routine or alarming.

**Question 2 (easy) — Throughput headroom**

A streaming cluster is provisioned to handle 40,000 events per second. Current peak load is 29,000 events per second. What percentage headroom remains at peak, relative to provisioned capacity?

A) 11%  B) 27.5%  C) 37.9%  D) 72.5%

**Correct answer: B.**

**Explanation:** Headroom = (40,000 − 29,000) ÷ 40,000 = 0.275 = 27.5%. Option C is the classic trap: dividing the spare 11,000 by the *current load* instead of by capacity. Option D is utilisation, the complement of the answer. This tests recognising that headroom questions hinge on which base the percentage uses — the same discipline that matters in a capacity review, where a stakeholder hearing the wrong figure will approve the wrong deferral of scaling work.

**Question 3 (moderate) — Storage growth projection**

A conformed data platform holds 84 TB today and has grown 6% per month for the past year. Contractually, the storage tier is capped at 100 TB. Approximately how many months until the cap is hit if growth continues?

A) 2 months  B) 3 months  C) 4 months  D) 6 months

**Correct answer: B.**

**Explanation:** Compound the growth month by month: 84 × 1.06 ≈ 89.04 TB after one month; ≈94.38 TB after two; ≈100.04 TB after three. This tests whether a candidate compounds growth rather than extrapolating linearly, which increasingly understates growth over longer horizons — the difference between a planned storage expansion and an emergency change request.

**Question 4 (moderate) — Cost per terabyte comparison**

Two ingestion patterns are costed for a new data flow. Pattern A (batch): fixed platform cost £2,400 per month plus £35 per TB processed. Pattern B (streaming): fixed platform cost £4,100 per month plus £18 per TB processed. At what monthly volume do the two patterns cost the same?

A) 50 TB  B) 85 TB  C) 100 TB  D) 120 TB

**Correct answer: C.**

**Explanation:** Set the cost equations equal: 2,400 + 35V = 4,100 + 18V, giving 17V = 1,700, so V = 100 TB. Verification: at 100 TB, both patterns cost £5,900. This tests break-even analysis — exactly the evidence base needed for championing a data engineering choice to budget holders: not "streaming is more modern", but the volume at which it becomes cheaper.

**Question 5 (moderate) — Deduplication ratio**

Three source systems contribute citizen records to a conformed model: System 1 provides 2.6 million records, System 2 provides 1.9 million, and System 3 provides 1.5 million. After matching and deduplication, the conformed model contains 4.2 million unique records. What percentage of the total input records were duplicates?

A) 30%  B) 25%  C) 43%  D) satisfies none of these

**Correct answer: A.**

**Explanation:** Total input = 6.0 million; duplicates removed = 6.0 − 4.2 = 1.8 million; duplicate percentage = 1.8 ÷ 6.0 = 30%. Option C comes from dividing duplicates by the *output* rather than the input — the single most common numeric-reasoning base error. This tests correctly identifying the base for a percentage.

**Question 6 (moderate) — Test pass rates across iterations**

An integration test suite has 480 test conditions. In iteration 1, 408 passed. In iteration 2, after fixes, 456 passed. By how many percentage points did the pass rate improve, and what is the iteration 2 pass rate?

A) 10 percentage points; 95%  B) 12 percentage points; 95%  C) 10 percentage points; 90%  D) 48 percentage points; 95%

**Correct answer: A.**

**Explanation:** Iteration 1 = 85%; iteration 2 = 95%; improvement = 10 percentage points. Option D confuses the raw count of newly passing tests with percentage points. This tests distinguishing percentage points from percent — "pass rate up ten points to 95%" is unambiguous; "tests improved 10%" is not, and precise phrasing of improvement figures is part of reporting test activities and results.

**Question 7 (hard) — Streaming lag accumulation**

A consumer processes 5,400 events per minute. During a peak window, producers write 6,150 events per minute to the topic for 40 minutes, after which the rate drops to 4,900 events per minute. How long after the peak ends will the consumer clear the accumulated backlog?

A) 30 minutes  B) 45 minutes  C) 60 minutes  D) 75 minutes

**Correct answer: C.**

**Explanation:** Backlog accumulated during the peak = (6,150 − 5,400) × 40 = 30,000 events. After the peak, net drain rate = 5,400 − 4,900 = 500 events per minute. Time to clear = 30,000 ÷ 500 = 60 minutes. This tests fill-and-drain arithmetic — recovery time depends on *net* drain rate, and if post-peak inflow had matched or exceeded consumption, the backlog would never clear, which is the calculation that justifies scaling decisions for streaming systems.

**Question 8 (hard) — Budget reallocation with constraints**

An annual platform budget is £960,000, currently split: compute 45%, storage 25%, licences 20%, training 10%. Next year the total budget falls by 5%, and the licence cost is contractually fixed at its current pound value. If training must retain at least £80,000, what is the maximum combined budget available for compute and storage next year?

A) £640,000  B) £649,600  C) £540,000  D) £720,000

**Correct answer: A.**

**Explanation:** Current licences = £192,000, contractually fixed. Next year's total = £912,000. Subtract fixed licences: £720,000 available for compute, storage, and training. Training must retain at least £80,000, so maximum for compute and storage = £720,000 − £80,000 = £640,000. Option B comes from wrongly cutting the fixed licence figure by 5% too — the single most tempting error, because applying the reduction uniformly feels consistent. This tests distinguishing fixed from proportional costs before applying a global cut, and reading a constraint's direction ("at least" versus "at most") correctly.

**Question 9 (moderate) — Reading a cost table**

Monthly cloud costs for four environments (in £ thousands):

| Environment | April | May | June |
|---|---|---|---|
| Production | 42.0 | 44.1 | 46.3 |
| Pre-production | 18.0 | 18.0 | 21.6 |
| Test | 9.5 | 11.4 | 13.7 |
| Development | 6.5 | 6.5 | 6.4 |

Which environment had the largest *percentage* increase from April to June?

A) Production  B) Pre-production  C) Test  D) Development

**Correct answer: C.**

**Explanation:** Production: ≈10.2%. Pre-production: 20%. Test: ≈44.2%. Development: essentially flat. Test wins by a wide margin despite the smallest absolute increase among the growing environments. This tests recognising that percentage change always needs the base — production's growth is capacity-driven and expected, while test's 44% growth in three months is the anomaly worth investigating.

**Question 10 (moderate) — Team capacity allocation**

A data engineering group has 5 engineers, each with 8 productive days per fortnight. In the next fortnight, allocation must cover: 12 engineer-days to the streaming build, 8 to standards and documentation, 6 to problem investigations, and 20% of total capacity held for unplanned support. How many engineer-days remain for discretionary innovation work?

A) 4  B) 6  C) 8  D) 14

**Correct answer: B.**

**Explanation:** Total capacity = 40 engineer-days. Reserve = 20% × 40 = 8 days. Committed work = 26 days. Remaining = 40 − 8 − 26 = 6 engineer-days. This tests holding a support reserve out of capacity before allocating the rest — a candidate who allocates 100% of nominal capacity has actually planned for zero incidents, zero sick days, and zero surprises.

**Question 11 (hard) — Weighted data quality score**

A data quality framework scores datasets on three dimensions: completeness (weight 50%), validity (weight 30%), and timeliness (weight 20%). A critical dataset scores 92% completeness, 85% validity, and 70% timeliness. The service standard requires a weighted score of at least 85%. Does the dataset meet the standard, and what is its weighted score?

A) Yes — 85.5%  B) No — 84.5%  C) No — 82.3%  D) Yes — 86.2%

**Correct answer: A.**

**Explanation:** Weighted score = (92 × 0.50) + (85 × 0.30) + (70 × 0.20) = 85.5%, clearing the threshold. Option B results from swapping the validity and timeliness weights. Option C is the simple average, ignoring the weights. This tests weighted-average calculation and, for a strong candidate's answer, noting that a pass at 85.5% with timeliness at 70% is fragile — one late feed drops it below standard.

**Question 12 (moderate) — Ratio reasoning across sources**

A conformed reference dataset is assembled from two systems in the ratio 5:3 (System P : System Q). System Q contributes 240,000 records. How many records does the conformed dataset contain in total, assuming no overlap?

A) 400,000  B) 640,000  C) 384,000  D) 540,000

**Correct answer: B.**

**Explanation:** One part = 240,000 ÷ 3 = 80,000. System P = 5 parts = 400,000. Total = 640,000. Option A stops at System P's contribution and forgets to add Q back in — the most common slip in ratio questions. This tests converting a ratio into a concrete "size of one part" as the first step, then scaling — with the built-in sanity check that all parts must sum to the total.

**Question 13 (hard) — Interpreting a performance improvement claim**

A supplier claims their new ingestion engine "reduces processing time by 60%". A current nightly batch takes 7 hours 30 minutes. Separately, a team's optimisation backlog is estimated to cut the current time by 90 minutes. If both claims are accurate and the supplier's percentage applies to the time *after* the team's optimisation, what would the final nightly runtime be?

A) 3 hours 00 minutes  B) 2 hours 24 minutes  C) 1 hour 48 minutes  D) 3 hours 36 minutes

**Correct answer: B.**

**Explanation:** Team's optimisation first: 7.5 − 1.5 = 6.0 hours. Supplier's 60% reduction applies to that: 6.0 × 0.40 = 2.4 hours = 2 hours 24 minutes. Option A applies 60% to the original 7.5 hours, ignoring the sequencing instruction. This tests recognising that percentage reductions are multiplicative and order-sensitive when mixed with absolute reductions — and that pinning down a supplier's claimed base is part of communicating between the technical and non-technical before a figure reaches a business case.

**Question 14 (easy) — Unit conversion under time pressure**

A pipeline processes a steady 1,800 records per second. Approximately how many records does it process in a 6-hour overnight window?

A) 6.5 million  B) 10.8 million  C) 38.9 million  D) 64.8 million

**Correct answer: C.**

**Explanation:** 1,800 × 60 × 60 × 6 = 38,880,000 ≈ 38.9 million. Option B multiplies by 60 once and then by 6, silently treating minutes as hours — a missed conversion step. This tests keeping units visible at every intermediate step, since throughput-over-window arithmetic is among the most common calculations in the role, and the most common place for an order-of-magnitude slip to survive into a capacity plan.

**Question 15 (moderate) — Percentage of a percentage**

Profiling shows that 12% of records in a source extract have at least one data quality issue. Of those flawed records, 25% have issues serious enough to reject; the rest can be auto-corrected. If the extract contains 3.4 million records, how many will be rejected?

A) 850,000  B) 408,000  C) 102,000  D) 306,000

**Correct answer: C.**

**Explanation:** Flawed = 12% × 3.4 million = 408,000. Rejected = 25% of the flawed records = 102,000. Equivalently, 12% × 25% = 3% of the whole extract. Option A applies 25% to the whole extract; option B stops at the intermediate value. This tests deciding, for every percentage encountered, *of which population* it is a percentage before multiplying — the same base-discipline applied twice in sequence.

### Administration tips

- **Score for whether a candidate anchors every percentage to its base** before computing.
- **Watch for whether a candidate compounds growth rather than extrapolating linearly.**
- **Note whether a candidate writes intermediate values down** on multi-step questions rather than holding several figures in their head.
- **Note whether a candidate distinguishes fixed from proportional costs** before applying a global adjustment.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding a percentage change divided by the wrong base.**
- **Missing when a candidate confuses percentage points with percent.**
- **Crediting linear extrapolation of a compound trend.**
- **Missing when a candidate answers with an intermediate value** rather than what was actually asked.
- **Rewarding over-calculation** where an estimate would have settled the question.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written material of the kind this role deals in daily: data integration standards, government data strategies, architecture decision records, supplier contracts, incident reports, and emails from stakeholders ranging from junior engineers to directors. Passages use genuine professional register and terminology; the questions test whether a candidate can separate what a text actually states from what it merely implies, and both of those from outside knowledge.

The classic format presents a dense passage followed by statements judged True (the passage states or logically entails it), False (the passage contradicts it), or Cannot Say (the passage provides insufficient information either way). Multiple-choice comprehension questions are usually mixed in. Timing is tight, often under a minute per question.

The cardinal rule is *fact-based logic*: answer strictly from the text provided, ignoring outside knowledge. For senior specialists this is genuinely harder than it sounds — deep knowledge of how metadata repositories usually work becomes a liability unless consciously set aside when a passage describes one that works differently.

### How this assessment maps to the role

- **Precise comprehension of standards and policies** maps to **Data integration design** and **Data development process**.
- **Interpreting stakeholder needs from text** maps to **Communicating between the technical and non-technical**.
- **Reviewing specifications** maps to **Testing** and **Programming and build**: deciding whether a statement about behaviour is entailed by a specification is literally the True/False/Cannot Say task in engineering costume.
- **Synthesising documentation** maps to **Metadata management** and **Data modelling**.
- **Evaluating claims about tools** maps to **Data innovation**: vendor whitepapers mix fact, projection, and marketing, and the discipline of separating stated fact from implication is the primary defence.

### Practice questions

For each passage, the candidate should judge the statements strictly on the text.

**Passage 1 — Extract from a draft cross-government data sharing standard**

> "Departments exchanging personal data must record each exchange in the departmental data sharing register within five working days. Where an exchange is repeated on a fixed schedule, a single register entry covering the schedule is sufficient, provided the entry is reviewed annually. Exchanges of fully anonymised data are exempt from registration but must still comply with departmental security classification policy. Pseudonymised data is treated as personal data for the purposes of this standard."

**Question 1 (easy).** True, False, or Cannot Say: "Under the draft standard, a weekly scheduled exchange of personal data requires a new register entry every week."

**Correct answer: False.**

**Explanation:** The passage directly addresses this: "a single register entry covering the schedule is sufficient, provided the entry is reviewed annually." A weekly exchange on a fixed schedule requires one entry plus annual review, not a weekly entry. This tests locating a directly contradicting clause — a distinction applied whenever a team's adherence to integration procedures is audited.

**Question 2 (moderate).** True, False, or Cannot Say: "Exchanging pseudonymised data on an ad hoc basis must be recorded in the register within five working days."

**Correct answer: True.**

**Explanation:** Chain two stated rules: pseudonymised data "is treated as personal data", and personal data exchanges "must record each exchange... within five working days". An ad hoc pseudonymised exchange therefore inherits the five-day obligation. This tests entailment across two sentences — a two-step chain exactly as real standards operate, where obligations often attach through a definitional clause several paragraphs from the operative one.

**Question 3 (moderate).** True, False, or Cannot Say: "Fully anonymised data may be exchanged without any restrictions."

**Correct answer: False.**

**Explanation:** The passage exempts anonymised data from *registration* but adds that it "must still comply with departmental security classification policy." "Without any restrictions" is contradicted. This tests catching an over-extension of scope — the same over-extension error the standards work punishes, where most compliance disputes and most False-dressed-as-True answers hide.

**Question 4 (hard).** True, False, or Cannot Say: "The five-working-day deadline was introduced because departments were recording exchanges too slowly."

**Correct answer: Cannot Say.**

**Explanation:** The passage states the deadline but gives no rationale whatsoever. This tests resisting a plausible-but-unstated rationale, however reasonable it sounds — senior candidates lose more marks to plausible-but-unstated rationales than to any other error, because supplying rationale is what experienced people do automatically when reading policy.

**Passage 2 — Email from a director to the data engineering leadership group**

> "Colleagues — the Spending Review outcome means our data platform programme will receive funding for two of the three planned workstreams next year. The analytics migration and the real-time integration workstreams both scored well in the prioritisation exercise; the metadata modernisation workstream will be paused rather than cancelled, and its business case should be refreshed for the following year. I would like the leadership group's view on sequencing by Friday. Please note that pausing metadata modernisation must not be communicated to suppliers before the commercial team completes the contract review."

**Question 5 (easy).** True, False, or Cannot Say: "The metadata modernisation workstream has been cancelled."

**Correct answer: False.**

**Explanation:** The email states it "will be paused rather than cancelled" — a direct contradiction. This tests banking an easy mark from a directly addressed statement, and noticing that "paused, not cancelled" is a distinction worth preserving when cascading a message onward.

**Question 6 (moderate).** True, False, or Cannot Say: "The analytics migration workstream will receive funding next year."

**Correct answer: Cannot Say — but the reasoning is worth examining carefully.**

**Explanation:** The email says funding covers "two of the three planned workstreams", that analytics migration and real-time integration "both scored well", and that metadata modernisation "will be paused". If exactly two are funded and metadata modernisation is the paused one, the remaining two would be funded by elimination — but the email never states this mapping explicitly; the pause could in principle be for non-funding reasons. Under the strictest reading, Cannot Say; under ordinary entailment, True. This tests recognising when a conclusion requires an unstated bridging assumption (however natural) versus when a chain uses only stated definitional links (as in Question 2) — the discriminating skill this whole section rewards.

**Question 7 (moderate).** True, False, or Cannot Say: "Suppliers must not be told about the pause until the commercial team has finished reviewing the contracts."

**Correct answer: True.**

**Explanation:** The final sentence states this directly, and the statement is a faithful paraphrase with nothing added and nothing lost. This tests confirming that each element of a paraphrase maps onto the original with no addition or loss — matching meaning rather than string-matching words.

**Passage 3 — Extract from an incident review report**

> "On 14 May, the overnight conformed load completed with a record volume 38% above the trailing average. Investigation established that an upstream source system had re-sent a full historical extract following its own database restore, and the pipeline's deduplication step, which matches on a composite key of citizen identifier and event date, did not exclude the re-sent records because the restore had regenerated event timestamps. Downstream BI reports overstated activity for six hours until the load was rolled back. The review recommends extending the composite key to include the source transaction identifier, and adding an automated volume-anomaly gate that pauses loads deviating more than 15% from the trailing average pending engineer approval."

**Question 8 (easy).** True, False, or Cannot Say: "The deduplication step failed because the composite key did not include the source transaction identifier."

**Correct answer: Cannot Say — the passage supports a related but different claim.**

**Explanation:** The passage attributes the failure to "the restore had regenerated event timestamps", and separately *recommends* extending the key to include the transaction identifier — a recommendation, not a stated cause. The statement fuses a stated cause with a stated recommendation into a causal claim the text never quite makes. This tests refusing to exceed the text even where the synthesis feels like sensible engineering reasoning.

**Question 9 (moderate).** True, False, or Cannot Say: "Under the recommended volume-anomaly gate, the 14 May load would have been paused for engineer approval."

**Correct answer: True.**

**Explanation:** The recommended gate pauses loads deviating more than 15%; the 14 May load was 38% above the trailing average, exceeding 15%. Applying the stated rule to the stated fact yields the conclusion by straightforward entailment. This question pairs deliberately with Question 8: one requires refusing an inference, the other requires making one — the dividing line is whether every step of the chain is in the text.

**Question 10 (moderate) — Multiple choice.** Which of the following best summarises the incident review passage?

A) A source system database restore caused a data breach that took six hours to contain
B) A re-sent historical extract evaded deduplication due to regenerated timestamps, briefly distorting BI reports, prompting recommendations to strengthen the matching key and add a volume-anomaly gate
C) The pipeline's deduplication step is fundamentally flawed and must be redesigned
D) BI reports overstated activity because the trailing average was calculated incorrectly

**Correct answer: B.**

**Explanation:** Option B captures cause, impact, and both recommendations. Option A substitutes "data breach" — a security event the passage never describes; overstated reports are an accuracy incident. Option C inflates a targeted recommendation into "fundamentally flawed". Option D invents a cause the passage contradicts. This tests comparing each candidate summary clause-by-clause against the text, since wrong options are usually distortions of emphasis rather than outright fabrication.

**Passage 4 — Extract from a vendor whitepaper being evaluated by a team**

> "StreamForge 4 delivers up to 3x ingestion throughput compared with StreamForge 3 in vendor benchmark conditions. Early adopters in the financial services sector report material reductions in pipeline latency. StreamForge 4's schema registry is expected to achieve certification against the open interoperability profile in the next release. Organisations running StreamForge 3 should note that extended support ends in eighteen months."

**Question 11 (moderate).** True, False, or Cannot Say: "StreamForge 4's schema registry is certified against the open interoperability profile."

**Correct answer: False.**

**Explanation:** The passage says certification "is expected... in the next release" — not yet achieved. This tests decoding vendor hedges ("expected", "up to 3x", "in vendor benchmark conditions") that convert marketing claims into technically-true-but-weak statements — the same decoding required when judging appropriate timing for adoption of a new tool.

**Question 12 (hard).** True, False, or Cannot Say: "Organisations migrating from StreamForge 3 to StreamForge 4 will experience a threefold increase in ingestion throughput."

**Correct answer: Cannot Say.**

**Explanation:** Three hedges separate the passage's claim from the statement: "up to 3x" is a ceiling, not a typical value; the figure was obtained in vendor benchmark conditions, not any real deployment; and the statement generalises to all migrating organisations, which even a strong benchmark could not support. This tests translating "up to 3x in vendor benchmarks" into "unknown, to be validated in this environment" — the discipline applied before any business case cites a supplier's number.

**Question 13 (moderate).** True, False, or Cannot Say: "Organisations currently running StreamForge 3 will lose extended support within two years."

**Correct answer: True.**

**Explanation:** The passage states support "ends in eighteen months", which is within two years — a weaker claim entailed by a stronger stated fact. This tests recognising valid entailment from stronger to weaker claims, and not overthinking a genuinely simple item.

**Passage 5 — Extract from a departmental architecture decision record**

> "Decision: the citizen events integration will adopt the streaming pattern rather than nightly batch. Rationale: three consuming services require data freshness of under one hour, which batch cannot provide. Consequences: the team must acquire streaming operations skills before go-live; the existing batch flow will run in parallel for one quarter as a reconciliation reference, after which it will be decommissioned unless reconciliation reveals material discrepancies. This decision supersedes ADR-014. It does not apply to the archival extract, which remains batch."

**Question 14 (easy).** True, False, or Cannot Say: "The existing batch flow will be decommissioned at the end of the parallel-run quarter."

**Correct answer: Cannot Say.**

**Explanation:** The passage attaches a condition: decommissioning happens "unless reconciliation reveals material discrepancies". This tests noticing conditional language ("unless", "provided that") that converts a confident-sounding plan into a contingent one — the same wording sensitivity applied when writing decision records that successors will read as commitments.

**Question 15 (moderate).** True, False, or Cannot Say: "All of the department's data flows must now use the streaming pattern."

**Correct answer: False.**

**Explanation:** The decision concerns one named flow, and the passage explicitly carves out an exception for the archival extract. This tests scope discipline — a rule's authority extends precisely as far as its stated scope, the same skill applied when establishing and maintaining integration standards.

**Question 16 (moderate) — Multiple choice.** According to the architecture decision record in Passage 5, why was the streaming pattern chosen?

A) Because the team wanted to develop streaming operations skills
B) Because three consuming services need data fresher than nightly batch can deliver
C) Because ADR-014 recommended it
D) Because the batch flow had revealed material discrepancies

**Correct answer: B.**

**Explanation:** The rationale is stated in one sentence and option B paraphrases it faithfully. The other options each recycle genuine passage content in a false causal role: A inverts a consequence into a motive; C misreads "supersedes"; D borrows language from a hypothetical future condition. This tests locating a passage's own rationale marker and matching options against it, rejecting options built from material appearing elsewhere in the text under a different logical role.

### Administration tips

- **Score for whether a candidate distinguishes False (contradicted) from Cannot Say (silent).**
- **Watch for whether a candidate quarantines outside expertise** rather than filling gaps with what is usually true.
- **Note whether a candidate catches an over-extended exemption or scope.**
- **Note whether a candidate decodes hedging language** ("up to", "expected to", "typically") rather than reading it as a firm claim.
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from outside knowledge** rather than the passage.
- **Missing when a candidate confuses implication with entailment** — a recommendation implying a diagnosis is not the same as stating it.
- **Crediting an answer that over-extends an exemption or scope.**
- **Missing when a candidate treats a likely outcome as a stated fact.**
- **Penalising a correct simple entailment through defensive overthinking.**

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal effectiveness, and professional conduct through realistic workplace dilemmas. There is no purely objective right answer: several responses to each scenario may seem reasonable, and the task is to identify which best fits the role's responsibilities and the organisation's values — putting user needs first, transparency, collaboration across departmental boundaries, accessibility and inclusion, evidence-based decision-making, and the responsible stewardship of public money and citizens' data.

Formats vary. The most common asks for the **most effective** and **least effective** of four or five possible actions; others ask for a full ranking or a rating on a scale. Timing is usually generous or absent. Scenarios at this level involve the stakeholders a lead data engineer really faces: engineering teams, peer leads in other departments, architects, delivery managers, information governance colleagues, suppliers, and senior civil servants who need technical reality translated into decision-ready language.

The scenarios are calibrated to leadership: they probe how a candidate balances delivery pressure against engineering standards, handles conflict between teams they coordinate, decides when to escalate versus absorb, develops people rather than simply directing them, and champions good data engineering practice across government without alienating the people they need to persuade.

### How this assessment maps to the role

- **Stakeholder communication and expectation management** map to **Communicating between the technical and non-technical**.
- **Team coordination and standards leadership** map to **Data development process** and **Data integration design**.
- **Incident and problem leadership** map to **Problem management** and **Testing**.
- **Cross-government influence** maps to the duty to champion data engineering and data modelling reuse.
- **Judgement about innovation and risk** maps to **Data innovation**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (moderate) — The deadline versus the failing tests**

A team is due to promote a new cross-departmental data flow to production on Friday, publicly committed to the programme board. On Wednesday, integration testing reveals that 3% of records fail referential integrity checks against the target conformed model. The delivery manager suggests going live anyway and fixing the failures "in flight", noting the failures affect only one downstream report. Choose the MOST effective and LEAST effective actions.

A) Agree to go live as planned; 97% success is acceptable and the board commitment matters most
B) Postpone the go-live unilaterally and inform the programme board that testing has failed
C) Quantify the impact of the 3% (which records, which users, which decisions rely on the affected report), define a remediation path, and present the board with a clear recommendation and options before Friday
D) Go live but quietly exclude the failing 3% of records from the load, planning to add them later without telling downstream consumers
E) Ask the test team to relax the referential integrity checks so the load passes

**Most effective: C. Least effective: E (with D a close second-worst).**

**Explanation:** Option C turns a technical signal into decision-ready information, preserves the board's ability to make an informed choice, and keeps user impact — not the milestone — at the centre. Option B has the right instinct but exercises it poorly: unilateral postponement without analysis undermines the collaborative governance a programme board exists to provide. Option A subordinates data integrity to reputation management. Option D makes the report silently wrong and betrays downstream consumers' trust. Option E is least effective of all: it destroys the instrument that detected the defect, corrupting every future run's assurance — the data engineering equivalent of disconnecting a fire alarm. This tests recognising that options which damage systemic safeguards, rather than merely making one bad call, are almost always the intended "least effective".

**Question 2 (moderate) — The resistant team and a new standard**

A lead data engineer has established a new metadata registration standard: every new dataset must be registered in the enterprise repository with defined ownership and sensitivity classification before first production load. One of the four teams coordinated has ignored the standard for its last three datasets, and its team lead says privately: "The repository tooling doubles our lead time. We'll register things once the tooling improves." Choose the MOST effective and LEAST effective actions.

A) Escalate the non-compliance to the head of data engineering, recommending the team's releases be blocked until they comply
B) Sit down with the team to time their registration workflow end-to-end, fix or streamline the genuine tooling friction, agree a realistic compliance date, and make registration of the three missing datasets part of that plan
C) Grant the team a formal exemption from the standard until the tooling improves
D) Re-announce the standard to all four teams by email, emphasising it is mandatory
E) Quietly register the three datasets personally so the repository is complete

**Most effective: B. Least effective: E.**

**Explanation:** Option B treats the resistance as information: the team has flagged the standard's cost is too high, and investigating that claim gets both adherence and a better standard — matching the duty to establish standards, keep them up to date, *and* ensure adherence. Option A spends escalation capital prematurely and converts a solvable tooling problem into an interpersonal one. Option C rewards non-compliance with an exemption. Option D is activity masquerading as action. Option E is least effective: it removes the symptom while entrenching the disease, teaches the team that non-compliance transfers work upward, does not scale across four teams, and leaves ownership and classification decisions to someone a step removed from the data. This tests recognising that the most helpful-looking option can quietly destroy accountability.

**Question 3 (hard) — The minister's dashboard and the honest number**

A director asks a lead data engineer to confirm, by end of day, that a new benefits-processing dashboard can be described to the minister's office as "real-time". The underlying streaming pipeline delivers events with a median latency of 40 seconds, but a known failure mode — which occurred twice last month — can delay data by up to four hours until an engineer intervenes. Choose the MOST effective and LEAST effective actions.

A) Confirm "real-time", since 40 seconds median is real-time by any practical definition
B) Reply that the dashboard is "near-real-time under normal operation, typically under a minute, with a known failure mode that can delay data by up to four hours" and offer a one-paragraph plain-English description plus the remediation plan and timescale for the failure mode
C) Refuse to endorse any description until the failure mode is fixed
D) Confirm "real-time" but log the concern about the failure mode in the risk register
E) Tell the director the question should be answered by the platform supplier

**Most effective: B. Least effective: A (with D close behind).**

**Explanation:** Option B translates engineering reality into plain language a minister's office can safely repeat, includes the caveat that matters, and pairs the bad news with a remediation plan. Option A is least effective because the omission is foreseeable and consequential: the failure mode has occurred twice in a month, and when data next goes stale for four hours the minister's office will have made a false statement traceable to the confirmation. Option D is barely better — logging a risk while simultaneously helping conceal it is self-protection, not transparency. Option C mistakes perfectionism for integrity. Option E abdicates: the supplier neither knows the operational history nor owes the minister candour. This tests giving decision-makers the usable truth rather than the comfortable one.

**Question 4 (moderate) — The duplicate pipelines discovered mid-flight**

While reviewing another department's architecture as part of a cross-government working group, a lead data engineer realises their in-progress ingestion pipeline duplicates, almost feature for feature, a pipeline their own team already runs and could share. The other department's build is three months in, with four months remaining, and their lead engineer is visibly proud of the design. Choose the MOST effective and LEAST effective actions.

A) Say nothing; their department funds its own work and reuse is not this role's call
B) Raise it in the working group meeting, presenting a comparison and proposing they abandon their build in favour of the existing pipeline
C) Speak privately with their lead engineer first: share the pipeline's documentation, explore honestly whether it meets their needs, and if it might, offer to bring a joint reuse assessment to the working group as a shared recommendation
D) Email both departments' directors recommending the duplicate project be stopped to avoid wasting public money
E) Suggest they finish their build, then converge the two pipelines "at some future point"

**Most effective: C. Least effective: D.**

**Explanation:** Option C sequences influence correctly: technical validation before public advocacy, respect for the other engineer's ownership, and a joint recommendation that lets them share credit for the saving rather than absorb blame. This tests the duty to recognise and share reuse opportunities across government as both a technical and a relationship problem. Option B ambushes a proud engineer in front of peers. Option A fails the stewardship test. Option E is polite waste. Option D is least effective: leaping two levels of hierarchy with a stop-work recommendation, before any technical validation, maximises embarrassment and destroys the trust that makes future cross-government collaboration possible.

**Question 5 (moderate) — The struggling junior engineer**

A junior engineer on a team has, for the second sprint running, delivered pipeline code with test coverage well below the team's agreed standard, and a peer has privately complained about carrying the extra review burden. The junior engineer is enthusiastic and hard-working but was recruited into their first data engineering role five months ago. Choose the MOST effective and LEAST effective actions.

A) Move the junior engineer to less critical work until they improve
B) Raise the pattern with the junior engineer directly and kindly: review a recent piece of their code together, understand why the tests are thin (skill gap, time pressure, unclear standard), agree a development plan, and pair them with an experienced engineer for the next sprint
C) Tell the complaining peer that supporting juniors is part of everyone's job and they should continue reviewing patiently
D) Tighten the pipeline's merge controls so code below the coverage threshold cannot be merged at all
E) Raise the issue at the team retrospective as a general reminder about test coverage, without naming anyone

**Most effective: B. Least effective: C.**

**Explanation:** Option B is direct, kind, and diagnostic: it distinguishes skill gaps from time pressure from unclear standards, invests in the person, and relieves the overloaded peer through structured pairing. Option D is a reasonable *supporting* control but, alone, impersonal. Option A protects delivery but labels the engineer a problem and removes the stretch experiences they need. Option E is conflict avoidance dressed as facilitation. Option C is least effective: it dismisses a legitimate signal from a conscientious team member and leaves the development need wholly unaddressed. This tests whether a candidate develops people rather than merely processing them, and whether feedback that reaches them gets acted on rather than silenced.

**Question 6 (hard) — The incident, the fix, and the root cause**

A critical data flow feeding several departmental BI systems failed at 06:00. The team applied a manual workaround by 08:30, and consumers are unaffected. The engineer who fixed it says the underlying cause is "probably the upstream API change last week" and wants to move on to sprint work; the same flow failed with similar symptoms twice in the past quarter. Sprint commitments are already at risk. Choose the MOST effective and LEAST effective actions.

A) Accept the workaround, note "probable upstream API change" in the incident log, and return the team to sprint work
B) Commission a time-boxed root-cause investigation for the recurring failure, led by the fixing engineer with one other, present the findings to the team, and implement a permanent fix and detection — accepting a visible, communicated cost to this sprint's commitments
C) Ask the engineer to investigate the root cause "when they have spare time"
D) Escalate to the upstream system's team, asking them to stop changing their API without notice
E) Schedule the investigation for next quarter's planned maintenance window

**Most effective: B. Least effective: C.**

**Explanation:** Option B is time-boxed, staffed with the person holding the freshest context plus a second pair of eyes, transparent about the delivery trade-off, and finished only when both a permanent fix and detection exist. Option A embeds a guess as an explanation — unverified causes in incident logs are how organisations convince themselves recurring problems are coincidences. Option D acts on that same unverified guess and spends cross-team escalation capital on it. Option E treats a recurring live failure as scheduled maintenance. Option C is least effective because "when you have spare time" is a decision disguised as a deferral, since spare time does not exist in an at-risk sprint — and it is the only option dishonest with the team itself about whether the investigation is really happening.

**Question 7 (moderate) — The exciting tool and the procurement reality**

Two strong engineers champion adopting a genuinely promising open-source data orchestration framework they have prototyped successfully. Adopting it would mean migrating twelve production pipelines, retraining four teams, and it falls outside the department's currently supported technology list. The engineers are ready to start migrating "quietly, one pipeline at a time" and warn that the profession will fall behind if it always waits. Choose the MOST effective and LEAST effective actions.

A) Authorise the quiet gradual migration; innovation requires bending rules and the tool is clearly better
B) Decline: the supported-technology list exists for good reasons and the current orchestrator works
C) Channel the prototype into a formal evaluation: define success criteria with the engineers, run a bounded pilot on a non-critical flow with the platform and architecture teams' knowledge, and take the results to the technology governance forum as a proposal to amend the supported list
D) Tell the engineers to raise it with the architecture team themselves and continue with current tooling meanwhile
E) Adopt the framework for all new pipelines only, leaving the twelve existing ones alone, without updating the supported-technology list

**Most effective: C. Least effective: A (with E close behind).**

**Explanation:** Option C honours both halves of the data innovation skill — identifying areas of innovation and recognising appropriate timing for adoption. It keeps the engineers' energy, makes the evaluation legitimate through the governance forum, bounds the risk, and creates the evidence an adoption decision deserves. Option A is least effective: unsanctioned divergence across production pipelines creates shadow infrastructure, secures no training or security review, and — when discovered — sets back the credibility of every future innovation proposal. Option E commits to two orchestration stacks indefinitely while still bypassing governance. Option B wastes the prototype and possibly a real opportunity. Option D is half-hearted delegation of a leadership duty. This tests converting unsanctioned enthusiasm into sanctioned evidence.

**Question 8 (hard) — The difficult discussion that must be hosted**

A meeting must resolve a dispute: the information governance lead insists a new cross-departmental analytics flow must exclude a set of sensitive fields until a data protection assessment completes (six weeks away), while the consuming department's deputy director says the analysis is needed for a fiscal event in three weeks and accuses governance of "blocking the whole point of the project". Tempers are short. As the technical chair, choose the MOST effective and LEAST effective actions.

A) Side with governance: the assessment is mandatory and the deputy director must wait
B) Side with the deputy director: the fiscal event is a national priority and governance can assess retrospectively
C) Reframe the dispute around options: ask governance which specific fields drive the assessment requirement, ask the deputy director which analyses the fiscal event actually needs, and explore technical middle paths — a flow excluding the sensitive fields now, pseudonymisation, or aggregated outputs — with a clear decision-owner and date for each
D) Pause the meeting and ask both parties to escalate to their respective directors for a decision
E) Commit the team to accelerating the flow's build so that whichever way the decision goes, delivery is not the bottleneck

**Most effective: C. Least effective: B.**

**Explanation:** Option C demonstrates the core move of hosting a difficult discussion: converting a positional standoff into a joint examination of underlying needs, where technical expertise adds options neither party could see alone. Option A is defensible but prematurely adversarial, accepting a false binary before exploring the middle ground. Option B is least effective: "assess retrospectively" means processing sensitive personal data before assessing whether it is lawful to do so — a potential legal breach that lends engineering credibility to a compliance failure. Option D escalates before the room has done its work. Option E answers a question nobody asked. This tests facilitation that looks for what is possible inside the rules rather than adjudicating a standoff.

**Question 9 (moderate) — Ranking: the morning the numbers disagreed**

At 09:15, two departmental dashboards — both fed by flows this team operates — are showing different totals for the same headline measure, and a permanent secretary's office has noticed. Rank these four actions from FIRST to LAST as the immediate sequence.

1. Establish which (if either) figure is correct, and the scope and cause of the divergence
2. Send a brief holding message to the permanent secretary's office and both dashboards' owners: divergence confirmed, under investigation, which figure (if either) to trust meanwhile, update by a stated time
3. Convene the two responsible engineers to trace the divergence to its source
4. Draft the root-cause report and the prevention plan (reconciliation checks between the two flows)

**Correct ranking: 2, 3, 1, 4 — with 2 and 3 defensibly simultaneous.**

**Explanation:** The instinct of most engineers is to investigate first and communicate when there is something solid to say. Leadership inverts this: when a permanent secretary's office has already noticed a discrepancy, silence is itself a message that invites decisions on whichever wrong number is convenient. The holding message (2) costs minutes and buys the investigation room to be thorough. Convening the engineers (3) starts the technical work, near-simultaneous with the message. Establishing the correct figure and cause (1) follows. The report and prevention plan (4) come last, since reconciliation checks designed before the cause is known are guesswork. This tests sequencing under pressure, where the discriminator is almost always where communication sits — candidates who bury stakeholder communication at position three or four have answered as engineers rather than as the leader of engineers the role requires.

### Administration tips

- **Score for whether a candidate's response acts where the role's duties point** — directly, transparently, and with others rather than around them.
- **Watch for whether a candidate gathers information before acting**, and distinguish genuine time-boxed diagnosis from procrastination dressed as diligence.
- **Note whether a candidate's "least effective" choice matches the signature failure modes**: silencing feedback, destroying a safeguard, hiding information, or transferring a problem without solving it.
- **Note whether a candidate answers as a leader** — building capability and accountability in others — rather than as an individual contributor absorbing the work personally.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding the idealistic option over the effective one** — "refuse until it is perfect" feels principled but often abandons stakeholders.
- **Crediting a passive or deferring option** — "mention it at the retrospective", "when they have spare time", "at some future point".
- **Missing when a candidate escalates prematurely** — above someone's head before speaking to them, or before any analysis.
- **Accepting an answer that protects the candidate instead of the outcome** — logging a risk while enabling the harm, staying silent to preserve a relationship.
- **Rewarding an answer where the candidate personally absorbs the work** rather than building capability and accountability in others.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a lead data engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested bounding a fault from healthy evidence, inducing rules from examples, and scheduling under multiple constraints. The numeric section tested anchoring every percentage to its base, compounding growth correctly, and distinguishing fixed from proportional costs. The verbal section tested refusing inferences a text does not support while making the ones it does, and decoding hedged claims in supplier material. The situational judgement section tested sequencing communication ahead of investigation when stakeholders are watching, developing people rather than absorbing their work, and converting unsanctioned enthusiasm into sanctioned evidence.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can reason precisely under pressure, communicate technical reality honestly to decision-makers, and lead a team through delivery, standards, and incidents — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
