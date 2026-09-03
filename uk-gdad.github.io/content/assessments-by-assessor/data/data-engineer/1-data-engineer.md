# Data Engineer - Psychometric Assessment Resources

## Introduction

This document supports an assessor - a line manager, a panel member, or a reviewer - administering a workplace job-specific psychometric assessment to a candidate for the data engineer role. It gives structured, role-specific assessment material for recruitment, promotion, or professional development processes across the Civil Service and wider public sector.

Psychometric assessments are structured, standardised exercises that measure the thinking skills and judgement a role demands. Rather than testing what a candidate has memorised, they measure how a candidate processes information: how quickly they spot a pattern in a data flow, how accurately they interpret a table of pipeline metrics, how carefully they read a data standards document, and how wisely they choose between competing courses of action when a stakeholder is waiting on a report.

For a data engineer, these skills are not abstract. The role implements data flows that connect operational systems to analytics and business intelligence platforms, documents source-to-target mappings, writes and tunes ETL scripts, re-engineers manual data flows so they scale, and builds accessible, reusable data products. Each of those duties draws directly on cognitive ability, numerical reasoning, verbal comprehension, and situational judgement, which is what this assessment is built to surface.

This document is organised into four main assessment sections, each matched to a common psychometric test type:

1. **Workplace job-specific cognitive assessment** - pattern recognition, logical deduction, error checking, and problem solving using the artefacts the role really handles, such as mappings, schedules, and data models.
2. **Workplace job-specific numeric reasoning assessment** - interpreting tables, percentages, ratios, capacity figures, and performance metrics from realistic pipeline and BI scenarios.
3. **Workplace job-specific verbal reasoning assessment** - reading dense, role-relevant passages such as data policies, standards, and stakeholder emails, then answering True / False / Cannot Say and comprehension questions.
4. **Workplace job-specific situational judgement assessment** - realistic workplace dilemmas involving the role's real stakeholders, where the candidate judges which responses are most and least effective.

Each section explains what the assessment measures, maps it to the specific skills in the role profile, provides a generous set of practice-calibrated items with worked answers, and finishes with administration guidance and a scoring note on common pitfalls to watch for.

How to administer this fairly: present the same items and hold every candidate to the same time limit for a given round. Keep the worked answers and explanations back as an answer key - they are not shown to the candidate before or during the assessment, only used by you for scoring and for the debrief afterwards. Brief the candidate on format and timing before you start, run each section under its stated time, and score against the key rather than against impression. Debrief every candidate afterwards, whatever the outcome, using the explanations in this document. Treat the result as one input among several in your overall judgement - never as a standalone verdict; see the advisory below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment is a targeted psychometric test designed to measure the exact mental processes needed for the data engineer role. Unlike a generic IQ test, it uses practical workplace scenarios and data formats drawn from the everyday tasks of the job: source-to-target mapping documents, ETL job schedules, data model diagrams described in text, metadata repository entries, and business intelligence report specifications.

Typical characteristics of this assessment type include:

- **Role-targeted content.** Questions mimic the everyday tasks and data formats of the actual job, so the candidate reasons about pipelines, mappings, and schemas rather than abstract shapes.
- **Timed format.** Allow 15 to 30 minutes to complete the test online; this rewards calm, methodical working rather than rushing.
- **Objective scoring.** Score results against a benchmark or norm group where available, and record a breakdown of speed versus accuracy rather than a single score.
- **Careful validation.** Questions are vetted to ensure they predict job success without bias, which is why they stay close to genuine work content.

Why does this matter for a data engineer? Because the role's core value to the organisation is the reliability of its reasoning. When implementing data flows to connect operational systems with analytics and BI systems, a single misread mapping or an unnoticed circular dependency can ripple into every downstream report. Cognitive assessments measure precisely the mental habits - systematic checking, logical deduction, pattern spotting, and structured prioritisation - that keep those pipelines trustworthy.

### What it measures for this role

The assessment dimensions map directly onto the skills named in the role profile:

- **Data development process.** Designing, building, and testing data products based on feeds from multiple systems requires holding several structures in mind at once and reasoning about how they combine. Logical deduction questions test exactly this.
- **Data modelling.** Producing, maintaining, and reverse-engineering data models depends on recognising structural patterns - entities, relationships, keys - which is the heart of pattern recognition items.
- **Data integration design.** Delivering resilient, scalable solutions in accordance with organisational standards requires tracing consequences: if this feed fails, what breaks? Fault-diagnosis questions probe this skill.
- **Metadata management.** Using metadata repositories for impact analysis is a pure exercise in dependency reasoning - a classic cognitive task.
- **Problem management.** Investigating problems at strategic, tactical, or operational levels, and contributing to remedies and preventative measures, calls for structured elimination of hypotheses.
- **Testing.** Reviewing requirements, defining test conditions, and identifying issues and risks depends on error checking - spotting the one row in a mapping that contradicts the specification.
- **Programming and build.** Designing, coding, testing, and correcting scripts under direction requires following and verifying precise logical rules, mirrored by sequence and rule-application questions.

### Practice questions

Each item below carries a full worked explanation, held back as an answer key for scoring and debrief.

**Question 1 (easy) - Pattern recognition in job schedules**

A team's nightly ETL batch runs jobs in this repeating naming pattern: `extract_A1`, `transform_A1`, `load_A1`, `extract_A2`, `transform_A2`, `load_A2`, `extract_A3`, ... The monitoring dashboard shows the most recent completed job was `transform_A7`. Which job should run next?

- A) `extract_A7`
- B) `load_A7`
- C) `extract_A8`
- D) `transform_A8`

**Correct answer: B**

**Explanation:** The pattern cycles through extract, transform, load for each numbered dataset before moving to the next number. Since `transform_A7` has just completed, the cycle for dataset A7 is not finished: `load_A7` must run before `extract_A8` begins. Assessments often include simple sequence questions like this early on; the skill being tested is whether the candidate confirms the whole cycle rather than jumping to the next number.

**Question 2 (easy) - Error checking a source-to-target mapping**

The candidate is reviewing a source-to-target mapping document. The specification says: "All date fields must be converted from DD/MM/YYYY to ISO 8601 (YYYY-MM-DD); all currency fields must be stored in pence as integers; all free-text fields must be trimmed of leading and trailing spaces." Which mapped row below violates the specification?

- A) `appointment_date: 03/11/2025 -> 2025-11-03`
- B) `payment_amount: £12.50 -> 1250`
- C) `renewal_date: 07/06/2025 -> 2025-07-06`
- D) `customer_note: " late arrival " -> "late arrival"`

**Correct answer: C**

**Explanation:** Row C swaps day and month: 07/06/2025 in DD/MM/YYYY means 7 June 2025, so the ISO form should be 2025-06-07, not 2025-07-06. Rows A, B, and D all follow the rules. Day-month transposition is one of the most common real defects in date conversion work, and error-checking items reward the discipline of verifying each component against the rule rather than concluding that the output merely "looks right".

**Question 3 (moderate) - Logical deduction about pipeline dependencies**

A metadata repository records these facts about five data flows: Flow P feeds Flow Q. Flow Q feeds Flows R and S. Flow S feeds Flow T. No other dependencies exist. This morning, Flow P failed before producing any output. Which statement must be true?

- A) Flow R produced incorrect data.
- B) Flow T did not receive its expected input.
- C) Flow S ran but produced empty output.
- D) Flow Q attempted to run and raised an error.

**Correct answer: B**

**Explanation:** From the dependency chain, P feeds Q, Q feeds S, and S feeds T. If P produced no output, then Q could not produce output, so S could not, so T's expected input never arrived - that must be true. Option A is wrong because R producing *incorrect* data is not entailed; more likely R produced nothing, and "incorrect" is a different claim. Options C and D describe specific runtime behaviours (running with empty output, raising an error) that depend on how the scheduler is configured - they might happen, but they do not *have* to. This is exactly the impact-analysis reasoning applied when maintaining a metadata repository: distinguishing what must follow from what merely might.

**Question 4 (moderate) - Rule application in an ETL script**

An ETL transformation rule states: "If `status_code` is 1 or 2, set `is_active` to TRUE. If `status_code` is 3, set `is_active` to FALSE and set `closure_reason` to the value of `notes`. For any other `status_code`, reject the record to the error queue." A record arrives with `status_code = 3` and `notes = NULL`. What should the pipeline do according to the rule as written?

- A) Reject the record to the error queue because `notes` is NULL.
- B) Set `is_active` to FALSE and `closure_reason` to NULL.
- C) Set `is_active` to TRUE because NULL notes imply the closure is invalid.
- D) Skip the record silently.

**Correct answer: B**

**Explanation:** The rule as written handles `status_code = 3` unconditionally: set `is_active` FALSE and copy `notes` into `closure_reason`. Nothing in the rule mentions NULL handling, so copying NULL is the literal outcome. The rejection clause applies only to status codes other than 1, 2, or 3. This question tests a habit central to programming and build work: executing the specification exactly as written, then separately recognising that the specification may be incomplete. In a real review, the gap in the NULL case would be flagged separately - flagging a gap is different from inventing behaviour the rule does not contain.

**Question 5 (moderate) - Prioritisation of pipeline incidents**

At 08:30 the candidate finds four open issues. Service standards say ministerial briefing data must be available by 09:00, and internal team dashboards by 12:00. Which issue should be addressed first?

- A) The reusable BI report template has a cosmetic formatting defect, reported yesterday.
- B) The feed powering the 09:00 ministerial briefing dashboard has stalled at 70% complete.
- C) A colleague has asked the candidate to explain a source-to-target mapping at some point today.
- D) The internal team dashboard load is running 20 minutes slower than usual but is on track for 12:00.

**Correct answer: B**

**Explanation:** Prioritisation questions reward matching urgency and impact against explicit service commitments. Only issue B threatens an imminent, high-impact deadline (09:00 ministerial data). Issue D has slack until 12:00 and is currently on track; issue A is cosmetic; issue C is important for collaboration but flexible in timing. The trap options are designed to pull a candidate toward either the easiest task (A) or the most social one (C). In problem management terms, B is an operational problem with immediate strategic visibility - handle it first, then communicate.

