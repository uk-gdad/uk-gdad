# Senior Frontend Developer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for senior frontend developer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the mental capabilities and behavioural tendencies that predict success in a role. For a senior frontend developer, that means far more than abstract puzzles: the assessments described here are job-specific, using artefacts the role genuinely handles — HTML, CSS and JavaScript, accessibility audit reports, web performance dashboards, build pipelines, design patterns, pull requests, sprint boards and stakeholder emails — and decisions genuinely made by someone planning and leading development on sets of related stories, making research-based decisions about tools and approaches, championing accessibility to internal stakeholders, and teaching and mentoring less experienced developers.

At this level, the role works with minimal support and influences others: helping set direction and embed good practice within teams, holding an understanding of the whole system rather than one corner of it, and collaborating with user researchers, interaction designers and other disciplines to understand what needs to be built before a line of code is written. Cognitive ability, numerical reasoning, verbal reasoning and situational judgement all map directly onto those demands.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Score for whether a candidate concludes only what the evidence guarantees, rather than what is merely plausible — several items are deliberately built so an experienced candidate's domain knowledge supplies a confident wrong answer where the text or data does not actually establish it. Situational judgement items at this level often turn on whether a candidate engages a stakeholder's underlying goal with evidence rather than either deferring or refusing outright, and whether they route a decision to its rightful owner when it exceeds their own risk threshold; use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive ability assessment measures the exact mental processes this role demands, using practical workplace scenarios rather than abstract shapes and sequences — markup and stylesheets, component libraries, accessibility audit findings, build configurations, browser support matrices and sprint boards — that ask a candidate to reason quickly and accurately about them.

Typical format: an online, timed test lasting 15 to 30 minutes, with 15 to 30 questions covering pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

For a senior frontend developer, cognitive ability is particularly relevant because the role's core professional value is structured thinking about a whole system: how a change to a shared component ripples across services, how a static assets build feeds a deployment pipeline, and what follows logically when a browser lacks JavaScript support and a progressive enhancement strategy has to carry the experience. At this level, reasoning is also amplified through others — teaching, mentoring and review — so an error propagates.

### How this assessment maps to the role

- **Pattern recognition** maps to **Prototyping** and **Programming and build (frontend developer)**: recognising when several superficially different interface problems share one underlying structure, and recurring structures in code and markup.
- **Logical deduction** maps to **Systems integration (frontend developer)** and **Strategic thinking**: reasoning validly from configuration and dependency rules to their consequences, and from principles to outcomes.
- **Error checking** maps to **Accessibility** and **Modern development standards**: systematic error detection against a predefined set of standards.
- **Prioritisation** maps to **Leadership and guidance (frontend developer)** and **User focus (frontend developer)**: decisions of medium risk and complexity, and ranking competing demands.
- **Applied problem solving** maps to **Web performance optimisation**, **Communicating information** and **Community collaboration**: diagnostic reasoning under constraints.

### Practice questions

**Question 1 (easy) — Pattern recognition in a component library**

BEM-style convention: block, then `__element`, then `--modifier`. Valid examples: `app-card`, `app-card__title`, `app-card__title--large`. Class names in a pull request: (1) `app-banner`; (2) `app-banner__heading`; (3) `app-banner--warning`; (4) `app-banner__heading--small`; (5) `app-banner--warning__icon`. Ask which class name breaks the convention.

- A) Class 2
- B) Class 3
- C) Class 4
- D) Class 5

**Correct answer: D**

**Explanation:** The order is block, element, modifier; class 5 attaches an element (`__icon`) after a modifier (`--warning`), inverting it — the correct form would be `app-banner__icon--warning`. This tests a consistency check that matters because broken conventions quietly destroy the predictability that lets any developer find, reuse and extend a component.

**Question 2 (easy) — Logical deduction about progressive enhancement**

Standard: "Every citizen-facing form must be fully usable without JavaScript, unless the service has a documented exemption agreed by the technical lead." A developer says: "The address lookup form on our service is citizen-facing and is not usable without JavaScript." Ask which conclusion must be true.

- A) The team has breached the standard.
- B) The service holds a documented exemption agreed by the technical lead.
- C) Either the service holds a documented exemption, or the team has breached the standard.
- D) The address lookup uses a third-party component that requires JavaScript.

**Correct answer: C**

**Explanation:** The standard is a conditional with one permitted exception; the facts given do not establish whether it applies, so neither A nor B is guaranteed alone, and D invents information. This tests concluding only what is guaranteed — before flagging non-compliance in a review, checking whether an exemption was agreed protects both the logic and the working relationship.

**Question 3 (easy) — Error checking a browser support table**

Policy: "compliant" support for the two most recent versions of each major browser, "functional" support for the version before those. Table: Browser A — Compliant, Compliant, Functional; B — Compliant, Functional, Functional; C — Compliant, Compliant, Functional; D — Compliant, Compliant, Compliant. Ask how many rows fail to meet the policy's minimum requirements.

- A) 0
- B) 1
- C) 2
- D) 3

**Correct answer: B**

**Explanation:** Row B fails (version N-1 is only functional where compliant is required); rows A and C meet the minimum exactly; row D exceeds it, which is not a failure. This tests reading a standard as stating a minimum, not a template — exceeding it is compliant, and matching the pattern of neighbouring rows does not itself indicate compliance or non-compliance.

**Question 4 (moderate) — Deduction from a build pipeline**

Rules: (i) the CSS build cannot start until design tokens are generated; (ii) the JavaScript bundle and the CSS build can run in parallel, but both must finish before fingerprinting; (iii) fingerprinting must finish before publishing to the CDN; (iv) design tokens take 2 minutes, CSS build 4, JavaScript bundle 5, fingerprinting 1, publishing 2. The JavaScript bundle and design tokens generation both start at time zero. Ask for the earliest time publishing can complete.

- A) 9
- B) 10
- C) 12
- D) 14

**Correct answer: A**

**Explanation:** Design tokens finish at minute 2; CSS build starts then, finishing at 6; the JavaScript bundle finishes at 5; fingerprinting starts at the later of the two (6), finishing at 7; publishing starts at 7, finishing at 9. This tests tracing a dependency graph to find the critical path — the JavaScript bundle sits comfortably inside it and adds nothing, so optimising it would save no time at all.

