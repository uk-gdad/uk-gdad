# Data governance manager - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for data governance manager, within the UK Government Digital and Data profession. The material is job-specific: it presents what a data governance manager genuinely handles — data catalogues, RACI matrices, lineage diagrams, and governance workflows — and the judgements the role turns on, rather than abstract puzzles.

This role requires the ability to reason clearly about frameworks, policies and standards; to interpret data quality metrics, risk figures and maturity scores; to read dense policy and legislative text with precision; and to make sound judgements when stakeholders disagree, risks emerge, or compliance is at stake.

This document is organised around four assessment types, each with its own dedicated section:

1. **Workplace job-specific cognitive assessment** — measuring pattern recognition, logical deduction, error checking, prioritisation and problem solving using the artefacts a data governance manager genuinely handles.
2. **Workplace job-specific numeric reasoning assessment** — measuring the ability to interpret tables, percentages, ratios, budgets and performance metrics such as data quality scores, training uptake figures and risk exposure calculations.
3. **Workplace job-specific verbal reasoning assessment** — measuring precise comprehension of the written material this role works with every day: data policies, standards documents, stakeholder emails, and audit reports.
4. **Workplace job-specific situational judgement assessment** — measuring how a candidate responds to realistic workplace dilemmas involving data owners, technical teams, senior leaders and the public interest.

Each section explains what the assessment measures, maps it to the specific skills in the role profile, provides a substantial set of items with full worked explanations for use as an answer key, and finishes with administration tips and common pitfalls to watch for when scoring.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief — a candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment is a targeted psychometric test designed to measure the exact mental processes needed for this role — not abstract puzzle-solving, but the practical reasoning exercised when planning, monitoring and enforcing the management of data assets. It uses realistic workplace scenarios and materials: a data catalogue with inconsistencies to spot, a RACI matrix with a logical gap, a governance workflow with a missing step, or a set of competing priorities to sequence.

Typical format and timing: online and timed, most commonly 15 to 30 minutes, multiple choice, with objective scoring against a benchmark or norm group. Many platforms give short, ungraded practice questions first, and some adapt difficulty based on earlier answers. A breakdown of speed versus accuracy is usually more informative than a single score.

Cognitive assessment matters at this level because the role sits at the intersection of detail and design. Cataloguing, monitoring and identifying essential data assets demands error checking and pattern recognition. Developing end-to-end governance frameworks demands logical deduction about processes, policies and standards. Supporting risk processes around data demands sound prioritisation when several issues compete for attention.

### How this assessment maps to the role

The assessment dimensions map directly onto the skills in the role profile:

- **Logical deduction** maps to the **Data governance** skill: developing an end-to-end framework means reasoning about which processes, operational policies and standards must exist, in what order, and what follows if one is missing. It also maps to **Data standards**: analysing the impact if a standard is breached is a deductive exercise.
- **Error checking** maps to **Data management** and **Data standards**: monitoring compliance with policies and standards means spotting the record, entry or clause that does not match the rule.
- **Pattern recognition** maps to **Data maturity** and **Data quality** work: measuring data maturity and identifying opportunities to improve quality and trustworthiness both depend on seeing trends and anomalies across assessments, audits and metrics.
- **Prioritisation** maps to **Enabling and informing risk-based decisions**: advising on risk impact and whether it is within risk tolerance requires weighing severity, likelihood and proportionality quickly and consistently.
- **Problem solving with workflows** maps to the duty to incorporate governance of data into routine processes.
- **Sequencing and dependency reasoning** maps to **Data life cycle**: applying governance at each phase — creation, storage, use, sharing, archiving, disposal — means understanding what must happen before what.

### Practice questions

Present these to the candidate; roughly 90 seconds to 2 minutes per question is a reasonable guide.

**Question 1 (easy) — Error checking in a data catalogue**

Four new entries in an organisation's data catalogue are under review. The catalogue standard requires that every entry has: (a) a named data owner, (b) a security classification, (c) a retention period, and (d) a last-reviewed date no more than 12 months old. Today's date is 12 August 2026.

| Entry | Data owner | Classification | Retention | Last reviewed |
|---|---|---|---|---|
| Case Management Records | J. Okafor | OFFICIAL | 7 years | 03 Feb 2026 |
| Staff Survey Responses | (blank) | OFFICIAL | 2 years | 15 May 2026 |
| Grants Payment Ledger | P. Singh | OFFICIAL-SENSITIVE | 7 years | 30 Jun 2025 |
| Website Analytics Feed | L. Hart | OFFICIAL | 26 months | 01 Aug 2024 |

Which entries fail the standard?

A) Staff Survey Responses only
B) Staff Survey Responses and Website Analytics Feed
C) Staff Survey Responses, Grants Payment Ledger, and Website Analytics Feed
D) All four entries

**Correct answer: C**

**Explanation:** Compute the review cut-off once: 12 August 2026 minus 12 months is 12 August 2025. Case Management Records passes everything. Staff Survey Responses has no named owner, failing rule (a). Grants Payment Ledger was last reviewed 30 June 2025 — before the cut-off, failing rule (d); this is the deliberate near-miss tempting a candidate towards option B. Website Analytics Feed (01 August 2024) clearly fails rule (d) too. This tests computing an exact threshold once and comparing every entry against it, rather than estimating month gaps — near-miss values are placed precisely where estimation breaks down.

**Question 2 (easy) — RACI logic**

An organisation's RACI matrix for the "approve new data sharing agreement" activity lists: Data Governance Manager — Responsible; Information Asset Owner — Accountable; Data Protection Officer — Consulted; Service Team — Informed. A colleague proposes adding a second Accountable role (the Chief Data Officer) "to be safe". Under standard RACI methodology, what is the flaw in this proposal?

A) The Chief Data Officer should be Responsible, not Accountable
B) A RACI activity should have exactly one Accountable role, because dual accountability creates ambiguity about final ownership
C) The Data Protection Officer must always be the Accountable party for data sharing
D) There is no flaw; RACI allows any number of Accountable roles

**Correct answer: B**

**Explanation:** The defining rule of RACI is one — and only one — Accountable role per activity, since accountability is the single point where the buck stops. Option C is wrong: the DPO advises and is typically Consulted. This tests knowledge of a governance method and mirrors the real duty to assign ownership of data with a clear RACI matrix, where clarity of accountability is the entire point.

**Question 3 (moderate) — Logical deduction from policy rules**

A data governance framework contains three rules: (1) if a dataset contains personal data, it must have a completed Data Protection Impact Assessment (DPIA) before it is shared externally; (2) if a dataset is classified OFFICIAL-SENSITIVE, external sharing requires senior information risk owner (SIRO) approval; (3) any dataset without an assigned owner cannot be shared externally under any circumstances.

A service team wants to share Dataset Q externally. Dataset Q contains personal data, is classified OFFICIAL, and has an assigned owner. Its DPIA is in draft. Which statement is logically correct?

A) Dataset Q can be shared once SIRO approval is obtained
B) Dataset Q cannot currently be shared, because rule 1 is not satisfied
C) Dataset Q can be shared, because it is not OFFICIAL-SENSITIVE and has an owner
D) Dataset Q cannot ever be shared externally