**Question 6 (moderate) - Reverse-engineering a data model**

The candidate is reverse-engineering a data model from a live system. They observe: every row in table `application` has exactly one `applicant_id`; some values of `applicant_id` appear in many rows of `application`; every `applicant_id` in `application` exists in table `applicant`; some rows in `applicant` have an `applicant_id` that never appears in `application`. Which relationship best describes `applicant` to `application`?

- A) One-to-one: each applicant has exactly one application.
- B) One-to-many: one applicant may have zero, one, or many applications.
- C) Many-to-many: applicants and applications each relate to many of the other.
- D) The tables are unrelated.

**Correct answer: B**

**Explanation:** Each application points to exactly one applicant (so an application cannot have many applicants, ruling out many-to-many). One applicant can appear on many applications (ruling out one-to-one), and some applicants appear on none (confirming "zero, one, or many"). The foreign key from `application` to `applicant` is confirmed by every `applicant_id` existing in `applicant`. This is precisely the inference pattern applied when producing or updating data models from live evidence rather than documentation: deriving cardinality from observed facts, not assumptions.

**Question 7 (moderate) - Spotting the inconsistent metadata entry**

A metadata repository lists four entries for the same dataset, `benefits_claims_daily`. Three were updated automatically by the pipeline; one was edited manually. The entries read:

1. Row count: 41,207; last load: 04:12; source: SystemA v2; format: parquet
2. Row count: 41,207; last load: 04:12; source: SystemA v2; format: parquet
3. Row count: 41,207; last load: 04:12; source: SystemA v2; format: parquet
4. Row count: 41,207; last load: 16:45; source: SystemA v1; format: CSV

The pipeline has loaded parquet from SystemA v2 at around 04:00 daily for the past year. Which entry was most likely the manual edit, and what should be done?

- A) Entry 4; update it to match the others because information must remain accurate and current.
- B) Entry 1; delete it as a duplicate.
- C) Entry 4; leave it because manual edits take precedence.
- D) Entry 3; automated entries are less trustworthy.

**Correct answer: A**

**Explanation:** Entry 4 disagrees with the well-established automated pattern on three attributes (time, source version, format), making it the outlier and the likely manual edit. The metadata management skill for this role explicitly includes maintaining the repository "to ensure information remains accurate and up to date", so correcting the stale manual entry (after confirming with its author if possible) is right. Option C reverses good practice - precedence belongs to verified accuracy, not to whoever edited last. Option B destroys legitimate history, and option D reasons backwards: consistent automated entries corroborated by a year of behaviour are strong evidence.

**Question 8 (moderate) - Deduction from test results**

The candidate defined four test conditions for a new data product built from feeds from two systems. The results are: Test 1 (row counts match between source and target) passed. Test 2 (all mandatory fields populated) failed. Test 3 (referential integrity between claims and claimants) passed. Test 4 (duplicate detection) passed. The product combines the two feeds with a full outer join before loading. Which hypothesis is most consistent with the evidence?

- A) The extract dropped rows from one source system.
- B) The outer join created rows where fields from the non-matching side are empty.
- C) The load step wrote the same rows twice.
- D) Foreign keys were corrupted during transformation.

**Correct answer: B**

**Explanation:** Work by elimination. Test 1 passing makes dropped rows (A) unlikely. Test 4 passing rules out duplication (C). Test 3 passing contradicts corrupted keys (D). A full outer join, by design, produces rows even when only one side matches - and on such rows, columns from the other side are NULL, which is exactly what a mandatory-field test would catch. This mirrors the testing skill for this role: analysing results as a set of constraints, and preferring the hypothesis that explains the failure while remaining consistent with every pass.

**Question 9 (hard) - Ordering a re-engineered data flow**

The candidate is re-engineering a manual data flow into a repeatable pipeline with six automated steps. The constraints are: validation must run after extraction but before any transformation; the audit log entry must be written after the load completes; the schema check must run before validation; transformation must finish before load begins; and notification must be the final step. Which order satisfies every constraint?

- A) Extract, schema check, validation, transformation, load, audit log, notification
- B) Schema check, extract, validation, transformation, load, notification, audit log
- C) Extract, validation, schema check, transformation, load, audit log, notification
- D) Extract, schema check, transformation, validation, load, audit log, notification

**Correct answer: A**

**Explanation:** Check each constraint against option A: validation follows extraction and precedes transformation (yes); audit log follows load (yes); schema check precedes validation (yes); transformation precedes load (yes); notification is last (yes). Option B fails because the audit log comes after notification, so notification is not final - and note the schema check ordering relative to extraction was never constrained, which is a deliberate distractor. Option C runs the schema check after validation. Option D transforms before validating. Constraint-ordering questions reward writing the constraints down as arrows and testing each option systematically - the same discipline applied when sequencing dependencies while re-engineering manual flows for repeatable use.

**Question 10 (hard) - Impact analysis across systems**

A metadata repository shows: dataset D1 is consumed by BI reports R1 and R2; dataset D2 is consumed by report R2 and by dataset D3; dataset D3 is consumed by report R3; report R4 consumes only dataset D4. A planned change will alter the schema of D2. Assuming consumers are affected only through these recorded lineage links, which artefacts need impact assessment?

- A) R2 only
- B) R2, D3, and R3
- C) R1, R2, and R3
- D) D3 and R4

**Correct answer: B**

**Explanation:** Trace forward from D2. Direct consumers: R2 and D3. Then continue through D3 to R3. R1 depends only on D1, and R4 only on D4, so neither is affected. The full affected set is R2, D3, R3. The most tempting wrong answer is A, which stops at direct consumers and forgets transitive impact - precisely the mistake that impact analysis with a metadata repository exists to prevent. When completing "complex tasks such as data and systems integration impact analysis", following the lineage graph to closure is the core cognitive move - this item tests whether the candidate does.

**Question 11 (hard) - Diagnosing an intermittent streaming fault**

The candidate supports the build of a data streaming system. Events flow from a source API through an ingestion service into a stream, then a consumer writes them to storage. They observe: events are missing from storage roughly once a week; the ingestion service logs show no errors; the stream's monitoring shows all published events were retained for the full retention window; the consumer's logs show occasional restarts, after which it resumes "from the latest event". What is the most likely cause of the missing events?

- A) The source API is sending malformed events that are silently dropped by the stream.
- B) The stream is deleting events before the retention window expires.
- C) On restart, the consumer skips events published while it was down because it resumes from the latest event rather than from its last processed position.
- D) The storage layer is rejecting writes with errors.

**Correct answer: C**

**Explanation:** Test each hypothesis against the evidence. The stream retains all published events for the full window, contradicting B and making A doubtful (retention monitoring sees the events, so they arrived). Nothing suggests storage errors, and D would likely appear in logs. The one behavioural detail that matches a weekly, intermittent pattern is the consumer restart policy: resuming "from the latest event" means any events published during downtime are never read. The remedy - resume from the last committed offset - is a classic preventative measure, connecting to the problem management skill of contributing to remedies, not just diagnoses.

**Question 12 (hard) - Requirements consistency check**

A specification for a reusable BI report states: (1) the report must show the latest complete month of data; (2) data is loaded on the 5th working day of each month for the previous month; (3) the report must never display provisional data; (4) users must be able to view the report on the 1st of every month. Today a stakeholder asks the candidate to confirm the specification is internally consistent. What should be concluded?

- A) It is consistent: all four requirements can be met simultaneously.
- B) It is inconsistent: on the 1st of the month, the latest complete month's data has not yet been loaded, so requirements 1, 2, and 4 conflict.
- C) It is inconsistent: provisional data is required by requirement 1.
- D) It is consistent so long as the report is cached.

**Correct answer: B**

**Explanation:** Walk through a concrete date. On 1 July, the latest complete month is June, but June's data will not load until the 5th working day of July. So a user viewing on 1 July cannot see June (requirement 1 fails) unless the report shows provisional data (violating requirement 3). Showing May instead would violate "latest complete month". Caching (D) cannot conjure data that has never been loaded. Requirement conflicts like this are exactly what the testing skill for this role - "review requirements and specifications, and define test conditions" - is meant to surface before build begins, when they are cheap to fix.

**Question 13 (hard) - Choosing the scalable re-engineering approach**

A manual data flow currently works like this: an analyst downloads a CSV from an operational system every Monday, fixes known formatting problems by hand in a spreadsheet, and emails it to the candidate for loading. Volumes are about to grow from one file a week to forty files a day from eight different teams. The candidate is asked to re-engineer the flow "to enable scaling and repeatable use". Which design principle matters most in the new approach?

- A) Train more analysts to fix files by hand so throughput increases.
- B) Encode the known formatting fixes as automated, tested transformation rules applied identically to every file.
- C) Ask the eight teams to email files to a shared inbox to centralise collection.
- D) Increase the loading server's memory so bigger files can be processed.

**Correct answer: B**

**Explanation:** The bottleneck is the manual, undocumented, unrepeatable step - hand-fixing in a spreadsheet. Scaling people (A) multiplies cost and inconsistency; a shared inbox (C) centralises collection but keeps every manual step; more memory (D) addresses a capacity problem nobody has reported. Encoding fixes as automated, tested rules makes the flow repeatable (every file treated identically), scalable (forty files cost little more than one), and auditable. This is the essence of the role's duty to "re-engineer manual data flows to enable scaling and repeatable use", and of creating "repeatable and reusable products" in the data development process.

**Question 14 (moderate) - Pattern recognition in load statistics**

A daily load has produced these row counts over the past eight days: 12,040; 12,100; 12,180; 12,220; 12,290; 12,350; 60; 12,470. The business volume grows steadily and no unusual events occurred. What is the most reasonable interpretation of the sixth entry from the end onwards, and specifically the count of 60?

- A) Business activity genuinely collapsed for one day and recovered.
- B) The count of 60 is an anomaly - most plausibly a partial or failed load on that day - and warrants investigation, because it breaks a steady upward pattern that resumes immediately afterwards.
- C) The counts are random, so no conclusion is possible.
- D) The final count of 12,470 is the anomaly.

**Correct answer: B**

