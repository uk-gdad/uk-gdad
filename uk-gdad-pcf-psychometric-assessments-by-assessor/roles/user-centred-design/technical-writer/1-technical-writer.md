# Technical Writer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for technical writer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

A technical writer is an expert practitioner with a deep understanding of technology and the needs of technologists: taking a user-centred approach to explaining government products and services to a technical audience, focusing on specialist content and software documentation, writing blog posts for or on behalf of the technical community, and engaging with the cross-government technical writing and content design communities.

That combination is unusual, and it is worth naming what makes it so. This candidate writes for readers who are frequently more expert than they are in the subject and less expert in what they need to know, which inverts the usual content design relationship. A developer reading API documentation does not need concepts explained; they need to find the one parameter that is behaving unexpectedly, at speed, while something is broken. This role's users arrive impatient, competent and mid-task, and will abandon documentation for a search engine within seconds if it does not answer them. Almost everything in this material is downstream of that.

Three features of the role shape the items. First, the role names deep technical understanding — the candidate is expected to read code, understand architecture and hold their own with engineers, so several items assume technical reasoning rather than only editorial judgement. Second, the role takes responsibility for assuring the quality of more junior colleagues' content and coaching them, so items ask the candidate to diagnose somebody else's work rather than only produce their own. Third, the role is expected to think strategically about content life cycle: documentation that is correct today and unmaintained is a liability rather than an asset, and knowing which is which is a judgement the role requires.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, twelve graduated practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and numeric items for whether the candidate treats a missing section or a decayed page as diagnostic evidence rather than an isolated instance, whether they distinguish content that is unclear from content that is factually wrong, and whether they interrogate a metric before accepting it. Situational judgement items consistently reward action that fixes the mechanism behind a problem, that respects the reader's time pressure and expertise, and that works through engineers rather than around them.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role genuinely uses, presented through practical materials rather than abstract puzzles. At this level the materials are documentation sets, API references, release notes, support tickets, analytics on developer portals, and content produced by colleagues the candidate is coaching.

Typical format: an online test of 15 to 30 minutes covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group at a comparable level.

Three things distinguish this section for a technical writer. First, the reasoning is frequently about a system rather than a text: a support ticket, a search log and an error message are evidence about where documentation is failing, and reading them well is closer to diagnosis than to editing. Second, correctness has a hard edge in this discipline. Content for a general audience can be imprecise and still helpful; a code sample with a wrong parameter name costs a developer twenty minutes and costs the documentation their trust permanently. Several items turn on the difference between content that is unclear and content that is wrong. Third, maintenance matters: documentation decays because the thing it describes changes, and a technical writer who does not think about that ships liabilities. Several questions ask the candidate to weigh whether something should exist at all, given who will keep it current.

### How this assessment maps to the role

- **Diagnosing where documentation fails** maps to **User-centred content design**, showing deep understanding of end-to-end journeys and identifying where journey fixes or content improvements are needed.
- **Technical reasoning** maps to **Technical understanding (user-centred design)**, demonstrating knowledge of the technologies used to build and operate digital services.
- **Error checking** maps to **User-centred content design**, assuring the quality of content from more junior colleagues.
- **Prioritisation** maps to **Agile working**, helping teams prioritise work and adhere to agreed scope.
- **Life cycle reasoning** maps to **User-centred content design**, ensuring content is regularly reviewed and evaluated.
- **Reasoning about audiences and positions** maps to **Stakeholder relationship management** and **User focus**.

### Practice questions

**Question 1 (easy) — Error checking a code sample**

A colleague's documentation includes: "Send a POST request to /v2/users with the header `Content-Type: application/json`. The response returns a `user_id` field." The API reference states the endpoint returns `userId`. Ask for the most important issue.

- A) The prose could be more concise.
- B) The field name in the documentation does not match the API — a developer copying `user_id` into their code will get an undefined value and will spend time debugging their own code before suspecting the documentation, which is the most expensive kind of documentation error.
- C) The header should be in a code block.
- D) The version number should be confirmed.

**Correct answer: B**

**Explanation:** A wrong field name is a different order of problem from an unclear sentence, and the reason is what happens next: the developer's code fails silently or returns undefined, they assume they have made a mistake, and they debug their own work for twenty minutes before considering that the documentation might be wrong. This tests whether the candidate identifies that this sequence is what destroys trust in a documentation set — once a developer has been burned they check the API response directly and stop reading. Option D is a legitimate secondary check. Options A and C are formatting improvements on a page containing a factual error, and prioritising them is the characteristic mistake of reviewing technical content as though it were prose.

**Question 2 (easy) — Deduction from a versioning rule**

A policy states: "Breaking changes may only be released in a new major version, unless the affected endpoint has been formally deprecated for at least six months." A team says: "We changed the response format of /v1/orders last week without a major version bump." Ask which must be true.

- A) The policy was breached.
- B) The endpoint had been deprecated for six months.
- C) Either the endpoint had been formally deprecated for at least six months, or the policy was breached — and separately, whether the change is breaking has not been established.
- D) The change was not breaking.

**Correct answer: C**

**Explanation:** A conditional with a stated exception, plus facts silent on the exception, licenses only the disjunction — but this item has a second layer worth catching. The policy governs *breaking* changes, and "changed the response format" does not establish that the change was breaking: adding an optional field to a response is a format change and is not breaking, while removing or renaming one is. This tests whether the candidate notices both undetermined points at once; option C names both. Options A and B each assume a branch of the first question while taking the second for granted. Option D assumes the opposite. A strong candidate's answer notes this matters directly for a technical writer, since it determines whether the change belongs in release notes as a passing note or as a migration guide.

**Question 3 (moderate) — Diagnosing from support tickets**

The top three support tickets for a developer API are: "How do I authenticate?", "What does error 429 mean?" and "Why is my request timing out?" All three are documented. Ask for the strongest analysis.

- A) Developers are not reading the documentation.
- B) Three heavily documented topics generating the most tickets suggests the documentation exists but is not findable at the moment of need, or is present but does not answer the specific question asked — so the diagnostic step is to look at what the tickets actually say and where the developers had been looking.
- C) The documentation should be rewritten.
- D) Support should point people to the documentation.

**Correct answer: B**

**Explanation:** "It is documented" and "developers can find and use it" are different claims, and the gap between them is where most technical documentation fails. This tests whether the candidate notices that the three topics named share a character worth registering: all are things a developer hits mid-task, under time pressure, usually in the middle of an integration — which means the documentation may be perfectly good and located somewhere nobody reaches from an error message. Option B names the two realistic causes and the cheap diagnostic. Option A blames users, which is both unhelpful and usually wrong. Option C rewrites content that may be correct. Option D treats the symptom, and doing so permanently obscures the problem because tickets stop being visible without the underlying difficulty stopping.

**Question 4 (moderate) — Prioritising documentation work**

The candidate has capacity for one substantial piece of work this quarter: (1) a new API goes to public beta next month with no reference documentation; (2) an existing guide is out of date in three places, generating occasional confusion; (3) a tutorial for a deprecated feature needs rewriting; (4) the team wants a style guide for engineering-authored content. Ask which is strongest, and why.

- A) Item 2, because inaccurate documentation actively misleads.
- B) Item 1, because an API going to public beta without reference documentation is unusable by its intended audience, and the window to produce it before external developers form an impression closes next month.
- C) Item 4, because it would improve everything.
- D) Item 3, because tutorials are high-value.

