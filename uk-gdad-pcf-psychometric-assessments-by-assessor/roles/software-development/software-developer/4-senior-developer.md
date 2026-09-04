# Senior Developer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for senior developer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a senior developer, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — pull requests, build pipelines, monitoring dashboards, incident timelines, capacity forecasts, integration plans, and technical design reviews — and decisions genuinely made by someone delivering and integrating software to form a complete service, planning and leading development on sets of related stories, designing systems with security controls engineered in from the start, coordinating build activities across systems, and coaching more junior colleagues while operating the production services they build.

At this level, the role demands an unusual combination of capabilities: analytical precision to spot a subtle defect in a diff or a flaw in a systems design; numerical fluency to reason about error rates, capacity headroom, and delivery metrics; verbal precision to read standards and specifications exactly; and judgement to handle the human situations that come with seniority — a mentee who is struggling, a production incident during a busy release week, a disagreement with another discipline about what needs to be built.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for whether a candidate deduces only what a chain of rules or a set of facts actually guarantees, resisting a plausible-but-unproven conclusion — several items are deliberately built so a confident, experience-informed answer is the wrong one where the given facts do not actually support it. Situational judgement items at this level consistently reward a response that fixes both the immediate problem and the underlying system that produced it, escalates through the right channel at the right altitude, and treats coaching, credit and disagreement as opportunities to develop others rather than protect oneself; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles — code and configuration fragments, dependency graphs, deployment pipelines, log extracts, systems designs, and integration schedules — that ask a candidate to reason quickly and accurately about them.

Typical format: an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

For a senior developer, cognitive ability is particularly relevant because the role's core professional value is structured technical thinking at the level of a whole service — holding many moving parts in mind at once, reviewing others' systems designs, coordinating build activities across systems, and identifying, locating and fixing service faults under time pressure.

### How this assessment maps to the role

- **Pattern recognition** maps to **Programming and build (software engineering)**, **Modern development standards** and **Prototyping**: recognising recurring structures and noticing when something breaks the pattern.
- **Logical deduction** maps to **Systems design** and **Systems integration**: valid reasoning from constraints to their consequences.
- **Error checking** maps to **Programming and build**, **Information security** and **Service support**: spotting the inconsistency others walked past.
- **Prioritisation** maps to planning and leading development on related stories, **Availability and capacity management** and **Service support**: ranking impact-weighted urgency rapidly and defensibly.
- **Applied problem solving** maps to **Development process optimisation** and robustness, resilience and stability: decomposing a messy situation and testing hypotheses in a sensible order.

### Practice questions

**Question 1 (easy) — Pattern recognition in a naming convention**

Standard: environment configuration keys follow `SERVICE_ENVIRONMENT_SETTING`, upper case, single underscores — e.g. `PAYMENTS_PROD_TIMEOUT`. Keys: (1) `PAYMENTS_STAGING_RETRIES`; (2) `PAYMENTS_PROD_MAX_CONNECTIONS`; (3) `STAGING_PAYMENTS_TIMEOUT`; (4) `PAYMENTS_DEV_LOGLEVEL`. Ask which key most clearly breaks the pattern.

- A) Key 1
- B) Key 2
- C) Key 3
- D) Key 4

**Correct answer: C**

**Explanation:** Key 3 inverts the first two elements — `STAGING` (an environment) appears where the service name belongs. This tests checking against the stated order precisely rather than a superficial resemblance — key 2's multi-word setting is the least-worst reading of an otherwise-compliant key, while key 3's inversion is unambiguous and would make a config store unsearchable.

**Question 2 (easy) — Logical deduction from a deployment rule**

Policy: "A change may be deployed to production only if the full test suite passes and the change has been reviewed by at least one other developer." A colleague says: "My change was deployed to production this morning." Ask which conclusion must be true.

- A) The full test suite passed and the change was reviewed by at least one other developer.
- B) The change was reviewed by you.
- C) The change contains no defects.
- D) The change was deployed using the automated pipeline.

**Correct answer: A**

**Explanation:** The policy makes both conditions necessary for deployment. This tests concluding only what the stated rule guarantees — B adds a detail the rule does not require, C confuses "tests passed" with "no defects" (a passing suite only shows the absence of detected failures), and D introduces an unmentioned mechanism.

**Question 3 (easy) — Error checking a log extract**

Log format: `timestamp | endpoint | status | duration_ms`. Extract: 09:14:01 200/143; 09:14:02 200/151; 09:14:03 500/30012; 09:14:04 200/139; 09:14:05 200/30. The upstream dependency has a 30-second timeout. Ask which line most strongly suggests a dependency timeout.

- A) Line 2
- B) Line 3
- C) Line 4
- D) Line 5

**Correct answer: B**

**Explanation:** Line 3 pairs a 500 status with a duration almost exactly matching the 30-second timeout. This tests reading durations against known timeout values to fingerprint a failure mode — a fast 500 (which does not appear here) would suggest an application-level failure instead, halving the search space before any code is opened.

**Question 4 (moderate) — Deduction from integration constraints**

Defining an integration build for three components: case API (A), document store adapter (D), notification service (N). Constraints: (i) D cannot integrate before A, since D consumes A's contract; (ii) N must integrate last; (iii) each integration takes one full day, one component per day; (iv) A's contract freezes end of Monday, and no component may integrate before its dependencies' contracts freeze. Work begins Tuesday. Ask for the earliest day N's integration can complete.

- A) Wednesday
- B) Thursday
- C) Friday
- D) Tuesday

**Correct answer: B**

**Explanation:** A integrates Tuesday (contract frozen Monday); D follows Wednesday; N, last of three, runs Thursday. This tests deriving the tightest feasible sequence directly from the dependency rules, rather than padding with an unrequired buffer day (the trap in Friday) or forgetting D must precede N (the trap in Wednesday).

**Question 5 (moderate) — Pattern recognition in test failures**

A CI pipeline ran the same suite ten times against the same commit; `test_upload_large_file` failed on runs 2, 5 and 9, uploading a 50MB file to a shared staging store with a 20-second completion assertion. Ask for the explanation that best fits the pattern.

- A) The code under test has a logic error that always produces the wrong result.
- B) The test is flaky, most likely due to variable staging environment performance against a fixed time limit.
- C) The test only fails when the code is broken, so the code was broken on runs 2, 5 and 9.
- D) The object store rejects files over 50 MB.