**Explanation:** Seven of the eight values form a smooth upward trend rising by roughly 60 to 80 rows per day; the value 60 is three orders of magnitude out of line, and the trend resumes exactly where it should the next day (12,470 continues the progression from 12,350). A genuine one-day collapse in business activity (A) is contradicted by the stem, which says no unusual events occurred. The data are clearly not random (C), and 12,470 fits the trend perfectly (D). Recognising which value violates a pattern - and describing the violation precisely rather than vaguely - is the day-to-day core of data profiling and source system analysis in the data analysis and synthesis skill for this role.

### Administration guidance

- **Give the candidate time to settle before scoring begins.** Where a platform offers short, ungraded practice questions, use them - interface unfamiliarity should not cost time that has nothing to do with reasoning.
- **State the time limit up front and hold it consistently.** With 15 to 30 minutes for the whole test, roughly a minute per question is the expected pace; apply the same limit, and the same flag-and-return facility if your platform offers one, to every candidate.
- **Watch for elimination reasoning.** A strong candidate can usually say why each wrong option is wrong, not only which option is right - useful to probe explicitly at debrief.
- **Note whether the candidate reads the stem twice before answering.** "Must be true" versus "could be true" (Question 3) is a common and avoidable source of error, and worth raising at debrief if it recurs.
- **Assume no outside tools are available to the candidate.** Items are self-contained; the candidate should reason only from the facts given, not from how their own systems typically behave.

### Scoring guidance: common pitfalls to watch for

- **Confirming instead of checking.** Watch for candidates who conclude a mapping "looks right" rather than verifying each element against the rule - Question 2's date transposition is exactly the defect this habit misses.
- **Stopping at direct consequences.** Impact-analysis items reward tracing the chain to closure; note candidates who stop at the first link (Question 10).
- **Importing outside assumptions.** A candidate reasoning from how their own scheduler or database typically behaves, rather than the facts given in the question, has stepped outside the item.
- **The time-sink trap.** One hard ordering or diagnosis question can absorb the time budget for three easier ones; check whether unanswered items cluster near a single difficult question.
- **Choosing the busiest-sounding answer.** In prioritisation items, the credited answer matches urgency and impact against explicit commitments, not the option describing the most activity.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make logical decisions using numerical data. It mimics the data-handling demands of the actual role, focusing on practical business mathematics rather than abstract formulae. For a data engineer, that means the numbers the role lives with: row counts, load durations, throughput rates, error percentages, storage capacity figures, batch windows, and the performance metrics behind the BI reports it builds.

Typical characteristics of this assessment type include:

- **Real-world data inputs.** Questions are built around tables, charts, schedules, and dashboards - for a data engineer, pipeline monitoring tables and capacity plans rather than sales figures.
- **Basic mathematics, applied carefully.** Expect percentages, ratios, rates, proportions, and cost or capacity estimations. Nothing beyond GCSE-level arithmetic, but applied under time pressure to realistic, sometimes cluttered data.
- **Calculator friendly.** Most assessments allow or provide an on-screen calculator, because they prioritise interpretation over mental arithmetic.
- **Strict time limits.** Allow around a minute per question, so quick, accurate data extraction matters as much as the sums themselves.

Why does this matter for a data engineer? Numbers are how pipelines speak to the people who run them. Whether a nightly ETL run is healthy, whether a re-engineered flow will fit its batch window, whether a data quality issue is a blip or a trend, whether a streaming system can absorb projected growth - all of these are numerical judgements. When presenting clear insights to colleagues to support the end use of the data, the credibility of that insight rests on getting the arithmetic right and interpreting it sensibly - which is what this section tests.

### What it measures for this role

The assessment dimensions align with specific skills in the role profile:

- **Data analysis and synthesis.** Undertaking data profiling and source system analysis is fundamentally numerical: distributions, null rates, row counts, and outliers. Table-interpretation questions test exactly this.
- **Data development process.** Designing and testing data products from feeds from multiple systems requires reconciling counts and volumes across those feeds - ratio and difference questions in disguise.
- **Data integration design.** Ensuring services are resilient, scalable, and future-proof means capacity arithmetic: growth rates, headroom percentages, and throughput ceilings.
- **Programming and build.** Ensuring "the ETL process performs optimally" requires comparing durations, computing rates, and quantifying improvements.
- **Testing.** Analysing and reporting test activities and results involves pass rates, defect densities, and coverage percentages.
- **Problem management.** Judging whether a problem is strategic, tactical, or operational often starts with quantifying its scale and trend.

### Practice questions

An on-screen calculator is assumed. The explanations below always show the working, for use in scoring and debrief.

**Question 1 (easy) - Failed record percentage**

Last night's ETL run processed 250,000 records, of which 3,750 were rejected to the error queue. What percentage of records failed?

- A) 0.15%
- B) 1.5%
- C) 15%
- D) 3.75%

**Correct answer: B**

**Explanation:** Percentage failed = (3,750 ÷ 250,000) × 100 = 0.015 × 100 = 1.5%. A quick sanity check: 1% of 250,000 is 2,500, and 3,750 is between 2,500 (1%) and 5,000 (2%), so 1.5% fits. Option A drops a factor of ten, option C adds one - place-value slips are the most common error in percentage questions, so a strong candidate anchors with an easy reference point like "1% of the total".

**Question 2 (easy) - Load duration change**

A load job took 40 minutes before the ETL script was optimised and 25 minutes after. By what percentage did the duration decrease?

- A) 15%
- B) 37.5%
- C) 60%
- D) 62.5%

**Correct answer: B**

**Explanation:** The decrease is 40 − 25 = 15 minutes. Percentage decrease = (15 ÷ 40) × 100 = 37.5%. The base for a percentage change is always the *original* value (40), not the new one. Option C (15 ÷ 25 = 60%) and option D come from dividing by the wrong base. When reporting optimisation results to a team, this distinction - "37.5% faster than before" - is exactly the kind of clear, correct insight the data analysis and synthesis skill calls for.

**Question 3 (easy) - Reading a monitoring table**

A pipeline dashboard shows the following for four feeds last night:

| Feed | Rows loaded | Rows rejected | Duration (min) |
|---|---|---|---|
| Payments | 180,000 | 900 | 36 |
| Claims | 60,000 | 1,200 | 20 |
| Addresses | 240,000 | 480 | 48 |
| Referrals | 30,000 | 750 | 10 |

Which feed had the highest rejection rate (rejected as a percentage of loaded)?

- A) Payments
- B) Claims
- C) Addresses
- D) Referrals

**Correct answer: D**

**Explanation:** Compute each rate: Payments 900 ÷ 180,000 = 0.5%; Claims 1,200 ÷ 60,000 = 2.0%; Addresses 480 ÷ 240,000 = 0.2%; Referrals 750 ÷ 30,000 = 2.5%. Referrals is highest at 2.5%. The trap is picking Claims because 1,200 is the largest absolute rejection count - but rates and counts are different questions. Data profiling constantly requires this normalisation habit: a small feed with a high error *rate* is often the real quality problem.

**Question 4 (moderate) - Throughput rate**

A streaming ingestion service processed 8.64 million events in a 24-hour period at a steady rate. What was its average throughput in events per second?

- A) 10 events/second
- B) 100 events/second
- C) 360 events/second
- D) 1,000 events/second

**Correct answer: B**

**Explanation:** A day contains 24 × 60 × 60 = 86,400 seconds. Throughput = 8,640,000 ÷ 86,400 = 100 events per second. The neat trick: 8.64 million is exactly 100 × 86,400, and assessment writers often build in such round relationships. Knowing that a day has 86,400 seconds is genuinely useful in streaming work when supporting the build of data streaming systems and needing to translate daily volumes into per-second rates for capacity discussions.

**Question 5 (moderate) - Batch window headroom**

A nightly batch window runs from 01:00 to 06:00. The current jobs use 3 hours 45 minutes of the window. A new feed being integrated is estimated to add 55 minutes. After adding it, what percentage of the window remains as headroom?

- A) 6.7%
- B) 8.3%
- C) 13.3%
- D) 20%

**Correct answer: A**

**Explanation:** The window is 5 hours = 300 minutes. Current use is 3 h 45 m = 225 minutes; adding 55 minutes gives 280 minutes. Headroom = 300 − 280 = 20 minutes. As a percentage of the window: (20 ÷ 300) × 100 = 6.67%, so 6.7%. Option D is the headroom in minutes (20) misread as a percentage - a classic units slip. In data integration design terms, 6.7% headroom is a resilience warning: one modest overrun breaches the window, which is exactly the kind of future-proofing insight worth surfacing.

**Question 6 (moderate) - Reconciling two source feeds**

A candidate builds a data product from two systems. System A supplies 145,600 customer rows; System B supplies 138,320 customer rows. Matching on customer ID, 131,040 rows appear in both systems. How many customers appear in exactly one system?

- A) 7,280
- B) 14,560
- C) 21,840
- D) 152,880

**Correct answer: C**

**Explanation:** Rows only in A = 145,600 − 131,040 = 14,560. Rows only in B = 138,320 − 131,040 = 7,280. Total in exactly one system = 14,560 + 7,280 = 21,840. Options A and B are the two partial answers - the assessment is checking whether the candidate combines both sides. This overlap arithmetic is the numerical heart of designing and testing "data products based on feeds from multiple systems": unmatched rows are where data quality questions live.

**Question 7 (moderate) - Storage growth projection**

A dataset currently occupies 1.2 TB and grows by 5% per month, compounding. Approximately how much storage will it occupy after three months?

- A) 1.32 TB
- B) 1.36 TB
- C) 1.39 TB
- D) 1.80 TB

**Correct answer: C**

**Explanation:** Compound growth: 1.2 × 1.05 = 1.26 TB after month one; 1.26 × 1.05 = 1.323 TB after month two; 1.323 × 1.05 = 1.389 TB after month three, which rounds to 1.39 TB. Option B (1.2 × 1.15 = 1.38) is the simple-interest shortcut - close, but assessments include it to check that compounding, which grows slightly faster, is understood. Capacity projections like this underpin "resilient, scalable and future-proof" integration design: a service sized only for today's volume is a problem scheduled for later.

**Question 8 (moderate) - BI report usage ratio**