**Correct answer: B**

**Explanation:** The right frame is what the candidate's input can still change and what happens if it does not. An API released to public beta without reference documentation is not partially usable — an external developer cannot integrate without knowing the endpoints, parameters, and error codes, so the release is effectively blocked for its audience while appearing to have happened. This tests whether the candidate reasons that the window matters too: first impressions of a developer product are formed at first contact and are expensive to change. Item 2 is genuinely harmful and generating occasional confusion rather than blocking anyone, so it goes next. Item 3 is documentation for a deprecated feature, which raises whether it should be rewritten at all rather than marked deprecated and left. Item 4 has real leverage and no deadline. Option A ranks harm correctly and misses that item 1 is a total barrier rather than a partial one.

**Question 5 (moderate) — Content that should not exist**

A twelve-page tutorial explains how to work around a known limitation in a service. Engineering plans to remove the limitation in two months. Ask for the strongest recommendation.

- A) Keep the tutorial; users need it now.
- B) Keep it with a prominent, dated note that the limitation is being removed and the workaround will become unnecessary, and plan its retirement — because an undated workaround guide outlives the problem it solves and then actively misleads people into doing something unnecessary and probably harmful.
- C) Remove it now.
- D) Rewrite it more concisely.

**Correct answer: B**

**Explanation:** Workaround documentation has a specific failure mode: it is written under pressure, it solves a real problem, and then the problem goes away and nobody remembers the page exists. This tests whether the candidate reasons through the consequence — two years later a developer follows a twelve-page workaround for a limitation that was fixed, which is worse than having no documentation because it costs them a day and produces code containing an unnecessary and probably fragile construction. Option B keeps it useful now and builds in the retirement, which is what the role means by ensuring content is regularly reviewed and contributing to continuous improvement. Option A ignores the life cycle entirely. Option C removes something people currently need. Option D improves the prose of a page whose real problem is temporal.

**Question 6 (moderate) — Assuring a colleague's work**

A junior colleague's guide is well written, clearly structured, and describes a configuration process the assessor knows changed three months ago. Ask for the most useful feedback.

- A) Note the factual error and ask them to correct it.
- B) Note the error, and use it to establish how they verified the process — because a well-written guide describing something that no longer works suggests they wrote from an existing source rather than performing the steps, and the habit matters far more than this instance.
- C) Correct it themselves.
- D) Praise the structure and mention the error briefly.

**Correct answer: B**

**Explanation:** The instructive feature is the combination: well written, well structured, and wrong. This tests whether the candidate reasons that this combination almost always means the writer worked from an older document or a colleague's description rather than following the process themselves — and if that is the habit, every guide they produce carries the same risk regardless of how carefully they write. Option B addresses the habit, which is what the role means by coaching and guiding junior colleagues to improve rather than correcting their output. The remedy is simple to state and hard to skip once named: follow the steps yourself, on a real system, before publishing. Option A fixes the instance. Option C removes the learning entirely and makes the candidate a permanent checker. Option D softens the point until it is not made.

**Question 7 (moderate) — Writing for a technical audience**

The candidate is documenting an authentication flow. Ask which approach best serves a developer audience.

- A) A prose explanation of the concepts, followed by examples.
- B) A working code sample first, with the minimum necessary explanation around it and links to conceptual detail — because a developer arriving at authentication documentation almost always wants to make a request work, and will read the concepts afterwards if at all.
- C) A comprehensive conceptual guide covering all authentication options.
- D) A step-by-step tutorial with screenshots.

**Correct answer: B**

**Explanation:** The audience inversion is what decides this. A general-audience reader needs orientation before instruction; a developer arriving at authentication documentation is mid-integration, has a specific goal, and is measuring the page against the time cost of just reading the source. This tests whether the candidate identifies that a working sample they can copy, run and modify serves that directly, and the conceptual material is genuinely useful to the smaller number who need it — after they have something working. Option B also reflects how developers actually learn a new API, which is by making one call succeed and then expanding. Option A inverts the order for this audience. Option C is the comprehensive guide that gets skimmed for a code block. Option D uses a format suited to interface walkthroughs rather than to code.

**Question 8 (harder) — A technically ambiguous instruction**

Documentation states: "Set the timeout value appropriately for your use case." Ask what is wrong, and what it should say.

- A) Nothing; timeout values are context-dependent.
- B) It transfers a decision to the reader without giving them what they need to make it — the useful version states the default, the units, the practical range, what happens at each extreme, and a recommendation for the common case, since "appropriately" is only meaningful to somebody who already knows the answer.
- C) It should specify a value.
- D) It should link to the configuration reference.

**Correct answer: B**

**Explanation:** "Appropriately" is the characteristic failure of technical documentation written by somebody who knows the system: it is true, it is unfalsifiable, and it helps only readers who did not need the sentence. This tests whether the candidate names what a reader actually requires to make the decision, and the list matters — units are omitted surprisingly often and cause real errors, and describing what happens at each extreme is what converts a number into a judgement the reader can make. Option A defends the sentence on the grounds that make it useless, since context-dependence is precisely why the reader needs the parameters of the decision. Option C over-corrects: a single prescribed value would be wrong for many readers. Option D sends the reader elsewhere for information the sentence should carry.

**Question 9 (harder) — Reading analytics for a documentation site**

A developer documentation site shows: high traffic to the getting-started page, low traffic to the conceptual overview, and very high traffic to a single error-code reference page. Ask for the strongest interpretation.

- A) The conceptual overview should be promoted.
- B) The pattern is what would be expected from a working developer audience — they start with getting-started, skip concepts, and arrive at the error reference when something breaks — but very high traffic to one error code specifically suggests either that error is unusually common or its documentation is unusually unhelpful, and that is the page worth investigating.
- C) The conceptual overview should be removed.
- D) The error page is working well.

**Correct answer: B**

**Explanation:** Two readings are combined here and both matter. This tests whether the candidate treats the overall shape as normal rather than as a problem: developers genuinely do skip conceptual material and arrive at error references under duress, and low traffic to concepts is not evidence that they are badly written. But traffic concentrated on one error code within that pattern is a signal, and it has two possible causes with different remedies — a common error, which points at the product, or an inadequate explanation, which points at the page and is often visible in whether people leave the page and search again. Option B holds both. Option D reads high traffic as success, which for an error page is exactly backwards. Options A and C both treat a normal pattern as a defect.

**Question 10 (harder) — Documentation and a product decision**

Engineering proposes an API change that would be simpler to implement but would require every existing integrator to change their code. The candidate is asked only to document it. Ask for the strongest response.

- A) Document it as asked.
- B) Document it, and separately flag that the change requires action from every existing integrator — which makes it a breaking change with migration, deprecation-period and communication implications beyond documentation, and is worth confirming has been considered rather than assuming it has.
- C) Refuse to document it until the decision is reviewed.
- D) Document it with a warning to readers.

**Correct answer: B**

**Explanation:** The candidate has noticed something with consequences beyond the immediate task, and the useful contribution is to surface it without overstepping. This tests whether the candidate recognises that a change requiring every integrator to alter their code is a breaking change whatever it is called internally, and breaking changes carry obligations — a deprecation period, a migration path, direct communication to known integrators — that documentation cannot substitute for. Option B raises it as a question rather than an objection, which is both accurate to the candidate's position and far more likely to be heard. It is entirely possible the team has considered all of this; it is also common for the person writing the documentation to be the first to think about the reader. Option A is a legitimate reading of the instruction and misses the contribution. Option C exceeds the candidate's remit. Option D warns users about a decision that could still be changed.

