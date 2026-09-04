# Data architect - Psychometric Assessments

## Introduction

This document is written for you: an assessor evaluating a candidate for data architect in the UK Government Digital and Data profession. Whether you are a line manager, a panel member, or a reviewer, this guide gives you a structured, job-specific psychometric assessment you can administer fairly and consistently for hiring, promotion, or internal benchmarking decisions.

A psychometric assessment is a structured, standardised exercise that measures how a candidate thinks and how they make decisions. It is not a test of trivia or memory. Instead, it focuses on the mental processes that genuinely predict success in a role: spotting patterns and errors, reasoning with numbers, drawing accurate conclusions from written material, and exercising sound judgement in realistic workplace situations. For a data architect, these skills map directly onto the day-to-day work: designing and maintaining data models, analysing source systems, keeping metadata repositories accurate, checking compliance with data standards, and communicating insights to both technical and non-technical colleagues.

This document is organised into four main assessment sections, each of which follows the same shape:

- **Workplace job-specific cognitive assessment** - pattern recognition, logical deduction, error checking, prioritisation, and problem solving using the artefacts a data architect really handles: data models, data dictionaries, metadata repositories, and integration mappings.
- **Workplace job-specific numeric reasoning assessment** - interpreting tables, percentages, ratios, budgets, capacity figures, and performance metrics drawn from data architecture work.
- **Workplace job-specific verbal reasoning assessment** - reading dense role-relevant passages such as data policies, standards, and stakeholder emails, then answering True / False / Cannot Say and comprehension questions.
- **Workplace job-specific situational judgement assessment** - realistic workplace dilemmas involving the role's real stakeholders, with most effective / least effective judgements and full discussion of the reasoning.

Each section explains what the assessment measures, maps it to the specific skills in this role profile, provides a generous set of practice items with worked answers, and closes with administration tips and common pitfalls. The worked answers and explanations are your answer key: hold them back from the candidate until after the assessment, and use them only for scoring and the debrief that follows.

Administer this fairly and consistently. Give every candidate for this role level the same items and the same time limit; brief every candidate the same way; and keep the conditions (room, equipment, breaks) as similar as you reasonably can between candidates.

This is one input among several in a hiring or promotion decision, never the sole basis for one - see the advisory below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment is a targeted psychometric test that measures the exact mental processes needed for the data architect role. Unlike a generic IQ test, it uses practical workplace scenarios and the kinds of data artefacts a data architect genuinely handles - entity-relationship models, data dictionaries, metadata repositories, integration mappings, archive schedules - to predict how effectively a candidate will perform on the job.

Administer this as an online or paper-based, strictly timed test (commonly 15 to 30 minutes), and score responses objectively against the answer key or a benchmark group. If your platform offers a few short, ungraded practice questions first, use them consistently for every candidate so nobody is disadvantaged by unfamiliarity with the format. Consider recording speed and accuracy separately.

For a data architect, the assessment focuses on five overlapping capabilities: pattern recognition (spotting regularities and irregularities in models, naming conventions, and data flows), logical deduction (reasoning correctly from rules, constraints, and dependencies), error checking (finding inconsistencies between artefacts such as a model and its data dictionary), prioritisation (deciding what to tackle first when compliance, delivery, and stakeholder demands compete), and structured problem solving (working through multi-step technical puzzles methodically).

### What it measures

The cognitive dimensions map directly to the skills in this role profile:

- **Data modelling**: logical deduction and pattern recognition are the core of producing, maintaining, and updating data models, and of reverse-engineering data models from a live system. Many items present model fragments or schema clues and ask the candidate to infer structure or spot flaws.
- **Metadata management**: error checking and cross-referencing mirror the duty to use metadata repositories for complex tasks such as data and systems integration impact analysis, and to keep repository information accurate and up to date.
- **Data standards** and **data governance**: rule-application items test whether the candidate can use data policies, processes, and standards effectively, monitor compliance, and analyse the impact if a standard is breached.
- **Data analysis and synthesis**: items built on data profiling outputs and source system analysis test whether the candidate can extract clear insight from messy evidence.
- **Problem management**: multi-step deduction and dependency items reflect the duty to investigate patterns and trends to resolve problems, determine the appropriate resolution, and determine preventative measures.
- **Prioritisation** items echo the duties to design, support, and provide guidance for the upgrade, management, decommission, and archive of data in compliance with data policy - work where sequencing and dependencies matter enormously.
- **Strategic thinking**: some harder items ask the candidate to reason about which option best serves the wider organisational context, not just the immediate technical fix.

### Practice questions

**Question 1 (easy) - Logical deduction from model rules**

An organisation's conceptual data model contains these rules:

- Every Case is owned by exactly one Team.
- A Team may own many Cases.
- Every Document belongs to exactly one Case.
- A Case may have zero or more Documents.

Which one of the following statements must be true?

A. Every Team owns at least one Case.
B. A Document can be linked to two Cases if both Teams agree.
C. If a Document exists, there is exactly one Team that indirectly owns it.
D. Every Case has at least one Document.

**Correct answer: C.**

**Explanation:** Work strictly from the stated cardinalities. A Document belongs to exactly one Case, and that Case is owned by exactly one Team, so the chain Document → Case → Team resolves to exactly one Team: C must be true. A is false because "a Team may own many Cases" does not require it to own any (many includes zero unless stated otherwise, and nothing says every Team owns a Case). B directly contradicts "exactly one Case". D contradicts "zero or more Documents". This item tests whether the candidate resists adding real-world assumptions and reasons only from the rules given, exactly as they would when validating a model against its documented constraints.

**Question 2 (easy) - Error checking a data dictionary**

The candidate is providing input into a data dictionary. Below are four entries. Which entry contains an internal inconsistency?

A. `citizen_id` - Data type: INTEGER - Nullable: No - Description: Unique identifier for a citizen record. Primary key.
B. `date_of_birth` - Data type: DATE - Nullable: Yes - Description: Citizen's date of birth in DD/MM/YYYY format; mandatory for all records.
C. `postcode` - Data type: VARCHAR(8) - Nullable: Yes - Description: UK postcode; optional where the citizen has no fixed address.
D. `record_created` - Data type: TIMESTAMP - Nullable: No - Description: System-generated timestamp set when the record is first inserted.

**Correct answer: B.**

**Explanation:** Entry B says the field is nullable ("Nullable: Yes") yet the description says it is "mandatory for all records". A mandatory field must be non-nullable, so the metadata contradicts itself. A, C, and D are internally consistent: A pairs a primary key with non-nullable, C pairs an optional field with a nullable flag and explains why, and D pairs a system-set field with non-nullable. This is exactly the cross-checking performed when maintaining a metadata repository to ensure information remains accurate and up to date - the flag and the prose must tell the same story, and this item tests whether the candidate spots when they do not.

**Question 3 (moderate) - Pattern recognition in naming conventions**

A team's physical naming standard generates table names as follows:

- `REF_COUNTRY`, `REF_CURRENCY`, `REF_LANGUAGE` (reference data)
- `TXN_PAYMENT`, `TXN_REFUND` (transactional data)
- `STG_PAYMENT_DAILY`, `STG_REFUND_DAILY` (staging loads)

A developer has created four new tables. Which one breaches the pattern?

A. `REF_REGION`
B. `TXN_INVOICE`
C. `STG_INVOICE_DAILY`
D. `INVOICE_ARCHIVE_TXN`

**Correct answer: D.**

**Explanation:** The observable pattern is prefix-first: a three-letter class prefix (`REF_`, `TXN_`, `STG_`) followed by the subject, with staging tables adding a frequency suffix. Options A, B, and C all follow this. Option D puts the subject first and the class code last, breaking the prefix convention - and it also introduces an `ARCHIVE` element that does not appear in the documented classes. Spotting convention drift early is a core part of monitoring compliance with standards in a team and taking action if needed: one wrongly named table quickly becomes ten, and this item tests whether the candidate catches it.

**Question 4 (moderate) - Integration impact analysis**

A metadata repository shows these data flows:

- System A feeds System B and System C.
- System B feeds System D.
- System C feeds System D and System E.
- System E feeds nothing.

The `customer_status` field originates in System A and flows along every feed listed. If System C is decommissioned next quarter with no replacement feeds, which downstream systems could lose at least one source of `customer_status`?

A. D only
B. E only
C. D and E
D. B, D, and E

**Correct answer: C.**

**Explanation:** Trace the graph carefully. System C currently feeds D and E, so removing C affects exactly those two. System D also receives from B (which receives from A), so D loses one of its two sources but not both - it still "loses at least one source", so it counts. System E's only feed is from C, so E loses its sole source entirely. System B is upstream of C and is unaffected. The answer is D and E. This is a miniature version of the data and systems integration impact analysis performed with a metadata repository before any upgrade, decommission, or archive activity - this item tests whether the candidate follows the recorded lineage rather than guessing at it.

**Question 5 (moderate) - Prioritisation under data policy**

It is Monday morning. Four items are in the queue:

1. A compliance report due Friday showing that an unsupported legacy database still holds personal data that data policy required to be archived last month.
2. A request from a delivery team for guidance on modelling a new entity, needed before their design review on Wednesday.
3. A routine metadata repository update reflecting last week's schema changes.
4. An invitation to explore a new data catalogue tool a vendor has offered to demonstrate "sometime soon".

Which is the most defensible order of attention?

A. 2, 1, 3, 4
B. 1, 2, 3, 4
C. 3, 1, 2, 4
D. 4, 1, 2, 3

**Correct answer: B.**

**Explanation:** Item 1 combines the highest risk (personal data held in breach of data policy - an existing compliance failure, not a hypothetical one) with a hard deadline, so it comes first: the role explicitly includes assurance of data solutions and recommendations to ensure compliance, and analysing the impact if a standard is breached. Item 2 has a real deadline (Wednesday) and blocks another team, so it comes second; starting it early in the week is prudent, but it neither carries regulatory risk nor is due before Wednesday. Item 3 matters - an out-of-date repository undermines future impact analysis - but it is routine and has no fixed deadline. Item 4 is genuinely valuable (data innovation is one of the named skills) but is explicitly non-urgent. Option A wrongly puts a Wednesday deadline ahead of an active compliance breach; C and D promote routine or exploratory work above both deadlines.

**Question 6 (moderate) - Reverse-engineering a model from a live system**

The candidate is reverse-engineering a data model from a live system with no documentation. Profiling reveals:

- Table `APPL` has columns `APPL_ID` (unique, never null), `CIT_ID` (never null, many duplicates), `SCHEME_CD` (12 distinct values across 2 million rows).
- Table `CIT` has `CIT_ID` (unique, never null).
- Every `APPL.CIT_ID` value exists in `CIT.CIT_ID`.

Which modelling conclusion is best supported by this evidence?

A. `APPL` and `CIT` are in a many-to-many relationship.
B. Each citizen may have many applications; each application belongs to one citizen; `SCHEME_CD` is likely a foreign key to a small reference table.
C. `SCHEME_CD` is the primary key of `APPL`.
D. `CIT` is a child of `APPL` because `CIT_ID` appears in both.

