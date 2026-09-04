# Lead Technical Writer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for lead technical writer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

A lead technical writer is an expert practitioner who directs a team of technical writers and assures the quality of technical writing across teams and its alignment to strategy: standardising tools, ways of communicating and processes; working closely with service managers, technology leaders and senior stakeholders to resource teams and resolve problems; promoting the discipline of technical writing; engaging with the cross-government community; and keeping up to date with industry changes.

That is a role in which most of what a candidate achieves happens through other people, in a discipline that is chronically under-resourced because its value is hard to demonstrate. Both facts shape this material.

Three features of the role shape the items. First, the candidate assures writing they did not produce, on systems they have not integrated with, judged from a document rather than from the thing it describes — which makes reading an output for the shape of the work behind it a core competence. Second, the role standardises tools, templates, processes, and ways of working; a decision at that level is paid for many times, and a template that omits a field produces the same gap in every document that uses it. Third, the role argues for resource in a discipline whose absence is invisible until an integration fails, which puts unusual weight on the candidate's ability to express documentation value in numbers other people already use.

Each of the four sections that follow presents an overview of what it measures and its typical format, a mapping to the role's named skills, twelve graduated practice questions with full worked explanations, then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score cognitive and numeric items for whether the candidate diagnoses a systemic cause behind a pattern that recurs across several teams, rather than treating each instance separately, and whether they interrogate a figure — a business case, an audit finding, a portal metric — before accepting or reporting it. Situational judgement items at this level consistently reward action that changes a system, a template or a process rather than solving a problem personally, that absorbs organisational pressure that should not land on a more junior writer, and that fixes the mechanism behind a recurring gap rather than the single instance in front of the candidate.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the reasoning this role demands, presented through practical materials rather than abstract puzzles. At lead level the materials are documentation sets the candidate did not write, analytics across a portal, support data, team output, and standards applied unevenly.

Typical format: an online test of 15 to 30 minutes covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group of comparable seniority.

Three things distinguish this section at this level. First, reasoning at a distance — the candidate judges documentation from the document rather than from using it, which makes the absence of information as informative as its presence, since a reference with no error codes tells you what the writer had access to as much as what the endpoint returns. Second, the interesting problems are systemic: documentation defects recur because something produces them — a template without a field for error codes, a release process that does not involve writers, an engineering culture where nobody is asked, or a tooling gap that makes samples untestable — and fixing documents leaves the mechanism intact. Third, the maintenance calculus: a team's capacity is fixed and a documentation set is not, and a substantial part of the candidate's judgement concerns what should not exist — content nobody maintains is a liability, and choosing to retire or automate is frequently a stronger recommendation than choosing to write.

### How this assessment maps to the role

- **Auditing at a distance** maps to assuring the quality of technical writing across teams.
- **Systemic diagnosis** maps to standardising tools, ways of communicating, and processes.
- **Life cycle reasoning** maps to **User-centred content design**, directing the approach to content life cycle management.
- **Strategic prioritisation** maps to **Strategic thinking**, leading the design and implementation of strategy.
- **Capability diagnosis** maps to **User-centred content design**, identifying gaps in skills and capability and helping teams grow.
- **Reasoning about positions** maps to **Stakeholder relationship management**, influencing and negotiating with senior stakeholders.

### Practice questions

**Question 1 (easy) — Reading an output for what is missing**

A reference page documents an endpoint's method, parameters, response schema and a code sample. It lists no error codes. Ask for the most important observation.

- A) The page is nearly complete.
- B) An absent error section usually means the writer documented what the endpoint returns on success — which is what a specification and a happy-path test show — and had no source for the failure modes, so the gap is about their access to information rather than their thoroughness.
- C) The error codes should be added.
- D) The sample should be tested.

**Correct answer: B**

**Explanation:** Option C states the remedy and B states the diagnosis, and at this level the diagnosis is the useful output. Error codes are the section most often missing in API documentation, and almost never because the writer forgot: success behaviour is visible in a specification and in any working call, while the set of failures an endpoint can produce usually exists only in the code or in an engineer's head. A writer without that access produces exactly this page. This tests whether the candidate identifies that, which points at the fix — a template field that must be filled, and a route to the information — rather than at one page. Option A treats a missing section as a rounding error when it is the section integrators need to write resilient clients.

**Question 2 (easy) — Deduction from a versioning policy**

A policy states: "Breaking changes may only be released in a new major version, unless the affected endpoint has been formally deprecated for at least six months." A team reports changing a response format last week with no major version bump. Ask which must be true.

- A) The policy was breached.
- B) The endpoint had been deprecated for six months.
- C) Either the endpoint had been deprecated for at least six months, or the policy was breached — and separately, whether the change was breaking has not been established.
- D) The change was not breaking.

**Correct answer: C**

**Explanation:** A conditional with a stated exception, plus facts silent on the exception, licenses only the disjunction — and this item has a second layer. The policy governs *breaking* changes, and "changed the response format" does not establish that: adding an optional field changes the format and breaks nothing, while renaming or removing one breaks every client parsing it. So two things are undetermined and this tests whether the candidate names both, as option C does. At this level the practical consequence is what the candidate's team documents — an addition is a release note, a rename is a migration guide with a communication plan — and establishing which before writers start is part of resolving problems with technology leaders rather than after.

**Question 3 (moderate) — Diagnosing recurring defects**

Across four teams' documentation the same three gaps appear: missing error codes, untested code samples, and no statement of which version the documentation describes. Ask for the strongest diagnosis.

- A) Four teams need training.
- B) Three specific gaps recurring across four independent teams indicates a shared cause — most plausibly a template lacking those fields, or a process where writers are engaged after release rather than during — and the three named have a common character: each requires information or access a writer only gets by being present when the thing is built.
- C) Documentation quality is generally low.
- D) Reviews should be more frequent.

**Correct answer: B**

**Explanation:** Three specific gaps across four independent teams is not four coincidences, and the observation that makes option B strong is what the three have in common: error codes, tested samples and version identification all require the writer to have access to a running system and to the engineers building it. A writer handed a specification after the fact can produce everything else and none of these. This tests whether the candidate identifies that this points at engagement timing and at tooling rather than at skill, which is a completely different remedy from training. Option A is the default and weakest response. Option C is a diagnosis so general it suggests no action. Option D increases detection without reducing occurrence and consumes the candidate's own capacity permanently.

**Question 4 (moderate) — Strategic prioritisation**

The candidate can direct substantial capacity to one of four things this quarter: (1) generating reference documentation automatically from API specifications across the estate; (2) auditing the documentation for twelve services not reviewed in two years; (3) writing a style guide for engineering-authored content; (4) rewriting the top twenty highest-traffic pages. Ask which is strongest, and why.

- A) Item 4, because it affects the most readers.
- B) Item 1, because generated reference cannot drift from the source of truth — it removes a whole class of decay permanently across the estate, whereas the others improve, detect or inform a set that will decay again.
- C) Item 2, because unreviewed documentation is unknown risk.
- D) Item 3, because it scales through others.

**Correct answer: B**