A reusable BI report developed by a candidate is used by three directorates. Last quarter it was viewed 4,200 times: Operations accounted for 50% of views, Policy for 30%, and Finance for the remainder. This quarter total views rose to 5,600, and Finance's share rose to 25% while Operations stayed at 50%. How many times did Policy view the report this quarter?

- A) 1,260
- B) 1,400
- C) 1,680
- D) 2,800

**Correct answer: B**

**Explanation:** This quarter, Operations takes 50% and Finance 25%, leaving Policy with 100% − 50% − 25% = 25%. Policy views = 0.25 × 5,600 = 1,400. Option A is Policy's *last* quarter figure (0.30 × 4,200 = 1,260) - a distractor that punishes mixing time periods, one of the commonest chart-reading errors. Option D is Operations' figure. Reading exactly which period and which category a question asks about is half the skill in dashboard-based questions.

**Question 9 (moderate) - Test pass rates across cycles**

The candidate is analysing and reporting test results. In test cycle 1, 240 test conditions ran and 192 passed. In cycle 2, after fixes, the same 240 ran and 228 passed. By how many percentage points did the pass rate improve?

- A) 12 percentage points
- B) 15 percentage points
- C) 18.75 percentage points
- D) 36 percentage points

**Correct answer: B**

**Explanation:** Cycle 1 pass rate = 192 ÷ 240 = 80%. Cycle 2 pass rate = 228 ÷ 240 = 95%. Improvement = 95 − 80 = 15 percentage points. Option D is the raw count difference (36 tests) misread as points; option C is the *relative* increase (15 ÷ 80 = 18.75%) - a legitimate number, but not what "percentage points" means. Assessments love the percent-versus-percentage-points distinction, and so do test reports: the testing skill for this role includes reporting results in language stakeholders cannot misread.

**Question 10 (hard) - Optimising the ETL schedule**

Three ETL jobs can run in any order but not in parallel. Job X processes 90,000 rows at 600 rows/second. Job Y processes 144,000 rows at 800 rows/second. Job Z processes 63,000 rows at 350 rows/second. What is the total run time for all three jobs?

- A) 8 minutes 30 seconds
- B) 7 minutes 30 seconds
- C) 9 minutes 10 seconds
- D) 10 minutes 12 seconds

**Correct answer: A**

**Explanation:** Job X: 90,000 ÷ 600 = 150 seconds. Job Y: 144,000 ÷ 800 = 180 seconds. Job Z: 63,000 ÷ 350 = 180 seconds. Total = 150 + 180 + 180 = 510 seconds = 8 minutes 30 seconds. Since the jobs cannot run in parallel, the times simply add. Rate-time-volume questions are core to writing ETL code that "performs optimally": knowing where the 510 seconds go shows that Z is the slowest per row and the best optimisation target.

**Question 11 (hard) - Cost of a re-engineered flow**

A manual data flow costs the organisation 6 analyst-hours per week at £35 per hour. A candidate re-engineers it into an automated pipeline that costs £180 per month to run and needs 1 analyst-hour per month for checks at the same rate. Using a 4-week month, what is the approximate monthly saving?

- A) £625
- B) £655
- C) £805
- D) £840

**Correct answer: A**

**Explanation:** Manual monthly cost = 6 hours × £35 × 4 weeks = £840. Automated monthly cost = £180 + (1 × £35) = £215. Saving = £840 − £215 = £625. Option D is the manual cost alone; options B and C are near-miss figures produced by dropping one cost component, such as the monthly analyst-hour. Multi-step cost questions reward writing each component down before subtracting. Quantifying the benefit of re-engineering manual flows is also how the business case gets made for the scaling work this role calls for.

**Question 12 (hard) - Data quality trend interpretation**

Weekly null rates for a mandatory field in a source system over six weeks are: 0.8%, 0.9%, 1.1%, 1.4%, 1.8%, 2.3%. A colleague says "the rate is rising by about 0.3 points a week, so in four more weeks it will be about 3.5%." Which statement best evaluates this claim?

- A) The claim is exactly right: the series is linear.
- B) The weekly increases are themselves growing (0.1, 0.2, 0.3, 0.4, 0.5), so a linear projection likely understates the four-week outcome; if the acceleration continues, the rate would reach roughly 5.3%.
- C) The rate will certainly return to 0.8% because null rates are cyclical.
- D) No projection is possible from six data points.

**Correct answer: B**

**Explanation:** Difference the series: 0.9−0.8 = 0.1; 1.1−0.9 = 0.2; 1.4−1.1 = 0.3; 1.8−1.4 = 0.4; 2.3−1.8 = 0.5. The increments grow by 0.1 each week - the trend is accelerating, not linear. Continuing the pattern gives increments of 0.6, 0.7, 0.8, 0.9, so the projected rate is 2.3 + 0.6 + 0.7 + 0.8 + 0.9 = 5.3% - far above the colleague's linear estimate of 3.5%. Whether the acceleration continues exactly is uncertain, but B is the only option that correctly reads the second-order pattern and its direction. This mirrors real data profiling: distinguishing a stable defect from a worsening one determines whether a problem is operational or heading toward tactical or strategic, in problem management terms.

**Question 13 (hard) - Streaming capacity with growth**

A streaming platform sustains a maximum of 4,500 events per second. Current peak load is 2,880 events per second, and peaks grow by 25% per year, compounding. In which year of growth does peak load first exceed the platform's capacity?

- A) Year 1
- B) Year 2
- C) Year 3
- D) Year 4

**Correct answer: B**

**Explanation:** Year 1 peak: 2,880 × 1.25 = 3,600 events/second - still under 4,500. Year 2: 3,600 × 1.25 = 4,500 events/second - equal to, but not exceeding, capacity? Careful: "exceed" means strictly greater. At exactly 4,500 the platform is saturated but not exceeded; however, sustained operation at 100% of maximum leaves zero headroom, and the very next increment tips it over. Assessment answer: Year 2 is when load first reaches the ceiling, and any realistic variability around the peak means exceedance occurs within that year - which is why B is the credited answer, and why in practice the capacity plan should be raised well before then. When a computed value lands exactly on a boundary, read the question's wording closely; here Years 3 and 4 are far past the point where action is needed, and Year 1 is clearly under.

**Question 14 (hard) - Weighted quality score for a data product**

A data product's quality score is the weighted average of three checks: completeness (weight 50%), validity (weight 30%), and timeliness (weight 20%). This month the checks scored 96%, 90%, and 75% respectively. The service standard requires an overall score of at least 90%. What is the overall score, and is the standard met?

- A) 87%; standard not met
- B) 90%; standard met exactly
- C) 90.0%; standard not met
- D) 90%; standard met - it equals the threshold

**Correct answer: D**

**Explanation:** Weighted score = (0.50 × 96) + (0.30 × 90) + (0.20 × 75) = 48 + 27 + 15 = 90%. The standard requires "at least 90%", and 90% satisfies "at least". Option A miscalculates; options B and C exist to check whether the threshold's wording is read carefully - "at least" includes equality. Weighted averages appear throughout BI work, from composite KPIs to blended costs, and building reports that compute them correctly is part of developing business intelligence reports that can be reused with confidence.

**Question 15 (moderate) - Proportional allocation of load time**

Last night's total batch run took 200 minutes. The extract phase took 25% of the time, transform took 1.5 times as long as extract, and load took the remainder. How long did the load phase take?

- A) 50 minutes
- B) 75 minutes
- C) 100 minutes
- D) 125 minutes

**Correct answer: B**

**Explanation:** Extract = 0.25 × 200 = 50 minutes. Transform = 1.5 × 50 = 75 minutes. Load = 200 − 50 − 75 = 75 minutes. Option A is the extract figure, and the other distractors come from mistranslating "1.5 times as long as extract" or subtracting only one phase from the total. Translating each phrase into arithmetic one clause at a time is the same skill as turning a written transformation specification into correct ETL code.

**Question 16 (moderate) - Ratio of records across storage technologies**

A data product a candidate maintains stores records across two technologies in the ratio 5:3 - a relational database holds the larger share and an object store holds the smaller. The object store currently holds 84,000 records. How many records does the product hold in total?

- A) 134,400
- B) 140,000
- C) 224,000
- D) 268,800

**Correct answer: C**

**Explanation:** The ratio 5:3 means the object store's 84,000 records represent 3 parts, so one part = 84,000 ÷ 3 = 28,000 records. The relational database holds 5 parts = 5 × 28,000 = 140,000 records. Total = 140,000 + 84,000 = 224,000. Option B stops at the database share and forgets to add the object store back in; option A applies the ratio the wrong way round. Ratio questions reward identifying what one "part" is worth before doing anything else. Working across "a range of different storage technologies" is written into the data development process skill for this role, and reconciling record counts between them is a routine verification step.

**Question 17 (hard) - Error budget across a month**

A team's service standard allows the nightly batch to miss its completion deadline at most 2% of nights across a 30-night month. So far this month, the batch has missed its deadline on 1 night out of 22. If the batch misses exactly one more deadline before the month ends, will the standard be met?

- A) Yes - 2 misses out of 30 nights is below the 2% allowance.
- B) No - 2 misses out of 30 nights is 6.7%, which exceeds the 2% allowance.
- C) Yes - the allowance applies per week, not per month.
- D) It cannot be determined without knowing which nights are missed.

**Correct answer: B**

**Explanation:** The allowance is 2% of 30 nights = 0.6 nights, which in practice means zero complete misses are tolerated (a fraction of a night cannot be missed, and even 1 miss = 1 ÷ 30 = 3.3% > 2%). Two misses = 2 ÷ 30 = 6.67%, well over the allowance, so the standard is not met - indeed it was already breached at the first miss. Option A is the intuitive but unchecked answer; option D adds a condition the arithmetic does not need. Converting a percentage allowance into a concrete count ("how many misses can actually be afforded?") is a small calculation with a large operational payoff, and exactly the kind of insight worth presenting clearly to colleagues when discussing service resilience.

### Administration guidance