**Question 11 (harder) — Content life cycle**

The documentation set contains 340 pages. Analytics show 40 pages account for 85% of traffic, and 120 pages have had no visits in a year. Ask for the strongest recommendation.

- A) Archive the 120 unvisited pages.
- B) Investigate before acting: some unvisited pages are genuinely obsolete, some are findable only by people who need them rarely and urgently — a disaster recovery procedure, say — and some are unvisited because they cannot be found, so the traffic figure alone does not distinguish content nobody needs from content nobody can reach.
- C) Focus maintenance effort on the 40 high-traffic pages.
- D) Keep everything; storage is free.

**Correct answer: B**

**Explanation:** Zero traffic is ambiguous in a way that makes acting on it directly hazardous, and the three cases have opposite remedies. This tests whether the candidate distinguishes them: genuinely obsolete content should be archived; rarely-needed critical content — recovery procedures, incident runbooks, migration guides for old versions — is *supposed* to have low traffic and is catastrophic to lose; and content nobody can find looks identical in the analytics to content nobody wants, while needing promotion rather than deletion. Option B distinguishes them. Option A treats a low-traffic disaster recovery page as dead weight, which is the error that gets discovered during a disaster. Option C is a sensible allocation of maintenance effort and answers a different question. Option D ignores that unmaintained content is a liability rather than a neutral.

**Question 12 (harder) — A flaw in the candidate's own work**

The candidate realises that a code sample they published two months ago contains a parameter that works but is deprecated, and will stop working in the next major release. Ask what they should do.

- A) Update it in the next review cycle.
- B) Update it now, and check whether the same deprecated parameter appears in other samples across the documentation set — because a pattern used once has probably been used repeatedly, and every integrator who copied it will break at the same moment.
- C) Update it quietly.
- D) Add a note that the parameter is deprecated.

**Correct answer: B**

**Explanation:** Code samples are copied, which is what makes an error in one different from an error in prose: developers do not read a sample and paraphrase it, they paste it, so a deprecated parameter in a published sample is now in an unknown number of production codebases with a scheduled failure date. This tests whether the candidate fixes it and asks the question that matters at this level — a writer who used a parameter once has usually used it consistently, so the exposure is probably larger than the single page. Option D is a reasonable addition and leaves the sample propagating the problem to anyone who copies before reading. Option A defers something with a known failure date. Option C corrects the page and leaves the pattern unexamined.

### Administration tips

- Score for whether the candidate distinguishes content that is unclear from content that is factually wrong, and treats the second as far more serious.
- Note whether the candidate reads support tickets and search logs as evidence about findability rather than about readers' competence.
- Watch for whether the candidate asks who will maintain a piece of content before recommending it be written.
- Score for whether the candidate checks a diagnosed error for wider propagation, particularly in code samples.
- Note whether the candidate coaches a junior colleague's method rather than correcting a single instance.

### Common pitfalls to watch for when scoring

- Crediting a review that raises formatting points on a page containing a factual error.
- Missing when a candidate reads "changed the format" as necessarily a breaking change.
- Rewarding a candidate who blames readers for not finding documentation, or who rewrites content whose real problem is findability.
- Accepting high traffic to an error page as read as success.
- Missing when a candidate archives low-traffic content without asking why it is low, or leaves a workaround guide undated.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A numeric reasoning assessment measures how accurately a candidate handles quantitative material. For a technical writer that material is unusually varied: documentation analytics, search logs, support ticket volumes, API usage figures, error rates, and the numbers inside the content itself — rate limits, timeouts, payload sizes, version numbers, and retention periods.

That last category deserves emphasis, because it is where numerical care in this discipline differs from most. A number in documentation is not a summary or an argument; it is an instruction somebody will implement. A rate limit stated as 100 requests per minute when it is 100 per hour will cause every integrator who reads it to build something that fails in production, and unlike a vague sentence it will fail silently until it does not.

Typical format: a timed online test of 15 to 30 minutes, each item presenting a table, chart, or paragraph of figures with a multiple-choice question. Calculators are usually provided.

Four habits carry the load. Establish what the question asks before looking at the data. Identify the denominator and the population it represents. Estimate, calculate, compare. And sanity-check against the world — which for this role includes checking whether a documented figure is physically plausible.

### How this assessment maps to the role

- **Accuracy with figures in content** maps to **Technical understanding (user-centred design)**, where knowledge of the technologies is what lets the candidate notice an implausible value.
- **Reading documentation analytics** maps to **User-centred content design**, ensuring content is reviewed and evaluated.
- **Rate and limit arithmetic** maps to **Technical understanding**, since documenting a system means representing its constraints correctly.
- **Prioritising by impact** maps to **Agile working**, helping teams prioritise and adhere to scope.
- **Presenting figures to stakeholders** maps to **Stakeholder relationship management**.
- **Evaluating content performance** maps to **Strategic thinking**, where directing evaluation of strategies means knowing what the numbers can support.

### Practice questions

**Question 1 (easy) — Rate limit arithmetic**

An API allows 5,000 requests per hour. A client sends requests at a steady rate. Ask for the maximum sustainable rate per minute.

- A) 50
- B) 83
- C) 300
- D) 500

**Correct answer: B**

**Explanation:** 5,000 ÷ 60 = 83.3, so about 83 requests per minute, giving B. Option A divides by 100; option C multiplies incorrectly. This tests whether the candidate reasons about what they would write from this arithmetic: documenting the limit as "about 83 per minute" is helpful, and documenting it as "83 per minute" invites an integrator to build a client sending exactly 83 every minute, which will exceed 5,000 in an hour by 20 requests and get rate-limited intermittently in a way that is genuinely hard to debug. The strongest answer states the actual limit and its window — 5,000 per hour — and notes the per-minute figure as approximate guidance.

**Question 2 (easy) — Percentage of traffic**

A documentation site has 340 pages. Forty pages account for 68,000 of 80,000 monthly visits. Ask what proportion of traffic those pages carry.

- A) 68%
- B) 75%
- C) 85%
- D) 12%

**Correct answer: C**

**Explanation:** 68,000 ÷ 80,000 = 0.85, so 85%, giving C. Option A misreads the raw figure as a percentage. This tests whether the candidate registers the distribution: 12% of pages carrying 85% of traffic is a normal and steep pattern for technical documentation, and it has a direct implication for how maintenance effort should be spent. A strong candidate's answer also notes the less obvious implication — the long tail is not automatically waste, because a rarely-read migration guide may be critical to the few who need it, so the distribution tells you where to focus attention rather than what to delete.

**Question 3 (easy) — Support ticket reduction**

Before a documentation change, a topic generated 240 support tickets a month. After, it generates 180. Ask for the reduction, and what should be checked.

- A) 25% reduction, and check whether ticket volume overall fell in the same period
- B) 33% reduction
- C) 60 tickets, which is the meaningful figure
- D) 25% reduction, demonstrating the change worked

**Correct answer: A**

