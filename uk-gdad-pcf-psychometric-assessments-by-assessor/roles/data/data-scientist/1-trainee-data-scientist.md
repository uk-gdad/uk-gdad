# Data Scientist (Trainee Data Scientist) - Psychometric Assessments

## Introduction

Welcome. This resource supports you in administering a workplace job-specific psychometric assessment to a candidate for the trainee data scientist role level within the UK Government Digital and Data profession. Whether you are running a recruitment exercise, an assessment for a development scheme, or a structured selection process, this document gives you a ready-made set of assessment material aligned to this entry-level role.

A psychometric assessment is a structured, standardised test that measures how a candidate thinks, reasons and makes decisions at work. Employers use these assessments because they are fair and objective: every candidate answers the same kinds of questions, and every candidate is scored the same way. For a trainee data scientist, the material is genuinely job-relevant: the role involves exploring data, spotting patterns, interpreting statistical outputs, reading policy and technical documents, and working sensibly within a multidisciplinary team. Those are exactly the abilities these assessments measure.

This document is organised into four main assessment sections, each matched to the role:

1. **Workplace job-specific cognitive assessment** - measures pattern recognition, logical thinking, error checking, and problem solving using the kinds of data artefacts a trainee data scientist handles every day.
2. **Workplace job-specific numeric reasoning assessment** - measures how well a candidate works with tables, percentages, ratios, and performance metrics, just like interpreting model results or survey data.
3. **Workplace job-specific verbal reasoning assessment** - measures how carefully a candidate reads and draws conclusions from written material such as data ethics guidance, team emails, and technical standards.
4. **Workplace job-specific situational judgement assessment** - measures a candidate's judgement in realistic workplace situations involving a team, a manager, and the people who use the analysis.

Each section explains what the assessment measures, maps it to the specific skills in the role profile (such as applied maths and statistics, data engineering, data ethics and privacy, and programming), and then gives a generous set of practice questions with full worked answers. Each section finishes with administration and scoring guidance.

How should you use this resource? Present the same questions and hold every candidate for this role level to the same time limit, so that results are comparable across a field. Keep the worked explanations to yourself as an answer key until scoring is complete - candidates should attempt the questions honestly, without seeing the reasoning in advance. After scoring, use the explanations to debrief the candidate: where their reasoning matched the answer key, and where it diverged. Because this is an entry-level role, strong answers at this level often involve asking questions, checking before acting, and escalating appropriately rather than solving everything alone - score with that in mind rather than expecting senior-level independence. Treat the result as one input among several - alongside the interview, references and any other evidence - rather than as a standalone verdict, and keep a record of your reasoning as you go so the process is auditable and consistent across every candidate.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment is a targeted psychometric test that measures the exact mental processes needed in the trainee data scientist role. Unlike a generic IQ test, it uses practical workplace scenarios and realistic data so that a candidate's score genuinely predicts how they will perform on the job. Instead of abstract puzzles about shapes and colours, the candidate will see questions built around the artefacts a trainee data scientist really handles: data tables, chart outputs, simple scripts, data dictionaries, validation reports, and messages from teammates.

The typical format is an online, timed test lasting around 15 to 30 minutes. Questions are multiple choice, and difficulty may increase as the candidate goes (some modern platforms adapt the difficulty based on previous answers). Results are usually compared against a benchmark or norm group, and many employers look at both speed and accuracy rather than a single raw score. Candidates will almost always get a few short, ungraded practice questions at the start so they can get used to the interface. Questions used in real recruitment are carefully validated so that they predict job success without bias, which means the test can be trusted to measure ability, not trivia.

Why does this matter for a trainee data scientist? Because data science is, at its heart, structured thinking about messy information. Every day the role involves exploring data, looking for patterns, checking for errors, and deciding what to do next. A cognitive assessment simply measures those same habits of mind in a compressed, standardised form.

### What it measures for this role level

The cognitive assessment maps directly onto the skills in the role profile:

- **Applied maths, statistics and scientific practices**: pattern recognition questions test the same instincts used to inspect, explore, and visualise data, and to interpret statistical output effectively and accurately.
- **Data engineering**: error-checking questions mirror the work of cleansing and preparing data, spotting inconsistencies between a source table and a transformed table.
- **Programming and build (data science)**: logical deduction questions reflect the reasoning used when writing simple scripts under supervision, such as following a sequence of steps and predicting the result.
- **Data science innovation**: problem-solving questions reward exactly the inquisitive, curious approach to data the role calls for; the best answers usually come from asking "what else could explain this?"
- **Understanding product delivery**: prioritisation questions test how a candidate would manage their contribution to tasks so it fits in with the work of a wider team.

### Practice questions

Present these questions to the candidate. In a real test a candidate would have roughly one minute per question; use the same time allowance for every candidate for this role level, and use the worked explanations below as your answer key.

#### Question 1 (easy) - Number pattern in model outputs

A candidate is checking a sequence of weekly record counts from a data pipeline that should grow steadily: 1,200; 1,350; 1,500; 1,650; ?

What is the next expected value?

- A) 1,700
- B) 1,750
- C) 1,800
- D) 1,850

**Correct answer: C) 1,800**

**Explanation:** Look at the difference between consecutive values: 1,350 - 1,200 = 150; 1,500 - 1,350 = 150; 1,650 - 1,500 = 150. The pattern adds 150 each week, so the next value is 1,650 + 150 = 1,800. This is exactly the kind of quick sanity check performed when monitoring a pipeline: if next week's count came in at 2,400, the pattern break should prompt investigation rather than an assumption that the data is fine.

#### Question 2 (easy) - Error checking a data transfer

A colleague has copied citizen service records from a source table to a cleaned table. Compare the two rows below.

Source: `REF-4821 | 2026-03-14 | Newport | Completed`
Cleaned: `REF-4821 | 2026-03-14 | Newport | Complete`

Which field contains a discrepancy?

- A) The reference number
- B) The date
- C) The location
- D) The status

**Correct answer: D) The status**

**Explanation:** Working left to right, the reference number, date, and location match exactly. The status changed from "Completed" to "Complete". This might seem tiny, but in data preparation it matters enormously: if some rows say "Completed" and others say "Complete", a script that filters on the exact text will silently drop half the records. Careful, character-level checking is a core data-cleansing habit, and it is precisely what this question style measures.

#### Question 3 (easy) - Following a simple script

The candidate is reading a simple script under supervision. It does the following, in order:

1. Load a table of 500 survey responses.
2. Remove rows where the age field is blank (40 rows are blank).
3. Remove rows where the postcode is invalid (25 rows have invalid postcodes, and 5 of those also had a blank age).
4. Count the remaining rows.

What count does the script print?

- A) 435
- B) 440
- C) 445
- D) 460

**Correct answer: B) 440**

**Explanation:** Step 2 removes the 40 blank-age rows, leaving 500 - 40 = 460. Step 3 removes rows with invalid postcodes, but 5 of the 25 invalid-postcode rows were already removed in step 2 (they overlapped). So step 3 removes only 25 - 5 = 20 additional rows: 460 - 20 = 440. The trap answer is A) 435, reached by subtracting both full amounts (500 - 40 - 25) and forgetting the overlap. Watching for overlapping conditions is essential when cleansing and preparing data.

#### Question 4 (moderate) - Logical deduction about a dataset

A team lead tells the candidate three facts about a departmental dataset:

- All records collected after April 2025 include a consent flag.
- No record with a consent flag is stored in the legacy database.
- Record X is stored in the legacy database.

Which conclusion must be true?

- A) Record X was collected after April 2025.
- B) Record X was collected in or before April 2025.
- C) Record X has a consent flag.
- D) Record X will be deleted.

**Correct answer: B) Record X was collected in or before April 2025.**

**Explanation:** Chain the logic step by step. Record X is in the legacy database. Since no record with a consent flag is in the legacy database, Record X has no consent flag. Since all records collected after April 2025 have a consent flag, and Record X does not, Record X cannot have been collected after April 2025. Therefore it was collected in or before April 2025. Option D introduces information that was never stated; a strong data scientist never concludes beyond what the premises support, the same discipline needed when interpreting statistical output accurately.

#### Question 5 (moderate) - Chart pattern recognition

A candidate produces a bar chart of monthly users of a government digital service: January 10,000; February 12,000; March 14,500; April 17,500; May 21,000. A teammate asks whether growth is "steady".

Which statement best describes the pattern?

- A) Growth is constant at 2,000 users per month.
- B) Growth is accelerating: the monthly increase itself is increasing.
- C) Growth is slowing down each month.
- D) There is no discernible pattern.

**Correct answer: B) Growth is accelerating: the monthly increase itself is increasing.**

**Explanation:** Calculate the month-on-month increases: +2,000, +2,500, +3,000, +3,500. The service is not growing by a fixed amount; the increase itself grows by 500 each month. Recognising the difference between linear growth (constant increases) and accelerating growth (increasing increases) is fundamental to exploring and visualising data, and it changes the story that gets told: a chart of accelerating demand might mean the service needs more capacity planning than a linear trend would suggest.

#### Question 6 (moderate) - Spotting the odd one out in a data dictionary

Four field definitions appear in a data dictionary. Which one is inconsistent with the others?

- A) `date_registered` - date, format YYYY-MM-DD
- B) `date_of_birth` - date, format YYYY-MM-DD
- C) `date_last_login` - date, format DD/MM/YYYY
- D) `date_closed` - date, format YYYY-MM-DD

**Correct answer: C) `date_last_login`**

**Explanation:** Three fields use the ISO format YYYY-MM-DD; one uses DD/MM/YYYY. Mixed date formats are one of the most common causes of silent data errors, because a value like 04/03/2026 is ambiguous (4 March or 3 April?). Spotting format inconsistencies before analysis is a core part of data preparation, and it is why data engineers and data scientists both care about standards. In this role, a trainee would be expected to flag this to the team and agree a single format before joining tables.

#### Question 7 (moderate) - Prioritisation within a sprint

It is Tuesday morning. A team's sprint ends on Friday. The candidate has four tasks:

1. Finish cleaning the dataset a senior data scientist needs by Wednesday for model training.
2. Draft slides for a show-and-tell next Monday.
3. Respond to a teammate's code review comments on their script (they are blocked until it is done).
4. Read an optional article about a new machine learning technique.

What is the most logical order to tackle them?

- A) 4, 2, 1, 3
- B) 1, 3, 2, 4
- C) 3, 1, 2, 4
- D) 2, 1, 3, 4

**Correct answer: C) 3, 1, 2, 4**

**Explanation:** Two tasks have real urgency: the code review response (a teammate is blocked right now, so every hour of delay costs the team) and the dataset (needed Wednesday). Unblocking others usually comes first when it is quick, because it multiplies team productivity; then the analyst's own hard deadline for Wednesday follows. The slides are needed Monday, so they come third, and the optional reading last. Option B is a reasonable second choice, but leaving a teammate blocked while working alone all day is weaker teamwork. This mirrors the framework skill of managing one's contribution to tasks to fit in with the work of the wider team.

#### Question 8 (moderate) - Diagnosing a surprising result

A candidate runs an exploratory analysis of calls to a government helpline and finds that average call duration doubled in one week. Which of the following is the most sensible first step, using a data scientist's reasoning?

- A) Report immediately that citizens now need twice as much help.
- B) Check whether the data for that week is complete and correctly recorded before drawing conclusions.
- C) Delete that week's data as an outlier.
- D) Build a machine learning model to predict future call durations.

**Correct answer: B) Check whether the data for that week is complete and correctly recorded.**

**Explanation:** An inquisitive, careful data scientist treats a surprising result as a question, not an answer. A sudden doubling is more often caused by a data issue (a system change, duplicated records, a new logging rule that includes hold time) than by a genuine doubling of citizen need. Option A jumps to a conclusion; option C throws away potentially real information without investigation; option D adds sophistication before understanding. Investigate first, conclude second. This reflects both the applied statistics skill and the data science innovation skill: being curious and unafraid to ask questions.

#### Question 9 (moderate) - Sequence of pipeline steps

A data preparation pipeline has five steps that must run in a valid order:

- Validate postcodes (requires cleaned text fields)
- Load raw data (must be first)
- Clean text fields (requires raw data)
- Join to the regional lookup table (requires validated postcodes)
- Produce summary chart (must be last)

Which order is valid?

- A) Load raw data, clean text fields, validate postcodes, join to lookup, produce chart
- B) Load raw data, validate postcodes, clean text fields, join to lookup, produce chart
- C) Clean text fields, load raw data, validate postcodes, join to lookup, produce chart
- D) Load raw data, clean text fields, join to lookup, validate postcodes, produce chart

**Correct answer: A**

**Explanation:** Trace the dependencies like a chain: loading must come first; cleaning needs the raw data; validation needs cleaned text; the join needs validated postcodes; the chart is last. Option B validates before cleaning (invalid), option C cleans before loading (impossible), and option D joins before validating (invalid). Reasoning about ordered dependencies is exactly the thinking used when writing simple scripts under supervision, and when explaining why data must be cleansed and prepared before it goes into data science products.

#### Question 10 (moderate) - Categorical logic with metrics

A team uses two model performance metrics: accuracy and recall. A supervisor states:

- Every model we deploy must have recall above 80%.
- Model M has accuracy of 92%.

What can be concluded about Model M?

- A) Model M will be deployed.
- B) Model M has recall above 80%.
- C) Nothing about whether Model M can be deployed, because its recall is unknown.
- D) Model M should be retrained.

**Correct answer: C**

**Explanation:** The deployment rule depends on recall, but only Model M's accuracy was stated. Accuracy and recall are different metrics: accuracy measures overall correct predictions, while recall measures how many of the true positive cases the model catches. A model can have high accuracy but poor recall, especially with imbalanced data. Since recall is unknown, no conclusion about deployment follows. This tests awareness of different performance and accuracy metrics for statistical assessment and validation, straight from the role's skills list, and it also tests the logical discipline of not concluding beyond the evidence.

#### Question 11 (hard) - Two-variable pattern

A colleague's script outputs pairs of numbers, one pair per test run: (2, 5), (3, 7), (5, 11), (8, 17), (12, ?).

What is the missing value?

- A) 21
- B) 23
- C) 25
- D) 27

**Correct answer: C) 25**

**Explanation:** Test simple relationships between each pair. Try "second = 2 x first + 1": 2 x 2 + 1 = 5 (correct); 2 x 3 + 1 = 7 (correct); 2 x 5 + 1 = 11 (correct); 2 x 8 + 1 = 17 (correct). So for 12: 2 x 12 + 1 = 25. Finding a rule that explains every observed pair, then applying it to a new input, is a miniature version of what a predictive model does: learn a relationship from examples and generalise it. Practising this trains the same intuition used when learning machine learning techniques.

#### Question 12 (hard) - Error checking a summary table

A published summary claims: "Of 1,000 benefit applications sampled, 620 were approved, 310 were rejected, and 90 were withdrawn. The approval rate among decided applications (approved plus rejected) was 62%."

Which part of the claim is wrong?

- A) The three categories do not sum to 1,000.
- B) The approval rate among decided applications is not 62%.
- C) Both A and B are wrong.
- D) Nothing is wrong.

**Correct answer: C) Both A and B are wrong.**

**Explanation:** Check each part in turn. First, the sum of the categories: 620 + 310 = 930, and 930 + 90 = 1,020. That is 1,020, not 1,000, so the categories do not sum to the stated sample size (error one). Second, the approval rate among decided applications: decided applications = 620 + 310 = 930, and 620 / 930 = 66.7%, not 62% (error two). The quoted 62% comes from wrongly dividing by the full 1,000 instead of the 930 decided applications. The lesson for this role: always verify both the totals and the denominators in any summary published or inherited. Interpreting statistical output "effectively and accurately" includes choosing the right denominator, one of the most common real-world statistical mistakes in government reporting.

#### Question 13 (hard) - Prioritising under uncertainty

Ten minutes before a team's show-and-tell, the candidate notices that one chart in the deck may use last month's data instead of this month's. They are not certain. The senior data scientist presenting is in another meeting. What is the most effective action?

- A) Say nothing; it is probably fine, and the candidate is only a trainee.
- B) Quickly check the chart's source data personally, and if the error is confirmed, send the presenter a brief message with the corrected figure before the session.
- C) Interrupt the senior data scientist's meeting to discuss it at length.
- D) Mention it casually to a teammate after the show-and-tell.

**Correct answer: B**

**Explanation:** The best option combines verification (check before raising, so as not to create noise), speed (the deadline is real), and proportionate communication (a brief message, not a meeting interruption). Option A is the passive trap: trainees sometimes assume their observation does not matter, but presenting wrong figures damages trust in the whole team's work. Option C is disproportionate; option D is too late to help. Cognitive assessments often embed judgement inside time pressure like this, because the job does too.

#### Question 14 (hard) - Abstract reasoning with data quality rules

A data quality system applies three rules in order to each incoming record. Each rule either passes the record to the next rule or sends it to the review queue:

- Rule 1 sends 20% of incoming records to review.
- Rule 2 sends 25% of the records it receives to review.
- Rule 3 sends 10% of the records it receives to review.

Out of 1,000 incoming records, how many reach the clean output (surviving all three rules)?

- A) 450
- B) 540
- C) 550
- D) 600

**Correct answer: B) 540**

**Explanation:** Work through the chain. Rule 1 passes 80% of 1,000 = 800. Rule 2 passes 75% of 800 = 600. Rule 3 passes 90% of 600 = 540. The trap is adding the percentages (20 + 25 + 10 = 55, suggesting 450 rejected and 550 clean); but each rule applies to a shrinking pool, so percentages must be multiplied, not added: 0.8 x 0.75 x 0.9 = 0.54. Sequential filters appear constantly in data preparation pipelines, and multiplying survival rates is a pattern worth memorising.

#### Question 15 (hard) - Choosing the right technique

A team is asked three questions by a policy colleague. Match each question to the most appropriate analytical approach:

1. "How many people used the service last month, split by region?"
2. "Which applicants are most likely to need extra support next year?"
3. "Is the difference in satisfaction between the old and new service versions likely to be real, or just chance?"

- A) 1 = predictive model; 2 = descriptive summary; 3 = statistical significance test
- B) 1 = descriptive summary; 2 = predictive model; 3 = statistical significance test
- C) 1 = statistical significance test; 2 = descriptive summary; 3 = predictive model
- D) 1 = descriptive summary; 2 = statistical significance test; 3 = predictive model

**Correct answer: B**

**Explanation:** Question 1 asks what happened; that is descriptive analysis (counts, groupings, visualisation). Question 2 asks what is likely to happen to individuals in the future; that is a predictive model, such as the machine learning techniques a trainee is learning about. Question 3 asks whether an observed difference could plausibly be explained by chance; that is a statistical significance test. Knowing which tool answers which kind of question is the heart of "show an awareness of how data science techniques can be used" from the role profile, and cognitive assessments often test this matching skill because it separates method-driven thinkers from tool-driven ones. A trainee who can say "that is a descriptive question, not a prediction question" is already adding value in team discussions.

### Administration and scoring guidance

- **Where possible, ground live items in real work artefacts.** Pattern recognition and script-output prediction test the instincts a trainee should already be building on the job.
- **Expect accuracy to matter more than raw speed at this level.** A candidate who is reliably correct but a little slower is not necessarily weaker than one who is fast but error-prone; note both dimensions if your platform reports them separately.
- **Overlapping conditions (Question 3), wrong denominators (Question 12), and adding percentages that should be multiplied (Question 14)** cover a large share of the errors candidates make. Recognising which trap a wrong answer fell into is useful debrief material.
- **Offer the candidate the ungraded interface warm-up questions** before the scored section, and do not rush past them - they settle nerves and remove surprises that would otherwise cost an early-question penalty unrelated to ability.
- **Administer the assessment in a calm, unhurried setting where possible.** Cognitive performance is sensitive to fatigue and stress, and a trainee candidate is unlikely to have prior assessment experience to draw on.
- **A strong candidate tends to use a consistent method for every question**: read the stem, identify what is being asked, scan the data, eliminate obviously wrong options, then compute or deduce. That steadiness under time pressure is itself a positive signal.
- **At debrief, it can help to ask the candidate to talk through their reasoning** on one or two questions aloud. Hearing the reasoning, not just the answer, tells you much more about whether a wrong answer reflects a gap in ability or a simple slip.
- **If you are assessing the same candidate again in future** (for example, at the end of a development scheme), a brief record of the trap types they fell into this time is more useful for tracking growth than the raw score alone.