**Correct answer: B**

**Explanation:** A deterministic logic error or a hard size limit would fail every run of the identical commit; the code cannot have changed between runs, ruling out C. This tests recognising the signature of environmental flakiness (intermittent failures against a fixed timeout in a shared environment) — the question "what varies between the passing and failing cases?" isolates the environment as the cause since nothing in the code varied.

**Question 6 (moderate) — Prioritisation across competing demands**

At 09:30 Tuesday: (1) a production alert ten minutes old — error rates on a citizen-facing service risen from 0.1% to 4% and climbing; (2) a mentee's pull request, waiting for review since yesterday, blocking them; (3) sprint planning at 11:00, with story breakdown not yet done; (4) a security patch due by end of week. Ask which sequencing is most defensible.

- A) 2, 1, 3, 4 — unblock people first, then look at the alert
- B) 1, 2, 3, 4 — production incident first, then unblock your mentee, then prepare planning, then schedule the patch
- C) 3, 1, 2, 4 — planning has the nearest fixed start time
- D) 1, 4, 2, 3 — security always comes immediately after incidents

**Correct answer: B**

**Explanation:** The climbing error rate on a citizen-facing service is both urgent and high impact, so it leads; the blocked mentee is next (a person-hour leak and a coaching moment); planning has slack to compress; the patch has days of slack. This tests ranking by impact-weighted urgency rather than a meeting's fixed start time (C) or a fixed rule of thumb (D) that ignores the actual slack each item carries.

**Question 7 (moderate) — Error checking a systems design review**

A junior colleague's document upload design states: (i) files are scanned for malware after being stored in the public-access bucket; (ii) uploads are limited to 10MB, enforced in the browser's JavaScript; (iii) the upload endpoint requires an authenticated session; (iv) antivirus signatures update daily. Ask which statement pair reveals the most serious security flaw.

- A) (i) and (ii) — unscanned files are publicly accessible, and the size limit can be bypassed by any client that skips the browser code
- B) (iii) and (iv) — authentication and signature updates conflict
- C) (ii) and (iv) — the size limit makes daily updates pointless
- D) (i) and (iii) — scanning after storage is fine because the session is authenticated

**Correct answer: A**

**Explanation:** Storing before scanning creates a window where malware is publicly reachable, and a client-only size limit is trivially bypassed by any direct API call. This tests identifying two independent flaws that compound — statements (iii) and (iv) are individually reasonable and non-conflicting, and D's reasoning (authentication substituting for content sanitisation) is exactly the false comfort a reviewer must reject.

**Question 8 (moderate) — Deduction about fault localisation**

Evidence: (i) requests via the load balancer to instance 1 fail; (ii) requests via the load balancer to instance 2 succeed; (iii) requests sent directly to instance 1, bypassing the load balancer, succeed; (iv) instances 1 and 2 run identical code and configuration. Ask for the most logical location of the fault.

- A) The application code
- B) Instance 1's server hardware
- C) The load balancer's routing or health-check configuration for instance 1
- D) Instance 2

**Correct answer: C**

**Explanation:** Identical code plus instance 1 succeeding when reached directly rules out the application code and instance 1's hardware; instance 2 succeeding in all paths rules it out too. This tests isolating a fault by differencing — varying one element of the path at a time — leaving only the load balancer's per-instance configuration as consistent with every clue.

**Question 9 (hard) — Multi-constraint scheduling of related stories**

Planning four stories across a five-day week, one completing per day: Schema migration (S), API change (P), Frontend change (F), Load test (L). Constraints: (i) S before P (P reads the new schema); (ii) P before F (F calls the new API); (iii) L runs the day immediately after F completes; (iv) the DBA supports S only on Monday or Thursday. Ask on which day the load test must run for the earliest possible finish.

- A) Wednesday
- B) Thursday
- C) Friday
- D) The plan cannot fit in one week

**Correct answer: B**

**Explanation:** Choosing the DBA's earliest slot (Monday) for S gives P on Tuesday, F on Wednesday, and L (the day after F) on Thursday — the earliest feasible finish. This tests identifying the scarce resource (the DBA) that anchors the whole sequence, since choosing Thursday for S instead would push the rest of the plan outside the week.

**Question 10 (hard) — Applied problem solving on capacity**

4 application instances, each handling at most 120 rps before KPI breach. Current peak 380 rps, spread evenly. A campaign is expected to add 40% to peak traffic. Instances can only be added in pairs. Ask how many instances must be running to keep per-instance load at or below 120 rps during the campaign.

- A) 4
- B) 5
- C) 6
- D) 8

**Correct answer: C**

**Explanation:** Campaign peak = 380×1.4=532 rps; 532÷120≈4.43, so at least 5 instances are needed arithmetically — but instances must be added in pairs, so the next valid step from 4 is 6, giving 532÷6≈89 rps per instance. This tests applying the arithmetic minimum and then the operational constraint (pairing) that rounds it, rather than stopping at the bare arithmetic answer (B) or over-provisioning without reason (D).

**Question 11 (hard) — Deduction from monitoring rules**

Rules: (i) CPU above 80% for 5 minutes fires a warning; (ii) a warning active plus memory above 90% fires a critical alert; (iii) a critical alert always pages the on-call engineer; (iv) no page was sent in the last hour. Ask which conclusion must be true about the last hour.

- A) CPU never exceeded 80%.
- B) Memory never exceeded 90%.
- C) At no time was a warning active while memory exceeded 90%.
- D) The service was healthy.

**Correct answer: C**

**Explanation:** No page means no critical alert (rule iii); no critical alert means the trigger in rule (ii) never occurred — a warning active while memory exceeded 90%. This tests reasoning backwards through a rule chain to the exact conjunction it rules out, rather than the stronger, unproven claims in A and B (CPU or memory alone could still have spiked, just not both conditions simultaneously) or the informal, ungrounded judgement in D.

**Question 12 (hard) — Error checking an intermittent defect report**

A "save draft" feature occasionally loses data. Facts: (i) losses occur only for users with two browser tabs open on the same draft; (ii) the save endpoint writes the full draft, overwriting the stored version; (iii) each tab autosaves every 60 seconds, timed from when that tab loaded; (iv) the server processes saves strictly in arrival order. Ask for the mechanism that best explains the data loss.