**Correct answer: B**

**Explanation:** Rule 1 requires a completed DPIA; a draft does not satisfy it, so sharing is blocked. Rule 2 does not fire because the classification is OFFICIAL, not OFFICIAL-SENSITIVE (option A wrongly adds a requirement). Rule 3 does not fire because an owner is assigned. Option D overstates: the block is conditional, not permanent. This tests distinguishing "blocked until a condition is met" from "prohibited outright" — the difference between advising a team to pause and wrongly telling them the door is closed.

**Question 4 (moderate) — Pattern recognition in data quality trends**

Monthly completeness scores (percentage of mandatory fields populated) for five key data assets over six months:

- Asset A: 91, 92, 91, 93, 92, 93
- Asset B: 88, 85, 83, 80, 78, 75
- Asset C: 95, 96, 62, 95, 96, 95
- Asset D: 70, 74, 78, 82, 86, 90
- Asset E: 99, 99, 99, 99, 99, 99

Which asset most likely experienced a one-off data pipeline failure, and which shows a systemic, worsening problem?

A) Pipeline failure: C; systemic problem: B
B) Pipeline failure: B; systemic problem: C
C) Pipeline failure: C; systemic problem: D
D) Pipeline failure: E; systemic problem: B

**Correct answer: A**

**Explanation:** Asset C shows a stable pattern with a single dramatic dip and immediate recovery — the signature of a one-off incident, not a behavioural or process issue. Asset B declines steadily every month — the signature of a systemic issue that will keep worsening without intervention. Asset D is improving; Asset E is stable and healthy. This tests distinguishing spike anomalies from trend deterioration — the right response to C is a root-cause incident review, and to B a process intervention.

**Question 5 (moderate) — Data life cycle sequencing**

Governance checkpoints are being designed across the data life cycle for a new service. Place these five checkpoints in the correct life cycle order: (1) confirm secure disposal certificate is logged; (2) approve the data collection notice and lawful basis; (3) review access controls for the live database; (4) apply the retention schedule and archive eligible records; (5) validate quality rules on first ingestion.

A) 2, 5, 3, 4, 1
B) 5, 2, 3, 1, 4
C) 2, 3, 5, 4, 1
D) 2, 5, 4, 3, 1

**Correct answer: A**

**Explanation:** (2) belongs to creation/collection; (5) to ingestion/processing; (3) to use/storage; (4) to retention/archiving; (1) to disposal — the final phase. Option C wrongly places access control review before first ingestion; option D archives before reviewing live access. This tests applying data governance at each phase of the data life cycle in correct sequence.

**Question 6 (moderate) — Error checking a metadata standard**

A metadata standard states: "Dataset identifiers must follow the pattern DEPT-DOMAIN-NNNN, where DEPT is a 3-letter department code, DOMAIN is a 4-letter domain code, and NNNN is a 4-digit number, all separated by hyphens." Which of the following identifiers is fully compliant?

A) DWP-CASE-27
B) HMRC-PAYE-0042
C) DFE-SKIL-0917
D) DVL-FLEET-1204

**Correct answer: C**

**Explanation:** Option A fails on digit count (2, not 4). Option B fails because "HMRC" is 4 letters, not 3 — even though it looks the most "real", it breaks the rule. Option D fails because "FLEET" is 5 letters. Option C passes all three parts. This tests checking against the written rule rather than what feels familiar — the essence of the data standards skill.

**Question 7 (moderate) — Prioritisation under constraint**

At 09:00, four items sit in a queue, with time to address only one before a 10:00 governance board meeting: (1) a team reports a completeness drop from 94% to 91% on a medium-priority asset; (2) the DPO emails about an FOI request due in 15 working days; (3) a service manager reports that an unencrypted extract of OFFICIAL-SENSITIVE personal data may have been emailed to an external partner an hour ago; (4) a colleague asks for review of draft data literacy training slides for next month.

Which item should be addressed first?

A) Item 1, because data quality is the core responsibility
B) Item 2, because FOI requests carry statutory deadlines
C) Item 3, because it is a potential data breach requiring immediate containment and assessment
D) Item 4, because it takes the least time and clears the queue

**Correct answer: C**

**Explanation:** Item 3 is a potential personal data breach involving sensitive material, where the immediate window matters most for containment. Item 2 has runway (15 working days). Item 1 is worth investigating today, not this hour. Item 4 has a month of lead time. This tests severity × urgency reasoning: irreversible harm in motion beats deadlines with runway, which beat monitoring signals, which beat routine reviews.

**Question 8 (hard) — Deduction across a governance workflow**

A data access request workflow has five stages: Request → Owner Approval → DPO Review (only if personal data) → Security Check (only if classification is OFFICIAL-SENSITIVE or higher) → Provision. An internal audit samples four completed requests:

- Request W: personal data, OFFICIAL. Stages logged: Request, Owner Approval, DPO Review, Provision.
- Request X: no personal data, OFFICIAL-SENSITIVE. Stages logged: Request, Owner Approval, Provision.
- Request Y: personal data, OFFICIAL-SENSITIVE. Stages logged: Request, Owner Approval, DPO Review, Security Check, Provision.
- Request Z: no personal data, OFFICIAL. Stages logged: Request, DPO Review, Provision.

Which requests show workflow non-compliance?

A) X only
B) X and Z
C) W, X and Z
D) Y and Z

**Correct answer: B**

**Explanation:** W and Y match their required paths exactly. X requires a Security Check (OFFICIAL-SENSITIVE) that is missing. Z requires Owner Approval (which is absent) — the log shows an extra DPO Review instead, but the mandatory Owner Approval step is missing. This tests checking for missing required steps first, then superfluous ones — candidates often see an "extra" stage and assume over-compliance, missing the absent mandatory one.

**Question 9 (hard) — Data maturity model reasoning**

A five-level data maturity model (1 = Initial, 2 = Repeatable, 3 = Defined, 4 = Managed, 5 = Optimising) requires that an organisation cannot be rated at a level unless it fully satisfies every lower level. Assessment findings for "metadata management": documented/standardised processes (Level 3) — satisfied; measured quality with quarterly review (Level 4) — satisfied; some teams still maintain ad-hoc undocumented local glossaries, contrary to Level 2's requirement that all metadata practice follows the repeatable process — not satisfied.

What maturity level should be recorded for metadata management?

A) Level 4, because the highest satisfied criterion is Level 4
B) Level 3, averaging the results
C) Level 1, because the Level 2 criterion is not fully satisfied
D) Level 2, because partial compliance rounds down by one level

**Correct answer: C**

**Explanation:** The model's rule is cumulative: a level requires it and all lower levels fully satisfied. Because Level 2 fails, the rating cannot be 2, 3, or 4 regardless of strong higher-level practices — the rating is Level 1. Options A and B substitute intuitive heuristics for the model's actual rule. This tests applying a stated rule as written, not as one might wish it worked.

**Question 10 (hard) — Root cause isolation**