### Common pitfalls

- **Rushing the reading.** Misreading one word ("decided applications" versus "all applications") flips the answer; this is a common source of error worth distinguishing from a genuine reasoning gap.
- **Getting stuck on one hard question.** These tests reward overall accuracy; a candidate who flags a resistant question, moves on, and returns if time allows is using a sound strategy, much as they would triage tasks in a sprint.
- **Assuming instead of deducing.** Candidates should only use the facts given. If a question does not state a record's recall metric, no conclusion about it follows, however plausible a guess might feel.
- **Ignoring the answer options.** Options often hint at the trap: if 435 and 440 both appear, an overlap issue is likely lurking.
- **Letting nerves compound.** One wrong answer does not sink a candidate; norm groups account for imperfection.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment evaluates how well a candidate analyses, interprets, and makes sensible decisions using numbers. For a trainee data scientist, this is about as close to a "day in the life" test as psychometrics gets. The questions are not abstract algebra or school-style formula recall; they use real-world business data such as tables, charts, budgets, capacity figures, and performance metrics, exactly the material a candidate would handle when exploring and visualising data for a team.

The typical format is online and timed, with a strict limit that requires quick and accurate data extraction, often around a minute to ninety seconds per question. The maths itself is deliberately basic: percentages, ratios, differences, rates, and simple projections. Most assessments allow or provide an on-screen calculator, because the test prioritises interpretation over mental arithmetic. What is being measured is not whether a candidate can multiply, but whether they can find the right numbers in a table, choose the right operation, and avoid the traps hidden in labels and units (like "in thousands" or "per quarter").

For this role, this assessment matters for a very practical reason: numbers are the raw material of the job. When interpreting statistical output, comparing model performance metrics, checking a data pipeline's record counts, or presenting a chart to a team, small numerical misreadings become big analytical mistakes. Employers use numeric reasoning tests for data roles precisely because performance on them correlates strongly with careful, accurate quantitative work. This is one of the most practice-responsive assessment types, so a candidate's score can be expected to improve with deliberate practice - useful context if you are assessing the same trainee more than once.

### What it measures for this role level

Here is how the assessment dimensions map onto the named skills in the role profile:

- **Applied maths, statistics and scientific practices**: the core of the test. Reading tables, computing percentages and rates, and interpreting figures accurately are the everyday mechanics of data inspection and exploration, and of interpreting statistical output effectively and accurately. Questions about metrics reflect awareness of different performance and accuracy metrics for statistical assessment and validation.
- **Delivering business impact**: several question styles ask the candidate to turn numbers into a decision or a recommendation, mirroring how a trainee creates basic visuals and presentations to communicate data science effectively, and aligns analysis to user needs.
- **Data engineering**: record counts, pipeline throughput, and storage figures test the numeracy behind explaining why data must be cleansed and prepared, and understanding capacity across cloud and on-premise architectures.
- **Understanding product delivery**: workload and scheduling questions reflect managing a contribution to tasks within the team's plan.

### Practice questions

An on-screen calculator is assumed to be available. Ask the candidate to show their working; the working is where the useful signal lives. The questions start easy and get harder, mirroring how adaptive tests behave.

#### Question 1 (easy) - Percentage of missing data

A candidate profiles a dataset of 2,400 citizen feedback records. 360 records have a blank postcode field. What percentage of records have a blank postcode?

- A) 12%
- B) 15%
- C) 18%
- D) 24%

**Correct answer: B) 15%**

**Explanation:** Percentage = part / whole x 100 = 360 / 2,400 x 100. Compute: 360 / 2,400 = 0.15, so 15%. A quick sense-check: 10% of 2,400 is 240, and 360 is halfway between 240 (10%) and 480 (20%), so 15% fits. Profiling missing data like this is one of the first things a data scientist does when inspecting and exploring any new dataset, so this calculation should be close to automatic for a strong candidate.

#### Question 2 (easy) - Simple ratio in a team survey

A staff survey received 150 responses from one directorate: 90 respondents rated the new internal tool "helpful" and 60 rated it "not helpful". What is the ratio of "helpful" to "not helpful" responses in simplest form?

- A) 2:1
- B) 3:2
- C) 5:3
- D) 9:6

**Correct answer: B) 3:2**

**Explanation:** The raw ratio is 90:60. Divide both sides by their greatest common divisor, 30: 90 / 30 = 3 and 60 / 30 = 2, giving 3:2. Option D (9:6) is the same ratio but not in simplest form, which is why the question says "simplest form"; those qualifiers are always worth reading closely. Ratios appear throughout data communication because they are often easier for stakeholders to grasp than raw counts.

#### Question 3 (easy) - Reading a table with units

A table of monthly data storage use is labelled "storage (in TB)":

| Month | Storage (in TB) |
|---|---|
| April | 1.2 |
| May | 1.5 |
| June | 1.8 |

How much storage, in gigabytes (GB), was used in June, using 1 TB = 1,000 GB?

- A) 18 GB
- B) 180 GB
- C) 1,800 GB
- D) 18,000 GB

**Correct answer: C) 1,800 GB**

**Explanation:** June's value is 1.8 TB. Convert: 1.8 x 1,000 = 1,800 GB. The wrong answers all come from unit slips (dividing instead of multiplying, or shifting the decimal point the wrong number of places). Unit qualifiers such as "in TB", "in thousands", or "per quarter" are the single most common trap in numeric reasoning tests, and they matter in real cloud storage and capacity discussions too, which links to the data engineering skill in the role profile.

#### Question 4 (moderate) - Percentage change in service demand

A government digital service had 48,000 users in March and 54,000 users in April. What was the percentage increase from March to April?

- A) 6%
- B) 11.1%
- C) 12.5%
- D) 15%

**Correct answer: C) 12.5%**

**Explanation:** Percentage change = (new - old) / old x 100 = (54,000 - 48,000) / 48,000 x 100 = 6,000 / 48,000 x 100 = 12.5%. The trap answer B (11.1%) comes from dividing by the new value (6,000 / 54,000) instead of the original. Remember: percentage change is always measured relative to the starting value. This kind of calculation recurs constantly when presenting month-on-month trends to a team.

#### Question 5 (moderate) - Model accuracy comparison

A candidate evaluates two versions of a classification model on the same test set of 2,000 records:

| Model | Correct predictions |
|---|---|
| Version 1 | 1,640 |
| Version 2 | 1,730 |

By how many percentage points did accuracy improve from Version 1 to Version 2?

- A) 4.5 percentage points
- B) 5.5 percentage points
- C) 9.0 percentage points
- D) 90 percentage points

**Correct answer: A) 4.5 percentage points**

**Explanation:** Version 1 accuracy = 1,640 / 2,000 = 82%. Version 2 accuracy = 1,730 / 2,000 = 86.5%. The difference is 86.5 - 82 = 4.5 percentage points. Note the language: a change from 82% to 86.5% is 4.5 percentage points, but it would be a 5.5% relative increase (4.5 / 82 x 100). Tests, and careful data scientists, distinguish these. When reporting model improvements to a team, using "percentage points" correctly is a marker of someone who interprets statistical output accurately.

#### Question 6 (moderate) - Budget share for a data programme

A directorate's annual analytics budget is £480,000, split as follows: staff 60%, cloud computing 25%, training 10%, and the remainder for software licences. How much is budgeted for software licences?

- A) £19,200
- B) £24,000
- C) £48,000
- D) £120,000

**Correct answer: B) £24,000**

**Explanation:** The named categories use 60% + 25% + 10% = 95%, leaving 100% - 95% = 5% for licences. Then 5% of £480,000 = 0.05 x 480,000 = £24,000. The trap is option C, which is 10% (the training figure) rather than the remainder. Always total the given percentages first and work with what is left. Budget questions like this appear in real project conversations, and understanding them supports the skill of showing an understanding of the organisation and the benefits of data science.

#### Question 7 (moderate) - Pipeline throughput rate

A data pipeline processes records at a steady rate. It processed 45,000 records in 2.5 hours. At the same rate, how many records will it process in a full 8-hour working day?

- A) 112,500
- B) 126,000
- C) 144,000
- D) 360,000

**Correct answer: C) 144,000**

**Explanation:** First find the hourly rate: 45,000 / 2.5 = 18,000 records per hour. Then scale up: 18,000 x 8 = 144,000 records. Rate problems reward this two-step habit: normalise to a unit rate first, then multiply. Estimating pipeline throughput and capacity is exactly the kind of practical figure a trainee would discuss with data engineers when planning how to prepare data for a product.

#### Question 8 (moderate) - Weighted average satisfaction score

Two user research rounds measured satisfaction with a prototype dashboard:

| Round | Participants | Average score (out of 10) |
|---|---|---|
| Round 1 | 40 | 6.5 |
| Round 2 | 60 | 8.0 |

What is the overall average score across both rounds?

- A) 7.25
- B) 7.40
- C) 7.50
- D) 7.75

**Correct answer: B) 7.40**

**Explanation:** The averages 6.5 and 8.0 cannot simply be averaged (that gives 7.25, the trap answer A), because the rounds have different numbers of participants. Weight each average by its group size: total score = (40 x 6.5) + (60 x 8.0) = 260 + 480 = 740. Total participants = 40 + 60 = 100. Overall average = 740 / 100 = 7.40. Weighted averages appear everywhere in real analysis, from combining survey waves to blending regional statistics, and knowing when a simple average misleads is a hallmark of accurate statistical interpretation.

#### Question 9 (moderate) - Reading a two-way table

A table shows helpline outcomes by channel for one week:

| Channel | Resolved | Escalated | Total |
|---|---|---|---|
| Phone | 720 | 180 | 900 |
| Webchat | 550 | 50 | 600 |
| Email | 330 | 170 | 500 |
| **Total** | **1,600** | **400** | **2,000** |

