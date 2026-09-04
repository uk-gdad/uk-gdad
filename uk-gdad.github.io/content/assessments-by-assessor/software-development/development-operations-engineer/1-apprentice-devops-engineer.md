# Apprentice DevOps Engineer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for apprentice DevOps engineer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

A psychometric assessment is a structured, standardised set of exercises that measures the thinking skills and workplace behaviours that predict success in a job. The tests in this guide are job-specific: they use the kinds of things an apprentice genuinely sees every day — build pipeline outputs, monitoring dashboards, service tickets, runbooks, security guidance, and messages from a team.

At apprentice level, the role spends a significant proportion of time shadowing others, is involved in implementation but not planning, and is steadily building knowledge. This guide checks for the ability to spot when something looks wrong in a pipeline log, follow a runbook step by step without skipping anything, read an email from a senior engineer and take away the right instruction, and make sensible choices when something unexpected happens.

Each of the four sections follows the same pattern: an overview of what it measures and what the test format usually looks like; a mapping to the role's named skills — service support, information security, and modern development standards among them; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Assessments at this level are about potential, carefulness, and willingness to learn — score accordingly, and expect a wide range of prior exposure to formal testing. Several situational judgement items in this guide deliberately have a "strongest" answer that is asking, escalating, or admitting a mistake rather than acting alone — the opposite of what would score well for a senior engineer — so score for what an apprentice, supervised and learning, owes the team, not for confident independent action. Use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the thinking processes this role actually uses, wrapped in practical workplace scenarios rather than abstract puzzles: pipeline stage outputs, version numbers, monitoring alerts, checklists, and runbook steps.

The typical format is an online, timed test lasting 15 to 30 minutes, with questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective, compared against a norm group of apprentices and early-career engineers, often adaptive, with speed and accuracy reported separately.

For an apprentice DevOps engineer, cognitive assessment is especially relevant because so much learning happens through observation and careful checking: watching for the recurring shapes of healthy builds while shadowing a deployment, and doing structured error checking while helping investigate a service fault under direction.

### How this assessment maps to the role

- **Pattern recognition** maps to **Programming and build (software engineering)**: recognising the recurring shapes of healthy builds — stage order, version numbering, standard log line formats.
- **Logical deduction** maps to **Availability and capacity management** and **Information security**: reasoning from rules to consequences.
- **Error checking** maps to **Service support**: helping investigate and fix service faults means comparing what is seen against what should be there.
- **Prioritisation** maps to the day-to-day reality of shadowing and supervised work: deciding sensible ordering, and when to pause and ask.
- **Applied problem solving** maps to **Modern development standards** and **Prototyping**: thinking through cause and effect in the development process.

### Practice questions

**Question 1 (easy) — Pattern recognition in a pipeline**

A team's build pipeline follows the same stage order in every successful run: Checkout, Build, Unit tests, Package, Deploy to test. Four runs are observed: Run 1 (standard order), Run 2 (standard order), Run 3 (Checkout, Unit tests, Build, Package, Deploy to test), Run 4 (standard order). Ask which run does not follow the standard pattern.

- A) Run 1
- B) Run 2
- C) Run 3
- D) Run 4

**Correct answer: C**

**Explanation:** Run 3 swaps the second and third stages, trying to run unit tests before the build. This tests comparing each run against the standard order stage by stage, rather than glancing at the whole list — the same observational skill built while shadowing, where a reordered pipeline usually means a configuration change worth noticing.

**Question 2 (easy) — Spotting the odd one out in version numbers**

A team's release tag pattern is `service-name-v<major>.<minor>.<patch>`. Four tags: `queue-worker-v2.4.1`; `queue-worker-v2.4.2`; `queue-worker-2.5.0`; `queue-worker-v2.5.1`. Ask which tag breaks the naming pattern.

- A) Tag 1
- B) Tag 2
- C) Tag 3
- D) Tag 4

**Correct answer: C**

**Explanation:** Tag 3 is missing the `v` before the version numbers. This tests checking each tag against every part of the pattern in turn, and recognising that small naming inconsistencies matter because automated tools often select releases by matching the pattern exactly.

**Question 3 (easy) — Following a runbook rule**

A runbook says: "If the disk usage alert is above 80%, run the cleanup script. If the cleanup script does not bring usage below 80%, escalate to the on-call engineer." The candidate ran the cleanup script at 85% usage; afterwards usage shows 82%. Ask what should happen next according to the runbook.

- A) Run the cleanup script again
- B) Escalate to the on-call engineer
- C) Wait an hour and check again
- D) Close the alert, because usage went down

**Correct answer: B**

**Explanation:** Usage remains above 80% after the script ran, meeting the escalation condition exactly. Options A and C add steps the runbook does not contain; D ignores the threshold. This tests reading a runbook as a chain of conditions and doing exactly what the procedure says — escalating when told to is the procedure working, not a failure.

**Question 4 (easy) — Logical deduction about security controls**

Security guidance states: "Every laptop used for development must have full-disk encryption enabled unless a written exception has been approved by the security team." A colleague's laptop does not have encryption. Ask which conclusion must be true.

- A) Your colleague has broken the security rules.
- B) Your colleague has a written exception from the security team.
- C) Either your colleague has a written exception, or the rules have been broken.
- D) Your colleague's laptop cannot be used for development work.

**Correct answer: C**

**Explanation:** The rule is conditional with one permitted exception, and the facts cannot establish which case applies, ruling out A and B alone; D goes beyond anything stated. This tests deducing only what the information guarantees — jumping straight to an accusation before checking the facts damages trust.

**Question 5 (moderate) — Error checking a deployment checklist**

A deployment checklist: (1) unit tests passing, (2) code reviewed by at least one person, (3) change recorded in the change log, (4) test environment health check green. Evidence: pipeline shows tests passing; pull request shows two approvals; the change log's latest entry is last week's and describes a different change; the health check dashboard is green. Ask how many checklist items are satisfied.

- A) 1
- B) 2
- C) 3
- D) 4