**Question 5 (moderate) — Prioritisation across a sprint**

Monday morning, final week of a sprint: (1) a live accessibility defect — keyboard users cannot dismiss a cookie banner on a public production service; (2) a junior developer's pull request, blocking their next story due Friday; (3) a request to update browser support documentation before Thursday's show-and-tell; (4) an intermittent flaky test failing roughly one build in ten, currently just re-run when it happens. Ask which sequencing is most defensible.

- A) 1, 2, 3, 4 — live user harm first, then unblocking a person, then a dated commitment, then an irritant
- B) 2, 1, 3, 4 — never leave a mentee blocked
- C) 1, 4, 2, 3 — fix all technical issues before process work
- D) 4, 1, 2, 3 — pipeline health underpins everything else

**Correct answer: A**

**Explanation:** Item 1 is live harm to users with access needs on a public service and comes first; item 2 compounds by the hour and comes next; item 3 has a real but modest-impact deadline; item 4 currently costs only occasional re-runs. This tests ranking by impact-weighted urgency with user harm at the top, rather than a fixed rule of thumb such as "technical first" (C, D) or "mentee first" (B).

**Question 6 (moderate) — Pattern recognition in defect reports**

Defects this month: (1) a date field rejects valid dates on non-UK locale devices; (2) a currency input mis-parses comma-separated amounts; (3) a name field rejects apostrophes; (4) postcode lookup fails for lower-case input; (5) page titles truncated on the Welsh-language version. Ask what single underlying theme most usefully connects the largest number of these.

- A) The team lacks automated tests.
- B) Input handling assumes one narrow format instead of accepting and normalising the variety real users produce.
- C) The service was not tested on mobile devices.
- D) The defects are unrelated and should be fixed individually.

**Correct answer: B**

**Explanation:** Defects 1–4 all share the same structure — a single canonical input format accepted, legitimate variants rejected or mishandled. This tests spotting a shared root cause across a set of defects rather than treating each individually (D) or attributing them to an unsupported cause (A, C) — one that turns five tickets into one conversation and one lasting fix.

**Question 7 (moderate) — Logical deduction about CSS cascade**

Rules in order: `.button { background: blue; }`; `#main .button { background: green; }`; `.button--warning { background: red; }`. A button inside `#main` has classes `button button--warning`. Ask what background colour it has, and why.

- A) Red — the last rule in the stylesheet wins
- B) Green — the ID-based selector has higher specificity than any single class
- C) Blue — the first matching rule wins
- D) Red — modifier classes always override base styles

**Correct answer: B**

**Explanation:** All three rules are author rules, so specificity decides; the ID selector plus a class outranks selectors built from classes alone, and source order only breaks ties, which do not exist here. This tests applying the cascade's resolution order (origin, then specificity, then source order) correctly, rather than applying source order first (A) or a convention that only holds when specificity is kept flat (D).

**Question 8 (moderate) — Error checking an accessibility audit response**

Findings against WCAG 2.2 AA: (1) images of text in hero banners; (2) contrast ratio 3.8:1 on body text; (3) no visible focus indicator on custom dropdowns; (4) form errors announced only by colour change. Draft response: real text replacing images of text; text darkened to 4.2:1; a two-pixel focus outline added; an error icon added beside the field. Ask which remediation is insufficient.

- A) Finding 1's remediation
- B) Finding 2's remediation
- C) Finding 3's remediation
- D) Finding 4's remediation

**Correct answer: B**

**Explanation:** WCAG 2.2 AA requires at least 4.5:1 for normal-size body text; 4.2:1 improves on 3.8:1 but still fails. This tests checking a claimed fix against the actual numeric threshold rather than accepting the direction of travel — teams fail audits twice when nobody checks the numbers in the remediation itself.

**Question 9 (hard) — Multi-constraint story planning**

Five related stories across five sprints, one starting per sprint: API contract agreement (A), backend endpoint build (B), component build (C), integration (I), accessibility testing (T). Constraints: (i) A must complete before both B and C start; (ii) I cannot start until both B and C are complete; (iii) T must start the sprint immediately after I; (iv) each story takes exactly one sprint; (v) B is delivered by another team, only free from sprint 3 onwards. Ask in which sprint C must start.

- A) Sprint 1
- B) Sprint 2
- C) Sprint 3
- D) Either sprint 2 or sprint 3

**Correct answer: B**

**Explanation:** With no slack (five stories, five sprints), A must be sprint 1; I and T must be the last two sprints in order (I sprint 4, T sprint 5); B cannot be sprint 2 (unavailable), so B is sprint 3 and C must be sprint 2. This tests spotting the knock-on effect of another team's availability window in a zero-slack plan, rather than checking only a story's own direct constraints.

**Question 10 (hard) — Applied problem solving in performance diagnosis**

Users report a page feels slow on mobile. Facts: server responds to the HTML request in 120ms; the JavaScript bundle is 900KB compressed, loaded with a blocking script tag in the head; images are correctly sized and lazy-loaded; CSS is 40KB and inlined for the critical path. Ask for the strongest hypothesis and first fix.

- A) Slow server — add a CDN in front of the HTML
- B) The blocking 900KB bundle delays rendering and interactivity — defer it, split it, and load only what the page needs
- C) Images — convert them to a newer format
- D) Inlined CSS — move it to an external cached file

**Correct answer: B**

**Explanation:** The server is fast (ruling out A), images are already optimised (ruling out C), and inlined critical CSS is a technique, not a defect (ruling out D) — leaving the blocking, very large bundle as the explanation the evidence actually supports. This tests letting measurements eliminate hypotheses before proposing a fix, rather than reaching for a generic performance technique regardless of what the evidence shows.

**Question 11 (hard) — Deduction across a whole system**

A form renders server-side, is enhanced with JavaScript, and submits to an API. True: (i) if the JavaScript enhancement loads, client-side validation runs before submission; (ii) the API applies server-side validation to every submission it receives; (iii) at least one submission last week reached the database containing an invalid postcode. Ask which conclusion follows necessarily.