**Explanation:** The four options are prevention, detection, capability and repair, and only one changes the rate at which documentation goes wrong. Reference documentation generated from a specification is not a separate artefact that can fall out of step; it is a view of the source of truth, so the commonest and most damaging failure — documentation describing an interface that has changed — becomes structurally impossible for everything it covers. Option A repairs twenty pages that will decay again. Option C produces a list. Option D is genuinely good and third-best, because a style guide raises quality and does nothing about accuracy. This tests whether the candidate notices that option 1 does not cover everything — guides, tutorials and conceptual material still need writing — which is exactly why it is worth doing: it frees the team for the work that cannot be generated.

**Question 5 (moderate) — What should not exist**

The set contains a twelve-page guide to working around a limitation that engineering will remove in two months. Ask for the strongest recommendation.

- A) Keep it; users need it now.
- B) Keep it with a prominent dated note and a scheduled retirement — because an undated workaround guide outlives its problem and then leads people into unnecessary and usually fragile constructions, which is worse than having no page.
- C) Remove it now.
- D) Shorten it.

**Correct answer: B**

**Explanation:** Workaround documentation has a characteristic failure mode: written under pressure, genuinely useful, and then orphaned when the problem is fixed. Two years later somebody follows twelve pages of workaround for a limitation that no longer exists, which costs them a day and leaves unnecessary complexity in their codebase. Option B keeps it useful now and builds in the retirement, which is what this role means by directing content life cycle management. This tests whether the candidate distinguishes a lead's answer from a simpler one — a note saying the workaround will become unnecessary is good, and a note plus a calendar entry is what actually results in the page being retired. Option A ignores the life cycle. Option C removes something currently needed. Option D improves prose on a page whose problem is temporal.

**Question 6 (moderate) — Assuring a writer's work**

A writer in the candidate's team produces a guide that is well written, clearly structured, and describes a configuration process that changed three months ago. Ask for the most useful response.

- A) Correct the error.
- B) Establish how they verified the process — because a well-written guide describing something that no longer works usually means writing from an existing source rather than performing the steps, and the method matters more than the instance since every guide they produce carries the same risk.
- C) Correct it and note it in their review.
- D) Add a verification step to the team's process.

**Correct answer: B**

**Explanation:** The diagnostic combination is well written, well structured and wrong, which almost always means the writer worked from an older document rather than following the process. Option B addresses the method with the individual, which is where it should start. Option D is the systemic version and is the right *second* move — if more than one writer has the habit, or if the reason is that nobody has an environment to test in, the fix belongs in the team process rather than in a conversation. This tests whether the candidate sequences the two correctly: doing D without B risks adding a process step to solve one person's habit; doing B without D risks fixing one person while the same gap persists. Option A fixes the instance. Option C converts a coachable habit into a performance note before anyone has discussed it.

**Question 7 (moderate) — Standardising tools**

Four writers use three different documentation tools, inherited from the teams they sit with. Ask for the strongest approach.

- A) Standardise on one tool immediately.
- B) Establish what the differences actually cost — whether it is reviewer confusion, inability to share components, duplicated effort on templates, or nothing much — because standardising has real costs in migration and in fighting the teams whose toolchains these are, and it is worth doing only where the fragmentation is causing something.
- C) Let each writer keep their tool.
- D) Standardise on the most popular one.

**Correct answer: B**

**Explanation:** Standardisation is named in this role and is not automatically correct, and the discipline is to establish the cost before paying one. Sometimes the fragmentation is genuinely expensive — writers cannot cover for each other, templates are maintained three times, and a change to shared style means three implementations. Sometimes it costs almost nothing because the tools output similar things and the writers rarely overlap. This tests whether the candidate distinguishes them, as option B does. The second clause matters too: documentation tooling is usually chosen by the engineering team a writer sits with, so standardising means asking three teams to change something they own, which is a substantial ask requiring a substantial reason. Option A pays the cost without establishing it. Option D picks by popularity rather than by need.

**Question 8 (harder) — Scoping a flaw in an audit**

A documentation audit was conducted by reading pages rather than by using them. Four findings: (i) 23 pages have inconsistent heading structure; (ii) code samples appear correct; (iii) terminology is inconsistent across four guides; (iv) navigation is clear. Ask which findings are most compromised.

- A) All four.
- B) None; reading is a valid audit method.
- C) Findings (ii) and (iv) are most compromised, because whether samples work and whether navigation is clear can only be established by running the samples and by trying to find something — while heading structure and terminology consistency are genuinely assessable by reading.
- D) Only (ii).

**Correct answer: C**

**Explanation:** The distinction is between properties visible on the page and properties that only appear in use. Heading structure and terminology consistency are textual and a careful reader can assess them. Whether a code sample works requires executing it, and "appears correct" means the reviewer read it and saw nothing obviously wrong — which will not catch a deprecated parameter, a renamed field or a sample that was correct for a previous version. Whether navigation is clear requires trying to find something you do not already know the location of, which a reader working through pages sequentially never does. This tests whether the candidate makes this distinction, as option C does. Option A discards two sound findings. Option B accepts two findings the method cannot support, and those are the two most likely to be quoted as reassurance.

**Question 9 (harder) — Reading portal analytics**

A developer portal shows high traffic to getting-started, low traffic to conceptual material, very high traffic to one error-code page, and a high internal search volume for "webhook." Ask for the strongest interpretation.

- A) The conceptual material should be promoted.
- B) The overall shape is normal for a developer audience, and two signals stand out for different reasons: concentrated traffic to one error code means either that error is common or its page is unhelpful, and high internal search for a topic means people cannot reach it by navigation — so one is a content or product question and the other is a findability question.
- C) More content is needed on webhooks.
- D) The error page is performing well.

**Correct answer: B**

**Explanation:** Three readings are needed and option B supplies them. The overall pattern — heavy getting-started, light concepts, heavy error reference — is what a working developer audience produces and should not be treated as a defect. The error concentration has two possible causes with different owners: a common error points at the product, an unhelpful page points at the candidate's team. And search volume measures navigation failure rather than interest, so "webhook" being searched heavily suggests the content exists somewhere unreachable rather than that it is missing. This tests whether the candidate holds all three readings at once. Option C assumes absence when the likelier answer is findability, which is a cheaper fix. Option D reads high traffic to an error page as success, which is backwards. Option A treats a normal pattern as a problem.

**Question 10 (harder) — A capability gap**

Two of four writers produce consistently accurate technical content; two produce well-written content with recurring factual errors. All four are experienced writers. Ask for the strongest inference.

- A) The two need technical training.
- B) The difference is more likely access than knowledge — the accurate two probably have working environments, engineer relationships or code access the others lack — so establish what the first two actually do to verify, and give the others the same access before assuming a skills gap.
- C) Reassign technical content to the accurate two.
- D) Review all four writers' output.

**Correct answer: B**

**Explanation:** All four are experienced writers, which makes a straightforward skills explanation less likely than an access one, and the distinction is worth being careful about because the remedies are entirely different and one of them is insulting. A writer with a local environment, a friendly engineer and read access to the repository can verify everything; a writer with a specification and a shared inbox cannot, however capable. This tests whether the candidate goes and establishes what the accurate two do, which is the step almost everyone skips, as option B does. Option A may be right and is the assumption to test rather than act on. Option C concentrates the work and permanently limits two people. Option D makes the candidate the bottleneck and does not address why the errors occur.

**Question 11 (harder) — Aligning to strategy**