**Correct answer: B.**

**Explanation:** `APPL_ID` unique and non-null makes it the natural primary key of `APPL`, ruling out C (12 distinct values across 2 million rows cannot identify rows uniquely). `CIT_ID` unique in `CIT` and duplicated in `APPL`, with full referential containment, is the classic signature of a one-to-many relationship from `CIT` (parent) to `APPL` (child) - which rules out D, which has the direction backwards, and A, which would require a linking table or duplicated pairs in both directions. The low cardinality of `SCHEME_CD` (12 values) is the standard profile of a code referencing a reference/lookup table. This item tests exactly the evidence-led reasoning this role's skill profile describes: undertake data profiling and source system analysis, and reverse-engineer data models from a live system - letting the observed data drive the model, not assumptions.

**Question 7 (moderate) - Metadata repository versus reality**

A metadata repository records that view `V_CASE_SUMMARY` depends on tables `CASE`, `TEAM`, and `DOC`. A developer tells the candidate the view was rewritten two months ago and now also reads `SLA_TARGET`. An impact analysis for changes to `SLA_TARGET`, run from the repository alone, would therefore:

A. Correctly include `V_CASE_SUMMARY`, because repositories update automatically.
B. Omit `V_CASE_SUMMARY`, creating a false negative in the impact analysis.
C. Include `V_CASE_SUMMARY` twice, creating a false positive.
D. Fail to run, because the repository will detect the inconsistency.

**Correct answer: B.**

**Explanation:** The repository does not know about the new dependency on `SLA_TARGET`, so an analysis of "what depends on `SLA_TARGET`?" will silently miss the view - a false negative, the most dangerous kind of impact-analysis error because nothing prompts further investigation. A is wrong because nothing in the scenario says the repository harvests dependencies automatically (and the two-month-old gap proves it did not). C confuses the failure mode: stale metadata here hides a dependency rather than duplicating one. D is wishful thinking - repositories cannot detect what they were never told. The professional lesson this item tests matches the role's skill statement precisely: maintain a metadata repository to ensure information remains accurate and up to date, because impact analysis is only as good as the metadata beneath it.

**Question 8 (hard) - Deduction with modelling constraints**

A model must be designed satisfying all of these business rules:

- Rule 1: An Address is used by one or more Parties.
- Rule 2: A Party has zero or more Addresses.
- Rule 3: For each Party-Address pairing, the organisation must record the date the pairing started and the date it ended.
- Rule 4: A Party must never be recorded with two overlapping pairings for the same Address.

Which design satisfies Rules 1-3, and what does Rule 4 add?

A. A foreign key from Address to Party, with start and end dates on Address; Rule 4 is enforced automatically.
B. A foreign key from Party to Address, with start and end dates on Party; Rule 4 is enforced automatically.
C. An associative (link) entity between Party and Address carrying start and end dates; Rule 4 requires an additional constraint, because a composite key of Party, Address, and start date alone does not prevent overlaps.
D. An associative entity between Party and Address with no attributes; Rule 4 is impossible to enforce in any design.

**Correct answer: C.**

**Explanation:** Rules 1 and 2 describe a many-to-many relationship (an Address used by many Parties, a Party with many Addresses), which A and B cannot represent - a single foreign key on either side forces one end to "exactly one". Rule 3 attaches attributes (start and end dates) to the pairing itself, which is the textbook justification for an associative entity. Rule 4 is the subtle part: making Party + Address + start date the key prevents duplicate identical rows but does not prevent two rows whose date ranges overlap (for example, one pairing from January to June and another from March to December). Preventing overlaps needs an extra constraint - enforced in the database, the application, or a data quality control - and a strong candidate's answer flags that explicitly rather than assuming the key handles it. D gives up too easily: the rule is enforceable, just not by entity structure alone. This item tests whether a candidate can explain distinctions like this clearly, part of the skill to explain the concepts and principles of data modelling.

**Question 9 (hard) - Warehouse load sequencing**

A data warehouse's loads run under these dependency rules:

- Staging loads (S1, S2, S3) can run in parallel and must all finish before any dimension load starts.
- Dimension loads D1 and D2 can run in parallel after staging.
- Fact load F1 requires D1 and D2. Fact load F2 requires D2 only.
- The business intelligence extract E1 requires F1 and F2.

One morning, S2 fails and is rerun successfully, finishing after S1 and S3. Which statement about the remaining schedule is correct?

A. F2 can start as soon as S2 finishes, because it does not depend on D1.
B. D1 and D2 can start once S2 finishes, and F2 can start when D2 finishes even if D1 is still running.
C. E1 can start when F1 finishes, because F1 also covers F2's dependencies.
D. D2 must wait for D1 because dimensions load in numerical order.

**Correct answer: B.**

**Explanation:** Walk the dependency graph. All staging must finish before any dimension starts; once the rerun S2 completes, staging is complete, so D1 and D2 may both start (they are parallel). F2 depends only on D2, so it can begin the moment D2 finishes, regardless of D1's state - which makes B correct and shows why A is wrong (F2 still needs D2, so it cannot start straight after staging). C is wrong because E1 explicitly requires both F1 and F2; F1 finishing tells the reader nothing about F2. D invents a rule the scenario never states - a classic assessment trap and a classic real-world error when reasoning about batch schedules from habit rather than from the documented dependencies. Defining and maintaining the data technology architecture, including business intelligence and data warehouse architecture, means holding exactly this kind of dependency logic clearly in mind, and this item tests whether the candidate can.

**Question 10 (moderate) - Applying archive rules**

An organisation's data policy says: records in the case management system must be archived 2 years after case closure, retained in the archive for a further 5 years, then securely destroyed - unless the case is flagged "legal hold", in which case no archiving or destruction may occur until the flag is removed, at which point the normal clock resumes from where it paused.

A case closed exactly 6 years ago was placed on legal hold 1 year after closure, and the hold was removed 2 years later. What should its status be today?

A. Destroyed
B. In the archive, with about 1 year of retention remaining
C. In the archive, with about 3 years of retention remaining
D. Still in the live system, awaiting archive

**Correct answer: C.**

**Explanation:** Track the archive clock and the pause separately, then lay everything on one timeline. Call the closure date year 0. The archive clock needs 2 years of accumulated running time before the record is archived. It ran from year 0 to year 1 (1 year accumulated), then the legal hold paused it from year 1 to year 3, then it resumed and completed its second year from year 3 to year 4. So the case was archived at calendar year 4. The 5-year archive retention therefore runs from year 4 to year 9. Today is year 6, so the record is in the archive with 3 of its 5 retention years remaining - option C. A fails because destruction is not due until year 9. B miscounts by ignoring the pause and treating the archive date as year 2 (retention year 2 to year 7, leaving 1 year) - the classic error this item is designed to catch. D fails because the accumulated clock passed 2 years back at calendar year 4. This item tests the error-checking discipline this role demands when providing guidance for the management, decommission, and archive of data in compliance with data policy, and rewards a candidate who rebuilds the timeline once, cleanly, before committing to an answer.

**Question 11 (hard) - Decommission dependency ordering**

The candidate is planning the decommission of legacy system L. The constraints are:

- Consumers C1 and C2 currently receive nightly extracts from L.
- C1 can switch to the new platform N only after dataset D has been migrated to N.
- C2 can switch only after C1 has switched, because C2 validates its figures against C1's outputs during parallel running.
- Dataset D cannot be migrated until its metadata (ownership, definitions, lineage) has been completed in the repository.
- L can be switched off only when no consumers depend on it, and its data has been archived per policy.

Which is the earliest valid ordering?

A. Migrate D → complete metadata → switch C1 → switch C2 → archive L's data → switch off L
B. Complete metadata → migrate D → switch C1 → switch C2 → archive L's data → switch off L
C. Complete metadata → migrate D → switch C2 → switch C1 → archive L's data → switch off L
D. Archive L's data → switch off L → complete metadata → migrate D → switch C1 → switch C2

**Correct answer: B.**

**Explanation:** Convert each constraint into a precedence rule: metadata before migration of D; D's migration before C1's switch; C1 before C2; all consumers off L plus archive complete before switch-off. Option B honours every rule in sequence. A reverses the first dependency (migrating D before its metadata is complete). C reverses the C1/C2 order, breaking C2's validation requirement. D switches L off while both consumers still depend on it - the most severe violation. This item tests a method rather than domain knowledge: the candidate need not imagine the systems, only extract the partial order from the text and test each candidate sequence against it. This mirrors real decommission planning, where the role's job is to design, support, and provide guidance for decommission and archive in compliance with data policy, and where a single inverted dependency can interrupt a public service.

**Question 12 (moderate) - Spotting model/dictionary drift**

The logical model shows entity **Payment** with attributes: payment_id, case_id, amount, currency_code, paid_date. The data dictionary lists for the corresponding table: PAYMENT_ID, CASE_ID, AMOUNT, CURRENCY_CODE, PAID_DATE, REFUND_FLAG. The load specification for the finance feed maps six source fields to six target columns, including REFUND_FLAG.

What is the most accurate diagnosis?

A. The dictionary is wrong and REFUND_FLAG should be deleted from it.
B. The model is behind reality: an attribute exists in the implemented table and feed but was never added to the logical model, so the model should be reviewed and updated.
C. The load specification is wrong to map six fields.
D. Nothing is wrong; models never need to show every column.

**Correct answer: B.**

**Explanation:** Two independent artefacts (the dictionary and the load specification) agree that REFUND_FLAG exists and is populated; only the model omits it. When two sources corroborate each other against a third, the lone dissenter is most likely stale - so the model has drifted behind the implementation. A would destroy accurate metadata to match an outdated model, inverting the correction. C contradicts the corroborating dictionary. D is a half-truth used in the wrong place: while conceptual models legitimately omit detail, a logical model that claims to define an entity's attributes should reflect a real, business-meaningful attribute like a refund flag. The remedy this item points to is exactly this role's bread and butter: produce, maintain, and update relevant data models for the organisation's needs, and investigate how the drift happened to determine preventative measures - perhaps a change-control step that requires model sign-off before schema change.

### Administration tips

- **Encourage the candidate to work from their own kind of artefact for orientation, not for the scored items themselves.** A brief warm-up conversation about a real data model alongside its dictionary can settle nerves, but keep the timed, scored items identical for every candidate.
- **Watch for a candidate who externalises dependency graphs.** For sequencing and impact items, a candidate who sketches the arrows (even just A→B→C on paper) is showing good working-memory discipline; note this when marking a borderline answer.
- **Manage the clock consistently.** With 15-30 minutes for the whole test, apply the same time allocation to every candidate, and allow the same policy on skipping and returning to a stalled item.
- **Note whether a candidate reasons strictly from the given rules.** Assessments deliberately punish imported assumptions; a candidate who treats every item like a source system with no documentation - evidence first - is demonstrating exactly the discipline this role needs.
- **Set fair conditions for an experienced candidate.** A candidate who performs integration impact analysis and standards compliance checks for a living may find the format compressed and unfamiliar at first; a brief warm-up item before the scored section helps every candidate perform to their real ability.