- A) The JavaScript enhancement failed to load for that submission.
- B) The server-side validation contains a gap that permits that invalid postcode.
- C) Client-side and server-side validation use different postcode rules.
- D) A user bypassed the form and called the API directly.

**Correct answer: B**

**Explanation:** Rule (ii) says every submission passes through server-side validation with no exceptions, yet an invalid postcode reached the database — the only way both can be true is that the server-side rules have a gap. This tests distinguishing what a chain of stated guarantees necessarily entails from other merely possible routes to the same outcome (A, C, D) — client-side validation is a courtesy, server-side is the guarantee, and when bad data lands, the guarantee is where to look first.

**Question 12 (hard) — Prioritising a design pattern decision**

Three teams have each built an autocomplete component: Team 1's is accessible but slow on long lists; Team 2's is fast but fails screen reader testing; Team 3's is accessible and fast but tightly coupled to their service's framework version. Capacity exists to establish one shared pattern this quarter. Ask for the most defensible approach.

- A) Adopt Team 2's — performance problems are harder to fix than accessibility problems
- B) Adopt Team 3's after investing the effort to decouple it, because it is the only candidate that already meets both user-facing requirements
- C) Adopt Team 1's — accessibility must always win, and speed is a nice-to-have
- D) Ask all three teams to keep their own components and publish guidance instead

**Correct answer: B**

**Explanation:** Coupling harms only developers and is the most mechanically fixable of the three problems — decoupling has a known endpoint, whereas retrofitting accessibility or performance is open-ended. This tests ranking properties by both user impact and tractability, investing effort where the remaining problem is internal, rather than accepting a known user harm (A, C) or forfeiting the consistency benefit of a shared pattern entirely (D).

### Administration tips

- Score for whether the candidate distinguishes what is necessarily true from what is merely plausible, particularly in deduction items with a stated exception or conditional.
- Note whether the candidate reads a stated minimum or threshold as a floor, rather than matching against a pattern set by neighbouring examples.
- Watch for whether the candidate applies an ordered resolution procedure (the cascade, a prioritisation framework) in its correct order rather than skipping to a later criterion.
- Score for whether a proposed fix is checked against the actual evidence available, with alternatives ruled out explicitly, rather than the first plausible-sounding technique chosen.
- Note whether the candidate finds the binding constraint in a scheduling problem — often another team's or resource's availability rather than the candidate's own capacity.

### Common pitfalls to watch for when scoring

- Crediting a conclusion that goes beyond what a stated policy or chain of facts actually guarantees.
- Missing when a candidate treats a compliant-but-exceeding-minimum case as non-compliant because it differs from a pattern.
- Rewarding an ordered-procedure answer (cascade specificity, prioritisation) that skips the first applicable criterion.
- Accepting a performance or design fix proposed without being checked against the specific evidence given.
- Missing a knock-on scheduling constraint (e.g. a second team's availability) in an otherwise-correct direct-constraint check.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A workplace numeric reasoning assessment measures how accurately a candidate interprets, manipulates and draws sound conclusions from numerical information of the kind this role actually produces — bundle sizes, load times, Lighthouse scores, Core Web Vitals percentiles, cache hit rates, analytics, A/B test results, and usage statistics.

Typical format: an online, timed test of 20 to 30 minutes with 15 to 25 questions, each based on a short table, chart, or data statement. A calculator is usually permitted.

For a senior frontend developer, numeric reasoning sits at the point where measurements turn into decisions: not just that a bundle got smaller, but by how much, whether that is enough, what further work would cost, and whether it is worth it compared with the alternatives.

### How this assessment maps to the role

- **Percentages and proportional change** map to **Web performance optimisation**: page-weight budgets, compression savings, and regression thresholds.
- **Averages and weighted averages** map to making decisions based on research and **User focus (frontend developer)**: real usage data weighted by traffic, device mix or user group.
- **Ratios and rates** map to **Programming and build (frontend developer)** and planning development on sets of related stories: defect rates, review turnaround, build failure rates.
- **Reading tables and charts** maps to **Communicating information** and **Strategic thinking**: evidence arriving as a table, read correctly first time.
- **Threshold and budget arithmetic** maps to **Accessibility** and **Modern development standards**: contrast ratios, error budgets, support-matrix coverage, performance budgets.

### Practice questions

**Question 1 (easy) — Percentage reduction in bundle size**

A JavaScript bundle falls from 800KB to 620KB after removing an unused library and enabling tree shaking. Ask for the percentage reduction.

- A) 18%
- B) 22.5%
- C) 25%
- D) 29%

**Correct answer: B**

**Explanation:** (800−620)÷800 = 22.5%. This tests dividing by the original value — the trap answer (29%) divides by the new value, the single most common percentage-change error.

**Question 2 (easy) — Average page load time**

Five load-time measurements: 2.1, 2.4, 1.9, 2.6, 2.5 seconds. Ask for the mean.

- A) 2.2 s
- B) 2.3 s
- C) 2.4 s
- D) 2.5 s

**Correct answer: B**

**Explanation:** Sum 11.5 ÷ 5 = 2.3. This tests basic averaging, and in a strong answer, noting that a mean can hide what matters — a median or 75th percentile describes typical and poor experiences better, which is why Core Web Vitals report percentiles.

**Question 3 (easy) — Ratio of accessibility findings**

45 total findings, critical:major:minor in ratio 1:3:5. Ask how many major findings there are.

- A) 5
- B) 9
- C) 15
- D) 25

**Correct answer: C**

**Explanation:** 9 parts total, 45÷9=5 per part, majors=3×5=15. This tests the standard ratio method — totalling the parts, sizing one part, scaling — verifiable by checking all categories sum to 45.

**Question 4 (moderate) — Percentage points versus percentages**

A form's client-side error rate falls from 4.0% of submissions to 3.0%. Ask which statement accurately describes the improvement.

- A) A 1% reduction in the error rate
- B) A 25% reduction in the error rate, equal to 1 percentage point
- C) A 33% reduction in the error rate
- D) A 1 percentage point reduction, equal to a 10% relative reduction

**Correct answer: B**

**Explanation:** Absolute change 1.0 percentage point; relative change 1.0÷4.0=25%. This tests keeping percentage-point and relative-percentage measures distinct — "errors fell 1%" (option A) is the ambiguity that most often misleads stakeholders.