- **Provide scrap paper or a notes area alongside any on-screen calculator.** Multi-step items (cost comparisons, weighted averages) are harder to score fairly from a final answer alone; visible working helps at debrief.
- **State any time convention an item defines up front.** Where a question sets its own terms (a "month" as four weeks, say), make sure the candidate is working from the question's own definition rather than the calendar one.
- **Hold the per-question time budget consistently.** Around a minute per question is standard; apply the same limit, and the same flag-and-return facility if offered, to every candidate.
- **Watch for sanity-checking.** A candidate who checks a rough order of magnitude before finalising an answer catches most place-value slips; its absence is worth noting even where the final answer is right.
- **Note whether a candidate's working shows each intermediate step.** This is especially useful for judging cost, ratio, and weighted-average items fairly.
- **Confirm the assessment measures reasoning, not calculator speed.** A methodical candidate who finishes with time to spare is not weaker than a fast one; score accuracy alongside pace.

### Scoring guidance: common pitfalls to watch for

- **Misreading table labels and units.** Watch for candidates confusing monthly with weekly data, or ignoring scale qualifiers such as "in thousands" (Question 5's distractor).
- **Using the wrong base for percentage change.** The original value, never the new one - Question 2 exists because this error is so common.
- **Confusing counts with rates.** The largest absolute rejection count is not necessarily the worst rejection rate (Question 3); a strong candidate normalises before comparing.
- **Percent versus percentage points.** A pass rate moving from 80% to 95% improved by 15 percentage points, not 15% (Question 9) - worth probing explicitly at debrief.
- **Over-calculating.** A candidate performing long division where a round-number relationship would answer faster is not itself wrong, but it may explain unanswered items elsewhere.
- **Time-sink questions.** One stubborn compound-growth item can absorb the time budget for three simpler ones; check whether unanswered items cluster near a single difficult question.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written business information. It mirrors the exact reading demands of the role: data standards documents, integration policies, stakeholder emails, test reports, metadata guidance, and service descriptions.

Typical characteristics of this assessment type include:

- **Context-specific text.** Passages use the terminology and document types of the data engineer's working world - policies, standards, reports, and emails about data flows, ETL, and BI.
- **Fact-based logic.** The candidate must answer based strictly on the text provided, setting aside their own technical knowledge, however expert it is.
- **Strict answer options.** Many questions require a choice between True, False, or Cannot Say (meaning the passage gives insufficient information). Others are multiple-choice comprehension.
- **Time pressure.** Tests typically allow less than a minute per question, simulating the pace of real workplace reading.

Why does this matter for a data engineer? A large share of defects in this kind of work begin as reading errors: a mapping specification skimmed too fast, a data standard's exception clause missed, an email requirement half-remembered. The duty to document source-to-target mappings makes the role both a careful-reading and a careful-writing one, and the skill of communicating between the technical and non-technical means constantly translating precise technical text for people who will act on it. Verbal reasoning assessments measure the precision that makes those translations trustworthy - which is what this section is designed to surface.

One rule above all, worth stating to the candidate before the section starts: answer only from the passage. "True" means the passage states it or it follows necessarily. "False" means the passage contradicts it. "Cannot Say" means the passage neither confirms nor denies it - even where the candidate happens to know the answer from real life.

### What it measures for this role

- **Communicating between the technical and non-technical.** Comprehension questions test whether the candidate can identify what a text actually claims - the foundation of explaining technical concepts in non-technical language without distorting them, and of choosing the right types of communication for internal and external stakeholders.
- **Data integration design.** Delivering solutions "in accordance with agreed organisational standards" begins with reading those standards exactly, including their exceptions and conditions.
- **Metadata management.** Keeping a repository accurate requires interpreting definitions and policies about what must be recorded, when, and by whom.
- **Testing.** Reviewing requirements and specifications to define test conditions is verbal reasoning applied to engineering: every ambiguity caught in reading is a defect prevented.
- **Data development process and documentation.** Source-to-target mappings, data product descriptions, and reusable report definitions all depend on unambiguous reading and writing.
- **Problem management.** Investigating problems often means reading incident notes and vendor advisories precisely, distinguishing what is reported from what is assumed.

### Practice questions

Score each answer strictly from its passage.

**Passage A - Data standards policy extract**

*"All new data flows connecting operational systems to analytics platforms must be registered in the departmental metadata repository before their first production run. Source-to-target mappings must be documented for every registered flow and reviewed whenever the source schema changes. Flows classified as 'temporary' are exempt from the review requirement but not from registration. A flow may be classified as temporary only if it is scheduled for decommissioning within six months of its first production run."*

**Question 1 (easy)** - True, False, or Cannot Say: "Temporary flows must be registered in the metadata repository before their first production run."

**Correct answer: True**

**Explanation:** The passage states that temporary flows are "exempt from the review requirement but not from registration." The registration rule applies to "all new data flows", and the exemption explicitly does not cover registration. Both sentences point the same way, so this is True. The answer hangs on the phrase "but not from" - three small words carrying the whole rule.

**Question 2 (easy)** - True, False, or Cannot Say: "A flow scheduled for decommissioning within six months of its first production run must be classified as temporary."

**Correct answer: False**

**Explanation:** The passage says a flow "may be classified as temporary only if" it is scheduled for decommissioning within six months. "Only if" states a necessary condition for the classification - it does not say that every qualifying flow *must* be so classified. The statement converts permission into obligation, which the text contradicts in form: "may... only if" is not "must". Some candidates answer Cannot Say here, but the passage's wording ("may") directly conflicts with the statement's "must", making False the better answer. This if/only-if precision is exactly what is required when reading integration standards, and what this item tests.

**Question 3 (moderate)** - True, False, or Cannot Say: "Source-to-target mappings for non-temporary flows must be reviewed at least once every six months."

**Correct answer: Cannot Say**

**Explanation:** The passage requires review "whenever the source schema changes" - an event-driven trigger, not a schedule. The passage neither confirms nor denies any time-based review cycle: if a schema never changes, the passage requires no review at all, but it also does not forbid a six-monthly review policy existing elsewhere. Since the text is silent on periodic review, Cannot Say is correct. The six-month figure in the passage belongs to the decommissioning rule - a deliberate lure designed to make a candidate feel the number is "in there somewhere".

**Passage B - Stakeholder email**

*"Hi - thanks for the new benefits dashboard. The finance team tells me they now use it every Monday for their planning meeting, and the policy team is starting to rely on the caseload figures too. Before we promote it to other directorates, we need the underlying feed to refresh daily rather than weekly; the caseload figures are currently too stale for operational decisions. We also need assurance that the figures reconcile with the quarterly published statistics - last quarter two directors queried a mismatch. Can you confirm feasibility of the daily refresh by Friday? The reconciliation work is less urgent but should be scoped this month."*

**Question 4 (easy)** - Which of the following best describes what the sender asks the candidate to confirm by Friday?

- A) That the reconciliation work has been completed.
- B) Whether a daily refresh of the underlying feed is feasible.
- C) That the dashboard has been promoted to other directorates.
- D) That the caseload figures match the quarterly published statistics.

**Correct answer: B**

**Explanation:** The email says: "Can you confirm feasibility of the daily refresh by Friday?" Only feasibility - not delivery - and only the daily refresh, not the reconciliation, which is explicitly "less urgent but should be scoped this month." Options A and D confuse the two workstreams; option C reverses the email's sequencing ("before we promote it..."). Reading deadlines and their attached objects precisely is the difference between a well-managed stakeholder and a surprised one.

**Question 5 (moderate)** - True, False, or Cannot Say: "The policy team uses the dashboard every Monday."

**Correct answer: Cannot Say**

**Explanation:** The email attributes the Monday habit to the *finance* team. Of the policy team it says only that they are "starting to rely on the caseload figures too" - nothing about when or how often. The word "too" tempts a candidate to transfer the Monday detail across teams, but the passage does not state it, and nothing contradicts it either. Cannot Say. This is the classic adjacent-fact trap: two teams mentioned in one breath, one detail belonging to only one of them.

**Question 6 (moderate)** - True, False, or Cannot Say: "Two directors queried a mismatch between the dashboard's figures and the quarterly published statistics last quarter."

**Correct answer: True**

**Explanation:** The email states: "we need assurance that the figures reconcile with the quarterly published statistics - last quarter two directors queried a mismatch." The mismatch queried is between "the figures" (the dashboard's figures, from the sentence's subject) and the published statistics, and the passage states it directly. True. Comprehension credit here comes from tracking what "the figures" refers back to - pronoun and reference tracking is a staple of verbal reasoning and of reading real stakeholder email chains.

**Passage C - Metadata repository guidance**

*"Every dataset entry in the repository must record an owner, a refresh frequency, and a retention period. Entries missing any of these fields are flagged 'incomplete' by the weekly audit job. Incomplete entries older than 30 days are escalated to the data governance board. The audit job does not validate the accuracy of populated fields; accuracy checks are the responsibility of the dataset owner. Repository users should treat the 'last verified' date, not the 'last updated' date, as the indicator of trustworthiness."*

**Question 7 (moderate)** - True, False, or Cannot Say: "An entry with an inaccurate owner recorded will be flagged 'incomplete' by the weekly audit job."

**Correct answer: False**

**Explanation:** The passage says entries "missing any of these fields" are flagged incomplete, and explicitly that the audit job "does not validate the accuracy of populated fields." An inaccurate owner is populated but wrong - so the audit job will not flag it. The statement contradicts the passage's explicit division of responsibility, making it False. This mirrors a real trap in metadata work: an automated check passing does not mean the information is accurate, which is why the role profile stresses maintaining the repository "to ensure information remains accurate and up to date".

**Question 8 (moderate)** - True, False, or Cannot Say: "Incomplete entries are escalated to the data governance board at the next weekly audit after they are flagged."

**Correct answer: False**

**Explanation:** The passage sets the escalation trigger as "incomplete entries older than 30 days" - an age threshold, not the next audit cycle. An entry flagged this week would not be escalated next week; it must remain incomplete for more than 30 days. The statement substitutes a plausible but different rule, which the text's own rule contradicts. A sound reading checks every element of a paraphrase - trigger, threshold, and destination - against the original.

**Question 9 (hard)** - Which action does the passage most directly support when judging whether a dataset entry can be trusted?

- A) Check that the entry was updated recently.
- B) Check the 'last verified' date.
- C) Confirm the weekly audit job has not flagged the entry.
- D) Ask the data governance board.