The organisation's technology strategy commits to an API-first approach. The candidate's team spends most of its time on internal process documentation. Ask for the strongest response.

- A) Continue; internal documentation is needed.
- B) Establish whether the mismatch is a misallocation or a signal — if the organisation is genuinely moving to API-first, the team's effort should follow, and if internal process documentation is consuming the capacity because nobody else will write it, that is a different problem to raise rather than absorb.
- C) Redirect the team to API documentation.
- D) Ask for more writers.

**Correct answer: B**

**Explanation:** A mismatch between where a team's effort goes and where the organisation says it is heading has two very different explanations, and acting before establishing which is how leads waste a year. If the strategy is real and the team is misallocated, redirecting is correct and overdue. If the team is absorbing internal process documentation because no other function will produce it, then redirecting will simply leave that work undone and somebody will notice — so the useful move is to surface it as a resourcing question rather than to solve it silently. This tests whether the candidate distinguishes them, which is what this role means by directing the evaluation of strategies to ensure business requirements are being met. Option C acts on one reading. Option A accepts a misalignment this role exists to notice. Option D asks for resource before establishing what the current resource should be doing.

**Question 12 (harder) — A flaw in something the candidate standardised**

Six months ago the candidate introduced a documentation template now used across the organisation. It has no field for error codes, and error documentation has become patchier since. Ask what should happen.

- A) Add the field to the template.
- B) Add the field, tell the teams using the template that documentation produced with it may be missing error codes, identify which pages need retrofitting, and ask why the template review did not catch a missing section that is among the most important in API documentation.
- C) Add the field quietly.
- D) Note it for the next template review.

**Correct answer: B**

**Explanation:** A template used across an organisation propagates its gaps into everything produced with it, so this is not one omission but every document written in six months. Option B does the four things that matter: fixes the template, tells the people whose documentation is affected — which they cannot know otherwise — identifies the remediation scope, and asks the question specific to this level, which is why the review process did not catch it. This tests whether the candidate goes as far as that last part, since it is the only element that prevents the next omission, and the answer is usually that the template was reviewed by writers against style rather than against the completeness requirements of the content type. Option C fixes the template and leaves six months of incomplete documentation undiscovered. Option A does the same more openly. Option D defers a compounding problem.

### Administration tips

- Score for whether the candidate reads an output for what its absence implies about the writer's access, rather than only its presence.
- Note whether the candidate identifies a shared cause behind a gap recurring across several teams, rather than proposing training or a reminder.
- Watch for whether the candidate weighs prevention (fixing the mechanism) against detection and repair when prioritising.
- Score for whether the candidate scopes an audit's findings to what its own method could support.
- Note whether the candidate tests for an access gap before assuming a skills gap when writers' output diverges.

### Common pitfalls to watch for when scoring

- Crediting a missing error-codes section read as thoroughness rather than as an access gap.
- Missing when a candidate reaches for training as the answer to a systemic, template-level or process-level gap.
- Rewarding a candidate who repairs high-traffic pages that will decay again rather than addressing the mechanism.
- Accepting audit findings a reading-based method cannot support, such as whether samples work or navigation is clear.
- Missing when a candidate fixes a flawed template without telling the teams whose documents used the broken version.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A numeric reasoning assessment measures how accurately a candidate handles quantitative material. At lead level the emphasis shifts from calculating to interrogating, and the material becomes consequential in a specific way: technical writing is chronically under-resourced because its value is invisible until an integration fails, and the only reliable remedy is figures.

That is worth stating plainly. A lead technical writer arguing for a fourth writer on the grounds that documentation is important will lose to almost any competing bid. One who can say that integration support tickets cost the organisation a quantified amount, that a documented class of them fell by a measured proportion after a specific intervention, and that the remaining volume implies a particular saving, is making an argument in the currency the decision is taken in. This role names working with technology leaders and senior stakeholders to resource teams, and that conversation happens in numbers.

Typical format: a timed online test of 15 to 30 minutes, each item presenting a table, chart, or paragraph of figures with a multiple-choice question. Calculators are usually provided.

Four habits carry the load. Establish what the question asks before looking at the data. Identify the denominator and the population it represents. Estimate, calculate, compare. And sanity-check against the world.

### How this assessment maps to the role

- **Quantifying documentation value** maps to **Stakeholder relationship management**, resourcing teams and negotiating with senior stakeholders.
- **Reading portal and support analytics** maps to **User-centred content design**, directing content life cycle management.
- **Weighted aggregation across teams** maps to assuring quality across teams.
- **Estimating effort** maps to **Agile working**, helping teams prioritise and adhere to scope.
- **Evaluating interventions** maps to **Strategic thinking**, directing the evaluation of strategies.
- **Detecting misleading metrics** maps to accountability for what the candidate's function reports.

### Practice questions

**Question 1 (easy) — Support ticket proportion**

Of 8,400 support tickets a year, 2,100 are integration questions answerable from documentation. Ask for the proportion.

- A) 20%
- B) 25%
- C) 30%
- D) 40%

**Correct answer: B**

**Explanation:** 2,100 ÷ 8,400 = 0.25, so 25%, giving B. Estimate first: 2,100 of 8,400 is a quarter. This tests whether the candidate treats the figure as the beginning of a resourcing argument rather than the end of one, and whether they preserve the qualifier "answerable from documentation" — it is doing essential work, naming the subset the candidate's function could plausibly affect, and quoting total ticket volume instead would overstate the case and invite a correction that undermines the rest.

**Question 2 (easy) — Annualising and costing**

Integration tickets run at 175 a month. If the organisation's cost per supported ticket is £18, ask for the annual cost.

- A) £3,150
- B) £37,800
- C) £315,000
- D) £2,100

**Correct answer: B**

**Explanation:** 175 × 12 = 2,100 tickets a year, and 2,100 × £18 = £37,800, giving B. Option A stops at the monthly cost, which is the commonest error because the first calculation feels complete. The annualised figure is the one that competes in a resourcing conversation: £3,150 a month is a rounding error in most budgets, and £37,800 a year against the cost of a writer is an argument. This tests whether the candidate reasons honestly from here — this is the cost of the tickets, not the saving from a writer, and claiming the second would be overstating. The defensible version says that a measured proportion of these tickets is documentation-addressable and estimates the saving from that share.

**Question 3 (easy) — Weighted aggregation across teams**

Four teams' documentation sets have defect rates per hundred pages of 4 on 300 pages, 10 on 100, 6 on 200, and 5 on 400. Ask for the overall rate.

- A) 5.4
- B) 6.25
- C) 5.0
- D) 7.0

**Correct answer: A**

**Explanation:** Convert to counts. 4 per hundred on 300 = 12 defects. 10 per hundred on 100 = 10. 6 per hundred on 200 = 12. 5 per hundred on 400 = 20. Total 54 across 1,000 pages, so 5.4 per hundred, giving A. Option B is the unweighted mean of 4, 10, 6 and 5, which is 6.25 and over-weights the 100-page team against the 400-page one. This tests whether the candidate reasons past the arithmetic to the organisational point: the unweighted figure describes the average *team*, while the weighted figure describes the average *page* — and only the second describes what a reader encounters, which is the figure that belongs in a report the candidate signs.

**Question 4 (easy) — Reading a distribution**