**Question 5 (moderate) — Weighted average Lighthouse score**

Three services score 80, 60, 90, receiving 60%, 30%, 10% of programme traffic. Ask for the traffic-weighted average performance score.

- A) 75
- B) 76.7
- C) 77
- D) 80

**Correct answer: A**

**Explanation:** 80×0.6+60×0.3+90×0.1=75. This tests weighting by traffic rather than taking an unweighted mean (76.7, option B) — the unweighted view overstates typical experience because the best-scoring service carries the least traffic.

**Question 6 (moderate) — Image optimisation savings**

A page weighs 3.2MB, 75% images; converting images to a modern format cuts image weight by 40%. Ask for the new total page weight.

- A) 1.92 MB
- B) 2.24 MB
- C) 2.40 MB
- D) 2.72 MB

**Correct answer: B**

**Explanation:** Image weight 2.4MB; saving 0.96MB; new total 2.24MB. This tests a labelled multi-step calculation — the trap answers apply the 40% cut to the whole page (A) or to the wrong subset (D).

**Question 7 (moderate) — Reading a sprint quality table**

Sprint 21: 40 points, 6 defects. Sprint 22: 30, 6. Sprint 23: 50, 8. Sprint 24: 25, 6. Ask, measured as defects per 10 story points, which sprint had the worst quality rate.

- A) Sprint 21
- B) Sprint 22
- C) Sprint 23
- D) Sprint 24

**Correct answer: D**

**Explanation:** Rates: 1.5, 2.0, 1.6, 2.4 per 10 points — sprint 24 worst. This tests normalising to a rate before comparing, rather than the raw defect count (sprint 23 has the most defects but also delivered the most work).

**Question 8 (moderate) — Compound growth in traffic**

200,000 visits in January; +20% in February, then +25% in March (each on the previous month). Ask for March traffic and overall growth from January to March.

- A) 290,000 visits; 45% growth
- B) 300,000 visits; 50% growth
- C) 300,000 visits; 45% growth
- D) 290,000 visits; 50% growth

**Correct answer: B**

**Explanation:** 200,000×1.2×1.25=300,000, a 50% overall rise. This tests multiplying growth factors rather than adding percentages (20+25=45%, the trap in A and C) — the same compounding applies to successive regressions, which is why performance budgets are checked per change rather than per quarter.

**Question 9 (hard) — Uptime and error budget**

99.9% monthly availability target, 30-day month, 30 minutes of downtime already used. Ask how many more minutes of downtime can be sustained before breaching the target.

- A) 13.2 minutes
- B) 43.2 minutes
- C) 3.2 minutes
- D) 30 minutes

**Correct answer: A**

**Explanation:** Budget 43,200×0.001=43.2 minutes; remaining 43.2−30=13.2. This tests the error-budget framing directly — a fixed allowance spent down — and computing the remainder rather than quoting the full budget (B).

**Question 10 (hard) — Valuing a performance improvement**

100,000 monthly sessions; 62% complete the main transaction. Research suggests a one-second speed improvement increases completion by 3 percentage points. Ask for the additional completed transactions per month.

- A) 1,860
- B) 3,000
- C) 6,200
- D) 65,000

**Correct answer: B**

**Explanation:** 3 percentage points of 100,000 sessions = 3,000. This tests distinguishing percentage points from a relative percentage — the trap (1,860, option A) treats the 3-point uplift as a 3% relative increase on 62,000, converting a business case into money-shaped consequences either way it is computed.

**Question 11 (hard) — Reverse percentage on a bundle budget**

After a 15% reduction, a CSS bundle weighs 391KB. Ask what it weighed before the reduction.

- A) 449.65 KB
- B) 455 KB
- C) 460 KB
- D) 470 KB

**Correct answer: C**

**Explanation:** 391÷0.85=460KB, checked forwards (460×0.85=391). This tests dividing by (1−rate) rather than adding the percentage to the reduced figure (391×1.15=449.65, the classic reverse-percentage error), and verifying the answer with a forward check.

**Question 12 (hard) — Comparing A/B test results**

Variant A: 4,800 completions from 60,000 sessions. Variant B: 4,620 from 55,000. Ask which variant has the higher completion rate, and the difference in percentage points.

- A) Variant A, by 0.4 percentage points
- B) Variant B, by 0.4 percentage points
- C) Variant A, by 4.0 percentage points
- D) They are exactly equal

**Correct answer: B**

**Explanation:** A: 8.0%; B: 8.4% — B higher by 0.4 points. This tests computing rates rather than comparing raw counts (A has more completions but also more sessions), with a sanity check ruling out the misplaced-decimal trap (C).

### Administration tips

- Score for whether the candidate weights an average by the correct volume (traffic, sessions) rather than taking an unweighted mean across groups of unequal size.
- Note whether percentage-point change and relative percentage change are kept distinct throughout a candidate's reasoning.
- Watch for whether successive percentage changes are compounded (multiplied) rather than added.
- Score for whether a reverse-percentage answer is checked forwards before being finalised.
- Note whether the candidate computes rates before comparing groups that differ in size (sessions, story points, participants).

### Common pitfalls to watch for when scoring

- Crediting an unweighted average across groups (services, teams, cohorts) of unequal volume.
- Missing confusion between percentage-point change and relative percentage change.
- Rewarding an added, rather than compounded, sequence of percentage changes.
- Accepting a reverse-percentage answer computed by adding the rate to the reduced figure.
- Missing when a candidate compares raw counts rather than rates across groups of different sizes.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A workplace verbal reasoning assessment measures how accurately a candidate extracts meaning from written material under time pressure — accessibility standards, design system documentation, browser specifications, service standards, and research findings — judging statements as True (the passage guarantees it), False (the passage contradicts it), or Cannot Say (insufficient information either way), or judging inference, purpose, and clear writing.

Typical format: an online, timed test of 15 to 25 minutes with 15 to 30 questions across several passages. The candidate must answer only from the passage, setting aside everything else they know — a discipline that is hardest for an expert, whose domain knowledge readily fills a gap the passage deliberately leaves.