**Correct answer: C**

**Explanation:** Items 1, 2 and 4 are satisfied; item 3 is not, since the change log's most recent entry does not describe today's change. This tests matching evidence to requirements precisely rather than counting a stale, unrelated entry as satisfying the requirement — an out-of-date change log makes later fault investigation much harder.

**Question 6 (moderate) — Pattern recognition in log timestamps**

A background job writes a heartbeat every 5 minutes. Heartbeats observed: 09:00, 09:05, 09:10, 09:20, 09:25. Ask for the most accurate observation.

- A) Nothing is odd; heartbeats appear regularly.
- B) The expected 09:15 heartbeat is missing, suggesting the job paused or failed once.
- C) The job is running twice as fast as it should.
- D) The heartbeats stopped after 09:10.

**Correct answer: B**

**Explanation:** Laying out the expected 5-minute sequence (09:00 to 09:25) against the actual entries shows exactly one gap, at 09:15. This tests the "expected versus actual" comparison habit — writing down what should be there before checking what is — which is one of the most useful techniques in operations work.

**Question 7 (moderate) — Prioritisation under direction**

A mentor, before leaving for an hour, gave three tasks: (1) write up notes from yesterday's shadowing, needed for next week's portfolio review; (2) run the daily backup verification check, due before midday (now 11:20, takes 15 minutes); (3) read new coding standards before Friday. A developer then asks for help with a failing test. Ask for the most sensible order for the next hour.

- A) Help the developer first, then the backup check, then notes, then reading
- B) Run the backup verification check first, then let the developer know your mentor will be back within the hour, then continue with notes or reading
- C) Finish your portfolio notes first because your review is important
- D) Read the standards document first because standards underpin everything

**Correct answer: B**

**Explanation:** The backup check has a hard, near deadline; the developer's request is outside defined activities at this level and best deferred to the mentor's return; the other two tasks have distant deadlines. This tests hard, near deadlines on assigned work taking priority over undirected requests, while still being courteous about the latter.

**Question 8 (moderate) — Deduction from environment rules**

Rules: (i) every change must be deployed to test before live; (ii) only changes that have passed review may be deployed to test; (iii) apprentices may deploy to development at any time, but may deploy to test only when paired with a senior engineer. A script change has not yet been reviewed. Ask what the candidate is allowed to do right now.

- A) Deploy it to test, as long as you pair with a senior engineer
- B) Deploy it to live, because it is only a small change
- C) Deploy it to development
- D) Nothing — you cannot deploy it anywhere until it is reviewed

**Correct answer: C**

**Explanation:** Rule (ii) blocks the unreviewed change from test regardless of pairing (ruling out A); B breaches both the test-before-live and review requirements; rule (iii) explicitly permits development deployment at any time, with no review requirement stated for it, ruling out D. This tests checking every option against every rule, since an option can pass one rule and fail another.

**Question 9 (moderate) — Applied problem solving: why did the build break?**

A build worked at 10:00 and failed at 10:30 with "package not found." Between those times: (1) a colleague merged a change adding a new package to the dependency list; (2) office wifi dropped for two minutes at 10:10; (3) the candidate renamed their own local project folder. The build runs on a shared build server. Ask for the most likely cause to investigate first.

- A) The colleague's merged change adding the new package
- B) The wifi drop at 10:10
- C) Your renamed local folder
- D) The build server needs restarting

**Correct answer: A**

**Explanation:** The error points directly at dependencies, and only one event is dependency-related; the wifi drop doesn't necessarily affect the build server, and a local folder rename cannot affect a shared server at all. This tests working from the error message towards the most plausible recent change, rather than guessing at random fixes.

**Question 10 (hard) — Multi-step deduction about a monitoring rota**

Three dashboards (Availability, Capacity, Security) are each checked by exactly one person daily; nobody may check the same dashboard two days running. Yesterday: Amal checked Availability, Bea checked Capacity, Chris checked Security. Today Bea is on leave; Amal has already picked up Capacity. Ask which dashboard the candidate must check today.

- A) Availability
- B) Capacity
- C) Security
- D) Any of the three — the rules allow more than one arrangement

**Correct answer: C**

**Explanation:** Amal on Capacity is valid (different from yesterday); Chris cannot repeat Security, so Chris must take Availability, leaving Security as the only remaining, valid assignment for the candidate. This tests patient elimination — fixing known assignments, applying the rule to narrow choices, and seeing what is forced, ruling out D since only one valid arrangement exists.

**Question 11 (hard) — Error checking across two artefacts**

A wiki says: "The nightly batch job runs at 02:00 and takes about 45 minutes. If it is still running at 03:30, raise an incident." A monitoring extract: job started 02:00, still running at 03:10, finished 03:25. A colleague says an incident should have been raised. Ask whether the colleague is right.

- A) Yes — the job overran its usual 45 minutes, so an incident was needed.
- B) No — the incident rule triggers only if the job is still running at 03:30, and it finished at 03:25.
- C) Yes — any job running past 03:00 needs an incident.
- D) Cannot say — the wiki does not define "running".

**Correct answer: B**

**Explanation:** "Takes about 45 minutes" describes normal behaviour; the actual rule is the precise 03:30 trigger, which the job finished five minutes before reaching. This tests distinguishing a description from a rule — mixing them up causes either false alarms or missed escalations in real runbooks.

**Question 12 (hard) — Applied problem solving with a process change**

A team deploys to test weekly on Thursdays, and deployments frequently fail because many changes are bundled together, making the cause hard to find. A senior engineer proposes daily deployments with fewer changes each. A colleague objects: "More deployments means more failures." Ask for the best evaluation of the objection.

- A) The objection is correct: more deployments always mean more total failures.
- B) The objection misses the point: smaller deployments make each failure easier to diagnose and fix, and fewer bundled changes make each deployment less likely to fail in the first place.
- C) The objection is correct because daily deployments leave no time for testing.
- D) Both approaches are identical in risk, so the change is pointless.