### Common pitfalls

- **Crediting real-world assumptions over the stated rules.** The most common candidate error is treating "may have many" as "must have at least one", or assuming systems behave like ones they know; mark against the stated rules, not against real-world plausibility.
- **Missing a reversed dependency direction.** In lineage and foreign-key items, candidates frequently flip parent and child; check this specifically when marking an incorrect answer.
- **Letting one hard multi-stage deduction consume disproportionate session time.** Encourage the candidate to bank easier marks first and return to a stalled item, consistent with how the section is designed to be timed for every candidate.
- **Treating speed and accuracy as interchangeable.** Consider recording them separately, since a rushed, error-strewn performance is a different signal from a slightly slower, careful one.
- **Second-guessing a validated item.** If an option seems ambiguous, mark against the best-supported answer; these items are professionally constructed, and the intended answer follows from the text.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates a candidate's ability to analyse, interpret, and make sound decisions using numerical data of the kind this role genuinely produces. It is emphatically not an abstract mathematics exam: the questions focus on business arithmetic - percentages, ratios, growth rates, budgets, capacity figures, and cost comparisons - applied to realistic data architecture material such as data profiling outputs, storage forecasts, warehouse load statistics, archive schedules, and tooling budgets.

Administer this under a strict time limit (often around 45 to 75 seconds per question across a 20-30 minute test), with data presented in tables, charts, or short numeric narratives. Offer or provide an onscreen calculator consistently for every candidate, because the point is interpretation, not mental arithmetic heroics. The skill being measured is quick, accurate data extraction: finding the right numbers, applying the right operation, and sense-checking the result.

For a data architect in UK government, this matters because numbers permeate the work even though the postholder is not a finance professional. Sizing storage for archives, estimating migration durations, reading data quality percentages from profiling runs, comparing tooling costs, and presenting capacity figures to non-technical stakeholders who will rely on the answer's accuracy are all part of the role.

### What it measures

- **Data analysis and synthesis**: the assessment's core - undertaking data profiling and source system analysis means reading tables of counts, null rates, and distinct values, then presenting clear insights to colleagues. Most items here are profiling tables in miniature.
- **Communicating data**: creating basic visuals and presentations demands that the numbers behind them are right; several items test whether a chart or summary faithfully represents underlying figures, reflecting the awareness that data needs to be aligned to the needs of the end user.
- **Data modelling** and **metadata management**: estimating row counts, growth rates, and integration volumes supports impact analysis and physical design decisions.
- **Data standards** and **data governance (data architect)**: compliance monitoring is often numeric - what percentage of tables meet the standard, how has the breach rate moved, what is the impact if a standard is breached expressed in affected records.
- **Problem management**: investigating patterns and trends to resolve problems frequently means comparing error rates across weeks or systems and quantifying whether a fix worked.
- **Strategic thinking**: cost projections and option comparisons support strategic planning; a strong candidate can explain the strategic context of a number, not just compute it.

### Practice questions

**Question 1 (easy) - Storage growth percentage**

The case management database held 3.2 TB of data at the start of the financial year and holds 4.0 TB at the end. What is the percentage growth over the year?

A. 20%
B. 25%
C. 30%
D. 80%

**Correct answer: B.**

**Explanation:** Percentage growth = (new − old) ÷ old × 100. Increase = 4.0 − 3.2 = 0.8 TB. Then 0.8 ÷ 3.2 = 0.25, so 25%. A common error is dividing by the new value: 0.8 ÷ 4.0 = 20% (option A, the trap). The change should always be divided by the starting value. Growth rates like this feed directly into the capacity planning done when defining and maintaining the data technology architecture, and this item tests whether the candidate uses the right base.

**Question 2 (easy) - Null rate from a profiling run**

Data profiling of the `ADDRESS` table shows 1,250,000 rows, of which the `postcode` column is null in 75,000 rows. What is the null rate for `postcode`?

A. 0.6%
B. 6%
C. 7.5%
D. 16.7%

**Correct answer: B.**

**Explanation:** Null rate = nulls ÷ total rows × 100 = 75,000 ÷ 1,250,000 = 0.06 = 6%. A quick sanity check: 10% of 1,250,000 would be 125,000, and 75,000 is a bit more than half of that, so the answer must be a bit more than 5% - confirming 6%. Option A misplaces the decimal; C confuses 75 with 7.5; D is 75,000 ÷ 450,000-ish, a made-up ratio. Reading null rates accurately is fundamental to undertaking data profiling and source system analysis and presenting clear insights to colleagues, and this item tests that basic fluency.

**Question 3 (moderate) - Deduplication ratio**

The candidate is consolidating citizen records from three legacy systems into a single master data store:

| Source system | Records |
|---|---|
| System Alpha | 480,000 |
| System Beta | 360,000 |
| System Gamma | 240,000 |

After matching and deduplication, the master store contains 810,000 unique records. What percentage of the combined source records were duplicates?

A. 20%
B. 25%
C. 27%
D. 33%

**Correct answer: B.**

**Explanation:** Combined source records = 480,000 + 360,000 + 240,000 = 1,080,000. Duplicates removed = 1,080,000 − 810,000 = 270,000. Percentage = 270,000 ÷ 1,080,000 = 0.25 = 25%. Option C comes from dividing 270,000 by the wrong base; option D from dividing the unique count incorrectly. This item tests a specific habit: total first, difference second, percentage last - and always asking "percentage of what?", because duplicates as a share of the master store (270,000 ÷ 810,000 = 33.3%, option D) is a different, wrong reading of the question. This is exactly the arithmetic behind the migration and integration analyses this role supports.

**Question 4 (moderate) - Data architecture budget shares**

A data platform programme has an annual budget of £1,200,000 allocated as: warehouse infrastructure 45%, integration tooling 25%, metadata and catalogue tooling 15%, training and community 10%, contingency 5%. Mid-year, the metadata tooling allocation is increased by £30,000, funded entirely from contingency. What percentage of the total budget does contingency now represent?

A. 2.5%
B. 3.0%
C. 4.5%
D. 5.0%

**Correct answer: A.**

**Explanation:** Contingency starts at 5% of £1,200,000 = £60,000. It gives up £30,000, leaving £30,000. As a share of the (unchanged) total: 30,000 ÷ 1,200,000 = 0.025 = 2.5%. The total budget does not change because money moved between lines rather than being added, so the denominator stays £1,200,000 - the point option C misses by recomputing metadata's new share (£180,000 + £30,000 = £210,000, which is 17.5%, not asked). This item rewards slow reading of exactly which line and which denominator are wanted, which underpins the ability to support strategic planning in an administrative capacity with confidence.

**Question 5 (moderate) - Nightly load window capacity**

The warehouse's nightly batch window is 6 hours. Current loads process 90 million rows per night at a steady throughput. A new feed will add 36 million rows per night at the same throughput per row. How long will the total nightly load take?

A. 7.2 hours
B. 7.6 hours
C. 8.0 hours
D. 8.4 hours

**Correct answer: D.**

**Explanation:** Current throughput = 90 million rows ÷ 6 hours = 15 million rows per hour. New total volume = 90 + 36 = 126 million rows. Time = 126 ÷ 15 = 8.4 hours. Option A comes from adding 20% (36/180?) incorrectly; C from rounding 126/15 carelessly. The practical insight the item mimics: the new feed pushes the load 2.4 hours past the window, so the architect defining the integration and data warehouse architecture would need to redesign the schedule, parallelise, or renegotiate the window. This item tests a show-the-working discipline (rate first, then total ÷ rate) that keeps multi-step questions safe.

**Question 6 (moderate) - Archive savings**

Live storage costs £900 per TB per year; archive storage costs £150 per TB per year. Data policy allows 12 TB to be moved from live to archive. The archive migration is a one-off project costing £5,400. What is the net saving in the first year?

A. £3,600
B. £5,400
C. £9,000
D. £10,800

**Correct answer: A.**

**Explanation:** Annual saving per TB moved = £900 − £150 = £750. For 12 TB: 12 × £750 = £9,000 per year. First-year net saving = £9,000 − £5,400 (one-off cost) = £3,600. Option C forgets the migration cost; D multiplies 12 × £900 as if archive storage were free. Note also the framing a strong candidate would give stakeholders: from year two the full £9,000 recurs, so the project pays back well - a good example of presenting clear insights to support decisions, and of quantifying the value of the archive work this role guides in compliance with data policy.

**Question 7 (moderate) - Metadata repository coverage**

A metadata repository documents 320 of the estate's 500 datasets. After a focused documentation sprint, coverage rises to 80% of the estate. How many additional datasets were documented during the sprint?

A. 60
B. 80
C. 100
D. 180

**Correct answer: B.**

**Explanation:** Target coverage = 80% of 500 = 0.8 × 500 = 400 datasets. Already documented = 320. Additional = 400 − 320 = 80. Option A is 12% of 500 (a misread of the percentage-point gain: coverage went from 64% to 80%, i.e. 16 points, and 16% of 500 is 80 - consistent). D confuses the undocumented count (180 before the sprint) with the sprint output. Tracking coverage numerically like this is how a candidate would evidence maintaining a metadata repository to ensure information remains accurate and up to date - this item tests whether they compute it correctly.

**Question 8 (hard) - Compound storage growth**

The analytics platform currently stores 8 TB. Data volume grows at 25% per year, compounding annually. The platform's economically sensible ceiling is 16 TB. Will three years of growth breach the ceiling, and what is the volume after three years (to one decimal place)?

A. No - 14.0 TB
B. No - 15.6 TB
C. Yes - 16.4 TB
D. Yes - 17.1 TB

**Correct answer: B.**

**Explanation:** Compound growth multiplies: 8 × 1.25 = 10.0 TB after year one; 10.0 × 1.25 = 12.5 TB after year two; 12.5 × 1.25 = 15.625 ≈ 15.6 TB after year three. That is below 16 TB, so the ceiling is not breached within three years - though only just, which is the strategic insight: the fourth year (15.625 × 1.25 = 19.5 TB) blows through it, so planning should start now. Option A uses simple (non-compounding) growth of 2 TB per year; C and D assume the breach without computing. Distinguishing simple from compound growth is one of the highest-value habits in capacity forecasting for the data technology architecture this role defines and maintains, and this item tests it directly.

**Question 9 (moderate) - Tool licence cost comparison**

The candidate is evaluating two data catalogue tools for a 40-user team:

| | Tool X | Tool Y |
|---|---|---|
| Licence per user per month | £22 | £30 |
| Annual platform fee | £6,000 | £1,200 |

Which tool is cheaper over one year, and by how much?

A. Tool X, by £2,640
B. Tool X, by £960
C. Tool Y, by £960
D. Tool Y, by £2,640

**Correct answer: C.**