**Explanation:** The difference is 60, and 60 ÷ 240 = 0.25, a 25% reduction — so B miscalculates by dividing by the new figure. Between A and D the check decides it, and it is the right one: if total ticket volume fell 25% across all topics in the same period, the documentation change explains nothing and something else did, perhaps a quieter month or a change in how tickets are categorised. This tests whether the candidate establishes that before claiming credit — it takes one query and is the difference between a claim that can be defended and one that collapses the first time somebody looks. Option C is the raw figure without the comparison that makes it interpretable.

**Question 4 (easy) — Payload size**

Documentation states a maximum request payload of 2 MB. A developer asks how many records of approximately 4 KB they can send in one request. Ask for the best answer.

- A) About 500
- B) About 500, with the caveat that the limit applies to the encoded request including overhead, so the practical figure is somewhat lower and they should not design for the maximum
- C) About 2,000
- D) About 50

**Correct answer: B**

**Explanation:** 2 MB is roughly 2,000 KB, and 2,000 ÷ 4 = 500 records — so the arithmetic gives A and the useful answer is B. This tests whether the candidate adds the caveat that makes it good documentation: the limit applies to the whole encoded request, which includes headers, JSON structural characters, field names repeated per record, and any encoding expansion, so a client designed to send exactly 500 will intermittently exceed the limit as record sizes vary. Advising against designing for the maximum is the kind of practical guidance that distinguishes a candidate who has integrated with an API from one transcribing a specification.

**Question 5 (moderate) — Comparing documentation versions**

Version A of a guide had 12,000 visits with 3,600 users reaching the next step. Version B had 8,000 visits with 3,200 reaching the next step. Ask which performed better.

- A) Version A, with more users progressing.
- B) Version B, with a 40% progression rate against Version A's 30%.
- C) They are equivalent.
- D) Version A, with more traffic.

**Correct answer: B**

**Explanation:** Converting to rates is required because the traffic differs. Version A: 3,600 ÷ 12,000 = 30%. Version B: 3,200 ÷ 8,000 = 40%. Version B performs better per reader, giving B. Options A and D compare raw counts across different-sized groups, which is the standard error. This tests whether the candidate goes further and notes a genuine complication: the traffic difference is itself interesting, and if Version B has lower traffic because it is harder to find, then a better page is reaching fewer people — which would make the right action promoting it rather than congratulating the writer. Rate is the right comparison and it is not the whole answer.

**Question 6 (moderate) — Estimating documentation effort**

An API has 40 endpoints. A colleague estimates 90 minutes each for reference documentation, giving 60 hours. Ask for the most useful thing to establish.

- A) Whether 90 minutes is realistic.
- B) Whether the endpoints share request and response structures — because if 30 of the 40 follow two or three common patterns, the work is closer to documenting the patterns plus 40 short variations, which is a different and much smaller job than 40 independent efforts.
- C) The total, which is 60 hours.
- D) Whether the colleague has done this before.

**Correct answer: B**

**Explanation:** The estimate treats endpoints as independent, and REST APIs almost never are: a well-designed one has a handful of resource patterns with consistent authentication, pagination, filtering and error behaviour, so the substantial work is documenting those once and then the specifics of each endpoint briefly. This tests whether the candidate establishes that, which can move the estimate by more than half in either direction — an API with forty genuinely idiosyncratic endpoints is a much bigger job and a much worse API. Option A asks about the rate rather than the structure, which is the less consequential half. Option C computes what the estimate implies without questioning its basis.

**Question 7 (moderate) — Percentage change**

Monthly visits to a getting-started guide rose from 4,800 to 6,000 after it was linked from the API console. Ask for the increase.

- A) 20%
- B) 25%
- C) 80%
- D) 125%

**Correct answer: B**

**Explanation:** The difference is 1,200, and 1,200 ÷ 4,800 = 0.25, a 25% increase, giving B. Option A is 1,200 ÷ 6,000, dividing by the new figure — the most common error and one that under-reports every improvement. Option D expresses the new figure as a proportion of the old. The rule: for percentage change, the denominator is where the candidate started. This tests whether the candidate also interprets the figure rather than only reporting it — a 25% rise from adding one link suggests findability was the constraint rather than the content, a useful inference about the rest of the documentation set.

**Question 8 (moderate) — Reading a search log**

The top five internal searches on a developer portal are: "authentication" 1,400; "rate limit" 900; "webhook" 700; "error 429" 600; "sandbox" 400. Ask for the strongest interpretation.

- A) These are the five most important topics.
- B) Internal search is where people go when navigation failed, so these are the five topics developers most often cannot find by browsing — and the presence of "error 429" alongside "rate limit" suggests they are the same underlying need arriving by two routes, which is a case for linking them or merging them.
- C) The site search is working well.
- D) These topics need more content.

**Correct answer: B**

**Explanation:** Search volume measures navigation failure rather than importance, which inverts the naive reading. Option B says so and adds the observation that makes the data actionable: 429 *is* the rate limit error, so 1,500 searches are arriving at one topic by two different vocabularies — one from people who know the concept and one from people who have hit the error and are searching the number. This tests whether the candidate notices that documentation which does not connect the two leaves half of them searching again. Option A reads the log as a popularity ranking. Option C treats search volume as a success measure. Option D assumes the content is missing when it is more likely unfindable, which is a different and cheaper fix.

**Question 9 (moderate) — Timeout arithmetic**

A service has a 30-second timeout. A retry policy uses exponential backoff starting at 1 second and doubling. Ask how many retries fit within the timeout.

- A) 3
- B) 4
- C) 5
- D) 6

**Correct answer: B**

**Explanation:** The waits are 1, 2, 4, 8 and 16 seconds. Cumulatively: after one retry 1 second, after two 3, after three 7, after four 15, after five 31 — which exceeds 30. So four retries fit within the timeout and the fifth does not, giving B. This tests whether the candidate checks that the numbers in a document are mutually consistent, since this is exactly the sort of thing documentation gets wrong: stating "retry up to five times with exponential backoff" alongside a 30-second timeout describes a policy that cannot complete, and every developer implementing it will hit the timeout on the last retry and file a ticket. Being able to check that the numbers in a document are mutually consistent is a distinctively technical-writing skill and it catches real errors.

**Question 10 (harder) — A metric that misleads**

A documentation site reports "average time on page: 4 minutes" and a colleague reads this as good engagement. Ask for the strongest observation.

- A) Four minutes is good.
- B) Time on page has no direction for technical documentation — a developer who finds the answer in ten seconds and leaves is a success, and one who spends four minutes because the page is confusing is a failure, so a high average is as consistent with difficulty as with engagement, and the useful measures are whether people progress, search again, or file tickets.
- C) The pages should be shorter.
- D) The figure should be broken down by page.

**Correct answer: B**

**Explanation:** Time on page is misleading everywhere and especially here, because the ideal interaction with reference documentation is brief. A developer who lands on an error-code page, reads one line and returns to their editor has had a perfect experience, and it registers as a bounce with low dwell. This tests whether the candidate names the ambiguity and identifies measures with direction — progression to the next step, repeat searching, and ticket volume all move in an interpretable way. Option D is a real improvement and reports the same directionless quantity more granularly. Option C acts on one interpretation. At this level the useful move is to say this before the metric becomes the target, because a documentation team optimising for dwell time will make things worse very efficiently.

**Question 11 (harder) — Percentage points and relative change**

The proportion of developers completing an integration within a day rose from 40% to 52% after a documentation change. Ask which statement is accurate.