**Correct answer: B**

**Explanation:** Smaller batches reduce both the chance of failure and the diagnosis time when failure occurs, while the objection only counts deployment events. Option C assumes testing is removed, which the proposal doesn't state. This tests the core logic behind small, frequent releases — explaining *why* a standard helps, not just that it exists.

### Administration tips

- Score for whether the candidate compares an artefact against an explicit standard (a pipeline order, a naming pattern) methodically rather than glancing and guessing.
- Note whether the candidate distinguishes a description of normal behaviour from a precise triggering rule.
- Watch for whether the candidate deduces only what is guaranteed by a conditional rule, rather than jumping to an accusation or a conclusion.
- Score for whether the candidate prioritises a hard, near deadline on assigned work over an undirected request.
- Note whether the candidate works from a symptom (an error message) to the most plausible cause before guessing.

### Common pitfalls to watch for when scoring

- Crediting an answer drawn from outside knowledge of "how things usually work" rather than the rules given in the scenario.
- Marking a "must be true" deduction correct when only one of several possibilities was named.
- Missing when a candidate treats "escalate" or "ask" as a weak answer, when at this level it is often the strongest.
- Rewarding a guess-based fix over a methodical comparison against a known-good pattern or rule.
- Missing when a candidate confuses a description of typical behaviour with an actual triggering condition.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how confidently and accurately a candidate works with the numbers that appear in this job. It is not a maths exam — it involves reading small tables and charts and answering questions using percentages, averages, ratios, rates, and simple trend-spotting, wrapped in DevOps scenarios such as disk usage, build times, uptime figures, and ticket counts.

The typical format is an online, timed test lasting 20 to 30 minutes with 15 to 25 questions. A basic calculator is often provided.

Employers use numeric reasoning tests for DevOps roles because operations work is full of numbers that matter: availability as a percentage, capacity judged against thresholds, build health tracked by pass rates and durations, service support managed through ticket counts. At apprentice level, nobody expects capacity planning — but reading a dashboard and understanding what the numbers say, and noticing when a figure is drifting the wrong way, is expected.

### How this assessment maps to the role

- **Percentages** map to **Availability and capacity management**: uptime percentages and usage thresholds.
- **Averages and rates** map to **Programming and build (software engineering)**: build durations, test pass rates, deployment frequency.
- **Reading tables and charts** maps to **Service support**: extracting the right number from the right row of a monitoring graph or ticket report.
- **Ratios and proportions** map to **Information security** and **Modern development standards**: proportions of patched machines, share of code covered by tests.
- **Trend spotting** maps to the duty to **build on your knowledge**: noticing a number creeping up week after week.

### Practice questions

**Question 1 (easy) — Reading a ticket table**

Tickets received: Monday 12, Tuesday 9, Wednesday 15, Thursday 11, Friday 8. Ask for the weekly total.

- A) 50
- B) 55
- C) 57
- D) 60

**Correct answer: B**

**Explanation:** 12+9+15+11+8=55 — option B. This tests basic addition under time pressure, and, in a strong answer, regrouping into round-number pairs (12+8, 9+11) for speed and easy checking.

**Question 2 (easy) — Disk usage percentage**

A 500 GB disk shows 350 GB used. Ask for the percentage used.

- A) 60%
- B) 65%
- C) 70%
- D) 75%

**Correct answer: C**

**Explanation:** 350÷500=70% — option C. This tests basic percentage calculation, and translating between gigabytes and percentages, since a capacity alert threshold is usually expressed as a percentage while headroom is more naturally understood in gigabytes.

**Question 3 (easy) — Average build time**

Last five builds: 6, 8, 5, 9, 7 minutes. Ask for the average build time.

- A) 6 minutes
- B) 6.5 minutes
- C) 7 minutes
- D) 7.5 minutes

**Correct answer: C**

**Explanation:** (6+8+5+9+7)÷5=7 — option C. This tests basic averaging and, in a strong answer, a sense-check that the mean must sit between the smallest (5) and largest (9) value.

**Question 4 (easy) — Percentage of tests passing**

200 automated tests run, 8 fail. Ask for the pass rate.

- A) 92%
- B) 94%
- C) 96%
- D) 98%

**Correct answer: C**

**Explanation:** 192÷200=96% — option C. Option A comes from subtracting 8 directly from 100, confusing a count of 8 tests with 8 per cent. This tests keeping counts and percentages clearly separate.

**Question 5 (moderate) — Uptime percentage**

A service, expected available 24/7, was unavailable 6 hours over a 30-day month. Ask for the availability percentage, to one decimal place.

- A) 99.2%
- B) 99.4%
- C) 99.6%
- D) 99.8%

**Correct answer: A**

**Explanation:** Total hours 720; available 714; 714÷720≈99.17%, rounding to 99.2% — option A. This tests multi-step percentage calculation with correct rounding, and, in a strong answer, translating "0.1% of a month" into roughly 43 minutes to make the figure concrete.

**Question 6 (moderate) — Ratio of environments**

24 virtual machines split test:development in ratio 5:3. Ask how many are in test.

- A) 9
- B) 12
- C) 15
- D) 18

**Correct answer: C**

**Explanation:** 8 parts total; 24÷8=3 per part; test=5×3=15 — option C, checked against development=3×3=9, 15+9=24. This tests the standard ratio method: find total parts, find one part, multiply, and check the pieces sum back to the total.

**Question 7 (moderate) — Change in ticket volume**

Weekly faults: Week 1: 40, Week 2: 44, Week 3: 50, Week 4: 60. Ask for the percentage increase from Week 1 to Week 4.

- A) 20%
- B) 33%
- C) 50%
- D) 60%

**Correct answer: C**

**Explanation:** (60−40)÷40=50% — option C. Option B divides by the new value instead. This tests anchoring percentage change on the original value, and, in a strong answer, noticing the weekly rises (4, 6, 10) are themselves growing — an accelerating trend worth flagging.

**Question 8 (moderate) — Reading a two-way table**