- A) The server sometimes processes saves out of order, corrupting drafts.
- B) A stale tab's autosave overwrites the newer content saved by the other tab — a lost-update race between tabs.
- C) The 60-second timer is too infrequent, so unsaved work is lost on browser crashes.
- D) The database intermittently rejects large drafts.

**Correct answer: B**

**Explanation:** A contradicts fact (iv); C would affect single-tab users too, contradicting fact (i); D has no link to the two-tab condition. This tests testing every candidate mechanism against every given fact and selecting the one that uses the distinguishing fact (i) — the two independently timed autosaves overwriting the full draft is a classic lost-update race.

### Administration tips

- Score for whether the candidate concludes only what a stated rule or chain of facts actually guarantees, resisting a plausible-but-unproven claim.
- Note whether the candidate isolates a fault or a cause by systematically testing each candidate against every given fact, rather than the first plausible one.
- Watch for whether an operational or granularity constraint (pairing, one-per-day, a scarce resource's availability) is applied on top of the bare arithmetic answer.
- Score for whether prioritisation weighs impact-weighted urgency across all items rather than a single dimension (a fixed meeting time, a rule of thumb).
- Note whether a compound rule chain is reasoned through backwards to the exact conjunction it rules out, not a stronger unproven claim.

### Common pitfalls to watch for when scoring

- Crediting a conclusion that pattern-matches to a familiar real-world diagnosis rather than following the facts given in the scenario.
- Missing when a candidate treats a design's individually reasonable statements as conflicting with each other while missing an actual compounding flaw.
- Rewarding an arithmetic answer that ignores a stated operational constraint (pairing, rounding, availability).
- Accepting a deduction stronger than what a rule chain's contrapositive actually establishes.
- Missing when a candidate fails to test a hypothesis against every given fact before selecting it.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately a candidate interprets, manipulates and draws sound conclusions from numerical information of the kind this role genuinely produces and consumes — error rates and availability percentages, request throughput and capacity headroom, build durations and deployment frequencies, story estimates and velocity, defect counts and trends.

Typical format: an online, timed test of 20 to 35 minutes with 15 to 25 questions, each presenting a small data set — a monitoring table, a sprint burndown, a cost breakdown — with a calculator usually permitted.

For a senior developer, numbers are how the system communicates and how the role communicates with the business: KPIs, robustness improvements, delivery plans and 2am dashboard reads all depend on choosing the right operation, the right denominator, and the right level of scepticism.

### How this assessment maps to the role

- **Percentages, rates, and availability arithmetic** map to **Availability and capacity management**: converting between counts and rates without slipping a denominator.
- **Ratios and proportional scaling** map to **Systems design** and **Systems integration**: sizing components and efficient use of resources.
- **Averages, trends, and projections** map to planning development on related stories and **Development process optimisation**: whether a trend is real.
- **Reading tables and charts under pressure** maps to **Service support**: extracting the number that matters from twelve that do not.
- **Cost and resource arithmetic** maps to **Information security** and robustness work, and **User focus**: quantifying a mitigation's cost against expected loss, or a defect's impact on real users.

### Practice questions

**Question 1 (easy) — Error rate as a percentage**

250,000 requests, 1,250 errors. Ask for the error rate.

- A) 0.05%
- B) 0.5%
- C) 5%
- D) 1.25%

**Correct answer: B**

**Explanation:** 1,250÷250,000=0.5%. This tests basic percentage calculation with a sanity check (1% of 250,000 is 2,500, and 1,250 is half that).

**Question 2 (easy) — Availability from downtime**

99.5% monthly availability KPI; 30-day month (720 hours); 5 hours downtime. Ask whether the KPI was met and the actual availability.

- A) Yes — availability was 99.31%
- B) No — availability was 99.31%
- C) Yes — availability was 99.5%
- D) No — availability was 98.6%

**Correct answer: B**

**Explanation:** 715÷720=99.31%, below the 99.5% KPI. This tests computing availability correctly and drawing the right conclusion, checkable via the downtime budget (0.5%×720=3.6 hours, and 5 exceeds it).

**Question 3 (easy) — Sprint velocity average**

Four sprints: 34, 28, 38, 32 story points. Ask what velocity to plan with using the four-sprint average.

- A) 30
- B) 32
- C) 33
- D) 34

**Correct answer: C**

**Explanation:** Sum 132÷4=33. This tests basic averaging over equal periods, distinguishing the mean from tempting shortcuts like the median-looking middle value (B) or the first figure (D).

**Question 4 (moderate) — Percentage change in build duration**

Build time falls from 24 to 18 minutes; 40 builds run per working day. Ask for the percentage reduction and roughly how much build time is saved per day.

- A) 25% reduction; 240 minutes saved per day
- B) 33% reduction; 240 minutes saved per day
- C) 25% reduction; 180 minutes saved per day
- D) 6% reduction; 40 minutes saved per day

**Correct answer: A**

**Explanation:** (24−18)÷24=25%; 6 minutes×40 builds=240 minutes/day. This tests dividing by the original value (the trap in B divides by the new value, 33%) and computing the daily saving correctly.

**Question 5 (moderate) — Capacity headroom ratio**

Peak 450mps against a 600mps tested maximum; a new consumer adds a forecast 90mps at peak. Ask for the utilisation of tested maximum after integration.

- A) 75%
- B) 82%
- C) 90%
- D) 96%

**Correct answer: C**

**Explanation:** (450+90)÷600=90%. This tests computing the new load correctly, and in a strong answer, recognising 90% utilisation leaves only 10% headroom, likely inadequate for bursty traffic — a follow-on judgement the arithmetic sets up.

**Question 6 (moderate) — Weighted average response time**

`/search`: 300,000 requests, mean 200ms. `/submit`: 100,000 requests, mean 600ms. Ask for the overall mean response time.

- A) 400 ms
- B) 300 ms
- C) 350 ms
- D) 250 ms

**Correct answer: B**

**Explanation:** (300,000×200+100,000×600)÷400,000=300ms. This tests weighting by volume rather than averaging the two means unweighted (400ms, the trap in A) — checkable since three-quarters of traffic ran at 200ms, pulling the answer a quarter of the way toward 600ms.

**Question 7 (moderate) — Defect trend interpretation**

Defects per month: Jan 12, Feb 9, Mar 15, Apr 6, May 8, Jun 4. A stakeholder claims "defects fell every month." Ask for the most accurate correction.