**Explanation:** Tool X: 40 users × £22 × 12 months = £10,560, plus £6,000 platform fee = £16,560. Tool Y: 40 × £30 × 12 = £14,400, plus £1,200 = £15,600. Difference = £16,560 − £15,600 = £960 in favour of Tool Y. The per-user price makes Tool X look cheaper (the intended trap), but the platform fee reverses the ranking at this team size. As an exercise in showing awareness of opportunities for innovation with new tools, this item also invites breakeven thinking: X's £8 per-user-per-month saving equals £96 per user per year, so X wins only when (£6,000 − £1,200) ÷ £96 = 50 users or more. Numbers like these are how a data architect turns tool evaluations into clear, defensible recommendations.

**Question 10 (hard) - Quantifying the impact of a standards breach**

A team breached the data standard by loading unvalidated postcodes for six weeks. Profiling shows the affected load inserted 42,000 records per week, of which 8.5% have invalid postcodes. Cleansing costs are estimated at £0.45 per invalid record, and re-validation of the remainder at £0.02 per valid record. What is the estimated total remediation cost (to the nearest £100)?

A. £9,600
B. £11,600
C. £14,300
D. £19,100

**Correct answer: C.**

**Explanation:** Total affected records = 42,000 × 6 = 252,000. Invalid = 8.5% of 252,000 = 0.085 × 252,000 = 21,420 records. Cleansing cost = 21,420 × £0.45 = £9,639. Valid remainder = 252,000 − 21,420 = 230,580 records. Re-validation cost = 230,580 × £0.02 = £4,611.60. Total = £9,639 + £4,611.60 = £14,250.60 ≈ £14,300. Option A stops after the cleansing cost; B applies £0.02 to all records rather than the valid remainder; D applies £0.45 too broadly. This is the arithmetic behind the skill to analyse the impact if a standard is breached - converting a governance failure into a concrete, credible cost that non-technical stakeholders can weigh, and this item tests whether the candidate carries every step through correctly.

**Question 11 (moderate) - Data quality trend**

Weekly failed-validation counts for the citizen data feed over five weeks: 1,840; 1,610; 1,725; 1,380; 1,150. Total records per week are steady at 115,000. By how many percentage points did the failure rate change from week 1 to week 5?

A. Fell by 0.6 percentage points
B. Fell by 0.9 percentage points
C. Fell by 1.6 percentage points
D. Fell by 37.5 percentage points

**Correct answer: A.**

**Explanation:** Week 1 rate = 1,840 ÷ 115,000 = 0.016 = 1.6%. Week 5 rate = 1,150 ÷ 115,000 = 0.01 = 1.0%. Change = 1.6 − 1.0 = 0.6 percentage points. Option D (37.5%) is the relative fall (690 ÷ 1,840), which is a percentage change, not percentage points - the most commonly confused pair of concepts in numeric assessments and in real reporting. Option C mistakes the week 1 rate itself for the change. When presenting clear insights to colleagues about whether a fix is working, a candidate who says "failures fell 0.6 percentage points, a 37.5% relative improvement" is showing mastery of both framings - a hallmark of communicating data well, and this item tests whether they can produce that distinction unprompted.

**Question 12 (hard) - Multi-step profiling table**

A source system analysis produces this profile of four candidate tables for migration:

| Table | Rows | Null key rate | Duplicate rate | Est. cleansing hours per 100k rows |
|---|---|---|---|---|
| CUST | 1,500,000 | 2% | 4% | 3.0 |
| ORDR | 4,000,000 | 0.5% | 1% | 1.5 |
| ADDR | 2,500,000 | 6% | 10% | 4.0 |
| PROD | 500,000 | 1% | 2% | 2.0 |

Cleansing effort applies to all rows. Which table needs the most total cleansing hours, and how many?

A. ORDR - 60 hours
B. ADDR - 100 hours
C. ADDR - 40 hours
D. CUST - 45 hours

**Correct answer: B.**

**Explanation:** Total hours = (rows ÷ 100,000) × hours per 100k. CUST: 15 × 3.0 = 45 hours. ORDR: 40 × 1.5 = 60 hours. ADDR: 25 × 4.0 = 100 hours. PROD: 5 × 2.0 = 10 hours. The maximum is ADDR at 100 hours. The null and duplicate rates are deliberate distractors for this particular item - they explain why ADDR's per-row effort is high, but the computation needs only rows and the rate column. This item tests whether the candidate can ignore decorative columns under time pressure, since real source system analysis always yields more numbers than the decision needs, and synthesis means selecting the ones that matter.

**Question 13 (moderate) - Integration volume ratio**

An interface transmits 3 message types nightly in the ratio 5 : 3 : 2 (case updates : document links : status changes). Last night the interface carried 84,000 messages in total. How many document-link messages were sent?

A. 16,800
B. 25,200
C. 28,000
D. 42,000

**Correct answer: B.**

**Explanation:** Ratio parts total 5 + 3 + 2 = 10. One part = 84,000 ÷ 10 = 8,400 messages. Document links are 3 parts = 3 × 8,400 = 25,200. Option A is 2 parts (status changes), D is 5 parts (case updates), and C is a miscount of parts. Ratio items are quick marks for a candidate who always starts by summing the parts. Message volumes in these proportions are the everyday material of the integration architecture this role defines, and this item tests whether the candidate can apply that knowledge fluently when hosting discussions with delivery teams about interface capacity.

**Question 14 (moderate) - Reading a summary for a stakeholder chart**

The candidate is preparing a basic visual for a governance board showing warehouse query performance. Average query times: last quarter 12.5 seconds, this quarter 9.0 seconds. A colleague's draft slide says "query times improved by 39%". Is the slide right, and what is the correct figure?

A. Yes - 39% is correct
B. No - the improvement is 28%
C. No - the improvement is 35%
D. No - the improvement is 3.5%

**Correct answer: B.**

**Explanation:** Improvement = (12.5 − 9.0) ÷ 12.5 = 3.5 ÷ 12.5 = 0.28 = 28%. The colleague computed 3.5 ÷ 9.0 = 38.9% - dividing the change by the new value instead of the original, which overstates the gain. Option D confuses the absolute change (3.5 seconds) with a percentage. Catching this before the board sees it is precisely the value added when communicating data: the awareness that data needs to be aligned to the needs of the end user includes making sure the headline number is computed correctly, because a board that later discovers an inflated claim will discount the next ten accurate ones. This item tests whether the candidate catches the error rather than the colleague's slide.

**Question 15 (hard) - Migration timeline with contingency**

A data migration must move 18 million records. The tooling migrates 250,000 records per hour, but experience shows 4% of records fail first time and must be re-run once (re-runs succeed and run at the same rate). The programme adds 20% contingency to the computed duration. Migration can only run during a nightly 8-hour window. How many nights should be planned for?

A. 9 nights
B. 10 nights
C. 11 nights
D. 12 nights

**Correct answer: D.**

**Explanation:** Work stepwise. Base volume = 18,000,000 records. Re-runs add 4%: 18,000,000 × 0.04 = 720,000 additional record-passes, so total passes = 18,720,000. Raw duration = 18,720,000 ÷ 250,000 = 74.88 hours. Add 20% contingency: 74.88 × 1.2 = 89.856 hours. Divide by the 8-hour nightly window: 89.856 ÷ 8 = 11.232 nights - and a fraction of a night cannot be booked, so round up to 12. Option A skips both the re-runs and the contingency (72 ÷ 8 = 9); B applies contingency but not re-runs (86.4 ÷ 8 = 10.8, then wrongly rounds down); C computes 11.232 and rounds down instead of up. Two disciplines this item tests: applying every stated adjustment exactly once, and rounding in the direction reality demands - capacity plans round up. This mirrors the planning arithmetic behind the upgrade and migration guidance this role provides.

**Question 16 (moderate) - Weighted average data quality score**

A quarterly assurance report scores three data domains on completeness. The domains differ in size, and the board wants a single estate-wide figure weighted by record volume:

| Domain | Records (millions) | Completeness |
|---|---|---|
| Citizen | 10 | 96% |
| Case | 6 | 88% |
| Finance | 4 | 93% |

What is the volume-weighted average completeness?

A. 92.3%
B. 92.9%
C. 93.0%
D. 95.0%

**Correct answer: C.**

**Explanation:** Weighted average = Σ(weight × value) ÷ Σ(weights). Numerator = (10 × 96) + (6 × 88) + (4 × 93) = 960 + 528 + 372 = 1,860. Denominator = 10 + 6 + 4 = 20. Weighted average = 1,860 ÷ 20 = 93.0%. The simple (unweighted) mean is (96 + 88 + 93) ÷ 3 = 92.3% (option A), the figure a careless report would publish; option B is a near-miss designed to catch rounding guesses, and D cherry-picks something between the two largest domains. The gap between 92.3% and 93.0% looks small, but on 20 million records it represents 140,000 records' worth of difference in the claim being signed off - and taking responsibility for the assurance of data solutions means the published figures must survive scrutiny. This item tests whether the candidate computes exactly rather than estimating when options sit this close together.

**Question 17 (easy) - Decommission cost avoidance**

Running the legacy reporting database costs £4,500 per month in hosting plus £1,500 per month in support. Decommissioning it on schedule at the end of month 4 (of a 12-month financial year) avoids those costs for the remainder of the year. How much does the organisation avoid spending this financial year?

A. £24,000
B. £36,000
C. £48,000
D. £72,000

**Correct answer: C.**

**Explanation:** Combined monthly cost = £4,500 + £1,500 = £6,000. Months avoided = 12 − 4 = 8 (months 5 to 12 inclusive). Avoided spend = 8 × £6,000 = £48,000. Option A uses only the hosting element over the wrong period; B multiplies £6,000 by 6 months, miscounting the remainder of the year; D charges the full 12 months, forgetting the system ran (and cost money) for the first four. Two habits this item tests: combining cost components before multiplying, and counting time periods carefully - "end of month 4" leaves eight billable months, not six and not twelve. Being able to quote a crisp, correct cost-avoidance figure is also one of the most persuasive tools available when making the case for the decommission and archive work this role guides.

### Administration tips

- **Confirm the denominator convention before marking.** "Percentage of what?" separates right from wrong answers far more often than the arithmetic does; check the base a candidate used when reviewing an incorrect response.
- **Provide the same calculator to every candidate.** It removes arithmetic strain but cannot choose the right numbers for the candidate; extracting the right figures and planning the calculation is what is actually being tested.
- **Look for evidence of estimation before precise calculation.** A candidate who visibly estimates ("about a quarter, so around 25%") before computing precisely is demonstrating strong numeric judgement, not skipping a step.
- **Watch pacing across easy and hard items.** Ratio and single-step percentage items take about 30 seconds; multi-step cost items take several minutes - the section is designed for a candidate to bank the quick marks first if the platform allows navigation.
- **Check whether a candidate carries units through their working.** TB, rows, £, hours - carrying units through each step is what prevents the most embarrassing multi-step errors, exactly as it does in real capacity planning, and this is worth noting when marking.

### Common pitfalls