Of 340 pages, 40 account for 85% of traffic and 120 have had no visits in a year. Ask for the strongest reading.

- A) The 120 should be archived.
- B) The distribution is normal for technical documentation, and zero traffic is ambiguous — genuinely obsolete content, rarely-needed critical content such as recovery or migration guides, and content nobody can find all look identical in the figures, so the number identifies candidates for investigation rather than for deletion.
- C) Maintenance should focus on the 40.
- D) The set should be reduced to 40 pages.

**Correct answer: B**

**Explanation:** Zero traffic is the most misread statistic in documentation management, because it is ambiguous in a way that makes acting on it directly hazardous, and the three cases have opposite remedies. Obsolete content should go. A migration guide for a version some integrators are still on is *supposed* to have almost no traffic and is catastrophic to lose. And unfindable content looks identical to unwanted content in the figures while needing promotion. This tests whether the candidate distinguishes them, as option B does. Option A treats a recovery procedure as dead weight, which is the error discovered during a recovery. Option C is a sensible maintenance allocation answering a different question. Option D is A with more conviction.

**Question 5 (moderate) — Evaluating an intervention**

After introducing generated reference documentation, integration tickets fell from 175 to 130 a month. Ask for the change, and what should be checked.

- A) 26% reduction, demonstrating the intervention worked
- B) 26% reduction, and the check is whether the fall is concentrated in the ticket categories generated reference addresses — parameter names, response fields, endpoint behaviour — because a fall spread evenly across categories suggests something else changed
- C) 35% reduction
- D) 45 tickets, which is the meaningful figure

**Correct answer: B**

**Explanation:** The difference is 45, and 45 ÷ 175 = 0.257, about 26%, so option C miscalculates by dividing by the new figure. Between A and B the check decides it, and it is a specific and answerable one: generated reference fixes a defined class of question — what a field is called, what an endpoint returns, which parameters exist — so attribution holds if the fall is concentrated there and does not if tickets fell uniformly, which would suggest a quieter period or a change in how tickets are logged. This tests whether the candidate performs that check, since at this level a candidate will be asked whether the investment worked, and a claim not tested is one that collapses when next year's figures move the other way.

**Question 6 (moderate) — Estimating team capacity**

Four writers each have about 120 productive days a year. An API programme estimates needing 200 writer-days. Ask what proportion of the team's annual capacity that is, and what should be noted.

- A) 42%, and the note is that this leaves 280 days for everything else including maintenance of an existing 340-page set
- B) 42%
- C) 50%
- D) 200 days is manageable across four writers

**Correct answer: A**

**Explanation:** Total capacity is 4 × 120 = 480 days, and 200 ÷ 480 = 0.417, about 42% — so the arithmetic gives A and B equally, and the note decides it. This tests whether the candidate adds the note, which is the substantive part at this level: a request for 42% of annual capacity is not obviously unreasonable, and it becomes a decision rather than an acceptance once the remaining 280 days are set against the maintenance load of an existing set plus every other team's requests. Stating that turns "can you do this?" into "here is what we would not do", which is the only form in which a capacity conversation is honest. Option D accepts without establishing the trade.

**Question 7 (moderate) — Percentage change**

Monthly visits to a getting-started guide rose from 5,600 to 7,000 after it was linked from the API console. Ask for the increase, and what it suggests.

- A) 20%
- B) 25%, suggesting findability rather than content was the constraint — which is worth testing elsewhere in the set
- C) 80%
- D) 25%

**Correct answer: B**

**Explanation:** The difference is 1,400, and 1,400 ÷ 5,600 = 0.25, a 25% increase, so option A divides by the new figure. Between B and D the interpretation decides it, and it generalises: a quarter more readers from adding one link means the content was adequate and unreachable, which raises the obvious question of how much else in a 340-page set is in the same position. This tests whether the candidate notices that this is a cheap and high-yield line of investigation — the difference between reporting a number and directing work with it.

**Question 8 (moderate) — Comparing two documentation approaches**

Version A of a guide had 14,000 visits with 4,200 users progressing. Version B had 9,000 visits with 3,600 progressing. Ask which performed better, and what else should be asked.

- A) Version A, with more users progressing.
- B) Version B, at 40% against 30% — and the question is why B has lower traffic, since a better page reaching fewer people may need promotion rather than congratulation.
- C) They are equivalent.
- D) Version A, with more traffic.

**Correct answer: B**

**Explanation:** Convert to rates: A is 4,200 ÷ 14,000 = 30%, B is 3,600 ÷ 9,000 = 40%. B performs better per reader, so options A and D compare raw counts across different-sized groups. The second clause is what makes B the complete answer: a page converting better while reaching fewer people is a partial success, and if the traffic difference reflects findability then promoting B would deliver more than the rewrite did. This tests whether the candidate notices this second half, since rate is the right comparison and it is not the whole picture — at this level, that second half is what turns an evaluation into a decision.

**Question 9 (moderate) — Estimating documentation effort**

An API has 60 endpoints. A writer estimates 90 minutes each, giving 90 hours. Ask for the most useful thing to establish.

- A) Whether 90 minutes is realistic.
- B) Whether the endpoints share request, response and error patterns — because a well-designed API has a handful of patterns with consistent authentication, pagination and error behaviour, making the work closer to documenting the patterns once plus 60 short variations, which is a much smaller job.
- C) The total, which is 90 hours.
- D) Whether the writer has documented an API before.

**Correct answer: B**

**Explanation:** The estimate treats endpoints as independent, and REST APIs rarely are. This tests whether the candidate establishes the structure, which can move the estimate by more than half — and the direction of the finding is informative either way: an API with sixty genuinely idiosyncratic endpoints is a much larger documentation job and also a much worse API, which is worth saying to the technology lead before either commits. Option A asks about the rate rather than the structure, the less consequential half. Option C computes what the estimate implies without questioning its basis, which is how documentation programmes get scoped at twice their real size and then descoped in a way that removes the wrong things.

**Question 10 (harder) — A directionless metric**

The portal reports average time on page as 4 minutes, and a stakeholder reads this as strong engagement. Ask for the strongest response.

- A) Agree.
- B) Time on page has no direction for reference documentation — a developer finding an answer in ten seconds is a success and one spending four minutes on a confusing page is a failure — so the figure supports neither reading, and the measures with direction are progression, repeat searching and ticket volume.
- C) The pages should be shorter.
- D) Break it down by page.

**Correct answer: B**

**Explanation:** Time on page is misleading everywhere and inverted here, because the ideal interaction with a reference page is brief. This tests whether the candidate names the ambiguity and supplies measures that move interpretably, as option B does. The stakes at this level are higher than being right: a stakeholder who has accepted dwell time as an engagement measure will eventually ask the team to improve it, and a documentation team optimising for time on page will make things worse extremely efficiently. Saying so before the metric becomes a target is the intervention. Option D reports the same directionless quantity more granularly. Option C acts on one interpretation.

**Question 11 (harder) — Percentage points and relative change**

The proportion of integrations completed within a day rose from 45% to 57% after a documentation programme. Ask which statement is accurate.

- A) A 12% increase.
- B) A 12 percentage point increase, equivalent to a 27% relative increase.
- C) A 27 percentage point increase.
- D) A 21% increase.

**Correct answer: B**

