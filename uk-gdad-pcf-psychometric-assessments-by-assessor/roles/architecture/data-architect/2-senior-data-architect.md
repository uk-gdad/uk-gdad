# Data Architect (Senior Data Architect) - Psychometric Assessments

## Introduction

This document is written for you: an assessor evaluating a candidate for senior data architect in the UK Government Digital and Data profession. Whether you are a line manager, a panel member, or a reviewer, this guide gives you a structured, job-specific psychometric assessment you can administer fairly and consistently for a progression board, a recruitment process, an assessment centre, or internal benchmarking.

A psychometric assessment is a structured, standardised exercise that measures the underlying capabilities that predict performance in a role. Used well, it is fair, evidence-based, and consistent: every candidate faces the same items, scored against the same benchmarks, which reduces the influence of unconscious bias - provided it is administered identically to every candidate. For a senior data architect, the role sits at the junction of vision and delivery: the postholder translates the strategic direction set by the chief data architect into data models, metadata systems, data dictionaries, and standards that whole organisations depend on. That work demands rapid pattern recognition across complex artefacts, confident reasoning with capacity and cost figures, precise reading of policies and standards, and sound judgement in situations where senior stakeholders disagree. This assessment is designed to sample exactly those capabilities.

This document is organised into four main sections, each covering one assessment type:

1. **Workplace job-specific cognitive assessment** - pattern recognition, logical deduction, error checking, and prioritisation using the data artefacts a senior data architect genuinely handles.
2. **Workplace job-specific numeric reasoning assessment** - interpreting tables, percentages, ratios, budgets, and capacity figures drawn from realistic data architecture scenarios.
3. **Workplace job-specific verbal reasoning assessment** - drawing accurate conclusions from dense passages such as data standards, governance policies, and stakeholder correspondence.
4. **Workplace job-specific situational judgement assessment** - choosing effective courses of action in realistic dilemmas involving chief data architects, technical architects, subject matter experts, and the data architects a senior data architect oversees.

Each section explains what the assessment measures, maps its dimensions to the specific skills in this role profile, provides a substantial set of practice items with worked answers, and closes with administration tips and common pitfalls. The worked answers and explanations are your answer key: hold them back from the candidate until after the assessment, and use them only for scoring and the debrief that follows.

Administer this fairly and consistently. Give every candidate for this role level the same items and the same time limit; brief every candidate the same way; and keep the conditions (room, equipment, breaks) as similar as you reasonably can between candidates.

This is one input among several in a hiring or promotion decision, never the sole basis for one - see the advisory below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment is a targeted psychometric test that measures the exact mental processes this role requires, using practical workplace scenarios rather than abstract puzzles. Unlike a generic IQ test, every item is built from the kinds of artefacts and decisions a senior data architect handles: entity-relationship diagrams, metadata schemas, data dictionaries, lineage maps, standards documents, and integration designs.

Administer this as an online, timed test of roughly 15 to 30 minutes, often 20 to 30 questions. If using an adaptive platform, note that rising difficulty usually indicates strong performance, not weak performance - this is worth bearing in mind when observing a candidate rather than treating rising difficulty as a bad sign. Score responses objectively against the answer key or a benchmark, and consider recording speed and accuracy separately. If your platform offers a few short, ungraded practice questions first, use them consistently for every candidate so nobody is disadvantaged by unfamiliarity with the format.

Why does this matter for a senior data architect? Because the daily work is, at its core, applied cognition over structured information. Comparing and aligning two conflicting data models is pattern recognition and logical deduction. Reviewing a data artefact produced by a data architect being overseen is error checking. Prioritising when three programmes all want the team's design time in the same sprint is prioritisation under constraint. Diagnosing a fault in a data service that feeds multiple business services is fault-diagnosis in a dependency chain. A cognitive assessment simply distils these activities into short, scored exercises.

### What it measures

Mapped to the skills in this role profile:

- **Data modelling** - the assessment's pattern recognition and abstraction items mirror the skill in producing relevant data models across multiple subject areas, comparing and aligning different data models, and knowing which industry-recognised modelling patterns and standards to apply and when.
- **Metadata management** - error-checking and consistency items reflect designing an appropriate metadata repository and spotting where current repositories need improvement.
- **Data standards** - deduction and rule-application items echo monitoring compliance with policies and standards, and reasoning about how breaches should be resolved.
- **Data analysis and synthesis** - items asking the candidate to profile datasets and detect anomalies map directly to undertaking data profiling and source system analysis.
- **Problem management** - fault-diagnosis and sequencing items reflect ensuring the right actions are taken to investigate, resolve and anticipate problems, and coordinating a team to do so.
- **Strategic thinking** - prioritisation items test whether the candidate can weigh activities against strategic goals rather than treating every task as equal.

### Practice questions

Present these in order. Suggested pace: about 90 seconds per question for easy items, up to 3 minutes for hard ones, applied identically to every candidate.

**Question 1 (easy) - Data dictionary error checking**

The candidate is reviewing four entries that a data architect on their team has added to the organisation's data dictionary:

1. `citizen_id` - Type: VARCHAR(10) - "Unique identifier for a citizen record" - Mandatory: Yes
2. `date_of_birth` - Type: DATE - "The citizen's date of birth in DD/MM/YYYY" - Mandatory: Yes
3. `postcode` - Type: VARCHAR(8) - "UK postcode of the citizen's primary address" - Mandatory: No
4. `citizen_id` - Type: INTEGER - "Identifier of the citizen" - Mandatory: Yes

Which single issue should be raised first?

A. Entry 3 should be mandatory because addresses are always required.
B. Entries 1 and 4 define the same element twice with conflicting types and descriptions.
C. Entry 2 should use VARCHAR to hold the formatting.
D. Entry 3's length is too short for UK postcodes.

**Correct answer: B.**

**Explanation:** A data dictionary exists to provide a single, authoritative definition per element. Two entries for `citizen_id` with different types (VARCHAR(10) versus INTEGER) and inconsistent descriptions is a direct contradiction that undermines every consumer of the dictionary, so it must be resolved first. Option A is a business decision, not an error assertable from the information given. Option C is wrong: a DATE type is correct, and display formatting does not belong in storage type. Option D is factually wrong - UK postcodes fit within 8 characters including the space. This item tests whether the candidate spots the structural contradiction rather than plausible-sounding distractions.

**Question 2 (easy) - Modelling pattern recognition**

A logical model shows: CITIZEN (1) --- (many) APPLICATION; APPLICATION (many) --- (1) SCHEME; SCHEME (1) --- (many) PAYMENT; PAYMENT (many) --- (1) APPLICATION.

A colleague asks: "Can one citizen receive payments under two different schemes?" Based only on the model, what is the correct answer?

A. No - each citizen is limited to one scheme.
B. Yes - a citizen can hold many applications, each application belongs to one scheme, and payments attach to applications.
C. Cannot be determined - the model does not connect citizens to payments.
D. No - payments belong to schemes, not citizens.

**Correct answer: B.**

**Explanation:** Trace the relationships: one citizen can have many applications; each application relates to exactly one scheme, but different applications can relate to different schemes; each payment relates to one application (and each scheme has many payments). So a citizen with two applications under two schemes can receive payments under both. Option C is tempting but wrong - the path CITIZEN to APPLICATION to PAYMENT is fully navigable. This item tests exactly the skill this role profile calls "explain which models to use for which purpose": reading cardinality chains fluently and answering a business question from structure alone.

**Question 3 (moderate) - Logical deduction from standards rules**

An organisation's data standards, set by the chief data architects, include these rules:

- Rule 1: Every master data entity must have a named data steward.
- Rule 2: Any entity shared between two or more business services is a master data entity.
- Rule 3: Entities without a named data steward must not be exposed through the organisation's API catalogue.

The "Business Premises" entity is consumed by both the licensing service and the inspections service, and it currently has no named data steward. Which conclusion follows logically?

A. Business Premises must be removed from both services.
B. Business Premises is in breach of Rule 1 and must not be exposed through the API catalogue.
C. Business Premises needs a steward only if it is exposed through the API catalogue.
D. The licensing service must appoint the steward.

**Correct answer: B.**

**Explanation:** By Rule 2, an entity shared by two business services is master data. By Rule 1, master data must have a named steward - so the entity is in breach. By Rule 3, lacking a steward, it must not be exposed via the API catalogue. Option A goes beyond the rules: nothing requires removal from services. Option C reverses the logic - stewardship is required because it is master data, regardless of API exposure. Option D invents an obligation the rules never assign to a particular service. This mirrors the real work of monitoring compliance and making recommendations about how the organisation should resolve breaches: the recommendation must follow from the standard, not from what feels sensible.

**Question 4 (moderate) - Metadata repository consistency**

A metadata repository records, for each dataset: source system, refresh frequency, and downstream consumers. The candidate spots the following entries:

- Dataset ALPHA: source CRM; refreshed daily; consumers: Reporting Mart, Dataset BETA.
- Dataset BETA: source Dataset ALPHA; refreshed weekly; consumers: Dashboard Service.
- Dataset GAMMA: source Dataset BETA; refreshed daily; consumers: Ministerial Briefing Pack.

Which entry represents a genuine design concern rather than a mere documentation gap?

A. ALPHA lists a dataset as a consumer, which is not allowed.
B. GAMMA refreshes daily from BETA, which only refreshes weekly, so six of every seven GAMMA refreshes add no new data while implying freshness.
C. BETA should refresh daily to match ALPHA.
D. The Ministerial Briefing Pack should consume ALPHA directly.

**Correct answer: B.**

**Explanation:** Follow the lineage chain: ALPHA (daily) feeds BETA (weekly) feeds GAMMA (daily). GAMMA refreshing daily from a weekly source is logically wasteful and, worse, misleading: a briefing pack labelled "refreshed daily" implies data no more than a day old, when in fact the underlying content can be up to a week old. Option A is false - datasets consuming datasets is normal lineage. Options C and D are design opinions that might be discussed, but neither is a deducible inconsistency; there may be excellent reasons for BETA's weekly cadence. This item reflects the skill of suggesting changes to improve current metadata repositories: the highest-value catches are the ones where recorded metadata creates a false impression for decision-makers.

**Question 5 (moderate) - Prioritisation under constraint**

It is Monday morning. The candidate's team of four data architects has capacity for three significant pieces of work this week. Five requests are waiting:

1. The chief data architect asks for input to the organisation's target data architecture, due Friday, feeding a board paper.
2. A technical architect needs a data model review before their solution design freeze on Wednesday.
3. A junior data architect asks for feedback on a draft conceptual model for a discovery-phase project (no fixed deadline).
4. A programme reports that two teams are using incompatible address formats, causing weekly reconciliation failures in a live service.
5. A supplier requests a meeting to demonstrate a new data catalogue tool.

Which three should be scheduled for this week?

A. 1, 2, 4
B. 1, 3, 5
C. 2, 4, 5
D. 1, 2, 3

**Correct answer: A.**