For a senior frontend developer, verbal reasoning is load-bearing: reading and applying the Web Content Accessibility Guidelines, the GOV.UK Service Manual, the Technology Code of Practice, browser documentation, RFCs, security advisories and API contracts, where a misreading becomes a defect or a failed assessment.

### How this assessment maps to the role

- **Comprehension of standards and policy text** maps to **Accessibility** and **Modern development standards**: thresholds, scopes and exceptions read correctly, and explained accurately to stakeholders who have not read them.
- **True/False/Cannot Say discipline** maps to **Programming and build (frontend developer)**: what a specification guarantees, rules out, and has simply not said.
- **Inference** maps to **User focus (frontend developer)**: what evidence supports carefully, distinguishing user needs from user desires.
- **Judging clear writing** maps to **Communicating information** and mentoring duties: whether prose does its job for its audience.
- **Reading in governance contexts** maps to **Strategic thinking** and **Leadership and guidance (frontend developer)**: briefing upwards from documents without overstating what they establish.

### Practice questions

**Question 1 (easy) — Reading a service standard extract**

Passage: "Government services must be accessible to everyone who needs them. This includes people with impaired vision, motor difficulties, cognitive impairments or learning disabilities, and deafness or impaired hearing. Services must meet level AA of the Web Content Accessibility Guidelines as a minimum. Meeting accessibility requirements is not optional, and services may not launch publicly without an accessibility statement."

Statement: "Services that meet level AA of the Web Content Accessibility Guidelines have satisfied all of their accessibility obligations."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** "As a minimum" plus the separate accessibility statement requirement means AA satisfies one obligation but not all. This tests catching a small but decisive word ("minimum") that changes the scope of a compliance requirement.

**Question 2 (easy) — Reading a browser support policy**

Passage: "Your service must be tested in all browsers listed in the current support table. Where a browser in the table cannot support a feature, the service must degrade gracefully so that users can still complete their task. Testing in browsers outside the table is encouraged but not required."

Statement: "Testing the service in browsers that do not appear in the support table is prohibited."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** "Encouraged but not required" is the opposite of prohibited. This tests reading a graded scale (required, encouraged, prohibited) precisely rather than collapsing it into a two-way distinction.

**Question 3 (moderate) — Reading a performance report**

Passage: "Following the January release, median page load time on the start page fell from 3.1 seconds to 2.2 seconds. The 95th percentile, however, rose from 6.0 to 7.4 seconds. The release replaced the legacy image pipeline and introduced a new consent banner script loaded from a third-party domain. Engineering time in February has been allocated to investigating the regression."

Statement: "The consent banner script caused the rise in 95th percentile load time."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The passage reports a correlation (two changes, a subsequent regression) but no established cause — investigation is explicitly still to come. This tests the hardest discipline for an expert: declining to let plausible domain knowledge (third-party scripts are a classic tail-latency culprit) supply a causal link the passage does not establish.

**Question 4 (moderate) — Reading a specification**

Passage: "The address component must allow manual entry as an alternative to postcode lookup. When JavaScript is unavailable, the manual entry fields must be displayed by default. Validation of the postcode format occurs on the server. The component must be usable with a keyboard alone and must expose appropriate labels to assistive technologies."

Statement: "When JavaScript is available, the manual entry fields must not be displayed by default."

- A) True
- B) False
- C) Cannot Say

**Correct answer: C**

**Explanation:** The specification is silent on the default state when JavaScript is available — both showing and hiding manual fields by default would satisfy every stated sentence. This tests spotting a genuine ambiguity in a specification, exactly the kind of gap two developers could implement differently and both claim compliance.

**Question 5 (moderate) — Reading a stakeholder email**

Passage: "Thanks for the demo yesterday. The director was impressed with the new journey, though she asked whether the document upload step could support larger files, as some users have scanned bundles over the current limit. Separately, legal have confirmed the retention schedule, so the deletion work can now be scheduled. Could we discuss the upload question at Thursday's prioritisation session before any commitments are made?"

Statement: "The sender has asked the team to increase the file size limit."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The email explicitly asks for discussion "before any commitments are made" — the opposite of a request to implement. This tests distinguishing a request to discuss from a request to act, a misreading that causes real teams to start unplanned work.

**Question 6 (moderate) — Reading an incident summary**

Passage: "At 09:14 the deployment introduced a stylesheet regression that made the primary action button invisible on the payment page, although it remained present in the document and focusable. Users navigating by keyboard or screen reader could still complete payment. The regression was detected at 09:41 by an automated visual test and rolled back by 09:55. Completion rates for the affected window are still being analysed."

Statement: "During the affected window, no users could complete payment."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The passage states directly that keyboard and screen reader users could still complete payment. This tests precise reading of a universal scope word ("no users"), falsified by a single stated exception — and recognising the passage does not establish what happened to sighted mouse users, which is why analysis is ongoing.

**Question 7 (moderate) — Inference from research findings**

Passage: "In usability testing of the redesigned eligibility checker, seven of nine participants completed the journey unaided, compared with three of nine for the current version. Two participants said they would prefer the questions on a single page. One participant using a screen magnifier could not find the continue button in the redesigned version because it sat below a large promotional panel."

Ask which conclusion is best supported by the passage.

- A) The redesign should ship immediately because completion has more than doubled.
- B) The redesign shows a substantial completion improvement in testing, and has at least one layout issue affecting users of magnification that should be addressed.
- C) The questions should be moved to a single page because users prefer it.
- D) The redesign is inaccessible and must not ship.

**Correct answer: B**

**Explanation:** B pairs the genuine positive signal with the genuine, observed problem, both stated at the strength the evidence supports. This tests distinguishing an observed failure (which compels a fix) from a stated preference (which merely informs) — option C converts two participants' preference into a requirement, exactly the confusion between user needs and user desires this level is expected to explain to others.

**Question 8 (hard) — Reading a standards document closely**

Passage: "Success Criterion: focus is not obscured. When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content. Note: where content in a configurable interface can be repositioned by the user, only the initial positions of user-movable content are considered for testing this criterion. Note: content opened by the user may obscure the component receiving focus, unless the user cannot easily reveal the focused component."