**Explanation:** The gap is 57 − 45 = 12 percentage points; the relative increase is 12 ÷ 45 = 0.267, about 27%. Option B labels both. Option A is ambiguous and generally read as relative. Option C misapplies the label. Option D divides by the new value. This tests whether the candidate recognises a stake specific to this level: technical writing value claims already attract scepticism, and a lead who reports the larger-sounding figure and is later found to have chosen it will find every subsequent claim discounted. Making both figures a standing convention in the team's reporting removes the temptation and the suspicion together, and costs nothing.

**Question 12 (harder) — A figure in a business case**

A business case for two additional writers claims a saving of £240,000 a year. Integration tickets number 2,100 a year at £18 each. Ask what should be checked.

- A) Nothing; the case is made.
- B) The arithmetic does not reconcile: eliminating every integration ticket would save about £37,800, so a £240,000 claim must rest on something else — developer time, delayed integrations, or abandoned onboarding — and unless that basis is stated and defensible the case will not survive scrutiny.
- C) Whether £18 per ticket is right.
- D) Whether two writers is the right number.

**Correct answer: B**

**Explanation:** 2,100 tickets at £18 is £37,800, so the claimed saving exceeds the entire ticket cost by a factor of more than six — which means either the case rests on a different and unstated benefit, or somebody has produced a number they cannot defend. This tests whether the candidate identifies the gap and names the plausible alternative bases, all of which are legitimate: integrator time is real, delayed integrations have costs, and abandoned onboarding is expensive — the point is that they must be stated. A business case whose headline figure cannot be reconciled with its own supporting data will be taken apart by finance, and the damage extends beyond the bid — it will be remembered the next time the candidate's function asks for anything. Option C is a fair secondary check on a much smaller discrepancy.

### Administration tips

- Score for whether the candidate quotes the addressable subset of a figure rather than a total that overstates the case.
- Note whether the candidate weights an aggregate across teams by the underlying counts rather than averaging rates.
- Watch for whether the candidate tests attribution — checking that a fall is concentrated where an intervention should affect it — before claiming an intervention worked.
- Score for whether the candidate names what would not be done when accepting or presenting a capacity request.
- Note whether the candidate reconciles a business case's headline figure against its own supporting data before it goes forward.

### Common pitfalls to watch for when scoring

- Crediting a monthly figure presented as though it were the annual one in a resourcing argument.
- Missing when a candidate claims a ticket's cost as a saving, which are not the same figure.
- Rewarding an unweighted average of team-level rates presented as the organisational rate.
- Accepting a business case whose headline figure the candidate has not reconciled against its own supporting data.
- Missing when a candidate lets dwell time or another directionless metric stand as evidence of engagement.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A verbal reasoning assessment measures how accurately a candidate reads. For this discipline it is close to the job: a lead's team reads specifications, tickets, code comments and API contracts and turns them into something a reader can act on, and the lead assures the result. Getting it wrong in either direction is serious — understate a constraint and integrators build something that breaks, overstate one and they build defensively around a limit that does not exist.

The classic format presents a short passage of dense workplace prose, typically three to six sentences, followed by statements to classify as True, False, or Cannot Say. Alongside these come comprehension items, main-point items, and questions asking which of four summaries is most accurate.

The governing rule is that a candidate answers from the passage alone, and the part specific to this level is that expertise costs marks. A candidate who knows how these systems usually behave, and supplies the expected behaviour rather than the described one, makes exactly the error that produces documentation asserting things a specification never said. Candidates at this level underperform on verbal reasoning at rates that surprise them.

Cannot Say is the answer experienced practitioners avoid, and in this discipline it has a specific value: identifying that a specification does not determine something is how a candidate finds the question somebody must answer before their team documents it.

Small words carry the load. "May", "should" and "must" have defined force in specification prose. "Or" offers alternatives. And silence is a gap, not permission.

### How this assessment maps to the role

- **Reading specifications precisely** maps to **Technical understanding (user-centred design)**.
- **Separating statement from inference** maps to being accountable for the production of high quality content.
- **Identifying the main point** maps to the team's core task, which the candidate assures.
- **Handling qualified language** maps to **Technical understanding**, where "may" and "must" carry defined weight.
- **Reading for absence** maps to **User-centred content design**, where identifying gaps is named.
- **Reading governance and review prose** maps to **Stakeholder relationship management**.

### Practice questions

*Passage A — for Questions 1 to 4*

"Clients must include an Authorization header on all requests to protected endpoints. Clients may include an Idempotency-Key header on POST requests; where present, the server will return the original response for any repeated request with the same key within 24 hours. Servers must reject requests exceeding 2 MB with a 413 response. Clients should implement exponential backoff on 429 responses."

**Question 1 (easy)** — Statement: "Clients must include an Idempotency-Key on POST requests."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage says clients *may* include it — optional. The statement's "must" contradicts that, so False. The passage uses all three modal terms deliberately: Authorization is mandatory, idempotency keys optional, backoff recommended. A documentation set that flattens those into one register either over-constrains integrators or under-warns them, and at this level the useful output is a house convention on how each is rendered — because four writers left to their own instincts will produce four treatments of the same distinction.

**Question 2 (easy)** — Statement: "A repeated POST with the same key after 30 hours returns the original response."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The guarantee applies to repeats *within 24 hours*, and 30 hours falls outside it, so the statement is contradicted. False. Note what the passage does not establish: what happens after 24 hours is unstated — the request might be processed as new, rejected, or something else — so an honest draft documents the guarantee and its window and does not invent the behaviour beyond it. That gap is exactly the sort of thing worth flagging to engineering before publication rather than resolving by assumption.

**Question 3 (moderate)** — Statement: "A client without exponential backoff is non-compliant."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage says clients *should* implement backoff. In specification usage "should" indicates a strong recommendation that may be departed from for good reason, not a requirement — so a client without it departs from a recommendation and is not non-compliant. False. The distinction matters to integrators because it tells them whether omitting the behaviour will get their client rejected or merely leave it less well behaved, and documentation rendering both as "you need to" removes information they use to prioritise. At this level this is a review criterion worth naming explicitly.

**Question 4 (harder)** — Statement: "A 1.9 MB request will be accepted."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage requires servers to reject requests *exceeding* 2 MB, so a 1.9 MB request is not rejected on size. But acceptance depends on authorisation, validity, rate limits and anything the passage does not mention, and the passage establishes only that one rejection does not apply. Cannot Say. The distinction between "will not be rejected for this reason" and "will be accepted" is one a candidate's reviewers should be catching in drafts, because writing "requests under 2 MB are accepted" makes a promise the specification does not, and the integrator who believes it and then sees a valid-sized request fail validation concludes the documentation is unreliable.

*Passage B — for Questions 5 to 8*

"The review of the developer portal found that teams publishing reference documentation alongside code releases reported fewer integration support tickets than teams publishing separately. The review notes that the teams publishing alongside releases were also those with dedicated technical writers. The review did not assess documentation accuracy. It recommends that the portal team consider whether alongside-release publishing should be standard."

**Question 5 (easy)** — Statement: "Teams publishing alongside releases reported fewer integration tickets."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The first sentence states this directly and the statement restates it without addition. True. Note the careful "reported fewer" rather than "had fewer" — a distinction the statement respects, and one worth preserving whenever a team writes up findings, because reported and actual volumes diverge for reasons that have nothing to do with the thing being measured.

