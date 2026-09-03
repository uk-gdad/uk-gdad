# Senior Infrastructure Engineer - Psychometric Assessment Resources

## Introduction

This document is written for you: an assessor administering a workplace job-specific psychometric assessment to a candidate for senior infrastructure engineer, within the UK Government Digital and Data profession. These assessments are job-specific: they use the kinds of artefacts a senior infrastructure engineer genuinely handles — architectural designs awaiting translation into operations, design review packs, integration build plans, test condition sets, capacity and budget inputs, supplier performance data — and the kinds of decisions genuinely made: designing systems of medium risk and complexity, selecting design standards and ensuring they are applied, reviewing the designs of others, coordinating build activities across systems, initiating investigations into patterns and trends, and determining resolutions and preventative measures.

At senior level a candidate would occupy the hinge point between architecture and operations. Technical architects hand over designs; the role makes them run. Junior engineers hand over their designs and their problems for review, guidance, and unblocking. Management asks for input on workforce, budget, technology roadmaps, projects, and tasks. Every one of those flows demands the abilities these assessments measure: rapid, accurate pattern analysis across complex artefacts; valid deduction from standards and constraints; disciplined reading of dense technical and contractual text; and sound judgement about people, priorities, and risk.

This document is organised into four assessment sections, each following the same pattern: an overview of what the assessment measures and why employers use it for this role, a mapping of the assessment dimensions to the specific named skills in the role summary, a substantial set of items with full worked explanations for use as an answer key, administration tips, and common pitfalls to watch for when scoring. Items progress from easy through moderate to hard, and the harder items deliberately reflect senior-level texture: reviewing others' work, weighing competing constraints, leading small teams through ambiguity, and consulting specialists at the right moment.

**How to administer this fairly.** Use the same items and time allowance for every candidate assessed at this role level. Hold the correct answers and explanations back from the candidate until after they have responded. Let the candidate work through each section without interruption, and note anything unusual about the conditions so the record is honest. Afterwards, use the explanations to structure a debrief. This assessment is one input among several — see the advisory below for what it should never be used for on its own.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract puzzles. For a senior infrastructure engineer, the materials are the ones that cross the desk daily: architectural design documents, resilience and capacity specifications, integration sequence plans, test condition matrices, monitoring trend data, and the design work of less experienced colleagues awaiting review.

The typical format is an online, timed test lasting 15 to 30 minutes, with 20 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group of professionals at a comparable level; adaptive difficulty is common, and employers usually receive speed and accuracy separately.

At senior level, the cognitive demand shifts in a particular way: a candidate is less often the person producing the artefact and more often the person verifying it, integrating it, or deciding on the strength of it. Reviewing a colleague's system design for appropriate technology selection and efficient resource use is sustained error checking against multiple simultaneous criteria. Translating an architect's design into operations is deduction — what must physically and procedurally follow from these stated properties? Initiating investigations into patterns and trends is inductive reasoning over noisy operational data. Coordinating build activities across systems is constraint satisfaction with real deadlines. Employers assess cognition at this level because a senior engineer's errors are multiplied by the teams and systems downstream of them.

### How this assessment maps to the role

The assessment dimensions map directly to the named skills in the role summary:

- **Pattern recognition** maps to the **Problem management** skill: initiating and monitoring actions to investigate patterns and trends means detecting recurring signatures across incidents, metrics, and time — separating genuine signal from coincidence.
- **Logical deduction** maps to the **Systems design** skill (designing systems of medium risk, impact, and complexity requires reasoning validly from requirements and standards to consequences) and to the role-level duty to work with technical architects to translate architectural designs into operations.
- **Error checking** maps to the **Systems design** review duty — reviewing the systems designs of others to ensure appropriate technology selection, efficient use of resources, and integration of multiple systems — and to the **Testing** skill of reviewing requirements and specifications and defining test conditions.
- **Prioritisation** maps to the **Ownership and topic** skill (owning issues until resolution or handover) and the duty to provide input into overall management — workforce, budget, technology roadmaps, projects, and tasks — which is prioritisation formalised.
- **Applied problem solving** maps to the **Troubleshooting and problem resolution** skill: breaking a problem down into its component parts to identify and diagnose root causes, across different technology capabilities.
- **Structural reasoning about integration** maps to the **Systems integration** skill: defining the integration build and coordinating build activities across systems is dependency and sequence logic under resource constraints.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Pattern recognition across an incident history**

Six months of priority incidents for a service are under review, to decide whether to initiate a problem investigation:

| Month | Incidents | Notes |
|---|---|---|
| March | 2 | Both storage latency, last week of month |
| April | 1 | Network failover test issue |
| May | 3 | All storage latency, last week of month |
| June | 1 | Application defect |
| July | 2 | Both storage latency, last week of month |
| August | 3 | All storage latency, last week of month |

Which pattern most warrants a problem investigation?

- A) Incident counts are rising month on month
- B) Storage latency incidents recur in the last week of each month, and their frequency is growing
- C) Network failover testing is unreliable
- D) Application defects are the dominant incident type

**Correct answer: B**

**Explanation:** Separate the recurring signature from the noise. Storage latency appears in four of six months — always in the last week, with counts moving 2, 3, 2, 3 — a repeating time-locked pattern with a mild upward drift. That combination (recurrence, time correlation, growth) is precisely what the **Problem management** skill exists to catch: a month-end process — reporting runs, billing batches, archive jobs — is plausibly saturating storage, and the trend says it will worsen. Option A is false: counts go 2, 1, 3, 1, 2, 3 — not monotonic. Options C and D each generalise from a single incident. This tests whether a candidate tabulates by type and by time before judging — patterns invisible in a chronological list leap out of a cross-tabulation — and adds the senior judgement layer: one-off incidents get fixed, recurring signatures get problem records.

**Question 2 (easy) — Deduction from an architectural requirement**

An architect's design states: "The service must survive the loss of any single data centre without user-visible interruption. Session state must not be lost during such an event." The current operational proposal runs two application servers, both in Data Centre 1, with session state held in each server's local memory. Which conclusion must be true?

- A) The proposal fails both requirements: a Data Centre 1 loss interrupts the service, and local session state would be lost.
- B) The proposal meets the requirements because two servers provide redundancy.
- C) The proposal meets the availability requirement but not the session requirement.
- D) The requirements cannot be met with only two servers.

**Correct answer: A**

**Explanation:** Test the proposal against each requirement independently. Requirement 1: survive loss of any single data centre. Both servers sit in Data Centre 1, so losing that centre removes every server — the service stops. Failed. Requirement 2: session state survives such an event. State lives in the memory of servers that would all be lost. Failed. Both requirements fail: option A. Option B mistakes server-level redundancy for site-level redundancy — the failure domain the requirement names is the data centre, not the server, and redundancy only counts when instances sit in different failure domains. Option D overreaches: two servers in different centres with externalised session state (a replicated session store) could satisfy both requirements — the count is not the problem, the placement and state design are. This tests the exact reasoning of the duty to translate architectural designs into operations: extracting each stated property, identifying its failure domain, and verifying the physical arrangement preserves it.

**Question 3 (easy) — Error checking a test condition set**

The requirement reads: "Users in the Finance group can read and write to the ledger share. Users in the Audit group can read but not write. Users in neither group have no access." A junior colleague drafts these test conditions: (1) Finance user can write — expect success. (2) Audit user can read — expect success. (3) Audit user can write — expect failure. (4) Finance user can read — expect success. Which important condition is missing?

- A) Finance user attempts to delete the share
- B) A user in neither group attempts to read — expect failure
- C) Audit user reads twice in succession
- D) Finance user writes a large file

**Correct answer: B**

**Explanation:** Map the conditions against the requirement's three clauses. Finance read/write: covered by conditions 1 and 4. Audit read allowed, write denied: covered by 2 and 3. "Users in neither group have no access": untested — nothing verifies that an outsider is denied. That is the gap, and it is the most security-significant clause in the requirement: the failure mode it guards against is unauthorised access to a ledger. Negative-path conditions — verifying that forbidden things fail — are systematically under-written by inexperienced testers, because intuition tests what should work. Options A, C, and D add volume, repetition, or destructive cases the requirement does not mention. This tests the **Testing** skill operating at review altitude: reviewing requirements and specifications and defining test conditions means checking coverage clause by clause, with special attention to every "not" and "no" in the text.

**Question 4 (easy) — Prioritisation across senior responsibilities**

Four items arrive on Monday morning: (1) a P3 problem investigation the candidate owns has new evidence available; (2) a junior engineer is blocked on a production change scheduled for tonight, awaiting design review; (3) the monthly capacity report the candidate contributes to management is due Friday; (4) a technical architect requests a meeting this week about operationalising a new design. What should be addressed first?

- A) Item 1 — problem investigations underpin prevention
- B) Item 2 — a colleague is blocked now on work with a hard deadline tonight
- C) Item 3 — management reporting takes precedence
- D) Item 4 — architects outrank other stakeholders

**Correct answer: B**

**Explanation:** Apply impact-weighted urgency. Item 2 combines a hard same-day deadline (tonight's change window) with a blocked person — every hour of delay consumes their preparation time and raises tonight's risk, and unblocking others is a defining senior duty. Items 3 and 4 have week-scale deadlines that permit scheduling. Item 1's evidence will keep; problems are important precisely because they are not urgent in the incident sense. Options C and D rank by stakeholder seniority — a heuristic that fails whenever a junior colleague's blocked change outweighs a movable meeting, which is often. This tests whether a candidate identifies the senior-level refinement: the correct sequence is not just "2 first" but "2 now, then two-minute scheduling responses to 3 and 4, then 1" — prioritisation at this level is mostly about cheap early communication that converts waiting stakeholders into scheduled ones.

**Question 5 (moderate) — Pattern recognition in capacity trend data**

Reviewing quarterly storage consumption for four services: Service W: 10 TB, 11 TB, 12 TB, 13 TB. Service X: 8 TB, 8 TB, 9 TB, 8 TB. Service Y: 5 TB, 7 TB, 10 TB, 14 TB. Service Z: 20 TB, 20 TB, 21 TB, 20 TB. Which service presents the most pressing capacity planning concern?

- A) Service W — it grows every quarter
- B) Service X — its consumption is unstable
- C) Service Y — its growth is accelerating
- D) Service Z — it consumes the most storage

**Correct answer: C**

**Explanation:** Distinguish level, linear growth, and acceleration. Service Z has the highest level but is flat — a budget line, not a planning risk. Service W grows linearly at 1 TB per quarter — predictable, easily planned. Service X oscillates within 1 TB — noise. Service Y's increments are 2, 3, 4 TB — growth that is itself growing. Extrapolate the pattern: next increments of roughly 5 and 6 TB take it to about 25 TB in two quarters — from smallest consumer to largest, and accelerating curves defeat the straight-line assumptions procurement plans are usually built on. Option C. This tests the reasoning habit — looking at differences between periods, then differences of the differences — and feeds directly into the role-level duty to provide input into budgets and technology roadmaps: the service that needs money next year is identified by curvature today, not by which is currently biggest.