Fault tickets by service and priority: Payments API 6 high/18 low; Booking site 4 high/12 low; Reporting tool 2 high/8 low. Ask what fraction of all tickets were high priority.

- A) 1/5
- B) 6/25
- C) 1/4
- D) 3/10

**Correct answer: B**

**Explanation:** High total 12; overall total 50; 12/50=6/25 — option B, distinct from the close-looking 1/4 (0.25 vs 0.24). This tests dividing by the correct base (all tickets, not a subtotal) and comparing close-valued options precisely rather than rounding.

**Question 9 (moderate) — Time and rates for a backup job**

A backup job copies 4 GB/minute; tonight's backup is 288 GB; the window closes 90 minutes after start. Ask whether it finishes in time and with what margin.

- A) Yes, with 18 minutes to spare
- B) Yes, with 12 minutes to spare
- C) No, it will overrun by 6 minutes
- D) No, it will overrun by 18 minutes

**Correct answer: A**

**Explanation:** 288÷4=72 minutes; 90−72=18 minutes to spare — option A. This tests rate-based time calculation and stating an answer with its margin, since margins convey how much risk remains if the job runs slightly slower than expected.

**Question 10 (hard) — Percentage threshold and headroom**

A 640 GB database is 60% full, growing 16 GB/week; the alert fires at 85%. Ask, assuming steady growth, how many weeks until the alert fires.

- A) 8 weeks
- B) 10 weeks
- C) 12 weeks
- D) 16 weeks

**Correct answer: B**

**Explanation:** Current 384 GB; alert level 544 GB; headroom 160 GB; 160÷16=10 weeks — option B. This tests the standard "when will we run out?" pattern: convert percentages to real amounts, find the gap, divide by the rate — and, in a strong answer, noting the forecast assumes steady growth and should prompt planning, not complacency.

**Question 11 (hard) — Comparing failure rates fairly**

Pipeline A ran 250 times, failed 20; Pipeline B ran 80 times, failed 10. A colleague says A is worse "because it failed twice as often." Ask for the accurate statement.

- A) The colleague is right: 20 failures is worse than 10.
- B) Pipeline A's failure rate is 8%, Pipeline B's is 12.5%, so Pipeline B fails proportionally more often.
- C) Both pipelines have the same failure rate.
- D) The failure rates cannot be compared without knowing the build durations.

**Correct answer: B**

**Explanation:** A: 20÷250=8%; B: 10÷80=12.5% — option B, the reverse of the raw-count comparison. This tests converting counts to rates before comparing across different totals — the most common statistical slip in operational conversations.

**Question 12 (hard) — Multi-step cost and capacity question**

A cloud test environment costs £0.50/hour/VM, 10 machines, running 24/7. A proposal: 12 hours/day on weekdays only. Over a 28-day (4-week) period, ask for the saving.

- A) £1,680
- B) £2,160
- C) £2,760
- D) £3,360

**Correct answer: B**

**Explanation:** Current: 672 hours/machine × 10 × £0.50=£3,360. Proposed: 240 hours/machine × 10 × £0.50=£1,200. Saving £2,160 — option B, verified independently via hours saved (432×10×£0.50=£2,160). This tests multi-step cost calculation with independent verification by a second method — the gold standard for checking arithmetic that involves money.

### Administration tips

- Score for whether the candidate uses the correct base for a percentage change (always the original value).
- Note whether the candidate converts counts to rates before comparing across different totals.
- Watch for whether the candidate keeps full precision until the final rounding step.
- Score for whether the candidate sense-checks an answer (a mean between the smallest and largest value; parts summing back to a total).
- Note whether the candidate labels counts and percentages distinctly rather than confusing them.

### Common pitfalls to watch for when scoring

- Crediting a percentage change computed by dividing by the new value instead of the original.
- Missing when a candidate compares raw counts across different totals instead of converting to rates.
- Rewarding premature rounding partway through a multi-step calculation.
- Accepting a table reading where the wrong row or column was used.
- Missing when a candidate confuses a count (8 tests) with a percentage (8%).

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate reads, understands, and draws conclusions from written material genuinely met in a DevOps apprenticeship: runbooks, security guidance, team emails, incident reports, standards documents, and service descriptions.

The most common format presents a passage followed by statements to classify as True (supported), False (contradicted), or Cannot say (insufficient information). Other formats include best-summary selection, identifying what a word or instruction refers to, and judging which sentence communicates most clearly. Tests typically run 15 to 25 minutes with 20 to 30 short questions.

The golden rule is: answer only from the passage. Misreading a single sentence — doing step 4 before step 3, treating "should" as "must" — can cause real problems in a live-adjacent environment, so careful reading is a safety skill in this profession.

### How this assessment maps to the role

- **Comprehension of instructions** maps to **Service support**: reading procedures precisely — step order, conditions, who must be told what.
- **True/false/cannot-say discipline** maps to **Information security**: explaining security controls exactly, neither over- nor under-claiming.
- **Inference** maps to **Programming and build (software engineering)** and **Availability and capacity management**: connecting statements to their consequences.
- **Clear-writing judgement** maps to **Prototyping** and collaborative working: pair working and open teams run on clear messages.
- **Reading for tone and audience** maps to the duty to **build on your knowledge** while shadowing.

### Practice questions

**Question 1 (easy) — True/false/cannot say from a runbook extract**

Passage: "The nightly report job runs at 01:00 every day, including weekends. If the job fails, it retries automatically once after 15 minutes. If the retry also fails, the on-call engineer receives an alert. The job's output file is stored for 90 days."

Statement: "The nightly report job runs on Saturdays."

- A) True
- B) False
- C) Cannot say
- D) True only in summer

**Correct answer: A**

**Explanation:** "Every day, including weekends" directly supports the statement. This tests matching a statement against the exact words of the passage, rather than assuming based on general impressions.

**Question 2 (easy) — What does the instruction require?**