- A) A 12% increase.
- B) A 12 percentage point increase, equivalent to a 30% relative increase.
- C) A 30 percentage point increase.
- D) A 23% increase.

**Correct answer: B**

**Explanation:** The arithmetic gap is 52 − 40 = 12 percentage points. The relative increase is 12 ÷ 40 = 0.3, or 30%. Option B labels both. Option A is ambiguous and generally read as relative. Option C misapplies the label. Option D divides by the new value. This tests whether the candidate recognises this matters specifically for a technical writer, who is frequently asked to demonstrate the value of documentation work; the temptation to report the larger-sounding figure is real. Giving both is the honest practice and the safer one — a stakeholder who later notices the flattering figure was selected will discount the candidate's next claim, and documentation value claims are already treated with more scepticism than most.

**Question 12 (harder) — A figure in the content**

A draft states: "The endpoint returns up to 1,000 results per page, with a maximum of 50 pages." A colleague asks whether that means 50,000 results. Ask what should be checked.

- A) Nothing; the arithmetic is straightforward.
- B) Whether the 50-page maximum is a hard cap on total retrievable results or a pagination limit that resets — because those give completely different answers to "can I retrieve my 80,000 records", and the documentation as written does not distinguish them.
- C) Whether 1,000 is the default or the maximum.
- D) Whether the pages are zero-indexed.

**Correct answer: B**

**Explanation:** The arithmetic is trivial and the semantics are not, which is the point. If the 50-page limit is a hard cap, the maximum retrievable set is 50,000 records and a developer with 80,000 cannot get them all through this endpoint — a substantial constraint they need to know about before designing anything. If pagination resets with a cursor or a filter, the cap is per query and the full set is retrievable in batches. This tests whether the candidate identifies that those are opposite answers to the only question a developer actually has, and that the sentence as drafted supports both. Option C is a real ambiguity and a smaller one. Option D matters for the first request and not for the capability question. Option A treats a semantic ambiguity as an arithmetic one, which is the characteristic error when technical content is reviewed for correctness of numbers rather than correctness of meaning.

### Administration tips

- Score for whether the candidate identifies the denominator or window a figure is stated against before restating it.
- Note whether the candidate checks that figures within one document are mutually consistent, such as a retry policy against a timeout.
- Watch for whether the candidate reads a directionless metric (time on page, search volume) for what it can and cannot support.
- Score for whether the candidate labels both a percentage-point change and a relative percentage change rather than choosing whichever sounds stronger.
- Note whether the candidate distinguishes a semantic ambiguity in a figure from an arithmetic one.

### Common pitfalls to watch for when scoring

- Crediting a percentage change calculated by dividing by the new figure rather than the original.
- Missing when a candidate compares raw counts across differently sized populations instead of converting to rates.
- Rewarding a candidate who reads a search log as a popularity ranking, or high dwell time as engagement.
- Accepting a documentation improvement claimed without checking whether the baseline moved for unrelated reasons.
- Missing when a candidate reports only the more flattering of two accurate framings of the same change.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A verbal reasoning assessment measures how accurately a candidate reads. For this discipline it is close to the job itself: the role spends its working life reading specifications, RFCs, engineering tickets, code comments and API contracts, and turning them into something a reader can act on. Getting that wrong in either direction is serious — understate a constraint and integrators build something that breaks; overstate one and they build defensively around a limit that does not exist.

The classic format presents a short passage of dense workplace prose, typically three to six sentences, followed by statements to classify as True, False, or Cannot Say. True means the statement follows necessarily. False means the passage contradicts it. Cannot Say means the passage neither establishes nor excludes it. Alongside these come comprehension items, main-point items, and questions asking which of four summaries is most accurate.

The governing rule is answering from the passage alone. A candidate's professional knowledge must be set aside, and this is harder for a technical writer than for most: they know how these systems usually work, and the temptation to supply the behaviour they would expect rather than the one described is exactly what produces documentation asserting things the specification never said.

Cannot Say deserves particular attention. Technical writers avoid it because a reader asking "does this endpoint support filtering?" wants an answer, and "the specification does not say" feels like a failure. In practice it is frequently the correct and most useful answer, because it identifies a gap somebody needs to close before it is documented.

Small words carry the load. "May" and "must" have specific force in specification prose. "Should" means something between them. "Or" offers alternatives. And a specification's silence is not permission.

### How this assessment maps to the role

- **Reading specifications precisely** maps to **Technical understanding (user-centred design)**.
- **Separating statement from inference** maps to **User-centred content design**, where content must be traceable to what a source actually says.
- **Identifying the main point** maps to the role's core task of turning specification prose into something usable.
- **Handling qualified language** maps to **Technical understanding**, where "may" and "must" carry defined weight in technical documents.
- **Reading for absence** maps to **User-centred content design**, where noticing a specification never states an error condition is what stops a writer inventing one.
- **Reading stakeholder correspondence** maps to **Stakeholder relationship management**.

### Practice questions

*Passage A — for Questions 1 to 4*

"Clients must include an Authorization header on all requests to protected endpoints. Clients may include an Idempotency-Key header on POST requests; where present, the server will return the original response for any repeated request with the same key within 24 hours. Servers must reject requests exceeding 2 MB with a 413 response. Clients should implement exponential backoff on 429 responses."

**Question 1 (easy)** — Statement: "Clients must include an Idempotency-Key header on POST requests."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage says clients *may* include the header — it is optional. The statement's "must" contradicts that, so False. In specification prose "may", "should" and "must" are terms of art with defined force, and this passage uses all three deliberately: the Authorization header is mandatory, idempotency keys are optional, and backoff is recommended. This tests whether the candidate reads them exactly — a technical writer who flattens them into a single register produces documentation that either over-constrains integrators or under-warns them, and both cost trust.

**Question 2 (easy)** — Statement: "A repeated POST with the same Idempotency-Key after 30 hours will return the original response."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage guarantees the original response for repeats *within 24 hours*. Thirty hours falls outside that window, so the guarantee does not apply and the statement is contradicted. False. This tests whether the candidate notices what the passage does not say: it does not state what happens after 24 hours, so the request might be processed as new, might be rejected, or might behave in some other way. A strong candidate's answer registers that this is exactly the sort of thing to establish before documenting, and that the honest draft says the guarantee holds for 24 hours rather than inventing the behaviour beyond it.

**Question 3 (moderate)** — Statement: "A client that does not implement exponential backoff is non-compliant."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage says clients *should* implement exponential backoff. In specification usage "should" indicates a strong recommendation that may be departed from for good reason, not a requirement — so a client without it is not compliant with the recommendation and is not non-compliant. The statement asserts non-compliance, which the passage does not support, so False. This tests whether the candidate holds this distinction, which integrators care about, because "should" tells them the behaviour is expected and they will not be rejected for omitting it, while "must" tells them their client will break. Documentation that renders both as "you need to" removes information the reader needs.

**Question 4 (harder)** — Statement: "A 1.9 MB request will be accepted."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage requires servers to reject requests *exceeding* 2 MB, so a 1.9 MB request is not rejected on size grounds. But acceptance depends on everything else — authorisation, validity, rate limits, and any condition the passage does not mention — and the passage establishes only that one particular rejection does not apply. Cannot Say. This tests whether the candidate distinguishes "will not be rejected for this reason" from "will be accepted", which matters in documentation because writing "requests under 2 MB are accepted" makes a promise the specification does not, and an integrator who believes it until a valid-sized request fails validation will conclude the documentation is unreliable.