Statement: "A cookie banner that the user has moved over a focused button causes a failure of this criterion."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** The first note excludes non-initial positions of user-movable content from consideration — a banner the user has moved is exactly this case. This tests treating a standard's notes and exceptions as first-class parts of the rule, not small print, rather than answering from the headline rule alone.

**Question 9 (hard) — Judging clear writing for an audience**

Four draft sentences for a service's public error page. Ask which is most appropriate.

- A) "An unexpected exception occurred in the rendering pipeline; our engineers have been notified via automated telemetry."
- B) "Sorry, there is a problem with the service. Try again later. Your answers have been saved."
- C) "Error 500: internal server error. Contact the service desk quoting correlation ID 7f3a-22b1."
- D) "Oops! Something went a bit wonky on our end — bear with us while our tech wizards sprinkle some magic!"

**Correct answer: B**

**Explanation:** B tells a citizen mid-task what happened, what to do, and answers their most pressing worry (are my answers lost?) in plain language. This tests judging text against audience and purpose rather than personal taste — A is written for engineers, C pushes work onto the user without reassurance, and D's register is wrong for a government service under strain.

**Question 10 (hard) — Inference about a technical decision**

Passage: "The team evaluated three approaches for the interactive map: a well-known third-party mapping library (450KB, feature-rich, accessible with additional configuration), a lightweight open-source alternative (60KB, fewer features, strong accessibility defaults), and building in-house (estimated eight weeks). The service's map needs are limited to displaying office locations with a text-based alternative already available. The team chose the lightweight library."

Ask which unstated assumption most plausibly underpins the team's decision.

- A) The service will never need richer mapping features.
- B) For the service's limited needs, the smaller library's capabilities are sufficient, and the page-weight saving outweighs the larger library's extra features.
- C) Building in-house was rejected because the team lacks the skill.
- D) The third-party library's accessibility cannot be fixed by configuration.

**Correct answer: B**

**Explanation:** B is the minimal assumption that makes the decision reasonable given the stated facts. This tests distinguishing the minimal necessary assumption from overreaching ones — A claims more than the decision needs (sufficiency now, not forever), C invents an unstated motive, and D contradicts the passage directly.

**Question 11 (hard) — Reading a governance paper**

Passage: "The design authority endorses the component consolidation proposal in principle. Endorsement is conditional on: (a) a migration guide being published before any team is asked to adopt the shared component; (b) the accessibility audit being repeated after consolidation; and (c) no team being required to migrate during the two months before a major service assessment. Teams may adopt earlier on a voluntary basis. The authority noted, without requiring changes, that the proposal's savings estimate assumes all twelve teams migrate within a year."

Statement: "A team six weeks away from a major service assessment may not adopt the shared component."

- A) True
- B) False
- C) Cannot Say

**Correct answer: B**

**Explanation:** Condition (c) prohibits requiring migration in that window, but voluntary early adoption is explicitly permitted with no stated exception. This tests separating a governance document's different speech-acts — binding conditions, permissions, and non-binding noted observations — since misreading "prohibited from requiring" as "prohibited from doing" is a common and consequential error.

### Administration tips

- Score for whether the candidate answers strictly from the passage, resisting the urge to supply a plausible causal link or fact from outside knowledge.
- Note whether a candidate treats a passage's notes, exceptions and provisos as part of the rule, not incidental detail.
- Watch for whether the candidate distinguishes a request to discuss from a request to act, and a reported observation from a binding requirement.
- Score inference items on whether the conclusion is calibrated to the strength of the evidence — an observed failure compels differently than a stated preference.
- For clear-writing items, score on audience and purpose (a measurable trigger, an answer to the reader's actual worry) rather than tone or brevity alone.

### Common pitfalls to watch for when scoring

- Crediting a statement judged True or False on the strength of outside professional knowledge rather than the passage.
- Missing when a candidate answers from a standard's headline rule while ignoring a decisive note or exception.
- Rewarding an inference that converts a stated preference into a requirement.
- Accepting a reading that treats a reported observation, question, or noted comment as an instruction or binding requirement.
- Missing when a candidate selects the more dramatic or flattering conclusion over the one the evidence actually calibrates to.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment presents realistic workplace scenarios and asks the candidate to judge the effectiveness of possible responses — the most effective, the least effective, a ranking, or a rating — scored against a key reflecting the professional behaviours UK Government Digital and Data organisations value: user focus, collaboration, ownership, appropriate escalation, inclusion, and working in the open.

Typical format: 10 to 20 scenarios, usually untimed or generously timed (25 to 40 minutes).

For a senior frontend developer, situational judgement is arguably the assessment closest to the actual job: the technical work of a senior is inseparable from its human context — teaching and mentoring others, helping set direction and embed good practice, hosting or moderating difficult discussions, and making decisions of medium risk while recommending decisions upward as risk increases.

### How this assessment maps to the role

- **User focus scenarios** map to **User focus (frontend developer)** and **Accessibility**: representing user needs internally, distinguishing needs from desires, championing accessibility even when inconvenient to a powerful stakeholder.
- **Collaboration and team dynamics scenarios** map to **Community collaboration** and **Communicating information**: identifying issues through Agile health checks, adapting feedback so it is effective and lasting.
- **Ownership and delivery scenarios** map to **Programming and build (frontend developer)** and **Systems integration (frontend developer)**: taking responsibility for consequences of shortcuts and quality decisions.
- **Escalation and decision scenarios** map to **Leadership and guidance (frontend developer)**: knowing when a decision is the candidate's own and when it must go up.
- **Mentoring and standards scenarios** map to the level's teaching duty, **Modern development standards**, and **Prototyping**: establishing patterns together rather than alone.

### Practice questions

**Question 1 (easy) — The stakeholder who wants a carousel**

A senior stakeholder asks for an auto-rotating image carousel on the start page to "make the page more dynamic." User research shows users come to complete a specific task; wider evidence indicates carousels are frequently ignored and can cause accessibility problems. Ask for the most effective response.

- A) Build the carousel — the stakeholder is senior and it is their call.
- B) Refuse, explaining that carousels are against best practice, and close the conversation.
- C) Acknowledge the goal behind the request, share the research evidence about carousels and this service's users, and offer to explore with the designer what would meet the stakeholder's underlying aim.
- D) Build it, but add a pause button so it passes accessibility testing.