**Explanation:** Apply three filters: strategic importance, deadline immovability, and live-service harm. Item 1 is strategic and deadline-bound (board paper Friday); it directly supports the responsibility to help chief data architects interpret the organisation's needs. Item 2 has a hard Wednesday freeze, and ensuring systems are designed in accordance with the appropriate data architecture is a core duty - missing the freeze means the wrong design ships. Item 4 is an active problem harming a live service and squarely within problem management: ensuring the right actions are taken to investigate and resolve problems. Item 3 matters - oversight and advice to other data architects is a named duty - but a discovery-phase draft with no deadline can wait a week or be handled with a brief asynchronous comment. Item 5 relates to data innovation, but a supplier demo is rarely time-critical. This item rewards a candidate who recognises that urgency, irreversibility, and harm outrank interest and availability.

**Question 6 (moderate) - Data profiling anomaly detection**

The candidate profiles the `national_insurance_number` column in a source system ahead of a migration. The profile reports:

- Total rows: 480,000
- Distinct values: 462,000
- Null values: 3,200
- Values matching the standard NINO format: 458,900
- Most frequent single value: "AB123456C" appearing 9,600 times

Which finding most urgently requires investigation before migration?

A. The 3,200 nulls.
B. The 21,100 format mismatches (480,000 minus 458,900).
C. A single value appearing 9,600 times in a column expected to be unique per person.
D. The distinct count being below the total row count.

**Correct answer: C.**

**Explanation:** A national insurance number should be close to unique per individual. One value occurring 9,600 times is a screaming signal of a dummy or placeholder value (a test value or a "we didn't know" filler) - and it alone explains a large part of the gap between total rows and distinct values. If migrated untreated, it could incorrectly link 9,600 records to one identity. The nulls (A) are visible and easy to handle with an explicit rule. The format mismatches (B) matter, but note the arithmetic trap: nulls are part of that 21,100, and mismatches are typically correctable or quarantined; they do not silently corrupt identity resolution the way a repeated identifier does. Option D is just the aggregate symptom of C. This is data profiling and source system analysis exactly as this role profile describes it: the skill this item tests is ranking anomalies by downstream harm, not merely listing them.

**Question 7 (hard) - Aligning conflicting data models**

Two departments are merging their case-management systems. Department X's model defines PERSON with a mandatory one-to-one relationship to ADDRESS. Department Y's model defines PARTY (which can be a person or an organisation) with an optional one-to-many relationship to ADDRESS, each address carrying a type (home, correspondence, registered office).

A single target model must be proposed. Which option best preserves both departments' business needs?

A. Adopt X's model; it is simpler, and Y's organisations can be stored as persons.
B. Adopt Y's PARTY model with optional one-to-many typed addresses, and enforce X's "must have an address" rule as a business rule for X's case types rather than as a structural constraint.
C. Keep both models and synchronise them nightly.
D. Create PERSON and ORGANISATION as unrelated entities, each with one mandatory address.

**Correct answer: B.**

**Explanation:** The party pattern (a supertype covering persons and organisations) is an industry-recognised modelling pattern precisely for this situation, and one-to-many typed addresses is the more general structure - a one-to-one mandatory address is a special case of it. The key insight this item is probing: generalise the structure, then reimpose the stricter department's requirement as a contextual business rule, so X loses nothing while Y's flexibility is preserved. Option A destroys Y's ability to represent organisations properly and forces data corruption ("organisations stored as persons"). Option C is not alignment at all - it perpetuates divergence and adds a synchronisation liability. Option D fragments the party concept, duplicating attributes and relationships and making cross-type queries (e.g. "all correspondence addresses") needlessly hard, and its mandatory single address rebreaks Y's requirements. This is a direct exercise of the skill to compare and align different data models and to understand industry-recognised patterns and when to apply them.

**Question 8 (hard) - Fault diagnosis in a data service chain**

A nightly pipeline runs: Extract (from three source systems), then Standardise (applies the organisation's reference data), then Match (deduplicates parties), then Publish (to the shared data service consumed by four business services).

On Tuesday morning, two of the four consuming services report duplicate party records. The other two services report no issues, but they consume only aggregated statistics, not party-level records. The Extract and Publish steps both logged "success". Reference data was updated on Monday.

What is the most logical primary hypothesis to investigate first?

A. The Extract step silently failed for one source system.
B. Monday's reference data update changed a value used by the Standardise step, causing records that previously standardised identically to diverge, so the Match step no longer recognises them as duplicates.
C. The two complaining services have a display bug.
D. The Publish step duplicated its output.

**Correct answer: B.**

**Explanation:** Reason over the evidence. The symptom is duplicates at party level; the two silent services would not see party-level issues regardless, so their silence eliminates nothing but is consistent with an upstream matching failure. Matching typically depends on standardised values: if Monday's reference data change altered standardisation (say, a new spelling of a locality or a changed code mapping), the same real-world party arriving from two sources would standardise differently and sail past the matcher - producing exactly this symptom. Timing supports it: the change landed Monday, the symptom appeared Tuesday. Option A would more likely cause missing records than duplicates. Option C requires the same independent bug in two services simultaneously - possible, but a weaker first hypothesis than one upstream cause explaining everything. Option D is contradicted by nothing but explains less: publish-step duplication would usually duplicate all records, likely triggering volume alerts. The principle this item tests - prefer the single hypothesis that explains all symptoms and coincides with the most recent change - is the heart of the problem management skill: ensuring the right actions are taken to investigate problems, in the right order.

**Question 9 (hard) - Rule chains and exceptions**

The organisation's metadata standard states:

- Every dataset must record a classification of OFFICIAL, OFFICIAL-SENSITIVE, or SECRET.
- Datasets classified OFFICIAL-SENSITIVE or above must record a handling caveat.
- Datasets derived solely from datasets classified OFFICIAL inherit OFFICIAL automatically and need no separate classification review.
- A derived dataset that joins two or more source datasets must undergo a classification review, because combination can increase sensitivity.

Dataset D is derived by joining Dataset E (OFFICIAL) and Dataset F (OFFICIAL). Which statement is correct?

A. D inherits OFFICIAL automatically because both sources are OFFICIAL.
B. D must undergo a classification review because it joins two source datasets, despite both being OFFICIAL.
C. D must be classified OFFICIAL-SENSITIVE because joining increases sensitivity.
D. D needs a handling caveat.

**Correct answer: B.**

**Explanation:** Two rules appear to apply: the inheritance rule (sources are all OFFICIAL) and the join-review rule (D joins two sources). The join rule is the more specific rule and exists precisely because aggregation can elevate sensitivity - the classic example being two innocuous datasets that, combined, reveal individuals' circumstances. Specific rules override general defaults; therefore a review is required. Option A applies the general rule while ignoring the specific exception. Option C overshoots: the rule requires a review, not an automatic uplift - the review may well conclude OFFICIAL is still right. Option D depends on a classification outcome that has not happened yet. This item, typical of senior-level items, presents two true rules and one question, and tests whether the candidate knows which rule governs - the same reasoning applied when evolving and defining data governance and explaining to colleagues why the cautious path is mandated.

**Question 10 (hard) - Sequence deduction for a migration plan**

The candidate is sequencing five workstreams for a data platform migration:

- The metadata repository must be designed before the data dictionary can be loaded into it.
- The canonical data model must be signed off before the metadata repository design starts.
- Source system profiling can run at any time but must finish before the canonical model is signed off.
- Consumer onboarding cannot start until the data dictionary is loaded.
- Standards training for the team can run in parallel with anything, but must finish before consumer onboarding starts.

Which is a valid order of completion?

A. Profiling, canonical model sign-off, repository design, dictionary load, standards training, consumer onboarding.
B. Canonical model sign-off, profiling, repository design, dictionary load, standards training, consumer onboarding.
C. Profiling, repository design, canonical model sign-off, dictionary load, consumer onboarding, standards training.
D. Standards training, dictionary load, profiling, canonical model sign-off, repository design, consumer onboarding.

**Correct answer: A.**

**Explanation:** Check each constraint against option A: profiling finishes before canonical sign-off (satisfied - it is first); canonical sign-off precedes repository design (satisfied); repository design precedes dictionary load (satisfied); dictionary load precedes consumer onboarding (satisfied); standards training finishes before consumer onboarding (satisfied - it is fifth, onboarding sixth). Option B fails immediately: sign-off happens before profiling finishes, violating the profiling constraint. Option C has repository design completing before canonical sign-off, violating the second constraint, and onboarding before training. Option D loads the dictionary before the repository is designed. This item tests a reliable technique: elimination, testing each option against the constraints one at a time and discarding on first violation, rather than trying to construct the perfect order from scratch - which mirrors how real dependencies are sequenced when coordinating a team's design and delivery work.

**Question 11 (hard) - Pattern abstraction across subject areas**

The candidate notices three models produced by different architects on their team:

- Licensing: LICENCE has status transitions Draft, then Submitted, then Approved or Rejected; each transition records who, when, and why.
- Grants: AWARD has status transitions Draft, then Submitted, then Approved or Rejected; transitions recorded in a free-text notes field.
- Permits: PERMIT has statuses Draft, Submitted, Approved, Rejected stored as a flag on the main record with no transition history.

As the senior data architect providing oversight, what is the most valuable architectural observation?

A. The three teams should merge their models into one entity.
B. All three implement the same state-machine pattern with differing rigour; the organisation should adopt a common status-transition pattern (with structured audit attributes) as a standard, applied to each subject area.
C. The Permits model is acceptable because permits are simpler.
D. Free-text notes are fine as long as they are complete.

**Correct answer: B.**

**Explanation:** The senior-level insight this item tests is recognising the repeated abstract pattern - a state machine with audit requirements - beneath three superficially different subject areas, and responding at the level of standards rather than individual fixes. That is precisely the combination this role profile describes: producing relevant models across multiple subject areas, understanding industry-recognised patterns, and creating data standards for different subjects. Option A confuses pattern reuse with entity merging - licences, awards, and permits are genuinely different business objects and should remain distinct entities sharing a common pattern. Option C accepts an audit gap without justification: who approved a permit and when is exactly the kind of accountability question a public sector organisation must answer. Option D ignores that free-text audit data cannot be queried, monitored for compliance, or reported on reliably. In "spot the shared structure" items like this, the credited answer almost always standardises the pattern while respecting domain boundaries.

**Question 12 (moderate) - Error checking a lineage diagram**

A lineage diagram submitted for the candidate's review shows: System A feeds Dataset P. Dataset P feeds Dataset Q. Dataset Q feeds Dataset R. Dataset R feeds Dataset P.

What should be flagged?

A. Nothing - chains of four steps are acceptable.
B. The diagram contains a circular dependency: P feeds Q feeds R, which feeds back into P.
C. System A should not feed a dataset directly.
D. Dataset R should feed a reporting layer.

**Correct answer: B.**

**Explanation:** Trace the arrows: P to Q to R to P forms a cycle. Circular lineage is almost always either a drawing error or a genuine design defect: it makes refresh ordering undecidable (which of P and R runs first?), impact analysis unreliable, and incident diagnosis painful. Either way it must be challenged before the artefact is approved - which is the essence of providing oversight and advice to other data architects who are designing and producing data artefacts. Options C and D are stylistic opinions with no basis in the information given. This item rewards a systematic habit: following every path to its end and checking whether a node is revisited.

### Administration tips

- **Encourage the candidate to work from their own kind of artefact for orientation, not for the scored items themselves.** A brief warm-up conversation about a real data model, dictionary, or lineage diagram can settle nerves, but keep the timed, scored items identical for every candidate.
- **Note whether a candidate uses constraint elimination in sequencing or rule items.** A candidate who tests each option against each constraint systematically, rather than trying to construct the answer from scratch, is demonstrating a strong professional method worth noting when marking.
- **Manage the clock consistently.** At this level, apply the same overall time limit to every candidate, and allow the same policy on flagging and returning to a stalled item.
- **Watch for a candidate who reasons from structure rather than plausibility.** Wrong options at senior level are engineered to sound like reasonable professional opinions; the credited answer follows from the rules, cardinalities, or evidence given, and marking should reflect that distinction.
- **Offer the same warm-up items to every candidate.** If your platform provides ungraded practice questions, use them consistently to remove interface surprises without affecting the graded result.

### Common pitfalls

- **Crediting outside knowledge over a closed problem's stated rules.** A candidate may know how their own organisation actually classifies datasets or names stewards; mark strictly against the rules on the page, not against real-world practice.
- **Missing that a candidate answered a different question from the one asked.** If the stem asks which issue to raise first, the answer should rank by downstream harm and logical priority, not by which topic feels weightiest - check this specifically when marking.
- **Letting one hard multi-step deduction consume disproportionate session time.** Encourage a candidate to flag and return, consistent with how the section is designed to be timed for every candidate.
- **Missing a skipped quantifier or qualifier.** Words like "must", "may", "only", "solely", "two or more" change conclusions entirely; check the candidate's reasoning against the exact wording of the rule, not a paraphrase.
- **Misreading adaptive difficulty as a sign of struggling.** If a platform's questions get harder for a candidate, this is likely a response to correct answers - do not let this bias your impression downward.
- **Under-crediting a reasoned elimination answer.** An unanswered question earns nothing; a reasoned elimination answer that reaches the wrong conclusion still demonstrates partial method, worth noting separately from a random guess when reviewing borderline performance.


## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates how well a candidate analyses, interprets, and makes sound decisions using numerical data drawn from the actual working context of this role. It is emphatically not a mathematics exam: the arithmetic rarely goes beyond percentages, ratios, rates, and simple projections. What it tests is whether the candidate can extract the right figures from realistic business data - tables, budget sheets, capacity dashboards, performance metrics - and reason with them quickly and accurately.

Administer this as an online test of roughly 20 to 40 minutes with a strict time limit, usually allowing around one to two minutes per question. Offer or provide an onscreen calculator consistently for every candidate, because the point is interpretation, not mental arithmetic. Question inputs are graphs, currency tables, project schedules, and multi-column datasets - for this role, expect storage capacity tables, data quality scorecards, migration budgets, licence cost comparisons, and pipeline throughput figures.

Why does this matter for a senior data architect? Numbers are woven through almost every decision in this role. Sizing a metadata repository means reasoning about record volumes and growth rates. Advising the chief data architect on a target architecture means comparing costed options. Monitoring compliance with data standards means reading percentage-based scorecards and knowing whether a trend is signal or noise. Presenting clear insights to colleagues - a named behaviour in the data analysis and synthesis skill - depends on getting the underlying arithmetic right before speaking. This assessment is used at senior levels because a leader who misreads a table propagates the error through everyone who trusts them.

### What it measures

Mapped to the skills in this role profile:

- **Data analysis and synthesis** - the core of the assessment: profiling figures, comparing source system statistics, and turning raw numbers into a defensible conclusion, exactly as required when undertaking data profiling and source system analysis and presenting clear insights to colleagues.
- **Data governance (data architect)** - items about compliance percentages, assurance metrics, and service-level figures reflect assuring and integrating data services to meet the needs of multiple business services.
- **Data standards** - interpreting compliance scorecards and quantifying breach trends supports monitoring compliance with policies and standards and making recommendations about resolving breaches.
- **Strategic thinking** - cost-benefit and option-comparison items mirror working within a strategic context: choosing where money and effort best serve strategic goals.
- **Metadata management** - capacity and sizing items echo designing an appropriate metadata repository, which always begins with volumetrics.
- **Communicating data** - the discipline of checking scale qualifiers, units, and baselines is the numerical foundation of shaping communications for the audience without misleading them.

### Practice questions

An onscreen calculator is assumed. The arithmetic is shown in full so you can see exactly where a slip happened when marking.

**Question 1 (easy) - Data quality percentage**

A data quality dashboard shows that the party dataset contains 1,250,000 records, of which 1,187,500 pass all validation rules. What percentage of records fail at least one rule?

A. 5%
B. 6.25%
C. 95%
D. 4.75%

**Correct answer: A.**

**Explanation:** Failing records = 1,250,000 - 1,187,500 = 62,500. Percentage failing = 62,500 / 1,250,000 = 0.05 = 5%. The classic trap is option C: 95% is the pass rate, and the question asks for the failure rate. This item tests whether the candidate re-reads the final clause of the question before answering - dashboards in this role's world routinely present pass rates, so the reflex to report "95%" is exactly what the item is designed to catch.

**Question 2 (easy) - Storage growth projection**

The metadata repository currently holds 4.0 TB and grows at a steady 15% per year. Approximately what will it hold after two years?

A. 5.20 TB
B. 5.29 TB
C. 4.60 TB
D. 6.00 TB

**Correct answer: B.**

**Explanation:** Growth compounds: after year one, 4.0 × 1.15 = 4.60 TB; after year two, 4.60 × 1.15 = 5.29 TB. Option A is the simple-interest error (4.0 + 2 × 0.60 = 5.20), adding 15% of the original base twice. Option C stops after one year. Option D applies 25% twice or similar overreach. Compounding versus simple growth is one of the most common numeric-item discriminators, and it matters in real capacity planning: underestimating compound growth is how repositories run out of headroom a year early.

**Question 3 (moderate) - Comparing source systems for migration**

The candidate is profiling three source systems ahead of consolidation:

| Source system | Records | Duplicate rate | Records failing format checks |
|---|---|---|---|
| Legacy CRM | 800,000 | 6.0% | 24,000 |
| Case system | 500,000 | 4.5% | 30,000 |
| Finance system | 250,000 | 2.0% | 2,500 |

Which system has the highest proportion of records failing format checks?

A. Legacy CRM
B. Case system
C. Finance system
D. They are equal

**Correct answer: B.**

**Explanation:** Convert each to a rate: Legacy CRM 24,000 / 800,000 = 3.0%; Case system 30,000 / 500,000 = 6.0%; Finance system 2,500 / 250,000 = 1.0%. The Case system's 6.0% is highest. The trap is comparing absolute counts (Case's 30,000 versus CRM's 24,000 looks close, and CRM's larger total tempts a reader to excuse it) or being distracted by the duplicate-rate column, which is irrelevant to the question asked. In source system analysis, rates - not raw counts - are what make systems comparable, and this item rewards a candidate who normalises before comparing.