*Passage B — for Questions 5 to 8*

"The review of the developer portal found that teams publishing reference documentation alongside code releases reported fewer integration support tickets than teams publishing separately. The review notes that the teams publishing alongside releases were also those with dedicated technical writers. The review did not assess documentation accuracy. It recommends that the portal team consider whether alongside-release publishing should be standard."

**Question 5 (easy)** — Statement: "Teams publishing documentation alongside releases reported fewer integration tickets."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The first sentence states this directly and the statement restates it without addition. True. Note the passage's careful "reported fewer" rather than "had fewer", and the statement respects it. This is a quick, easy item to bank time for harder ones.

**Question 6 (moderate)** — Statement: "Publishing alongside releases reduces support tickets."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage reports an association and then flags that the same teams had dedicated technical writers — which is a substantial confound, since a team with a dedicated writer would be expected to produce better documentation regardless of when it publishes. So the fall in tickets may be attributable to the writer, the timing, both, or something else the review did not name. Cannot Say. This tests whether the candidate avoids the trap of a claim they might like to be true and would want to cite when arguing for the practice. The stronger argument is available and honest: documentation published after a release is documentation integrators did not have when they needed it, which is a reason on its own without needing the ticket data to carry it.

**Question 7 (moderate)** — Statement: "The documentation produced alongside releases was more accurate."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says explicitly that the review did not assess accuracy. Declared silence establishes nothing, so Cannot Say. This distinction matters in the field more than in most: documentation published under release pressure could plausibly be *less* accurate while generating fewer tickets, if it arrives in time to prevent the confused questions that a later and better document would have answered. Fewer tickets and better documentation are different things, and a review that measured one and not the other has told you about one.

**Question 8 (harder)** — Statement: "The review recommends making alongside-release publishing standard."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The review recommends that the portal team *consider whether* it should be standard — a recommendation to evaluate, including the possibility of deciding against. The statement asserts a recommendation to adopt, which was not made, so False rather than Cannot Say: the passage tells you what was recommended and it was something different. This pervades review prose, and technical writers are unusually likely to be the person who writes the record of what a review said — which makes reading it precisely a professional obligation this item tests directly.

*Passage C — for Questions 9 to 12*

"Documentation for a public API must state the endpoint, method, required and optional parameters with types, the response schema, and all error codes the endpoint can return. Where an endpoint is deprecated, the documentation must state the deprecation date and the recommended alternative. Code samples must be executable as written against the documented version. Documentation must be reviewed whenever the endpoint changes, and at least annually."

**Question 9 (easy)** — Statement: "Documentation must list all error codes an endpoint can return."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The first sentence requires all error codes the endpoint can return. The statement restates that, so True. This is a quick item. It is worth noting why the requirement is stated so strongly: an undocumented error code is one an integrator cannot handle, and the failure mode is a client that works in testing and falls over in production when an unanticipated response arrives. This is among the most commonly incomplete sections of API documentation, usually because the writer documents the errors they encountered rather than the ones the endpoint can produce.

**Question 10 (moderate)** — Statement: "A code sample that works against the current version but not the documented version satisfies the requirement."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The requirement is that samples are executable as written *against the documented version*. A sample working only against a different version fails that, so the statement is contradicted. False. This tests whether the candidate recognises a realistic scenario: documentation for version 2 gets updated with samples tested against version 3 because that is what the writer had running locally, and every integrator still on version 2 — which is the audience for that documentation — finds the sample fails. The requirement names the documented version specifically because this is the error it exists to prevent.

**Question 11 (harder)** — Statement: "Documentation reviewed eleven months ago, with no endpoint changes since, is compliant."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The requirement has two limbs: review whenever the endpoint changes, and at least annually. With no changes, the first limb is not triggered, and eleven months is within the annual requirement, so both are satisfied and the statement follows. True. Contrast this with the structure that produces a Cannot Say — if the passage had not told the candidate whether the endpoint had changed, the case would be undetermined. Here the stem supplies both facts, so the compound condition can be fully evaluated. This tests whether the candidate reads which facts they have been given, rather than assuming a compound condition is always indeterminate.

**Question 12 (harder) — Main point**

Ask which best captures the main point of Passage C.

- A) Documentation must list all error codes.
- B) API documentation must be complete, executable and current — specifying the interface fully including errors, giving deprecation dates and alternatives, containing samples that actually run against the version documented, and being reviewed on change and at least annually.
- C) Code samples must be executable.
- D) Documentation must be reviewed annually.

**Correct answer: B**

**Explanation:** The main point must cover the whole passage while adding nothing. Options A, C and D are each true of one provision and silent on the rest, and D also drops the change-triggered review. Option B captures the four requirements and names the logic joining them: an integrator relies on the documentation as a contract, so it must describe the interface fully, work when followed, and not describe a system that no longer exists. This tests whether the candidate preserves "against the version documented" and both review triggers — a summary dropping either is one a colleague could act on and still fail the requirement.

### Administration tips

- Score for whether the candidate reads "may", "should" and "must" as terms of art rather than flattening them into one register.
- Note whether the candidate distinguishes "will not be rejected for this reason" from "will be accepted".
- Watch for whether the candidate treats a specification's declared silence as a gap to close rather than a behaviour to infer.
- Score for whether the candidate distinguishes "consider whether X" from "recommend X" in review prose.
- Note whether a summary the candidate produces preserves every qualifier that changes what a reader could rely on.

### Common pitfalls to watch for when scoring

- Crediting a statement judged True or False from the candidate's own technical knowledge rather than the passage.
- Missing when a candidate renders a "should" as a hard requirement.
- Rewarding a candidate who documents behaviour outside a stated window as though it were established.
- Accepting a claim as True where it would support a practice or argument the candidate favours, despite a confound the passage names.
- Missing when a candidate drops a qualifier (a version, a trigger, a time window) when summarising a requirement.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks what a candidate would do — a dilemma of the kind this role produces, four or five possible responses, and a question asking which is most effective and often which is least.

This section measures whether a candidate's judgement matches what the profession considers good practice at this level. The role is an expert practitioner with deep technical understanding, writing for technologists, assuring the quality of more junior colleagues' content, coaching them, and engaging with the cross-government community.

Four principles carry most scenarios, and two are specific to this discipline. Readers are experts under time pressure — they arrive mid-task, competent, and impatient, and will leave for the source code or a search engine within seconds, so options that respect that beat options that are merely thorough. Accuracy is not negotiable in the way clarity is — a confusing sentence costs a reader a minute, a wrong parameter costs them twenty and costs the documentation their trust permanently, and when the two pull against each other, accuracy wins. Work through engineers rather than around them — a technical writer depends on people who have the knowledge and rarely the time, and almost every scenario in this section is really about how information is extracted from somebody who would rather be coding. And think about who maintains it — documentation written and never updated becomes a liability, and choosing not to write something is sometimes the strongest recommendation available.

### How this assessment maps to the role

- **Working with engineers** maps to **Technical understanding (user-centred design)**, collaborating closely with colleagues in different digital disciplines.
- **Assuring and coaching** maps to **User-centred content design**, taking responsibility for the quality of junior colleagues' content and delivering through others.
- **Influencing stakeholders** maps to **Stakeholder relationship management**.
- **Prioritising and scoping** maps to **Agile working**.
- **Life cycle thinking** maps to **User-centred content design**, where content is regularly reviewed and evaluated.
- **Community contribution** maps to this role level's named engagement with cross-government communities.