**Question 6 (moderate) — Deduction through integration sequencing**

Defining the integration build for a new case-management service touching four systems. Constraints: (i) the identity integration must be complete before user-acceptance testing (UAT) of any other integration; (ii) the document-store integration needs three weeks of build; (iii) the notification integration needs one week of build and shares a build team with the document-store work, so they cannot run in parallel; (iv) identity needs two weeks of build, done by a separate team, and its own one week of UAT; (v) each non-identity integration needs one week of UAT after both its build and the identity UAT are complete. Builds may start immediately. What is the earliest week by which all UAT can finish?

- A) End of week 5
- B) End of week 6
- C) End of week 7
- D) End of week 8

**Correct answer: A**

**Explanation:** Schedule each track. Identity team: build weeks 1–2, UAT week 3 — identity UAT complete end of week 3. Shared build team: the two builds cannot overlap; order them document-store first (weeks 1–3) then notification (week 4), or notification first (week 1) then document-store (weeks 2–4) — either way the shared team finishes building at end of week 4. UAT for each non-identity integration needs its build done and identity UAT done (end of week 3). Take notification-first ordering: notification build done end of week 1, but its UAT must wait for identity UAT, so it runs week 4; document-store build done end of week 4, UAT week 5. All UAT complete end of week 5 — option A. Check the other ordering: document-store UAT week 4, notification build done week 4, UAT week 5 — same result. This tests the senior insight that the shared team is the true binding constraint (four weeks of serialised build), and the identity prerequisite costs nothing extra because it completes inside that shadow — the **Systems integration** skill of finding the binding constraint and sequencing around it.

**Question 7 (moderate) — Error checking a design review submission**

A junior engineer submits a design for a departmental file service: "Two file servers in an active-passive pair using synchronous replication between Data Centre 1 and Data Centre 2. Failover is manual, performed by the on-call engineer following runbook FS-12, expected completion 15 minutes. The service tier requires recovery within 30 minutes (RTO) with zero data loss (RPO). Backups run nightly to meet the zero-data-loss requirement."

Which statement in the design is internally inconsistent with the stated requirements?

- A) The claim that manual failover meets the 30-minute RTO
- B) The claim that nightly backups meet the zero-data-loss requirement
- C) The use of active-passive rather than active-active
- D) The use of synchronous replication between data centres

**Correct answer: B**

**Explanation:** Check each claim against the requirement it cites. RTO 30 minutes: manual failover at 15 minutes expected leaves margin — tight if the on-call engineer is slow to respond, worth a comment, but not internally inconsistent as claimed (option A is a judgement point, not a contradiction). Active-passive (option C) and synchronous replication (option D) are legitimate choices — indeed synchronous replication is what actually delivers zero data loss for committed writes. The inconsistency is option B: nightly backups protect against data loss of up to 24 hours, so they cannot "meet the zero-data-loss requirement" — the design attributes the RPO to the wrong mechanism. This tests the essence of the design review duty: verifying not only that each requirement is addressed, but that it is addressed by a mechanism actually capable of delivering it — misattributed compliance is the subtlest and most common review finding, because every requirement appears to have an answer.

**Question 8 (moderate) — Root-cause decomposition**

A nightly data transfer to an external partner has failed three times in two weeks, each time with a different symptom: once a timeout, once a certificate error, once a partial file. A junior engineer investigating proposes: "Three different errors means three different problems — we should raise three problem records." Which response reflects the best diagnostic reasoning?

- A) Agree — distinct symptoms imply distinct causes.
- B) Disagree — three failures of one interface in two weeks suggests looking for a common underlying factor first, such as a change in the network path, an expiring credential chain, or an unstable connection, with the varied symptoms as different downstream expressions of it.
- C) Disagree — the most recent error is the only one worth investigating.
- D) Agree, but investigate only the certificate error because security matters most.

**Correct answer: B**

**Explanation:** Symptom diversity does not imply cause diversity. A single unstable network path can produce a timeout (connection stalls), a partial file (connection drops mid-transfer), and even a certificate error (handshake interrupted or failing over to a host presenting a different certificate). Base rates matter too: one interface failing three times in a fortnight after presumably long stability makes one new underlying factor more probable than three independent new faults arriving together. This tests the diagnostic method at the heart of the **Troubleshooting and problem resolution** skill's "break a problem down into its component parts": laying the three failures on a common timeline against changes, looking for the shared layer in the stack, and only splitting into multiple investigations when a common factor is positively excluded. Option A multiplies process before thought. Option C discards two-thirds of the evidence. Option D lets category importance override causal reasoning.

**Question 9 (moderate) — Prioritisation of preventative measures**

A problem investigation into recurring authentication slowdowns identifies four contributing factors, with an estimate of implementation effort and recurrence reduction for each remedy: (1) increase directory server memory — 1 day effort, prevents ~30% of recurrences; (2) re-time the replication schedule away from peak logins — 2 days effort, prevents ~50% of recurrences; (3) replace the ageing directory servers — 40 days effort and capital spend, prevents ~90% of recurrences; (4) add monitoring alerts for replication lag — 1 day effort, prevents no recurrences but cuts detection time from hours to minutes. Which implementation order is most defensible?

- A) 3 first — it prevents the most
- B) 4, 2, 1, then propose 3 through the roadmap: quick detection first, then the highest-value cheap preventions, with the capital replacement planned properly
- C) 1, 2, 3, 4 — ascending effort order
- D) 2 only — it prevents the majority, so the rest are unnecessary

**Correct answer: B**

**Explanation:** Rank by value density (benefit per unit of effort and delay) while respecting decision boundaries. Item 4 costs one day and transforms every future occurrence — including those during the weeks before other remedies land — from a long outage into a short one; detection improvements pay out immediately and are almost never wrong to do first. Item 2 is the prevention bargain: two days for half the recurrences. Item 1 adds another 30% for a day. Item 3 is the right long-term answer but is a capital project: forty days and spend of that scale belong in the technology roadmap and budget process — exactly the management input the role level provides — not in a problem record's immediate actions. Option A would leave users exposed for weeks while the big fix mobilises. Option C sequences by effort while ignoring that 4's benefit is categorically different and 2 dominates 1. Option D confuses "majority" with "sufficient". This tests the **Problem management** skill exercised at senior level: layered remedy thinking, staged by value and governance.

**Question 10 (hard) — Deduction across interacting constraints**

Six virtual machines (A–F) must be placed across two hosts (Host 1 and Host 2) subject to: (i) A and B are a resilient pair and must be on different hosts; (ii) C must be co-located with A for latency; (iii) D must not share a host with B, due to licence terms; (iv) E and F must be together on either host; (v) each host can hold at most four VMs. Which placement is valid?

- A) Host 1: A, C, D, E — Host 2: B, F
- B) Host 1: A, C, D — Host 2: B, E, F
- C) Host 1: B, C, D — Host 2: A, E, F
- D) Host 1: A, C, E, F — Host 2: B, D

**Correct answer: B**

**Explanation:** Apply each constraint to each option, eliminating on the first violation. Option A: E and F are split across hosts — violates (iv). Option C: C sits with B on Host 1 while A is on Host 2 — violates (ii); additionally D shares Host 1 with B — violates (iii). Option D: A, C, E, F on Host 1 satisfies (i), (ii), (iv), and the count of four is within (v) — but D sits on Host 2 with B, violating (iii). Option B: A and B on different hosts ✔ (i); C with A ✔ (ii); D on Host 1, B on Host 2 — not sharing ✔ (iii); E and F together on Host 2 ✔ (iv); counts 3 and 3 ✔ (v). Valid. This tests whether a candidate uses constraint propagation rather than option-checking from scratch: fixing A on Host 1, then B is forced to Host 2 by (i), C to Host 1 by (ii), D to Host 1 by (iii), and E and F must go together wherever capacity remains — reproducing option B directly, the method that scales to the larger placement problems real virtualisation management supplies.

**Question 11 (hard) — Evaluating evidence quality in an investigation**

Investigating intermittent database timeouts, four pieces of evidence are available: (i) timeouts cluster between 08:30 and 09:30 on weekdays; (ii) a colleague recalls that "the SAN always struggles in the mornings"; (iii) storage latency metrics for the database volumes show flat, healthy values across all times; (iv) application connection-pool metrics show pool exhaustion coinciding with each timeout cluster. Which conclusion best respects the evidence?

- A) The SAN is the likely cause, consistent with the colleague's experience.
- B) The evidence is contradictory, so no investigation direction can be chosen.
- C) The measured evidence points away from storage and towards connection-pool exhaustion under morning login load; the recollection should be noted but not allowed to outweigh the metrics.
- D) The timeouts are random and the morning clustering is coincidence.

**Correct answer: C**

**Explanation:** Weigh evidence by its epistemic quality. Items (i), (iii), and (iv) are measurements; item (ii) is an unquantified recollection — honestly offered, possibly rooted in past reality, but it concerns the SAN in general while (iii) directly measures the relevant volumes and finds them healthy. Where a specific measurement and a general memory conflict, the measurement wins — though the professional move is to note the recollection and verify the SAN metrics' coverage rather than dismiss the colleague. The positive case: (iv) shows pool exhaustion coinciding with every cluster, and (i)'s timing matches the morning login surge — mechanism and timing cohere, giving a testable hypothesis. Option A privileges anecdote over instrumentation — the commonest failure in real investigations. Option B mistakes "one weak source disagrees" for contradiction. Option D ignores (i)'s strong regularity. This tests the **Problem management** skill's "effectively consult specialists where required": consulting widely, weighing what is heard by how it was known, and letting instrumented evidence arbitrate.

**Question 12 (hard) — Operationalising a design under constraint conflict**

A technical architect's design for a new service specifies: (i) all inter-site replication traffic must be encrypted; (ii) replication lag must not exceed 5 seconds; (iii) the existing inter-site link must be used, with 200 Mbps of the link reserved for replication. Operational testing finds: encrypted replication over the reserved 200 Mbps sustains the required data rate but with lag spiking to 12 seconds at peak write times; unencrypted replication meets the 5-second lag comfortably; upgrading the link or its encryption hardware is possible but needs procurement. Which response best fulfils the role?

- A) Deploy unencrypted replication — the lag requirement is operationally decisive.
- B) Deploy encrypted replication as designed and accept the 12-second lag without further action.
- C) Document the conflict with the test evidence, take it back to the architect with quantified options — hardware acceleration, link upgrade, write-shaping, or a formally accepted revised lag target — and implement the agreed resolution; meanwhile do not deploy a configuration that silently breaches either requirement.
- D) Deploy encrypted replication but change the recorded lag requirement in the design document to 15 seconds so the deployment complies.

**Correct answer: C**