**Question 6 (moderate)** — Statement: "Publishing alongside releases reduces support tickets."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage reports an association and flags that the same teams had dedicated technical writers, which is a substantial confound — a team with a dedicated writer would be expected to produce better documentation whenever it published. So the fall may be attributable to the writer, the timing, both, or something unnamed. Cannot Say. This is the specific trap for someone at this level, because "publishing alongside releases reduces tickets" is a claim a candidate would like to be true and would cite when standardising the process. The stronger and honest argument is available: documentation published after a release is documentation integrators did not have when they needed it, which stands on its own without needing the ticket data.

**Question 7 (moderate)** — Statement: "The documentation published alongside releases was more accurate."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage says explicitly that accuracy was not assessed. Declared silence establishes nothing, so Cannot Say. The possibility worth registering is that documentation written under release pressure might be *less* accurate while generating fewer tickets, if it arrives in time to prevent confused questions that a later and better document would have answered. Fewer tickets and better documentation are different outcomes, and a review measuring one has told you about one — which matters if the candidate is about to standardise a process on the strength of it.

**Question 8 (harder)** — Statement: "The review recommends making alongside-release publishing standard."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The review recommends that the portal team *consider whether* it should be standard — a recommendation to evaluate, including deciding against. The statement asserts a recommendation to adopt, which was not made, so False rather than Cannot Say. At this level a candidate is likely to be both a recipient of this and the person who writes what the organisation did about it, so misreading it commits them to standardising something nobody asked for and then reporting delivery against it — which is how processes acquire the appearance of a mandate they never had.

*Passage C — for Questions 9 to 12*

"Documentation for a public API must state the endpoint, method, required and optional parameters with types, the response schema, and all error codes the endpoint can return. Where an endpoint is deprecated, documentation must state the deprecation date and the recommended alternative. Code samples must be executable as written against the documented version. Documentation must be reviewed whenever the endpoint changes, and at least annually."

**Question 9 (easy)** — Statement: "Documentation must list all error codes an endpoint can return."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The first sentence requires all error codes the endpoint can return, and the statement restates it. True. Worth noting why the requirement is absolute: an undocumented error code is one an integrator cannot handle, producing clients that work in testing and fail in production when an unanticipated response arrives. It is also the section most commonly incomplete, usually because a writer documents the errors they encountered rather than the ones the endpoint can produce — which is a template and access problem at this level rather than a diligence problem for the writer.

**Question 10 (moderate)** — Statement: "A sample working against the current version but not the documented version satisfies the requirement."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The requirement is that samples are executable *against the documented version*. A sample working only against a different version fails that. False. The scenario is entirely realistic: documentation for version 2 gets samples tested against version 3, because that is what the writer had running, and every integrator still on version 2 — the audience for that documentation — finds the sample fails. The requirement names the version specifically because this is the error it exists to prevent, and it is one a candidate's review process should be checking rather than assuming.

**Question 11 (harder)** — Statement: "Documentation reviewed eleven months ago, with no endpoint changes since, is compliant."

- A) True
- B) False
- C) Cannot Say

**Correct answer: A**

**Explanation:** The requirement has two limbs — review on change, and at least annually. With no changes the first is not triggered, and eleven months is within the annual limit, so both are satisfied and the statement follows. True. Contrast the structure that produces a Cannot Say: had the passage not told the candidate whether the endpoint changed, the case would be undetermined. Here both facts are supplied, so the compound condition can be fully evaluated. This tests whether the candidate reads which facts they have, rather than treating every compound condition as indeterminate.

**Question 12 (harder) — Main point**

Ask which best captures the main point of Passage C.

- A) Documentation must list all error codes.
- B) API documentation must be complete, executable and current — specifying the interface fully including errors, giving deprecation dates and alternatives, containing samples that run against the version documented, and being reviewed on change and at least annually.
- C) Code samples must be executable.
- D) Documentation must be reviewed annually.

**Correct answer: B**

**Explanation:** The main point must cover the whole passage while adding nothing. Options A, C and D are each true of one provision, and D drops the change-triggered review. Option B captures the four requirements and names the logic joining them: an integrator relies on documentation as a contract, so it must describe the interface fully, work when followed, and not describe a system that no longer exists. This tests whether the candidate preserves "against the version documented" and both review triggers — a summary dropping either is one the candidate's team could follow and still fail the requirement, which is the test of whether a summary is usable.

### Administration tips

- Score for whether the candidate sets or applies a house convention for rendering "may", "should" and "must" consistently.
- Note whether the candidate distinguishes "will not be rejected for this reason" from "will be accepted".
- Watch for whether the candidate treats a specification's declared silence as a gap to raise rather than a behaviour to infer.
- Score for whether the candidate distinguishes "consider whether X" from "recommend X" in review prose.
- Note whether the candidate preserves a version qualifier or review trigger when summarising a requirement.

### Common pitfalls to watch for when scoring

- Crediting a statement judged True or False from the candidate's own technical expectation rather than the passage.
- Missing when a candidate renders "should" as a hard requirement.
- Rewarding a claim marked True because it would support a process the candidate favours, despite a confound the passage names.
- Accepting a summary that drops a qualifier (a version, a trigger, a time window) that changes what a reader could rely on.
- Missing when a candidate lets samples be treated as compliant if tested against whatever version happens to be running.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks what a candidate would do — a dilemma of the kind this role produces, four or five possible responses, and a question asking which is most effective and often which is least.

This section measures whether a candidate's judgement matches what the profession considers good practice at this level. The role places a lead technical writer as an expert practitioner directing a team, assuring quality across teams, standardising tools and processes, working with technology leaders and senior stakeholders to resource teams and resolve problems, and promoting the discipline.

Three features distinguish this level. Most of what the candidate achieves happens through other people — an option solving a problem through personal intervention is usually second-best, because it does not survive the candidate's absence and does not scale past their calendar. The function is chronically under-resourced because its absence is invisible — documentation that does not exist produces support tickets, integrator delay and abandoned onboarding, and none of those arrive labelled as a documentation problem, which makes options bringing evidence in other people's currencies systematically stronger than options asserting importance. And the candidate absorbs pressure downwards — when a technology lead tells a writer their documentation is blocking a release, the writer should not be holding that line.

Four principles carry most scenarios: accuracy is not negotiable in the way clarity is; work through engineers rather than around them; ask who maintains it; and fix the mechanism rather than the document.

### How this assessment maps to the role

- **Directing a team** maps to **User-centred content design**, overseeing teams' work and being accountable for high quality content.
- **Standardising** maps to this role level's named standardisation of tools, ways of communicating and processes.
- **Resourcing and resolving problems** maps to **Stakeholder relationship management**, influencing and negotiating with senior stakeholders.
- **Capability development** maps to **User-centred content design**, identifying gaps in skills and helping teams grow.
- **Promoting the discipline** maps to this role level's named promotion and community engagement.
- **Strategic alignment** maps to **Strategic thinking**.

### Practice questions

**Question 1 (easy) — A writer under pressure**

A writer tells the candidate a technology lead is insisting documentation ships with a release despite an unverified process, and has implied the writer is blocking it. Ask for the most effective response.