- A) Defects rose overall — June is higher than January.
- B) The claim is correct.
- C) Defects fell overall — June is a third of January — but not monotonically: March rose against February, and May rose against April.
- D) No trend can ever be inferred from six data points.

**Correct answer: C**

**Explanation:** Checking each consecutive pair shows two rises (Feb→Mar, Apr→May), falsifying "every month," while the overall movement (12→4, a 67% reduction) is clearly downward. This tests correcting an overclaim precisely — neither endorsing it (B) nor overcorrecting into unwarranted scepticism about any trend at all (D).

**Question 8 (moderate) — Storage growth projection**

Database at 1.2TB, growing 75GB/month, on a 2.0TB volume; standard is to expand before reaching 90% utilisation. Ask how many months until expansion must be completed.

- A) 6 months
- B) 8 months
- C) 10 months
- D) 12 months

**Correct answer: B**

**Explanation:** 90% of 2,000GB=1,800GB; headroom to threshold=1,800−1,200=600GB; 600÷75=8 months. This tests projecting to the stated action threshold rather than to full capacity (the trap in C, which computes time to 100%) — capacity planning always projects to the threshold that allows lead time for expansion.

**Question 9 (hard) — Comparing failure rates fairly**

Pipeline Alpha: 1,600 deployments, 48 failures. Pipeline Beta: 250 deployments, 10 failures. A colleague argues Beta is more reliable "because it failed only 10 times against Alpha's 48." Ask for the failure rates and whether the reasoning is sound.

- A) Alpha 3%, Beta 4% — the reasoning is unsound because it compares counts, not rates; Alpha is more reliable per deployment
- B) Alpha 3%, Beta 4% — the reasoning is sound because fewer failures is always better
- C) Alpha 4%, Beta 3% — the reasoning is sound
- D) Alpha 0.3%, Beta 0.4% — the reasoning is unsound

**Correct answer: A**

**Explanation:** Alpha 48÷1,600=3%; Beta 10÷250=4% — Beta fails more often per deployment despite fewer absolute failures. This tests recognising the base-rate error of comparing raw counts across different denominators, with a sanity check ruling out D's misplaced decimal.

**Question 10 (hard) — Percentile versus mean latency**

Ten response times (ms): 90, 95, 100, 100, 105, 110, 110, 115, 120, 1,955. KPI: "95th percentile under 500ms." A teammate reports "mean response time 290ms — we pass." Ask for the mean and whether the service passes the KPI.

- A) Mean 290 ms; passes, because 290 < 500
- B) Mean 290 ms; fails, because the 95th percentile is driven by the 1,955 ms outlier, which exceeds 500 ms
- C) Mean 105 ms; passes comfortably
- D) Mean 290 ms; cannot be determined

**Correct answer: B**

**Explanation:** The mean (2,900÷10=290ms) is computed correctly but is not the KPI's stated statistic; with the outlier included, the 95th percentile is well above 500ms. This tests computing the exact statistic a KPI names rather than substituting a more familiar one — a demonstration of why tail-sensitive KPIs exist, since the mean splits the difference into a figure no actual user experienced.

**Question 11 (hard) — Cost of resilience options**

A component causes £4,000 productivity loss per outage, 6 outages/year expected. Option 1: active-passive failover, £800/month, prevents 80% of impact. Option 2: re-architecture, one-off £18,000, prevents 95% of impact, no ongoing cost. Ask which option has the better net saving over a single year.

- A) Option 1, saving £9,600 net
- B) Option 2, saving £4,800 net
- C) Option 1, saving £19,200 net
- D) Both save the same

**Correct answer: A**

**Explanation:** Annual impact £24,000; Option 1 prevents £19,200, costs £9,600/year, nets £9,600; Option 2 prevents £22,800, costs £18,000 once, nets £4,800. This tests computing net savings (gross benefit minus cost) fully, ruling out the trap in C which reports Option 1's gross benefit while forgetting its running cost — and in a strong answer, noting the ranking flips in year two once Option 2's one-off cost is already paid.

**Question 12 (hard) — Reading a table of integration test results**

API↔Database: 240 run, 228 passed, 12 failed. API↔Frontend: 180/171/9. API↔Notifications: 80/68/12. Ask which system pair has the highest failure rate, and the overall failure rate across all tests.

- A) API ↔ Notifications at 15%; overall 6.6%
- B) API ↔ Database at 5%; overall 6.6%
- C) API ↔ Notifications at 15%; overall 11.7%
- D) API ↔ Frontend at 5%; overall 5%

**Correct answer: A**

**Explanation:** Notifications: 12÷80=15%, the highest rate despite matching Database's absolute failure count (12) — a base-rate lesson. Overall: (12+9+12)÷(240+180+80)=33÷500=6.6%. This tests pooling counts to compute an overall rate rather than averaging the three individual rates unweighted (the trap in C).

### Administration tips

- Score for whether the candidate re-derives an aggregate or weighted average from underlying counts rather than averaging averages or rates unweighted.
- Note whether a percentage change is measured against the original value consistently.
- Watch for whether the candidate reads the exact statistic a KPI or question names (mean vs percentile, rate vs count, time-to-threshold vs time-to-full).
- Score for whether cost or resilience comparisons account for both the gross benefit and the running or one-off cost, not one alone.
- Note whether the candidate corrects an overclaim precisely (identifying exactly what is and is not true) rather than either endorsing it or dismissing all possible conclusions.

### Common pitfalls to watch for when scoring

- Crediting an average of averages or an average of rates across groups of unequal size.
- Missing a percentage change computed against the new value instead of the original.
- Rewarding a mean cited where a stated percentile is the actual KPI metric.
- Accepting a cost comparison that reports gross benefit without netting off the running or one-off cost.
- Missing when a candidate compares raw counts across populations of different sizes rather than converting to rates.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate extracts meaning from written material of the kind this role actually handles — technical standards, service manuals, security policies, incident reports, API documentation, supplier emails, and specification documents — judging True, False or Cannot Say strictly from the passage, with the candidate's professional knowledge set aside as the specific hazard.

Typical format: an online, timed test of 15 to 25 minutes with 20 to 30 questions grouped under short passages, alongside comprehension, inference, and clear-writing items.