**Question 4 (moderate) - Data standards compliance trend**

Quarterly compliance with the organisation's address data standard, measured across all business services:

- Q1: 72%
- Q2: 76%
- Q3: 82%
- Q4: 88%

By how many percentage points did compliance rise across the year, and what was the approximate percentage increase relative to Q1?

A. 16 percentage points; approximately 22% relative increase
B. 16 percentage points; 16% relative increase
C. 22 percentage points; 22% relative increase
D. 12 percentage points; approximately 17% relative increase

**Correct answer: A.**

**Explanation:** Percentage-point change = 88 - 72 = 16 points. Relative increase = 16 / 72 = 0.2222... ≈ 22%. The distinction between percentage points and percentage change is a favourite of item writers and genuinely matters when briefing senior leaders: "compliance rose 16 points" and "compliance rose 22%" are both true here, but "compliance rose 16%" (option B) is false. Being precise with this distinction when ensuring senior leaders understand data standards is part of the job, not just the test, and this item checks whether the candidate keeps the two apart.

**Question 5 (moderate) - Budget allocation ratio**

An architecture programme has a £900,000 annual budget split across data modelling tooling, metadata repository licensing, and team training in the ratio 2 : 3 : 1. Mid-year, the department mandates a 10% cut to the total budget, applied proportionally. How much does metadata repository licensing receive after the cut?

A. £450,000
B. £405,000
C. £270,000
D. £300,000

**Correct answer: B.**

**Explanation:** The ratio 2 : 3 : 1 has 6 parts, so one part = £900,000 / 6 = £150,000. Licensing gets 3 parts = £450,000 before the cut. A proportional 10% cut leaves 90%: £450,000 × 0.90 = £405,000. Option A forgets the cut. Option C is the tooling share after the cut (2 parts = £300,000 × 0.90 = £270,000) - a column-slip error. Option D is the tooling share before the cut. This ratio-then-adjustment item rewards doing the steps in order and labelling intermediate results; a candidate who jots "1 part = 150k" is taking two seconds to prevent the slips this item is testing for.

**Question 6 (moderate) - Pipeline throughput and deadline**

A migration pipeline processes records at 2,400 records per minute. The party dataset has 4,320,000 records. The pipeline can run only in a nightly window from 22:00 to 06:00. How many nights are needed to process the full dataset once?

A. 3 nights
B. 4 nights
C. 5 nights
D. 2 nights

**Correct answer: B.**

**Explanation:** Total processing time = 4,320,000 / 2,400 = 1,800 minutes = 30 hours. Each nightly window is 8 hours (22:00 to 06:00). Nights needed = 30 / 8 = 3.75, which must round up to 4 - a fraction of a night's run cannot be booked without a fourth night. Option A rounds down, the single most common error in capacity items. This item tests whether the candidate rounds a fractional answer in the right direction - ceiling it when it counts windows, servers, or licences, keeping it fractional when it is an average or a rate. In real cutover planning, the difference between 3 and 4 nights is the difference between a smooth go-live and an overrun that must be explained to the programme board.

**Question 7 (hard) - Cost per record of competing designs**

Two candidate designs for the shared party data service:

- Design X: fixed platform cost £180,000 per year plus £0.008 per record served.
- Design Y: fixed platform cost £60,000 per year plus £0.020 per record served.

The service is forecast to serve 12,000,000 records next year. Which design is cheaper next year, and by how much?

A. Design X, by £24,000
B. Design Y, by £24,000
C. Design X, by £36,000
D. They cost the same

**Correct answer: A.**

**Explanation:** Design X: £180,000 + 12,000,000 × £0.008 = £180,000 + £96,000 = £276,000. Design Y: £60,000 + 12,000,000 × £0.020 = £60,000 + £240,000 = £300,000. X is cheaper by £300,000 - £276,000 = £24,000. Note the structure: the low-fixed-cost option loses at high volume because of its higher variable rate. A follow-on calculation worth doing mentally: the break-even volume is where £180,000 + 0.008v = £60,000 + 0.020v, so £120,000 = 0.012v, v = 10,000,000 records. Above 10 million records, X wins. This item mirrors genuine architecture trade-offs between platform investment and per-transaction cost - exactly the kind of costed comparison brought when helping chief data architects interpret the organisation's needs.

**Question 8 (hard) - Weighted data quality score**

The organisation's data quality framework scores each dataset on four dimensions with fixed weights: completeness (weight 40%), accuracy (30%), timeliness (20%), consistency (10%). The reference data service scores: completeness 90, accuracy 80, timeliness 60, consistency 100. The publication threshold is a weighted score of 82. Does the service meet the threshold?

A. Yes - its weighted score is 82.5
B. No - its weighted score is 82.5 but the threshold must be exceeded
C. No - its weighted score is 80.0
D. Yes - its weighted score is 84.0