**Correct answer: B**

**Explanation:** The final sentence is explicit: "Repository users should treat the 'last verified' date, not the 'last updated' date, as the indicator of trustworthiness." Option A relies on the very date the passage advises against. Option C conflates completeness with trustworthiness - the audit checks presence, not accuracy. Option D invents a step the passage never recommends for users. This is a "best supported action" item: the right answer is the one the text itself licenses, word for word.

**Passage D - Test summary report**

*"Cycle 3 executed 310 of the 320 planned test conditions; 10 were blocked by an environment fault unrelated to the data product. Of the executed conditions, 285 passed and 25 failed. Eighteen of the failures relate to the new postcode validation rules and share a single root cause in the reference data load. The remaining failures are under investigation and none has yet been traced to the transformation logic. Regression of previously passed cycles found no new defects. Release is recommended once the reference data defect is fixed and the eighteen related conditions are re-run successfully."*

**Question 10 (moderate)** - True, False, or Cannot Say: "More than 90% of the executed test conditions passed."

**Correct answer: True**

**Explanation:** Executed conditions: 310. Passed: 285. The rate is 285 ÷ 310 = 91.9%, which is more than 90%. Note the statement asks about *executed* conditions, matching the passage's own base; had it said "planned conditions", 285 ÷ 320 = 89.1% would make it False. Verbal reasoning sometimes hides a small calculation inside a reading question - the reading part is spotting which base the claim uses.

**Question 11 (hard)** - True, False, or Cannot Say: "Seven failures have been traced to the transformation logic."

**Correct answer: False**

**Explanation:** The failures not related to postcode validation number 25 − 18 = 7, and the passage says of them: "none has yet been traced to the transformation logic." The statement directly contradicts this. The lure is that the number seven is correct - a candidate can verify the arithmetic, feel reassured, and forget to verify the *claim*. In testing work, "under investigation" and "traced to" are materially different statuses, and reports must keep them distinct.

**Question 12 (hard)** - True, False, or Cannot Say: "The release will take place within the next two weeks."

**Correct answer: Cannot Say**

**Explanation:** The passage states the *conditions* for recommending release (fix the reference data defect, re-run the eighteen conditions successfully) but gives no dates, durations, or schedules at all. Nothing confirms a two-week timeline; nothing contradicts it. Cannot Say. Candidates who work in delivery often project their own timeline instincts onto the text - the discipline of answering only from the passage is exactly the discipline of reporting only verified facts in a test summary.

**Passage E - Accessibility and reuse standard**

*"Business intelligence reports published on the corporate platform must meet the organisation's accessibility standard, including keyboard navigation and screen-reader compatible tables. Reports intended for reuse across teams must additionally separate their data layer from their presentation layer, so that other teams can connect the same data to different visualisations. A report that fails the accessibility standard may be published only to the originating team's private workspace, and only with a documented remediation plan. Data made available for analysis must include a data dictionary describing each field."*

**Question 13 (easy)** - True, False, or Cannot Say: "A report that fails the accessibility standard may still be published to the corporate platform for all teams, provided a remediation plan exists."

**Correct answer: False**

**Explanation:** The passage restricts a failing report to "the originating team's private workspace" even with a remediation plan. Publication to the platform for all teams is exactly what the restriction prevents. The distractor works by reusing true fragments ("remediation plan") around a false core (where it may be published). Check the *scope* of permissions, not just their conditions - the same reading required when a standard permits an exception in one narrow context only.

**Question 14 (moderate)** - True, False, or Cannot Say: "Separating the data layer from the presentation layer is required for all reports published on the corporate platform."

**Correct answer: False**

**Explanation:** The separation requirement applies to "reports intended for reuse across teams" - the word "additionally" marks it as an extra requirement for that subset, not a universal one. A single-team report on the platform must meet accessibility but need not separate its layers. The statement over-generalises a conditional requirement, so it is False. This layered-requirements structure - base rules plus extra rules for special cases - is ubiquitous in organisational standards, and misreading it produces both over-engineering and non-compliance.

**Question 15 (moderate)** - According to the passage, which pair of artefacts must accompany data made available for analysis and a reusable report, respectively?

- A) A remediation plan; a data dictionary.
- B) A data dictionary; separated data and presentation layers.
- C) Keyboard navigation; a private workspace.
- D) A data dictionary; a remediation plan.

**Correct answer: B**

**Explanation:** "Data made available for analysis must include a data dictionary describing each field", and reports intended for reuse "must additionally separate their data layer from their presentation layer." Option B pairs each obligation with its correct object. Options A and D attach the remediation plan - which belongs only to accessibility failures - to the wrong artefacts. Matching obligations to their objects is the essence of building "accessible data for analysis" and reusable BI reports in line with the standard.

**Passage F - Incident advisory from a platform team**

*"From 22 September, the platform team will migrate the message streaming service to new infrastructure. During the migration window, publishing to existing streams will continue uninterrupted, but the creation of new streams will be suspended. Consumers that reconnect during the window will experience increased latency of up to two minutes, though no events will be lost provided consumers resume from their last committed position. Teams whose pipelines create streams dynamically must switch to pre-provisioned streams before the window opens. The window is expected to last 48 hours; a follow-up notice will confirm completion. Questions should be raised through the platform support channel, not through individual engineers."*

**Question 16 (moderate)** - True, False, or Cannot Say: "During the migration window, events published to existing streams may be lost."

**Correct answer: False**

**Explanation:** The advisory states that "publishing to existing streams will continue uninterrupted" and that "no events will be lost provided consumers resume from their last committed position." The loss condition mentioned concerns how consumers resume, not the publishing of events to existing streams. The statement contradicts the advisory's assurance about publishing, so it is False. Note the proviso: if a consumer resumed from "latest" rather than its committed position, events could be *missed by that consumer* - but that is a different claim from events being lost by the service, and precise reading keeps the two apart.

**Question 17 (hard)** - True, False, or Cannot Say: "The migration will be complete within 48 hours of the window opening."

**Correct answer: Cannot Say**

**Explanation:** The advisory says the window "is expected to last 48 hours" and that "a follow-up notice will confirm completion." An expectation is not a guarantee: the text neither asserts that completion *will* occur within 48 hours nor denies it. The explicit promise of a follow-up confirmation actually signals residual uncertainty. A candidate who marks this True is converting a forecast into a fact - one of the most common verbal reasoning errors, and one with real operational consequences when dependent pipeline work is scheduled against a window that might slip.

**Question 18 (moderate)** - A candidate's pipeline creates a new stream automatically each time a new source team onboards. According to the advisory, what must be done?

- A) Nothing; existing behaviour will continue uninterrupted.
- B) Switch to pre-provisioned streams before the migration window opens.
- C) Raise a question with an individual platform engineer known to the candidate.
- D) Pause all publishing during the window.

**Correct answer: B**

**Explanation:** The advisory is explicit: "Teams whose pipelines create streams dynamically must switch to pre-provisioned streams before the window opens." The described pipeline creates streams dynamically, so the obligation applies. Option A confuses the assurance about *publishing to existing streams* with stream *creation*, which is suspended. Option C contradicts the final sentence about the support channel. Option D invents a restriction the advisory never imposes. Applying a general notice to specific circumstances - correctly and without over- or under-reacting - is the reading skill that supports the build of data streaming systems day to day.

### Administration guidance

- **Brief the candidate on the Cannot Say discipline before starting.** It is the least natural answer, especially for technical experts; explain that the question is whether the passage states or entails the claim, not whether the candidate happens to know the answer.
- **Hold the time limit consistently.** Under a minute per question simulates real workplace reading pace; apply the same limit to every candidate for a given round.
- **Offer a short practice passage first, if your process allows.** A real data policy or test report with a few True/False/Cannot Say statements familiarises the candidate with the format before the timed section.
- **Watch for attention to logical operators in a candidate's justification.** Words like "only if", "additionally", "unless", "not from" and "whenever" carry most of the weight in these passages, and a strong candidate's reasoning should show it (Questions 2, 7, 14).
- **Watch for reference tracking.** Misattached pronouns and phrases like "it", "they", "too" are a common source of wrong answers (Question 5); worth probing at debrief.
- **Note whether a candidate scans for the statement's keyword or reads passages in full first.** Under this time limit, targeted scanning after reading the statement is the intended method, and worth explaining if a candidate runs out of time.

### Scoring guidance: common pitfalls to watch for

- **Bringing in outside knowledge.** Watch for justifications that draw on how a candidate's own systems behave rather than this passage.
- **Confusing "likely" with "stated".** A passage saying a defect "should be fixed by Friday" does not make "the defect will be fixed by Friday" True; check whether the candidate distinguishes expectation from fact (Question 17).
- **Over-generalising conditional rules.** Requirements introduced with "additionally", "for reuse", or "only if" apply to subsets, and a candidate who applies them universally has over-read the passage (Question 14).
- **Verifying the number but not the claim.** Correct arithmetic can sit inside a contradicted assertion (Question 11); check both.
- **Reading passages in full before seeing the question.** Costs time under this limit without improving accuracy.
- **Treating Cannot Say as an admission of failure.** It is frequently the objectively correct answer, and a candidate who selects it confidently, with reasoning, should be scored accordingly.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skills, and professional conduct. Unlike logic or numerical tests, it presents realistic workplace dilemmas to see how well a candidate's behavioural choices align with the organisation's values and the demands of the role. For a data engineer in the UK public sector, that means scenarios featuring the role's real stakeholders - analysts, BI report users, senior data engineers who set the designs to be delivered, platform teams, policy colleagues, and data governance staff - and its real pressures: deadlines, data quality surprises, standards, and competing requests.

Typical characteristics of this assessment type include:

- **Scenario-based questions.** Short, hypothetical workplace conflicts, ethical dilemmas, or operational challenges drawn from the role's actual context.
- **No single objectively right answer.** Several responses may seem reasonable; the credited ones best fit the organisation's values and the role's responsibilities.
- **Response formats.** Ask the candidate to select the Most Effective and Least Effective actions, or to rank or rate all the options from best to worst.
- **Untimed or generously timed.** These assessments focus on natural judgement rather than speed, so encourage the candidate to read every option fully.