Passage: "All staff must complete the annual security awareness training by 31 March. Staff who joined after 1 January should complete the training within eight weeks of their start date instead. Line managers must confirm completion for their team members." Someone joined 10 February. Ask what applies to them.

- A) You must complete the training by 31 March.
- B) You should complete the training within eight weeks of 10 February.
- C) You are exempt from the training this year.
- D) Your line manager completes the training on your behalf.

**Correct answer: B**

**Explanation:** 10 February falls after 1 January, so the exception applies, displacing the general rule. This tests reading a general rule and its exception, and identifying which applies to a specific case rather than defaulting to the general rule.

**Question 3 (easy) — Best summary of an email**

Email: "Hi — quick heads-up. We're freezing changes to the test environment from Thursday 5pm until Monday 9am because the performance testing team needs a stable environment over the weekend. Anything already deployed can stay. If something urgent comes up, talk to me before touching anything. Thanks!"

Ask for the best one-sentence summary.

- A) The test environment is being switched off over the weekend.
- B) No new changes to the test environment between Thursday 5pm and Monday 9am, except urgent ones agreed with the sender first.
- C) All deployments must be removed from the test environment by Thursday.
- D) The performance testing team is taking ownership of the test environment permanently.

**Correct answer: B**

**Explanation:** B captures the freeze window, its scope (new changes), and the exception route. This tests keeping every load-bearing fact in a summary and dropping only decoration.

**Question 4 (easy) — Cannot-say discipline**

Passage: "Version 2.9 of the deployment tool introduces role-based access control. Administrators can now restrict who may deploy to each environment. The release notes recommend enabling this feature for all production environments."

Statement: "Version 2.9 is the most widely used version of the deployment tool."

- A) True
- B) False
- C) Cannot say
- D) True, because new versions are always adopted quickly

**Correct answer: C**

**Explanation:** The passage says nothing about adoption rates. Option D imports a plausible-sounding belief the text never states. This tests holding the "cannot say" line rather than filling a gap with a general assumption.

**Question 5 (moderate) — Following referents in a procedure**

Passage: "First, stop the message consumer service. Next, clear the queue using the purge script. The script writes a log to the shared drive; check it for errors before proceeding. If it contains errors, restart the consumer and raise a ticket. Otherwise, apply the configuration update and restart the consumer." The purge script's log shows no errors. Ask what happens next.

- A) Raise a ticket
- B) Restart the consumer immediately
- C) Apply the configuration update, then restart the consumer
- D) Stop the message consumer service

**Correct answer: C**

**Explanation:** No errors takes the "otherwise" branch — update, then restart, in that order. Option B restarts before the update, defeating the procedure. This tests tracking a procedure's branches and the order of steps within the correct branch.

**Question 6 (moderate) — Inference from release notes**

Passage: "From release 4.2, the booking service requires the new authentication component. Environments that have not installed the authentication component must remain on release 4.1. Release 4.1 will stop receiving security fixes at the end of December." Ask which conclusion follows.

- A) Every environment must install the authentication component before the end of December.
- B) An environment still without the authentication component in January will be running a release that no longer receives security fixes.
- C) Release 4.2 contains no security fixes.
- D) The authentication component is difficult to install.

**Correct answer: B**

**Explanation:** Chaining the stated facts (no component → stuck on 4.1; 4.1 loses fixes after December) gives exactly B. Option A converts a described consequence into a stated obligation. This tests connecting facts into their guaranteed consequence without inventing an instruction.

**Question 7 (moderate) — True/false/cannot say on a standards extract**

Passage: "All scripts committed to the shared repository must include a header comment stating the script's purpose and owner. Scripts without a header will be rejected by the automated check. Personal experiments kept in your own workspace are out of scope for this standard."

Statement: "A script in your own workspace without a header comment breaches the standard."

- A) True
- B) False
- C) Cannot say
- D) True, but only for long scripts

**Correct answer: B**

**Explanation:** The final sentence explicitly excludes personal workspace scripts from the standard, contradicting the statement: False, not Cannot say. This tests recognising a scope clause ("out of scope for") that actively rules a claim out.

**Question 8 (moderate) — Clear-writing judgement**

Ask which sentence best communicates in a handover note.

- A) "The thing from before was sorted out after the usual problems, so it should probably be fine now."
- B) "Utilisation of the remediation script effectuated resolution of the aforementioned anomaly."
- C) "I fixed the failed backup on server TST-04 by re-running the backup script at 14:30; it completed successfully and I checked the log."
- D) "Backup issues were experienced but actions were taken and outcomes were achieved."

**Correct answer: C**

**Explanation:** C names the problem, location, action, time, result, and verification. A is vague on every axis; B is inflated vocabulary; D uses passive voice to remove all specifics. This tests judging a sentence by what a reader could actually do with it.

**Question 9 (moderate) — Understanding a policy's conditions**

Passage: "Access to the live environment is granted only to named engineers who have completed the operations induction. Apprentices may view live dashboards but may not hold live access credentials. Access reviews take place quarterly, and unused accounts are disabled after 60 days of inactivity."

Statement: "An apprentice who completes the operations induction may hold live access credentials."

- A) True
- B) False
- C) Cannot say
- D) True after the next quarterly review

**Correct answer: B**

**Explanation:** The specific prohibition on apprentices holding live credentials is not cancelled by meeting the general induction condition: False. This tests recognising when a specific rule overrides a general one rather than assuming the general condition unlocks an exception.

**Question 10 (hard) — Inference across an incident report**

Passage: "At 10:14 the booking service began returning errors. The on-call engineer identified that the database server's disk had filled. Log files, which are normally rotated nightly, had not been rotated for six days because the rotation job's schedule was accidentally disabled during last week's server migration. Space was freed at 10:52 and the service recovered by 10:58. The rotation job has been re-enabled, and a disk-usage alert has been added."

Ask which statement is best supported.

- A) The server migration caused the disk to fill immediately.
- B) If the rotation job had been running normally, the disk would probably not have filled.
- C) The on-call engineer disabled the rotation job.
- D) The booking service was unavailable for six days.