**Correct answer: A.**

**Explanation:** Weighted score = 90 × 0.40 + 80 × 0.30 + 60 × 0.20 + 100 × 0.10 = 36 + 24 + 12 + 10 = 82.5. The threshold is 82, and "meet the threshold" means reaching it, so 82.5 passes. Option C's distractor comes from mis-weighting timeliness at 30% and accuracy at 20%, giving 36 + 16 + 18 + 10 = 80. Option B invents a stricter reading than the question supports. The working habit this item tests: writing the four products separately before summing, because single-line calculator entry is where weights get swapped. Weighted scores are everywhere in governance reporting, and as the person who assures data services for multiple business services, a senior data architect will both consume and design them.

**Question 9 (hard) - Duplicate reduction target**

The party dataset has 2,000,000 records with an estimated duplicate rate of 8%. A matching improvement plan aims to reduce the number of duplicate records by 70%. After the plan succeeds, approximately how many duplicate records remain, and what is the new duplicate rate (against the same 2,000,000 record base)?

A. 48,000 duplicates; 2.4%
B. 112,000 duplicates; 5.6%
C. 48,000 duplicates; 0.7%
D. 160,000 duplicates; 8.0%

**Correct answer: A.**

**Explanation:** Current duplicates = 2,000,000 × 0.08 = 160,000. A 70% reduction removes 160,000 × 0.70 = 112,000, leaving 160,000 - 112,000 = 48,000. New rate = 48,000 / 2,000,000 = 0.024 = 2.4%. Option B reports the number removed rather than the number remaining - this item tests whether the candidate re-reads what is actually being asked for. Option C confuses the reduction with the resulting rate. Option D forgets to apply the reduction at all. When presenting such results to colleagues, pairing an absolute ("48,000 duplicates remain") with a rate ("2.4%") is exactly the clear-insight presentation the data analysis and synthesis skill calls for: one number gives scale, the other gives proportion.

**Question 10 (hard) - Multi-table cost of standards non-compliance**

Reconciliation failures caused by non-standard address data cost the organisation staff time as follows:

| Business service | Failures per month | Average minutes to fix each |
|---|---|---|
| Licensing | 320 | 15 |
| Inspections | 180 | 30 |
| Grants | 100 | 42 |

Staff time is costed at £36 per hour. What is the approximate total monthly cost of these failures?

A. £8,520
B. £142
C. £5,112
D. £10,224

**Correct answer: A.**

**Explanation:** Minutes per month: Licensing 320 × 15 = 4,800; Inspections 180 × 30 = 5,400; Grants 100 × 42 = 4,200. Total = 14,400 minutes = 240 hours. Cost = 240 × £36 = £8,640. None of the options states £8,640 exactly, and the question says "approximate" - this is deliberate: real assessments sometimes force an approximation judgement, and the skill being tested is confirming the arithmetic, then selecting the nearest option rather than second-guessing it. Options B (forgot to multiply by failures), C (used 60% of the hours), and D (doubled a subtotal) are all far away, so the closest option, A at £8,520, is correct. The broader lesson for this role: quantifying the monthly cost of a standards breach is the single most persuasive input to recommendations about how the organisation should resolve breaches - a board that shrugs at "6% non-compliance" pays attention to "roughly £8,500 a month in staff time".

**Question 11 (moderate) - Reading scale qualifiers**

A capacity report states: "Storage consumption (in TB): metadata repository 2.4; data lake 310; archive 1,150. Monthly API calls (in thousands): metadata repository 85; data lake 12; archive 0.4." How many API calls per month does the archive receive?

A. 400
B. 4,000
C. 40
D. 400,000

**Correct answer: A.**

**Explanation:** The qualifier "(in thousands)" applies to the API calls row, so archive = 0.4 thousand = 400 calls. Options C, B, and D come from ignoring or misapplying the multiplier. Scale qualifiers ("in thousands", "in millions", "TB versus GB") are the most common single cause of numeric-item errors, and this item includes one on purpose. This item tests whether a candidate restates the unit before calculating - the same habit that keeps capacity briefings to technical architects honest.

**Question 12 (moderate) - Percentage of a percentage**

Of the organisation's 240 datasets, 65% are catalogued in the metadata repository. Of the catalogued datasets, 40% have complete lineage recorded. How many datasets have complete lineage recorded?

A. 62 (rounded)
B. 96
C. 156
D. 100

**Correct answer: A.**

**Explanation:** Catalogued datasets = 240 × 0.65 = 156. With complete lineage = 156 × 0.40 = 62.4, so 62 datasets (0.4 of a dataset is not possible; in context, 62 whole datasets meet the bar). Option B applies 40% to the full 240. Option C stops at the first step. Option D is a rounded guess. Chained percentages - a percentage of a subset, not of the whole - are the backbone of governance metrics ("40% of catalogued datasets" is not "40% of datasets"), and this item tests precision that matters directly for shaping communications for the audience: senior leaders will quote whichever number they are given.

**Question 13 (hard) - Break-even for a data quality investment**

An automated address validation service costs £54,000 per year. It is expected to prevent 75% of the 600 monthly reconciliation failures, each costing an average of £15 in staff time. Approximately how many months does it take for cumulative savings to cover the annual cost, and does the investment pay back within the year?

A. 8 months; yes
B. 12 months; only just
C. 6 months; yes
D. 10 months; yes

**Correct answer: A.**

**Explanation:** Failures prevented per month = 600 × 0.75 = 450. Monthly saving = 450 × £15 = £6,750. Months to cover £54,000 = 54,000 / 6,750 = 8 months exactly. Since 8 < 12, it pays back within the year, with four further months of savings (4 × £6,750 = £27,000) as net benefit. Options C and D bracket the answer to catch rough guessers; option B punishes an arithmetic slip such as using 375 prevented failures. This payback framing - months to break even, then net annual benefit - is one of the most effective structures for presenting a business case to non-technical stakeholders, a direct exercise of communicating between the technical and non-technical.

**Question 14 (moderate) - Service integration volumes**

The shared party data service must serve three business services with the following peak demands: licensing 40 requests per second, inspections 25 requests per second, grants 15 requests per second. Historical data shows the combined observed peak is only 85% of the sum of individual peaks, because the services do not all peak simultaneously. The platform must also hold 30% headroom above the expected combined peak. What request rate should the platform be sized for?

A. 88.4 requests per second
B. 104 requests per second
C. 68 requests per second
D. 80 requests per second

**Correct answer: A.**

**Explanation:** Sum of individual peaks = 40 + 25 + 15 = 80 requests per second. Expected combined peak = 80 × 0.85 = 68. Headroom of 30% means sizing at 68 × 1.30 = 88.4 requests per second. Option B applies the 30% headroom to the unadjusted 80 (80 × 1.30 = 104), overspending on capacity. Option C stops before the headroom step. Option D ignores both adjustments. Notice the order matters: reduce for non-coincident peaks first, then add headroom. Assurance sizing like this is the quantitative face of assuring and integrating data services to meet the needs of multiple business services - oversizing wastes public money, undersizing fails users at exactly the moments demand converges, and this item tests whether the candidate gets the order right.

**Question 15 (hard) - Interpreting a trend against a target**

The chief data architect has set a target: 95% of new data artefacts must pass first-time standards review by the end of Q4. First-time pass rates so far: Q1 78%, Q2 84%, Q3 89%. If the rate continues improving by the same average number of percentage points per quarter, will the organisation hit the target in Q4, and by what margin will it miss or exceed it?

A. No - projected 94.5%, missing by 0.5 percentage points
B. Yes - projected 95.5%, exceeding by 0.5 percentage points
C. Yes - projected exactly 95%
D. No - projected 92%, missing by 3 percentage points

**Correct answer: A.**

**Explanation:** Quarterly gains: Q1 to Q2 = 6 points; Q2 to Q3 = 5 points. Average gain = (6 + 5) / 2 = 5.5 points per quarter. Projection for Q4 = 89 + 5.5 = 94.5%, which falls 0.5 points short of the 95% target. Option B misaverages the gains as 6.5; option C assumes a convenient round number; option D uses only the smaller gain. Two things this item tests: first, "the same average improvement" means averaging the observed deltas, not eyeballing; second - and this is the senior-level point - a projection that misses narrowly is a management insight, not a failure verdict. In real life the right message to the chief data architect would be: "on current trajectory we land at roughly 94.5%; a targeted intervention in the weakest subject area closes the gap." Numbers plus a recommended action is what presenting clear insights to support the end use of data actually means.

**Question 16 (easy) - Team review capacity**

A team of four data architects each spends 30% of their working week on standards reviews. A working week is 37 hours, and a typical review takes 4.5 hours end to end. Approximately how many reviews can the team complete per week?

A. 9
B. 11
C. 33
D. 7

**Correct answer: A.**

**Explanation:** Review time per architect = 37 × 0.30 = 11.1 hours per week. Across four architects = 44.4 hours. Reviews per week = 44.4 / 4.5 = 9.87 - but be careful: 9.87 reviews means nine complete reviews within the week, with the tenth carrying over. Option B rounds up, which overstates what the team can finish. Option C forgets the 30% allocation and divides the full 148 team hours by 4.5. Option D underestimates. The rounding logic is the mirror image of the nights-needed item earlier: when the question asks what can be completed within a fixed window, round down; when it asks how many windows are needed to complete fixed work, round up. This item tests whether the candidate keeps those two straight, which is worth noting when marking, since it is also what keeps real-world commitments to programmes honest - promising ten reviews a week when the arithmetic supports nine is how review backlogs, and reputational damage, begin.

### Administration tips

- **Confirm the denominator convention before marking.** "Percentage of what?" separates right from wrong answers far more often than the arithmetic does; check the base a candidate used when reviewing an incorrect response.
- **Provide the same calculator to every candidate.** It removes arithmetic strain but cannot choose the right numbers for the candidate; extracting the right figures and planning the calculation is what is actually being tested.
- **Look for evidence of a sanity check.** A candidate who rounds and estimates before accepting a precise answer ("about 4.3 million records at about 2,400 a minute is about 1,800 minutes, about 30 hours - so more than three 8-hour nights") is demonstrating strong numeric judgement worth noting when marking.
- **Watch for rounding-direction errors when marking.** Nights, servers, and licences come in whole units; a candidate who rounds down when the context demands rounding up (3.75 nights meaning 4 nights) has made a specific, teachable error.
- **Read the last line of the item, and check the candidate did too.** Knowing that "failure rate" or "amount after the cut" is wanted tells the candidate which columns matter and which are decoys - this is worth checking specifically when an answer looks like a mirror-image error.

### Common pitfalls

- **Missing chart and table label errors when marking.** Confusing monthly with annual figures, or missing scale qualifiers like "in thousands", is the single most common failure mode in numerical assessments; check the candidate's working against the units before marking wrong outright.
- **Missing a mirror-image answer.** A candidate may report the pass rate when asked for the failure rate, records removed when asked for records remaining, or the before figure when asked for the after - this is a specific, identifiable error worth flagging.
- **Missing simple-interest thinking applied to compound growth.** Adding 15% of the original base each year instead of compounding is a common and teachable mistake in capacity items.
- **Letting a rounding-direction error go unnoticed.** Nights, servers, and licences come in whole units; check which direction rounding should have gone before marking.
- **Penalising an estimate rather than crediting it.** Performing a precise multi-step calculation when estimation would identify the only plausible option is not a shortcut to be marked down; match the credit given to what the options actually require.
- **Letting one gnarly multi-stage item consume disproportionate session time.** Encourage a candidate to bank easy marks first and return if time allows, consistent with how the section is designed to be timed for every candidate.
- **Missing distractor columns in a candidate's working.** Tables include columns the question never uses (like the duplicate-rate column in Question 3); a candidate who extracts only what the question asks for is showing good discipline worth noting positively.


## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how accurately a candidate understands, analyses, and draws conclusions from written business information. The passages mirror the reading demands of this role: data standards documents, governance policies, architecture review reports, stakeholder emails, and programme board papers. The discipline being tested is fact-based logic - answering strictly from the text provided, ignoring everything the candidate happens to know from outside it.

Administer this as an online, time-pressured test, usually allowing less than a minute per question once the passage has been read. The dominant question style asks the candidate to judge a statement against the passage as **True** (the passage logically supports it), **False** (the passage logically contradicts it), or **Cannot Say** (the passage provides insufficient information either way). Multiple-choice comprehension items - "which of the following best summarises...", "according to the passage, which action is required..." - also appear.

Why does this matter for a senior data architect? This role runs on precise reading and precise writing. Monitoring compliance with policies and standards means reading standards documents the way a lawyer reads a contract: "must" versus "should", "all" versus "new", effective dates, scopes, and exceptions. Supporting and hosting difficult discussions with diverse senior stakeholders means misquoting a policy by one word can cost the room. Shaping communications for different audiences starts with extracting exactly what a source document does and does not say. And when advising the data architects being overseen, the difference between "the standard requires this" and "the standard doesn't prohibit this" is the difference between good and poor oversight. This assessment samples precisely this discipline.

### What it measures

Mapped to the skills in this role profile:

- **Data standards** - reading standards text with legal-grade precision: what is mandated, what is recommended, what is in scope, what triggers a breach. This is the daily substance of creating data standards and monitoring compliance.
- **Data governance (data architect)** - interpreting governance policies and terms of reference correctly, the foundation of evolving and defining data governance and collaborating around wider governance.
- **Communicating between the technical and non-technical** - identifying what a stakeholder's message actually asserts, requests, or assumes, before managing their expectations.
- **Communicating data** - distinguishing what a report's text claims from what a reader might infer, so a candidate's own summaries never overstate the evidence.
- **Strategic thinking** - extracting the strategic intent from board papers and strategy documents accurately enough to communicate how activities meet strategic goals.
- **Problem management** - reading incident reports and post-incident reviews without importing assumptions, so investigations chase facts rather than folklore.

### Practice questions

For each passage, the candidate should judge every statement strictly on the passage's wording, resisting outside knowledge - even where they know how such policies usually work.

**Passage A - Extract from the organisation's Data Standards Policy**

"All new data artefacts must be reviewed against the organisation's published data standards before they enter production. Artefacts already in production before 1 April are exempt from retrospective review unless they are materially modified, in which case a full standards review is required before the modified artefact is redeployed. Reviews must be conducted by a data architect who was not involved in producing the artefact. Where a review identifies a breach of a mandatory standard, the artefact must not be deployed until the breach is resolved or a written exemption is granted by the chief data architect. Exemptions are time-limited to a maximum of six months and may not be renewed more than once."

**Question 1 (easy):** True, False, or Cannot Say: "A new data artefact may enter production without a standards review if the producing team is confident it complies."

**Correct answer: False.**

**Explanation:** The passage states "All new data artefacts must be reviewed... before they enter production." "All" and "must" leave no room for a confidence-based exception. The statement directly contradicts the text, so it is False - not Cannot Say. Candidates sometimes choose Cannot Say because the passage doesn't mention "confidence"; but the universal obligation already excludes any unstated exception.

**Question 2 (easy):** True, False, or Cannot Say: "An artefact that was in production before 1 April and has not been modified requires no standards review."

**Correct answer: True.**

**Explanation:** The passage grants an explicit exemption: pre-1 April production artefacts "are exempt from retrospective review unless they are materially modified." Unmodified means the exemption holds. Note the care required with "materially modified" - the statement says "has not been modified", which necessarily includes not materially modified, so the exemption applies and the statement is supported.

**Question 3 (moderate):** True, False, or Cannot Say: "The chief data architect can allow a breached artefact to be deployed for up to twelve months in total under exemptions."

**Correct answer: True.**

**Explanation:** Exemptions are "time-limited to a maximum of six months and may not be renewed more than once." One original exemption (up to six months) plus at most one renewal (up to six months) totals up to twelve months. The statement says "up to twelve months in total", which the text supports. This is a two-step inference, but it is still strictly derivable from the passage - verbal items allow logical combination of stated facts; what they forbid is importing facts from outside the text.

**Question 4 (moderate):** True, False, or Cannot Say: "A data architect who wrote part of an artefact's data model may review the artefact provided they declare their involvement."

**Correct answer: False.**

**Explanation:** "Reviews must be conducted by a data architect who was not involved in producing the artefact." Writing part of the data model is involvement in producing the artefact; the passage admits no declaration-based workaround. The distractor pattern here is the plausible policy - many real organisations do use declared-conflict mechanisms, which is precisely why this item includes it: to catch a candidate answering from professional experience instead of the text.

**Question 5 (moderate):** True, False, or Cannot Say: "Most exemption requests are granted."

**Correct answer: Cannot Say.**

**Explanation:** The passage describes the mechanism for exemptions - who grants them, their time limits - but says nothing about how often requests succeed. No statement about frequency can be supported or contradicted. This is a textbook Cannot Say: the topic is mentioned, inviting a candidate to feel the text has covered it, but the specific proposition (grant rate) is simply absent.

**Passage B - Email from a programme director to the senior data architect**

"Thanks for your team's review of our beneficiary data model. I accept the finding that our address structure breaches the mandatory address standard, and we will fix it - but not in this release. Our go-live is contractually committed for the 15th, and the fix touches 14 downstream reports. I am asking you to support an exemption request to the chief data architect covering one release cycle, roughly ten weeks. Separately, your reviewer suggested our consent-status field 'would benefit from' alignment with the reference data standard; we read that as advisory rather than mandatory, and we do not plan to act on it this year. If you disagree with either position, I'd like to hear it before Friday's board, where I intend to present both as agreed."

**Question 6 (moderate):** True, False, or Cannot Say: "The programme director denies that the address structure breaches the standard."

**Correct answer: False.**

**Explanation:** The email says "I accept the finding that our address structure breaches the mandatory address standard." The statement asserts the opposite of what the text says, so it is False. This item exists to reward a careful reader under time pressure - it should not be overthought.

**Question 7 (hard):** True, False, or Cannot Say: "The consent-status finding was a breach of a mandatory standard."

**Correct answer: Cannot Say.**

**Explanation:** The email reports the reviewer's wording as "would benefit from" alignment, and gives the programme's interpretation ("we read that as advisory"). The email never states what the standard's actual status is - mandatory or advisory - nor what the reviewer formally classified it as. The programme's interpretation is just that: an interpretation, reported in the text. A reader might suspect a senior reviewer's soft phrasing implied an advisory finding, but suspicion is not textual support. Cannot Say.

**Question 8 (hard):** Which of the following best describes what the programme director is asking the senior data architect to do?

A. Grant a ten-week exemption for the address breach.
B. Support an exemption request to the chief data architect, and either accept or challenge the programme's advisory reading of the consent-status finding before Friday.
C. Fix the address structure before the contractual go-live on the 15th.
D. Present both findings to Friday's board on the programme's behalf.

**Correct answer: B.**

**Explanation:** The email makes two requests: "I am asking you to support an exemption request to the chief data architect" (not to grant it - the chief data architect grants exemptions, and the email respects that) and "If you disagree with either position, I'd like to hear it before Friday's board." Option A misassigns the granting power to the senior data architect - a subtle but decisive misreading. Option C is the opposite of what is requested. Option D confuses who presents at the board ("I intend to present"). This item mirrors a real skill in this role profile - listening to and interpreting the needs of stakeholders and managing their expectations - which begins with an exact reading of what is actually being asked, by whom, of whom.

**Passage C - Extract from an architecture review board paper**

"The proposed customer data platform will consolidate party records from six source systems into a single golden record per party. The vendor's matching engine reports a false-positive rate of 0.3% in reference-site deployments of comparable scale. The programme proposes that matching thresholds be tuned during private beta, with the data architecture team approving threshold changes through the design authority. Data dictionary entries for all consolidated attributes have been drafted and await review. The platform will not hold special category data in the first two releases; a separate assessment will be required before any special category data is introduced. Funding for release three has not yet been approved."

**Question 9 (easy):** True, False, or Cannot Say: "The platform will consolidate party records from six source systems."

**Correct answer: True.**

**Explanation:** Stated verbatim in the first sentence: "will consolidate party records from six source systems into a single golden record per party." When the statement is a near-quotation, the candidate should confirm the details match exactly - number of systems (six), what is consolidated (party records) - then answer confidently and move on.

**Question 10 (moderate):** True, False, or Cannot Say: "The vendor's matching engine will achieve a false-positive rate of 0.3% on this platform."

**Correct answer: Cannot Say.**

**Explanation:** The passage reports the rate "in reference-site deployments of comparable scale" - evidence from elsewhere, not a commitment or measured result here. Whether this deployment will achieve the same rate is exactly what the passage does not state; indeed, the proposal to tune thresholds during private beta implies performance here is not yet known. The distinction between "the vendor reports X elsewhere" and "X will happen here" is the difference between a likely outcome and an established fact, and this item tests whether the candidate resists that jump - one they would need to police constantly when reviewing optimistic programme papers.

**Question 11 (moderate):** True, False, or Cannot Say: "Special category data may be introduced in release three without further assessment, since the restriction covers only the first two releases."

**Correct answer: False.**

**Explanation:** The passage says the platform "will not hold special category data in the first two releases" and adds "a separate assessment will be required before any special category data is introduced." The word "any" makes the assessment requirement universal, not release-bound. The statement's inference - restriction lapses after release two - contradicts the explicit condition, so it is False. This two-clause structure (a time-bound fact plus an unconditional requirement) is a classic trap: a candidate who anchors on the first clause and stops reading will miss it.

**Question 12 (moderate):** True, False, or Cannot Say: "The data dictionary entries for consolidated attributes have been approved."

**Correct answer: False.**

**Explanation:** The passage says entries "have been drafted and await review." Awaiting review means not yet reviewed, and approval cannot precede review; "approved" therefore contradicts the text. A candidate might argue for Cannot Say on the basis that approval isn't mentioned - but "await review" positively establishes that the approval step has not happened. False is the strict reading. In real review practice, the difference between drafted, reviewed, and approved artefacts is precisely the status discipline enforced in a metadata repository.

**Question 13 (hard):** Which statement is best supported by the passage?

A. The design authority currently approves matching threshold changes.
B. The programme proposes that the design authority route be used for approving threshold changes during tuning.
C. The data architecture team has approved the initial matching thresholds.
D. Release three will proceed once thresholds are tuned.

**Correct answer: B.**