For a senior developer, precise reading and writing underpin the role: specifications are contracts a test-driven approach turns directly into assertions, standards use modal language (must, should, may) that determines what is mandatory versus recommended, and incident reports and documentation must be accurate under scrutiny.

### How this assessment maps to the role

- **Comprehension of technical passages** maps to **Programming and build (software engineering)**: extracting exactly what a specification commits to.
- **True/false/cannot-say discipline** maps to **Systems design** and design review: separating what a document establishes from what its author assumes.
- **Inference and modal-verb precision** maps to **Modern development standards** and **Information security**: reading must/should/may/unless exactly.
- **Comprehension of user-facing and cross-disciplinary language** maps to **User focus**: reading research findings without projecting personal preference onto them.
- **Clear-writing judgement** maps to documentation duties and open-by-default, reusable code, and **Service support**: choosing the clearest sentence for an operational reader.

### Practice questions

**Passage 1 (for Questions 1–3).** "All new services must expose health-check endpoints. Health-check endpoints should not require authentication, unless the endpoint reveals internal configuration details, in which case authentication is mandatory. Teams may additionally expose a detailed diagnostics endpoint; where provided, it must be authenticated. Existing services are expected to adopt this standard at their next major release."

**Question 1 (easy)**

Statement: "Under the standard, a new service without any health-check endpoint is non-compliant."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** "Must expose" with no exception attached makes this direct. This tests reading an unqualified "must" clause as fully mandatory.

**Question 2 (moderate)**

Statement: "Under the standard, an unauthenticated health-check endpoint that reveals internal configuration details is non-compliant."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The "unless... mandatory" clause escalates the recommendation into a requirement precisely when configuration details are revealed. This tests tracking a conditional that flips a "should" into a "must" in a specific case, resisting the trap of reading "should not require authentication" as a blanket recommendation.

**Question 3 (moderate)**

Statement: "An existing service that has not adopted the standard is currently in breach of it."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Existing services are "expected to adopt this standard at their next major release" — a different, deferred obligation. This tests reading a transition clause correctly, since non-adoption before that trigger point is anticipated by the standard itself, not a breach.

**Passage 2 (for Questions 4–6).** "At 14:02 the payment provider began returning intermittent HTTP 503 responses. Our retry logic resubmitted failed payments up to three times. Because the idempotency key was regenerated on each retry rather than reused, some citizens were charged more than once. Duplicate charges affected 211 transactions before we disabled retries at 14:41. The provider restored normal service at 15:10. All duplicate charges were refunded within 24 hours."

**Question 4 (easy) — Comprehension**

Ask what caused citizens to be charged more than once.

- A) The payment provider's 503 responses charged citizens directly.
- B) Retries were sent with a regenerated idempotency key instead of a reused one, so resubmissions were processed as new payments.
- C) Retries were disabled too early.
- D) The provider restored service too slowly.

**Correct answer: B**

**Explanation:** The passage's explicit causal sentence attributes duplication to key regeneration, not to the 503 responses themselves. This tests finding the passage's own stated cause rather than a plausible neighbouring explanation.

**Question 5 (moderate)**

Statement: "The duplicate-charge defect was fully resolved by 15:10, when the provider restored normal service."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The passage confirms the outage ended, retries were disabled earlier, and refunds completed within 24 hours — but never states the underlying key-regeneration defect was actually fixed in code. This tests keeping separate timelines (outage, mitigation, remediation) apart rather than merging them into one comforting resolution.

**Question 6 (moderate) — Inference**

Ask which conclusion can be validly inferred from the passage.

- A) The retry logic had never been tested.
- B) At most 211 transactions were retried.
- C) Correct reuse of idempotency keys would have made retries safe from duplicate charging.
- D) The provider breached its service-level agreement.

**Correct answer: C**

**Explanation:** The passage's own causal contrast ("regenerated... rather than reused") identifies reuse as the safe behaviour, which is exactly the purpose idempotency keys serve. This tests drawing only the conclusion the text's own reasoning licenses — B inverts the arithmetic (more than 211 could have been retried without duplication), and D imports an unmentioned SLA.

**Passage 3 (for Questions 7–9).** "Following the upgrade, some API consumers may experience elevated latency for up to 48 hours while caches warm. We recommend consumers implement exponential backoff. Consumers who have already implemented backoff in line with our integration guide need take no further action. Please note that requests exceeding 10 per second per client will be throttled during this period; this limit may be revised without notice."

**Question 7 (easy) — Comprehension of obligations**

A service already implements backoff per the integration guide. Ask what the email requires now.

- A) Implement exponential backoff again.
- B) Nothing further is required by the email.
- C) Reduce all traffic below 10 requests per second permanently.
- D) Contact the supplier to confirm the upgrade.

**Correct answer: B**

**Explanation:** The email states consumers matching this description "need take no further action." This tests recognising a matched exemption, and resisting the overreach in C that treats a temporary, period-bound throttling note as a permanent obligation.

**Question 8 (moderate)**

Statement: "The 10 requests per second throttling limit will remain in force for exactly 48 hours."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** Elevated latency is "up to 48 hours" (a maximum, not exact), and the limit itself "may be revised without notice" — two hedges that unsettle any fixed duration. This tests treating "up to" and "may be revised" as genuinely load-bearing hedges rather than collapsing them into a firm promise.

**Question 9 (hard) — Clear-writing judgement**

Summarising the email for on-call engineers' operational notes. Ask which version is best.

- A) "Supplier upgrade may cause elevated latency for up to 48 hours from [date/time]; clients exceeding 10 rps may be throttled during this window (limit subject to change). Our backoff already complies; no action needed unless latency persists beyond the window."
- B) "The supplier has upgraded and things might be slow for a bit. Should be fine."
- C) "URGENT: supplier outage in progress. All traffic will be throttled at 10 rps forever. Implement backoff immediately."
- D) "Following the recent supplier-side infrastructure upgrade activity, it is possible that certain API-consuming components could potentially experience some degree of elevated response-time characteristics for a period not exceeding approximately 48 hours."

**Correct answer: A**

**Explanation:** A delivers what an on-call engineer needs (what changed, what to observe, what to do, when to worry), preserving the two crucial hedges. This tests judging clarity by completeness and accuracy first — C is actively wrong three times, and D buries the same content in hedging noise that informs nobody despite sounding official.