### Practice questions

**Question 1 (easy) — Getting information from an engineer**

The candidate needs to document a new endpoint. The engineer who built it is busy and their written answers are terse and incomplete. Ask for the most effective approach.

- A) Keep asking follow-up questions by message until enough is gathered.
- B) Write a draft from the code and the specification, get it wrong in places, and ask the engineer to correct it — because reviewing a wrong draft takes an engineer five minutes and generates more accurate detail than answering open questions takes them thirty.
- C) Ask for a meeting.
- D) Document what can be established and mark the gaps.

**Most effective: B. Least effective: A**

**Explanation:** This is the single most useful working technique in technical writing and it exploits a real asymmetry: answering "how does authentication work here?" requires an engineer to construct an explanation from scratch, which is slow and produces terse answers, while reading a draft that says something slightly wrong triggers an immediate and detailed correction. People find it much easier to fix a wrong thing than to produce a right one. Option B also puts the effort where the candidate's time is cheaper than the engineer's. Option A is least effective, extending a low-yield exchange over days and consuming exactly the goodwill needed for the next endpoint. Option C is reasonable and expensive, and works far better once there is a draft to review in it. Option D leaves the reader with the gaps.

**Question 2 (easy) — A factual error in published documentation**

A developer reports that a documented parameter name is wrong. The candidate verifies it. Ask for the most effective response.

- A) Fix the page.
- B) Fix it immediately, thank the reporter, and check whether the same parameter appears in other pages and samples — because a name got wrong once was probably got wrong consistently, and anyone who copied it has broken code.
- C) Add it to the backlog.
- D) Fix it and add a note about the change.

**Most effective: B. Least effective: C**

**Explanation:** A wrong parameter name in documentation is live and propagating: developers copy samples, so the error is now in an unknown number of codebases. Option B fixes it fast, acknowledges the reporter — which matters more than it sounds, since a developer who reports a documentation error and hears nothing does not report the next one — and asks the question that distinguishes a writer from a proofreader, because errors of this kind are almost never isolated. Option C is least effective, treating a live factual error that is actively breaking integrations as backlog work. Option A fixes one instance. Option D adds a changelog entry to a correction, which is reasonable and secondary to finding the other instances.

**Question 3 (easy) — A junior colleague's guide**

A junior colleague's guide is well written and describes a process that changed three months ago. Ask for the most useful response.

- A) Note the error and ask them to fix it.
- B) Note the error, and establish how they verified the process — because a well-written guide describing something that no longer works usually means they wrote from an existing document rather than following the steps, and the habit matters more than this instance.
- C) Fix it themselves.
- D) Praise the writing and mention the error.

**Most effective: B. Least effective: C**

**Explanation:** The combination is diagnostic: well written, clearly structured, and wrong. That pattern almost always means the writer worked from an older source rather than performing the process, and if that is the method then every guide they produce carries the same risk however carefully they write. Option B addresses the method, which is what the role means by coaching and guiding junior colleagues rather than correcting their output. Option C is least effective, removing the learning and making the candidate a permanent checker of work that will keep containing the same class of error. Option A fixes the instance. Option D softens the point past the level at which it registers.

**Question 4 (moderate) — Pressure to document rather than fix**

An engineering team asks the candidate to document a workaround for a confusing error message rather than change the message, because changing it requires a release. Ask for the most effective response.

- A) Document the workaround.
- B) Document it as an interim measure, and raise that a confusing error message generates documentation, support tickets and integrator time indefinitely while a message change is bounded work — so the documentation should carry a dated note and the message change should be on the backlog with the ticket volume attached.
- C) Refuse until the message is fixed.
- D) Document it without comment.

**Most effective: B. Least effective: D**

**Explanation:** The team's constraint is real and their solution transfers a bounded cost into an unbounded one: a message change costs one release, while documentation of a confusing message costs every developer who hits it, forever, plus the support tickets from those who do not find the page. Option B serves the immediate need and makes the trade visible with the evidence attached, which is what turns "the writer would prefer we fixed it" into a prioritisation case. The dated note matters too, since workaround documentation outlives the problem otherwise. Option D is least effective, absorbing the problem silently and guaranteeing it persists — and establishing that documentation is where product defects go. Option A does the same with slightly more awareness. Option C refuses a legitimate interim need.

**Question 5 (moderate) — Content nobody will maintain**

A team asks the candidate to write a detailed guide to an internal tool that changes frequently and has no owner. Ask for the most effective response.

- A) Write it as asked.
- B) Establish who will keep it current before writing it — because a detailed guide to a frequently changing tool with no owner will be wrong within months and will then mislead people who trust it, which is worse than the current situation where they ask somebody.
- C) Refuse.
- D) Write a shorter version.

**Most effective: B. Least effective: A**

**Explanation:** Documentation has a maintenance cost that is invisible at the moment of writing and inevitable afterwards, and a detailed guide to a fast-changing tool with no owner is a liability being requested in good faith. Option B asks the question that determines whether writing it is a service or a disservice, and it is a question the requesting team has usually not considered. The comparison it names is the persuasive part: people currently ask a colleague and get a correct answer, and after the guide they will follow it and get a wrong one. Option A is least effective, producing something that will actively mislead. Option D reduces the maintenance burden and is a genuine partial answer — a short guide covering the stable parts ages better than a detailed one — but it still needs an owner. Option C declines without diagnosing.

**Question 6 (moderate) — A disagreement with an engineer**

An engineer objects to the candidate's description of an error condition, saying it "basically never happens." The candidate's reading of the code says it can. Ask for the most effective response.

- A) Defer to the engineer.
- B) Ask what would have to be true for it to occur, since "basically never" describes frequency rather than possibility — and if it can occur, an integrator who has not handled it has a production failure waiting, however rare.
- C) Document it anyway without discussion.
- D) Escalate.

**Most effective: B. Least effective: A**

**Explanation:** The engineer and the candidate are answering different questions. The engineer is describing how often the condition arises in practice, which is useful information; the candidate is documenting what a client must handle, and rarity is close to irrelevant to that — an unhandled error path fails in production, usually at the worst moment, and rarity means it will not be caught in testing. Option B establishes the conditions, which resolves the disagreement in either direction and produces material worth documenting: "returned when the upstream service is unavailable, which is rare" is a better line than either party started with. Option A is least effective, dropping a documented error path because somebody said it was uncommon. Option C wins the point and forgoes the detail. Option D escalates a technical question with a technical answer.

**Question 7 (moderate) — Writing for the wrong audience**

A stakeholder asks the candidate to make the API reference "more accessible to non-technical readers." Ask for the most effective response.

- A) Simplify the reference.
- B) Establish who the non-technical readers are and what they need — because if they need to understand what the API does, that is an overview or a product page rather than a reference, and simplifying the reference would degrade it for the developers it exists for while still not serving the new audience.
- C) Refuse; references are for developers.
- D) Add a glossary.

**Most effective: B. Least effective: A**

**Explanation:** The request conflates two audiences with incompatible needs, and the productive move is to separate them. A developer reading a reference wants precision and density; a non-technical reader wants to know what the thing is for. Simplifying the reference produces something too vague for the first and still impenetrable for the second, which is the worst available outcome and the one option A delivers. Option B asks what the new audience actually needs, and the answer is usually a short overview page that costs a day and serves them properly. Option C is right about the reference and refuses a legitimate need. Option D is a reasonable addition that does not address whether the reference is the right artefact.