**Explanation:** The testing has discovered that requirements (i) and (ii) cannot both be met under constraint (iii) — a genuine design conflict, and resolving requirement conflicts is a design authority decision, not an operational one. Option C is the role-faithful response: "work with technical architects to translate architectural designs into operations" cuts both ways — designs are carried into operation, and operational evidence is carried back into design. Bringing quantified options rather than a bare problem is what makes the conversation productive, and refusing to deploy a silently non-compliant configuration in the interim protects the service's integrity either way. Option A unilaterally discards a security requirement. Option B silently accepts a 140% breach of a stated requirement. Option D is falsification: editing a requirement to match an implementation inverts the entire relationship between design and operations. This tests the general pattern for seniors: when reality refutes a design, escalate the refutation with evidence and options — never absorb it in silence, never paper over it in the record.

### Administration tips

- **Score for whether a candidate tabulates data before judging** — cross-tabulating incidents by type and time, or differencing a trend series, is a strong indicator at this level.
- **Watch for whether a candidate propagates forced moves in constraint problems** rather than checking options one at a time from scratch.
- **Note whether a candidate demands mechanism-plus-timing from a proposed cause**, rather than accepting a plausible-sounding explanation.
- **Keep timing consistent** across candidates for this level.
- **Use the requirement-conflict item (Question 12) to observe whether a candidate escalates a design conflict with evidence and options** rather than resolving it unilaterally.

### Common pitfalls to watch for when scoring

- **Rewarding a review answer that checks for presence rather than sufficiency** — a requirement can be "addressed" by a mechanism that cannot actually deliver it.
- **Crediting an answer that lets anecdote outweigh instrumentation.**
- **Missing when a candidate equates symptom diversity with cause diversity.**
- **Accepting an answer that ranks by stakeholder seniority** rather than impact-weighted urgency.
- **Rewarding an answer that silently absorbs a requirement conflict** — by breaching quietly, waiving unilaterally, or editing the record — rather than escalating it.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace job-specific numeric reasoning assessment measures how accurately and confidently a candidate works with the quantities this role genuinely handles — and at senior level, that set widens considerably. Alongside the engineer's staples of capacity, utilisation, availability, and throughput, a candidate now contributes to workforce planning, budget inputs, technology roadmaps, and supplier performance assessment. The underlying mathematics remains deliberately accessible — percentages, ratios, averages, rates, weighted combinations, and reading tables and charts — but the data is denser, the questions demand more interpretation, and the answers feed decisions with money and people attached.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 20 questions, each presenting a realistic data set — a capacity trend, a cost comparison, an SLA report, a team utilisation table — followed by a multiple-choice question. Calculators are generally permitted, rough paper is essential, and scoring compares accuracy and speed against a norm group at a comparable level, often adaptively.

Employers assess numeric reasoning for senior infrastructure engineers because, at this level, numbers become other people's decisions. A capacity forecast shapes next year's budget bid. An availability analysis determines whether a supplier earns or loses at contract review. Sizing calculations get built — by teams a senior engineer leads — into systems the department depends on. Management input on workforce and projects is credible only if the arithmetic beneath it survives scrutiny. The assessment samples, in miniature, exactly the numerical judgement the role exercises at scale.

### How this assessment maps to the role

- **Capacity and sizing arithmetic** maps to the **Systems design** skill: designing systems of medium risk and complexity, and reviewing others' designs for efficient use of resources, means deriving and verifying node counts, storage volumes, and throughput figures rather than accepting them.
- **Trend analysis and forecasting** maps to the **Problem management** skill (initiating investigations into patterns and trends) and the role-level duty to provide input into technology roadmaps: quantified trends are what turn monitoring history into roadmap and budget lines.
- **Availability and SLA calculations** map to the duty to ensure services are integrated, delivered, and operated as required, and to work with third parties: supplier performance is judged in percentages, minutes, and credits, and every figure must be checkable.
- **Cost and comparison arithmetic** maps to the input into overall management — budget, projects, and tasks — where option comparisons, run-rate projections, and per-unit costs are the standard currency.
- **Test and defect metrics** map to the **Testing** skill: analysing and reporting test activities and results means working with pass rates, defect densities, and coverage percentages accurately.
- **Workload and team figures** map to the role-level duty to provide input into workforce planning and, on the managerial path, to lead infrastructure specialist teams: rota coverage, utilisation, and effort estimates are ratio problems with people in them.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Utilisation headroom**

A virtualisation cluster has 512 GB of usable memory across its hosts, with 384 GB currently allocated. What percentage headroom remains?

- A) 20%
- B) 25%
- C) 30%
- D) 33%

**Correct answer: B**

**Explanation:** Step 1: free memory = 512 − 384 = 128 GB. Step 2: headroom percentage = 128 ÷ 512 × 100. Step 3: 128 ÷ 512 = 0.25, so 25%. Sanity check via the complement: allocated fraction = 384 ÷ 512 = 0.75 = 75%, and 100 − 75 = 25 ✔. This tests whether the candidate answers headroom (free ÷ total), not utilisation (used ÷ total) — option D (33%) is the classic error of computing free as a percentage of used (128 ÷ 384) rather than of total. A strong candidate's answer also notes the operational stake: headroom against total capacity is what determines whether the cluster can absorb a host failure.

**Question 2 (easy) — Mean time between failures**

A tape library failed on 4 occasions during 200 days of continuous operation. What is its mean time between failures (MTBF) in days?

- A) 40 days
- B) 50 days
- C) 60 days
- D) 80 days

**Correct answer: B**

**Explanation:** MTBF = operating time ÷ number of failures = 200 ÷ 4 = 50 days. The common slip is dividing by failures-plus-one (200 ÷ 5 = 40, option A) — a defensible model in some statistics texts, but the standard operational convention, and the one used here, is time divided by failure count. This tests whether the candidate also keeps the interpretation honest: an MTBF of 50 days is an average over a small sample of four events — it does not promise 50 failure-free days. A strong candidate's answer notes that when using figures like this in roadmap discussions, the sample size should be quoted alongside the average.

**Question 3 (easy) — Availability target conversion**

A service has a 99.9% availability target measured monthly. In a 30-day month (43,200 minutes), what is the maximum permitted downtime?

- A) 14.4 minutes
- B) 43.2 minutes
- C) 144 minutes
- D) 432 minutes

**Correct answer: B**

**Explanation:** Permitted downtime = (100% − 99.9%) × total minutes = 0.1% × 43,200. Step 1: convert the percentage to a fraction: 0.1% = 0.001. Step 2: 0.001 × 43,200 = 43.2 minutes. Options A, C, and D are all decimal-placement errors, which is why writing the fraction explicitly before multiplying is worth the extra two seconds. This tests fluency with availability arithmetic and a strong candidate's answer notes the anchor conversions worth having ready — 99.9% monthly ≈ 43 minutes, 99.5% ≈ 3.6 hours, 99% ≈ 7.2 hours — for translating targets into felt downtime instantly in supplier meetings and design reviews.

**Question 4 (easy) — Reading a supplier performance table**

A supplier's quarterly report shows response-time performance against a 30-minute target for P1 incidents:

| Month | P1 incidents | Responded within target |
|---|---|---|
| April | 8 | 7 |
| May | 5 | 5 |
| June | 12 | 9 |

The contract requires 90% within target, measured quarterly. Did the supplier meet the quarterly requirement?

- A) Yes — 84% is within tolerance
- B) Yes — two of three months individually exceeded 90%
- C) No — quarterly performance was 84%, below the 90% requirement
- D) No — quarterly performance was 87.5%, below the 90% requirement

**Correct answer: C**

**Explanation:** The contract measures quarterly, so aggregate the raw counts — never average the monthly percentages. Step 1: total P1 incidents = 8 + 5 + 12 = 25. Step 2: total within target = 7 + 5 + 9 = 21. Step 3: quarterly performance = 21 ÷ 25 = 0.84 = 84%. Against a 90% requirement, the supplier missed — option C. Option B commits the measurement-period error: monthly figures are informative for diagnosis but the contractual test is the quarterly aggregate. Option D is the unweighted mean of the monthly percentages, wrong because the months carry different incident volumes. This tests reading contracts' measurement definitions and computing accordingly — a strong candidate's answer notes that suppliers will naturally present whichever cut flatters them, so being able to reproduce the contractual figure from raw counts before the meeting is the core of the duty to work with and support third parties.

**Question 5 (moderate) — Growth projection with a step change**

A backup repository holds 60 TB, growing at 2 TB per month. A new service onboarding at the start of month 4 will add an immediate 10 TB and increase ongoing growth to 3 TB per month from month 4 onwards. The repository's capacity is 100 TB. At the end of which month does the repository first reach full capacity?

- A) Month 9
- B) Month 11
- C) Month 12
- D) Month 14

**Correct answer: B**

**Explanation:** Model the two phases separately and add the step change at its stated boundary. Phase 1 (months 1–3 at 2 TB/month): end of month 3 = 60 + (3 × 2) = 66 TB. Phase 2: the onboarding adds 10 TB at the start of month 4 (66 + 10 = 76 TB), and growth runs at 3 TB/month from month 4, so end of month 4 = 79 TB. Remaining headroom: 100 − 79 = 21 TB, consumed at 3 TB/month in 21 ÷ 3 = 7 further months — end of month 11. Verify with the month-by-month table: m5 = 82, m6 = 85, m7 = 88, m8 = 91, m9 = 94, m10 = 97, m11 = 100. Option B. Option D is what results from forgetting the immediate 10 TB step; option C from applying the new growth rate but adding the step a month late; option A from applying the 3 TB rate from month 1. This tests whether a candidate lands the step change exactly at its stated boundary and applies the rate change from its stated month — and a strong candidate's answer volunteers the month-by-month table, since reviewers can check it at a glance.

**Question 6 (moderate) — Test metrics for a release decision**

Integration testing for a release executed 240 test conditions: 216 passed, 18 failed, 6 blocked (could not run because of environment faults). Policy requires a 95% pass rate of executed-and-completed tests, with no blocked tests outstanding, before release. Which statement is correct?

- A) Pass rate is 90%, so the release fails on pass rate alone.
- B) Pass rate is 92.3%, and the blocked tests also prevent release.
- C) Pass rate is 92.3%, which meets the threshold, but the blocked tests prevent release.
- D) Pass rate is 90%, and blocked tests do not matter because they were not executed.

**Correct answer: B**

**Explanation:** Compute the pass rate on the correct base: "executed-and-completed" excludes the blocked tests, so the base is 240 − 6 = 234. Step 1: 216 ÷ 234 = 0.923 = 92.3%. Step 2: compare with the 95% threshold: 92.3% < 95% — the pass-rate requirement fails. Step 3: the policy separately requires no blocked tests outstanding, and 6 remain — a second, independent failure. Both conditions fail: option B. Option A uses the wrong base. Option C mis-compares 92.3% with 95%. Option D gets the base wrong and waves away a stated requirement. This tests two senior lessons: first, that every rate needs its base defined before calculation; second, that a strong candidate's answer treats blocked tests as unexamined risk rather than a neutral absence — analysing and reporting test activities and results, the **Testing** skill, means reporting all three numbers with their bases, resisting any summary that quietly folds blocked into passed.