**Correct answer: B**

**Explanation:** The report presents the missing rotation as the cause of the disk filling, supporting the careful counterfactual in B. Option A distorts the timeline (six days elapsed); C misattributes blame the report never assigns; D confuses six days of missed rotation with a 44-minute outage. This tests careful reading of cause, agent, and timeline in an incident report.

**Question 11 (hard) — Weighing "should" against "must"**

Passage: "Deployments to the test environment must be recorded in the change log. Deployments should take place before 4pm so that any problems can be resolved within working hours. Deployments after 4pm require the agreement of the duty engineer. All deployment records must include the version number and the name of the person deploying."

Ask which statement accurately reflects the guidance.

- A) Deploying to test at 5pm is forbidden.
- B) Deploying to test at 5pm is permitted with the duty engineer's agreement, and must still be recorded with version number and deployer's name.
- C) Deployments before 4pm do not need to be recorded.
- D) The duty engineer must approve all deployments.

**Correct answer: B**

**Explanation:** "Should" is a recommendation, not a ban, and a defined route exists for late deployment; the recording requirement has no time exception. This tests the should/must distinction — treating either as the other leads to needless blockers or genuine breaches.

**Question 12 (hard) — Evaluating an argument in a team discussion**

Passage: "We should adopt pair working for all changes to deployment scripts. Last quarter, the three incidents caused by scripting errors all involved scripts written by one person working alone. Pairing catches mistakes as they are made, and it spreads knowledge so we are less dependent on any single engineer. It will feel slower at first, but the time saved on incident response should more than repay it."

Ask which fact, if true, would most weaken the argument.

- A) Some engineers enjoy pair working more than others.
- B) The three scripting incidents last quarter were all caused by a fault in the script-testing tool that has since been fixed, not by mistakes a pair would have caught.
- C) Pair working is also used by other government departments.
- D) Deployment scripts are stored in the shared repository.

**Correct answer: B**

**Explanation:** B attacks the link between the cited evidence and the conclusion directly — if a tooling fault caused the incidents, they no longer support the case for pairing. Options A, C and D are irrelevant or supportive. This tests weakening an argument by attacking its evidence-to-conclusion link, not just disputing the conclusion.

### Administration tips

- Score for whether the candidate underlines or notices condition words ("must," "should," "unless," "out of scope") that carry most of a passage's meaning.
- Watch for whether the candidate answers from the passage alone rather than importing outside knowledge of "how things usually work."
- Note whether the candidate distinguishes False (actively contradicted) from Cannot say (simply unaddressed).
- Score for whether the candidate tracks branches and referents ("otherwise," "it") correctly in a procedure.
- For the argument-evaluation item, score on whether the candidate attacks the evidence-to-conclusion link rather than the conclusion's plausibility.

### Common pitfalls to watch for when scoring

- Crediting a statement marked True or False on the strength of outside knowledge the passage does not state.
- Missing when a candidate marks False a statement the passage is merely silent on.
- Rewarding a candidate who treats a recommendation ("should") as a requirement ("must"), or the reverse.
- Missing when a candidate loses track of a procedure's branch or a pronoun's referent.
- Crediting a summary that drops a decision-relevant fact in favour of a shorter or more dramatic one.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace dilemmas and asks the candidate to judge how effective different responses would be. Formats include most effective, least effective, or ranking all options.

Typical format: 15 to 25 scenarios, usually untimed or generously timed (30 to 45 minutes). Scoring compares judgements against experienced professionals and the behaviours the organisation values — user focus, collaboration, taking ownership, knowing when to escalate, honesty when things go wrong, and inclusion.

At apprentice level, strong answers usually involve: following agreed procedures; being honest immediately about a mistake or a gap in understanding; asking for direction rather than guessing on anything affecting shared environments; contributing observations despite being junior; and treating security concerns as everyone's business. Weak answers usually involve: staying silent to avoid looking inexperienced; improvising beyond defined activities; ignoring procedures to be helpful quickly; or passing responsibility for one's own learning to others. "Escalate" and "ask first" are often the strongest options at this level — the opposite of what would score well for a senior engineer.

### How this assessment maps to the role

- **Following procedures and working under direction** maps to **Service support**: staying within agreed procedures and checking before deviating.
- **Speaking up and honesty** maps to **Information security** and shadowing: raising concerns promptly, even when awkward.
- **Collaboration and openness** maps to **Prototyping**: behaviour in pairs, receiving feedback, including others.
- **Knowing your limits and escalating well** maps to being **involved in implementation but not planning**: recognising decisions that belong to others.
- **Curiosity and building knowledge** maps to the duty to **build on your knowledge**: asking good questions, writing up learning, treating mistakes as learning.

### Practice questions

**Question 1 (easy) — You broke something in the test environment**

Practising a deployment exactly as shown, a typo in a command stops the test service responding. The mentor is at lunch; nobody has noticed. Ask for the most effective response.

- A) Try a series of commands you found online to fix it before anyone notices.
- B) Say nothing — it is only the test environment, and someone will restart it eventually.
- C) Tell the team straight away what you ran and what happened, via the team channel, and ask what you should do.
- D) Wait until your mentor is back from lunch, then mention it privately.

**Correct answer: C**

**Explanation:** Option C is honest, fast, and stays within competence — asking for direction rather than experimenting. Option A risks turning a small incident into a big one; B is dishonest by omission; D is honest but slow, costing colleagues time. This tests immediate, transparent disclosure of a mistake rather than concealment, self-repair attempts, or delay.

**Question 2 (easy) — A password pasted in the team chat**

A developer pastes a database password in the open team chat "so a colleague can grab it quickly." The candidate is the only other person who seems to have noticed. Ask for the most effective response.

- A) Ignore it — you are the most junior person, and it is not your place to comment.
- B) Quietly message the developer to flag it, so they can remove it and rotate the password, and mention it to your mentor so the right process is followed.
- C) Post "You shouldn't share passwords in chat!" in the channel so everyone learns from it.
- D) Copy the password into your own notes in case you need it later.