Duplicate customer records have risen sharply. Facts: (1) the rise began the same week a new online self-service registration form launched; (2) the form does not check whether an applicant already exists before creating a record; (3) the nightly deduplication job has been running successfully all quarter; (4) records created by phone agents (who search before creating) show no rise in duplicates.

What is the most logically supported root cause?

A) The deduplication job has silently stopped working
B) The new self-service form creates records without an existing-record check, generating duplicates faster than the nightly job's design anticipated
C) Phone agents have stopped searching before creating records
D) Customers are deliberately registering multiple times

**Correct answer: B**

**Explanation:** Fact 3 contradicts option A. Fact 4 contradicts option C. Option D is unsupported speculation. Option B is supported by facts 1, 2, and the differential in fact 4 — when one channel with a control is clean and one channel without it is not, the control gap is implicated. This tests isolating cause from a conjunction of facts before recommending remediation.

**Question 11 (hard) — Conditional standards logic**

A data standards manual says: "A dataset may be published as open data only if (i) it contains no personal data, and (ii) either it is already publicly available elsewhere or the information asset owner has approved publication. Additionally, any dataset containing location data at postcode level requires an aggregation review before publication."

Dataset R contains no personal data, is not available elsewhere, has owner approval, and includes postcode-level location data. Dataset S contains no personal data, is publicly available elsewhere, lacks owner approval, and has no location data. Which is true?

A) R may be published immediately; S may not
B) R requires an aggregation review before publication; S may be published
C) Both require owner approval before anything else
D) Neither may be published

**Correct answer: B**

**Explanation:** For R: (i) satisfied; (ii) satisfied via owner approval; but the postcode-level clause fires, requiring an aggregation review. For S: (i) satisfied; (ii) satisfied via the "publicly available elsewhere" branch, so owner approval is not needed; no location data, so no review needed — S may be published. This tests parsing conjunctions, disjunctions, and conditional riders precisely.

**Question 12 (hard) — Prioritising a remediation portfolio**

Capacity exists to sponsor two remediation projects this quarter: Project 1 (fix a master data feed four services depend on; medium effort; high risk reduced — statutory reporting breach); Project 2 (refresh the catalogue's visual design; low effort; negligible risk reduced); Project 3 (automate retention-schedule enforcement; medium effort; high risk reduced — two recent over-retention near-misses); Project 4 (pilot an AI metadata-tagging tool; high effort; low-moderate risk reduced, unproven).

Applying risk-based prioritisation, which two projects should be sponsored?

A) Projects 1 and 2
B) Projects 2 and 4
C) Projects 1 and 3
D) Projects 3 and 4

**Correct answer: C**

**Explanation:** Projects 1 and 3 each deliver high risk reduction for medium effort — the best ratio available — and both address live compliance exposure. Project 2 is cheap but reduces essentially no risk. Project 4 has genuine value but cannot displace two high-reduction projects when capacity is the constraint. This tests comparing all pairings by risk-reduction-per-effort rather than accepting a good-plus-weak bundle.

### Administration tips

- **Score for whether a candidate computes an exact threshold** rather than estimating date gaps or counts.
- **Watch for whether a candidate reads the rule as written**, even when professional instinct suggests the rule is imperfect.
- **Note whether a candidate checks for missing required steps first**, before superfluous ones, when auditing a process log.
- **Note whether a candidate distinguishes "blocked until a condition is met" from "prohibited outright".**
- **Keep timing consistent** across candidates for this level, and consider offering ungraded practice items first.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that favours plausibility over compliance** — a "real-looking" option instead of the one that matches the stated rule.
- **Missing when a candidate overlooks an absent mandatory step** while catching an incorrect one.
- **Crediting an estimate over a calculation** where date gaps or counts are involved.
- **Missing when a candidate confuses "blocked" with "prohibited".**
- **Letting a time-sink question distort the overall picture.**

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret and make sound decisions using numerical data. It focuses on practical business arithmetic — percentages, ratios, budgets, rates and trends — using inputs that will look familiar to this role: data quality scorecards, risk exposure tables, training uptake figures, remediation budgets, catalogue coverage statistics, and maturity assessment results.

Typical format and timing: a table, chart, or short dataset followed by multiple-choice questions, commonly 20 to 30 minutes for 15 to 25 questions. Most assessments allow or provide an onscreen calculator.

Numeric reasoning matters at this level because data governance is increasingly a numbers-driven discipline. Identifying opportunities to improve quality and trustworthiness is evidenced with completeness, accuracy and timeliness percentages. Advising risk owners on tolerance works with likelihood, impact and expected-loss arithmetic. Advocating for better data management stands on cost-benefit figures.

### How this assessment maps to the role

- **Interpreting data quality metrics** maps to the **Data governance** and **Data management** skills.
- **Risk arithmetic** (likelihood × impact, expected loss, risk tolerance thresholds) maps to **Enabling and informing risk-based decisions**.
- **Budget and cost-benefit calculations** map to advocating for better use and management of data.
- **Training and adoption statistics** map to **Data literacy improvement**.
- **Maturity scoring and weighted averages** map to **Data maturity**.
- **Compliance rates and trend analysis** map to **Data standards**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded. An onscreen calculator would normally be available.

**Question 1 (easy) — Completeness percentage**

A data catalogue lists 480 data assets. Of these, 384 have a named data owner. What percentage of assets currently lacks a named owner?

A) 15%
B) 20%
C) 25%
D) 80%

**Correct answer: B**

**Explanation:** Without owner = 96 ÷ 480 = 20%. Option D is the percentage *with* an owner. This tests re-reading the question's final clause before selecting.

**Question 2 (easy) — Percentage change in duplicates**

A deduplication initiative reduced duplicate citizen records from 12,500 to 9,875. What was the percentage reduction?

A) 18%
B) 21%
C) 26.25%
D) 2.1%

**Correct answer: B**

**Explanation:** Reduction = 2,625 ÷ 12,500 = 21%. Option C divides by the new value instead of the original. This tests measuring percentage change against the correct base.

**Question 3 (easy) — Training uptake**

Of 640 eligible staff, 416 have completed a foundation training module. The target for the quarter is 75% completion. How many more staff must complete the module to hit the target?

A) 48
B) 64
C) 80
D) 224

**Correct answer: B**

**Explanation:** Target = 480; shortfall = 480 − 416 = 64. Option D is the total not yet trained, answering a different question. This tests the two-step structure of compute the target, then the gap.

**Question 4 (moderate) — Data quality scorecard**

A monthly quality scorecard for a Grants dataset shows four dimensions, each scored out of 100, with agreed weights: Completeness 92 (40%), Accuracy 85 (30%), Timeliness 70 (20%), Consistency 60 (10%). What is the weighted overall quality score?

A) 76.75
B) 81.3
C) 82.3
D) 84.1

**Correct answer: C**

**Explanation:** 36.8 + 25.5 + 14.0 + 6.0 = 82.3. Option A is the simple unweighted average, ignoring the weights. This tests the multiply-then-sum pattern behind composite quality and maturity indices.

**Question 5 (moderate) — Risk exposure**