**Question 7 (moderate) — Cost comparison with growth**

Two storage options for a service currently needing 40 TB, growing about 20% per year. Option 1: on-premises array, £120,000 up front, covering all growth for three years, plus £10,000 per year support. Option 2: cloud storage at £75 per TB per month, billed on actual usage; modelling gives average usage of 44 TB in year 1, 53 TB in year 2, and 63 TB in year 3. Which option is cheaper over three years, and by how much?

- A) Option 1, by £6,000
- B) Option 2, by £6,000
- C) Option 2, by £30,000
- D) They are within £500 of each other

**Correct answer: B**

**Explanation:** Cost each option fully over the same three-year horizon. Option 1: £120,000 + (3 × £10,000) = £150,000. Option 2: each year's cost = average TB × £75 × 12 = average TB × £900. Year 1: 44 × £900 = £39,600. Year 2: 53 × £900 = £47,700. Year 3: 63 × £900 = £56,700. Total: £39,600 + £47,700 = £87,300; £87,300 + £56,700 = £144,000. Comparison: £150,000 − £144,000 = £6,000 in Option 2's favour — option B. Option A reverses the direction. Option C is what emerges if year 2 and year 3 growth is ignored and year 1's cost is simply tripled — the classic flat-usage error in a growth scenario. This tests recomputing totals from unit rates, and a strong candidate's answer notes how close the honest answer is: £6,000 on £150,000 is a 4% difference, well within the error bars of a three-year usage model, so the defensible senior recommendation presents the options as broadly cost-equivalent and decides on other factors.

**Question 8 (moderate) — Rota coverage ratio**

A team must provide on-call cover every night of a 28-day period. Policy limits each engineer to at most 7 on-call nights in the period, and engineers must not be on call more than 2 consecutive nights. What is the minimum number of engineers needed to cover the period within policy?

- A) 3
- B) 4
- C) 5
- D) 6

**Correct answer: B**

**Explanation:** Two constraints bind. Volume: 28 nights at a maximum of 7 nights per engineer gives a lower bound of 28 ÷ 7 = 4 engineers. Pattern feasibility: with 4 engineers each doing exactly 7 nights, can the no-more-than-2-consecutive rule be satisfied? Yes — rotating in pairs of nights across four engineers satisfies both constraints simultaneously. And 3 engineers cannot cover (3 × 7 = 21 < 28 nights). Option B. This tests the method — computing the volume bound first, then verifying a feasible pattern exists at that bound — that appears in every workforce calculation the role's management input touches. A strong candidate's answer also notes the duty of care embedded in such policies: the consecutive-nights limit exists for wellbeing, so a rota should be checked for feasibility rather than quietly breaching the pattern rule to make the volume arithmetic work.

**Question 9 (moderate) — Interpreting a latency distribution**

A service's response-time report shows: mean response 180 ms; median response 95 ms; 95th percentile 850 ms; 99th percentile 2,400 ms. The service target is "typical responses under 200 ms". A stakeholder reads the mean and declares the target met. What is the most accurate senior assessment?

- A) The stakeholder is right — the mean is under 200 ms, so the target is met and no action is needed.
- B) The distribution is heavily skewed: most requests are fast (median 95 ms) but a small tail is very slow (99th percentile 2.4 s), inflating the mean; typical experience meets the target, but the tail deserves investigation.
- C) The target is missed because the 99th percentile exceeds 200 ms.
- D) The figures are contradictory — the median cannot be below the mean.

**Correct answer: B**

**Explanation:** Read the distribution's shape from the summary statistics. Median 95 ms says half of requests complete in under 95 ms — the typical experience is comfortably within target. Mean 180 ms sitting nearly double the median signals right-skew: a minority of very slow requests (850 ms at the 95th percentile, 2.4 s at the 99th) drag the average up. Option D has it backwards — mean above median is the signature of exactly this skew. Option A stops at the mean and misses that around 1 in 20 requests takes over 850 ms, a tail that often points at a specific cause the **Troubleshooting and problem resolution** skill would decompose. Option C over-interprets "typical" as "every request". This tests the senior contribution captured in option B's both-halves framing: confirming the target's letter is met, and surfacing the tail with evidence — because users judge a service by their slowest interactions, not the mean.

**Question 10 (hard) — Weighted downtime attribution**

Last quarter a service suffered 300 minutes of downtime across four causes: supplier network faults 120 minutes; departmental change errors 90 minutes; hardware failures 60 minutes; unknown causes 30 minutes. The supplier is contractually responsible only for supplier network faults. The supplier's report claims: "We caused only 40% of downtime, and departmental changes caused nearly as much (30%), so shared responsibility is appropriate." Verify the percentages and evaluate the claim. Which response is soundest?

- A) The percentages are correct (40% and 30%), and the arithmetic being right makes the shared-responsibility conclusion right too.
- B) The percentages are correct (40% and 30%), but the conclusion does not follow: contractual responsibility attaches to the supplier's 120 minutes regardless of what other causes contributed, so their credits are assessed on their 40% alone.
- C) The percentages are wrong: supplier faults were 50% of downtime.
- D) The unknown 30 minutes should be attributed to the supplier, making their share 50%.

**Correct answer: B**

**Explanation:** Verify first: 120 ÷ 300 = 0.40 = 40% ✔; 90 ÷ 300 = 0.30 = 30% ✔; hardware 60 ÷ 300 = 20%; unknown 30 ÷ 300 = 10%. The supplier's arithmetic is accurate — and the conclusion still fails. Contractual responsibility is not comparative: the supplier owes performance on the causes assigned to them, and 120 minutes of supplier-caused downtime triggers whatever the contract specifies, whether other parties contributed 0 or 900 minutes besides. Option A commits the assessment's central trap — correct arithmetic validating an invalid inference. Option D invents an attribution rule: unknown causes are investigated, not assigned by default to whichever party is being reviewed. This tests the calibration of checking the numbers, then checking what the numbers do and do not entail — the numeric heart of supplier management at senior level, where well-presented percentages arrive attached to well-crafted non-sequiturs.

**Question 11 (hard) — Budget option analysis with utilisation**

Input is being provided on renewing compute capacity. Current estate: 10 hosts, each costing £8,000 per year to run, at an average 30% utilisation. Option 1: renew all 10 hosts — £80,000 per year. Option 2: consolidate to 4 new hosts at £11,000 per year each, which modelling shows would run at about 75% utilisation. Policy caps planned utilisation at 80% to preserve failure headroom. Which statement best supports a recommendation?

- A) Option 2 saves £36,000 per year and stays within the utilisation cap, but the recommendation should note that 75% planned utilisation leaves little headroom for growth and for host failure, so growth projections must be checked before committing.
- B) Option 2 saves £36,000 per year and should be adopted without caveats.
- C) Option 1 is safer and cost is irrelevant to safety.
- D) Option 2 is invalid because 75% exceeds the utilisation cap.

**Correct answer: A**

**Explanation:** Cost the options: Option 1 = 10 × £8,000 = £80,000. Option 2 = 4 × £11,000 = £44,000. Saving = £80,000 − £44,000 = £36,000 per year. Check the policy: 75% ≤ 80%, so option D is simply misreading the cap. But a senior recommendation weighs what the arithmetic implies beyond the pass mark: at 75% planned utilisation on 4 hosts, losing one host pushes the survivors to roughly 75% × 4 ÷ 3 = 100% — saturation during any single failure — and only 5 percentage points of the cap remain for growth. This tests whether the candidate carries the saving and surfaces exactly these conditions — the failure-headroom arithmetic is the kind of second-order check the **Systems design** review duty exists to apply. Option B recommends on first-order arithmetic alone. Option C retreats from quantification entirely, when safety is quantifiable through the headroom calculation.

**Question 12 (hard) — Reconciling conflicting figures**

Preparing the quarterly service report, the monitoring platform recorded 99.62% availability for a service, while the service desk's incident records imply 99.80% (only one 87-minute outage logged in the 43,200-minute month). Investigation shows the monitoring platform counted a 78-minute planned maintenance window as downtime. The contract states planned maintenance within agreed windows is excluded from availability measurement. What availability should the report state, and what does the discrepancy establish? (Verify with arithmetic.)

- A) 99.62% — the monitoring platform is the authoritative source.
- B) 99.80% — after excluding the 78 planned minutes, the remaining recorded downtime matches the incident record's 87 minutes; the monitoring platform's exclusion rules need correcting so future reports agree by construction.
- C) 99.71% — average the two figures since both sources are partly right.
- D) 99.80% — but no follow-up is needed since the correct figure has been found.

**Correct answer: B**

**Explanation:** Reconcile with arithmetic. Monitoring's 99.62% implies downtime of (100 − 99.62)% × 43,200 = 0.38% × 43,200 = 164.16 ≈ 164 minutes. Subtract the wrongly counted planned window: 164 − 78 = 86 ≈ 87 minutes. The incident record's 87 minutes gives (43,200 − 87) ÷ 43,200 ≈ 99.80% — and the contract's exclusion rule makes this the correct contractual figure: option B, whose second half matters as much as its first. Option A elevates a tool above the measurement definition it violates. Option C's averaging is indefensible — where figures conflict, the task is to find the cause, not split differences. Option D fixes the number and leaves the generator of wrong numbers running. This tests the senior pattern useful in every reporting cycle: quantify the discrepancy, identify the classification or definition difference that produces it exactly, correct the figure per the governing definition, and fix the source so agreement becomes automatic.

### Administration tips

- **Score for whether a candidate defines every base before dividing** — pass rates, availability, compliance, and headroom each have a specific denominator set by policy or contract.
- **Watch for whether a candidate aggregates counts rather than averaging percentages** across periods or groups.
- **Note whether a candidate models a phase change or step change explicitly**, at its stated boundary, rather than extrapolating a single formula through it.
- **Keep timing consistent** across candidates for this level, and allow a calculator throughout.
- **Use the weighted-attribution item (Question 10) to observe whether a candidate separates verifying arithmetic from evaluating the conclusion built on it.**

### Common pitfalls to watch for when scoring