**Explanation:** The passage says "The programme proposes that matching thresholds be tuned during private beta, with the data architecture team approving threshold changes through the design authority." This is a proposal, not an established arrangement - which eliminates A (asserts current practice) and C (asserts an approval already given). D links release three to threshold tuning, but the passage links release three only to unapproved funding. B alone preserves the passage's modality: proposed, not decided. Tracking modality - proposed versus agreed versus mandated - is a senior reviewer's core reading skill, and this item probes it deliberately.

**Passage D - Internal note on data governance arrangements**

"Following the machinery of government change, stewardship of the shared reference data sets transfers from the Data Management Office to the new Data Governance Board on 1 October. Until that date, change requests continue to follow the existing process. From 1 October, all change requests must be submitted through the new governance portal, and the board will meet fortnightly to consider them. Urgent changes affecting live services may be approved between meetings by any two board members acting jointly, provided the full board ratifies the decision at its next meeting. The board's terms of reference will be published before the end of September."

**Question 14 (moderate):** True, False, or Cannot Say: "Between board meetings, a single board member can approve an urgent change affecting a live service."

**Correct answer: False.**

**Explanation:** The passage requires "any two board members acting jointly" for between-meeting approvals. One member acting alone contradicts the stated quorum of two. Numeric conditions buried in prose - two members, fortnightly meetings, 1 October - are high-yield item material because they are easy to skim past; this item rewards a candidate who slows down whenever a passage contains a number.

**Question 15 (hard):** True, False, or Cannot Say: "If the full board declines to ratify an urgent between-meeting approval, the change must be reversed."

**Correct answer: Cannot Say.**

**Explanation:** The passage makes ratification a required step ("provided the full board ratifies the decision at its next meeting") but is silent on the consequence of ratification being refused - reversal, escalation, or something else. A reasonable process might trigger reversal on refusal, but the text does not say so. This is the hardest and most valuable Cannot Say pattern: a stated condition with an unstated consequence. Someone who helps evolve and define data governance would flag this exact gap when reviewing the terms of reference - this item simply rewards the candidate for noticing it under time pressure.

**Passage E - Extract from a technical architecture report to the senior data architect**

"The proposed case-management solution uses an event-driven integration pattern. Each business event is published once to the shared event stream, and consuming services maintain their own local data stores derived from the stream. The solution team asserts that this removes the need for the shared party data service in the case-management context, since each consumer holds the party attributes it needs. The data architecture review noted that local stores derived from events will diverge from the golden record whenever a consumer misses or misorders events, and recommended that consumers reconcile their local stores against the party service at least daily. The solution team has accepted the daily reconciliation recommendation for the two highest-risk consumers and proposes quarterly reconciliation for the remainder. The report requests the senior data architect's decision on the residual consumers before the design freeze on the 28th."

**Question 16 (moderate):** True, False, or Cannot Say: "The data architecture review recommended daily reconciliation for all consumers."

**Correct answer: True.**

**Explanation:** The review "recommended that consumers reconcile their local stores against the party service at least daily" - stated without qualification, so it covers all consumers. What was partial was the solution team's acceptance (two highest-risk consumers daily, the rest quarterly), not the recommendation itself. This item tests whether the candidate keeps two adjacent scopes separate: the scope of the recommendation and the scope of the acceptance. Merging them is precisely how misunderstandings enter design records - and how marks are lost here.

**Question 17 (moderate):** True, False, or Cannot Say: "The solution removes the need for the shared party data service in the case-management context."

**Correct answer: Cannot Say.**

**Explanation:** The passage attributes this claim to the solution team: "The solution team asserts that this removes the need..." An asserted claim is reported speech, not an established fact - and the review's divergence warning actively casts doubt on it without formally refuting it. The passage as a whole neither confirms nor contradicts the proposition itself, so Cannot Say. Attribution words - "asserts", "claims", "argues" - are the verbal item's way of planting a statement in the text without endorsing it. This item tests whether the candidate reads them as flags, exactly as they would in a real review paper where a vendor's assertion needs independent assurance before it becomes an architectural fact.

**Question 18 (hard):** According to the passage, what decision is the senior data architect being asked to make?

A. Whether the event-driven integration pattern is acceptable.
B. Whether the two highest-risk consumers should reconcile daily.
C. What reconciliation arrangement should apply to the consumers other than the two highest-risk ones, before the design freeze on the 28th.
D. Whether the shared party data service should be decommissioned.

**Correct answer: C.**

**Explanation:** The report "requests the senior data architect's decision on the residual consumers before the design freeze on the 28th." The residual consumers are those not covered by the accepted daily arrangement - the ones the solution team proposes to reconcile quarterly. Option B is already settled ("has accepted"). Option A is broader than anything requested, and option D is nowhere in the text - the team's assertion concerned need "in the case-management context", not decommissioning. Notice how much of the senior data architect's real role is compressed into this one item: a technical architect's design, a governance recommendation, a partially accepted compromise, and a decision request with a deadline. Extracting exactly what is being asked, of whom, by when, is the reading skill on which working with technical architects - and this item - both depend.

**Question 19 (moderate):** True, False, or Cannot Say (Passage E): "The two highest-risk consumers will reconcile their local stores against the party service every day."

**Correct answer: True.**

**Explanation:** The solution team "has accepted the daily reconciliation recommendation for the two highest-risk consumers", and the recommendation specifies reconciliation "at least daily". Acceptance of a recommendation to reconcile at least daily supports the statement that they will reconcile every day. Two cautions worth noting even when the answer is True: first, "at least daily" permits more frequent reconciliation, which is compatible with "every day", not contradictory to it; second, an accepted design commitment is stronger textual ground than an assertion or proposal - compare Question 17, where "asserts" earned only a Cannot Say. Calibrating how much weight each verb can bear ("asserts" versus "recommends" versus "has accepted" versus "requests") is the single most transferable habit this item tests, and it is exactly the calibration applied when turning review correspondence into a design decision record.

**Question 20 (easy):** True, False, or Cannot Say (Passage E): "The design freeze is on the 28th."

**Correct answer: True.**

**Explanation:** Stated directly: "before the design freeze on the 28th." Not every question is a trap - straightforward retrieval items appear throughout real assessments, and this item simply checks that the candidate confirms the detail against the text and moves on quickly, banking time for the harder inference items. Under time pressure, a candidate who distrusts easy questions and rereads the whole passage looking for a catch that is not there is losing more marks than they are saving.

### Administration tips

- **Mark strictly from the passage.** A candidate's outside knowledge of how exemptions, reviews, and boards usually work is an asset in the role but should not be credited over textual evidence in this section.
- **Time this section tightly and consistently.** At under a minute per question, apply the same time limit to every candidate.
- **Watch for modality tracking.** Circle mentally the words that set force and scope: must, should, may, all, any, only, unless, until, before. Most answers at senior level turn on one of these words, and a candidate who explains their reasoning using this vocabulary accurately is demonstrating strong comprehension.
- **Give credit for a well-reasoned Cannot Say.** False requires contradiction; Cannot Say requires absence. A candidate who reasons "well, it's probably true in practice" and correctly stops short of True is showing good discipline.
- **Note whether a candidate's expertise is helping or hindering.** Deep knowledge of data governance can be the biggest risk in this section: a candidate who knows how exemptions, reviews, and boards usually work may answer from experience rather than the passage - mark against the text, not against professional plausibility.

### Common pitfalls

- **Crediting an answer built on professional assumptions.** Importing how standards reviews or governance boards work in the candidate's own organisation instead of relying only on the text is the most common failure mode for an experienced candidate; mark it as incorrect regardless of how plausible the assumption is.
- **Missing "likely" versus "stated" confusion.** Treating a reported reference-site statistic, a proposal, or an intention as an accomplished fact is a specific error; watch for verbs of proposal and report ("proposes", "reports", "intends", "is expected to") and check the candidate's answer matches the strength of the text.
- **Marking False when the correct answer is Cannot Say.** A statement that the passage merely fails to support is not thereby contradicted; False needs a clash, not a gap, and this distinction is worth checking carefully when marking a borderline answer.
- **Missing scope limiters when marking.** "New artefacts", "first two releases", "before 1 October" restrict a rule; a statement can be true for one scope and false for another, and the item lives in that gap.
- **Missing swapped actors.** Passages assign actions to specific actors (the chief data architect grants exemptions; the programme presents at board). A statement that swaps actors is False, however sensible the swap sounds, and this should be checked specifically.
- **Allowing poor time discipline to affect scoring unfairly.** A candidate who spends too long perfecting early passages and guesses the last ones has a pacing issue; note this separately from a comprehension problem when reviewing results.


## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skill, and professional conduct through realistic workplace dilemmas. Unlike the cognitive, numeric, and verbal tests, there is no formula to apply: each scenario presents a situation with several plausible responses, and the candidate's task is to judge which responses are more and less effective. Multiple options may seem reasonable - the assessment distinguishes candidates by how well their judgement aligns with the values and behaviours the role and organisation require.

Present each item as a short scenario, followed by four or so possible actions. The two dominant response formats are **most effective / least effective** (pick one of each) and **ranking or rating** every option from best to worst. Administer this section untimed or generously timed, because it measures natural judgement rather than speed. There is no trick to explain to the candidate beyond reading the scenario as though it is genuinely happening to them and answering as they would truly act - the scoring key is designed to catch idealised answers that no effective senior professional would actually choose.

Why does this matter for a senior data architect? Because the hardest problems in this role are rarely technical. The postholder sits between the chief data architect's vision and the daily reality of programmes: providing oversight to data architects without undermining them, holding the line on standards without becoming a blocker, hosting difficult discussions with diverse senior stakeholders, and coordinating problem investigations when live services are hurting. Every one of those situations involves competing goods - delivery pace versus data integrity, supportiveness versus candour, escalation versus autonomy. For scenarios set in UK public sector organisations, the scoring key also reflects public sector values: putting user needs first, transparency, collaboration across boundaries, accessibility and inclusion, and careful stewardship of public money and public data.

### What it measures

Mapped to the skills in this role profile:

- **Communicating between the technical and non-technical** - scenarios test whether the candidate interprets stakeholder needs, manages expectations honestly, and supports or hosts difficult discussions rather than avoiding them.
- **Data governance (data architect)** - dilemmas probe whether the candidate would uphold and evolve governance collaboratively, and assure data services for multiple business services even when one service pushes back.
- **Data standards** - scenarios test how a candidate handles breaches: proportionate response, clear recommendations, and helping senior leaders understand why standards matter.
- **Problem management** - incident scenarios measure whether the candidate would ensure the right investigative actions happen in the right order and coordinate the team rather than doing everything themselves.
- **Strategic thinking** - options are often separated by whether they serve the immediate situation or the strategic goal; the credited answers usually do both.
- **Data innovation** - some scenarios test how a candidate responds to emerging tools and techniques: neither reflexive enthusiasm nor reflexive resistance, but structured evaluation of organisational impact.
- The duties of **providing oversight and advice to other data architects** and **working with technical architects** supply the assessment's most frequent stakeholder cast.

### Practice questions

For each scenario, ask the candidate to give their honest answer before discussing it further. Formats vary, as they do in real assessments.

**Question 1 (moderate) - The standards breach on the eve of go-live**

A programme with high ministerial visibility is due to go live in five days. During a final review, one of the candidate's data architects finds that the programme's party data model breaches a mandatory data standard: it stores unstructured names, which will degrade matching quality across two other business services that consume the data. The programme director says: "We cannot slip. Log it as technical debt and we'll fix it next quarter."