**Correct answer: C**

**Explanation:** C engages the underlying goal, brings evidence rather than opinion, and keeps the collaboration open through design. This tests influencing rather than either deferring (A, which abandons user focus) or refusing and closing the conversation (B) — D treats accessibility as a checkbox while still shipping something the evidence says users ignore.

**Question 2 (easy) — A mentee's struggling pull request**

A junior developer being mentored opens their first substantial pull request: it works, but duplicates an existing component, misses naming conventions, and has no tests, clearly having taken real effort. Ask for the most effective response.

- A) Approve it — merging will build their confidence, and the issues can be quietly fixed later.
- B) Leave detailed written comments on every issue so they have a complete record.
- C) Reject it with a comment explaining the team's standards and a link to the guidelines.
- D) Pair with them: acknowledge what works, walk through the existing component and conventions together, and agree what they will change — leaving them to make the changes themselves.

**Correct answer: D**

**Explanation:** D recognises effort, transfers knowledge conversationally, and leaves the learner doing the work, which is how learning sticks. This tests mentoring through a formative moment — A ships duplication and hides the standard, B risks overwhelming a first pull request with volume, and C outsources the mentoring to a link.

**Question 3 (easy) — The failing accessibility check before a demo**

An hour before a show-and-tell to programme leadership, automated accessibility checks start failing on a colour contrast problem in a new banner; the demo will work fine visually. Ask which response would be LEAST effective.

- A) Demo anyway, mention the failing check openly, and explain how the team will fix it.
- B) Quickly disable the accessibility checks in the pipeline so the dashboard is green for the demo, planning to re-enable them afterwards.
- C) Spend twenty minutes fixing the contrast issue before the demo if feasible, and demo with the fix.
- D) Ask a colleague to start fixing it while preparing the demo, and be transparent about the work in progress.

**Correct answer: B**

**Explanation:** B hides a genuine quality signal to manage appearances and breaks pipeline integrity for everyone. This tests recognising that working in the open is a core professional behaviour, and that suppressing a check — however temporarily intended — is the clearest violation among four otherwise-defensible options.

**Question 4 (moderate) — Disagreement in code review**

Two experienced developers disagree in a pull request about state management for a complex form; the written exchange is becoming long and slightly sharp, with two junior developers following the thread. Ask for the most effective response.

- A) Take the discussion to a short call or face-to-face, agree the decision criteria (fit with standards, learning curve, maintenance), then post the outcome and reasoning back on the thread for everyone to see.
- B) Use seniority to close the debate: the established pattern stands.
- C) Continue the written debate until one concedes — juniors will learn from watching the arguments.
- D) Let the new approach through this time to keep the peace, and raise it at the next retrospective.

**Correct answer: A**

**Explanation:** A moves the discussion to a medium where nuance survives, agrees criteria before re-arguing positions, and publishes the resolution for the watching juniors. This tests hosting a difficult discussion effectively — B wins by rank rather than merit, C lets a deteriorating exchange continue in public, and D avoids conflict by accepting an unagreed architectural change.

**Question 5 (moderate) — Pressure to skip progressive enhancement**

Late in a sprint, a delivery manager suggests shipping a new eligibility questionnaire JavaScript-only, with the no-JS version to follow next quarter, arguing "hardly anyone has JavaScript off anyway." The service standard expects progressive enhancement, and the questionnaire is the main route into the service. Ask for the most effective response.

- A) Agree — the statistics are on the delivery manager's side, and next quarter is a real commitment.
- B) Explain the risk briefly (resilience, assessment failure, users on poor connections or older devices), quantify the cost of building enhancement-first now versus retrofitting, and if the pressure stands, recommend the decision go to the service owner with the trade-offs written down.
- C) Refuse to build it JavaScript-only, citing the standard, and let the sprint slip.
- D) Build it JavaScript-only but write a strongly worded note in the README recording disagreement.

**Correct answer: B**

**Explanation:** B makes the case in the stakeholder's language, brings a cost comparison, and escalates a decision whose risk exceeds the candidate's own remit rather than either capitulating or blocking unilaterally. This tests the full senior playbook — A ships fragility based on a statistic that undercounts affected users, C substitutes personal authority for the service owner's decision, and D is compliance in action with dissent nobody will read.

**Question 6 (moderate) — The quiet team member and the health check**

An Agile health check shows "safe to challenge" scores dropping sharply; a usually-active developer has gone quiet in ceremonies around the time a new senior joined who talks over people. Ask for the most effective first step.

- A) Announce in the retrospective that the scores dropped and ask the team, on the spot, who feels unsafe and why.
- B) Speak privately with the quiet developer to listen and understand, separately observe the meeting dynamics, and then address the interrupting behaviour directly and privately with the new senior.
- C) Report the new senior to their line manager immediately.
- D) Wait a sprint — the team is probably still storming and will settle.

**Correct answer: B**

**Explanation:** B listens privately first, verifies with independent observation so feedback is behavioural and specific, then addresses the behaviour directly and privately. This tests responding to a psychological-safety signal appropriately — A asks people who feel unsafe to prove it publicly, C escalates disproportionately before any direct conversation, and D relabels a measured decline as a phase.

**Question 7 (moderate) — The tempting production hotfix**

A content error on a live page is causing confusion and rising support calls; a fix is ready. The normal pipeline takes 40 minutes including tests; emergency access could push it directly to production in 2 minutes, bypassing tests. It is 4pm on a Friday. Ask for the most effective response.

- A) Use the emergency access — it is a trivial content change and users are being harmed now.
- B) Run the fix through the normal pipeline now, tell support and the team what is happening and when the fix will land, and stay to verify it in production.
- C) Leave it until Monday — deploying on Friday afternoon is asking for trouble.
- D) Use the emergency access, then run the pipeline afterwards to backfill the tests.

**Correct answer: B**

**Explanation:** B weighs 38 minutes of bounded harm against an untested manual production change at the start of a weekend, and closes the communication loop with support. This tests taking ownership without heroics — A and D spend the pipeline's safety net on a modest time saving, and C swings to leaving users confused all weekend to avoid a manageable risk.

**Question 8 (hard) — Credit and visibility**