- **Rewarding an answer that averages percentages across unequal periods or groups.**
- **Missing a decimal-placement error in a small percentage** — 0.1% of 43,200 is 43.2, not 432.
- **Crediting an answer that computes the complement of the wrong thing** — headroom is free-over-total, not free-over-used.
- **Accepting an answer where correct arithmetic is allowed to validate an invalid conclusion.**
- **Rewarding a single-figure answer where a distribution matters** — means conceal tails, and a strong answer reports medians and percentiles when experience varies.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace job-specific verbal reasoning assessment measures how accurately a candidate understands, evaluates, and acts on written information of the kind a senior infrastructure engineer handles daily: architectural design documents, departmental policies and standards, supplier contracts and service schedules, security advisories, governance papers, and the specifications and test documentation a team produces for review. The dominant format presents a passage followed by statements to judge as **True** (supported), **False** (contradicted), or **Cannot say** (neither), alongside inference questions, best-summary items, argument-evaluation questions, and clear-writing judgements.

The typical format is an online, timed test of 20 to 30 minutes with 15 to 25 questions. The governing discipline is unchanged from earlier career stages but harder to maintain at this one: judge strictly from the passage, not from expertise. Senior engineers carry the most background knowledge and are therefore the most prone to reading into a passage what experience says should be there.

Employers use verbal reasoning tests at this level because seniority multiplies the consequences of misreading — and of writing that is misread. Architects' documents are translated into operational reality: a misparsed constraint becomes a misbuilt system. Specifications are reviewed and test conditions defined from them: a missed "not" becomes an untested failure path. Third-party contracts have obligations that assemble across separated clauses, and at review meetings a candidate's reading is the department's position. And the words flow outward with authority: design review comments direct other engineers' work, management input shapes decisions, and problem records become the team's institutional memory.

### How this assessment maps to the role

- **Parsing design and requirement language** maps to the role-level duty to work with technical architects to translate architectural designs into operations, and to the **Testing** skill of reviewing requirements and specifications and defining test conditions: every test condition begins as a precisely read sentence.
- **Reading policy and standards exactly** maps to the **IT infrastructure** skill (designing and implementing solutions according to departmental policy) and the **Modern development standards** skill: applying standards and supporting others in applying them presumes stating exactly what they require.
- **Contract and supplier comprehension** maps to the duty to work with and support third parties: schedules, exclusions, measurement definitions, and remedy clauses reward — and punish — reading at the clause level.
- **Separating observation from inference** maps to the **Problem management** skill: initiating investigations and determining resolutions depends on records that distinguish what was seen from what is supposed, and on reading others' records with the same discipline.
- **Evaluating arguments** maps to the **Ownership and topic** and management-input duties: proposals, business cases, and pushback arrive as prose arguments whose evidence and logic must be weighed before the department commits resources.
- **Judging and producing clear writing** maps to the **Systems design** documentation standards and the review role: recognising ambiguous, incomplete, or misleading text in others' work — and never producing it in one's own — is a senior quality gate.

### Practice questions

Present these to the candidate under the timing above; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — True/False/Cannot say on a design constraint**

Passage (from an architectural design): "The service will use the departmental platform's managed database service. Direct database administration access from outside the platform's management plane is not permitted. Application-level access is permitted only via the connection broker, which enforces per-service credentials rotated every 90 days."

Statement: "The design permits an engineer to connect a database administration tool directly to the database from their workstation, provided they use per-service credentials."

- A) True
- B) False
- C) Cannot say
- D) True, if the credentials were rotated within 90 days

**Correct answer: B**

**Explanation:** Two access channels are defined, each with its own rule. Administration access "from outside the platform's management plane is not permitted" — a workstation is outside the management plane, so direct administration access from it is prohibited outright. The per-service credential provision belongs to the other channel — application-level access via the connection broker — and cannot be transplanted to rescue an administration connection. The statement is contradicted: False, and option D fails for the same category reason. This tests recognition of the channel-confusion trap, mirroring a real review error where engineers quote a document's permissive clause without checking which access class it governs — a candidate should treat each rule as bound to its stated subject.

**Question 2 (easy) — Comprehension of a security advisory**

Passage (advisory): "CVE-2026-1188 affects the cluster management daemon in versions 3.0 to 3.6 inclusive. Version 3.7 contains the fix. Exploitation requires network access to the management port and valid read-only credentials. Systems where the management port is restricted to the dedicated administration VLAN are still vulnerable but exploitable only from that VLAN. Patching to 3.7 is the only complete remediation."

Statement: "A system running version 3.6 with its management port restricted to the administration VLAN cannot be exploited."

- A) True
- B) False
- C) Cannot say
- D) True, because VLAN restriction prevents network access

**Correct answer: B**

**Explanation:** The advisory addresses this exact configuration: restricted systems "are still vulnerable but exploitable only from that VLAN". "Cannot be exploited" is therefore contradicted — exploitation remains possible from within the administration VLAN. False, and option D repeats the error the advisory pre-empts. This tests recognising scope-narrowing language: "exploitable only from that VLAN" narrows the attack surface without closing it — a materially different claim from "not exploitable". A strong candidate's answer notes the real decision this drives: a narrowed-but-open vulnerability may justify a scheduled patch rather than an emergency one, but never justifies no patch.

**Question 3 (easy) — Cannot say on a supplier report**

Passage (supplier quarterly report): "All 14 changes we implemented this quarter completed successfully within their approved windows. Our engineer attendance at scheduled maintenance was 100%. We responded to all Priority 1 incidents within contractual response times."

Statement: "The supplier resolved all Priority 1 incidents within contractual resolution times."

- A) True
- B) False
- C) Cannot say
- D) True, because response performance was fully compliant

**Correct answer: C**

**Explanation:** The report claims compliant response times — the interval to acknowledging and beginning work. Resolution times — the interval to restoring service — are a different contractual measure, and the report says nothing about them. No support, no contradiction: Cannot say. Option D commits the substitution the report's drafting invites: response and resolution are adjacent concepts, and a fluent paragraph of positives encourages the reader to extend the glow to measures not mentioned. This tests the senior discipline exercised through the duty to work with and support third parties: listing the contract's measures first, then reading the report against the list, treating every absent measure as an open question for the meeting.

**Question 4 (easy) — Judging review feedback quality**

A junior engineer's design document states: "Backups will be taken regularly and stored safely." As the senior reviewer, which written comment is most effective?

- A) "Vague — rewrite."
- B) "This needs to specify: backup frequency and type (e.g. nightly incremental, weekly full), retention period, storage location and its separation from the primary site, encryption requirements, and how restoration will be tested and how often. Each should trace to the service's RPO/RTO tier."
- C) "Fine at this stage — details can come later."
- D) "Please see me about this section."

**Correct answer: B**

**Explanation:** Review comments are teaching instruments and quality gates simultaneously, and option B performs both roles: it names each missing element and supplies the organising principle — trace to the RPO/RTO tier — that lets the engineer close this gap and never open it again. Option A is accurate and useless: "vague" identifies the symptom without transferring any knowledge of what sufficiency looks like. Option C waves through a section that is not detailed-later material — "stored safely" could conceal a same-site backup that fails exactly when needed. Option D may be a kind supplement but as the sole written record leaves nothing in the document trail. This tests whether the candidate makes the standard explicit in review comments, converging the **Systems design** review duty with the **Modern development standards** duty to support others in applying standards.

**Question 5 (moderate) — Inference across contract clauses**

Passage (contract extract): "Clause 12.1: The supplier shall complete hardware repairs within 8 working hours of fault confirmation. Clause 12.2: Where a repair requires parts not held in the supplier's UK depot, the repair period is extended to 3 working days. Clause 12.3: Faults confirmed after 14:00 are treated as confirmed at 09:00 the next working day. Clause 12.4: Repair periods for equipment at sites more than 100 miles from the supplier's depot are extended by 4 working hours."

A fault on equipment at a site 140 miles from the depot is confirmed at 15:30 on Monday. The repair requires only parts held in the UK depot. Working hours are 09:00–17:00. By when must the repair be complete?

- A) Tuesday 17:00
- B) Wednesday 13:00
- C) Tuesday 13:00
- D) Thursday 09:00

**Correct answer: B**

**Explanation:** Assemble the obligation clause by clause. Clause 12.3: confirmation at 15:30 Monday is after 14:00, so treat confirmation as 09:00 Tuesday. Clause 12.1: base period 8 working hours. Clause 12.4: site is 140 miles (> 100), adding 4 working hours — total 12 working hours. Clause 12.2 does not apply (parts are in the depot). Count 12 working hours from Tuesday 09:00 in an 8-hour working day: Tuesday consumes 8 hours; the remaining 4 hours run Wednesday 09:00–13:00. Deadline: Wednesday 13:00 — option B. Option A forgets the distance extension; option C additionally ignores the after-14:00 reset; option D wrongly applies the parts extension. This tests exactly how real support contracts compute: no single clause states the answer, and the deadline a department can enforce emerges only from correct assembly.

**Question 6 (moderate) — Reading a standards document's exception structure**

Passage: "All infrastructure changes must be implemented through the automated deployment pipeline. Exception 1: emergency changes during a declared major incident may be implemented manually, provided each command is logged and the change is reconciled into the pipeline's configuration repository within 5 working days. Exception 2: changes to the pipeline itself follow the pipeline-change procedure in Annex C. No other exceptions apply. Reconciliation failures are reported monthly to the service board."

Statement: "A manual change made during a declared major incident, with all commands logged, complies with the standard even if it is never reconciled into the configuration repository."

- A) True
- B) False
- C) Cannot say
- D) True, provided the failure is reported to the service board

**Correct answer: B**

**Explanation:** Exception 1 grants its permission on two conditions joined by "provided": command logging AND reconciliation within 5 working days. A change that is never reconciled fails the second condition, so the exception's protection lapses and the change stands non-compliant with the base rule: False. Option D misreads the final sentence — reporting reconciliation failures to the board is a monitoring mechanism that makes non-compliance visible; visibility is not absolution. This tests recognition of a drafting pattern worth internalising for **Modern development standards** work: standards commonly pair a permission with trailing obligations precisely because the permission's moment is when discipline is weakest and the follow-up is most likely to be dropped.

**Question 7 (moderate) — Main point of a governance passage**

Passage: "Technology roadmaps fail less often from poor technical judgement than from poor connection to decisions. A roadmap that lists upgrade dates without linking them to budget cycles arrives as information, not as a proposal, and is noted rather than funded. The effective roadmap names, for each item, the decision it requires, the decision-maker, the date by which deciding is still cheap, and the cost of deciding late. Engineers drafting roadmaps should therefore spend as much care on the decision architecture as on the technology choices — the two are equally load-bearing."

What is the main point?

- A) Technology roadmaps usually contain poor technical judgement.
- B) Roadmaps succeed when they are structured around the decisions they require — decision, decider, deadline, and cost of delay — not just around technology choices.
- C) Budget cycles should be reformed to accommodate technology roadmaps.
- D) Engineers should delegate roadmap drafting to decision-makers.

**Correct answer: B**