- **Missing table labels and scale qualifiers when marking.** Confusing "per week" with "per month", or missing "in thousands", silently multiplies an answer by the wrong factor; check the candidate's working against the header row and units before marking wrong outright.
- **Missing the percentage-point versus percentage-change confusion.** As Question 11 shows, these differ hugely; this is a specific, teachable error worth flagging when reviewing incorrect answers.
- **Penalising an estimate rather than crediting it.** If options are far apart, an estimate identifies the answer without full computation; this is a mark of numeric fluency, not laziness.
- **Letting one multi-stage cost item consume disproportionate session time.** Encourage the candidate to flag and return, consistent with how the section is designed to be timed for every candidate.
- **Missing the wrong-base error.** Change ÷ original for growth; using the "new value" as the base is the single most common trap in these items, appearing in Questions 1 and 14 above.
- **Under-crediting a candidate who identifies decorative columns.** Real-feeling tables include numbers a candidate does not need; identifying what the question asks before touching the data is itself worth noting positively, just as it would be in a genuine source system analysis.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written material of the kind this role handles every day: data policies, standards documents, governance board minutes, technical guidance, and stakeholder emails. It mirrors the exact reading demands of the work - dense, precise, occasionally ambiguous prose from which the candidate must extract exactly what is stated, no more and no less.

Administer this as a short passage followed by questions answered under time pressure - often less than a minute per question. The dominant format is **True / False / Cannot Say**: a statement is True if the passage supports it, False if the passage contradicts it, and Cannot Say if the passage provides insufficient information either way. Some assessments add multiple-choice comprehension items asking for the best summary, the author's main point, or the correct application of a stated rule. The golden rule the candidate should follow throughout: answer strictly from the text provided, ignoring outside knowledge - even when (especially when) they know the subject well.

This discipline matters intensely for a data architect. Policies and standards are legal-adjacent documents where the difference between "must", "should", and "may" changes what teams are obliged to do; misreading them causes real compliance failures. Equally, the Cannot Say category trains the intellectual honesty this role's assurance work requires: recognising when a document simply does not answer the question being asked of it.

### What it measures

- **Data standards**: using data policies, processes, and standards effectively begins with reading them precisely - and working with subject matter experts to develop standards means noticing where drafted wording fails to say what its authors intend. Most passages here are policy or standard excerpts.
- **Data governance (data architect)**: taking responsibility for the assurance of data solutions and making recommendations to ensure compliance requires distinguishing what a policy actually mandates from what people assume it does; analysing the impact if a standard is breached starts with establishing exactly what the standard says.
- **Communicating between the technical and non-technical**: managing differing stakeholder perspectives often turns on what an email or minute actually said versus what each party remembers. Several questions use stakeholder correspondence.
- **Communicating data** and **data analysis and synthesis**: presenting clear insights includes accurately representing written findings; comprehension items test whether the candidate can identify the main point of a dense report.
- **Metadata management**: definitions in data dictionaries and metadata repositories are prose artefacts; keeping information accurate and up to date means reading and writing definitions with exactness.
- **Strategic thinking**: explaining the strategic context of the work depends on correctly digesting strategy documents rather than skimming them.

### Practice questions

**Passage A - Data retention policy excerpt**

*"All datasets classified as containing personal data must be assigned a named information asset owner before they may be loaded to any shared analytical environment. Datasets without personal data should also be assigned an owner, although loading may proceed while ownership is being confirmed. Retention periods are set by the information asset owner in accordance with the departmental retention schedule; where no period has been set, a default of two years from date of load applies. The platform team must review unowned datasets quarterly and may suspend access to any dataset that has remained unowned for more than six months."*

**Question 1 (easy) - True / False / Cannot Say**

A dataset containing personal data may be loaded to a shared analytical environment while its owner is still being confirmed.

**Correct answer: False.**

**Explanation:** The passage says personal-data datasets "must be assigned a named information asset owner before they may be loaded". The allowance to load "while ownership is being confirmed" applies explicitly and only to "datasets without personal data". The statement directly contradicts the text, so it is False - not Cannot Say, because the passage does answer the question. Notice the structure of the trap: the true rule for one category is offered as if it applied to the other. Policies do this to readers constantly, and this item tests whether the candidate binds each rule to its subject clause.

**Question 2 (easy) - True / False / Cannot Say**

If no retention period has been set for a dataset, it must be deleted two years after the date of load.

**Correct answer: Cannot Say.**

**Explanation:** The passage says a default period "of two years from date of load applies" where none has been set - but it never states what happens when the period expires. Deletion, archiving, review, or renewal are all consistent with the text; the passage simply does not say. This is the essence of Cannot Say: the statement is plausible and may even match real practice, but the passage provides insufficient information. A candidate who knows retention regimes well is the most likely to wrongly answer True here - outside knowledge is the enemy in this format, and this item tests whether they resist it.

**Question 3 (moderate) - True / False / Cannot Say**

The platform team is required to suspend access to datasets that have been unowned for more than six months.

**Correct answer: False.**

**Explanation:** The passage says the platform team "may suspend access" - a permission, not an obligation. The statement's "is required to" converts may into must, which the text does not support; since the passage states the weaker rule explicitly, the stronger claim contradicts the text as written, making the statement False. This item tests attention to modal verbs: must/shall (obligation), should (recommendation), may (permission) form the load-bearing skeleton of every standard a data architect will ever draft or assure, and real compliance disputes turn on them.

**Question 4 (moderate) - Multiple choice**

Which of the following best summarises the passage's overall purpose?

A. To prohibit loading any dataset without an information asset owner.
B. To establish ownership and retention rules for datasets in shared analytical environments, with stricter requirements for personal data.
C. To set a universal two-year retention period for departmental data.
D. To require the platform team to review all datasets quarterly.

**Correct answer: B.**

**Explanation:** B captures the full shape: ownership rules (strict for personal data, looser otherwise), retention setting with a default, and a review mechanism. A overstates - only personal-data datasets are blocked from loading unowned. C mistakes the fallback default for a universal rule. D narrows the quarterly review to "all datasets" when the passage limits it to "unowned datasets", and makes a side mechanism the main purpose. Best-summary items reward the option that is both accurate and complete; three of the four options here are accurate-but-partial or complete-but-inaccurate.

**Passage B - Metadata standard consultation draft**

*"This standard requires every data element in scope to carry, as a minimum: a business definition agreed with the relevant subject matter expert; a named data steward; and a recorded source system. Technical metadata, including data type and length, is mandatory for elements implemented in physical systems but not for purely conceptual elements. The standard applies to all new development from 1 April. Existing elements must be brought into conformance within eighteen months of that date, except where a system is scheduled for decommission within that window, in which case conformance work is not required. Departments were consulted on an earlier draft; a majority favoured a twelve-month conformance window, but the board extended it after impact analysis showed the shorter window was unachievable for two large legacy estates."*

**Question 5 (moderate) - True / False / Cannot Say**

Under the standard, a purely conceptual data element must record a data type.

**Correct answer: False.**

**Explanation:** The passage states technical metadata "including data type and length, is mandatory for elements implemented in physical systems but not for purely conceptual elements". The statement asserts the opposite of the stated exemption, so it is False. This item tests whether the candidate tracks which subject each requirement attaches to - the same reading skill needed when providing input into data dictionaries and knowing which fields are compulsory for which class of element.

**Question 6 (moderate) - True / False / Cannot Say**

A legacy system scheduled for decommission nineteen months after 1 April is exempt from conformance work.

**Correct answer: False.**

**Explanation:** The exemption applies "where a system is scheduled for decommission within that window" - the window being eighteen months from 1 April. Nineteen months falls outside the window, so the exemption does not apply; the system must be brought into conformance. The statement contradicts the rule as written, so it is False. Careful: the intuitive reaction ("it's being decommissioned anyway, surely it's exempt") is a real-world judgement, not a textual one - and this format scores the text. In practice a pragmatic exception might well be worth recommending, but that is a governance decision, not what the standard says, and this item tests whether the candidate keeps the two apart.

**Question 7 (hard) - True / False / Cannot Say**

The board considered departmental preferences when setting the conformance window.

**Correct answer: True.**

**Explanation:** The passage records that departments were consulted, that a majority favoured twelve months, and that "the board extended it after impact analysis". The sequence shows the board had the consultation result before it (it "extended" the very window the majority had favoured shorter), so departmental preferences were considered - even though the board decided against the majority view. This is a subtle True: considering preferences does not mean following them. Candidates often answer False because the board went against the majority, or Cannot Say because the word "considered" never appears; but the passage's narrative logically entails consideration. When the inference is this direct and unavoidable, True is safe; Cannot Say should be reserved for genuine gaps, and this item tests whether the candidate can tell the difference.

**Question 8 (moderate) - Multiple choice**

According to the passage, which combination is the minimum required for a conceptual data element?

A. Business definition, data steward, source system
B. Business definition, data steward, source system, data type
C. Business definition and data steward only
D. Data steward, source system, data type, and length

**Correct answer: A.**

**Explanation:** The universal minimum is the three items listed: agreed business definition, named data steward, recorded source system. Technical metadata (type and length) is additionally mandatory only for physically implemented elements, so a conceptual element needs just the three - option A. B adds a requirement the passage exempts; C drops one the passage requires; D swaps a required item for exempt ones. This is a pure extraction item: list what the text lists, resisting both addition and subtraction. It is also, not coincidentally, exactly how a candidate would apply this standard when maintaining a metadata repository.

**Passage C - Email from a service manager**

*"Thanks for the draft target data model. I have to be honest: my team are worried. The proposal merges our local 'client' table into the corporate 'party' entity, and we've been told verbally that this means we lose the three status flags we depend on for daily triage. If that's true, it's a showstopper for us. I also gather the migration is pencilled in for the same quarter as our peak service period, which last year saw a 40% increase in caseload. We do support the single-view-of-the-citizen ambition - genuinely - but we need evidence that day-one operations are protected. Could you walk us through the mapping at Thursday's session? Our operations lead will attend, and she has final say on whether we sign off the design."*

**Question 9 (easy) - True / False / Cannot Say**

The service manager's team opposes the single-view-of-the-citizen ambition.

**Correct answer: False.**

**Explanation:** The email states plainly: "We do support the single-view-of-the-citizen ambition - genuinely". The statement contradicts this, so it is False. Simple - but important. In real stakeholder management, mistaking concern about implementation for opposition to strategy poisons relationships unnecessarily. The email carefully separates the two, and this item tests whether the candidate (as a careful reader) preserves that separation. Managing differing stakeholder perspectives starts with representing each perspective accurately.

**Question 10 (moderate) - True / False / Cannot Say**

The target data model removes the three status flags the team depends on.

**Correct answer: Cannot Say.**

**Explanation:** The email reports that the team have "been told verbally" that the merge "means we lose the three status flags", and the writer immediately conditions it: "If that's true...". The passage gives a second-hand, unverified claim, explicitly flagged as unconfirmed by its own author. Whether the model actually removes the flags is not established either way - so Cannot Say. This distinction between what a document asserts and what it merely reports someone saying is one of the sharpest tools in verbal reasoning, and in real working life it is the difference between "the design drops the flags" and "the team believe the design drops the flags" - two very different problems this item is testing the candidate's ability to separate.