A data risk register scores risks as expected annual loss = likelihood × impact. Three risks: R1 (over-retention, 10% likelihood, £180,000 impact); R2 (dataset unavailable during outage, 25%, £60,000); R3 (poor address quality, 60%, £40,000). Which risk has the highest expected annual loss, and what is that figure?

A) R1, £18,000
B) R2, £15,000
C) R3, £24,000
D) R1, £180,000

**Correct answer: C**

**Explanation:** R1 = £18,000; R2 = £15,000; R3 = £24,000, the highest. Option D quotes raw impact rather than expected loss. This tests recognising that the scariest headline impact is not automatically the biggest expected exposure once likelihood is factored in.

**Question 6 (moderate) — Risk tolerance threshold**

Continuing from Question 5: risk tolerance for any single data risk is an expected annual loss of £20,000. A proposed control for R3 costs £7,500 per year and would reduce R3's likelihood from 60% to 25% (impact unchanged). If implemented, would R3 fall within tolerance, and what would be the net annual benefit?

A) Within tolerance; net benefit £6,500
B) Within tolerance; net benefit £14,000
C) Not within tolerance; net cost £7,500
D) Within tolerance; net benefit £10,000

**Correct answer: A**

**Explanation:** New expected loss = £10,000, within tolerance. Reduction = £24,000 − £10,000 = £14,000. Net benefit = £14,000 − £7,500 = £6,500. Option B forgets to subtract the control's cost. This tests a three-step chain: recompute, compare to threshold, net off the cost.

**Question 7 (moderate) — Compliance rate trend**

Quarterly spot-checks: Q1 250 checked, 205 compliant; Q2 300 checked, 252 compliant; Q3 320 checked, 280 compliant. By how many percentage points did the compliance rate improve from Q1 to Q3?

A) 5.5 percentage points
B) 7.5 percentage points
C) 6.0 percentage points
D) 75 percentage points

**Correct answer: A**

**Explanation:** Q1 = 82%; Q3 = 87.5%; improvement = 5.5 percentage points (not the same as the ≈6.7% relative increase). This tests comparing rates rather than raw counts across differing sample sizes, and using "percentage points" correctly.

**Question 8 (moderate) — Budget allocation**

An annual data governance programme budget of £240,000 is allocated: 45% staff, 25% tooling, 20% training, 10% contingency. Mid-year, the tooling line is overspent by £12,000, covered entirely from contingency. How much contingency remains for the rest of the year?

A) £24,000
B) £12,000
C) £36,000
D) £10,800

**Correct answer: B**

**Explanation:** Contingency = £24,000; remaining after covering the overspend = £12,000. This tests establishing the base figure first, then applying the movement.

**Question 9 (hard) — Cost-benefit of a data quality initiative**

Poor address data causes 4,200 failed postal communications per year, each costing £6.50 to reissue. A proposed address-validation service costs £15,000 per year and is expected to prevent 80% of the failures. What is the expected net annual saving?

A) £27,300
B) £6,840
C) £21,840
D) £12,300

**Correct answer: B**

**Explanation:** Gross saving = 3,360 × £6.50 = £21,840. Net = £21,840 − £15,000 = £6,840. This tests the skeleton of a data quality business case: baseline cost, effectiveness rate, gross benefit, minus intervention cost.

**Question 10 (hard) — Catalogue coverage projection**

A catalogue documents 480 of an estimated 800 data assets (60% coverage). New entries are documented at 30 assets per month, while discovery work adds an estimated 10 previously unknown assets to the total each month. What will coverage be, to the nearest whole percentage, after 4 months?

A) 75%
B) 71%
C) 68%
D) 80%

**Correct answer: B**

**Explanation:** Documented = 600; total estimated = 840; coverage = 600 ÷ 840 ≈ 71%. Option A forgets the denominator also grows. This tests the "moving denominator" pattern common in governance metrics — progress can look faster than it really is if the estate keeps growing beneath it.

**Question 11 (hard) — Ratio reasoning on stewardship workload**

Best practice recommends no more than 25 data assets per data steward. There are 6 stewards and 480 catalogued assets, expected to reach 600 within a year. How many additional stewards must be recruited to comply with the guidance at 600 assets?

A) 6
B) 18
C) 24
D) 12

**Correct answer: B**

**Explanation:** Stewards needed at 600 = 24; additional = 24 − 6 = 18. Option C is the total needed, not the additional number. This tests re-reading the final clause of the question.

**Question 12 (hard) — Maturity score movement**

Data maturity is assessed across five dimensions, scored 1–5: Governance & ownership 2→3; Data quality 2→3; Metadata management 1→2; Data literacy 2→2; Risk & compliance 3→4. The improvement plan targeted a mean score of 3.0 this year. By how much did the actual mean fall short of the target, and which single dimension, if raised by one level, would have exactly achieved the target mean?

A) Shortfall 0.2; raising any one dimension by one level would achieve it
B) Shortfall 0.4; no single dimension could achieve it
C) Shortfall 0.2; only Data literacy would achieve it
D) Shortfall 0.6; raising Metadata management by two levels would be needed

**Correct answer: A**

**Explanation:** This year's mean = 2.8; shortfall = 0.2. Raising any single dimension by one level adds 1 to the total, giving exactly 3.0. Option C is the trap: arithmetic on a mean is indifferent to which dimension contributes the extra point. This tests recognising that a mean target can be met by any qualifying change, independent of which dimension is chosen.

**Question 13 (hard) — Interpreting a breach impact table**

A standard was breached when an extract was shared without agreed field-level redactions. Remediation costs: recall and secure deletion confirmations, £45 per recipient, 38 recipients; re-issue of corrected extract, £120 flat; additional monitoring, £0.85 per record per month, 5,200 records for 3 months. What is the total remediation cost?

A) £15,090
B) £6,090
C) £17,490
D) £14,970

**Correct answer: A**

**Explanation:** £1,710 + £120 + £13,260 = £15,090. This tests writing each line's subtotal, then summing once — the calculation behind analysing the impact of a breached standard.

**Question 14 (moderate) — Percentage of a percentage**

60% of staff have completed data literacy training. Of those trained, 85% pass a follow-up knowledge check. What percentage of all staff are both trained and passed?

A) 45%
B) 51%
C) 85%
D) 25%

**Correct answer: B**

**Explanation:** 0.60 × 0.85 = 51%. Option C confuses the pass rate among the trained with the rate among everyone. This tests chained percentages in a funnel — the rule is always multiply the stage rates.

**Question 15 (hard) — Comparing improvement options per pound**

A failing dataset causes £48,000 of annual rework. Option 1: automated validation, £18,000/year, eliminates 70% of rework. Option 2: quarterly manual cleansing, £9,000/year, eliminates 40% of rework. Which option delivers the greater net annual benefit, and which delivers the greater benefit per pound spent?

A) Option 1 on both measures
B) Option 2 on both measures
C) Option 1 on net benefit; Option 2 on benefit per pound
D) Option 2 on net benefit; Option 1 on benefit per pound

**Correct answer: C**