Which channel had the highest resolution rate (resolved as a proportion of that channel's total)?

- A) Phone
- B) Webchat
- C) Email
- D) They are all equal

**Correct answer: B) Webchat**

**Explanation:** Compute each rate: Phone = 720 / 900 = 80%. Webchat = 550 / 600 = 91.7%. Email = 330 / 500 = 66%. Webchat wins. The trap is choosing Phone because it has the largest raw number of resolutions (720); rates and raw counts answer different questions. Distinguishing "biggest number" from "best rate" is a daily discipline when exploring data and communicating findings, and two-way tables like this are among the most common artefacts in government analysis.

#### Question 10 (hard) - Projecting with a percentage change

A machine learning model currently makes 1,250 predictions per day, and 8% of predictions are flagged for human review. The service expects prediction volume to grow by 20% next quarter, while an improved model version should cut the flag rate to 6%. How many predictions per day would be flagged for review next quarter?

- A) 75
- B) 90
- C) 100
- D) 120

**Correct answer: B) 90**

**Explanation:** Two steps. New daily volume = 1,250 x 1.20 = 1,500 predictions. New flags = 6% of 1,500 = 0.06 x 1,500 = 90. The trap answers come from mixing the old and new figures: 8% of 1,250 = 100 (option C, the current state) and 6% of 1,250 = 75 (option A, forgetting the growth). Multi-step projections like this mirror real capacity planning conversations: "if usage grows and the model improves, how much human review effort will we need?" That is delivering business impact with numbers.

#### Question 11 (hard) - Cloud cost comparison

A team compares two options for running a monthly data processing job:

| Option | Cost structure |
|---|---|
| Cloud A | £0.12 per 1,000 records processed |
| Cloud B | Flat fee £150 per month, plus £0.04 per 1,000 records |

The job processes 2,400,000 records per month. Which option is cheaper, and by how much?

- A) Cloud A, by £42
- B) Cloud B, by £42
- C) Cloud A, by £96
- D) Cloud B, by £96

**Correct answer: B) Cloud B, by £42**

**Explanation:** Cloud A: 2,400,000 / 1,000 = 2,400 units, so 2,400 x £0.12 = £288. Cloud B: £150 + (2,400 x £0.04) = £150 + £96 = £246. Cloud B is cheaper by £288 - £246 = £42. Notice the working style: convert records into the pricing unit first, then apply each cost structure separately, then compare. Understanding cost trade-offs between architectures is part of the data engineering awareness this role expects (cloud versus on-premise), and cost-per-unit reasoning appears often in numeric tests for digital roles.

#### Question 12 (hard) - Confusion matrix and recall

A supervisor shows a candidate a confusion matrix for a model that predicts which applications need priority handling:

| | Predicted priority | Predicted routine |
|---|---|---|
| Actually priority | 180 | 60 |
| Actually routine | 90 | 1,670 |

What is the model's recall for the priority class (the proportion of actual priority cases the model correctly identified)?

- A) 66.7%
- B) 75.0%
- C) 81.8%
- D) 92.5%

**Correct answer: B) 75.0%**

**Explanation:** Recall = true positives / all actual positives = 180 / (180 + 60) = 180 / 240 = 75%. Option A (66.7%) is precision computed with the wrong denominator; option C (81.8%) does not correspond to a standard metric here; option D (92.5%) is close to overall accuracy ((180 + 1,670) / 2,000 = 92.5%). This question directly exercises the skill of showing awareness of different performance and accuracy metrics for statistical assessment and validation. In a service context, recall matters because every missed priority case (the 60) is a real person whose urgent application was treated as routine.

#### Question 13 (hard) - Sample proportions and margins

An A/B test of two versions of an online form shows:

| Version | Users | Completed the form |
|---|---|---|
| A (current) | 5,000 | 3,600 |
| B (new) | 5,000 | 3,850 |

Which statement is best supported by the data alone?

- A) Version B's completion rate is 5 percentage points higher than Version A's.
- B) Version B's completion rate is 72%.
- C) Version B will always perform better for all user groups.
- D) The completion difference is 250 users, which is 2.5% of all users in the test.

**Correct answer: A**

**Explanation:** Version A's rate = 3,600 / 5,000 = 72%. Version B's rate = 3,850 / 5,000 = 77%. The difference is 77 - 72 = 5 percentage points, so A is correct. Option B attaches A's rate (72%) to Version B. Option C over-generalises beyond the evidence: a single test cannot guarantee results for all user groups. Option D's arithmetic - 250 / 10,000 = 2.5% - is actually true as stated, but it describes the difference relative to all users, a less meaningful framing than the per-version rates, and the question asks which statement is best supported; the percentage-point comparison (A) is the standard, most accurate reading. Choosing the statement that the data genuinely supports, at the right strength, is the essence of interpreting statistical output responsibly.

#### Question 14 (hard) - Time allocation across a sprint

A candidate works 7.5-hour days, 5 days a week. In a two-week sprint, the team expects them to spend 20% of their total time on learning and development, 10% on team ceremonies (stand-ups, retrospectives), and the rest on project work. How many hours of project work does that leave in the sprint?

- A) 45.0 hours
- B) 52.5 hours
- C) 56.25 hours
- D) 60.0 hours

**Correct answer: B) 52.5 hours**

**Explanation:** Total sprint hours = 7.5 x 5 x 2 = 75 hours. Learning takes 20% and ceremonies 10%, so project work gets 100 - 30 = 70% of time: 0.70 x 75 = 52.5 hours. Option C (56.25) comes from subtracting only the learning time; option A (45) from subtracting 40%. Time budgeting like this connects to the skill of managing a contribution to fit the team's work, and the 20% learning allocation reflects the genuine emphasis this trainee role places on developing data science capability.

#### Question 15 (hard) - Rounding and reporting honestly

A dashboard reports that a service's error rate fell from 0.24% to 0.12% month on month. A colleague drafts the headline: "Errors halved, a 0.12% improvement." Which correction is right?

- A) The headline is fully correct.
- B) Errors did halve, but the improvement is 0.12 percentage points, not 0.12%.
- C) Errors did not halve; the improvement is 50%.
- D) Errors fell by 12%.

**Correct answer: B**

**Explanation:** The rate went from 0.24% to 0.12%, which is indeed a halving (a 50% relative reduction). But the absolute change is 0.24 - 0.12 = 0.12 percentage points. Saying "a 0.12% improvement" confuses the absolute change in a percentage with a relative percentage change, which are wildly different here (0.12% relative change would be nearly nothing). Getting this language right is a small detail that builds big credibility when creating visuals and presentations to communicate data science effectively, and assessment writers love testing it because so many published reports get it wrong.

#### Question 16 (moderate) - Data quality improvement over time

At the start of a data cleansing project, 18% of the 15,000 records in a register failed validation. After a team's first improvement pass, the number of failing records dropped to 1,890. What proportion of records now fails validation, and how many records were fixed?

- A) 12.6% now fail; 810 records were fixed
- B) 12.6% now fail; 1,890 records were fixed
- C) 14.0% now fail; 600 records were fixed
- D) 15.2% now fail; 420 records were fixed

**Correct answer: A) 12.6% now fail; 810 records were fixed**

**Explanation:** Original failures = 18% of 15,000 = 0.18 x 15,000 = 2,700 records. New failure proportion = 1,890 / 15,000 = 0.126 = 12.6%. Records fixed = 2,700 - 1,890 = 810. This two-part structure (a rate and a count) is common in tests because it checks fluency in moving between proportions and absolute numbers. In data engineering conversations, both matter: the percentage indicates overall quality, while the absolute count indicates how much manual review effort remains.

#### Question 17 (hard) - Choosing the right chart from the numbers

A candidate has quarterly figures for four regions and wants to show the team which region contributes the largest share of total service demand this quarter: North 22,000; Midlands 34,000; London 51,000; South West 13,000. A colleague asks, "roughly what share of total demand is London?"

- A) About one third
- B) About two fifths
- C) About one half
- D) About one quarter

**Correct answer: B) About two fifths**

**Explanation:** Total = 22,000 + 34,000 + 51,000 + 13,000 = 120,000. London's share = 51,000 / 120,000 = 0.425, or 42.5%, which is closest to two fifths (40%). Converting between percentages and natural-language fractions matters because stakeholders think in "about a third" or "roughly half", and translating precisely is part of creating basic visuals and presentations that communicate data science effectively. Note also the estimation shortcut: 51,000 is a bit less than half of 120,000 (60,000), so "about one half" is tempting but too high; checking 40% of 120,000 = 48,000 confirms two fifths is the better fit.

### Administration and scoring guidance

- **Percentages, percentage change, ratios, and weighted averages cover most questions**; a candidate who has these methods automatic will spend their time reading rather than calculating.
- **Most numeric reasoning errors are denominator errors**, in this test and in real statistical work alike; a wrong-denominator answer is worth distinguishing from other kinds of mistake at debrief.
- **Where possible, base live items on a real published statistics release**, since this is genuinely job-relevant material for a trainee to be tested on.
- **An on-screen calculator helps with arithmetic**; encourage the candidate to write down intermediate results, since retyping from memory is where errors creep in under time pressure.
- **A candidate who visibly estimates before calculating precisely** is demonstrating a habit worth noting positively - it is the same sanity check that should be run on every analytical output at work.
- **Weight accuracy over speed for a trainee candidate.** Speed built on accuracy lasts; speed built on guessing does not, and this level should not be scored as if experienced staff were sitting the same test.

### Common pitfalls