**Explanation:** The passage's argument runs: the common failure is weak connection to decisions, not weak technology judgement (first sentence — which option A inverts); an unconnected roadmap is "noted rather than funded"; the remedy is the four-element decision architecture; and the conclusion assigns that architecture equal weight with the technical content. Option B captures exactly this. Option C proposes reforming budget cycles — the passage adapts roadmaps to cycles, not the reverse. Option D confuses naming decision-makers within the roadmap with handing them the pen. This tests the comprehension exercise directly, and a strong candidate's answer also connects the content to the role-level duty to provide input into technology roadmaps — the four-element structure is directly usable in real roadmap items.

**Question 8 (moderate) — Observation versus inference in a problem record**

Passage (problem record extract): "Between 2 May and 20 June, the virtualisation platform logged 11 unplanned guest restarts, all on hosts H3 and H4, all between 01:00 and 04:00. H3 and H4 are the only hosts fitted with network cards from Vendor Q. Firmware on those cards is two releases behind current. The overnight backup traffic peak occurs between 01:00 and 04:00. No guest restarts occurred on hosts H1, H2, or H5 in the period."

Which statement is supported by the passage?

- A) The Vendor Q network card firmware caused the guest restarts.
- B) The restarts cluster on the only two hosts with Vendor Q cards and coincide with the backup traffic peak — a correlation that makes the card firmware under load a strong hypothesis for investigation, though causation is not yet established.
- C) Updating the firmware will stop the restarts.
- D) Backup traffic caused the restarts, and the network cards are irrelevant.

**Correct answer: B**

**Explanation:** The passage supplies correlations of unusual quality: perfect host specificity and consistent time-locking to the backup peak. That justifies exactly what option B claims — a strong, focused hypothesis awaiting confirmation, not a proven cause: some third factor could distinguish H3/H4 (hardware batch, configuration, workload placement). Options A and C leap the gap — C doubly, converting unestablished cause into guaranteed cure. Option D discards half the evidence pattern to crown the other half. This tests the daily grammar of the **Problem management** skill: initiating and monitoring actions to investigate patterns and trends means writing records that say "correlates, hypothesis, next test" rather than "caused" — because records that overclaim get actioned as fact.

**Question 9 (moderate) — Evaluating a proposal's argument**

Passage (proposal from a team member): "We should adopt the new container platform for all our services immediately. The pilot ran for a month with zero incidents, which proves the platform is more reliable than our current one. Also, Vendor R says most government departments are moving to containers, so we risk being left behind. Migrating everything this quarter avoids running two platforms in parallel, which would double our operational burden."

Which is the strongest criticism of the argument?

- A) Container platforms are inherently less secure, so the proposal should be rejected.
- B) A one-month, presumably small-scale pilot cannot "prove" superior reliability against a production platform's track record; the vendor's claim is both self-interested and irrelevant to this department's needs; and big-bang migration trades a manageable parallel-running burden for concentrated cutover risk — the argument's three supports are all weaker than presented.
- C) The team member lacks the seniority to make proposals.
- D) Zero incidents in the pilot proves the pilot was not tested hard enough.

**Correct answer: B**

**Explanation:** Audit each support. First: "zero incidents in a month proves more reliable" — a pilot differs from production in scale, load, workload diversity, and duration; absence of incidents in a small sample is weak evidence, not proof. Second: the vendor's "most departments are moving" is an appeal to popularity from a self-interested source. Third: the parallel-running argument counts one cost while omitting the alternative's — migrating everything in a quarter concentrates risk and removes the incremental rollback phased migration preserves. Option B catches all three. Option A rejects via an unargued generalisation. Option D overcorrects. Option C attacks the person. This tests the senior skill of naming each weakness precisely while preserving what survives — the correct response, which a strong candidate volunteers, endorses a phased expansion of the pilot, which the evidence does support.

**Question 10 (hard) — Interacting policy documents**

Passage: "Departmental policy P-14: Production data must not leave the production environment. Anonymised extracts are exempt, provided anonymisation follows Standard S-9. Platform guideline G-3: Test environments should use realistic data volumes; teams may request production-scale synthetic data generation, or S-9-compliant anonymised extracts, through the data management team. A project's test plan states: 'Performance testing will use a copy of the production customer database, imported directly into the test environment, with anonymisation to follow in a later phase once the urgent performance deadline has passed.'"

Which assessment of the test plan is correct?

- A) Compliant — G-3 permits realistic data in test environments.
- B) Compliant — anonymisation is planned, satisfying P-14's exemption.
- C) Non-compliant — the plan moves un-anonymised production data out of production, breaching P-14; the exemption applies only to extracts anonymised per S-9 before leaving, and G-3 offers the compliant alternatives the plan should use.
- D) Cannot be assessed without knowing the performance deadline.

**Correct answer: C**

**Explanation:** Sequence is the crux. P-14 prohibits production data leaving production; the exemption covers "anonymised extracts" — data that is already anonymised (per S-9) when it leaves. The plan imports the raw customer database first and anonymises "in a later phase": at the moment of import, un-anonymised production data has left production — the breach is complete, and later anonymisation cannot retroactively unmake it. Option B fails on exactly this tense: planned anonymisation is not the exemption's condition; completed anonymisation is. Option A misuses G-3: the guideline's "realistic data" is satisfied through the two compliant routes it names, and a guideline cannot override a policy prohibition anyway. Option D mistakes urgency for relevance. This tests reviewing a test plan against interacting policy documents — the constructive close, which a strong candidate volunteers, rejects the import and routes the team to G-3's synthetic-data service.

**Question 11 (hard) — Precision across a long operational passage**

Passage: "The data centre exit programme will migrate 180 services in three tranches. Tranche 1 (60 services, complete) targeted services with no dependencies outside their own tranche. Tranche 2 (80 services, in progress, due end of November) includes all services with dependencies on shared platforms, which were themselves migrated at the end of Tranche 1. Tranche 3 (40 services) contains only services awaiting contractual novation with their suppliers, and its start date will be set when the last novation completes; legal advises novations complete 'by January at the earliest'. Any service failing its post-migration verification is rolled back and rejoins the schedule at the next tranche boundary. Two Tranche 2 services have so far failed verification and been rolled back."

Which statement is supported by the passage?

- A) Tranche 3 will start in January.
- B) The two rolled-back services will be re-migrated within Tranche 2 before the end of November.
- C) The shared platforms were migrated before any Tranche 2 service, and the two rolled-back services' next migration opportunity is the Tranche 2/3 boundary — meaning their re-migration timing inherits Tranche 3's novation-dependent uncertainty.
- D) Exactly 118 services have successfully migrated so far.

**Correct answer: C**

**Explanation:** Verify each option against the text's exact machinery. Option A converts "by January at the earliest" — a floor — into a January start: doubly unsupported. Option B contradicts the rollback rule: failed services rejoin "at the next tranche boundary", not within their original tranche. Option D miscounts: Tranche 2 is "in progress" with an unstated number migrated so far. Option C assembles only stated facts: shared platforms migrated before Tranche 2's dependent services; the rolled-back pair's next boundary is Tranche 2/3; and Tranche 3's start awaits novations of uncertain date. This tests whether a candidate surfaces the chain's practical sting — two services sitting un-migrated for an unbounded period on account of a legal process unrelated to them — exactly the kind of second-order schedule risk a candidate should spot and raise, and the method: extract the rules, then run the specific case through them mechanically.

**Question 12 (hard) — Judging an escalation communication**

A team's overnight change failed and was rolled back cleanly; the service ran normally throughout, but the failure consumed the quarter's last agreed maintenance window, and the postponed upgrade now blocks a dependent programme's milestone. An email must go to the service owner and the programme manager. Which draft is most effective?

- A) "Last night's change encountered an unexpected issue and was rolled back successfully with no service impact. We will reschedule in due course and keep you informed."
- B) "Last night's upgrade failed at the storage firmware step and was rolled back per plan; the service was unaffected throughout. However, this consumed the quarter's final agreed window, and the upgrade now blocks Programme X's data migration milestone (due 15th). Options: (1) an emergency window next week — needs service owner approval by Thursday, brings the milestone back on track, carries standard change risk with the failure cause now understood and fixed; (2) wait for next quarter's windows — no additional change risk, milestone slips ~6 weeks. The failure cause was a firmware/driver mismatch our pre-checks missed; the check is now added. Recommendation: option 1. Please confirm by Thursday."
- C) "The change failed due to circumstances beyond our control. The programme's milestone may be affected. We are investigating and will report when investigations conclude."
- D) "Full incident timeline attached (14 pages). All decisions on rescheduling rest with the service owner and programme manager; we await your instructions."

**Correct answer: B**

**Explanation:** Judge each draft by whether its recipients can decide and act. Option B delivers the complete decision package: what happened and its true status; the consequence that makes this their business, with the date attached; genuine options with the decision-relevant attributes of each; the cause and its closure; and a recommendation with a response deadline. Option A is soothing vagueness: "in due course" conceals the milestone impact. Option C is worse than silence: "beyond our control" deflects and "may be affected" hedges a known consequence. Option D drowns the decision in data and mistakes abdication for deference. This tests the role level's communication standard: bad news travels fastest, fullest, and with options attached — the email that lets a service owner decide well in four minutes is a senior engineering artefact as surely as any design.

### Administration tips

- **Score for whether a candidate tracks which subject a rule binds** — access classes, tranches, exception scopes are frequently transplanted incorrectly.
- **Watch for whether a candidate holds a strong correlation without asserting causation**, in a problem-record item, using calibrated language.
- **Note whether a candidate reads a report's silences** — an omitted measure is often the point of a supplier or service passage.
- **Keep timing consistent** across candidates for this level.
- **Use the escalation-email item (Question 12) to observe whether a candidate values a decision-ready communication** over one that is merely accurate or merely comprehensive.

### Common pitfalls to watch for when scoring

- **Rewarding an answer built from expertise contamination** — the more a candidate knows, the more they must verify the passage actually says it.
- **Missing tense-blindness in an exemption item** — conditions stated in the completed form are not met by plans to complete them.
- **Crediting an answer that extends praise across adjacent metrics** the passage does not actually cover.
- **Accepting a floor (e.g. "no earlier than") read as if it were a scheduled date.**
- **Rewarding an answer that mistakes visibility for permission** — reporting a breach to a board makes it visible, not compliant.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement test (SJT) presents realistic workplace scenarios and asks the candidate to evaluate possible responses — most-effective, most-and-least-effective, full ranking, or independent effectiveness ratings. Scoring reflects the consensus of experienced professionals and the organisation's valued behaviours. The typical format is an online test of 15 to 25 minutes with 10 to 20 scenarios, usually generously timed, because it measures judgement rather than speed.

At senior level, the scenarios change character. They assume technical competence and probe the judgement that surrounds it: reviewing work that could have been done better personally, handling a team member's mistake versus one's own, when to overrule and when to coach, how to manage underperforming third parties, how to respond when management pressure meets engineering evidence, and how to balance delivery, risk, and people when they pull apart. The distractor options are correspondingly subtler — competent-looking responses that quietly hoard authority, skip a stakeholder, teach nothing, or optimise this week at the team's long-term expense.