**Question 11 (moderate) - True / False / Cannot Say**

The operations lead has the authority to approve or reject the design on behalf of the service team.

**Correct answer: True.**

**Explanation:** The email says the operations lead "has final say on whether we sign off the design". "Final say" over sign-off is precisely the authority to approve or reject on the team's behalf, so the statement is supported by the text: True. Identifying the actual decision-maker from correspondence - which is not always the person writing - is a practical skill for anyone who must be an advocate for the team externally and host discussions where sign-off is at stake. Note what would make this Cannot Say: if the email had merely said the operations lead "will attend", her authority would be unstated.

**Question 12 (hard) - Multiple choice**

Which of the following would most directly address the concerns raised in the email?

A. A presentation on the strategic benefits of the single view of the citizen.
B. A written guarantee that the migration will be cancelled.
C. A walkthrough of the field-level mapping showing what happens to the three status flags, plus the proposed migration timing relative to the peak period.
D. An invitation to the operations lead to join the data governance board.

**Correct answer: C.**

**Explanation:** Anchor each option to the concerns the text actually raises: (1) the possible loss of three status flags, and (2) migration timing colliding with the peak quarter, wrapped in a request to "walk us through the mapping". Option C answers both concerns and the explicit request. A addresses a concern the team does not have - they already support the strategy. B overcorrects: the team asked for evidence and protection, not cancellation. D offers governance participation nobody requested and leaves both stated concerns untouched. In assessments and in stakeholder work alike, this item tests whether the candidate maps a response one-to-one onto what was actually said - a reading-comprehension habit that doubles as a communication habit.

**Passage D - Data governance board minutes (extract)**

*"Item 4: Quarterly compliance report. The board noted that 14 of 17 in-scope systems now conform to the reference data standard, up from 11 last quarter. Of the three non-conforming systems, two have agreed remediation plans with dates inside the next quarter. The third, the grants platform, has no plan; its supplier contract ends in March and the service is under commercial review. The chair asked the data architecture function to prepare an impact analysis of continued non-conformance for the grants platform, covering downstream consumers of its reference data, and to present options - including read-only ring-fencing of its feeds - at the next meeting. The board agreed that no new consumers of grants platform reference data should be onboarded until the analysis is considered."*

**Question 13 (moderate) - True / False / Cannot Say**

Conformance with the reference data standard improved compared with the previous quarter.

**Correct answer: True.**

**Explanation:** The minutes state conformance is "up from 11 last quarter" to 14 of 17 systems. Fourteen exceeds eleven against the same denominator of in-scope systems, so the improvement is directly stated: True. Even in a True answer, it is worth verifying the comparison is like-for-like - the passage keeps the scope at 17 in-scope systems, so the comparison holds. Reading compliance trends accurately is the raw material of the responsibility to monitor compliance with policies and standards and take action if needed, and this item tests exactly that.

**Question 14 (moderate) - True / False / Cannot Say**

The grants platform will be decommissioned when its supplier contract ends in March.

**Correct answer: Cannot Say.**

**Explanation:** The minutes say the contract "ends in March and the service is under commercial review". A review may end in decommission, renewal, re-procurement, or in-housing - the text does not say which. The statement is a plausible forecast, not a recorded fact, so Cannot Say. Minutes are a genre that rewards this precision: they record decisions actually taken (no new consumers to be onboarded) alongside contextual facts (contract end date) and open questions (the review) - and conflating the three categories is how organisations come to believe decisions were made that never were. This item tests whether the candidate keeps them separate.

**Question 15 (hard) - Multiple choice**

Which action is the data architecture function required to complete before the next board meeting?

A. Ring-fence the grants platform's feeds as read-only.
B. Prepare an impact analysis of continued non-conformance, covering downstream consumers, and present options.
C. Onboard no new consumers of any reference data.
D. Agree a remediation plan with the grants platform supplier.

**Correct answer: B.**

**Explanation:** The chair "asked the data architecture function to prepare an impact analysis... and to present options... at the next meeting" - that is the function's required action, option B. A confuses an option to be presented ("including read-only ring-fencing") with a decision already taken; the board has not ordered ring-fencing. C misstates scope: the onboarding freeze applies to "grants platform reference data", not all reference data - and it is a board-wide decision, not an action assigned to the architecture function. D belongs to nobody in the text; the two remediation plans that exist were agreed by other systems' teams. This item tests whether the candidate spots that actions, options, and decisions sit one sentence apart in minutes like this, exactly as they do in real governance, where taking responsibility for assurance means executing exactly the action assigned.

**Passage E - Guidance note on data warehouse layering**

*"The departmental warehouse architecture comprises three layers. The landing layer holds raw extracts exactly as received; no transformation is permitted here, and access is restricted to the platform team. The integration layer conforms data to the enterprise model; all business rules applied in this layer must be documented in the transformation register before deployment. The presentation layer exposes curated data marts to analytical users; marts may be created only from integration-layer objects, never directly from landing data. Exceptionally, a time-boxed tactical mart may be built from landing data with the written approval of the head of data architecture, provided it is registered on the exceptions log and reviewed within ninety days. Two tactical marts approved under the previous guidance remain in operation."*

**Question 16 (moderate) - True / False / Cannot Say**

Analytical users are permitted to query raw extracts in the landing layer.

**Correct answer: False.**

**Explanation:** The passage restricts landing-layer access "to the platform team", and analytical users are served by the presentation layer. A statement granting analytical users access to landing data contradicts the stated restriction, so it is False. Note that the tactical-mart exception does not rescue the statement: even a tactical mart built from landing data is still a mart that users query - the users still do not query the landing layer itself. This item tests precision about which object carries the permission, the same precision layered warehouse designs depend on.

**Question 17 (hard) - True / False / Cannot Say**

The two tactical marts currently in operation were reviewed within ninety days of creation.

**Correct answer: Cannot Say.**

**Explanation:** The ninety-day review requirement belongs to the current guidance's exception mechanism; the two operating marts were "approved under the previous guidance", whose terms the passage never describes. Whether they were reviewed, and on what schedule, is simply not stated. Candidates leap to True (assuming the same conditions applied before) or False (assuming the old regime was laxer) - both are speculation. The passage's careful phrase "under the previous guidance" is a scope boundary, and everything beyond it is Cannot Say territory. Legacy artefacts governed by superseded rules are a daily reality in warehouse estates, and this item tests exactly that disentangling.

**Question 18 (moderate) - Multiple choice**

A delivery team wants a new mart, built directly from landing data, to meet an urgent ministerial deadline. According to the passage, what would make this permissible?

A. Documenting the business rules in the transformation register.
B. Written approval from the head of data architecture, registration on the exceptions log, and a review within ninety days.
C. Restricting the mart's access to the platform team.
D. Nothing - marts may never be built from landing data.

**Correct answer: B.**

**Explanation:** The passage carves out exactly one route: "a time-boxed tactical mart may be built from landing data with the written approval of the head of data architecture, provided it is registered on the exceptions log and reviewed within ninety days" - option B reproduces all three conditions. A applies to integration-layer business rules, not the exception route. C garbles the landing-layer access restriction into a mart condition the passage never states. D quotes the general rule ("never directly from landing data") while ignoring the explicit exception that immediately follows - a reminder that in standards documents, as in this item, the sentence after the rule can matter as much as the rule. Reading exception clauses completely is a core habit for anyone who assures compliance and analyses the impact when standards are breached or bent.

### Administration tips

- **Mark strictly from the passage.** A candidate's outside knowledge of how retention or metadata standards usually work is an asset in the role but should not be credited over textual evidence in this section.
- **Time this section tightly and consistently.** At under a minute per question, apply the same time limit to every candidate.
- **Note whether a candidate distinguishes assertion from report.** "The design drops the flags" versus "the team say the design drops the flags" are different facts; passages built on emails and minutes test this constantly, and it is worth flagging as a specific skill when marking.
- **Watch for modal-verb sensitivity.** Must, shall, should, may, and might carry the legal weight in every policy and standard; a candidate who explains an answer using this vocabulary accurately is demonstrating strong comprehension.
- **Give credit for a well-reasoned Cannot Say.** A candidate who explains why the text does not settle a question is showing exactly the assurance mindset this role requires - do not mark this down as an unwillingness to commit.

### Common pitfalls

- **Crediting an answer built on outside knowledge.** The most common failure mode for an experienced candidate: they know how retention or metadata standards usually work, so they may answer from experience rather than the passage; mark against the text, not against real-world plausibility.
- **Missing "likely" versus "stated" confusion.** A passage that says an outcome is expected or probable does not support a statement that it will happen; check that the candidate matched the certainty level of the statement to the certainty level of the text.
- **Treating Cannot Say as a weak answer.** A candidate may under-use it, feeling it is a cop-out; it is not, and it is frequently the designed correct answer, so a candidate who chooses it on textual grounds should not be marked down.
- **Missing scope-limiting phrases when marking.** Words like "in-scope", "personal data", "unowned", and "new development" quietly restrict every rule they touch; check whether an answer that widens the scope has been correctly marked False or Cannot Say, not True.
- **Allowing insufficient time for scanning versus full reading.** Under time pressure, targeted scanning for the statement's keywords beats full absorption; a candidate who reads the whole passage exhaustively first may simply be pacing themselves differently, which is worth distinguishing from a comprehension problem.
- **Letting an email's tone colour marking.** An email's frustrated tone does not change what it factually asserts; mark the propositions, not the emotion.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skill, and professional conduct through realistic workplace dilemmas. Unlike the cognitive, numeric, and verbal tests, there is often no single objectively right answer computed from data - instead, several responses may seem reasonable, and the assessment measures how well the candidate's choices align with the values and behaviours the role and organisation require. For this role, that means alignment with UK public sector values: meeting user needs, transparency, collaboration across disciplines, accessibility and inclusion, careful stewardship of public money and public data, and evidence-based decision-making.

Present each item as a short scenario - a conflict, an ethical dilemma, an operational challenge - followed by several possible actions. Ask the candidate to pick the **most effective** and **least effective** actions, or to rank or rate all the options. Administer this section untimed or generously timed, because it measures natural judgement rather than speed. A strong candidate answers as the professional they are at work, not as an idealised hero or a cynical survivor; a well-designed assessment detects both.

The scenarios below are drawn directly from a data architect's real working life: design reviews with anxious service teams, standards breaches, governance pressure near go-live, difficult dynamics in multidisciplinary teams, and the constant balancing of strategic data ambitions against operational reality.

### What it measures