**Explanation:** Option 1 net = £15,600, £1.87 per pound. Option 2 net = £10,200, £2.13 per pound. Option 1 wins on absolute net benefit; Option 2 wins on efficiency. This tests holding two distinct comparisons simultaneously and recognising that the "right" answer depends on which criterion the organisation cares about.

**Question 16 (moderate) — Reading a stacked figure correctly**

Of 1,200 data-related incidents logged this year, 55% were data quality issues, 30% access control issues, and the remainder "other". Of the access control issues, one third involved personal data. How many access control incidents involved personal data?

A) 360
B) 120
C) 180
D) 132

**Correct answer: B**

**Explanation:** Access control incidents = 360; one third = 120. This tests translating stacked percentage language ("of the..., one third...") into an ordered calculation.

### Administration tips

- **Score for whether a candidate recomputes the base** rather than answering the neighbouring question (total versus additional, share with versus share without).
- **Watch for whether a candidate writes subtotals down** on multi-line totals.
- **Note whether a candidate recognises a "moving denominator"** and recomputes both parts.
- **Note whether a candidate distinguishes percentage points from percent.**
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.

### Common pitfalls to watch for when scoring

- **Rewarding an answer that misreads table labels or units.**
- **Crediting a percentage change divided by the wrong base.**
- **Missing when a candidate answers the neighbouring question** rather than what was actually asked.
- **Rewarding over-calculation** where an estimate would identify the answer faster, or an estimate accepted where options are close.
- **Letting a time-sink question distort the overall picture.**

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses and draws correct conclusions from written material of the kind this role deals with every day: dense policy documents, data standards, sharing agreements, audit findings, stakeholder emails, and strategy papers. The defining discipline of the format is fact-based logic: answer strictly from the text provided, setting aside professional expertise about what a policy "probably" means or "should" say.

Typical format: a passage followed by statements to judge as True (the passage logically supports it), False (the passage logically contradicts it), or Cannot Say (insufficient information). Some questions are multiple-choice comprehension. Timing is tight, typically less than a minute per question.

Verbal reasoning is arguably the single most job-relevant assessment for a governance role, because governance is the disciplined reading and writing of rules. Developing processes, operational policies and standards means a policy that says something subtly different from its author's intent becomes a compliance problem someone must untangle. Monitoring compliance means reading what a team actually did against what the standard actually says.

### How this assessment maps to the role

- **Precise rule extraction** maps to **Data standards** and **Data governance** — determining exactly what a policy requires, permits, and prohibits.
- **Distinguishing stated fact from inference** maps to **Enabling and informing risk-based decisions** — advice to risk owners must separate what the evidence says from what is suspected.
- **Reading stakeholder correspondence accurately** maps to **Stakeholder relationship management** and **Communicating between the technical and non-technical**.
- **Comprehending compliance and audit text** maps to **Data management** and the duty to analyse the impact of a breached standard.
- **Judging tone and emphasis in strategy documents** maps to **Strategic thinking**.
- **Ethics and privacy language** maps to **Data ethics and privacy**.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Passage 1 — Data retention policy extract**

> "All records containing personal data must be assigned a retention period from the corporate retention schedule at the point of creation. Records whose retention period has expired must be reviewed by the information asset owner before disposal; disposal without such review is permitted only where the record belongs to a category the schedule marks as 'routine', in which case automated deletion may proceed. Retention periods may be extended beyond the schedule only where a litigation hold or a public inquiry notice applies. Nothing in this policy overrides the statutory rights of data subjects, including the right to erasure where it applies."

**Question 1 (easy) — True / False / Cannot Say**

Statement: "Under the policy, some records may be deleted automatically without review by the information asset owner."

A) True
B) False
C) Cannot Say

**Correct answer: A (True)**

**Explanation:** The passage explicitly creates a class of records ("routine") that may be automatically deleted without review. This tests pointing to the exact clause that supports the answer.

**Question 2 (moderate) — True / False / Cannot Say**

Statement: "A team may extend a record's retention period beyond the schedule if a senior manager approves the extension."

A) True
B) False
C) Cannot Say

**Correct answer: B (False)**

**Explanation:** Retention may be extended "only where a litigation hold or a public inquiry notice applies" — "only" makes the two listed grounds exhaustive, so senior manager approval is excluded. This tests catching a restrictive word that converts silence about alternatives into prohibition of alternatives.

**Question 3 (moderate) — True / False / Cannot Say**

Statement: "The corporate retention schedule sets a seven-year retention period for financial records."

A) True
B) False
C) Cannot Say

**Correct answer: C (Cannot Say)**

**Explanation:** The passage confirms a schedule exists but says nothing about specific periods for financial records. This tests resisting a plausible-feeling figure the text does not support — the pitfall the format is built around.

**Question 4 (hard) — Multiple choice application**

A record containing personal data has passed its scheduled retention period. It is in a category the schedule marks as "routine". A public inquiry notice applies to the programme it belongs to. According to the passage, what should happen?

A) Automated deletion may proceed, because the record is routine
B) The record's retention is extended; it must not be disposed of while the inquiry notice applies
C) The information asset owner must review it, then dispose of it
D) The data subject's right to erasure requires immediate deletion

**Correct answer: B**

**Explanation:** The routine clause would normally allow automated deletion, but the extension clause overrides it once a public inquiry notice applies. This tests ranking layered rules with exceptions-to-exceptions: general rule → carve-out → override.

**Passage 2 — Email from a service manager**

> "Hi — following up on our conversation at the data owners' forum. My team is under real pressure to launch the new grants portal by the end of September. We've been told we can't go live until the data sharing agreement with the payments provider is signed off, and that sign-off is apparently waiting on your team's review of the data flows. I want to be clear that we value the governance process, and the last thing I want is another incident like March. But if the review can't be completed within two weeks, I'll have to escalate to the programme board, because the launch date is a ministerial commitment. Can we meet this week to agree a way forward?"

**Question 5 (easy) — True / False / Cannot Say**

Statement: "The service manager states that the portal launch date is a ministerial commitment."

A) True
B) False
C) Cannot Say

**Correct answer: A (True)**

**Explanation:** Stated directly. This tests confirming a claim was made, not whether it is independently accurate.

**Question 6 (moderate) — True / False / Cannot Say**

Statement: "The data governance team's review of the data flows is behind schedule."

A) True
B) False
C) Cannot Say

**Correct answer: C (Cannot Say)**

**Explanation:** The email reports the review is "apparently" outstanding, but establishes nothing about its planned schedule. This tests holding "not yet finished" and "behind schedule" as distinct claims.

**Question 7 (moderate) — True / False / Cannot Say**

Statement: "There was a data-related incident in March."

A) True
B) False
C) Cannot Say

**Correct answer: A (True)**

**Explanation:** "Another incident like March" presupposes a March incident — a legitimate textual inference from presupposition, not imported outside knowledge. This tests distinguishing inferences licensed by the wording from facts imported from beyond the text.

**Question 8 (hard) — Multiple choice comprehension**

Which of the following best characterises the service manager's position?

A) They reject the need for governance review and demand immediate sign-off
B) They accept the governance process but signal escalation if the review exceeds two weeks, and propose a meeting
C) They ask the governance team to accept accountability for the March incident
D) They request that the ministerial commitment be renegotiated