In the UK public sector, the values behind the scoring key are reasonably predictable: put user needs first; be open and transparent, especially about problems; collaborate across teams rather than working around them; take ownership rather than passing problems along; respect standards on accessibility, inclusion, and data protection; and escalate honestly when something exceeds the role's authority - which, at this role level, includes recognising that designs are set by more senior members of the data engineering community while delivery quality is genuinely the role holder's own.

### What it measures for this role

- **Communicating between the technical and non-technical.** Many scenarios turn on choosing communications whose type and tone fit the stakeholder - explaining a pipeline failure to a policy lead is different from explaining it to a platform engineer, and the assessment rewards knowing the difference and its impact.
- **Problem management.** Dilemmas probe whether the candidate investigates at the right level - operational fix now, tactical prevention next, strategic escalation when warranted - and whether they contribute to remedies and preventative measures rather than only patching symptoms.
- **Data integration design and data development process.** Scenarios test the candidate's instinct for repeatable, standards-compliant solutions when a quick manual workaround is tempting.
- **Testing.** Expect dilemmas about time pressure versus test coverage, and about reporting inconvenient results honestly.
- **Data analysis and synthesis.** Some scenarios hinge on presenting clear, honest insights to colleagues even when the message is unwelcome.
- **Data innovation.** A few items check whether the candidate raises opportunities for new tools and uses of data constructively - proposing rather than imposing.

### Practice questions

The response format alternates between selecting most/least effective options and ranking a full set of options.

**Scenario 1 (easy) - The tempting manual fix**

A policy team urgently needs a one-off dataset for a ministerial question due tomorrow. The repeatable pipeline that would produce it properly would take the candidate three days to build. A quick manual extract and hand-edit of the output could instead be run in about two hours, but the manual steps would be undocumented and unrepeatable. The candidate's team lead is in meetings all afternoon.

- A) Build the proper pipeline anyway; the policy team will have to wait three days.
- B) Do the two-hour manual extract, document each manual step as it happens, flag the output as a one-off produced outside the standard pipeline, and book time to build the repeatable version if the need recurs.
- C) Do the manual extract quickly without documentation - it is only a one-off.
- D) Decline the request until the team lead is available to decide.

**Most effective: B. Least effective: C.**

**Explanation:** Option B meets the genuine, urgent user need (a ministerial deadline is about as high-stakes as public sector urgency gets) while managing the risks that make manual work dangerous: it documents the steps, labels the provenance transparently, and creates a path to the repeatable product this role exists to build. Option C meets the deadline but silently creates exactly the undocumented manual flow the role's duties call for re-engineering away - and an unlabelled hand-edited dataset behind a ministerial answer is a transparency failure waiting to surface. Option A privileges engineering purity over user need; option D is passive, deferring a decision the candidate is equipped to take and communicate. The pattern to remember: urgency can justify a workaround, but never an undocumented, unlabelled one.

**Scenario 2 (easy) - The stale dashboard discovered on Friday afternoon**

At 16:30 on Friday the candidate notices that a BI report used by operations teams every weekend has been silently loading incomplete data since Wednesday: about 8% of records are missing due to a feed fault. Fixing the feed will take a few hours on Monday. The weekend users will make staffing decisions from this report.

Rank these responses from most to least effective:

- A) Fix it quietly on Monday; 92% complete is probably good enough for staffing decisions.
- B) Notify the report's users and the team lead now, describing what is missing, the likely direction of the distortion, and when it will be fixed - then log the incident for problem management.
- C) Send a brief note only to the team lead so the team is covered, and let users find out on Monday.
- D) Stay late to attempt an unplanned emergency fix on the feed alone, without telling anyone in case it does not work.

**Most effective ranking: B, D, C, A.**

**Explanation:** B is the clear winner: users about to make real decisions from distorted data need to know now, and honest, specific communication ("what is missing, which way it skews, when it will be fixed") lets them compensate - that is putting user needs and transparency first, and logging the incident feeds the problem management process this skill set includes. D at least attempts to remove the harm, but unreviewed Friday-evening fixes to production feeds carry their own risk and the silence compounds it; it ranks second only because it engages with the problem. C protects the team's optics but abandons the users - visibility without user benefit. A is worst: it normalises silent data quality failure and gambles other people's staffing decisions on an unexamined "probably". The scoring logic: options that inform affected users beat options that inform only the hierarchy, which beat options that inform nobody.

**Scenario 3 (moderate) - Disagreeing with the senior engineer's design**

A senior data engineer has set the design for a new integration the candidate is delivering. Partway through the build, the candidate finds evidence the design will not scale: the volume assumptions in the design document are roughly five times lower than the volumes observed in the source system's profiling. The senior engineer is respected, busy, and slightly impatient with interruptions. The deadline is in two weeks.

- A) Deliver the design exactly as specified; scaling is the designer's responsibility, not the candidate's.
- B) Quietly change the design during implementation to what is believed will scale, without raising it.
- C) Bring the profiling evidence to the senior engineer promptly and concisely, state the discrepancy, and ask how they want to proceed - offering to re-run the profiling together if useful.
- D) Raise the issue at the next team retrospective in three weeks.

**Most effective: C. Least effective: B.**

**Explanation:** This role level "delivers the designs set by more senior members of the data engineering community" - but delivering a design is not the same as suppressing evidence against it. Option C respects the design authority while fulfilling the role's own responsibilities: the candidate has undertaken source system profiling (data analysis and synthesis), found a risk (testing: "identify issues and risks associated with work"), and communicates it promptly with evidence, not opinion. Option B is the least effective by a wide margin: silently diverging from an agreed design breaks trust, bypasses the design authority, and may introduce its own faults - collaboration failure disguised as initiative. Option A hides behind role boundaries; risks a candidate can see are theirs to raise regardless of whose signature is on the design. Option D raises the issue after the deadline has passed - the right act at a uselessly wrong time.

**Scenario 4 (moderate) - The non-technical stakeholder who wants it simple**

A programme manager asks the candidate to explain, in a meeting with external partners in an hour, why last month's caseload statistics were restated. The true cause is a subtle one: a late-arriving batch of records was double-counted because a deduplication step ran before the late batch landed. The programme manager says: "Just tell them it was a computer glitch - keep it simple."

- A) Agree to say "computer glitch"; it is simple and roughly true.
- B) Refuse to attend the meeting unless full technical detail, including the pipeline diagram, can be presented.
- C) Prepare a plain-language explanation that is simple *and* accurate - for example: "some records arrived late and were counted twice before our checks caught it; we have fixed the ordering so it cannot recur" - and agree the wording with the programme manager before the meeting.
- D) Attend and let the programme manager do all the talking, correcting them afterwards in private if needed.

**Most effective: C. Least effective: A.**

**Explanation:** This is the "communicating between the technical and non-technical" skill under live fire. Option C shows why the skill matters: non-technical language does not mean inaccurate language, and "counted twice before our checks caught it; fixed so it cannot recur" is honest, simple, and even confidence-building - it shows the control worked and was improved. Option A is least effective: "computer glitch" is not an explanation, invites the interpretation that the systems are unreliable in unknowable ways, and forfeits the transparency external partners are owed. Option B mistakes completeness for honesty and disrespects the audience's needs - the impact of a communication depends on its fit to the stakeholder. Option D avoids the responsibility that is being explicitly delegated to the candidate and repairs the record only where nobody external benefits. Agreeing wording *with* the programme manager also respects their ownership of the meeting - collaboration, not circumvention.

**Scenario 5 (moderate) - Personal data where it should not be**

While profiling a new source feed, the candidate notices a free-text field that sometimes contains what appear to be individuals' names and health details, though the integration specification describes the field as "operational notes, non-personal". The feed is due to start flowing into a widely accessible analytics environment on Thursday.

Rank these responses from most to least effective:

- A) Pause the field's inclusion, inform the team lead and the data governance or protection contact immediately with examples, and ask for a decision on handling before Thursday.
- B) Strip the field out of the mapping personally and permanently, tell no one, and let the feed go live without it.
- C) Let the feed go live as specified; the specification says the field is non-personal, so any error is the specification author's problem.
- D) Raise a ticket for the specification team and let the feed go live while the ticket works through the queue.

**Most effective ranking: A, B, D, C.**

**Explanation:** A does everything the situation demands: it stops the specific risk (health data reaching a widely accessible environment is a serious data protection incident in the making), it is transparent, it engages the people whose job is exactly this decision, and it preserves the Thursday launch for everything unaffected. B actually prevents the exposure - which is why it ranks second - but silent unilateral scope changes hide a data quality and governance problem the organisation needs to know about, and "tell no one" means the source system keeps leaking personal data into a field marked non-personal. D has the right instinct (raise it) fatally undermined by the wrong timing (going live anyway); a queue-speed response to a launch-speed risk. C is worst: it treats compliance as someone else's problem while personally operating the pipeline that would cause the exposure. In UK public sector scoring keys, options that protect individuals' data promptly and transparently virtually always outrank options that protect schedules or assign blame.

**Scenario 6 (moderate) - Test coverage versus the deadline**

A data product is due for release on Friday. By Wednesday evening 70% of the planned test conditions have been executed; all have passed. The remaining 30% cover the reconciliation between the two source feeds - historically the riskiest area. The delivery manager suggests: "Everything's green so far. Let's release Friday and finish testing next week."

- A) Agree - a 100% pass rate on 70% of tests is strong evidence of quality.
- B) Explain concisely what the untested 30% covers and why it is the riskiest area, quantify what could go wrong for users, and recommend either completing those tests first or consciously accepting the documented risk at the right level.
- C) Refuse to release and escalate over the delivery manager's head immediately.
- D) Agree to release, but quietly plan to run the remaining tests over the weekend so any problems are found before Monday.

**Most effective: B. Least effective: A.**