- **Communicating between the technical and non-technical**: several scenarios test whether the candidate can communicate effectively with technical and non-technical stakeholders, support and host discussions within a multidisciplinary team with potentially difficult dynamics, advocate for the team externally, and manage differing stakeholder perspectives.
- **Data governance (data architect)** and **data standards**: dilemmas about compliance, assurance, and standards breaches test whether the candidate would take responsibility for the assurance of data solutions, make recommendations to ensure compliance, monitor compliance in a team and take action if needed, and analyse the impact if a standard is breached.
- **Problem management**: scenarios about recurring incidents test whether the candidate would investigate patterns and trends, consult specialists effectively, determine the appropriate resolution, and determine preventative measures rather than settling for quick fixes.
- **Data innovation**: judgement about when and how to pursue new tools and uses of data - with enthusiasm and with due diligence.
- **Communicating data**: dilemmas about visuals and reported figures test commitment to aligning data honestly to the needs of the end user.
- **Strategic thinking**: choices that weigh immediate convenience against the organisation's strategic data direction, as defined by chief data architects.

### Practice questions

**Question 1 (easy) - The baffled service manager**

In a design review, a service manager stares at the candidate's entity-relationship diagram and says, "I'll be honest, this means nothing to me - I just need to know my caseworkers can still see client history on one screen." Several other non-technical attendees look relieved that someone said it.

A. Continue the walkthrough as planned; the technical audience members still need the detail, and the slides were circulated in advance.
B. Switch mode: put the diagram aside, walk through a day-in-the-life example of a caseworker viewing client history in the new design, and offer a separate technical session for those who want the detail.
C. Apologise and end the session early, promising to send a simplified written summary.
D. Ask a business analyst to translate for the service manager while the candidate continues presenting the model.

**Most effective: B. Least effective: A.**

**Explanation:** Option B is the heart of communicating between the technical and non-technical: the diagram is the presenter's artefact, not the stakeholder's need, and re-anchoring the discussion in the user's real scenario (a caseworker's screen) serves everyone in the room - including the quiet majority who were also lost. Splitting the technical detail into its own session respects both audiences. Option A is least effective because it prioritises the presenter's plan over the audience's stated needs; the meeting would end having communicated nothing to the people whose sign-off is needed. C abandons a live opportunity - the stakeholders are present and engaged - and a written summary rarely answers the questions a conversation surfaces. D outsources the presenter's own core skill mid-meeting and subtly tells the service manager their question was a distraction. Public sector design culture starts from user needs; so should the meeting, and this item tests whether the candidate recognises that.

**Question 2 (moderate) - The repeat standards breach**

Monitoring shows a delivery team has, for the third sprint running, created database objects that breach the naming and modelling standards. Their tech lead is capable and busy, and previously promised to fix things "when the pressure eases". The breaches are starting to propagate into the warehouse integration layer.

A. Escalate immediately to the head of delivery, attaching the three sprints of evidence.
B. Fix the objects yourself over the weekend and mention it casually to the tech lead.
C. Meet the tech lead, share the evidence and the downstream impact analysis, agree a remediation plan with dates, and be clear that continued drift will need escalating - then follow up as agreed.
D. Add stricter automated checks to the deployment pipeline so non-conforming objects cannot be deployed, without discussing it with the team first.

**Most effective: C. Least effective: B.**

**Explanation:** This role's skill profile is explicit: monitor compliance with policies and standards in a team and take action if needed, and analyse the impact if a standard is breached. Option C does all of it - evidence, impact, a concrete plan, a transparent warning about escalation, and follow-through - while preserving the collaborative relationship a multidisciplinary environment depends on. Option B is least effective: it hides the problem, sets a precedent that the architect will silently clean up after delivery teams, fixes symptoms rather than behaviour, and burns a weekend as a subsidy for non-compliance. A is premature - escalation is a legitimate later step, but leaping there first without giving a capable colleague a structured chance to remediate damages trust and wastes senior attention. D has real merit as a preventative measure (and might follow from C's plan), but imposing pipeline controls without discussion invites workarounds and resentment; transparency about controls is part of good governance.

**Question 3 (moderate) - Go-live pressure versus assurance**

A high-profile service is due to go live in nine days. The candidate's data assurance review finds that the solution stores citizens' contact history unencrypted in a shared schema, contrary to data policy. The programme manager says: "We can't slip the date. Log it as a known issue and we'll fix it in the next release - the Minister has announced this."

A. Agree to log it as a known issue; the announcement makes the date immovable and the fix is coming anyway.
B. Set out the breach, its impact, and remediation options in writing to the programme manager and the senior responsible owner, recommending either a pre-go-live fix or a formal, documented risk acceptance at the right level - and offer to help scope the quickest compliant fix.
C. Refuse to sign off the assurance and inform the programme board that go-live cannot proceed under any circumstances.
D. Quietly raise it with a friend on the security team so it becomes their problem rather than yours.

**Most effective: B. Least effective: D.**

**Explanation:** Option B does what taking responsibility for the assurance of data solutions and making recommendations to ensure compliance actually means in government: the breach is documented transparently, the decision is escalated to the accountable owner with options rather than ultimatums, and the candidate contributes to solving the problem (scoping the quick fix) rather than just certifying it. Crucially, risk acceptance is a legitimate outcome - but only when made knowingly, at the right level, in writing. Option D is least effective: it is opaque, evades the candidate's own accountability, converts a governance issue into corridor politics, and delays action on citizens' data - the opposite of transparency. A silently absorbs a policy breach on a programme manager's say-so, leaving no accountable decision trail; if the data leaks, "we logged it" protects no one, least of all citizens. C overplays the architect's authority - blanket refusal without options ignores the possibility of a properly governed risk decision and positions the candidate as an obstacle rather than an adviser.

**Question 4 (moderate) - The clashing seniors**

The candidate is hosting a data model working session. Ten minutes in, a senior developer and a senior analyst begin talking over each other about whether "customer" and "citizen" are one entity or two. The exchange grows sharp; other attendees have gone quiet, and two junior members look uncomfortable.

A. Let the two seniors argue it out - they have the deepest knowledge, and the answer matters.
B. Pause the debate, acknowledge both positions have substance, capture the disagreement as a named decision point with the evidence each side would need, park it, and move the session on - then convene the two seniors separately with the relevant subject matter expert.
C. Side with the senior developer, whose view matches the candidate's own instinct, and move on.
D. Adjourn the meeting and ask both to send their positions in writing.

**Most effective: B. Least effective: A.**

**Explanation:** This is the "support and host discussions within a multidisciplinary team, with potentially difficult dynamics" skill in its purest form. Option B protects the session's purpose, dignifies both experts, converts heat into a structured decision with evidence criteria (very much how entity questions should be settled), and - importantly for inclusion - restores a room in which quieter and junior colleagues can contribute. Option A is least effective: unmanaged conflict between seniors silences everyone else, models poor behaviour, and rarely converges; the facilitator's passivity is itself a decision. C settles a modelling question by hierarchy and instinct rather than evidence, and publicly picks a winner - both bad modelling practice and bad facilitation. D is not terrible, but it sacrifices the assembled group's time and momentum for a problem B can contain in two minutes, and written position papers tend to harden positions rather than reconcile them.

**Question 5 (hard) - The stale repository discovery**

Preparing an integration impact analysis for a major upgrade, the candidate discovers the metadata repository is significantly out of date: dozens of dependencies added in the last year were never recorded. The analysis is due at the architecture board in three days, and the upgrade decision depends on it.

A. Run the analysis on the repository as it stands and present it without comment - the repository is the official source.
B. Delay the board paper indefinitely until the repository is fully remediated.
C. Rapidly triage: verify the dependencies for the systems actually in the upgrade's blast radius (consulting the delivery teams who know them), present the analysis with an explicit statement of confidence and coverage, and propose a funded remediation plan for the repository as a follow-up action.
D. Present the analysis but verbally mention that the repository "may have some gaps" if anyone asks.

**Most effective: C. Least effective: A.**