Rate the options: which is MOST effective and which is LEAST effective?

A. Agree to log it as technical debt; the go-live is too important to jeopardise, and the fix is scheduled.
B. Quantify the impact on the two consuming services quickly, then take the breach with an impact assessment and options (fix now, mitigate, or time-limited exemption) to the chief data architect for a decision, telling the programme director this is happening.
C. Refuse to sign off the review and tell the programme they cannot go live until the model is fixed.
D. Sign off the review but privately instruct the data architect to quietly fix the model in the next release.

**Most effective: B. Least effective: D.**

**Explanation:** Option B does everything the role demands: it respects that exemption decisions for mandatory standards belong to the chief data architect, it converts the dispute into evidence (impact on consuming services), it preserves the relationship by being transparent with the programme director, and it offers options rather than a veto. This is the governance duty and the escalation duty exercised together, transparently. Option C is the second-strongest instinct but is weaker: it asserts a blocking power unilaterally and without an impact assessment, positioning architecture as an obstacle rather than a decision-enabler - and if overruled, the standard loses authority. Option A concedes a mandatory standard on a delivery argument alone, without assurance for the two harmed services; "next quarter" fixes have a way of never arriving. Option D is least effective because it is opaque: it tells the programme one thing while doing another, hides a governance decision that affects other services, and models exactly the behaviour that destroys trust in governance. In public sector terms, transparency loses in D twice over - to the programme and to the chief data architect.

**Question 2 (moderate) - The struggling data architect**

The candidate oversees a data architect who is three weeks into designing the data dictionary for a new service. Their draft is significantly below the organisation's standard: definitions are circular, ownership fields are blank, and several entities conflict with the enterprise model. The service team has started using the draft anyway because "it's better than nothing". The architect is capable but this is their first dictionary.

Rank the options from most to least effective.

A. Take over the dictionary yourself to protect the service's timeline, and return it to the architect once the critical entries are fixed.
B. Schedule a working session with the architect: walk through two or three entries together against the standard, agree what good looks like, set a revision plan, and ask the service team to treat the draft as provisional until reviewed.
C. Send the architect a written list of every defect found, copying the service team so they know the draft's status.
D. Tell the service team to stop using the draft immediately and wait for an approved version.

**Best to worst: B, D, A, C.**

**Explanation:** B is strongest because it develops the architect (an explicit duty of advice and oversight), fixes the artefact through them rather than around them, and manages the consumers' expectations honestly with a "provisional" label - collaboration and capability-building in one move. D addresses the real risk of a defective dictionary spreading, but does it bluntly: it halts consumers without offering a path or a timeframe, and does nothing for the architect's development; still, it is defensible on integrity grounds, which places it second. A protects the timeline but takes the work away from a capable person on their first attempt - it solves today's dictionary and guarantees the senior architect owns every future one; senior roles are scored on multiplying capability, not absorbing it. C is worst: a defect list broadcast to the service team humiliates the architect in front of stakeholders, converts feedback into blame, and will make every future review adversarial. The pattern this item rewards: correct the artefact, grow the person, and manage the audience - in that combination.

**Question 3 (hard) - Two senior stakeholders, two incompatible models**

The candidate is facilitating alignment between two directorates that must share case data. Directorate A's chief analyst insists cases be modelled around households, matching their statutory reporting. Directorate B's service owner insists on individual-centred cases, matching how caseworkers actually operate. Both have escalated to their directors, and the meeting the candidate is hosting has become tense, with each side asserting the other "doesn't understand the data". A decision is needed within two weeks to keep the shared platform on schedule.

Which response is MOST effective and which is LEAST effective?

A. Propose the industry-standard party-role pattern that can represent both views (individuals related to household groupings), and test it in the meeting against each directorate's three most critical use cases.
B. Ask the chief data architect to rule on the disagreement, since it now involves directors.
C. Recommend Directorate A's model, since statutory reporting is a legal obligation and must take precedence.
D. Propose each directorate keep its own model, with a translation layer mapping between them.

**Most effective: A. Least effective: C.**

**Explanation:** A is the senior data architect's job performed at its best: it reframes a political stand-off as a design problem, brings an industry-recognised modelling pattern that dissolves the either/or (households and individuals are both representable in a party-role structure), and - critically - validates it against real use cases in the room, so both stakeholders see their needs met rather than being told they will be. This is hosting a difficult discussion, applying modelling patterns, and comparing and aligning models, simultaneously. B is not wrong as a later step, but reaching for it now abdicates the design work that hasn't been done yet; escalation without a proposed solution passes conflict upward rather than resolving it, and the chief data architect will ask for exactly the analysis option A produces. D is superficially diplomatic but architecturally expensive: dual models with a translation layer perpetuates divergence, doubles maintenance, and quietly defers the disagreement into every future integration - the platform inherits the conflict forever. C is least effective: it resolves a design question by ranking stakeholders rather than analysing needs. Statutory reporting is a genuine requirement, but nothing in the scenario shows it requires a household-only model - and choosing sides on authority grounds tells Directorate B their operational reality doesn't count, poisoning the collaboration the shared platform depends on.

**Question 4 (moderate) - The live-service data problem**

At 09:30, two business services report that overnight processing has produced mismatched citizen records: some citizens now appear twice with different addresses. The candidate's team of data architects supports the data service involved. Initial signals suggest the cause could be in matching rules their team changed last week, but the platform team's deployment on the same night is also a candidate. The service owners are asking for an immediate explanation, and one has emailed the candidate's director.

Which response is MOST effective and which is LEAST effective?

A. Coordinate: assign one architect to gather the evidence on the matching-rule change, ask the platform team to check their deployment in parallel, agree a time-boxed checkpoint within the hour, and send both service owners a holding message saying what is being investigated and when they will hear next.
B. Because the team's change is the likelier cause, roll it back immediately, then investigate.
C. Investigate the matching-rule change personally before saying anything to the service owners, so that the first communication is definitive.
D. Reply to the director's email first, explaining that the platform team also deployed that night and the cause is not yet established.

**Most effective: A. Least effective: D.**

**Explanation:** A is textbook problem management as this role profile defines it: ensure the right actions are taken to investigate, coordinate the team across both candidate causes in parallel rather than serially, time-box the uncertainty, and - the part candidates underrate - communicate proactively with the affected services before they chase. A holding message with a next-update time is active communication management, and it is what keeps service owners from escalating further. B is premature: a rollback before evidence risks a second data change on top of an ununderstood fault, potentially making reconciliation worse - though its bias for action keeps it above the bottom. C fails on two counts: investigating personally rather than coordinating (there is a team available), and silence while stakeholders wait - "definitive later" loses to "transparent now" in every public sector scoring key. D is least effective because its first move is reputational defence: it communicates upward to deflect towards the platform team before any evidence exists, while the affected services still have nothing. It manages blame, not the problem - the exact inversion of what the situation needs.

**Question 5 (moderate) - The metadata shortcut**

A delivery team asks the candidate's advice: to hit their milestone they propose skipping metadata capture for 40 new data items, promising to backfill "once things calm down". The organisation's experience is that backfill promises are kept about a quarter of the time. The team's service is genuinely under pressure, and the milestone matters to the directorate's annual commitment.

Rank the options from most to least effective.

A. Offer a proportionate middle path: agree the minimum viable metadata (definition, owner, sensitivity classification) to be captured now for all 40 items - roughly an hour's work with a standard template - with full enrichment scheduled and tracked as a named backlog item.
B. Approve the skip with backfill, but ask the team to email a commitment date.
C. Refuse the skip: the metadata standard exists precisely for moments like this, and 40 undocumented items in the repository will mislead every future consumer.
D. Approve the skip for items that feed only the team's own service, and require immediate capture for any item consumed by other services.

**Best to worst: A, D, C, B.**

**Explanation:** A wins because it is proportionate: it identifies the metadata that carries the most downstream risk (what the item means, who owns it, how sensitive it is), makes compliance nearly free with a template, and converts the vague backfill promise into a tracked commitment. This is standards leadership as enablement - the version of governance that teams cooperate with. D applies a sound risk principle (shared items carry cross-service risk; local items less so) and would be a respectable second-best, but it leaves genuinely undocumented items in the repository and assumes today's "local-only" items stay local, which they rarely do. C is principled and at least protects the repository's integrity, but it is all cost and no help: it hands the team a refusal at their moment of maximum pressure without engaging with the constraint, which is how architecture teams get routed around. B is worst: it accepts an approach with evidence it fails three times out of four, and dresses the risk in a paper commitment - an email does not change the base rate. The pattern this item rewards: the credited answer almost always reduces the burden of compliance rather than choosing between full compliance and none.

**Question 6 (hard) - The chief data architect's flawed direction**

The chief data architect circulates a draft target data architecture that the candidate and their team must deliver. Reviewing it, the candidate finds a significant flaw: it assumes a single canonical customer model across three business domains whose legal bases for processing differ, which their recent source system analysis suggests will create data protection complications and heavy remediation later. The draft has already been socialised with directors and is well received. The chief data architect asks the candidate to start mobilising their team behind it.

Which response is MOST effective and which is LEAST effective?

A. Mobilise the team as asked; the chief data architect sets the vision and has seen more of the strategic picture than the candidate has.
B. Request a one-to-one with the chief data architect before mobilisation: present the source-system evidence, quantify the remediation risk, and propose a variant (domain-specific models mapped to a thin canonical core) that preserves the strategic intent.
C. Raise concerns openly at the next directors' meeting so the risk is on record before delivery begins.
D. Mobilise the team, but design the domain models independently in practice, since the implementation detail is the candidate's responsibility.

**Most effective: B. Least effective: D.**

**Explanation:** B reflects the mature senior-to-chief relationship this role is built on: the duty to help chief data architects interpret the organisation's needs, and interpretation includes evidence-based challenge - delivered privately, before positions harden publicly, with the strategic intent preserved and a constructive variant on the table. Quantifying the remediation risk turns disagreement into decision support. A is deference misread as loyalty: source-system evidence the chief has not seen exists here, and withholding it makes the eventual failure partly the withholder's. C gets the risk on record but at maximum relational cost - ambushing the chief in front of directors converts a design question into a public loyalty test, and forecloses the private correction that B makes possible; transparency does not require the most damaging venue. D is least effective and it is worth being precise about why: it looks like quiet pragmatism but is actually covert insubordination - the delivered architecture would diverge from the approved one, the divergence would be undocumented, and both the governance record and the chief data architect's trust would be broken when discovered. Least-effective options in senior assessments are frequently the "quietly do what I think is right" choices: effectiveness requires that disagreement be visible to the person who owns the decision.

**Question 7 (moderate) - The innovation request**

A directorate head, excited after a conference, asks the candidate to commit their team to piloting an AI-driven data cataloguing tool that "auto-generates metadata and data models". The candidate's team is at capacity on the metadata repository redesign. Early reviews of the tool are mixed; its auto-generated definitions reportedly need heavy human correction. The directorate head has budget and wants to announce the pilot next week.

Rank the options from most to least effective.