**Passage 4 (for Questions 10–12).** "In usability testing, 7 of 9 participants failed to find the 'save and return later' feature. Several described feeling anxious about losing entered data. Participants who found the feature praised it. Two participants asked for the ability to export their application as a PDF. The researcher notes that PDF export was requested by participants who had already successfully saved, and recommends prioritising discoverability of save-and-return over new export functionality."

**Question 10 (easy) — Comprehension**

Ask what the researcher recommends prioritising.

- A) Building PDF export, because users requested it explicitly.
- B) Making the save-and-return feature easier to find.
- C) Removing the save-and-return feature.
- D) Increasing the sample size before acting.

**Correct answer: B**

**Explanation:** The recommendation is stated verbatim. This tests distinguishing a request present in the passage (A, a real but subordinate finding) from the researcher's actual, explicitly ranked recommendation — the everyday substance of distinguishing user needs from desires.

**Question 11 (moderate)**

Statement: "A majority of participants who found the save-and-return feature also requested PDF export."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** Two participants found the feature, and two requested export "who had already successfully saved" — plausibly, but not confirmedly, the same two people. This tests resisting a near-entailed but never actually stated identity between two groups.

**Question 12 (hard) — Inference and evaluating evidence**

A product manager says: "Only 2 of 9 wanted PDF export — 78% of users don't want it, so we should never build it." Ask for the most accurate assessment of this reasoning.

- A) Correct — the maths and the conclusion both hold.
- B) Flawed — absence of a request is not evidence of absence of need; the sample is small; and the researcher ranked priorities rather than ruling export out permanently.
- C) Flawed only because 2 of 9 is 22%, not 78%.
- D) Correct in conclusion but the passage forbids building export.

**Correct answer: B**

**Explanation:** The arithmetic is roughly defensible, but "did not request" is not "don't want", a discoverability-testing sample is not an attitude survey, and the researcher's language ("over," a priority ordering) never rules export out permanently. This tests catching multiple independent flaws in a stakeholder's plausible-sounding reasoning, rather than fixing only the surface arithmetic error (C).

### Administration tips

- Score for whether the candidate reads modal verbs (must, should, may) and their conditional escalations or exceptions precisely.
- Note whether the candidate keeps separate timelines or threads (an outage, a mitigation, a remediation) apart rather than merging them into a single conclusion.
- Watch for whether a hedge ("up to," "may be revised," "several") is respected as genuinely limiting, rather than read as a firm figure.
- Score inference items on whether the drawn conclusion is licensed by the passage's own stated reasoning, not merely plausible or adjacent.
- For clear-writing items, score on completeness and accuracy for the stated audience, not formality or length.

### Common pitfalls to watch for when scoring

- Crediting a statement judged True or False on the strength of professional knowledge rather than the passage.
- Missing when a candidate treats "nearly entailed" as entailed — accepting an identity or fact the passage never actually states.
- Rewarding an answer that collapses a hedge ("up to," "may") into an exact or firm claim.
- Accepting an over-correction into blanket scepticism (marking Cannot Say when the passage does establish something).
- Missing when a candidate confuses a view or request quoted within a passage for the passage's own conclusion or recommendation.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace dilemmas and asks the candidate to judge the effectiveness of possible responses, scored against a key built from the judgements of experienced practitioners and the professional behaviours UK government digital organisations value: user focus, collaboration, ownership, appropriate escalation, inclusion, and openness.

Typical format: an online test of 20 to 40 minutes with 8 to 15 scenarios, asking for the most effective response, the most and least effective, a full ranking, or independent ratings.

For a senior developer, situational judgement is arguably the most role-relevant assessment: seniority is defined at least as much by judgement and behaviour as by technical skill — coaching mentees, disagreeing constructively with other disciplines, operating production services under pressure, and balancing delivery against quality, security and team wellbeing.

### How this assessment maps to the role

- **Incident and pressure scenarios** map to **Service support** and **Availability and capacity management**: fixing faults while communicating honestly and escalating at the right threshold.
- **Mentoring and feedback scenarios** map to coaching, mentoring and teaching the whole system: growing people rather than merely fixing their output.
- **Cross-disciplinary disagreement scenarios** map to **User focus**: distinguishing user needs from desires and disagreeing constructively.
- **Quality-versus-deadline scenarios** map to **Modern development standards**, **Programming and build** and **Information security**: holding standards through explanation, and knowing when a transparent compromise is genuinely right.
- **Design review and technical influence scenarios** map to **Systems design** and **Systems integration**: candid review without humiliation, and coordinating without authority.
- **Process and improvement scenarios** map to **Development process optimisation** and **Prototyping**: raising improvements through the team and testing options with others.

### Practice questions

**Question 1 (easy) — Production incident during sprint planning**

In sprint planning, a monitoring alert shows a citizen-facing service returning errors for roughly 5% of requests and climbing; the candidate is the most experienced engineer on the service. Ask for the most effective immediate response.

- A) Stay in planning — the on-call process exists for exactly this, and interrupting planning sets a bad precedent.
- B) Excuse yourself, confirm the on-call engineer is responding, join the incident channel, and support the response; ask the team to continue planning without you.
- C) Silently leave the meeting and start debugging alone, since you know the system best.
- D) Announce that planning is cancelled and everyone should join the incident call.

**Correct answer: B**

**Explanation:** B prioritises citizen impact while respecting the team's operating model — confirming on-call is engaged rather than displacing them, and letting planning continue. This tests proportionate response — A hides behind process while help is available, C sabotages coordination by working invisibly, and D over-escalates a two-person problem into a six-person one.

**Question 2 (easy) — A mentee's struggling pull request**

A mentee's third pull request for the same story still contains the same design problem their previous two attempts missed; they seem increasingly discouraged. Ask for the most effective response.

- A) Approve it — it works, more or less, and their confidence matters more than design purity.
- B) Rewrite the code yourself tonight and push it to their branch so the story can close.
- C) Book a half-hour pairing session, work through the design problem together at the whiteboard or in the editor, and let them make the changes themselves.
- D) Write a longer, more detailed review comment explaining the problem a third time.

**Correct answer: C**

**Explanation:** Three failed written attempts is strong evidence the medium, not the mentee, is the problem — pairing changes the channel, discovers the actual misunderstanding, and leaves the fix in their hands. This tests changing approach after repetition has failed, rather than intensifying the same failed strategy (D) or abandoning the standard or the mentee's ownership (A, B).

**Question 3 (easy) — Credit in a show-and-tell**