- A) Tell the writer to hold the line.
- B) Establish with them what can be verified in the time available and what cannot, then take the conversation with the technology lead personally — offering to publish the verified parts with the unverified section marked and dated rather than presenting it as all or nothing.
- C) Escalate.
- D) Approve publication.

**Most effective: B. Least effective: D**

**Explanation:** Two things must happen: unverified content does not ship as verified, and the writer is not left in a standoff with a technology lead. Option B does both, and the partial-publication offer is what makes it succeed — the lead's real need is that something ships with the release, and "here is what we can stand behind, and here is what is marked as unverified" usually satisfies it while an all-or-nothing refusal does not. Taking the conversation personally is the candidate's job at this level. Option D is least effective, publishing unverified process documentation, which is the specific failure that costs a documentation set its credibility permanently. Option A leaves a writer refusing a technology lead by proxy. Option C escalates before attempting a resolution available to the candidate.

**Question 2 (easy) — A standard nobody follows**

The candidate introduced a documentation template a year ago. Teams do not use it, describing it as too heavy. Ask for the strongest approach.

- A) Reissue it with a message.
- B) Review recent documentation with the teams to establish which sections are genuinely unnecessary for their content type and which are being skipped because the information is hard to get, then cut the first and solve the second — since a template that requires information nobody can obtain will be abandoned whatever its merits.
- C) Mandate its use.
- D) Run training on the template.

**Most effective: B. Least effective: A**

**Explanation:** A template nobody uses has already failed, and reissuing changes only the date. Option B treats the objection as data and distinguishes two causes with different remedies: sections that are genuinely superfluous for a content type should be cut, and sections skipped because the information is unavailable — error codes being the usual example — need an access fix rather than a template change. Getting that distinction wrong means either cutting a field that matters or leaving a requirement people cannot meet. Option A is least effective, the purest form of appearing to act. Option C mandates something people have said is unworkable, producing completed-and-empty sections. Option D is useful and insufficient alone.

**Question 3 (easy) — Conditions for the team**

Four writers are each embedded with a different engineering team, spend most of their time on reactive requests, have no shared review practice, and one has left in six months. Ask for the strongest response.

- A) Discuss workload with each engineering team.
- B) Treat it as structural: establish a shared review routine so writers see each other's work, protect time for planned rather than reactive work, and change how they are deployed if single embedding means nobody has a peer.
- C) Recruit a replacement.
- D) Introduce a wellbeing initiative.

**Most effective: B. Least effective: C**

**Explanation:** Writers embedded singly with no shared practice is a structural pattern with two distinct costs: the people have nobody to learn from, and the work has nobody checking it — and in technical writing peer review catches a specific and important class of error, since a second writer reading a draft asks the questions an integrator would ask. Option B addresses both. Option C is least effective, recruiting into conditions that produced the departure and, in a small discipline, into a role whose reputation travels. Option A addresses symptoms individually and leaves each writer negotiating alone with the team they depend on. Option D treats a design-of-work problem as morale.

**Question 4 (moderate) — Assuring across teams**

A team the candidate does not manage has published API documentation with a wrong parameter name. Integrators are copying it. Ask for the most effective response.

- A) Correct it directly if possible.
- B) Contact the writer and their lead immediately with the specific error, agree who corrects it and when, and ask whether the same parameter appears elsewhere in their set — while making clear that a wrong name in a copied sample is now in integrators' codebases.
- C) Raise it at the writing community.
- D) Report it to the technology lead.

**Most effective: B. Least effective: C**

**Explanation:** A wrong parameter name in a published sample is live and propagating, because developers paste samples rather than reading them. Option B moves fast, goes to the people who can fix it, and asks the question that distinguishes a lead's response — errors of this kind are rarely isolated, since a writer who used a wrong name once has probably used it consistently. Option C is least effective, deferring a live error to a scheduled forum and broadcasting a team's mistake before they can fix it, which costs their cooperation. Option A bypasses the people responsible and may exceed the candidate's permissions. Option D escalates before asking.

**Question 5 (moderate) — Making the resourcing case**

The candidate needs a fourth writer. The technology director believes engineers can write their own documentation. Ask for the most effective response.

- A) Explain what technical writers do.
- B) Lead with evidence in the director's currency — integration ticket volume and cost, the measured fall after a specific documentation intervention, and the engineer time currently spent answering questions the team could absorb — then set out what a fourth writer would take on and what the candidate would stop doing without one.
- C) Point to the service standard.
- D) Show examples of poor engineer-authored documentation.

**Most effective: B. Least effective: D**

**Explanation:** A director who believes engineers can write documentation has already discounted the premise, and explaining the discipline confirms their view that this is a preference. Option B inverts the order: establish the cost in figures the director already uses, then price the ask, and — the part that makes it credible — name what the candidate would stop doing, since a lead who claims everything is essential is not making a trade-off, they are making a demand. The engineer-time element is particularly effective with a technology director, because it converts the bid into a saving in a resource they care about more than the writer's own. Option D is least effective, criticising the work of the director's own engineers, which makes the conversation about their team's competence and guarantees resistance. Option C invokes compliance, which wins a minimum and never wins resource.

**Question 6 (moderate) — A recurring gap across teams**

Documentation across five teams consistently omits error codes. Each writer says engineering does not give them the information. Ask for the most effective response.

- A) Remind writers that error codes are required.
- B) Accept the diagnosis the writers have given: five writers reporting the same access problem means the information route is the issue, so negotiate once with technology leadership for a way writers can obtain error behaviour — access to the code, a required field in the API specification, or a standing question in release planning.
- C) Add error codes to the review checklist.
- D) Have writers document the errors they can find.

**Most effective: B. Least effective: A**

**Explanation:** Five writers giving the same explanation is good diagnostic information, and it is an access problem rather than a diligence one. Option B does the thing only the candidate can: negotiating once with technology leadership on all five writers' behalf, rather than leaving five people to have the same losing conversation separately. The three routes it names are worth knowing because one is usually easy — error responses are frequently already in the API specification and simply not surfaced to writers. Option A is least effective, telling five writers a requirement they know and cannot meet, which also teaches them that reporting a blocker gets them a reminder. Option D institutionalises incomplete error documentation, which is worse than none because it looks complete. Option C adds a check for a gap the system creates.

**Question 7 (moderate) — Standardising tools**

Writers use three documentation tools inherited from their engineering teams. Ask for the most effective response.

- A) Standardise on one immediately.
- B) Establish what the fragmentation actually costs — whether writers can cover for each other, whether templates are maintained three times, whether shared style changes need three implementations — and standardise only if the cost is real, since the tools belong to engineering teams and changing them is a substantial ask.
- C) Leave it.
- D) Standardise on the most popular.

**Most effective: B. Least effective: A**

**Explanation:** Standardisation is named in this role and is not automatically correct, and this case has a specific complication: documentation tooling is usually part of an engineering team's own toolchain, so standardising means asking three teams to change something they own and maintain. That requires a reason proportionate to the ask. Option B establishes whether one exists, and the tests it names are the right ones — cover, duplicated maintenance and change cost are where fragmentation actually hurts. Option A is least effective, paying a substantial political cost without establishing the benefit, and it is the kind of early initiative that consumes the goodwill a new lead needs. Option D picks by popularity rather than need. Option C forgoes the question.