Employers use SJTs for senior infrastructure engineers because, at this level, judgement is the job. The role summary carries duties no test of technical knowledge can sample: leading and directing infrastructure specialist teams, working with and supporting third parties, consulting specialists effectively, owning issues to resolution, providing management input, and reviewing others' work. The behaviours that score well are consistent: protect users and services first; keep records honest; escalate and delegate proportionately; correct work firmly and people kindly; give credit and take responsibility; and treat every incident, review, and supplier failure as material for prevention and learning.

### How this assessment maps to the role

- **Leading and reviewing** maps to the role-level duty to lead and direct infrastructure specialist teams and the **Systems design** duty to review the designs of others: scenarios test whether corrections build capability or dependency.
- **Ownership at scale** maps to the **Ownership and topic** skill: owning issues until resolution or handover now includes issues surfaced by a team, suppliers, and one's own past decisions.
- **Consulting and escalating** maps to the **Problem management** skill — effectively consulting specialists where required, determining resolutions and preventative measures — and to knowing when a decision belongs above the candidate.
- **Third-party judgement** maps to the duty to work with and support third parties in providing infrastructure services: scenarios probe constructive challenge, contractual awareness, and proportionate escalation.
- **Operational integrity under pressure** maps to the **IT infrastructure** and **Information security** skills: scenarios test whether policy, security controls, and honest records survive deadlines and seniority.
- **Management input** maps to the duty to provide input into workforce, budget, roadmaps, projects, and tasks: scenarios test candour, evidence, and the courage to give unwelcome advice well.

### Practice questions

Present these to the candidate under generous or untimed conditions; do not reveal the correct answers or explanations until after they have responded.

**Question 1 (easy) — Reviewing work done differently from how the candidate would have done it**

A capable engineer on the candidate's team submits a design for a monitoring deployment. It is sound, meets every requirement, and will work — but it uses a layout the candidate personally finds inelegant; the candidate's own approach would be marginally tidier with no material difference in outcome, cost, or risk. What is the most effective response?

- A) Require rework to the candidate's approach — consistency with the senior engineer's style keeps the estate uniform.
- B) Approve it, noting anything genuinely important, and keep the stylistic preference private or offer it explicitly as an optional observation, clearly separated from the approval.
- C) Approve it but redo it personally after hours.
- D) Approve it while making clear the candidate would have done better.

**Correct answer: B**

**Explanation:** The review's purpose is to verify requirements, risk, and standards — all satisfied here. Option B approves on the merits and handles the preference honestly, respecting the engineer's ownership while sharing perspective. Option A converts personal taste into mandatory rework: it costs real time, teaches the team that approval depends on mimicking the reviewer, and suppresses the design diversity from which teams learn. Option C is quiet contempt with overtime: the estate ends up with a design its named owner did not produce and cannot fully support. Option D approves while diminishing. This tests whether a candidate recognises that review authority is held in trust for quality, not for taste — seniors who can approve work they would have done differently, without comment tax, are the ones whose genuine objections get heard.

**Question 2 (easy) — A team member's production mistake**

An engineer directed by the candidate makes an error during a routine change, causing a 20-minute outage to an internal service. They fix it, then come visibly shaken and report everything immediately and accurately. It is their first significant mistake; the change process they followed had no step that would have caught the error. What is the most effective response?

- A) Thank them for the immediate honest report, review what happened together, add the missing verification step to the change process, and make sure the incident record reflects the process gap as well as the action.
- B) Formally document the error in their performance record as a caution to others.
- C) Reassure them it does not matter and move on without further action.
- D) Take over their remaining changes for the next month to prevent recurrence.

**Correct answer: A**

**Explanation:** Two assets need protecting: the engineer's future candour and the system's future safety — option A protects both. Thanking the honest report first is not softness; it is incentive engineering: the team calibrates on what happens to the first person who self-reports, and punishing candour purchases a future of concealed errors, which are the expensive kind. The joint review converts the mistake into learning; fixing the process gap addresses the actual root cause; and an incident record that names the process gap keeps organisational memory honest. Option B punishes exactly the behaviour that needs repeating, for an error the process invited. Option C wastes the incident. Option D infantilises a capable engineer. This tests the **Problem management** skill applied to people: determining the preventative measure, which is almost never "fear".

**Question 3 (easy) — Supplier engineer bypassing agreed procedure**

During a scheduled maintenance visit, a third-party engineer is observed skipping the agreed pre-work verification checklist "because we did the same job last month and it was fine". The work itself is proceeding without apparent problems. What is the most effective response?

- A) Let the work continue — the engineer's experience substitutes for the checklist.
- B) Pause the work; require the checklist to be completed before proceeding; afterwards, raise the deviation with the supplier's service manager through the agreed route, factually and without personalising it.
- C) Say nothing now but log a formal complaint demanding a different engineer in future.
- D) Complete the checklist personally while the engineer continues working.

**Correct answer: B**

**Explanation:** The checklist is part of the agreed method statement — the contractual and safety basis on which the supplier works on departmental infrastructure — and "last month was fine" is precisely the reasoning checklists exist to defeat. Option B acts at both required levels: operationally, pause-and-complete restores the control before risk accrues; contractually, the deviation goes to the supplier's service manager. Option A substitutes confidence for verification. Option C converts a correctable moment into a delayed grievance. Option D absorbs the supplier's obligation into personal workload and muddles accountability for the verification. This tests the duty to work with and support third parties: holding the agreed standard warmly and immediately, and routing performance signals to where they can change behaviour.

**Question 4 (easy) — Credit for a team's work**

At a service review, a director praises the storage migration "you delivered" — but the design and the hardest implementation work came from two engineers on the candidate's team; the candidate provided direction and reviews. What is the most effective response?

- A) Accept the praise — leaders represent their teams.
- B) Briefly and specifically credit the two engineers by name and contribution, then move on with the meeting's business.
- C) Deflect all credit entirely — "I did nothing, it was all the team".
- D) Say nothing now but tell the engineers privately that the director was pleased.

**Correct answer: B**

**Explanation:** Option B is accurate, proportionate, and consequential: specific, named credit in the room where reputations are made costs fifteen seconds, corrects the record, and materially affects how directors perceive — and later develop and promote — the engineers. It also strengthens the candidate: leaders who visibly grow strong people are read as strong leaders. Option A quietly banks the team's work as the candidate's own. Option C over-rotates into false modesty and gives the director no usable information. Option D delivers the private half and withholds the public half, where the career value lives. This tests credit allocation as a core mechanic of leading and directing teams.

**Question 5 (moderate) — Pressure to understate a risk in management input**

Finalising input to the infrastructure roadmap, analysis shows the storage estate needs replacement within 18 months; beyond that, failure rates and unsupported firmware make a major incident materially likely. A head of service, managing a difficult budget round, asks the candidate to "soften the storage line — say it's a risk we're monitoring, not a hard requirement — so the roadmap doesn't look like a shopping list". What is the most effective response?

- A) Soften the wording as asked — budget strategy is the head of service's call.
- B) Refuse and submit the original wording over their objection without discussion.
- C) Keep the evidence and the 18-month requirement intact, and offer to reframe presentation, not substance — for example, phasing the spend, pairing it with the risk of deferral in incident-cost terms, and distinguishing "funded now" from "committed next cycle" — while being clear a hard requirement cannot be described as optional monitoring.
- D) Soften the wording but keep a private copy of the original analysis as protection.

**Correct answer: C**

**Explanation:** Separate what is negotiable from what is not. Presentation — phasing, framing, sequencing against the budget cycle — is legitimately the head of service's craft, and option C engages with it genuinely. Substance — the evidence-based 18-month requirement — is the candidate's to state accurately: management input that describes hard requirements as "monitored risks" is false input, and decisions built on it are built on sand. Option A trades professional accuracy for organisational comfort. Option B wins the wording and loses the relationship and probably the funding. Option D is the worst of both: the official record misleads while a private file protects only the candidate. This tests the senior pattern for advice under pressure: flex the framing all the way, flex the facts not at all, and bring alternatives that make honesty affordable.

**Question 6 (moderate) — A specialist's advice contradicts the candidate's diagnosis**

Leading a problem investigation into database corruption events, the candidate develops a hypothesis: a storage-layer caching fault. The department's database specialist is consulted and disagrees — she believes the corruption pattern indicates an application-level defect in how transactions are retried, and points to features of the corrupted records the candidate's analysis did not explain. Her area is databases, not storage; the candidate's is the reverse. What is the most effective response?

- A) Proceed with the original hypothesis — leading the investigation and storage expertise both point that way.
- B) Defer entirely to her — specialists outrank generalists in their own area.
- C) Treat the disagreement as information: her observations explain evidence the candidate's does not, so design the next investigative step to discriminate between the two hypotheses — for example, testing whether corruption occurs with retries disabled or on a different storage path — and follow the evidence.
- D) Escalate the disagreement to management to decide between the hypotheses.

**Correct answer: C**

**Explanation:** The scenario embeds the decisive detail: her hypothesis explains features of the evidence the candidate's does not — in diagnostic reasoning, explanatory coverage is the currency, and a hypothesis that accounts for more of the pattern earns priority attention regardless of whose domain it sits in. Option C's real strength is refusing to resolve by authority in either direction: investigations are settled by discriminating tests, not by seniority or deference. Option A carries a bias worth naming: investigators favour hypotheses in their own competence area because they can act on them. Option B abdicates the leadership the investigation needs. Option D escalates a question management cannot answer. This tests the **Problem management** skill's "effectively consult specialists where required", completed: consulting genuinely, weighing explanatory power over territory, and letting designed evidence arbitrate.

**Question 7 (moderate) — Deadline versus unresolved test failures**

A network upgrade is being implemented for a programme go-live in ten days. Integration testing has one persistent failure: under a specific failover condition, reconnection takes four minutes instead of the specified thirty seconds. The programme manager proposes: "Ship it — failover is rare, four minutes is survivable, and we can fix it after go-live." The failure mode would, during business hours, disconnect around 400 case-workers mid-task. What is the most effective response?

- A) Accept the proposal — the programme manager owns the go-live decision.
- B) Block the go-live until the failure is fixed, regardless of the programme's constraints.
- C) Ensure the risk is decided at the right level with full information: quantify the exposure (probability of failover, 400 users, four-minute impact, working recovery), identify what a fix or mitigation costs in schedule, and put the accept/fix/mitigate decision to the service owner and programme board with a recommendation — recorded, whichever way it goes.
- D) Agree to ship, but quietly keep an engineer working on the fix without telling the programme.

**Correct answer: C**