A delivery manager publicly credits the candidate for an integration approach substantially designed by a colleague on another team during a joint spike; that colleague's team is present. Ask for the most effective response.

- A) Accept the praise and thank them — correcting details in public is awkward, and your team did do the work of implementing it.
- B) Briefly and warmly correct the record in the moment: name the colleague's contribution, then continue.
- C) Say nothing publicly but email the colleague afterwards to apologise.
- D) Interrupt to insist you deserve no credit at all and the other team did everything.

**Correct answer: B**

**Explanation:** A one-sentence public correction costs seconds and is remembered for years, protecting cross-team goodwill that ongoing systems integration work depends on. This tests recognising the moment is public and the audience is watching whether credit gets absorbed — C rights the wrong privately while the public record stays false, and D overcorrects into performative self-effacement.

**Question 4 (moderate) — Deadline pressure against test-driven discipline**

A product manager suggests skipping automated tests to save three days before a ministerial deadline, planning to add them post-launch; the team follows a test-driven approach as standard. Ask for the most effective response.

- A) Agree — deadlines from ministers outrank engineering preferences, and tests can genuinely be added later.
- B) Refuse outright and state that the team will miss the deadline rather than compromise on any practice.
- C) Explain the actual trade-off: tests written test-first are part of how the code gets designed and how you know it works before launch; then explore real scope options — cutting a lower-value story, simplifying the feature — to meet the date without silently raising defect risk on a citizen-facing launch.
- D) Agree publicly but privately instruct the team to write tests anyway and absorb the schedule slip without telling the product manager.

**Correct answer: C**

**Explanation:** C reframes a false trade (quality vs deadline) into the true one (scope vs deadline), explains why "tests afterwards" is not equivalent work moved later, and offers real options a product owner can decide between. This tests holding a standard through explanation and constructive alternatives — A converts a schedule risk into a silent defect risk, B is rigid without explaining function, and D is dishonest and destroys the trust cross-disciplinary work depends on.

**Question 5 (moderate) — Discovering a security flaw in an adjacent team's service**

Integrating with another team's API reveals it returns full records — including data the candidate's service should not see — on a malformed filter, an apparent access-control flaw affecting real citizen data; the other team's tech lead is on leave. Ask for the most effective response.

- A) Report it immediately through your organisation's security incident route and notify the team's remaining developers directly, sharing exactly how to reproduce it; offer help; do not exploit the flaw further than the accidental discovery.
- B) Wait for the tech lead to return — it is their service, and going around them could damage the relationship.
- C) Post the reproduction steps in the open cross-team channel so everyone is aware and someone fixes it fast.
- D) Quietly code your own service to avoid triggering the flaw, since your integration works fine without malformed filters.

**Correct answer: A**

**Explanation:** A treats a potential citizen data exposure as a security incident now, using the incident route that exists precisely so one person's absence cannot delay response. This tests escalating through the right channel at the right speed — B prioritises a relationship over data exposure for a week, C broadcasts reproduction steps for a live flaw without containment, and D is a quiet failure of ownership that leaves the exposure in place.

**Question 6 (moderate) — Design review disagreement with a peer**

A peer senior developer proposes an event-driven architecture the candidate believes is unnecessarily complex for the requirements; the peer is invested and the meeting is tense. Ask for the most effective response.

- A) Defer — they will operate the thing, and vetoing a peer's design damages the relationship.
- B) State your position firmly and refuse to approve the design until it is changed.
- C) Anchor the discussion in shared criteria: walk through the requirements the design must meet — including operational load, failure modes, and who supports it at 2am — and propose evaluating both options against them, offering to timebox a spike if the group cannot decide on paper.
- D) Let the meeting end without resolution and email the architecture lead afterwards recommending your design.

**Correct answer: C**

**Explanation:** C moves the disagreement from proposal-versus-proposal to options-versus-shared-criteria, and offers evidence (a spike) rather than opinion escalation. This tests keeping technical conflict inside the room and resolvable — A abandons honest technical judgement, B substitutes authority for reasoning, and D is the relationship-damaging move done covertly.

**Question 7 (moderate) — A researcher's findings against your own preference**

Research shows caseworkers consistently fail to find a key function under a navigation pattern the candidate personally designed, though two vocal caseworkers praise it; the researcher recommends changing it, and the candidate believes the design is elegant and users would adapt. Ask for the most effective response.

- A) Support the change: the failure data reflects user needs; the praise and your own attachment reflect desires and aesthetics. Ask the researcher what success would look like so the fix can be tested the same way.
- B) Argue for keeping the design for another quarter to give users time to adapt, since some users clearly like it.
- C) Accept the change but register formally that you disagree, so the record shows your design was overruled.
- D) Propose a compromise keeping your pattern but adding a tutorial explaining where the function lives.

**Correct answer: A**

**Explanation:** A acts on the stronger evidence (consistent task failure, need-level) over the weaker (a vocal minority and personal attachment, preference-level), and closes the loop with a measurable success test. This tests championing research even against one's own prior work — B privileges the minority over the failing majority, C spends goodwill on blame-proofing a usability fix, and D patches the symptom rather than fixing the underlying finding.

**Question 8 (moderate) — Least effective: intermittent fault before a bank holiday**

Thursday afternoon before a bank holiday weekend, a colleague mentions an unattended nightly reconciliation job "failed once overnight but worked on retry — probably nothing," feeding a report finance uses each morning. Ask which response would be LEAST effective.

- A) Spend thirty minutes now checking the logs from the failure to understand what happened before deciding anything.
- B) Note it as "probably transient" and pick it up after the long weekend, since the retry succeeded.
- C) Check whether alerting would catch a full failure over the weekend, and add a basic alert if not.
- D) Brief the on-call engineer that the job showed instability, with a pointer to the runbook and last night's logs.

**Correct answer: B**

**Explanation:** B walks past a warning sign immediately before three unattended nights with a business consumer depending on the output. This tests recognising intermittence in an unattended job as a signal worth a modest investment of time — A, C and D are all reasonable and complementary, converting an unknown risk into a monitored one without cancelling anyone's weekend.

**Question 9 (hard) — Capacity concern versus a launch commitment**

A campaign will drive traffic that may exceed tested capacity by around 30%, with uncertain estimates; the service owner has publicly committed to the launch date, and an informal capacity flag raised two weeks ago produced no action. Ask for the most effective response now.