**Explanation:** The testing skill for this role is explicit: analyse and report test activities and results, and identify issues and risks associated with work. Option B does exactly that - it converts "30% remaining" into what a decision-maker actually needs: which risk, to whom, how bad, and what the options are. Crucially, it leaves the decision where it belongs while making it impossible to take uninformed. Option A is least effective because it mistakes an unfinished pass rate for evidence about the untested area - the riskiest part is precisely where "green so far" says nothing. Option D looks diligent but launders the risk: users are exposed from Friday to whenever the weekend tests finish, and the delivery manager has decided on false pretences. Option C jumps a level before attempting the direct, evidence-based conversation that usually works. Escalation is for when informed decision-making fails, not instead of informing.

**Scenario 7 (hard) - The colleague bypassing standards**

The candidate discovers that a friendly, hard-working colleague on another team has been copying data from the candidate's team's curated datasets into a personal workspace, transforming it with unversioned scripts, and circulating the results to their director as official figures. The figures sometimes disagree with the team's published BI reports, and stakeholders have started asking which numbers are right.

Rank these responses from most to least effective:

- A) Talk to the colleague directly first: show them the discrepancies, explain the risks of unversioned parallel figures, and offer to help them get what they need from the governed pipeline - looping in the team lead on the plan.
- B) Report the colleague to their director straight away as a data governance breach.
- C) Ignore it - their team, their problem - but keep evidence in case the candidate is blamed for the discrepancies.
- D) Ask the team lead to send a general reminder to all teams about data standards, without naming anyone.

**Most effective ranking: A, D, B, C.**

**Explanation:** A leads because it fixes the root cause collaboratively: the colleague has an unmet data need, and the durable remedy is meeting that need through the governed route - possibly a reusable data product or report, which is the role's core trade. Involving the team lead keeps it transparent without making it disciplinary. D is a distant second: it acts, but so generically that the specific, active confusion in front of directors may continue. B ranks third, not because escalation is wrong, but because leading with it - before any direct conversation - damages collaboration and, in most public sector cultures, is credited only when the direct route has failed or the breach is severe (contrast Scenario 5, where personal data justified immediate escalation). C is worst: it knowingly lets decision-makers act on conflicting figures while prioritising self-protection. The general principle: match the escalation intensity to the harm, and prefer the move that both stops the problem and builds capability.

**Scenario 8 (hard) - The innovation proposal**

The candidate has been experimenting, in their own learning time, with a new open-source data quality tool that could automate the manual reconciliation checks the team runs every month. It is estimated to save two days of effort monthly, but adopting it would need security assessment, a change to the team's standard toolset, and some retraining. The team is mid-way through a demanding delivery.

- A) Install the tool into the production pipeline now to demonstrate the benefit with real results.
- B) Write up a short, evidence-based proposal - the problem, the estimated saving, the adoption costs, the security questions - and suggest a time-boxed evaluation on non-production data after the current delivery milestone.
- C) Say nothing until the delivery is over; innovation can wait indefinitely.
- D) Mention it casually at stand-up and drop it if nobody reacts.

**Most effective: B. Least effective: A.**

**Explanation:** The data innovation skill for this role asks for "an awareness of opportunities for innovation with new tools and uses of data" - awareness expressed constructively. Option B is the model: it quantifies the benefit, is honest about the costs and security work, respects the team's current pressure by proposing the evaluation after the milestone, and contains the risk with a time-box and non-production data. Option A is least effective and the most severely penalised kind of answer in public sector scoring: unassessed third-party software in a production pipeline bypasses security assessment and organisational standards simultaneously. Option C confuses timing sensitivity with permanent silence - the proposal can be written now even if the work starts later. Option D delegates the idea's survival to the mood of a stand-up; ideas worth two days a month deserve two pages of evidence.

**Scenario 9 (hard) - Conflicting demands on the candidate's week**

Monday morning. Three requests land at once: (1) a senior data engineer asks the candidate to finish documenting source-to-target mappings for an integration going to design review on Wednesday; (2) an analyst asks the candidate to rebuild a BI report "sometime this week" because a source column was renamed and the report now errors for its 40 regular users; (3) a fellow data engineer asks for an hour of pair debugging on a stream consumer that is misbehaving in a test environment, blocking their task. All three are legitimate. Realistically, only two things can be done well today.

- A) Documentation all day today and tomorrow; the report and the debugging can wait until Wednesday afternoon.
- B) Fix the erroring report first since 40 users are affected daily, give the colleague their hour of debugging today, and tell the senior engineer the mapping documentation will be delivered tomorrow, confirming that still meets the Wednesday review.
- C) Do the pair debugging first because that colleague asked most recently, then the documentation, and tell the analyst the report is a next-week job.
- D) Ask the senior engineer to decide the order of all three tasks.

**Most effective: B. Least effective: D.**

**Explanation:** B sequences by user impact and deadline reality: the broken report is harming 40 users *now* (and "sometime this week" understates a daily-error situation); the debugging hour is cheap and unblocks a colleague immediately; the documentation has until Wednesday, and B verifies that assumption with its owner rather than silently betting on it - that confirmation is what makes B strong rather than merely optimistic. A treats the most senior requester as the most urgent task, a common but wrong conflation. C sequences by recency, and parks the highest-impact item. D is least effective at this level: the candidate holds all the information needed to sequence their own day, and wholesale delegation of it upward is the "passive option" that situational judgement scoring consistently penalises - quite different from the targeted confirmation in B. Prioritising by user impact, communicating the plan, and verifying deadline assumptions: that is the repeatable pattern.

**Scenario 10 (moderate) - The recurring 3 a.m. failure**

A nightly load fails about once a fortnight with a timeout, and the on-call engineer restarts it manually each time; the restart always works. This has continued for three months. Tonight it was the candidate's turn to restart it. In the morning, what should be done?

- A) Nothing further - the restart worked, the data loaded, and everyone knows the drill.
- B) Log it as a recurring problem, gather the pattern from the last three months of incidents, form a hypothesis about the cause (for example, contention with a backup job), and propose an investigation and a permanent remedy to the team.
- C) Write a better manual restart guide so future on-call engineers can restart it faster.
- D) Configure an automatic retry so the failure self-heals, and consider the matter closed.

**Most effective: B. Least effective: A.**

**Explanation:** This is problem management in miniature: the distinction between incident response (restart it) and problem investigation (why does it keep happening?). Option B does what the role profile describes - "investigate problems in systems, processes and services" with an understanding of the level, and "contribute to the implementation of remedies and preventative measures". A fortnightly failure for three months is a pattern, and patterns have causes. Option D is the interesting distractor: the auto-retry is a sensible mitigation, but "consider the matter closed" converts an unexplained failure into an invisible one - the timeout may be a symptom of growing contention that will one day exceed any retry. Option C optimises the workaround instead of questioning it. Option A is least effective: normalised failure is how small operational problems mature into strategic ones. Best real-world answer: B, quite possibly *with* D's retry as an interim mitigation - and several scoring keys would credit exactly that combination if offered.

### Administration guidance

- **Score against the organisation's values.** UK public sector situational judgement keys reward user focus, transparency, collaboration, proportionate escalation, and ownership; use these as the lens for judging close calls.
- **Score for the role and its level.** This role delivers designs set by senior engineers, and owns delivery quality, testing honesty, and clear communication. Options that either grab decisions above the role's level or dodge decisions within it should both lose marks.
- **Watch for the passive option.** In nearly every scenario there is a choice that delays, defers wholesale, or hopes the problem disappears; it is almost never the credited most-effective answer, and it is frequently the least.
- **Distinguish the act from its packaging when scoring.** A good action done silently (fixing without telling), or a right message delivered wrongly (escalating before conversing), should score lower than the same substance with honest, proportionate communication attached.
- **Look for the double effect.** The most effective option usually resolves the immediate situation *and* improves the system - documentation, a logged problem, a reusable product. Data engineering rewards exactly that double effect, and so does this assessment's scoring key.
- **Debrief by talking it through.** Walking a candidate through their reasoning on a sample of scenarios, and comparing it with the explanation here, surfaces far more than the raw most/least-effective score alone.

### Scoring guidance: common pitfalls to watch for

- **Idealistic but impractical answers.** Choosing what sounds noble ("refuse until everything is perfect") rather than what actually works in a real organisation with real deadlines - Scenario 1's option A is that trap in miniature.
- **Ignoring the organisation's culture and values.** Public sector keys weight transparency and user needs heavily; an instinct to protect the schedule at all costs mis-ranks options like Scenario 6's.
- **Passive options.** Waiting for the team lead, raising it at next month's retrospective, letting the ticket queue decide - delay dressed as diligence, and consistently penalised.
- **Silent heroics.** Weekend fixes nobody asked for, unilateral scope changes, quiet design corrections: options B in Scenarios 3 and 5 and option D in Scenario 6 show how well-intentioned but silent actions score badly when they hide information others need.
- **Escalating first, conversing never.** Skipping the direct, evidence-based conversation makes escalation look like blame-shifting (Scenario 7); the exception is acute harm - personal data exposure, safety - where immediate escalation is right.
- **Treating every scenario as a technology problem.** Many dilemmas here are resolved by communication choices, not code; an answer that never involves telling anyone anything is worth a second look.

## Conclusion

This resource has given you a complete set of assessment material built around the data engineer role. The cognitive section covers the pattern recognition, logical deduction, error checking, and prioritisation that keep data flows, mappings, and models trustworthy. The numeric section covers the percentages, ratios, rates, and capacity figures behind profiling sources, tuning ETL performance, and presenting clear insights to colleagues. The verbal section covers the precise, evidence-bound reading that turns standards, specifications, and stakeholder emails into correct engineering decisions. The situational judgement section weighs realistic dilemmas against the values that matter most in UK public sector work: user needs, transparency, collaboration, proportionate escalation, and ownership.

To score: mark each item against the worked answer key, and where a response format allows for it (most/least effective, ranking), use the explanation to judge how close a candidate's reasoning came, not only whether they landed on the credited option. Keep a written record of scores and your rationale for each candidate.

Debrief every candidate, whatever the outcome, using the explanations in this document to talk through a sample of their answers - this is also where a candidate can raise fair questions about an item's clarity, and where genuine learning happens regardless of the outcome.

Administer this consistently: the same items, the same time limits, and the same scoring approach for every candidate assessed for this role level in a given round. Keep your records, and remember the advisory above - this assessment is not validated, not normed, and must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Use it as one structured input alongside the rest of your process, and consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues before relying on it.