**Correct answer: B**

**Explanation:** The email affirms the process, sets a conditional escalation, and proposes a meeting — all three captured by option B. This tests summarising a stakeholder's position accurately: pressure, concession, and proposal together.

**Passage 3 — Internal audit finding**

> "The audit examined 60 data sharing arrangements active during the financial year. Of these, 14 lacked a documented lawful basis at the time of inspection, although in 9 of the 14 cases a lawful basis was documented retrospectively before the audit concluded. The audit found no evidence that data was shared unlawfully; however, the absence of contemporaneous documentation prevents the organisation from demonstrating compliance, contrary to the accountability principle. We rate this finding as 'moderate' and recommend that the data governance team introduce a pre-sharing checklist, with completion monitored quarterly and reported to the Information Governance Board."

**Question 9 (easy) — True / False / Cannot Say**

Statement: "At the time of inspection, fewer than a quarter of the examined arrangements lacked a documented lawful basis."

A) True
B) False
C) Cannot Say

**Correct answer: A (True)**

**Explanation:** 14 of 60; a quarter of 60 is 15, so 14 is fewer than a quarter. This tests reading embedded arithmetic as carefully as the words.

**Question 10 (moderate) — True / False / Cannot Say**

Statement: "The audit found that data was shared unlawfully in five cases."

A) True
B) False
C) Cannot Say

**Correct answer: B (False)**

**Explanation:** "The audit found no evidence that data was shared unlawfully" directly contradicts the statement. This tests distinguishing a demonstrability failure (accountability) from a substantive failure (unlawful processing).

**Question 11 (hard) — True / False / Cannot Say**

Statement: "The audit recommends that the data governance team report quarterly to the Information Governance Board on completion of a pre-sharing checklist."

A) True
B) False
C) Cannot Say

**Correct answer: A (True)**

**Explanation:** "Monitored quarterly and reported to the Information Governance Board" attaches the quarterly cadence to the monitoring-and-reporting cycle. This tests tracking what each modifier modifies in a compound clause.

**Question 12 (moderate) — Multiple choice comprehension**

What is the audit's central concern?

A) Data was shared with organisations that had no right to receive it
B) The organisation cannot demonstrate compliance because documentation was not created at the time of sharing
C) The Information Governance Board failed to monitor data sharing
D) Retrospective documentation is prohibited and the nine late cases must be reversed

**Correct answer: B**

**Explanation:** The pivot sentence restates almost verbatim as option B. This tests identifying the load-bearing sentence in a finding.

**Passage 4 — Data strategy extract**

> "Our data strategy rests on the principle that data is a shared organisational asset rather than the property of individual teams. Over the next three years we will prioritise improving the quality of our most critical data assets ahead of expanding our analytical tooling, on the grounds that better tools applied to unreliable data multiply cost without multiplying insight. Every directorate will nominate data stewards, and stewardship duties will be recognised in role descriptions and performance objectives. We recognise that this represents a cultural change, and that cultural change cannot be mandated by policy alone; it must be led, modelled and reinforced."

**Question 13 (moderate) — True / False / Cannot Say**

Statement: "The strategy commits to expanding analytical tooling within three years."

A) True
B) False
C) Cannot Say

**Correct answer: C (Cannot Say)**

**Explanation:** "Ahead of" establishes relative ordering, not a commitment within the three-year window. This tests recognising that prioritisation language implies sequence, not commitment.

**Question 14 (hard) — Multiple choice comprehension**

Which statement best captures the strategy's reasoning for sequencing quality before tooling?

A) Analytical tools are too expensive to procure in the current spending period
B) Applying better tools to unreliable data increases cost without a matching increase in insight
C) Directorates lack the data literacy to use advanced tools
D) The organisation's tooling is already best in class

**Correct answer: B**

**Explanation:** The passage's own stated reasoning matches option B; the others each supply a plausible real-world rationale the text never gives. This tests the multiple-choice analogue of Cannot Say discipline: the right answer is the reason the author states.

**Passage 5 — Data ethics guidance extract**

> "Before any new use of existing data is approved, teams must complete an ethics screening questionnaire. Where the screening identifies a potential impact on individuals or groups, the proposal must be referred to the ethics advisory group, whose advice is not binding but must be recorded alongside the approval decision. Approvers may depart from the group's advice only with written reasons. The screening questionnaire is not required where the new use is limited to producing aggregate statistics from which no individual can be identified."

**Question 15 (moderate) — True / False / Cannot Say**

Statement: "The ethics advisory group can veto a proposed new use of data."

A) True
B) False
C) Cannot Say

**Correct answer: B (False)**

**Explanation:** "Advice is not binding" positively rules out a veto. This tests recognising that a claim is False, not merely unstated, when a passage positively excludes it.

**Question 16 (moderate) — True / False / Cannot Say**

Statement: "A team producing anonymous aggregate statistics from existing data must still complete the ethics screening questionnaire."

A) True
B) False
C) Cannot Say

**Correct answer: B (False)**

**Explanation:** The final sentence creates an explicit exemption for exactly this case. This tests reading an exemption's conditions literally, including its scope ("limited to", "no individual can be identified").

### Administration tips

- **Score for whether a candidate distinguishes False (contradicted) from Cannot Say (silent).**
- **Watch for whether a candidate catches restrictive words** — "only", "must", "unless", "all" — that carry legal weight.
- **Note whether a candidate quarantines outside expertise**, citing the exact clause supporting an answer.
- **Note whether a candidate holds "not stated" (Cannot Say) apart from "excluded" (False).**
- **Keep timing consistent** across candidates for this level.

### Common pitfalls to watch for when scoring

- **Rewarding an answer drawn from professional knowledge** rather than the passage — the number-one cause of lost marks for experienced practitioners.
- **Missing when a candidate confuses likelihood with fact.**
- **Crediting an answer that misses a restrictive word**, converting a False into an apparent Cannot Say or vice versa.
- **Missing when a candidate treats silence as denial** rather than as Cannot Say.
- **Rewarding an answer built from the world instead of the text**, especially on comprehension items.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skill and professional conduct by presenting realistic workplace dilemmas and asking how they would respond. There is usually no single objectively right answer — several responses may seem reasonable, and the assessment measures how closely the candidate's choices align with the values and behaviours the role demands. For a data governance manager in UK government, those values are well documented: putting user needs first, transparency, collaboration across disciplines, accessibility and inclusion, proportionate risk management, and the Civil Service values of integrity, honesty, objectivity, and impartiality.

Typical format: a scenario drawn from the role, followed by three to five possible actions, asking for the most effective and least effective, or a ranking/rating. Timing is usually generous or untimed.

Governance succeeds or fails on judgement calls made in the room: minimising data risks, advocating for better use and management of data, managing differing stakeholder perspectives, and hosting discussions within a multidisciplinary team with potentially difficult dynamics. None of that can be performed by policy documents alone.

### How this assessment maps to the role