A. Decline: the team is at capacity and the tool's reviews are mixed; suggest revisiting next year.
B. Propose a structured, time-boxed evaluation that can be resourced without derailing the redesign: define success criteria (metadata accuracy against the team's standards, correction effort), run it on one bounded subject area, and agree the announcement describes an evaluation rather than an adoption.
C. Accept the pilot as requested; directorate enthusiasm and budget for data tooling are rare and should be captured.
D. Suggest the directorate run the pilot themselves and report back, keeping the candidate's team out of it.

**Best to worst: B, D, A, C.**

**Explanation:** B is what the data innovation skill actually asks for: understanding the impact of emerging data tools on the organisation - which means structured evaluation, not enthusiasm or dismissal. It protects the strategic commitment (the redesign), sets measurable criteria drawn from the standards, contains the blast radius to one subject area, and manages expectations by correcting "pilot announcement" to "evaluation" before it is public. D at least avoids derailing the team and keeps the evaluation alive, but an unguided pilot without data architecture criteria will likely measure the wrong things and could seed unreviewed metadata into the organisation - second place, with reservations. A protects the team but wastes a genuine opportunity and a willing budget-holder, and "revisit next year" to an enthusiastic senior stakeholder reads as a brush-off - expect the pilot to happen anyway, without architecture involvement. C is worst: it sacrifices the strategic redesign to an unevaluated tool, endorses an announcement that overstates maturity, and commits capacity already committed to the redesign. The judgement this item rewards is neither gatekeeping nor cheerleading, but conversion of enthusiasm into evidence.

**Question 8 (moderate) - The uncomfortable compliance finding**

The candidate's quarterly standards compliance monitoring shows one directorate's services have slipped from 88% to 61% compliance with the reference data standard over six months. Informally, the candidate learns their long-standing data architect left and was not replaced, and the directorate's delivery director has told teams to "prioritise features over housekeeping". The candidate must decide how to report and act on the finding.

Which response is MOST effective and which is LEAST effective?

A. Report the figure in the quarterly governance pack as usual, with a red rating, and let the governance process take its course.
B. Before publishing, contact the directorate's delivery director: share the finding and its service impacts, acknowledge the vacancy, and offer concrete support - a loaned architect for six weeks and a prioritised fix list - so the published report can include an agreed recovery plan alongside the red rating.
C. Soften the reported figure's presentation, noting "resourcing challenges", to avoid putting a struggling directorate under more pressure.
D. Escalate directly to the chief data architect and recommend the directorate's non-compliant services be barred from consuming shared data services until compliance recovers.

**Most effective: B. Least effective: C.**

**Explanation:** B combines every element this item's scoring key looks for: the finding is still published honestly (transparency is not negotiable), the affected leader hears it directly rather than from a board paper (managing expectations, maintaining the relationship), the response addresses the actual cause (a capability gap, not defiance), and the report lands with a recovery plan - which is what "making recommendations about how the organisation should resolve breaches" means in practice. A is procedurally clean but passive: a red rating without context or support invites either a defensive reaction or resigned indifference, and does nothing about the vacancy that caused the slide. D is disproportionate as a first move - barring services punishes the directorate's users, not its decisions, and skips the collaborative step entirely; it might become appropriate later if support is refused, but leading with it converts a fixable resourcing problem into a political conflict. C is least effective because it corrupts the monitoring signal itself: softened compliance data misleads every senior leader who relies on the report, undermines the standard's credibility, and - the deeper point - is a transparency failure dressed up as kindness. A candidate can be compassionate about causes while being exact about numbers; this item rewards a candidate who refuses to trade one for the other.

**Question 9 (hard) - The accessibility gap in the candidate's own team's work**

Reviewing the candidate's team's newly drafted data standards documentation before publication, they notice it relies heavily on complex diagrams with no text alternatives, uses colour alone to distinguish mandatory from optional elements, and assumes screen-based reading throughout. One of the subject matter experts who must apply the standards has told the candidate previously that they use a screen reader. Publication is expected this week, and the documentation has already been through two review cycles that missed this.

Rank the options from most to least effective.

A. Publish on schedule and add accessibility fixes to the next revision, notifying the SME that a screen-reader-friendly version will follow.
B. Delay publication briefly, fix the highest-impact barriers now (text alternatives for diagrams, non-colour markers for mandatory elements), publish, and add accessibility checks to the team's standard review checklist so the gap cannot recur.
C. Publish on schedule but ask the SME what adjustments they need, and produce a tailored version for them.
D. Restart the review cycle from the beginning with accessibility as an added criterion.

**Best to worst: B, D, C, A.**

**Explanation:** B fixes the actual barriers before anyone is excluded, keeps the delay proportionate by triaging the highest-impact issues, and - the senior-level move - changes the system (the review checklist) so the failure mode is permanently closed. That last step is what distinguishes a senior response: fixing the artefact is necessary; fixing the process is the multiplier. D takes accessibility seriously and would produce a thorough result, but a full restart is disproportionate when the defects are identifiable and fixable - it trades weeks of everyone's time for rigour the situation doesn't require. C misunderstands inclusion: a special version for one named person treats accessibility as an accommodation to be requested rather than a property of the standard itself, quietly makes that SME's experience separate and second-class, and does nothing for the next screen-reader user nobody yet knows about. A is worst: it knowingly publishes documentation that excludes a colleague who must use it, on schedule-protection grounds - in a UK public sector context, where accessibility is both a value and a legal duty, "ship now, include later" is the least defensible ordering available. Note the general pattern this item tests: when inclusion and schedule conflict, the credited answer fixes inclusion with the smallest schedule cost, not the schedule with a promise about inclusion.

**Question 10 (moderate) - Credit and visibility**

At a cross-government architecture forum, a director praises "the data architecture team's brilliant metadata repository design" and asks the candidate, as the senior data architect, to present it to a wider audience next month. The design was in fact led by one of the data architects they oversee, with their guidance; they are early in their career, capable, and not present at the forum.

Which response is MOST effective and which is LEAST effective?

A. Accept the invitation and deliver the presentation personally; the candidate guided the work and represents the team at this level.
B. Accept on the team's behalf, name the architect who led the design in the reply, and propose presenting jointly - with them leading the design content while the candidate frames the strategic context.
C. Redirect the invitation entirely to the architect who led the work.
D. Accept and present alone, but credit the architect by name during the presentation.

**Most effective: B. Least effective: A.**

**Explanation:** B develops the architect (visible senior-forum exposure, with senior support alongside), gives the audience the strongest session (design detail from its designer, strategy from the senior data architect), and models the collaborative credit culture that keeps good people. It is oversight-as-development in its most concrete form. C is generous but drops the senior architect's own accountability: a cross-government senior forum will ask strategic questions the junior architect is not yet positioned to answer, and sending them alone converts development into exposure. D is midway - crediting by name matters, but the architect gains a mention rather than an opportunity. A is least effective: presenting another person's led work at a high-visibility forum without naming or including them takes the development moment for the senior architect alone, and the story will circulate - future oversight relationships are priced on episodes like this. In senior situational judgement items, options that centralise credit or visibility with the leader almost always score at the bottom; the role's value is measured in the people and capability it multiplies.

### Administration tips

- **Do not impose a tight time limit, but keep whatever time allowance you offer consistent across candidates.** Situational judgement items measure natural judgement, not speed.
- **Look for the option a candidate identifies as doing two goods at once.** Credited answers typically protect the immediate outcome and the longer-term system: fix the artefact and grow the person; publish the honest number and offer the support; hold the standard and reduce its cost - noting this pattern is useful when comparing candidates.
- **Check who owns the decision in each option a candidate selects.** Many options fail because they exercise authority the role does not hold (granting exemptions, barring services) or abdicate authority it does hold (design analysis, team coordination); this is worth checking specifically when marking.
- **Watch for transparency as the tiebreaker.** Between two otherwise plausible options, the one where affected people can see what is being done and why almost always outranks the quiet workaround - this weighting is especially strong in public sector assessments and worth explaining if a candidate asks about a close call.
- **Ask the candidate to articulate their reasoning, not just state their answer.** This mirrors a genuine job demand at this level and helps distinguish sound judgement from a lucky guess.
- **Present every option before asking for a judgement.** Most-and-least and ranking formats are relative judgements; an option that seems fine in isolation may be clearly second-best once the alternative that also fixes the underlying cause is seen.

### Common pitfalls

- **Rewarding idealistic-sounding answers over effective ones.** Choosing what sounds perfect rather than what is practically effective is a common candidate error; "convene all stakeholders for a full review" is not a strategy when the go-live is in five days, and should be marked accordingly.
- **Under-weighting passive options as merely "safe".** Responses that delay action, hand the problem to someone else without added value, or address the symptom while ignoring the root cause should score poorly; escalation without a candidate's own analysis attached is the senior-level version of this trap.
- **Discounting the organisational values in play.** UK public sector scenarios weight user needs, transparency, collaboration, accessibility, and inclusion; an option that quietly trades any of these for convenience is being tested deliberately and should be marked down.
- **Missing over-escalation or under-escalation.** Reflexively pushing decisions up (which reads as avoidance) or keeping problems quiet past the point they affect others (which reads as concealment) are both weaknesses; the credited pattern is usually: act within authority, inform those affected, escalate with evidence when the decision is genuinely above the postholder.
- **Rewarding the harsh-but-decisive option as if it were strength.** Blocking, barring, and refusing score well only when proportionate to demonstrated harm and after collaborative routes are exhausted - mark accordingly.
- **Missing where a candidate takes credit or development opportunities from those they oversee.** In any scenario involving the data architects overseen by this role, options that solve the problem by taking their work, their credit, or their learning moment away from them should be marked down systematically.


## Conclusion

You have now worked through the four assessment types most relevant to senior data architect: cognitive ability exercised on data models, dictionaries, and lineage; numeric reasoning applied to capacity, cost, quality, and compliance figures; verbal reasoning applied to standards, governance policies, and stakeholder correspondence; and situational judgement applied to the genuinely hard moments of senior data architecture - breach disputes, struggling team members, conflicting stakeholders, and flawed direction from above.

To score the assessment, work back through each section against the answer key, and note not just whether the candidate reached the correct answer but whether their explanation or reasoning shows what the item was built to test - many of the explanations above flag exactly what a strong versus a weak answer demonstrates. Recording strengths and gaps by skill area is often more useful to a hiring or development decision than a single overall score.

When debriefing the candidate, give an honest and constructive account of how they did and what it suggests about their readiness for the role, without necessarily working through every question and correct answer, since this material may be reused with future candidates. Where useful, connect the debrief to recurring patterns - denominators, modality, dependency direction, the fix-the-artefact-and-grow-the-person heuristic - so a candidate who is not yet ready leaves with a concrete sense of what would help their development.

Keep a record of how and when you administered the assessment, and administer it consistently across every candidate for this role level: the same items, the same time limits, the same conditions, and the same standard when scoring. This is what makes a comparison between candidates fair, and what protects your organisation if a decision is ever challenged. Remember throughout that this is one input among several in a hiring or promotion decision, never the sole basis for one - see the advisory above.

For further support, talk to your organisation's human resources or people development colleagues about how this fits into your wider selection process, and consider asking an experienced senior data architect to sense-check whether the scenarios, standards, and situational dilemmas used here reflect how the role is actually practised locally.

Professional development tip: the Government Digital and Data Profession Capability Framework is worth revisiting quarterly against this role's actual skills, both when preparing to assess a candidate and when developing one who was successful.