At a show-and-tell, a product manager presents dramatic page-speed improvements substantially done by a mid-level developer being mentored, without mentioning them; the developer, deflated, asks "why do we bother?" Ask for the most effective response.

- A) Tell the developer that seniors present and teams deliver; that is simply how programmes work.
- B) Publicly correct the record by emailing the programme distribution list with the developer's name attached to the work.
- C) Talk to the developer first — acknowledge the frustration and their specific contribution; then speak privately with the product manager, assume good intent, and agree how the team's work is credited in future, creating a chance for the developer to present next time.
- D) Advise the developer to raise it with the product manager themselves; it is their credit to claim.

**Correct answer: C**

**Explanation:** C repairs both relationships in the right order and converts a grievance into a development opportunity. This tests handling a credit failure without embarrassing anyone publicly — B corrects the record at the cost of the product manager's standing, A normalises a poor norm, and D offloads a power-imbalanced conversation onto the more junior colleague.

**Question 9 (hard) — The design pattern that will not scale**

A pattern established personally a year ago, now used by three teams, has a flaw causing visible layout shift on slow connections, harming Core Web Vitals; fixing it means changes in all three teams' services, and nobody else has noticed yet. Ask for the most effective response.

- A) Quietly fix it in the candidate's own team's service; the other teams own their codebases.
- B) Say nothing — the flaw is minor, the pattern is personal, and raising it will undermine confidence in the design system.
- C) Document the flaw and the fix openly, tell the three teams and the frontend community what was found — owning the mistake — and propose a migration path with an updated pattern, offering to pair with each team.
- D) Rewrite the pattern in the shared library and let the teams discover the change through their dependency updates.

**Correct answer: C**

**Explanation:** C treats the pattern as a shared contract, owns the error publicly (which builds rather than undermines trust), and offers help that gets busy teams to actually migrate. This tests iterating on a design pattern in the open — A fixes a third of the problem and hoards the knowledge, B lets measurable harm continue to protect reputation, and D breaks trust with an unannounced breaking change.

**Question 10 (hard) — Conflicting priorities from two disciplines**

An interaction designer wants a rich animated transition between form steps to communicate progress; a user researcher reports two participants with vestibular disorders found similar motion uncomfortable elsewhere; the product manager wants the feature this sprint regardless. Ask for the most effective response.

- A) Build the animation with a reduced-motion alternative honouring the user's operating system preference, share the research consideration with both colleagues, and propose the researcher includes motion sensitivity in the next round of testing.
- B) Side with the researcher: no animation, because accessibility always trumps design.
- C) Side with the designer: two participants is not statistically significant.
- D) Ask the product manager to decide between design and research.

**Correct answer: A**

**Explanation:** A notices the disciplines are not actually in conflict — a reduced-motion preference serves both the designer's intent and the researcher's evidence — and feeds the open question back into research. This tests recognising a technical reconciliation exists rather than picking a side (B, C, which each dismiss one discipline) or escalating a decision squarely within the candidate's own competence (D).

**Question 11 (hard) — The exhausted team and the roadmap promise**

A team has hit its last four sprint goals only through routine overtime; quality indicators are slipping (shallower reviews, rising defects). The delivery manager's roadmap, already shared with the programme board, assumes the current pace continues for two more quarters, and the team is about to commit to another maximal sprint in planning. Ask for the most effective response.

- A) Say nothing in planning — the team are adults making their own commitment, and the roadmap is the delivery manager's problem.
- B) In planning, share the quality trend data and argue for a sustainable commitment this sprint; then work with the delivery manager on what the evidence means for the roadmap, so the board hears a revised forecast with reasons rather than a surprise later.
- C) Tell the team privately to commit to less but log the same figures, protecting them from roadmap pressure.
- D) Email the programme board directly about the unsustainable pace before the sprint starts.

**Correct answer: B**

**Explanation:** B uses the quality trend to reframe the sprint commitment, then takes the same evidence to the delivery manager first, converting a bad-news conversation into a forecasting correction. This tests sequencing two conversations correctly and grounding both in data — A is abdication, C falsifies the data every future decision rests on, and D breaches the escalation ladder by going over the delivery manager's head before speaking to them.

### Administration tips

- Score for whether a candidate engages a stakeholder's underlying goal with evidence, rather than either deferring outright or refusing without offering an alternative.
- Note whether a decision is routed to its accountable owner when its risk exceeds the candidate's own remit, rather than resolved unilaterally or escalated prematurely.
- Watch for whether feedback or credit-related responses protect the other person's standing (private first, public correction avoided) while still resolving the substance.
- Score for whether a candidate treats a mistake or flawed pattern of their own as something to own openly, rather than quietly patch or ignore.
- Note whether a candidate distinguishes a stated preference from an observed, evidenced problem when reconciling two disciplines' positions.

### Common pitfalls to watch for when scoring

- Crediting deference to a senior stakeholder's request as sufficient justification on its own, without evidence or engagement with intent.
- Missing when a candidate hides a genuine quality signal (disabling a check, suppressing a figure) to manage appearances, however temporarily framed.
- Rewarding escalation attempted before a direct conversation, or the reverse — never escalating a risk that exceeds the candidate's own authority.
- Accepting a public correction of a colleague's error or omission where a private conversation would have resolved it without embarrassment.
- Missing when a candidate frames two disciplines' positions as a zero-sum conflict rather than searching for a technical reconciliation.

## Conclusion

This guide has worked through pattern and convention consistency across component libraries and pipelines, deduction under stated exceptions and conditionals, error checking against numeric thresholds rather than direction of travel, and multi-constraint scheduling that surfaces a binding external constraint; performance and accessibility arithmetic weighted correctly, distinguishing percentage points from relative change, and error budgets managed as a spend-down allowance; the discipline of reading standards, specifications and stakeholder communications at the precision their modal verbs, notes and exceptions demand; and the situational judgement calls that define senior-level work — engaging a stakeholder's underlying goal with evidence, routing a decision to its accountable owner, mentoring through the reason rather than the correction, and owning a personal mistake or flawed pattern openly rather than quietly patching it.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning as much as the final choice, particularly around what evidence actually establishes and who a decision belongs to. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