- **Balancing enablement against control** maps to **Data governance** — implementing a framework while remaining a partner to delivery teams, not an obstacle.
- **Escalation judgement** maps to **Enabling and informing risk-based decisions** — knowing when a risk is within tolerance to be managed locally, and when it must go up.
- **Stakeholder handling** maps to **Stakeholder relationship management** and **Communicating between the technical and non-technical**.
- **Ethical reasoning** maps to **Data ethics and privacy**.
- **Championing literacy and culture** maps to **Data literacy improvement**.
- **Strategic patience** maps to **Strategic thinking**.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — The unowned critical dataset**

Cataloguing data assets reveals a dataset used in statutory reporting with no assigned owner. Two directorates each insist the other should own it, and the disagreement has lasted three weeks. Choose the MOST and LEAST effective actions.

A) Assign ownership to the directorate that uses the dataset most, notify both, and record the decision in the RACI matrix as final
B) Convene a short meeting with both directorates, present the risks of continued non-ownership, propose ownership criteria (creation, primary use, ability to maintain quality), and seek agreement — escalating with a recommendation if no agreement is reached by a set date
C) Leave the dataset unowned but add it to the risk register so the exposure is at least visible
D) Take ownership of the dataset within the governance team, since it is best understood there

**Most effective: B. Least effective: D.**

**Explanation:** Option B assigns ownership through stakeholders rather than to them: criteria-based, time-boxed, with a defined escalation path. Option A is decisive but unilateral, tending to produce owners who ignore their duties. Option C converts an unresolved problem into a documented unresolved problem. Option D is least effective because it structurally undermines the framework the role exists to build — confusing second-line assurance with first-line accountability, and teaching directorates that resistance transfers work upward.

**Question 2 (easy) — The literacy request**

A service team repeatedly sends basic questions about what their own data means, becoming a significant drain on time. Choose the MOST and LEAST effective actions.

A) Continue answering promptly — being helpful builds goodwill for the governance programme
B) Stop responding, so the team learns to find answers themselves
C) Answer the current question, then work with the team to create a business glossary and data dictionary for their service, offering a short training session so they can self-serve in future
D) Forward the questions to the team's line manager and ask them to address the capability gap

**Most effective: C. Least effective: B.**

**Explanation:** Option C resolves the immediate need and converts a recurring dependency into capability. Option A is kind but builds permanent dependency. Option D escalates a solvable teaching moment prematurely. Option B is least effective: it abandons colleagues without notice, and the team may guess at meanings and embed data errors — the outcome the role exists to prevent.

**Question 3 (moderate) — The two-week ultimatum**

(Recall the email from the verbal section.) A service manager needs a data-flow review completed within two weeks or a ministerial launch commitment is at risk, and has signalled escalation to the programme board. The standard review takes four weeks, and the team is at capacity. Choose the MOST and LEAST effective actions.

A) Hold the four-week standard: quality reviews cannot be compressed, and the programme should have engaged earlier
B) Meet the service manager this week; triage the review to prioritise the highest-risk flows (personal data and external sharing) for completion within two weeks, with the remainder completed post-launch under documented conditions and a named owner for residual risk
C) Skip the review this once, given the ministerial commitment, and rely on the payments provider's own assurance processes
D) Ask the service manager to escalate to the programme board now, so the board can decide whether the review is needed

**Most effective: B. Least effective: C.**

**Explanation:** Option B is risk-based governance in action: it protects what matters most inside the deadline, makes residual risk explicit and owned, and keeps the relationship collaborative. Option A is rigid and invites the escalation. Option D outsources the candidate's own professional judgement. Option C is least effective: it abandons the control entirely at the moment of maximum risk and sets a precedent that ministerial pressure dissolves governance.

**Question 4 (moderate) — The quiet breach**

A routine compliance check reveals that, three weeks ago, an analyst emailed an extract containing 2,000 citizens' personal data to their own personal email account "to work on at home over the weekend". The data appears not to have gone further, and the analyst is cooperative and apologetic. Choose the MOST and LEAST effective actions.

A) Since no harm appears to have resulted, remind the analyst of the policy, note it informally, and move on
B) Report the incident through the organisation's data incident process immediately so it can be assessed against breach-notification requirements; support containment (verified deletion from the personal account); treat the analyst without blame while being clear the process must run; and examine whether a control or training gap made the workaround attractive
C) Report the analyst to their line manager and recommend disciplinary proceedings to deter others
D) Instruct the analyst to delete the email and confirm in writing that they have done so, closing the matter with an audit trail

**Most effective: B. Least effective: A.**

**Explanation:** Option B follows the incident process, which exists precisely so individual managers do not privately adjudicate breaches, and pairs accountability with a just-culture response. Option D contains but conceals, depriving the organisation of its legal assessment and learning. Option C teaches the workforce to hide the next incident. Option A is least effective because it makes the candidate personally complicit in non-reporting — an undocumented, unassessed personal-data breach known to the governance manager is a governance failure squared.

**Question 5 (moderate) — The vanity metric**

A senior leader asks for the data governance programme to be presented to the executive board and suggests leading with "the 95% catalogue completion figure — it tells a great story". The 95% covers only one directorate; organisation-wide completion is 61%. Choose the MOST and LEAST effective actions.

A) Present the 95% figure as suggested — the senior leader knows the audience and sponsorship matters
B) Present both figures with clear labels: the 95% as evidence the approach works in the pilot directorate, and the 61% as the honest organisation-wide baseline with a trajectory for improvement, agreeing this framing with the senior leader beforehand
C) Refuse to present rather than risk misleading the board
D) Present the 61% only, since the organisation-wide figure is the only honest number

**Most effective: B. Least effective: A.**

**Explanation:** Option B is honest and persuasive — labelling the 95% truthfully as pilot-scope preserves both integrity and sponsor relationship. Option D discards legitimate good news. Option C forfeits attention the programme needs. Option A is least effective: presenting a directorate figure as if organisational misleads the accountable board and breaches objectivity and honesty when the true figure surfaces.

**Question 6 (moderate) — The enthusiastic AI pilot**

A team excitedly reports uploading citizen correspondence into a commercial generative AI tool to draft summaries, inviting the candidate to see the productivity gains. No assessment of the tool has been done; the correspondence includes personal data. Choose the MOST and LEAST effective actions.

A) Ask them to pause use for citizen data immediately while fast-tracking an assessment (data flows, provider terms, DPIA screening); acknowledge the genuine value demonstrated; and work with them to find a compliant route — an approved tool, anonymised inputs, or an internal alternative
B) Report the team for unauthorised processing and require them to certify the practice has stopped
C) Allow the pilot to continue while the assessment proceeds, since interrupting it would discourage exactly the innovation the data strategy wants
D) Advise informally to be careful about what is uploaded, and revisit when the organisation publishes AI guidance

**Most effective: A. Least effective: C.**

**Explanation:** Option A pairs a necessary stop (personal data flowing to an unassessed external processor is a live exposure) with genuine engagement with the innovation. Option B achieves the stop at maximum relational cost. Option D offers no real control. Option C is least effective because it inverts the risk logic — permitting known unlawful-risk processing to continue in the name of innovation is the judgement failure the scenario is probing.