**Question 8 (harder) — Documentation nobody will maintain**

A programme asks the candidate's team to produce detailed documentation for an internal platform that changes weekly and has no product owner. Ask for the most effective response.

- A) Produce it as asked.
- B) Establish who will keep it current before committing — and if nobody will, propose the alternative that survives: a short overview that ages slowly plus generated reference from the platform's own configuration, rather than a detailed guide that will be wrong within two months and will then mislead people who trust it.
- C) Decline.
- D) Produce a shorter version.

**Most effective: B. Least effective: A**

**Explanation:** Documentation has a maintenance cost invisible at the moment of writing and inevitable afterwards, and detailed documentation of a weekly-changing platform with no owner is a liability being requested in good faith. Option B asks the determining question and — crucially — offers the alternative that works, because declining without one gets the candidate overruled or resented. Short conceptual material ages slowly, and generated reference cannot drift, so the combination delivers most of the value with a fraction of the decay. Option A is least effective, committing the team's capacity to producing something that will actively mislead. Option D reduces the burden without addressing ownership. Option C declines a legitimate need without a route.

**Question 9 (harder) — Promoting the discipline**

The candidate is asked to explain to a technology leadership group why technical writing is a distinct discipline rather than something any good communicator can do. Ask for the most effective response.

- A) Explain the skills involved.
- B) Show it: take a real page from the organisation's own estate, show what an integrator hits, and show the version that answers the question they actually arrive with — then name what the writer had to know and have access to in order to produce it.
- C) Cite industry practice.
- D) Present the ticket data.

**Most effective: B. Least effective: A**

**Explanation:** An audience that believes any good communicator can do this has never seen the difference demonstrated, and demonstration works where explanation does not — particularly with a technology audience, who will recognise the failure mode immediately once it is in front of them in their own documentation. Option B also names the part that is genuinely hard and invisible: the writer had to read the code, know what an integrator does at that moment, and have an environment to verify in. Option A is least effective for the reason it feels natural, because a list of skills is exactly what somebody who thinks writing is easy will discount. Option D is strong and is the resourcing argument rather than the discipline argument; it establishes that documentation matters without establishing that it needs specialists.

**Question 10 (harder) — A strategic misalignment**

The organisation is moving to an API-first model. The candidate's team spends most of its capacity on internal process documentation because no other function will write it. Ask for the most effective response.

- A) Continue; the work is needed.
- B) Surface it as a resourcing question rather than absorbing it: set out what proportion of capacity goes on internal process documentation, what will not be done for the API programme as a result, and ask where the organisation wants the capacity — because silently absorbing work nobody owns means the misalignment is invisible and permanent.
- C) Redirect the team to API documentation.
- D) Ask for more writers.

**Most effective: B. Least effective: A**

**Explanation:** The candidate's team has become the place unowned documentation lands, which is a common fate for a small competent function and is invisible until somebody counts. Option B makes the trade explicit and puts the decision where it belongs, and the framing matters — this is not a complaint but a capacity allocation question, and presenting it with the proportions attached makes it answerable. Option A is least effective, absorbing the work silently, which guarantees the misalignment persists and that the team is later criticised for not supporting the strategy. Option C redirects unilaterally and leaves internal documentation undone, which somebody will notice in a way that reflects on the candidate. Option D asks for resource before establishing what the current resource should do.

**Question 11 (harder) — A flaw in something the candidate standardised**

Six months ago the candidate introduced a template now used across the organisation. It has no field for error codes, and error documentation has become patchier since. Ask what should happen.

- A) Add the field.
- B) Add the field, tell the teams that documentation produced with the template may be missing error codes, identify which pages need retrofitting, and ask why the template review did not catch a missing section that is among the most important in API documentation.
- C) Add it quietly.
- D) Note it for the next template review.

**Most effective: B. Least effective: C**

**Explanation:** A template used across an organisation propagates its gaps into everything produced with it, so this is not one omission but six months of documentation. Option B does the four things that matter: fixes it, tells the people whose documentation is affected since they cannot know otherwise, scopes the retrofit, and asks the question specific to this level. That last part is the only element preventing recurrence, and the answer is usually that the template was reviewed by writers against style rather than against the completeness requirements of the content type — which is a review criterion the candidate can change. Option C is least effective, leaving six months of incomplete documentation undiscovered while creating a record suggesting the problem was handled. Option A does the same more openly. Option D defers a compounding problem.

**Question 12 (harder) — Cross-government contribution**

The candidate's team has developed an approach to documenting authentication flows that works well, and other departments plainly face the same problem. Ask for the most effective response.

- A) Use it internally.
- B) Share it through the cross-government community with the reasoning, the evidence, and an honest note on where it did not work — and offer to help anyone adapting it, accepting that others may improve it.
- C) Publish it as a cross-government standard.
- D) Mention it to writers known personally in other departments.

**Most effective: B. Least effective: A**

**Explanation:** This role names promoting the discipline and engaging with the cross-government community, and authentication is documented badly nearly everywhere, so one tested approach is worth considerably more than several departments arriving at their own. Option B shares it well, and the honest note about where it did not work is what prevents the approach being adopted into contexts it does not fit — a pattern suited to token-based flows may be wrong for certificate-based ones, and saying so is what makes it usable rather than merely available. Option A is least effective, keeping a solution while other departments repeat the work. Option C publishes as a standard something one team has tested. Option D helps a few people and bypasses the mechanism built for exactly this.

### Administration tips

- Score for whether the candidate offers a partial or interim solution that meets the real underlying need, rather than an all-or-nothing response.
- Note whether the candidate negotiates once on behalf of a whole team facing the same blocker, rather than leaving individuals to repeat the same conversation.
- Watch for whether the candidate leads a resourcing case with evidence in the audience's own currency before naming the ask.
- Score for whether the candidate offers a working alternative when declining a request, rather than declining without a route forward.
- Note whether the candidate surfaces absorbed or unowned work as an explicit capacity question rather than continuing to absorb it silently.

### Common pitfalls to watch for when scoring

- Crediting a response that publishes unverified content under release pressure rather than offering a partial or marked publication.
- Missing when a candidate reissues or mandates a standard teams have already shown they will not follow.
- Rewarding a candidate who criticises engineers' own documentation when making a resourcing case to a technology director.
- Accepting a candidate who standardises a toolchain they do not own without establishing a proportionate reason.
- Missing when a candidate commits a team's capacity to documentation nobody will maintain, or fixes a flawed template without telling affected teams.

## Conclusion

This guide has worked through pattern recognition and systemic diagnosis across documentation the candidate did not write, portal analytics, and team capability; the arithmetic that supports a resourcing argument — annualising and costing ticket volume, weighting a defect rate across teams by the underlying page counts, and reconciling a business case's headline figure against its own supporting data; the discipline of reading specifications and governance prose at exactly the strength the text supports, distinguishing "should" from "must" and "consider whether" from "recommend"; and the situational judgement that defines a strong lead technical writer — fixing the mechanism behind a recurring gap, negotiating once on a team's behalf rather than leaving individuals to repeat the same conversation, and leading a resourcing case with evidence in the audience's own currency.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several items reward the quality of reasoning as much as the final choice, and at this level the strongest answers consistently act on systems and mechanisms rather than instances. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