**Question 8 (harder) — A breaking change presented as a small one**

Engineering describes a change as minor: a response field is being renamed. The candidate knows every integrator parsing that field will break. Ask for the most effective response.

- A) Document the rename in the release notes.
- B) Document it, and flag that a field rename breaks every client parsing that field — which makes it a breaking change with migration, deprecation and communication implications beyond documentation, and is worth confirming has been considered.
- C) Refuse to document it as minor.
- D) Add a prominent warning to the documentation.

**Most effective: B. Least effective: A**

**Explanation:** The candidate has noticed something with consequences beyond the immediate task. A renamed response field is breaking by any reasonable definition: existing clients reading the old name get nothing, usually without an error, which produces silent data loss rather than a clean failure. That carries obligations documentation cannot substitute for — a deprecation period, both fields returned during transition, and direct notice to known integrators. Option B raises it as a question rather than a challenge, which is accurate to the candidate's position and far more likely to be heard; the team may well have considered it, and it is also common for the person writing the release notes to be the first to think about the reader. Option A is least effective, documenting a breaking change as routine and leaving integrators to discover it. Option D warns readers who may never see the note. Option C makes it a fight about labels.

**Question 9 (harder) — Documentation debt**

The documentation set has grown to 340 pages, maintained by two writers, and accuracy is slipping. Ask for the strongest response.

- A) Ask for more writers.
- B) Reduce the surface area: identify content that is obsolete, duplicated or better replaced by generated reference from the source of truth, and retire or automate it — because a set two people cannot maintain will keep decaying whatever effort goes in, and accuracy is a function of size as much as of care.
- C) Introduce a review schedule.
- D) Prioritise the highest-traffic pages.

**Most effective: B. Least effective: C**

**Explanation:** Accuracy slipping across 340 pages maintained by two people is an arithmetic problem before it is a discipline problem, and effort cannot solve it — any schedule that reviews everything will review each page rarely, and any schedule that does not review everything leaves the rest decaying while claiming coverage. Option B attacks the size, and the third route it names is the strongest available in technical writing: reference documentation generated from the source of truth cannot drift, because it is not a separate artefact. Option C is least effective, adding process to a workload that does not fit, which produces a schedule that slips and a false sense of coverage. Option D is a sensible interim allocation and does not stop the tail decaying. Option A may be justified and is a much easier ask once the set has been rationalised.

**Question 10 (harder) — Community contribution**

The candidate has solved a documentation problem — a clear pattern for documenting authentication flows — that other departments plainly share. Ask for the most effective response.

- A) Use it and move on.
- B) Share it through the cross-government community with the reasoning and an honest note on where it did not work, and offer to help anyone adapting it — accepting that others may improve it, which is the point.
- C) Publish it as a standard.
- D) Mention it to writers known personally.

**Most effective: B. Least effective: A**

**Explanation:** The role names engaging with and contributing to the cross-government technical writing and content design communities, and this is where that becomes concrete: authentication is documented badly in most places, and one tested pattern is worth more than several departments each arriving at their own. Option B shares it well, and the honest note about where it did not work is what prevents the pattern being adopted into contexts it does not fit — a pattern that suits token-based flows may be wrong for certificate-based ones, and saying so is what makes it usable rather than merely available. Option A is least effective, keeping a solution while others repeat the work. Option C publishes as a standard something one department has tested. Option D helps a few people and bypasses the mechanism built for this.

**Question 11 (harder) — A flaw in the candidate's own work**

The candidate realises a published code sample uses a parameter that works now but is deprecated and will stop working in the next major release. Ask what they should do.

- A) Update it in the next review.
- B) Update it now, and check whether the same parameter appears in other samples — because a pattern used once has probably been used repeatedly, and every integrator who copied it will break at the same moment.
- C) Update it quietly.
- D) Add a deprecation note to the sample.

**Most effective: B. Least effective: A**

**Explanation:** Code samples are copied rather than read, which is what makes an error in one categorically different from an error in prose: the deprecated parameter is now in an unknown number of production codebases with a scheduled failure date. Option B fixes it and asks the question that matters — a writer who used a parameter once has usually used it consistently, so the exposure is larger than the page. Option A is least effective, deferring something with a known deadline attached, and the deadline is not the candidate's to move. Option D leaves the sample propagating the problem to anyone who copies before reading, which is most people. Option C corrects the page and leaves the pattern unexamined.

**Question 12 (harder) — Delivering through others**

Engineers in the organisation write a lot of internal documentation, and its quality varies widely. The candidate cannot review it all. Ask for the strongest response.

- A) Review what can be managed and accept the rest.
- B) Give engineers the smallest useful thing that raises the floor without the candidate's involvement — a short template with the sections that matter, a handful of worked examples from documentation that works, and a rule of thumb they can apply themselves — and reserve review for what matters most.
- C) Require all engineering documentation to be reviewed by a writer.
- D) Deliver training to all engineering teams.

**Most effective: B. Least effective: C**

**Explanation:** The candidate cannot review everything, and any answer depending on reviewing everything fails on arithmetic. Option B raises the baseline without the candidate's involvement, and the specific ingredients matter: a template supplies structure to people who know the content and not the shape, worked examples teach faster than rules, and a rule of thumb — for instance, that a page should let a reader complete one task — travels in a way a style guide does not. Option C is least effective, creating a bottleneck that will either be ignored or will stop documentation being written, and engineering documentation that does not exist is worse than engineering documentation that is uneven. Option D is a real intervention that mostly does not persist unattached to an artefact people use. Option A accepts a variable floor that could be raised cheaply.

### Administration tips

- Score for whether the candidate uses a wrong draft to extract information from a busy engineer rather than asking open questions.
- Note whether the candidate treats a live factual error as urgent rather than as backlog work.
- Watch for whether the candidate asks who will maintain a piece of content before committing to write it.
- Score for whether the candidate separates two audiences with incompatible needs rather than compromising between them.
- Note whether the candidate raises a quality floor through an artefact others can use themselves, rather than through review capacity that will not scale.

### Common pitfalls to watch for when scoring

- Crediting a response that extends a low-yield question exchange with a busy engineer rather than proposing a wrong-draft review.
- Missing when a candidate treats a live, propagating documentation error as routine backlog work.
- Rewarding a candidate who writes detailed documentation for something with no owner, or who simplifies a reference to serve two incompatible audiences.
- Accepting a response that documents a breaking change as routine without flagging its wider implications.
- Missing when a candidate adds review capacity to a workload that structurally cannot be reviewed at that scale, instead of reducing the surface area.

## Conclusion

This guide has worked through pattern recognition and diagnostic reasoning across documentation, analytics and colleagues' work; the arithmetic that keeps a rate limit, a timeout policy or a payload figure trustworthy, and the discipline of interrogating a metric such as time on page before it is reported as engagement; the precision required to read a specification exactly as written, distinguishing "should" from "must" and a ruled-out rejection from a promised acceptance; and the situational judgement that defines a strong technical writer — extracting information efficiently from busy engineers, coaching a colleague's method rather than correcting an instance, and declining to write what nobody will maintain.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several items reward the quality of reasoning as much as the final choice, and the strongest answers consistently distinguish content that is unclear from content that is wrong. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