**Question 7 (hard) — The resistant data owner**

A director formally holds the Information Asset Owner role for a critical dataset but delegates everything, skips governance boards, and has not completed owner training. Data quality issues in their asset are now affecting two other services. Choose the MOST and LEAST effective actions.

A) Raise the pattern at the next governance board, naming the directorate's non-engagement in the minutes so accountability is transparent
B) Request a one-to-one with the director; bring evidence of the cross-service impact framed in terms of their objectives and risks; ask what makes the duties hard to discharge and agree a workable model (a trained deputy with real authority, tailored briefing instead of standard training); and set a review point, being candid that continued non-engagement would have to be escalated to the SIRO
C) Work around the director by dealing with their delegate for all practical purposes and quietly updating the RACI to match reality
D) Escalate directly to the SIRO now, since the director has had ample opportunity to engage

**Most effective: B. Least effective: C.**

**Explanation:** Option B is evidence-led, genuinely curious about blockers, flexible about the how while firm about the what, and honest about the escalation consequence. Option D is premature as a first substantive move but defensible soon after. Option A performs accountability theatre before private engagement. Option C is least effective: it formally rewrites accountability downward, exactly inverting the ownership model, and leaves an indefensible accountability gap when a serious incident hits.

**Question 8 (hard) — The conflicting stakeholder demands**

Legal advises that a dataset must be minimised aggressively to reduce privacy risk. The analytics team argues the same fields are essential for a fraud-detection model with proven public value. Both cite the governance framework and have reached deadlock, each asking for a ruling in their favour. Choose the MOST and LEAST effective actions.

A) Rule in favour of legal — privacy risk carries regulatory consequences, and fraud analytics can proceed on reduced data
B) Rule in favour of analytics — fraud detection protects public money, which is the stronger public interest
C) Convene both parties; reframe from positions to interests (what privacy risk is legal actually managing; which fields drive model performance); explore middle-ground designs — pseudonymisation, field-level retention limits, aggregation, access controls; and if genuine residual conflict remains, take a worked options paper with a recommendation to the appropriate risk owner for a documented decision
D) Ask each side to submit written positions and pass both to the SIRO to decide

**Most effective: C. Least effective: D.**

**Explanation:** Option C recognises most minimisation-versus-utility deadlocks are false binaries, and the endgame — a documented, risk-owned decision if conflict genuinely remains — respects proper decision ownership. Options A and B each ratify one side's framing without testing it, spending the neutrality that makes arbitration possible. Option D is least effective: it forwards the deadlock upward without analysis, options or recommendation — unprocessed escalation, not wrong escalation.

**Question 9 (hard) — The maturity assessment nobody wants to hear**

A first organisation-wide data maturity assessment scores the organisation lower than its peers and lower than senior leadership publicly claimed last year. A head of profession hints that the report "could be socialised more gently" — perhaps dropping the peer comparison. Choose the MOST and LEAST effective actions.

A) Publish the report as drafted to all staff simultaneously, so no one can accuse the programme of softening findings
B) Drop the peer comparison as hinted; the absolute scores still show the position and the improvement plan is unchanged
C) Keep the findings intact — including the comparison — but work with the head of profession on sequencing and framing: brief affected leaders before wide release, pair every low score with its improvement action and the benefits of closing the gap, and position the baseline as the foundation the strategy builds on
D) Share the report only with the leaders whose areas scored lowest, avoiding wider embarrassment

**Most effective: C. Least effective: B.**

**Explanation:** Option C distinguishes softening the message (legitimate communication craft) from softening the findings (integrity failure), keeping every finding while exercising real communication skill. Option A confuses integrity with insensitivity. Option D fragments the evidence base. Option B is least effective: removing the analytically legitimate comparison because it is uncomfortable subordinates evidence to reputation.

**Question 10 (hard) — The retention purge under pressure**

A cost-reduction programme demands rapid deletion of legacy data to cut storage spend, with a target date four weeks away. Review of the plan finds the deletion list includes datasets with unexpired statutory retention periods, and one dataset subject to an active subject access request. The programme director says the target "has already been announced". Choose the MOST and LEAST effective actions.

A) Support the programme's goal explicitly, then supply a corrected deletion list: proceed at pace on the (large) compliant portion, hold back the statutory-retention and SAR-affected datasets with the legal grounds documented, and give the director a defensible line for the announcement variance — offering alternatives such as cheaper archive tiers for the held-back data
B) Object to the entire programme until a full retention review of every dataset is complete
C) Allow the deletion to proceed as announced — storage costs are real, the announcement is made, and retention rules have flexibility in practice
D) Email concerns to the programme director so they are on record, and take no further action unless asked

**Most effective: A. Least effective: C.**

**Explanation:** Option A protects the two legally immovable categories while actively helping the programme succeed — most of the savings, on time, plus alternatives for the remainder. Option B over-blocks a legitimate objective. Option D changes nothing and abandons the data subjects. Option C is least effective: an announcement is not a lawful basis for deletion, and destroying SAR-relevant data converts a storage project into a regulatory incident.

### Administration tips

- **Score for whether a candidate's response solves the immediate problem, addresses the underlying cause, and preserves the relationship** — the "both/and" pattern the strongest answers share.
- **Watch for whether a candidate's escalation logic is calibrated** — neither too early (avoiding responsibility) nor too late (sitting on a live risk).
- **Note whether a candidate protects the interests of the people the data is about**, who are never in the room.
- **Note whether a candidate answers as a manager with a framework and escalation routes**, rather than personally absorbing others' duties or merely recording concerns.
- **Because these scenarios reward considered, professional judgement**, allow generous or untimed conditions.

### Common pitfalls to watch for when scoring

- **Rewarding the idealistic option over the effective one** — "refuse to present", "object until everything is reviewed" sound virtuous but are often less workable.
- **Crediting a passive option** — recording, forwarding, monitoring or awaiting guidance while a risk continues.
- **Missing when a candidate ignores organisational culture and values** — collaboration, transparency, and user focus are presumed in this context.
- **Missing when a candidate solves today at tomorrow's expense** — waiving a review or accepting a vanity figure relieves immediate pressure while planting the next incident.
- **Missing when a candidate over-escalates or under-escalates** — passing an unprocessed dispute upward is as weak as sitting on a breach.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a data governance manager: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement.

The cognitive section tested checking catalogue entries against exact thresholds, reasoning through RACI logic and layered policy rules, and prioritising when a potential breach, a statutory deadline and a quality dip land at once. The numeric section tested quality scorecards, expected-loss risk arithmetic, cost-benefit cases, coverage projections with moving denominators, and the distinction between percentage points and per cent. The verbal section tested disciplined reading — holding the line at "Cannot Say" when the words are not there, and catching the "only" that turns silence into prohibition. The situational judgement section tested judgement in the situations that define the job: unowned datasets, two-week ultimatums, quiet breaches, vanity metrics, resistant owners, and deletion programmes in a hurry.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can reason precisely under pressure, read policy and audit text for exactly what it does and does not establish, and make governance judgement calls that balance enablement against control — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