- **Misreading chart and table labels.** Confusing monthly data with annual data, or ignoring scale qualifiers like "in thousands" or "in TB", flips answers completely. Read the units line every time.
- **Wrong base for percentage change.** Percentage change divides by the original value, not the new one. This single rule resolves a huge share of trap options.
- **Confusing percentage points with percent.** A move from 82% to 86.5% is 4.5 percentage points but a 5.5% relative increase. Tests exploit this; so do misleading headlines.
- **Over-calculating.** Sometimes an estimate or elimination of implausible options answers the question faster than full computation. If three options are impossible at a glance, the fourth is the answer.
- **Time sink questions.** One multi-stage problem can eat five questions' worth of time. Flagging it, skipping it, and returning at the end is the better strategy; the marks are the same for easy and hard questions.
- **Simple averaging of unequal groups.** Whenever group sizes differ, the weighted average is the right tool. If a question mentions two groups with different sizes and gives their averages, the simple mean of the two averages is almost certainly a trap option.
- **Forgetting to sense-check the final answer.** Before moving on, a strong candidate asks one question: "is this number plausible in the scenario?" A pipeline that processes 144,000 records a day is plausible; a training budget of £4.8 million inside a £480,000 total is not. A two-second plausibility check catches decimal slips, unit slips, and inverted fractions, and it is the same habit that will one day stop a wrong figure reaching a minister's briefing pack. Data scientists who sense-check are the ones whose numbers get trusted.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment evaluates how well a candidate understands, analyses, and draws correct conclusions from written information. The passages mirror the exact reading demands of the role: data ethics guidance, technical standards, team emails, project briefs, and extracts from government policy documents. The candidate then answers questions based strictly on the text provided, ignoring anything they happen to know from outside.

The classic format asks the candidate to judge statements as **True** (the passage clearly supports it), **False** (the passage clearly contradicts it), or **Cannot Say** (the passage does not give enough information either way). Some tests add multiple-choice comprehension questions, such as "which statement best summarises the author's position?" Timing is usually tight, often less than a minute per question, to simulate reading under workplace deadlines.

Why does this matter for a trainee data scientist? Reading carefully is a surprisingly large part of the job. Before touching any dataset, a data scientist reads its documentation, its sharing agreement, and possibly its privacy assessment. The role reads a team's analytical standards, a department's guidance on data ethics, and dozens of emails a week where a single word ("must" versus "should") changes what is permitted. Misreading these documents does not just cost marks; it can lead to using data inappropriately, which the role profile explicitly asks candidates to avoid. Verbal reasoning tests measure the exact discipline that keeps work accurate and ethical: conclusions grounded in what the text actually says.

A special note on "Cannot Say", which most candidates find the trickiest option. It does not mean "not sure"; it means "the passage, taken alone, neither confirms nor denies this statement". A candidate might personally know a statement is true in the real world, but if the passage does not say it, the correct answer is Cannot Say - the reading equivalent of refusing to conclude beyond the data.

### What it measures for this role level

Here is how the assessment maps to the named skills in the role profile:

- **Data ethics and privacy**: passages about consent, data sharing, and privacy rules test whether the candidate can extract exactly what is permitted, required, or prohibited, supporting the skill of explaining the importance of data ethics and privacy, and identifying appropriate channels to discuss ethical issues.
- **Applied maths, statistics and scientific practices**: passages describing statistical findings test whether the candidate can distinguish what a study showed from what it merely suggested, the reading half of interpreting statistical output effectively and accurately.
- **Data engineering**: passages about architectures, tools, and data preparation requirements test comprehension of technical documentation, supporting the ability to explain different architectures and why data must be cleansed and prepared.
- **Delivering business impact**: comprehension questions about briefs and user needs reflect how a candidate would align data and analysis to meet user needs.
- **Understanding product delivery**: passages in the form of team communications test how accurately a candidate absorbs instructions that affect their contribution to shared work.

### Practice questions

Ask the candidate to answer using only the information given in each passage. A suggested routine for the candidate: skim the passage once for structure, read the statement carefully, return to the relevant sentences and read them slowly, then decide. The anchoring question is always "which exact words in the passage make this True or False?" - if the candidate cannot name the words, Cannot Say is the likely answer.

**Passage A - Data sharing guidance (used for Questions 1-3)**

"Teams must complete a data protection impact assessment (DPIA) before processing any new dataset that contains personal data. Datasets that are fully anonymised do not require a DPIA. Where a team is uncertain whether a dataset is fully anonymised, they should consult the department's data protection officer before processing begins. Pseudonymised data, in which identifiers are replaced with codes but re-identification remains possible, is treated as personal data for the purposes of this guidance."

#### Question 1 (easy)

True, False, or Cannot Say: "A team processing a new pseudonymised dataset must complete a DPIA."

**Correct answer: True**

**Explanation:** The passage states that pseudonymised data "is treated as personal data for the purposes of this guidance", and that teams "must complete a DPIA before processing any new dataset that contains personal data". Chaining these two sentences: pseudonymised data counts as personal data, and new personal-data datasets require a DPIA. The conclusion follows directly from the exact wording, so the answer is True. Notice the method: point to the sentences, connect them, and confirm no step relies on outside knowledge.

#### Question 2 (easy)

True, False, or Cannot Say: "Fully anonymised datasets require a shorter version of the DPIA."

**Correct answer: False**

**Explanation:** The passage says fully anonymised datasets "do not require a DPIA" at all. The statement claims they require a shorter version, which directly contradicts the text: no DPIA is required, shorter or otherwise. This is False rather than Cannot Say because the passage does speak to the topic and contradicts the claim. Compare the exact words: "do not require a DPIA" versus "require a shorter version".

#### Question 3 (moderate)

True, False, or Cannot Say: "The data protection officer must approve all DPIAs before processing begins."

**Correct answer: Cannot Say**

**Explanation:** The passage mentions the data protection officer only in one situation: when a team is uncertain whether a dataset is fully anonymised, they "should consult" the officer. Nothing is said about the officer approving DPIAs, for that situation or any other. The claim is plausible, and may well be true in many real departments, but the passage neither supports nor contradicts it, so the answer is Cannot Say. This is the classic trap: real-world plausibility masquerading as textual support.

**Passage B - Email from a delivery manager (used for Questions 4-6)**

"Hi both. Quick update on the demand forecasting work. The policy team have moved their deadline forward to the 14th, so we need the exploratory analysis finished by the 10th to leave time for review. Priya will handle the data preparation; once that is done, the trainee can run the exploratory analysis using the notebook template from the previous project. Please do not share any interim charts outside the team until the statistics lead has checked them, as the underlying data includes provisional figures that may be revised. If the 10th looks unachievable, flag it at Thursday's stand-up rather than waiting for the deadline."

#### Question 4 (easy)

True, False, or Cannot Say: "The exploratory analysis must be finished before the data preparation starts."

**Correct answer: False**

**Explanation:** The email states the opposite order: "Priya will handle the data preparation; once that is done, the trainee can run the exploratory analysis." Data preparation comes first, then the exploratory analysis. The statement reverses the dependency, so it is False. Reading dependencies correctly out of ordinary emails is exactly how a trainee manages their contribution to fit the team's work; getting the order wrong in real life would mean starting analysis on unprepared data.

#### Question 5 (moderate)

True, False, or Cannot Say: "Interim charts may be shared with the policy team once the statistics lead has checked them."

**Correct answer: True**

**Explanation:** The instruction is "do not share any interim charts outside the team until the statistics lead has checked them". The word "until" sets a condition that ends the restriction: after the check, sharing outside the team (which includes the policy team) is no longer prohibited by this sentence. So the statement is supported. Note the precision required: if the email had said "do not share any interim charts outside the team; the statistics lead must check all outputs", the answer would be Cannot Say, because no end to the restriction would have been stated. Single words like "until" carry the meaning.

#### Question 6 (moderate)

True, False, or Cannot Say: "The policy team's original deadline was later than the 14th."

**Correct answer: True**

**Explanation:** The email says the policy team "have moved their deadline forward to the 14th". Moving a deadline forward means bringing it earlier, so the original deadline must have been later than the 14th. This inference uses only the meaning of the words in the passage. Careful readers also note what cannot be concluded: the original date is not given, only that it was later. Verbal reasoning rewards exactly this calibrated reading: conclude what the words entail, and no more.

**Passage C - Extract from an analytical standards document (used for Questions 7-9)**

"Analytical outputs published outside the department must state the data sources used, the time period covered, and any known limitations of the analysis. Machine learning models used to inform decisions about individuals must be documented in the model register, and their performance must be reviewed at least every six months. Exploratory analyses that remain within the analytical team are exempt from the publication requirements but are still expected to follow the team's quality assurance checklist. Analysts should prefer the simplest method that adequately answers the question, and should record the reasons for choosing more complex methods when they do so."

#### Question 7 (moderate)

True, False, or Cannot Say: "An exploratory analysis shared only within the analytical team must state its data sources, time period, and limitations."

**Correct answer: False**

**Explanation:** The passage says exploratory analyses that remain within the team "are exempt from the publication requirements", and the sources/period/limitations rule is stated for "analytical outputs published outside the department". So the statement contradicts the exemption. Be careful, though: the passage does still expect internal analyses to follow the quality assurance checklist, so "exempt from publication requirements" does not mean "exempt from all standards". The test statement, as worded, is False because it asserts the publication rule applies where the passage says it does not.

#### Question 8 (moderate)

True, False, or Cannot Say: "A machine learning model used to prioritise inspection visits to businesses must be reviewed at least every six months."

**Correct answer: Cannot Say**

**Explanation:** The six-monthly review rule applies to models "used to inform decisions about individuals". A model prioritising inspection visits to businesses may or may not count as informing decisions about individuals; the passage does not define this, and businesses are not straightforwardly individuals. Since applying the rule requires an interpretation the passage does not supply, the answer is Cannot Say. This mirrors real governance work: knowing when a rule's scope is ambiguous, and flagging that ambiguity through appropriate channels rather than guessing, is part of the data ethics and privacy skill in the role profile.

#### Question 9 (moderate)

True, False, or Cannot Say: "Analysts are prohibited from using complex methods."

**Correct answer: False**

**Explanation:** The passage says analysts "should prefer the simplest method that adequately answers the question, and should record the reasons for choosing more complex methods when they do so". The final clause explicitly anticipates that analysts sometimes will choose complex methods, and requires only that they record their reasons. A preference is not a prohibition. Watch for answer options that inflate "should prefer X" into "must never do Y"; strength-of-language shifts are among the most common verbal reasoning traps.

**Passage D - Briefing note on a new data science project (used for Questions 10-12)**