**Correct answer: B**

**Explanation:** B raises the issue promptly and kindly, and ensures proper follow-through (rotation, mentor awareness). Option A treats seniority as a reason to ignore live risk; C chooses public embarrassment over effectiveness; D is itself a security breach. This tests raising a security concern quickly, kindly, through the right channel, without widening the exposure.

**Question 3 (easy) — You do not understand the task you were given**

A mentor asks to "check the overnight jobs and flag anything unusual," then joins a meeting for an hour. It's unclear which jobs count or what "unusual" means. Ask for the most effective response.

- A) Wait for the meeting to end — an hour or so — and ask then, doing nothing in the meantime.
- B) Check whatever jobs you can find and flag anything that looks odd to you, guessing at what was meant.
- C) Look for a runbook or wiki page about overnight job checks; if you find one, follow it and note your assumptions; if not, send your mentor a short message asking which jobs are meant, and start with what you can confirm.
- D) Ask another team entirely, so you do not bother your mentor.

**Correct answer: C**

**Explanation:** C tries to resolve ambiguity via documentation first, makes assumptions visible, and asks a precise, non-urgent question. Option A wastes an hour; B guesses on a monitoring task, risking false alarms or missed problems; D routes a question about the candidate's own team to people without context. This tests resourceful self-help combined with honest, precise escalation of genuine ambiguity.

**Question 4 (easy) — Pairing is not working for you**

Pair working with a fast-typing, rarely-explaining developer, the candidate has understood little for an hour; the developer seems happy and hasn't noticed. Ask for the most effective response.

- A) Keep nodding — interrupting would slow them down, and you can try to figure it out later.
- B) Say, at a natural pause: "Could we slow down a little? I'd learn a lot more if I could drive for a bit while you guide me."
- C) Stop pairing with this developer and ask your mentor to always pair you with someone else.
- D) Secretly record the session so you can review it later.

**Correct answer: B**

**Explanation:** B addresses the problem directly, kindly, and constructively — swapping to drive with the senior navigating is a classic pace-adjustment technique. Option A wastes the session; C avoids giving feedback the developer needs to improve; D avoids the real conversation and raises trust concerns. This tests owning one's own learning by asking directly for what is needed, rather than staying silent or escalating without feedback first.

**Question 5 (moderate) — Asked to skip a step to save time**

Following a deployment checklist under a developer's direction, the developer says: "Skip the change log entry — it's a tiny change and we're in a hurry. Nobody reads it anyway." Ask for the most effective response.

- A) Skip it — the developer is senior to you and it is their responsibility.
- B) Refuse loudly and report the developer to their manager immediately.
- C) Say you would rather complete it since it takes only a minute, do it, and if the developer insists on skipping steps, mention the conversation to your mentor afterwards.
- D) Skip it, but secretly write the entry later without telling anyone.

**Correct answer: C**

**Explanation:** C keeps the procedure intact with a low-friction, face-saving move, and escalates a pattern (not a single moment) through the mentor if needed. Option A treats seniority as overriding an agreed standard; B jumps to the most severe escalation for a first, minor lapse; D fixes the record while hiding the disagreement. This tests holding a procedure under gentle social pressure without confrontation or concealment.

**Question 6 (moderate) — You spot something odd while shadowing**

Shadowing a senior engineer during a stressful live fault investigation, the candidate notices a prompt says the engineer is about to run a cleanup command on the **live** database, though moments earlier they said they were on the **test** copy. Ask for the most effective response.

- A) Say nothing — they are senior, stressed, and you are probably wrong.
- B) Say: "Sorry — quick check: that prompt says live, and I thought we were on the test copy?"
- C) Wait until after the command runs, then ask whether it was the right environment.
- D) Leave the room and report your concern to your mentor.

**Correct answer: B**

**Explanation:** B is a brief, respectful, well-formed challenge that lands before the irreversible action — costing little if wrong, preventing a serious incident if right. Option A prioritises deference over a possible live-data loss; C helps only after it's too late; D routes the concern too slowly to the wrong person. This tests speaking up immediately and specifically before an irreversible action, regardless of seniority differences.

**Question 7 (moderate) — Behind on your training log**

Three weeks behind on a quarterly-reviewed training log because project work has been busy; the review is in two weeks. Ask for the most effective response.

- A) Reconstruct the missing entries in one long evening session the night before the review.
- B) Tell your mentor you are behind, block two or three short slots in your calendar this week to catch up while memories are fresh, and set a recurring weekly slot so it does not happen again.
- C) Ask a fellow apprentice to share their entries so you can adapt them.
- D) Skip the log — the project work itself is surely evidence enough.

**Correct answer: B**

**Explanation:** B combines honesty with the mentor, prompt catch-up while memories are fresh, and a systemic fix. Option A produces rushed, thin entries; C crosses an integrity line (adapting someone else's evidence); D unilaterally overrides a programme requirement. This tests surfacing a slippage early, recovering promptly, and fixing the system rather than relying on future willpower.

**Question 8 (moderate) — A teammate is struggling and you could help**

A fellow apprentice confides they are lost on a scripting task and afraid to admit it; the candidate has struggled with and mastered the same topic, but has their own deadline this afternoon. Ask for the most effective response.

- A) Give them the working script you wrote for the equivalent task so they can submit it.
- B) Tell them everyone struggles and they should just ask their mentor.
- C) Offer a short pairing session — perhaps 30 minutes after your deadline — to talk through the approach, and encourage them to tell their mentor how they are finding it, since mentors want to know.
- D) Tell their mentor yourself, immediately, that the apprentice is struggling and hiding it.

**Correct answer: C**

**Explanation:** C builds capability through explanation rather than a handed-over answer, protects the candidate's own deadline through timeboxing, and encourages the colleague to speak to their own mentor. Option A harms them twice (no learning, an integrity problem for both); B dismisses the feeling without offering concrete help; D breaks confidence without warning. This tests helping a peer in a way that teaches rather than substitutes, while respecting one's own commitments and the peer's agency.