**Explanation:** The disagreement is really about decision rights and information quality. The programme manager's framing minimises through vagueness; quantification (400 case-workers, four minutes, mid-task) is the information that makes the risk decidable — but the decision to accept degraded failover on a production service belongs to whoever owns the service risk. Option C routes it there with genuine options and a recommendation, then records the outcome. Option A treats delivery authority as risk authority. Option B makes the candidate the unilateral decider in the other direction. Option D splits the difference dishonestly. This tests whether a candidate recognises that ensuring services are integrated, delivered, and operated as required includes ensuring the risk decisions around them are made properly.

**Question 8 (moderate) — Team member repeatedly bypassed by a stakeholder**

A project manager has begun routing all infrastructure requests directly to the candidate, bypassing the assigned engineer — after two occasions where the engineer's answers were slower and more cautious than the manager wanted. The engineer has noticed and is demoralised. The manager's requests are reasonable in content. What is the most effective response?

- A) Keep answering — the work is flowing and the manager is satisfied.
- B) Redirect the manager back to the engineer, explain that the engineer speaks for infrastructure on this project, privately check whether the engineer's slower answers reflected a support gap that should be closed, and stay available to both as an escalation route.
- C) Tell the engineer to toughen up — stakeholder preferences are a fact of life.
- D) Confront the manager about undermining the team.

**Correct answer: B**

**Explanation:** The bypass is quietly expensive: it centralises project knowledge in the candidate, tells the engineer their assignment is nominal, and teaches every observing stakeholder that the way to faster answers is upward routing. Option B repairs the structure at both ends: a courteous, firm re-point to the manager, and a diagnostic conversation with the engineer to identify whether the slow answers reflected a confidence gap, a knowledge gap, or correct caution the manager disliked — each has a different remedy. Option A optimises this month's flow at the cost of the team's development. Option C hears the demoralisation and returns a slogan. Option D makes it adversarial before making it better. This tests whether a candidate recognises that delegation which is defended and developed is the difference between directing a team and merely fronting one.

**Question 9 (moderate) — Discovering an undocumented dependency during planning**

Planning a decommissioning, a legacy server scheduled for shutdown next week is discovered to still receive a nightly file from a payroll process — an undocumented dependency nobody on the current team knew existed. The decommissioning is part of a funded programme with a published schedule; delaying one server is possible but requires a change to the programme plan and will draw attention to the discovery. What is the most effective response?

- A) Shut it down on schedule — one nightly file is probably vestigial, and the schedule is published.
- B) Pause this server's decommissioning; trace the dependency to its owner and confirm whether it is live; if live, re-plan its migration properly and adjust the programme schedule through the change process — reporting the discovery, and checking what else the dependency-mapping missed.
- C) Shut it down but keep a recent backup so it can be restored if payroll complains.
- D) Delay quietly without telling the programme, absorbing the schedule slip into other tasks.

**Correct answer: B**

**Explanation:** "Nightly file from a payroll process" is among the most dangerous phrases in decommissioning: the consumer may be invisible until month-end, and payroll failures convert directly into people not being paid. Option B follows the full professional arc: pause the one server, trace and confirm liveness, re-plan through the change process visibly, and check what else the dependency-mapping missed — converting one catch into systematic assurance, the **Problem management** move of treating the near-miss as evidence about the method. Option C is recovery theatre. Option D fixes the risk while corrupting the record. This tests whether a candidate treats the discovery as the programme's good luck, and handles it so it stays that way.

**Question 10 (hard) — A candidate's own past decision is the problem**

Two years ago, the candidate selected and implemented the backup platform the department now uses. A new engineer, preparing a restore test, presents careful evidence that the platform's deduplication configuration — as originally designed — silently degrades restore performance as the estate grows, and restores of the largest systems would now breach their recovery time objectives by hours. The finding is correct; the design choice was the candidate's; nobody else has connected it. What is the most effective response?

- A) Validate the finding, credit the engineer, own the original decision openly — including to the head of service — and lead the remediation: quantify current exposure, mitigate the largest systems first, and fix the configuration pattern for the estate.
- B) Validate the finding and lead remediation, but present the original design choice as a collective decision of the time.
- C) Thank the engineer, downplay the urgency, and schedule remediation quietly across the next year to avoid drawing attention to the original choice.
- D) Challenge the methodology of the finding until the evidence is unanswerable.

**Correct answer: A**

**Explanation:** The engineering is straightforward — RTO breaches on the largest systems are a live continuity exposure demanding quantification and prioritised mitigation. The test is whether ego taxes the response, and option A pays no tax: validation on the evidence, named credit to the engineer, open ownership of the decision including upward, and remediation led at the pace the exposure warrants. Option B remediates fully but launders the authorship. Option C prices reputation above recovery objectives. Option D deploys seniority as friction against unwelcome evidence. This tests whether a candidate is harder on their own past work than anyone else would dare to be — the measure this scenario is built to surface.

**Question 11 (hard) — Competing crises with a team to direct**

At 09:00 two situations land simultaneously: (1) the payments-supporting database cluster has lost one of its two nodes — service is running on the survivor with no redundancy, and the vendor needs diagnostic data within the hour to meet today's fix window; (2) a security advisory requires an emergency assessment of whether internet-facing infrastructure is exposed to an actively exploited vulnerability, with the security team needing the infrastructure analysis by noon. Two capable engineers are available: one strong on databases, one strong on networks; both tasks cannot be personally driven at once. What is the most effective response?

- A) Take the database issue personally — payments outranks everything — and let the security assessment wait until it is done.
- B) Assign the database engineer to the cluster with the vendor deadline as their brief, assign the network engineer to the exposure assessment with the security team, define for each what done looks like and the escalation trigger that brings them back, and position to supervise both, unblock either, and handle communications.
- C) Split both engineers across both tasks so each crisis has redundancy.
- D) Ask the head of service to decide which crisis matters more.

**Correct answer: B**

**Explanation:** The scenario is engineered so both demands are legitimate, deadlined, and parallel — the test is whether a candidate multiplies themselves through the team or collapses into the strongest individual contributor available. Option B is direction as the role level defines it: match specialists to their strengths, give each a crisp brief, define escalation triggers in advance, and occupy the position only the candidate can hold — cross-crisis awareness, unblocking, and stakeholder communication. Option A abandons a same-day security deadline to do work the database engineer can do. Option C halves everyone. Option D escalates a question that belongs to the candidate. This tests whether the candidate's briefs make both engineers succeed without direct intervention — what "lead and direct infrastructure specialist teams" builds toward.

**Question 12 (hard) — Sustained under-resourcing versus quiet heroics**

For three months a team has covered a vacancy and a long-term absence by working substantially beyond sustainable levels — late changes, skipped improvement work, and two near-miss errors attributed to fatigue. Management's view, based on green service dashboards, is that "the team is coping well". A major migration is now being scoped on the assumption that current output continues. What is the most effective response?

- A) Keep absorbing — the pride is real, the services are green, and the vacancy will eventually be filled.
- B) Present management with the true position, evidenced: the coverage cost (deferred maintenance, abandoned improvement work, the two fatigue-linked near-misses), the unsustainability trend, and the migration assumption it invalidates — with options (backfill, descope, re-sequence) and a recommendation; meanwhile, deliberately shed lower-value work to protect safety-critical attention.
- C) Unilaterally cut services back to sustainable levels and let the dashboards go amber until management notices.
- D) Tell the team to slow down quietly while continuing to report full capacity upward.

**Correct answer: B**

**Explanation:** The green dashboards are the trap: they are true about services and false about the system producing them, because the team is converting its own reserves into service continuity, and the two near-misses are leading indicators of where that conversion ends. Option B does the senior duty in full: workforce input is precisely the role level's remit, and input that lets a migration be scoped against phantom capacity is input withheld. The evidence structure turns "we're tired" into a risk narrative management can act on. Option A extends the heroics until the near-misses stop being near. Option C makes the point through service degradation. Option D falsifies upward while decelerating downward. This tests whether the candidate treats the courage to report the true cost of a "green" service as core to leading a team, rather than spending one.

### Administration tips

- **Score for whether a candidate's review comments separate requirement/risk/standard issues from personal preference**, labelling the latter optional.
- **Watch for whether a candidate's accountability response, when their own past decision is the problem, validates, credits, owns, and remediates** — in that order, and openly.
- **Note whether a candidate pre-defines escalation triggers** when delegating, rather than leaving the return-to-me condition implicit.
- **Because these scenarios reward quantified argument**, check whether a candidate converts instinct into numbers (users affected, minutes, near-misses) before making a case.
- **Use the resourcing item (Question 12) to observe whether a candidate treats a "green" dashboard as potentially concealing an unsustainable system**, rather than as reassurance.

### Common pitfalls to watch for when scoring

- **Rewarding an answer where the candidate does the crisis personally** rather than assigning, briefing, and supervising a capable team.
- **Crediting taste enforced as standard** — requiring rework to personal style, or approving with diminishment.
- **Missing when a candidate's response punishes candour** — formal cautions for self-reported process-gap errors, softened records, private files should all score low.
- **Accepting an answer that resolves a factual disagreement by authority** (seniority, specialist deference, management escalation) rather than by designed evidence.
- **Rewarding an answer that trades substance under presentation pressure** — describing a hard requirement as optional, a risk as monitored, or capacity as full.

## Conclusion

This document has given you a substantial set of assessment material for the four types most relevant to a senior infrastructure engineer: cognitive ability, numeric reasoning, verbal reasoning, and situational judgement, calibrated to senior-level texture throughout.

The cognitive section tests separating recurring incident signatures from noise, testing proposals against failure domains, finding the missing negative-path test condition, propagating placement constraints to their forced conclusion, weighing anecdote against instrumentation, and carrying an unresolvable requirement conflict back to its design authority with evidence and options. The numeric section tests converting availability targets into felt minutes, projecting growth through step changes, computing contractual figures from raw counts rather than flattering summaries, pricing options from unit rates, and reconciling conflicting sources to the definition that governs them. The verbal section tests holding clauses to their stated subjects and tenses, assembling deadlines from scattered contract provisions, calibrating correlation against causation, and judging communications by whether the recipient can decide well. The situational judgement section tests the judgement seniority actually consists of: approving work done differently, protecting candour after mistakes, crediting a team in the rooms that matter, keeping substance intact under presentation pressure, directing parallel crises through others, and being harder on one's own past decisions than anyone else would dare to be.

**Scoring and debrief.** Work through each section's worked answers against the candidate's responses, using the explanations above as an answer key and as talking points. A candidate who reasons well but lands on the wrong answer is a different signal from one who guesses. A short debrief conversation afterwards is often more informative than the raw score, and at this level connects naturally to real development conversations about review habits, delegation, and management input.

**Records and consistency.** Keep a note of the conditions under which the assessment was administered alongside the result, and use the same items and conditions for every candidate assessed for this role level.

**One assessment among several.** This result is one input into a wider decision about whether a candidate can multiply their judgement through systems, suppliers, and people — never the whole of that decision. Pair it with the candidate's experience and a conversation, and revisit the advisory above before it informs any hiring, promotion, pay, performance or disciplinary decision.