"The channel-shift project will analyse anonymised contact-centre records from the last three financial years to understand why some users phone the helpline rather than using the online service. Initial findings suggest that users aged over 65 are more likely to phone, but the analysis has not yet controlled for digital access or for the type of query. The project board has asked the team to treat these findings as provisional. A predictive model is out of scope for this phase; the current phase is limited to descriptive and exploratory analysis. Any extension into predictive modelling would require a new ethics review and a revised project brief."

#### Question 10 (easy)

True, False, or Cannot Say: "The project will analyse identifiable contact-centre records."

**Correct answer: False**

**Explanation:** The passage states the project "will analyse anonymised contact-centre records". Anonymised is the direct opposite of identifiable, so the statement contradicts the text. One word decides the answer, which is typical: verbal reasoning tests place their weight on precise wording, just as data sharing agreements do. In this role, noticing whether a brief says "anonymised", "pseudonymised", or "identifiable" changes what processing is appropriate and which safeguards apply.

#### Question 11 (moderate)

True, False, or Cannot Say: "Older users phone the helpline because they cannot access digital services."

**Correct answer: Cannot Say**

**Explanation:** The passage reports a provisional association: users over 65 "are more likely to phone". It explicitly notes the analysis "has not yet controlled for digital access or for the type of query". The test statement asserts a cause ("because they cannot access digital services"), which the passage neither confirms nor denies; digital access is named only as an uncontrolled factor. Association is not causation, in statistics and in reading. This question rewards the same discipline as interpreting statistical output accurately: a data scientist who reads "more likely to phone" and writes "phone because they cannot use digital" has gone beyond the evidence.

#### Question 12 (moderate)

True, False, or Cannot Say: "Building a predictive model in the current phase would require a new ethics review."

**Correct answer: True**

**Explanation:** The passage says a predictive model "is out of scope for this phase" and that "any extension into predictive modelling would require a new ethics review and a revised project brief". So if the team wanted to build a predictive model now, that would be an extension into predictive modelling, which the passage says requires a new ethics review. The statement follows from the text. Practically, this models a valuable workplace instinct for a trainee: scope boundaries and ethics gates are stated in briefs precisely so that enthusiastic analysts check before they build.

#### Question 13 (hard) - Multiple choice comprehension

Re-read Passage D. Which of the following best summarises the project board's position on the initial findings?

- A) The findings are wrong and should be discarded.
- B) The findings are interesting but not yet reliable enough to act on, because important factors have not been controlled for.
- C) The findings prove that the online service needs an accessibility redesign.
- D) The findings should be published immediately to support transparency.

**Correct answer: B**

**Explanation:** The board "has asked the team to treat these findings as provisional", and the passage notes the analysis "has not yet controlled for digital access or for the type of query". Option B captures both the provisional status and the reason. Option A overstates (provisional does not mean wrong); option C leaps to a conclusion the passage never draws; option D invents a position not in the text. Summary questions reward the option that matches the passage's strength of claim, neither stronger nor weaker.

#### Question 14 (hard) - Multiple choice comprehension

Re-read Passage A. A teammate says: "Our new dataset has had names and addresses removed, but each record keeps a code that links back to the original file. I do not think we need a DPIA." According to the passage, what is the correct response?

- A) Agree: removing names and addresses makes the dataset anonymised.
- B) Disagree: the dataset is pseudonymised, which the guidance treats as personal data, so a DPIA is required before processing.
- C) Agree: DPIAs are only needed for datasets shared outside the department.
- D) Disagree: every dataset requires a DPIA regardless of content.

**Correct answer: B**

**Explanation:** The teammate describes identifiers replaced with codes where re-identification remains possible via the linking code; the passage defines exactly this as pseudonymised data, which "is treated as personal data for the purposes of this guidance", and new personal-data datasets require a DPIA before processing. Option A confuses removing direct identifiers with full anonymisation; option C invents a sharing condition not in the passage; option D overstates (fully anonymised datasets are explicitly exempt). This question rehearses a conversation a trainee may genuinely have, and shows why verbal precision is an ethical skill, not just an academic one.

#### Question 15 (hard)

True, False, or Cannot Say (Passage C): "A model documented in the model register may still fail its six-monthly performance review."

**Correct answer: Cannot Say**

**Explanation:** The passage requires documentation in the register and performance review at least every six months, but it says nothing about the outcomes of those reviews, or whether models can fail them. The statement is entirely plausible, and in the real world reviews presumably can find problems, but the passage is silent on it. Cannot Say. A candidate who reasons "well, obviously a review could be failed" is letting background knowledge speak; the whole skill being tested is keeping it out of the answer.

**Passage E - Note on tools and environments (used for Questions 16-17)**

"The analytical platform provides two environments. The development environment may be used for exploratory work with synthetic or fully anonymised data only. The secure environment must be used for any work involving personal data, and access requires completion of the department's data handling training. Scripts developed in the development environment can be promoted to the secure environment through the standard review process. Trainees may write and run scripts in either environment, provided a senior analyst has reviewed the script before it runs against personal data."

#### Question 16 (moderate)

True, False, or Cannot Say: "A trainee who has completed data handling training may run an unreviewed script against personal data in the secure environment."

**Correct answer: False**

**Explanation:** Two conditions govern this situation, and the statement satisfies only one. Training grants access to the secure environment, but the final sentence adds a separate condition for trainees: "provided a senior analyst has reviewed the script before it runs against personal data". An unreviewed script therefore may not be run against personal data by a trainee, regardless of training status. The statement contradicts the passage, so it is False. Layered conditions like this are common in real access policies, and in test passages; a careful reader checks every condition, not just the first one found.

#### Question 17 (hard)

True, False, or Cannot Say: "Pseudonymised data may be used in the development environment."

**Correct answer: Cannot Say**

**Explanation:** Tempting to answer False, and in many real departments it would be false, but examine this passage's exact words. The development environment is for "synthetic or fully anonymised data only", which appears to exclude pseudonymised data; the secure environment "must be used for any work involving personal data". Whether pseudonymised data counts as personal data is defined in Passage A's guidance, but Passage E is a separate document and does not define it, and test convention requires answering from the passage the statement is attached to. Within Passage E alone, pseudonymised data is not mentioned, and the word "only" concerns what the development environment is for, arguably settling it, but the classification of pseudonymised data is not stated. The safest strict reading is Cannot Say. If a test explicitly bundles passages together, the combined reading would make this False; real assessments always specify which passage each question refers to, so those instructions are worth reading carefully. This question illustrates a genuinely hard judgement call, and working through it builds exactly the precision the test rewards.

### Administration and scoring guidance

- **A strong candidate anchors every answer to exact words**, able to point to the sentence that supports or contradicts a statement. If they cannot point to one, Cannot Say is probably the right answer, and it is worth probing this at debrief.
- **"Must" is stronger than "should", which is stronger than "may". "All" is stronger than "most", which is stronger than "some".** Many questions turn entirely on whether a candidate's answer matches the passage's strength, which is useful to check explicitly if an answer looks close but wrong.
- **Reading the statement before the passage lets a candidate scan for the relevant part** rather than reading everything in detail first; this is a legitimate strategy worth recognising rather than treating as a shortcut.
- **Where possible, base live items on real documents** - departmental data ethics frameworks and published statistical bulletins make good source material and are genuinely job-relevant.
- **Cannot Say is often the correct and most disciplined answer, not a weak one**; a candidate who uses it appropriately, rather than avoiding it out of uncertainty, is showing good judgement.
- **Whenever a statement contains "because", "causes", "leads to", or "results in"**, check whether the passage claims causation or merely association; this is one of the most common trap patterns and is worth flagging at debrief if a candidate misses it.

### Common pitfalls

- **Bringing in outside knowledge.** A candidate may know how DPIAs really work in their own department; the test only cares what the passage says. Strong candidates answer from the text alone, every time.
- **Confusing "likely" with certain.** If a passage says a result is "likely" or "suggested", a statement asserting it as established fact is not True. Match the certainty level exactly.
- **Treating Cannot Say as False.** A statement the passage does not mention is not thereby contradicted. False needs an actual contradiction in the text; absence of evidence is Cannot Say.
- **Missing scope words.** Phrases like "outside the department", "within the team", "for this phase", and "about individuals" restrict where rules apply. Trap statements quietly widen or narrow the scope.
- **Poor time allocation.** Reading every passage in full detail before seeing the questions wastes time; a candidate who skims for structure, reads the statement, then dives into the relevant sentences is using time better.
- **Second-guessing into errors.** Candidates who found clear textual support but then talk themselves out of a correct answer by imagining exotic interpretations are underperforming their own reasoning; the plain reading of the passage is usually the intended one.
- **Skimming negatives and exceptions.** Words like "not", "unless", "except", and "only" reverse or restrict a sentence's meaning, and they are easy to skim past under time pressure. When a statement hinges on a rule, re-reading the rule's sentence slowly and checking for a lurking negative or exception clause is the discipline that pays off, both in this test and in real guidance documents, where the exception clause is often exactly where a given situation lives.

## Workplace job-specific situational judgement assessment

### About this assessment

A workplace job-specific situational judgement assessment evaluates a candidate's decision-making, interpersonal skills, and professional conduct. Unlike the logic and maths tests earlier in this document, it presents realistic workplace dilemmas, short scenarios involving a team, a manager, stakeholders, and the public, and asks how the candidate would respond. There is usually no single objectively right answer in the mathematical sense; instead, some responses fit the organisation's values and the role better than others, and a candidate's choices are compared against the judgements of experienced professionals.

The typical response formats are: choose the **most effective** and **least effective** actions from a set; **rank** all the options from best to worst; or **rate** each option's effectiveness independently. Timing is usually generous or absent, because the test measures natural judgement rather than speed.

For a trainee data scientist in UK government, the values behind the "right" answers are not mysterious. They are the values of the Civil Service and the Government Digital and Data profession: put user needs first; be honest and transparent; work collaboratively in multidisciplinary teams; take ethics, privacy, accessibility, and inclusion seriously; escalate concerns through appropriate channels; and keep learning. The role profile expects a trainee to use data ethically and appropriately, identify appropriate channels to discuss ethical issues (with support), work as part of a multidisciplinary team, and be unafraid to ask questions. Every scenario below is built on those expectations.