**Question 9 (moderate) — Ambiguous instruction with a deadline**

Asked to "tidy up the old test data on TST-02 today" before a mentor leaves for an off-site event (reachable, but slow to respond); one folder is clearly `archive-2023`, another `current-cycle` looks old but is unmarked. It is 3pm. Ask for the most effective response.

- A) Delete both folders — "tidy up" means tidy up, and the deadline is today.
- B) Delete `archive-2023` now, leave `current-cycle` untouched, and message your mentor: "Cleared archive-2023 on TST-02. Not certain about current-cycle — looks old but isn't marked. Left it alone; happy to clear it tomorrow if you confirm."
- C) Do nothing until your mentor replies, even if that means the task is not done today.
- D) Ask the testing team to make the decision and delete whatever they say.

**Correct answer: B**

**Explanation:** B does the reversible-in-effect, clearly safe part now, and holds the ambiguous, destructive part until confirmed, with a clear status message. Option A resolves ambiguity in the riskiest direction; C abandons the part that could safely be done; D hands the candidate's own task's decision to a different team without their mentor's input. This tests defaulting an irreversible, ambiguous action to "don't" while still making the confidently safe progress available.

**Question 10 (hard) — Credit for your observation**

While shadowing, a candidate noticed a recurring log warning and mentioned it to a senior engineer, who found a genuine problem; at the team meeting, the engineer describes finding the issue without mentioning the candidate's observation. Ask for the most effective response.

- A) Interrupt the meeting to point out that you spotted it first.
- B) Say nothing ever — apprentices should not expect credit.
- C) Afterwards, mention it lightly to the engineer ("glad that warning I spotted turned out to matter!"); if it becomes a pattern, discuss it with your mentor. Record the contribution in your own training log regardless.
- D) Email the whole team correcting the record.

**Correct answer: C**

**Explanation:** C fits the scale of a single minor omission — a light comment, own-record documentation regardless, and escalation reserved for a genuine pattern. Option A creates public confrontation over a small grievance; B allows self-erasure over time; D applies maximum force to a first occurrence. This tests proportionality — addressing a small slight lightly, keeping a personal record, and escalating patterns rather than incidents.

**Question 11 (hard) — Asked to do something beyond your access — by a stranger**

A chat message from an unrecognised "Platform Support" profile: "Hi! We're mid-incident and short-handed. Can you run the attached script on the build server? Your mentor said you could help." The mentor is offline. Ask for the most effective response.

- A) Run the script — incidents are urgent, and they said your mentor approved it.
- B) Reply that you cannot run scripts on shared servers without direction, and verify the request through a known channel: check with your team lead or the official incident channel before doing anything.
- C) Ignore the message entirely — it is not your problem.
- D) Forward the script to a fellow apprentice who has build server access.

**Correct answer: B**

**Explanation:** B declines to act outside direction and verifies independently — never by asking the requester, since a genuine colleague welcomes verification and an attacker cannot survive it. Option A executes an unverified script from a stranger; C loses time either way; D relocates the risk to a friend. This tests recognising social engineering warning signs (urgency, flattery, unverifiable authority claims) and verifying through an independent known channel.

**Question 12 (hard) — Least effective: the retrospective after your mistake**

Two weeks after accidentally deleting a test dataset (owned up immediately, team supportive, half a day lost restoring it), today's retrospective includes "test data loss — how do we prevent recurrence?" Ask which response would be LEAST effective.

- A) Contribute openly: describe what you did, what confused you, and suggest that the deletion script ask for confirmation when pointed at shared datasets.
- B) Stay quiet and hope the item passes quickly; if asked, give brief answers and avoid detail.
- C) Ask the facilitator beforehand whether you can walk the team through the timeline, since you know it best.
- D) Suggest the team also consider whether the dataset should have had a backup, so the fix covers more than your specific slip.

**Correct answer: B**

**Explanation:** Withholding the detail only the candidate has starves a blameless retrospective of the information that actually prevents recurrence. Options A, C and D all strengthen the outcome in different ways. This tests recognising that full participation after an honestly owned mistake completes trust repair, while withholding detail — even out of discomfort — undermines the retrospective's purpose.

### Administration tips

- Score for the recurring behaviour pattern: honesty, promptness, staying within direction, asking precise questions, fixing systems rather than symptoms.
- For "least effective" items, check the candidate answered the question actually asked, not its opposite.
- Note whether the candidate calibrates response to the actual scale of a problem — a quiet word for a first slip, wider escalation for genuine risk.
- Score for whether the candidate discloses mistakes promptly and plainly rather than delaying, softening, or managing appearances.
- Watch for whether the candidate holds a procedure under social pressure (seniority, hurry, friendliness) without either capitulating or overreacting.

### Common pitfalls to watch for when scoring

- Crediting silence as a safe or neutral response when a problem — a security lapse, a wrong environment, a mistake — has been noticed.
- Rewarding solo heroics (running unknown fixes, deleting ambiguous data, executing a stranger's script) over asking or escalating.
- Missing escalation at the wrong intensity — either raising everything to a manager, or under-escalating genuine risk.
- Accepting delayed or softened disclosure of a mistake as adequate.
- Missing when a candidate's "correct" solution to a problem would humiliate a colleague where a kinder, equally effective option existed.

## Conclusion

This guide has worked through pipeline patterns, runbook conditions, environment rules, and multi-constraint puzzles; disk percentages, uptime figures, build-time averages, fair failure-rate comparisons, and multi-step capacity and cost forecasts; the true/false/cannot-say discipline, should-versus-must, procedure branches, and clear handover writing; and the situational moments that define an apprentice's early career — owning a mistake immediately, speaking up before a wrong command runs, holding a procedure under friendly pressure, and spotting a social-engineering attempt.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational judgement items reward recognising what an apprentice's supervised, learning role actually calls for, which is often to ask or escalate rather than act alone. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