**Explanation:** Option C combines the practical and the principled: it focuses verification effort where the decision needs it (the upgrade's blast radius), consults specialists effectively - a named behaviour in this role's problem management skill - is transparent about confidence and coverage, and converts the discovery into a preventative measure (the remediation plan), which is exactly how problem management should end. Option A is least effective because it knowingly presents materially flawed analysis to a decision-making board as though it were sound - a transparency failure that could cause a service-affecting outage and, when the gaps surface later, will undermine trust in the architecture function itself. B fails the organisation in the other direction: indefinite delay leaves the board deciding with no analysis at all, and "wait for perfect data" is rarely a public-service option. D's difference from A is cosmetic; material caveats belong in the paper, stated precisely, not held back for a lucky question.

**Question 6 (moderate) - Strategy versus the local shortcut**

The chief data architect's target architecture mandates that new services consume citizen reference data from the corporate master data service. A delivery team the candidate supports asks them to endorse a local copy instead: "The master service's API is slower and we'd own our data. We can sync it later. You know our deadline."

A. Endorse the local copy - the team knows its needs best, and the strategy can catch up later.
B. Decline to endorse it, explain the strategic rationale (divergent copies are how the citizen-view problem arose), quantify the API performance gap with the master data team, and jointly pursue either a fix, a caching pattern consistent with the target architecture, or a time-boxed, documented exception with a convergence date.
C. Tell the team to raise it with the chief data architect and step away from the question.
D. Endorse the copy but ask the team to keep it quiet until after go-live.

**Most effective: B. Least effective: D.**

**Explanation:** This role exists to fulfil the strategic data needs of the organisation as defined by chief data architects, and to explain the strategic context of the work - option B does both while genuinely engaging with the team's legitimate performance concern. Note its shape: hold the line on the destination, be flexible and evidence-led about the route (caching patterns and governed exceptions are real architecture tools, not defeats). Option D is least effective by a distance: it is the strategic failure of A plus deliberate concealment - a straightforward breach of the transparency that public sector working demands, and it makes the architect complicit in undermining the governance they are meant to uphold. A capitulates without analysis and "sync it later" is the origin story of most data quality problems. C is an abdication: escalation routes matter, but the architect on the ground is precisely the person who should shape the options before anything reaches the chief data architect.

**Question 7 (moderate) - The tempting new tool**

At a conference, a vendor demonstrates an impressive AI-assisted data catalogue that could transform the candidate's metadata management. The vendor offers a free three-month trial: "Just point it at a copy of your databases and it does the rest." The candidate's organisation has procurement rules and a data protection assessment process, and the current catalogue contract runs for another year.

A. Decline to think about it further - the current contract makes it pointless.
B. Accept the trial and point the tool at a copy of production databases; it is only a trial, and innovation requires moving fast.
C. Capture the capability gap the demo revealed, arrange a deeper demonstration using vendor-supplied or synthetic data, and raise a proper evaluation - including data protection assessment and procurement advice - timed to inform the contract renewal.
D. Recommend immediate procurement of the new tool to replace the incumbent.

**Most effective: C. Least effective: B.**

**Explanation:** Showing awareness of opportunities for innovation with new tools is one of the named skills, and option C exercises it responsibly: the innovation signal is captured and pursued, but evaluation uses safe data, follows the data protection and procurement processes that safeguard public money and citizens' data, and lands at the moment (contract renewal) when it can actually change something. Option B is least effective: pointing an unassessed external tool at copies of production databases - which will contain real citizen data - is a serious data protection failure dressed up as agility; "it is only a trial" protects nobody. A mistakes patience for pointlessness and would discard a year of preparation time an evaluation could use well. D leaps from demonstration to procurement with no evaluation, no due diligence, and no regard for existing commitments - enthusiasm without evidence, which is not innovation but gambling.

**Question 8 (hard) - The recurring data quality incident**

For the fourth time in two months, the overnight citizen data load has failed reconciliation, and each time the operations team has patched the affected records manually. The service desk treats each failure as a closed incident. The candidate notices the failures cluster around end-of-month processing.

A. Praise the operations team's fast patching and leave the arrangement in place - the service has never actually gone down.
B. Open a problem record, analyse the pattern (including the end-of-month clustering already spotted), consult the source system's specialists on month-end behaviours, identify the root cause, implement a fix, and add a reconciliation alert to catch any recurrence early.
C. Instruct the operations team to stop patching records so the failures become visible enough to force investment in a fix.
D. Ask the service desk to merge future occurrences into a single ticket to reduce noise.

**Most effective: B. Least effective: C.**

**Explanation:** This is the problem management skill rendered as a scenario: initiate and monitor actions to investigate patterns and trends to resolve problems, effectively consult specialists where required, determine the appropriate resolution, and determine preventative measures. Option B performs the full cycle - pattern analysis (the month-end clustering is the analytical thread), specialist consultation, root cause, fix, and a preventative alert. Option C is least effective because it deliberately degrades citizens' data quality to manufacture pressure - harming users as a negotiating tactic is indefensible in public service, whatever the tactical logic. A confuses the absence of outage with the absence of a problem: manual patching is unsustainable, error-prone, and hides a defect that will eventually strike somewhere less patchable. D is administrative tidying that actively reduces the visibility of a pattern that needs investigating - the opposite of problem management.

**Question 9 (moderate) - The flattering dashboard**

A programme director reviewing the candidate's draft data quality dashboard asks them to change the completeness chart's vertical axis to start at 90% rather than zero, "so the improvement is actually visible", ahead of a board meeting where the programme's funding is discussed.

A. Make the change - axis choices are presentational, and the underlying numbers are unchanged.
B. Refuse and report the request to the board as attempted manipulation.
C. Explain that a truncated axis on its own can mislead; offer an honest alternative that makes the genuine improvement visible - for example, a supplementary trend chart of the change itself, clearly labelled axes, or annotated percentage-point gains - and agree the final visual with the director.
D. Keep the zero-based chart but present the truncated version separately to the board yourself, with a caveat.

**Most effective: C. Least effective: B.**

**Explanation:** Communicating data honestly is a named part of this role: awareness that data needs to be aligned to the needs of the end user - here, a board that needs an accurate picture of progress. Option C treats the director's request as containing a legitimate need (real improvement is invisible at full scale) wrapped in a problematic method, and solves the need honestly: annotation, change-focused charts, and clear labelling are the honest craft of visualisation. Option B is least effective: it escalates a routine, probably innocent presentational request into an accusation of misconduct, destroying a working relationship and a reputation for proportionality - the director asked a question, not committed a fraud. Option A is genuinely poor (truncated axes without clear signalling do mislead, and the funding context raises the stakes) but it at least lacks B's relationship damage; in a most/least format, B's disproportion makes it the standout failure. D is muddled - presenting two competing charts with a mumbled caveat serves neither honesty nor clarity.

**Question 10 (moderate) - The informal data request**

An analyst from another department emails the candidate directly: "You have the citizen contact dataset in your warehouse, right? Can you extract me a copy with postcodes and dates of birth? It's for a genuinely good piece of cross-government analysis and our deadline is Friday." No data sharing agreement exists between the organisations for this dataset.

A. Send the extract - cross-government collaboration is a public sector value, and the purpose sounds worthwhile.
B. Ignore the email; if it matters, they will follow a proper channel eventually.
C. Reply promptly and warmly: explain that this dataset needs a data sharing agreement and the data owner's approval, copy in the information asset owner, and offer practical help - the fastest route to a lawful share, whether anonymised or aggregated data might meet the need, and what is realistic by Friday.
D. Send an anonymised version of the extract without approval, since anonymisation removes the risk.

**Most effective: C. Least effective: A.**

**Explanation:** Option C is collaborative and compliant at once - which is the actual public sector standard: transparency and lawfulness are not obstacles to collaboration but the terms on which it earns public trust. It moves fast (prompt reply, practical routes, realistic framing of the deadline), engages the accountable people, and explores whether a lesser dataset serves the need - often it does. Option A is least effective: postcodes plus dates of birth are highly identifying personal data, and sharing them with no agreement and no owner approval is a serious breach regardless of how good the analysis is; good intentions are precisely how most data incidents begin. B fails the collaboration value and helps nobody - the analyst deserves a signposted route, not silence. D substitutes private judgement for the governance process: whether anonymisation is adequate is itself an assessed decision (postcode and date of birth combinations are notoriously re-identifiable), and making it unilaterally repeats A's error with extra confidence.

**Question 11 (hard) - The unready consumer**

The candidate is guiding the decommission of a legacy reporting database, scheduled for switch-off in six weeks and already twice delayed. Five of six consuming teams have migrated. The sixth - a small team producing statutory accessibility reports - says their replacement feed is blocked by a defect in the new platform and they cannot migrate in time. The platform team says the defect fix is "eight to ten weeks away". Running the legacy database costs money and carries security risk.

A. Hold the switch-off date; the sixth team has had two extensions already, and statutory reports are their problem to solve.
B. Delay the entire decommission by ten weeks until the defect is fixed.
C. Investigate a narrow bridge for the sixth team - for example, keeping a minimal read-only extract or interim feed for exactly the statutory data they need, with a documented end date tied to the defect fix - while switching off the rest on schedule, and put the trade-off with its costs and risks to the decommission board transparently.
D. Ask the sixth team to produce their statutory reports manually until the defect is fixed.

**Most effective: C. Least effective: A.**

**Explanation:** Decommission guidance is a named duty of this role, and option C shows the architect's craft: decompose the dependency (one team, one dataset, one statutory purpose) rather than treating switch-off as all-or-nothing; contain cost and security exposure by shrinking the legacy footprint to a minimal, read-only, time-boxed remnant; and put the decision transparently to the accountable board. It protects a statutory duty - and accessibility reporting carries inclusion weight beyond its size - without surrendering the programme. Option A is least effective: forcing a failure of statutory accessibility reporting to enforce a project date inverts public sector priorities; the two previous delays explain the frustration but do not change the duty. B pays ten weeks of full cost and risk for a problem one small bridge could isolate, and rewards the defect with programme-wide delay. D quietly converts a platform defect into sustained manual burden on a small team - operationally fragile exactly where accuracy is legally required, though at least it attempts continuity, which is why A remains the clearest failure.

### Administration tips

- **Do not impose a tight time limit, but keep whatever time allowance you offer consistent across candidates.** Situational judgement items measure natural judgement, not speed.
- **Look for the option a candidate identifies as solving the underlying need, not just the stated demand.** In several scenarios above, the strongest option digs beneath a stakeholder's stated request (a truncated axis, a local data copy) to the legitimate need underneath; a candidate who spots this distinction unprompted is demonstrating real strength.
- **Check each answer against public sector values when marking.** User needs, transparency, collaboration, accessibility, inclusion, lawful data handling, and stewardship of public money. An answer that quietly sacrifices one of these - especially transparency - should rarely be marked as the "most effective".
- **Watch for the passive and the covert in a candidate's answers.** Ignoring emails, hiding caveats, fixing things secretly, keeping decisions quiet: options built on avoidance or concealment are classic "least effective" designs, and a candidate who selects them as most effective is worth probing at debrief.
- **Note whether a candidate follows the right escalation order.** The strong pattern this role rewards is: engage directly with evidence, agree a plan, be transparent that escalation follows if the plan fails - then escalate. A candidate who leaps straight to senior escalation, or never escalates at all, should be marked down for either extreme.
- **Ask the candidate to articulate their reasoning, not just state their answer.** This mirrors a genuine job demand at this level and helps distinguish sound judgement from a lucky guess.

### Common pitfalls

- **Rewarding idealistic-sounding answers over effective ones.** "Convene a workshop with all stakeholders" sounds virtuous, but if the scenario needs a decision by Friday, the practical-and-principled option beats the ceremonially perfect one; mark for what would actually work.
- **Under-weighting passive options as merely "safe".** Choices that delay action, pass the problem wholesale to someone else, or wait for perfect information consistently score as weak - this is by design, as Question 5's "delay indefinitely" shows.
- **Discounting the organisation's culture and values.** In UK government digital work, transparency, user needs, and lawful data handling outrank speed and hierarchy; an answer that hits the deadline by hiding a breach fits a different culture, not this one, and should be marked down accordingly.
- **Rewarding overcorrection into aggression as if it were principled.** The mirror image of passivity: instant escalation, blanket refusal, public accusation. Question 9's "report the director to the board" shows how disproportion can make an otherwise principled instinct the worst option on the card.
- **Rewarding self-protective answers over service-focused ones.** Options built around covering oneself ("mention it verbally if asked") should score poorly against options that put accountability and evidence in the open.
- **Missing where a candidate misjudges their own authority.** The data architect advises, assures, recommends, and escalates; answers where the candidate unilaterally blocks programmes or approves data shares overstate the role, and answers where they silently comply understate it. The strongest answers exercise exactly the authority the role really has.

## Conclusion

You have now worked through a substantial set of practice materials covering the four families of thinking that define excellent data architecture work: cognitive ability, numerical reasoning, verbal reasoning, and situational judgement, each built to exercise the skills this role demands.

To score the assessment, work back through each section against the answer key, and note not just whether the candidate reached the correct answer but whether their explanation or reasoning shows what the item was built to test - many of the explanations above flag exactly what a strong versus a weak answer demonstrates. Recording strengths and gaps by skill area is often more useful to a hiring or development decision than a single overall score.

When debriefing the candidate, give an honest and constructive account of how they did and what it suggests about their readiness for the role, without necessarily working through every question and correct answer, since this material may be reused with future candidates. Where useful, connect the debrief to recurring patterns - denominators, modal verbs, dependency direction, the fix-the-problem-and-the-system heuristic - so a candidate who is not yet ready leaves with a concrete sense of what would help their development.

Keep a record of how and when you administered the assessment, and administer it consistently across every candidate for this role level: the same items, the same time limits, the same conditions, and the same standard when scoring. This is what makes a comparison between candidates fair, and what protects your organisation if a decision is ever challenged. Remember throughout that this is one input among several in a hiring or promotion decision, never the sole basis for one - see the advisory above.

For further support, talk to your organisation's human resources or people development colleagues about how this fits into your wider selection process, and consider asking an experienced data architect to sense-check whether the scenarios, standards, and situational dilemmas used here reflect how the role is actually practised locally.