One point worth bearing in mind when scoring: situational judgement tests do not expect a trainee to act like a chief data officer. At this level, strong answers often involve asking questions, verifying before acting, keeping the team informed, and escalating appropriately, rather than solving everything alone. Knowing when to seek help is not weakness in these tests; it is frequently the top-scoring behaviour, and it is worth calibrating your scoring accordingly.

### What it measures for this role level

The scenarios map to the named skills in the role profile:

- **Data ethics and privacy**: dilemmas about consent, sensitive data, and pressure to cut corners test whether a candidate would explain the importance of ethics and use appropriate channels to raise issues, with support.
- **Delivering business impact**: scenarios about stakeholders, presentations, and user needs test whether a candidate's choices keep analysis aligned to what users actually need.
- **Understanding product delivery**: scenarios about deadlines, sprint work, and team dependencies test how a candidate would manage their contribution to fit the wider team.
- **Data science innovation and developing data science capability**: scenarios about learning, feedback, and mistakes test curiosity, receptiveness to learning, and willingness to ask questions.
- **Programming and build / data engineering**: scenarios about code review, script errors, and data preparation test how a candidate would behave when supervised technical work goes wrong.

### Practice questions

For each scenario, ask the candidate to decide their answer, then compare it against the analysis below when scoring. Where the format is "most/least effective", the candidate should pick one of each.

#### Question 1 (easy) - The unclear task

At Monday's stand-up, a delivery manager asks the candidate to "pull together the usual figures for the policy team by Thursday". The candidate has never produced these figures before and is not sure what "the usual" means.

- A) Spend Monday and Tuesday searching old folders, and produce a best guess at the figures.
- B) Ask the delivery manager straight after stand-up to clarify exactly what is needed, and ask a teammate to point to the previous month's output as a template.
- C) Wait until Wednesday to see whether it becomes clearer, then ask if not.
- D) Ask the policy team directly what they want, without telling the delivery manager.

**Most effective: B. Least effective: C.**

**Explanation:** Option B clarifies requirements immediately, uses an existing template (efficient and consistent), and keeps everyone aligned; it also models "be unafraid to ask questions", which the role profile explicitly values in a trainee. Option A wastes up to two days and risks delivering the wrong thing. Option D shows initiative but bypasses the manager, which risks confusion about scope and duplicated conversations; it is weaker but not the worst. Option C is least effective: it silently burns half the available time and turns a small question into a Thursday crisis. In situational judgement tests, options that delay action while adding nothing are classic low scorers.

#### Question 2 (easy) - The spreadsheet mistake

On Thursday the candidate realises that a summary table they produced on Tuesday, which the team has already sent to a policy colleague, contains an error: one region's records were filtered out by mistake, understating the total by around 8%.

- A) Say nothing; the difference is small and nobody has noticed.
- B) Quietly correct the file in the shared folder so future users get the right version.
- C) Tell the line manager immediately, explain what went wrong, and offer to send the corrected table with a short note to the policy colleague.
- D) Email the policy colleague a correction without telling anyone on the team.

**Most effective: C. Least effective: A.**

**Explanation:** Honesty and transparency about errors are core public sector values, and analytical credibility depends on correcting the record quickly. Option C does everything right: it surfaces the error, involves the line manager (appropriate for a trainee), and fixes the downstream impact. Option D fixes the record but leaves the team unaware, which can cause contradictory messages and prevents the team learning from the error. Option B is worse: it hides the error while the wrong figures continue to inform the policy colleague. Option A is least effective; an 8% understatement can change decisions, and concealment converts an innocent mistake into a trust problem. Everyone makes errors as a trainee; assessments look for how a candidate handles them.

#### Question 3 (moderate) - Pressure to skip data preparation

A senior stakeholder wants headline findings from a new dataset by tomorrow morning for a leadership meeting. The candidate's data preparation checks are only half done, and they have already spotted duplicate records and inconsistent date formats.

- A) Work late to run the analysis on the unprepared data and present the headline figures as requested.
- B) Tell the stakeholder it is impossible and that they will have to wait a week.
- C) Explain the data quality issues to the line manager, and propose options: caveated preliminary figures based on the cleaned portion, or complete figures later in the week.
- D) Send the stakeholder the raw dataset so they can draw their own conclusions.

**Most effective: C. Least effective: D.**

**Explanation:** Option C balances user needs (the stakeholder gets something decision-useful tomorrow) with analytical integrity (clear caveats, honest limitations), and it routes the negotiation through the line manager, which is right at trainee level. This directly exercises the role's skills: explaining why data must be cleansed and prepared, and communicating data science effectively. Option A risks presenting figures distorted by duplicates, exactly the kind of "insight" that later collapses and damages trust. Option B is rigid: it treats quality as absolute and ignores the legitimate need for timely, caveated information. Option D is least effective: it abdicates the analyst's responsibility entirely, hands unprepared data to someone without context, and could mislead a leadership meeting worse than any of the alternatives.

#### Question 4 (moderate) - The ethical grey area

A team is exploring whether a machine learning model could help prioritise housing repair requests. A teammate suggests including a variable that is a close stand-in for household ethnicity, saying "it improves the accuracy metric, and we're only experimenting".

- A) Agree; it is only an experiment, and accuracy is what matters at this stage.
- B) Say discomfort with the idea, and suggest the team raise the variable's use with the data ethics adviser or equivalent channel before going further.
- C) Say nothing in the meeting, but quietly leave the variable out of their own scripts.
- D) Publicly accuse the teammate of discrimination.

**Most effective: B. Least effective: A.**

**Explanation:** A proxy for a protected characteristic in a prioritisation model raises fairness and legal questions that a trainee is not expected to resolve alone, but is expected to raise. Option B does exactly what the role profile asks: identify appropriate channels to discuss ethical issues, with support. It keeps the tone collaborative and gets expert input early, when changes are cheap. Option C avoids conflict but leaves the team's shared work unexamined, and inconsistent scripts create confusion. Option D escalates interpersonally rather than institutionally, damaging team trust when a well-run process would resolve the question. Option A is least effective: "only experimenting" is how problematic variables become embedded, and accuracy gains from a discriminatory proxy are precisely the pattern ethics review exists to catch. Public sector data science must be fair and inclusive as well as accurate.

#### Question 5 (moderate) - Blocked by a data engineer's workload

A candidate's exploratory analysis is blocked: they need a cleaned extract from the data engineering team, but the engineer who owns it is fully booked this sprint. The sprint task is due Friday.

- A) Attempt to build the extract personally, directly from the production database, using access held for a different project.
- B) Raise the dependency at stand-up so the delivery manager can re-plan or negotiate, and meanwhile progress the parts of the task that do not need the extract.
- C) Repeatedly message the engineer, marking each message urgent, until they fit the candidate in.
- D) Report at Friday's review that the task failed because data engineering was too slow.

**Most effective: B. Least effective: A.**

**Explanation:** Option B treats the blockage as a team planning problem, which it is: making dependencies visible at stand-up is exactly how agile teams re-plan, and progressing unblocked work keeps a candidate productive. This is the "understanding product delivery" skill in action. Option C personalises the problem and pressures a colleague who does not control their own sprint commitments. Option D hides the problem until it is too late to fix and frames a teammate negatively, poor collaboration on both counts. Option A is least effective, and seriously so: using access granted for a different purpose breaches data governance, and building an extract without the engineering team's knowledge bypasses the controls that keep data safe and consistent. Good intentions do not excuse inappropriate data access in government.

#### Question 6 (moderate) - Feedback that stings

A senior data scientist reviews a candidate's first substantial script and returns it with 23 comments, including "this whole section should be rewritten using the team's standard functions".

- A) Rewrite the script exactly as suggested without reading the comments closely, to get it approved quickly.
- B) Feel wronged and ask the line manager to assign a different reviewer in future.
- C) Work through each comment, ask the reviewer to talk through the ones that are unclear, and keep a note of the team standards not previously known.
- D) Defend each original choice in written replies to all 23 comments.

**Most effective: C. Least effective: B.**

**Explanation:** Twenty-three comments on a trainee's first big script is normal, and it is a gift: someone senior spent real time on this development. Option C treats it that way, converting review into learning and into a reusable note about team standards, exactly matching the role's skills of being receptive to learning and the CPD-plan habits it expects. Option A misses the learning entirely and risks repeating every mistake. Option D treats review as a battle; occasional pushback on specific points is healthy, but blanket defensiveness signals unreceptiveness. Option B is least effective: it avoids the substance, frames feedback as a personal problem, and would deprive the candidate of one of the best learning sources available. Assessors consistently score "seeks to understand feedback" as top-tier trainee behaviour.

#### Question 7 (moderate) - The confusing chart

A candidate has built a chart for a show-and-tell attended by non-technical policy colleagues. A teammate points out that the chart, a violin plot of response-time distributions, will probably confuse the audience, but the candidate is proud of it and it is statistically the most informative choice.

- A) Keep the violin plot; the audience should be encouraged to engage with proper statistical graphics.
- B) Replace it with a simple bar chart of averages, losing the distributional information entirely.
- C) Keep the violin plot but add a spoken caveat that it is complicated.
- D) Redesign the visual around the audience: perhaps a simpler chart showing the key comparison, with the detailed plot in an appendix for those who want it.

**Most effective: D. Least effective: A.**

**Explanation:** Communication succeeds when the audience understands, not when the chart is technically sophisticated. Option D serves user needs both ways: the main message lands simply, and the full detail remains available, which is exactly "create basic visuals and presentations to communicate data science effectively" and "align them to meet user needs". Option B overcorrects by discarding genuinely relevant information (averages can hide the distributional story that motivated the analysis). Option C keeps the confusion and merely apologises for it. Option A is least effective because it puts the analyst's preference above the audience's needs; in government, analysis that is not understood cannot inform decisions, however elegant it is.

#### Question 8 (hard) - A request that skirts privacy rules

A friendly policy colleague emails a candidate directly: "Could you send me the underlying record-level data behind last month's analysis? It would save me asking through the formal request process, and it's just for a quick internal look."