- A) Raise it formally: write a short note quantifying the risk (forecast versus tested capacity, uncertainty range, expected failure mode, and citizen impact), propose concrete mitigations — load testing this week, scaling ahead of the date, graceful degradation, a queue-based fallback — and ask the service owner for a decision, offering to talk it through.
- B) Say nothing further — you raised it once, the decision is above your pay grade, and you have an email trail proving you flagged it.
- C) Escalate directly to the service owner's boss, since the service owner ignored the first warning.
- D) Quietly scale the infrastructure yourself to triple capacity, absorbing the cost into the team's budget without approvals.

**Correct answer: A**

**Explanation:** A converts a vague worry into a decision-ready document with quantified risk and real mitigations, routed to the accountable person, helping them succeed rather than proving them wrong. This tests active escalation with options — B optimises for blamelessness rather than the outcome, C skips a level before a formal request has genuinely been refused, and D exceeds authority and hides a material decision.

**Question 10 (hard) — A teammate's shortcut with citizen data**

A respected colleague's pull request adds debug logging that writes full citizen records to a 90-day, team-readable application log to diagnose a real production issue quickly. Ask for the most effective response.

- A) Approve it with a comment suggesting they remove the logging "when convenient", since the production issue is real and urgent.
- B) Request changes on the pull request, explaining the data protection problem specifically; suggest a compliant alternative (logging record identifiers, or redacted fields); and check whether similar logging already reached production — because if it did, that needs reporting as a potential data incident, and you should say so to them directly and kindly.
- C) Reject the pull request with a one-line comment quoting the security policy.
- D) Approve the pull request but raise the pattern anonymously at the next retrospective so nobody is singled out.

**Correct answer: B**

**Explanation:** B addresses two problems — the pending pull request (specific harm named, a working alternative offered) and the possibility that the pattern already reached production (a potential data incident worth checking and reporting). This tests whole-system ownership beyond the diff at hand — A treats live personal data exposure as a courtesy deadline, C blocks without offering a path, and D discusses the harm abstractly later while approving it now.

**Question 11 (hard) — Most and least effective: knowledge silo risk**

The only person who understands an overnight batch subsystem is about to take three weeks' leave, during which a major integration touching that subsystem is scheduled. Ask for the most and least effective response among: (1) postpone your leave — the integration is too important; (2) run two working sessions with the team on the subsystem, write up the recovery runbook, pair with one developer on the integration's riskiest touchpoint, and agree with the delivery manager what should wait for your return; (3) write a long document alone covering everything you know and email it to the team on your last day; (4) tell the delivery manager the integration must be delayed until you return, since nobody else can do it safely.

- A) Most: 2; Least: 4
- B) Most: 1; Least: 3
- C) Most: 2; Least: 3
- D) Most: 3; Least: 1

**Correct answer: A**

**Explanation:** Option 2 converts private knowledge into team capability through channels that actually transfer it (working sessions, pairing) and makes residual risk a managed decision. This tests recognising the duty to teach the whole system — option 4 entrenches the silo as leverage and blocks the programme, worse than option 3's weaker but still-attempted mitigation, and option 1 sacrifices sustainability without fixing the underlying fragility.

**Question 12 (hard) — Improvement idea meeting team resistance**

Proposing automating a manual release checklist (cutting release time from half a day to under an hour) meets hard pushback from two long-tenured developers citing past automation failures. Ask for the most effective response.

- A) Drop it — team harmony on release practices matters more than efficiency, and they know history you don't.
- B) Build the automation over a weekend and demonstrate it as a fait accompli at Monday's stand-up.
- C) Get curious about their objection: ask which specific checks have caught real problems and what the previous automation failure was; propose a reversible first step — automating only the mechanical checks while keeping human judgement checks manual, run in parallel with the checklist for three releases and reviewed against evidence.
- D) Ask the delivery manager to mandate the automation, since the data clearly supports it.

**Correct answer: C**

**Explanation:** C treats resistance as data (real history likely sits behind it), engineers a reversible, partial, evidence-judged first step, and turns an opinion argument into an agreed experiment. This tests bringing colleagues along through curiosity and incremental change — A abandons a meaningful improvement, B wins the argument and loses the team, and D borrows authority to skip persuasion, which tends to produce minimal compliance and quiet abandonment.

### Administration tips

- Score for whether a response fixes both the immediate problem and the underlying system that produced it, rather than only the symptom.
- Note whether escalation goes through the right channel at the right altitude — active and evidenced when needed, never skipped and never leapfrogged before a clear request has genuinely been refused.
- Watch for whether the candidate protects the outcome (an email trail, a formal note of dissent) rather than genuinely acting on a risk or a concern.
- Score for whether coaching, credit, and disagreement responses develop or respect the other person rather than bypassing, rescuing, or humiliating them.
- Note whether the candidate treats resistance to a proposed change as information to investigate rather than an obstacle to overrule or avoid.

### Common pitfalls to watch for when scoring

- Crediting a bold, unilateral solo action (rewriting a mentee's code, scaling infrastructure without approval, building something as a fait accompli) over an available collaborative route.
- Missing when a candidate over-escalates (skipping a level before a clear request has been refused) or under-escalates (staying silent after a real warning was ignored).
- Rewarding a response built around self-protection (an email trail, a formal record of disagreement) rather than genuinely acting on the risk.
- Accepting a silently dropped standard (skipped tests, an approved risky pull request, deference to a louder peer) as equivalent to a transparent, negotiated trade-off.
- Missing when a candidate's technically correct response handles a colleague, mentee, or stakeholder badly — humiliating, bypassing, or manipulating them.

## Conclusion

This guide has worked through pattern recognition and error checking across naming conventions, deployment rules and systems designs, dependency-chain deduction in integration and scheduling, and fault isolation by differencing across the evidence given; availability, capacity and cost arithmetic weighted correctly, KPI statistics read exactly as named, and overclaims corrected precisely rather than endorsed or dismissed; the discipline of reading specifications, standards and incident reports at the precision their modal verbs, hedges and stated causes demand; and the situational judgement calls that define senior-developer work — fixing both the instance and the system, escalating through the right channel, developing a mentee or a colleague rather than rescuing or bypassing them, and holding a standard through explanation rather than authority.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around what evidence actually establishes and whose decision a scenario belongs to. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