- A) Send it; they are a trusted colleague, and the data will stay internal.
- B) Reply expressing a wish to help, explain that record-level data has to go through the proper access process, offer to share the published aggregate outputs now, and copy in the line manager so the access request moves quickly.
- C) Refuse with a one-line email citing data protection, and do nothing further.
- D) Send a partial extract with some columns removed as a compromise.

**Most effective: B. Least effective: A.**

**Explanation:** Record-level data typically carries access controls for good reasons: privacy, purpose limitation, and audit. Option B honours the rules while genuinely helping: it gives the colleague something useful immediately, keeps the relationship warm, and accelerates the legitimate route with the line manager's support, textbook "identify appropriate channels, with support". Option D is a trap: deciding unilaterally which columns make record-level data safe is exactly the judgement trainees should not make alone; partial disclosure can still breach rules. Option C follows the rules but misses the collaborative half of the job; unhelpful compliance erodes relationships that public services depend on. Option A is least effective: informal sharing of record-level data bypasses governance entirely, however trusted the colleague; "it would save me asking through the formal process" is itself the warning sign.

#### Question 9 (hard) - The overrunning learning commitment

A candidate's development plan includes a machine learning course, with time formally set aside each week. This sprint, the team is behind on a ministerial deadline, and the delivery manager asks everyone to focus fully on delivery, including learning time, for the third sprint in a row.

- A) Silently skip the course again; delivery always comes first.
- B) Refuse, stating that the learning time is protected and non-negotiable.
- C) Agree to help this sprint, and separately raise the repeated pattern with the line manager, asking how to protect development time in future sprints.
- D) Log the learning hours as worked delivery hours in protest.

**Most effective: C. Least effective: D.**

**Explanation:** Option C shows judgement on both axes: it supports the team through a genuine crunch (ministerial deadlines are real), while treating the repeated erosion of development time as a legitimate issue to raise through the right channel, the line manager, who co-owns the CPD plan. This reflects "create a CPD plan with support from your manager" and mature team behaviour. Option A sacrifices long-term capability without anyone even knowing there is a problem; three sprints is a pattern, not an exception. Option B is disproportionate in a genuine crunch and reads as inflexible. Option D is least effective: misrecording hours is an integrity issue, full stop, and protest through inaccurate records would undermine trust far more than it protects learning. Notice the shape of the best answer: flex in the moment, address the pattern properly.

#### Question 10 (hard) - Suspicious findings before publication

A candidate's analysis of application processing times shows one region performing dramatically better than all others. The team lead is delighted and wants to feature it in the monthly report tomorrow. While double-checking, the candidate discovers the region's figures exclude a category of complex cases that other regions include, explaining most of the gap.

- A) Say nothing; the exclusion is in the data pipeline, so it is not the candidate's error, and the report is tomorrow.
- B) Tell the team lead today what was found, show the corrected comparison, and let them decide how to handle the report.
- C) Change the figures in the report personally, tonight, without telling anyone.
- D) Mention it informally to a teammate and hope they raise it.

**Most effective: B. Least effective: A.**

**Explanation:** This is an accuracy-versus-awkwardness dilemma, and public sector analysis must choose accuracy. Option B is prompt, evidenced (showing the corrected comparison, not just a worry), and correctly routed: the team lead owns the report and needs the information today, not after publication. It also demonstrates exactly the inquisitive checking that found the issue, the applied statistics skill at work. Option C has the right motive but wrong method: unilateral overnight changes to a team publication bypass review and could introduce new errors. Option D outsources responsibility and probably fails. Option A is least effective: knowingly letting a flattering but misleading comparison be published harms the regions being unfairly compared, misleads decision-makers, and eventually damages the team when the exclusion surfaces, as it will. "Not my error" does not mean "not my responsibility to flag".

#### Question 11 (hard) - Ranking: the accessibility request

Two days before a team's findings presentation, an attendee emails to say they use a screen reader and asks for the materials in an accessible format. The candidate's slides are image-heavy, with charts pasted as pictures and no alternative text. Rank these four actions from most to least effective.

- A) Reply that the slides will be shared after the meeting and they can follow along by listening.
- B) Spend the two days making the deck accessible: add alternative text describing each chart's message, provide the key tables as structured data, and check reading order.
- C) Send them the raw chart images in advance so they have more time with the material.
- D) Make the core content accessible first (headline findings and key tables), tell the attendee what will be ready by the meeting, and ask whether that meets their needs.

**Most effective ranking: D, B, A, C.**

**Explanation:** D edges out B because it combines action with dialogue: accessibility done with the person, checking what actually meets their needs, is better than assuming, and it guarantees the essentials are ready in time even if the full deck is not. B is a strong second: full remediation is the right destination, though two days may be tight and it proceeds without consulting the user. A is weak: it treats accessibility as optional aftercare and excludes the attendee from participating equally in the meeting itself. C is least effective: raw chart images are precisely what a screen reader cannot interpret, so it looks responsive while providing nothing usable. Accessibility and inclusion are formal obligations in UK government digital work, not favours, and assessors reward candidates who engage users in the solution.

#### Question 12 (hard) - The tempting shortcut on a learning curve

A candidate is running an analysis using a statistical technique they only half understand. The result looks plausible, and the deadline is close. A voice in their head says nobody will check the method.

- A) Submit the result; it looks plausible, and asking for help would reveal what is not known.
- B) Tell the reviewer or senior data scientist which parts of the method are unclear, and ask them to check those parts of the work specifically.
- C) Swap to a much simpler method that is fully understood, without telling anyone the analysis has changed.
- D) Delay the deadline unilaterally by a week to self-study the technique thoroughly.

**Most effective: B. Least effective: A.**

**Explanation:** Option B is the trainee gold standard: it delivers on time, converts uncertainty into targeted review, and turns the gap into supervised learning, precisely "be unafraid to ask questions and discover what there is to learn" and writing scripts "under supervision". Option C may actually be acceptable analytically (prefer the simplest adequate method), but doing it silently hides a material change from the team. Option D respects rigour but unilaterally rewrites a commitment that may not be the candidate's to move. Option A is least effective: plausible-looking results from half-understood methods are how analytical errors reach ministers, and hiding uncertainty to appear competent is the exact inversion of the learning culture this role depends on. In situational judgement scoring, concealing limitations at any level, but especially as a trainee, is consistently bottom-ranked.

### Administration and scoring guidance

- **Score against the Civil Service values and the department's data ethics guidance** rather than generic ideas of "good judgement". Strong answers usually combine honesty, collaboration, user focus, and use of proper channels.
- **Score for the trainee level, not a senior one.** The best response at this level often includes consulting a manager or a senior colleague; do not mark down a candidate for choosing to escalate rather than act alone, and do not reward lone-hero options just because they sound decisive. "Act on what is yours, escalate what is not" is the balance to look for.
- **Options that delay, hide, or hand off problems usually should score low.** Options that surface the problem quickly, to the right person, with evidence, usually should score high.
- **Situational judgement options are written in shades**; encourage - and where you can, require - the candidate to compare the full set before answering, since option B may look good until D is read.
- **At debrief, discussing why one option outranks another with the candidate** is often the most useful part of the conversation, since it reveals how they are reasoning, not just what they chose.
- **Candidates who answer as they would genuinely act** tend to produce more consistent patterns across scenarios than those trying to guess the "right" answer; a set of oddly inconsistent choices is worth exploring at debrief rather than simply marking down.

### Common pitfalls

- **Answering idealistically instead of practically.** "Convene a working group on data ethics" sounds noble, but if the report goes out tomorrow, the effective answer acts today. The best answers work within the scenario's real constraints.
- **Selecting passive options.** Waiting, hoping someone else notices, or raising things after the deadline are consistently among the lowest-scoring behaviours, in tests and in real teams.
- **Ignoring the stated context.** If the scenario says the deadline is tomorrow, or the colleague is off sick, those facts are there to shape the answer. A candidate who solves a different, more convenient scenario has missed the point.
- **Over-escalating or under-escalating.** Interrupting a director about a typo is over-escalation; handling a suspected data breach alone is under-escalation. The response should match the stakes, and remember that for a trainee, informing a line manager is usually right for anything ethical, legal, or reputational.
- **Confusing loyalty with cover-up.** Protecting a teammate never extends to hiding errors that affect users, decisions, or the public record. Kind and honest beats kind or honest.
- **Forgetting the public sector dimension.** In government, transparency, accessibility, inclusion, and careful data handling are duties, not niceties. When two options seem close, the one that honours these duties usually ranks higher.

## Conclusion

You have now worked through the four assessment types most relevant to the trainee data scientist role level: cognitive reasoning with pattern spotting, error checking, and logical deduction in data pipelines and scripts; numeric reasoning with percentages, rates, weighted averages, and model metrics; verbal reasoning with the discipline of reading guidance, emails, and briefs with precision; and situational judgement across the deadlines, ethical questions, mistakes, and stakeholders that a trainee data scientist meets in public sector teams.

Notice how often the same themes recur across all four assessments: checking before concluding, choosing the right denominator, reading the exact words, surfacing problems early, and asking questions without embarrassment. These are not test tricks. They are the working habits of good data scientists, which is exactly why they are worth assessing for, and why a candidate's performance here is a reasonable proxy for how they would behave in the job.

When scoring, work from the worked explanations as your answer key, and remember that at this level a candidate is not expected to act with the independence of a senior colleague - asking questions, checking before acting, and escalating appropriately are frequently the top-scoring behaviours, not weaknesses. Debrief the candidate afterwards: talk through the questions they found hardest, and use the situational judgement section in particular as a genuine conversation about how they reason, since a candidate's spoken explanation of a choice often tells you more than the choice itself.

Administer the same questions and time limit to every candidate assessed against this role level, and keep a record of your scoring and reasoning. Treat the result as one input into a wider decision - alongside the interview, references and any other evidence you hold - and never as the sole basis for it. This instrument is not validated, not normed and not checked for adverse impact, so consistency across candidates and careful record-keeping are what make it defensible; consult your organisation's human resources, people development or legal colleagues if anything about a candidate's circumstances calls the standard process into question.
