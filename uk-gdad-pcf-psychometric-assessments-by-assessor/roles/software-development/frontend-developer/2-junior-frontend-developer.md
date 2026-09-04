# Junior Frontend Developer - Psychometric Assessments

## Introduction

This guide is for you: an assessor — a line manager, a panel member or a reviewer — administering a workplace job-specific psychometric assessment to a candidate for junior frontend developer. It is not the candidate's practice material. Every item below carries its worked answer and explanation as your answer key, to be held back and shown to the candidate only at scoring and debrief.

Psychometric assessments are structured, standardised exercises that measure the thinking skills and workplace behaviours that predict success in a role. For a junior frontend developer, that means practical, everyday thinking: the assessments described here are job-specific, using artefacts the role genuinely handles — HTML, CSS, and JavaScript conventions, build pipelines, browser support tables, accessibility audit results, sprint boards, performance budgets, user research summaries, and messages from designers, analysts, and stakeholders.

At this level, the role learns on the job by delivering software components independently, with guidance from more senior developers, identifying user issues and needs, writing clean code that follows web standards, building interfaces that meet accessibility standards, and building understanding of how static assets are compiled, delivered, and presented by browsers. That mix of real independence and continued learning is exactly what these assessments sample.

Each of the four sections follows the same pattern: an overview of what it measures and its typical format; a mapping to the role's named skills; graduated practice questions with full worked explanations; then administration tips and common scoring pitfalls.

**How to administer this fairly.** Give every candidate for this role level the same items and the same time allowance, and hold the answer key back until scoring and debrief. Expect a wide range of prior test-taking exposure at this level, and brief every candidate on the format with the same ungraded warm-up before timed sections begin. Score for method — applying a rule chain fully, checking every item on a checklist rather than stopping early, computing an exact figure rather than an approximate one — as much as for the final answer. Several situational judgement items reward a candidate who calibrates independence correctly: acting on what is unblocked while surfacing what is not, rather than either pushing ahead alone on something outside their remit or deferring everything upward. Use each section's per-item timing as a guide for planning a session, and debrief against the explanations below.

## Advisory

This assessment is created by AI and is a work in progress for educational purposes. It is not a validated assessment instrument — it has not been piloted, normed or checked for adverse impact — and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision. Before using it, consult your organisation's human resources, people development, occupational psychology or legal compliance colleagues.

## Workplace job-specific cognitive assessment

### About this assessment

A workplace job-specific cognitive assessment measures the precise mental processes this role demands, using realistic workplace material — code snippets, naming conventions, dependency rules, build pipelines, review checklists, and browser support policies — rather than abstract puzzles.

Typical format: an online, timed test lasting 15 to 30 minutes, with roughly 15 to 30 questions across pattern recognition, logical deduction, error checking, prioritisation, and applied problem solving. Scoring is objective against a norm group, often adaptive, with speed and accuracy reported separately.

This is used for junior frontend developers because frontend delivery is precision work performed under time pressure: a single-character difference in a class name silently breaks styling, a misread rule in a review checklist ships an inaccessible form, and a wrongly ordered build step produces stale assets. At this level, a candidate is expected to catch many of these issues independently, before a senior colleague does.

### How this assessment maps to the role

- **Pattern recognition** maps to **Programming and build (frontend developer)** and **Modern development standards**: recognising and preserving patterns — naming conventions, component structures, folder layouts — and noticing deviation.
- **Logical deduction** maps to **Systems integration (frontend developer)** and **Modern development standards**: "if this, then that" reasoning about pipelines, caching, and fallbacks — the logic of progressive enhancement.
- **Error checking** maps to **Accessibility** and **Programming and build (frontend developer)**: systematic checking against a defined standard — labels, heading orders, contrast, focus states.
- **Prioritisation** maps to **Communicating information** and **Community collaboration**: judging urgency and impact together, then sequencing work defensibly.
- **Applied problem solving** maps to **User focus (frontend developer)**, **Prototyping**, and **Strategic thinking**: decomposing a fuzzy situation into checkable steps.

### Practice questions

**Question 1 (easy) — Pattern recognition in component naming**

Convention: shared components prefixed `govuk-`, service-specific components `app-`; modifier classes append `--` and the modifier name. A template contains: (1) `govuk-button`; (2) `govuk-button--secondary`; (3) `app-task-list`; (4) `app-task-list-completed`, intended as a completed variant of the task list. Ask which change would make entry 4 follow the convention.

- A) Rename it `govuk-task-list--completed`
- B) Rename it `app-task-list--completed`
- C) Rename it `app--task-list-completed`
- D) No change needed — it already follows the convention

**Correct answer: B**

**Explanation:** The component is service-specific, so `app-` is correct (ruling out A); variants append a double dash plus the modifier name, so the completed variant must be `app-task-list--completed`, not the single dash the entry currently uses. This tests applying a two-part naming convention exactly, since tooling and teammates rely on the double-dash signal to distinguish a variant from a different component altogether.

**Question 2 (easy) — Logical deduction from a support policy**

Policy: "JavaScript-dependent enhancements must degrade gracefully: if the script fails, the underlying HTML feature must still let the user complete their task. Enhancements that cannot degrade gracefully require sign-off from the technical lead." Told of an autocomplete enhancement: "If the script fails, the plain text input still works." Ask which conclusion must be true.

- A) The enhancement requires sign-off from the technical lead.
- B) The enhancement does not require sign-off from the technical lead.
- C) The enhancement complies with the graceful degradation requirement.
- D) The autocomplete will work in all browsers.

**Correct answer: C**

**Explanation:** The description matches the policy's own definition of graceful degradation exactly, so C is guaranteed. B is tempting but overreaches — the policy states sign-off is required when degradation is impossible; it does not state sign-off is never needed otherwise, so B is not guaranteed by this text alone. This tests choosing the conclusion the policy guarantees rather than one it merely suggests.

**Question 3 (easy) — Error checking against an accessibility checklist**

Checklist: (i) visible label linked via matching `for`/`id`; (ii) error messages prefixed "Error:"; (iii) `autocomplete` attribute where one exists; (iv) hint text programmatically associated via `aria-describedby`. Code:
```
<label for="email">Email address</label>
<div id="email-hint" class="hint">We'll only use this to send your licence</div>
<input id="email" type="email" autocomplete="email">
<span class="error">Error: Enter an email address</span>
```
Ask which checklist item fails.

- A) Item (i)
- B) Item (ii)
- C) Item (iii)
- D) Item (iv)

**Correct answer: D**

**Explanation:** Items (i)–(iii) all pass; the hint has `id="email-hint"` but the input lacks `aria-describedby="email-hint"`, so a screen reader will not announce it. This tests checking all four items methodically, since the hint is visible on screen — which is exactly why this bug slips past visual review, but not systematic checking.

**Question 4 (easy) — Prioritising a morning after stand-up**

At 9:45am, four items: (1) the build on the main branch is failing after yesterday's merges, blocking everyone's deployments; (2) a designer asked, yesterday, for a prototype review "when you get a chance this week"; (3) a personal feature ticket is due at sprint end, three days away; (4) a senior developer offered to pair on testing at 2pm today. Ask what to do first.

- A) Start the feature ticket — deadlines come first.
- B) Investigate the failing build, or join whoever is already fixing it.
- C) Review the designer's prototype so it isn't hanging over the day.
- D) Prepare for the 2pm pairing session.

**Correct answer: B**

**Explanation:** A broken main-branch build blocks the whole team's deployments and multiplies its cost every hour it stays red — highest impact and most urgent by a wide margin. This tests ranking by impact and urgency together rather than by personal deadline (A), a vague window (C), or an event hours away (D) — and recognising that checking whether "someone else is probably handling it" is worth verifying, not assuming.

**Question 5 (moderate) — Pattern recognition in a build output**

Fingerprinting pattern: `<name>.<8-character-hash>.<extension>`, e.g. `main.3f2a9c1b.css`. Output folder: (1) `main.3f2a9c1b.css`; (2) `app.9d41e7aa.js`; (3) `print.a1b2c3d.css`; (4) `admin.77f0e2c4.js`. Ask which file breaks the naming pattern.

- A) File 1
- B) File 2
- C) File 3
- D) File 4

**Correct answer: C**

**Explanation:** File 3's hash (`a1b2c3d`) has seven characters, not eight. This tests counting characters rather than eyeballing near-identical strings — a malformed fingerprint can indicate a misconfigured build step whose downstream symptom is stale cached assets, a costly bug to trace back to its source.

**Question 6 (moderate) — Deduction about caching and delivery**

Delivery rules: (i) HTML pages are served with no caching; (ii) CSS and JavaScript files are fingerprinted and cached for one year; (iii) a page only uses new styles when its HTML references a new fingerprinted filename. A deployment edits a CSS file, generates a new fingerprint, and updates both the CSS file and the HTML referencing it. Ask what a returning user's browser will do on their next visit.

- A) Use the old cached CSS, because CSS is cached for a year.
- B) Fetch the new HTML, see the new CSS filename, and fetch the new CSS.
- C) Fetch nothing, because everything is cached.
- D) Fetch the new CSS but keep the old HTML.

**Correct answer: B**

**Explanation:** HTML is never cached (rule i), so the browser fetches fresh HTML referencing the new CSS filename; since that filename has never been seen, nothing in cache matches it, so the new CSS is fetched. This tests tracing a rule chain step by step — the year-long cache (rule ii) applies to the old filename, which the new HTML no longer references at all.

**Question 7 (moderate) — Error checking a pull request against the definition of done**

Definition of done: (i) unit tests cover the component's behaviour; (ii) documented in the pattern library; (iii) accessibility checks (automated and keyboard) recorded in the pull request; (iv) any new dependency approved and licence-checked. Pull request note: "Tests added (12 passing). Pattern library entry added. Automated accessibility check passing. Uses the `date-fns` library (already approved last quarter)." Ask what is missing.

- A) Nothing — all four items are satisfied.
- B) The keyboard accessibility check.
- C) The dependency approval.
- D) The pattern library entry.

**Correct answer: B**

**Explanation:** Item (iii) bundles two obligations — automated and keyboard — and only the automated check is recorded. This tests splitting a compound "and" requirement into its separate parts rather than ticking the whole item once one half is satisfied, particularly consequential here since keyboard operation is where a date-picker's accessibility problems concentrate.

**Question 8 (moderate) — Ordering a release with dependencies**

Five tasks: write code (C), write tests (T), get code review (R), update pattern library documentation (D), merge (M). Rules: tests must be written before review is requested; review must be approved before merge; documentation must be finished before merge but may be written any time after the code exists; code precedes everything that examines it. Ask for the valid sequence.

- A) C, T, R, D, M
- B) C, R, T, D, M
- C) T, C, R, D, M
- D) C, T, D, M, R

**Correct answer: A**

**Explanation:** Turning each rule into a precedence fact and testing each option eliminates B (review before tests), C (tests before code exists), and D (merge before review is approved) — only A satisfies every constraint. This tests using stated rules to eliminate options rather than generating every possible ordering from scratch.

**Question 9 (moderate) — Applied problem solving: a bug that only some users see**

A "Save and continue" button does nothing for some users, not reproducible by the team. Facts: click behaviour is attached by JavaScript; failing reports correlate with older browser versions; the bundle recently started using a newer JavaScript syntax feature; the build's transpilation step was recently changed. Ask for the most reasonable hypothesis to test first.

- A) Users are clicking the wrong button.
- B) The newer syntax is not being transpiled for older browsers, so the script fails there and the button's behaviour never attaches.
- C) The server is down intermittently.
- D) The analytics data is wrong.

**Correct answer: B**

**Explanation:** B explains every fact at once — browser-version correlation, the button being inert rather than visibly broken, and the coincidence with both recent changes. This tests aligning a hypothesis with all the evidence rather than one fact in isolation, and recognising that a script error stopping the click handler from attaching, on older browsers only, is precisely what would produce this exact failure pattern.

**Question 10 (hard) — Multi-rule deduction about browser support tiers**

Tiers: "compliant" browsers get the full experience; "functional" browsers must complete every task but may get simpler styling and no enhancements. Rules: (i) above 2% usage is compliant; (ii) between 0.5% and 2% is functional; (iii) below 0.5%, testing is not required, but progressive enhancement should still make tasks work; (iv) assistive technologies are tested regardless of usage share. Analytics: Browser P 45%, Q 30%, R 1.8%, S 0.4%. Asked "So we don't need to care about R and S at all, right?", ask for the accurate reply.

- A) "Correct — R and S are below our support threshold."
- B) "R must be able to complete every task with possibly simpler styling; S isn't tested, but our progressive enhancement approach means tasks should still work there too."
- C) "R gets the full experience; S must complete every task."
- D) "Both R and S get the full experience because we test assistive technologies regardless of usage."

**Correct answer: B**

**Explanation:** R at 1.8% is functional, not full-experience and not "don't care"; S at 0.4% is untested but still expected to work through progressive enhancement, not exempt entirely. This tests reading close-to-boundary values precisely and summarising them faithfully for a stakeholder — "unsupported" never means "broken" in a progressively enhanced service.

**Question 11 (hard) — Scheduling work with fixed constraints**

Four half-day activities: implementing a component (needs two consecutive half-days); a design review of it (must follow implementation; the interaction designer is available only Wednesday afternoon or Friday morning); pattern library documentation (one half-day, must follow the review); a fixed community-of-practice session (Thursday afternoon). Sprint demo is Friday afternoon; documentation must be done before it. Ask for the latest implementation can finish.

- A) Tuesday afternoon
- B) Wednesday morning
- C) Thursday morning
- D) Friday morning

**Correct answer: B**

**Explanation:** Testing Friday morning for the review leaves no slot for documentation before Friday afternoon's demo, so the review must be Wednesday afternoon; the latest two consecutive half-days finishing before then are Tuesday afternoon and Wednesday morning. This tests anchoring the least flexible item (the designer's two possible slots) first and working backwards from the hardest deadline.

**Question 12 (hard) — Applied problem solving with a performance budget trade-off**

Budget: under 300 KB JavaScript, loading within 2.5 seconds on the test connection. Current: 280 KB, 2.3 seconds. A new feature needs a mapping library: full library 90 KB, lightweight alternative 30 KB (lacks one nice-to-have gesture), writing custom code estimated at 4 days. Removing an unused analytics script saves 25 KB. Each 10 KB adds roughly 0.05 seconds. The feature is due this sprint. Ask which option best meets all constraints.

- A) Add the full library and remove the analytics script.
- B) Add the lightweight library and remove the analytics script.
- C) Write custom minimal mapping code.
- D) Add the full library and accept being slightly over budget temporarily.

**Correct answer: B**

**Explanation:** A gives 345 KB (over budget, fails immediately); B gives 285 KB and roughly 2.33 seconds (within both budgets, delivered this sprint at the cost of one nice-to-have gesture). This tests testing every option against every hard constraint before choosing, rather than the option that looks most impressive (C, risking the deadline) or treats a hard budget as soft (D).

### Administration tips

- Score for whether the candidate traces a rule chain (caching, build order, escalation) fully to its actual conclusion rather than a plausible-sounding shortcut.
- Note whether every item in a checklist or definition of done is checked individually, including compound ("and") requirements split into their parts.
- Watch for whether the candidate reads a close-to-boundary numeric value against a threshold precisely, and summarises it accurately rather than rounding off the nuance.
- Score for whether every option in an applied problem-solving item is tested against every stated constraint before one is chosen.
- Note whether a hypothesis is checked against all the given evidence, not just the most convenient piece of it.

### Common pitfalls to watch for when scoring

- Crediting a near-match (character count, class name) accepted without an exact character-by-character check.
- Missing when a candidate ticks a compound checklist item as satisfied on the strength of only one of its two parts.
- Rewarding a conclusion that asserts more than a stated policy actually guarantees.
- Accepting an applied problem-solving answer that looks impressive but was not checked against every hard constraint.
- Missing a boundary-value misread (e.g. "at least 2%" or "between 0.5% and 2%") that changes which tier or category applies.

## Workplace job-specific numeric reasoning assessment

### About this assessment

A numeric reasoning assessment measures how accurately a candidate extracts, manipulates, and interprets numbers in workplace contexts — percentages, ratios, averages, rates, and percentage change — wrapped in realistic data such as tables, charts, and short scenarios.

Typical format: an online, timed test of 20 to 30 minutes with 15 to 25 questions, often sharing a data set across several questions. A calculator is normally permitted.

This is used for junior frontend developers because the role is surrounded by numbers that drive decisions: performance budgets in kilobytes and milliseconds, analytics device and browser splits, test pass rates, accessibility audit counts by severity, and sprint velocity.

### How this assessment maps to the role

- **Percentages and percentage change** map to **Web performance optimisation**: page-weight budgets, compression savings, and load-time improvements.
- **Reading tables and charts** maps to **User focus (frontend developer)** and **Communicating information**: analytics and research data reported faithfully.
- **Averages and rates** map to **Programming and build (frontend developer)** and **Systems integration (frontend developer)**: build durations, test pass rates, and deployment frequencies.
- **Ratios and thresholds** map to **Accessibility**: contrast ratios and audit severity counts.
- **Weighted combinations** map to **Strategic thinking** and **Community collaboration**: combining results from different-sized groups without distortion.

### Practice questions

**Question 1 (easy) — Percentage of budget used**

A JavaScript budget is 300 KB; the current bundle is 240 KB. Ask what percentage of the budget is used.

- A) 60%
- B) 75%
- C) 80%
- D) 85%

**Correct answer: C**

**Explanation:** 240 ÷ 300 = 80%. This tests basic part-whole percentage calculation, with a quick sense-check ruling out 60% and 85% since 240 is clearly "most but not nearly all" of 300.

**Question 2 (easy) — Test pass rate after a change**

Before a change, 320 tests all pass; the change adds 30 new tests, and 336 pass in total afterwards. Ask for the overall pass rate to the nearest percent.

- A) 93%
- B) 96%
- C) 98%
- D) 100%

**Correct answer: B**

**Explanation:** New total 350; 336÷350=96%. This tests updating the denominator before dividing — dividing by the old total of 320 gives a nonsensical result over 100%, a common slip.

**Question 3 (easy) — Device split from a table**

Sessions: Mobile 90,000; Desktop 45,000; Tablet 15,000. Ask what percentage of sessions were on mobile.

- A) 50%
- B) 60%
- C) 66%
- D) 75%

**Correct answer: B**

**Explanation:** Total 150,000; 90,000÷150,000=60%. This tests forming a fraction from a table correctly, and in a strong answer, recognising that testing mobile-first reflects where the majority of users actually are.

**Question 4 (easy) — Average page load time**

Five load-time measurements: 2.1, 2.4, 2.0, 2.6, 2.4 seconds. Ask for the mean.

- A) 2.2 s
- B) 2.3 s
- C) 2.4 s
- D) 2.5 s

**Correct answer: B**

**Explanation:** Sum 11.5 ÷ 5 = 2.3. This tests basic averaging, and in a strong answer, noting the value of glancing at the spread (2.0–2.6) rather than trusting the mean alone, since a genuine outlier deserves investigation before being averaged in.

**Question 5 (moderate) — Percentage change in bundle size**

A bundle shrinks from 250 KB to 210 KB after removing an unused library; the team's goal was "at least a 15% reduction". Ask for the percentage reduction and whether the goal was met.

- A) 16% reduction; goal met
- B) 16% reduction; goal not met
- C) 19% reduction; goal met
- D) 40% reduction; goal met

**Correct answer: A**

**Explanation:** (250−210)÷250=16%, meeting the "at least 15%" goal. This tests two disciplines together: dividing by the original value, not the new one (40÷210≈19%, option C), and then comparing the computed figure against the stated threshold correctly.

**Question 6 (moderate) — Accessibility audit across releases**

Issue counts: 1.0 — 6 critical, 10 serious, 24 minor; 1.1 — 3, 8, 30; 1.2 — 1, 4, 33. A colleague says: "Total issues barely changed, so we've made no real progress." Ask whether this is a fair summary.

- A) Yes — totals went 40, 41, 38, which is roughly flat.
- B) No — critical issues fell from 6 to 1 and serious from 10 to 4; the mix improved sharply even though totals are flat.
- C) No — total issues actually rose.
- D) Yes — minor issues increased, cancelling out other progress.

**Correct answer: B**

**Explanation:** Totals (40, 41, 38) are indeed roughly flat, but critical issues fell 83% and serious issues 60%, while minor issues (which matter less per issue) rose. This tests reading a table at the resolution the question actually requires — a flat total across categories of unequal importance can hide a real improvement.

**Question 7 (moderate) — Sprint velocity and forecasting**

Last four sprints: 21, 24, 18, 25 points. Remaining backlog: 66 points. Ask, using the average velocity, how many more full sprints the milestone will take.

- A) 2 sprints
- B) 3 sprints
- C) 4 sprints
- D) 5 sprints

**Correct answer: B**

**Explanation:** Average velocity (21+24+18+25)÷4=22; 66÷22=3.0 exactly. This tests computing an average velocity correctly, and recognising that a non-integer result would round up (a ceiling, not nearest-integer rounding), since partial sprints still need a further full sprint.

**Question 8 (moderate) — Image savings with mixed reductions**

Images total 800 KB: photographs 600 KB, icons 200 KB. Photographs reduce by 45%, icons by 25%. Ask for the total after both optimisations.

- A) 380 KB
- B) 480 KB
- C) 520 KB
- D) 560 KB

**Correct answer: B**

**Explanation:** Photographs 600×0.55=330; icons 200×0.75=150; total 480. This tests handling each category separately when reductions differ, rather than applying one blended percentage to the whole — and, in a strong answer, noting that photographs contribute far more of the savings than icons.

**Question 9 (moderate) — Error rates from a form analytics table**

Page 1: 4,000 entering, 3,600 completing. Page 2: 3,600 entering, 2,700 completing. Page 3: 2,700 entering, 2,565 completing. Ask which page has the highest drop-off rate, and what it is.

- A) Page 1; 10%
- B) Page 2; 25%
- C) Page 3; 5%
- D) Page 2; 900 users

**Correct answer: B**

**Explanation:** Rates: Page 1 10%, Page 2 25%, Page 3 5% — Page 2 highest. This tests computing a rate (a proportion of those at risk) rather than confusing it with the largest raw count (option D, 900 users, is the largest count but not the highest rate).

**Question 10 (hard) — Weighted completion rate across devices**

60 participants: 40 mobile (85% completed), 15 desktop (80%), 5 screen reader users (40%). Ask for the overall completion rate.

- A) 68.3%
- B) 78.3%
- C) 80.0%
- D) 81.7%

**Correct answer: C**

**Explanation:** Mobile 34, desktop 12, screen reader 2 completions; 48÷60=80%. This tests converting each group's rate into people and recombining, rather than averaging the three percentages unweighted (68.3%, option A) — and in a strong answer, noting that the healthy-looking 80% headline conceals that only 2 of 5 screen reader users completed the form.

**Question 11 (hard) — Load-time trend and a performance target**

Monthly median load time: March 3.8, April 3.5, May 3.2, June 2.9 seconds. Target: at most 2.0 seconds. Ask, if the fixed monthly improvement continues, in which month the target is first met.

- A) August
- B) September
- C) October
- D) November

**Correct answer: B**

**Explanation:** Falling 0.3 seconds a month: July 2.6, August 2.3, September 2.0 — meeting "at most 2.0" exactly. This tests listing projected values rather than a quick division prone to an off-by-one error, and reading "at most" as inclusive of the boundary value.

**Question 12 (hard) — Reconciling a stakeholder's claim with the data**

Claim: "Support tickets about the online form fell 60% after the redesign." Before: 180, 150, 170 form tickets/month (total service tickets averaged 1,000/month). After: 90, 80, 85 form tickets/month (total service tickets averaged 500/month). Ask whether the 60% claim is accurate.

- A) Yes — form tickets fell by exactly 60%.
- B) No — form tickets fell by about 49%, though their share of all tickets actually rose.
- C) No — form tickets fell by about 30%.
- D) Yes — form tickets halved and their share fell too.

**Correct answer: B**

**Explanation:** Before 500 total (166.7/month), after 255 total (85/month): a 49% fall, not 60%. Share of all tickets: before ≈17%, after 17% — roughly flat, not falling. This tests verifying a headline claim against the underlying data before repeating it, and checking a second, subtler question (share of total) rather than stopping at the first figure.

### Administration tips

- Score for whether the candidate identifies the correct denominator (original value, updated total, those at risk) before dividing.
- Note whether group figures are converted to counts and recombined, rather than percentages from unequal-sized groups averaged directly.
- Watch for whether a stated boundary word ("at least", "at most", "between") is applied inclusively or exclusively as written.
- Score for whether a rate is distinguished from a raw count when a question or scenario asks specifically for one or the other.
- Note whether the candidate verifies a claimed figure against the underlying data before accepting it, particularly when a stakeholder's number is involved.

### Common pitfalls to watch for when scoring

- Crediting a percentage change computed against the new value instead of the original.
- Missing an unweighted average of percentages from groups of unequal size.
- Rewarding a boundary value treated as failing or passing a threshold inconsistently with the stated wording.
- Accepting a raw count where the question specifically asked for a rate, or vice versa.
- Missing when a candidate accepts a round, stated claim (e.g. "fell 60%") without checking it against the given data.

## Workplace job-specific verbal reasoning assessment

### About this assessment

A verbal reasoning assessment measures how precisely a candidate understands written information and reasons from it. A short passage — a coding standard, accessibility guidance, a service manual extract, a ticket, an email, a sprint or research note — is followed by statements to classify True (the passage states or clearly implies it), False (the passage contradicts it), or Cannot say (insufficient information either way). Some items instead ask for the best summary, the soundest inference, or the clearest writing.

Typical format: an online, timed test of 15 to 25 minutes with 20 to 30 statements across several passages. The candidate must judge each statement using only the passage.

This is used for junior frontend developers because the role's work arrives and leaves as text: user stories, acceptance criteria, standards, review comments, commit messages, pull request descriptions, and messages to designers and stakeholders.

### How this assessment maps to the role

- **Comprehension of requirements** maps to **Programming and build (frontend developer)**: extracting exactly what a ticket or specification commits to.
- **True/false/cannot-say discipline** maps to **User focus (frontend developer)** and **Strategic thinking**: distinguishing what a document establishes from what it leaves open.
- **Modal and quantifier reading** maps to **Modern development standards** and **Accessibility**: reading "must", "should", and "may" at full precision.
- **Inference** maps to **Communicating information**: drawing sound conclusions from what stakeholders actually wrote.
- **Clear-writing judgement** maps to **Community collaboration** and **Prototyping**: recognising clear, specific, actionable writing.

### Practice questions

**Question 1 (easy) — A coding standard**

Passage: "All interactive components must be operable by keyboard alone. Components from the design system have keyboard support built in and may be used without additional keyboard testing. Custom interactive components must pass keyboard testing before release, and the test results must be linked in the pull request."

Statement: "A custom interactive component may be released before keyboard testing, provided the results are linked afterwards."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The passage requires testing "before release," and the statement proposes the reverse order. This tests catching a timing inversion dressed in the passage's own vocabulary — and keeping the design-system and custom-component tracks of the rule separate.

**Question 2 (easy) — An email from a delivery manager**

Passage (email): "Hi both — the minister's office has moved the announcement to Tuesday, so the content changes must be live by Monday 5pm. Dev work looks on track. Design sign-off is still outstanding: Amira is back from leave on Friday and has agreed to review first thing. If anything slips, tell me by Friday lunchtime, not Monday morning. Thanks, Sam."

Statement: "Sam wants to be told about any slippage no later than Friday lunchtime."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Stated directly. This tests committing to True when a passage is explicit, and extracting all of an email's several packed commitments (a deadline, a dependency, an escalation rule) rather than only the loudest one.

**Question 3 (easy) — A service manual extract**

Passage: "Services must work on the devices and browsers that users actually use, informed by analytics. Teams should test on a representative sample of devices. Emulators and simulators may be used for development, but final assurance testing should use real devices."

Statement: "Teams are forbidden from using emulators at any stage."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Emulators are explicitly permitted for development. This tests scope-reading — a stage-scoped rule ("for development", "final assurance") does not survive being universalised to "at any stage."

**Question 4 (easy) — A user research summary**

Passage: "Round 3 testing (six participants) focused on the eligibility checker. Four participants completed all tasks without assistance. Two participants, both using screen magnification, missed the inline error messages and could not complete the final task. Participants generally described the language as clear. We recommend moving error messages above the input fields and re-testing in round 4."

Statement: "Most participants completed all tasks without assistance."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** Four of six is a clear majority. This tests answering the narrow numerical claim actually made, without letting the passage's serious accessibility finding pull the verdict toward False — both facts are true simultaneously.

**Question 5 (moderate) — Progressive enhancement guidance**

Passage: "Build the core user journey with HTML so it works regardless of scripting. Enhance with CSS and JavaScript where they improve the experience. An enhancement must never become a dependency: if removing the script would prevent task completion, the feature is not an enhancement but a requirement, and requires a documented exception. Exceptions are granted only where no HTML-based alternative exists."

Statement: "A feature whose script removal prevents task completion always requires a documented exception."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The passage classifies exactly this case as requiring a documented exception, unconditionally at the classification step — the "only where" clause governs when exceptions are granted, not whether one is required. This tests separating two adjacent rules sharing one sentence-neighbourhood: what triggers a process, versus what the process then decides.

**Question 6 (moderate) — Cannot-say discipline with an incident note**

Passage (incident note): "14:20 — users report the document upload failing with a spinner that never resolves. 14:35 — deploys to the upload service paused. 14:50 — engineers identify a timeout between the upload service and the virus-scanning service introduced by this morning's configuration change. 15:10 — configuration rolled back. 15:25 — uploads confirmed working. Post-incident review scheduled."

Statement: "The frontend team's code caused the incident."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** The note never states which team owns the configuration change. This tests not inferring team boundaries from outside knowledge — an incident note that describes what failed, not who changed it, is deliberately neutral, and the disciplined reading respects that.

**Question 7 (moderate) — Inference from a design system announcement**

Passage: "From version 5.0, the design system's date input component validates day, month, and year ranges by default. Teams upgrading from 4.x should remove any duplicate validation they added themselves, as double validation can produce conflicting error messages. Version 4.x will receive security fixes, but no new features, until March, when support ends entirely."

Statement: "After March, teams still on version 4.x will not receive security fixes."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** "Support ends entirely" in March, combined with "until March," guarantees no fixes of any kind afterwards. This tests drawing a conclusion the stated words guarantee, distinguished from a plausible but unstated instruction like "teams must upgrade before March," which would be Cannot say.

**Question 8 (moderate) — Judging a pull request description**

Guidance: pull request descriptions should state what changed, why, and how it was tested. Four drafts: (1) "Fixes the thing we discussed."; (2) "Updated styles."; (3) "Replaced the custom accordion with the design system version to fix keyboard navigation (issue #482). Tested with keyboard, NVDA screen reader, and the automated suite; all green."; (4) "Massive refactor of everything accordion-related, works now, trust me — details in the commits if you really want them." Ask which best follows the guidance.

- A) Description 1
- B) Description 2
- C) Description 3
- D) Description 4

**Correct answer: C**

**Explanation:** Description 3 states the change, the reason (with a traceable issue number), and the testing performed. This tests checking each option against every stated criterion mechanically, resisting a choice based on tone or apparent confidence (description 4's "trust me" offers none of the three required elements).

**Question 9 (moderate) — Modal verbs in a security standard**

Passage: "Dependencies must be sourced from the approved registry. New dependencies should be discussed with the team before adoption. Dependency updates may be automated, but major-version updates must be reviewed by a developer before merge. Lockfiles must be committed."

Statement: "A developer who adopts a new dependency without team discussion has violated a mandatory requirement of this standard."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** Team discussion is a "should," a strong recommendation, not a "must." This tests distinguishing a lapse against a recommendation from a violation of a mandatory requirement — the statement's word "mandatory" is precisely what makes it False.

**Question 10 (hard) — A dense accessibility regulation extract**

Passage: "Public sector bodies must make their websites accessible unless doing so would impose a disproportionate burden. Claiming disproportionate burden requires an assessment weighing the organisation's size and resources against the benefit to disabled users; cost alone is not sufficient grounds. The claim must be recorded in the accessibility statement and reviewed when circumstances change, and it does not exempt the body from providing accessible alternatives on request where reasonable."

Statement: "An organisation that records a disproportionate burden claim in its accessibility statement is thereby exempt from all accessibility obligations for the affected content."

- A) True
- B) False
- C) Cannot say

**Correct answer: B**

**Explanation:** The final clause preserves the duty to provide accessible alternatives on request even after a valid claim. This tests reading a layered passage in full — rule, exception, procedure, residual duty — rather than stopping at the exception, where tired readers most often stop.

**Question 11 (hard) — Overclaimed summary of an analytics report**

Passage: "Following the header redesign, average session duration rose from 3m 10s to 3m 40s, and the search feature's usage doubled. Task completion for the top three user journeys was unchanged. The redesign coincided with a national deadline that historically increases traffic and engagement. We cannot yet separate the redesign's effect from the deadline effect; the next quarter's data should clarify."

Statement: "The report shows that the header redesign increased user engagement."

- A) True
- B) False
- C) Cannot say

**Correct answer: C**

**Explanation:** Engagement rose, but the report explicitly declines to attribute the rise to the redesign versus a confounding deadline effect. This tests the correlation-versus-causation trap directly — neither affirming nor denying causation is supported, so Cannot say is exact, not a hedge.

**Question 12 (hard) — Reading a strategy extract for what it commits to**

Passage: "Our digital strategy commits us to reducing legacy frontend frameworks from four to one within three years. Migration will be incremental: new features are built in the target framework; existing screens migrate when they are next substantially changed; rarely touched screens may remain on legacy frameworks beyond the three-year horizon if risk assessments justify it. Teams will receive migration training in the first year. No service downtime is expected as a result of migration."

Statement: "Under this strategy, some screens might still use a legacy framework after three years."

- A) True
- B) False
- C) Cannot say

**Correct answer: A**

**Explanation:** The passage explicitly grants this possibility for rarely touched screens. This tests matching a statement's strength to the text's — a possibility claim ("might") is supported by a conditional carve-out, whereas "will remain" would overreach into Cannot say, and "all screens will be migrated" would be False.

### Administration tips

- Score for whether the candidate can point to the specific sentence supporting a verdict, rather than reasoning from outside knowledge.
- Note whether modal verbs, quantifiers, scope words, and time markers are read as load-bearing rather than skimmed past.
- Watch for whether a candidate reads a dense, layered passage (rule, exception, procedure, residual duty) in full rather than stopping at the first exception found.
- Score for whether a candidate distinguishes correlation from stated causation in an analytics or research passage.
- Note whether a candidate matches a statement's exact strength (possibility, certainty, universality) to what the passage actually supports.

### Common pitfalls to watch for when scoring

- Crediting a verdict reasoned from professional experience rather than the passage.
- Missing when a candidate universalises a scoped rule ("for development" generalised to "always").
- Rewarding a statement that merges two adjacent but distinct rules into one.
- Accepting a sympathy-driven verdict where a passage's troubling finding pulls a narrow, accurate claim toward the wrong answer.
- Missing when a candidate treats "should" and "must" as interchangeable.

## Workplace job-specific situational judgement assessment

### About this assessment

A situational judgement assessment (SJT) presents realistic workplace scenarios and asks the candidate to evaluate possible responses — the most effective, the least effective, a ranking, or a rating. There is no arithmetic or formal logic; what is measured is professional judgement: how a candidate balances users, colleagues, standards, deadlines, and their own level of authority.

Typical format: an online test of 20 to 40 minutes covering 10 to 20 scenarios, scored against the judgement of experienced practitioners and the values UK government digital organisations hold: user needs first, working in the open, inclusion and accessibility, honest and early communication, collaboration across disciplines, and proportionate escalation.

For a junior frontend developer, the SJT models the transition this role level is about: working independently with guidance means dozens of small judgement calls each week are genuinely the candidate's own — when to push through a blocker versus ask, how to disagree with a designer, how to handle a standard being bent under deadline pressure.

### How this assessment maps to the role

- **Independent judgement with guidance** maps to **Programming and build (frontend developer)**: calibrating autonomy — neither helpless nor heedless.
- **Advocacy and expectation management** maps to **Communicating information**: representing the team externally and managing differing perspectives.
- **Team contribution** maps to **Community collaboration** and **Leadership and guidance (frontend developer)**: contributing to the work of others, recognising and dealing with issues.
- **Holding standards under pressure** maps to **Modern development standards** and **Accessibility**: whether accessibility and agreed practice survive contact with deadlines and seniority.
- **User-centred instincts** maps to **User focus (frontend developer)** and **Prototyping**: keeping real users, including disabled users, at the centre when evidence, opinion, and effort collide.

### Practice questions

**Question 1 (easy) — Blocked by a missing design**

A new confirmation page's linked design file is missing the error state; the interaction designer is on leave until Thursday (today is Tuesday), and the sprint ends Friday. Ask for the most effective response.

- A) Design the error state personally and build it.
- B) Pause the whole ticket until the designer returns.
- C) Build everything except the error state now, and message the designer and their team channel so the missing state is ready to discuss Thursday; check whether an existing design system error pattern is the intended one.
- D) Ask the delivery manager to extend the sprint.

**Correct answer: C**

**Explanation:** C keeps delivery moving on what is unblocked, surfaces the gap early through the right channel, and checks whether an existing pattern already resolves it. This tests calibrating independence correctly — A bypasses the designer's craft on something with real accessibility and content subtleties, B surrenders three days to one gap, and D escalates before trying anything lighter.

**Question 2 (easy) — Your bug in production**

A user support colleague reports dates displayed off by one day; investigation traces the bug to code merged last week, a timezone handling mistake affecting a small but real number of users. Ask for the most effective response.

- A) Fix it quietly in the next feature branch so it ships with other work.
- B) Tell the team now, raise a bug ticket with the diagnosis, propose a fix as the priority, and thank the support colleague with an update they can pass to users.
- C) Wait for the sprint retrospective to mention it.
- D) Explain to support that date handling is notoriously hard and the impact is minor.

**Correct answer: B**

**Explanation:** B combines immediate transparency, a diagnosed ticket, proper team prioritisation, and closing the loop with support. This tests owning a mistake loudly with a diagnosis attached — A and C hide or delay a live user-facing defect, and D spends effort on self-exculpation instead of the fix.

**Question 3 (easy) — A teammate needs help during a busy week**

Deep in a personal ticket, due Friday and on track but not comfortable, when another junior developer messages that they have been stuck for half a day on a build error already solved two weeks ago. Ask for the most effective response.

- A) Reply that this week is busy and suggest asking someone senior.
- B) Ignore the message until the personal ticket is done.
- C) Spend the whole afternoon pairing with them.
- D) Send the fix used and the reason it works, offer twenty minutes on a call if it doesn't resolve, and return to the ticket.

**Correct answer: D**

**Explanation:** D is proportionate generosity — sharing knowledge that converts a half-day blockage into minutes, with a bounded offer if it doesn't transfer. This tests recognising that contributing to others' work is rarely all-or-nothing — A and B refuse a near-zero-cost contribution, and C over-commits an unbounded afternoon that a hint plus twenty minutes would achieve better.

**Question 4 (easy) — Stakeholder asks directly for a date**

A policy stakeholder asks informally, "When will the payments page rebuild be live? I need a date for a newsletter," when the date depends on another team's API and the plan is the delivery manager's to communicate. Ask for the most effective response.

- A) Give a best guess — "probably a few weeks."
- B) Say dates aren't handled personally and move on.
- C) State the honest position — the date depends on a dependency, and guessing wrongly for a newsletter would be worse than not guessing — and connect the stakeholder with the delivery manager today.
- D) Promise to find out and get back to them, then let it slip given the workload.

**Correct answer: C**

**Explanation:** C is honest about the uncertainty, respects team communication roles, and still actively serves the stakeholder with a same-day handover. This tests understanding that a casual guess can become a stakeholder's contractual commitment — B protects process at the cost of the relationship, and D makes and breaks a promise.

**Question 5 (moderate) — Accessibility versus the sprint goal**

Mid-sprint, a merged file-upload component built by a teammate cannot be operated by keyboard; the sprint goal is a Thursday show-and-tell featuring it, fixing it properly looks like one to two days, and the teammate is now on other work. Ask for the most effective response.

- A) Say nothing until after the show-and-tell.
- B) Raise it in the team channel today, tagging the teammate and lead: describe the issue and its severity for keyboard and assistive-tech users, and offer to pair on the fix or pick it up before Thursday.
- C) Rebuild the component overnight without telling the teammate.
- D) Post publicly that the component fails accessibility standards and shouldn't have passed review.

**Correct answer: B**

**Explanation:** B raises the issue at the speed its severity deserves, through the right channel, with no blame, and offers labour to help meet the sprint goal properly. This tests naming severity honestly while withholding blame and attaching help — A risks showcasing an inaccessible component knowingly, C damages the team by bypassing review and denying learning, and D is public blame dressed as standards enforcement.

**Question 6 (moderate) — Disagreeing with a designer's choice**

A signed-off design uses light grey placeholder text as the only labelling for form fields, believed to fail accessibility standards (placeholders vanish on input, contrast looks insufficient), from an experienced designer. Ask for the most effective response.

- A) Build it as designed — sign-off means the decision is made.
- B) Build it with visible labels instead, and let the designer notice in review.
- C) Message the designer: share specific, evidenced concerns, ask whether these were considered at sign-off, and offer to prototype a visible-label version for comparison.
- D) Raise it at the next team meeting and ask the group to vote.

**Correct answer: C**

**Explanation:** C is specific, evidenced, genuinely open to the possibility this was already considered, and offers a concrete comparison. This tests holding an accessibility view without unilateral action — A outsources professional responsibility to sign-off alone, B ambushes a colleague in review, and D settles a quality question by vote rather than conversation.

**Question 7 (moderate) — Flaky test under deadline**

A pull request must merge today for a release cut-off; the suite fails intermittently on one unrelated, known flaky test with an open ticket (roughly one run in five), and team practice requires a green build; re-running usually produces green. Ask for the most effective response.

- A) Re-run until green, merge, and add a note to the flaky test's ticket that it cost time today.
- B) Comment out the flaky test in the branch so the build is deterministically green, then merge.
- C) Miss the release rather than merge anything that ever showed red.
- D) Ask a senior developer to override the green-build requirement just this once.

**Correct answer: A**

**Explanation:** A uses the legitimate, already-accepted mechanism (re-running to green) and feeds the cost back into the flaky test's ticket. This tests knowing the difference between working a process and gaming it — B silently weakens the suite, C treats a documented flake as real signal, and D asks seniority to waive a practice that does not need waiving.

**Question 8 (moderate) — Credit and visibility**

At a cross-team show-and-tell, a team lead presents an autocomplete component built solo, described as "what the team built," then answers a technical question about it vaguely, not knowing the detail, while the builder stands nearby. Ask for the most effective response.

- A) Stay silent to avoid undermining the lead.
- B) Step in helpfully — "I built that one, happy to go through the detail" — answer the questions, and afterwards suggest co-presenting or demoing personal work in future.
- C) Let the moment pass, then complain to teammates that the lead takes credit.
- D) Interrupt with "Actually, that's mine," and correct the vague answers point by point.

**Correct answer: B**

**Explanation:** B serves the asker with accurate answers, rescues rather than exposes the lead through a natural hand-off, and builds future visibility. This tests contributing helpfully rather than contesting credit — A leaves the asker with vague answers, C changes nothing, and D gets the facts right but frames the moment as a contest rather than a contribution.

**Question 9 (moderate) — Scope creep from a friendly stakeholder**

A content designer asks, while working on the confirmation page: "Could you also add a print stylesheet? Tiny job, users keep asking" — probably an hour or two, not in the ticket, sprint tight, unticketed work has burned the team before. Ask for the most effective response.

- A) Just do it — it's small, and goodwill matters.
- B) Refuse: "Not in the ticket, raise it through the product manager."
- C) Say it sounds genuinely useful and quick, offer to write the ticket with them now, and flag it to the product manager for a priority call.
- D) Do it secretly and don't mention it in stand-up.

**Correct answer: C**

**Explanation:** C validates genuine user-needs evidence, routes it through prioritisation in the lightest way, and keeps the sprint plan honest. This tests protecting planning integrity without spending the relationship — A trades planning integrity for goodwill and invites the pattern to repeat, D is A plus concealment, and B holds the boundary at unnecessary relational cost.

**Question 10 (hard) — Research contradicts your prototype**

A proud inline-editing prototype fails usability testing: two of six participants, including one screen reader user, didn't realise changes had saved, and another accidentally edited a field. The researcher and interaction designer recommend a conventional edit-page pattern instead; minor tweaks are believed to be able to rescue the inline pattern. Ask for the most effective response.

- A) Accept the recommendation immediately and delete the prototype branch.
- B) Argue the sample is too small to justify abandoning a better interaction.
- C) Accept that the evidenced default is now the conventional pattern, ask the researcher to help understand the failures, and ask whether a tweaked version could earn a slot in future testing while the conventional pattern is built now.
- D) Build the conventional pattern, but keep quietly refining the inline version in work hours for a future reveal.

**Correct answer: C**

**Explanation:** C lets evidence govern the current decision, replaces defensiveness with curiosity about the causes, and keeps the idea alive through the legitimate route of future testing. This tests holding an idea firmly enough to iterate and lightly enough to let evidence steer — A discards salvageable learning, B relitigates a real usability failure, and D splits the team's reality with a shadow workstream.

**Question 11 (hard) — A senior developer's questionable instruction**

Before a demo, a senior developer says: "Strip out the focus outline styles globally — the blue rings look messy in the demo. We'll put them back after," a change that would go through the normal pipeline to production and make the service unusable for keyboard users. Ask for the most effective response.

- A) Do it — they're senior, and it's temporary.
- B) Say it's not comfortable removing focus indicators even temporarily since it ships to production and breaks keyboard use — offer a demo-safe alternative (a local flag, a demo environment tweak, or restyled but visible focus indicators); if they insist, say the tech lead's view would be wanted first.
- C) Say yes, then simply not do it and hope the demo goes fine.
- D) Refuse and immediately report the request to the head of profession as an accessibility violation.

**Correct answer: B**

**Explanation:** B declines with a reasoned, specific harm, offers alternatives that solve the actual underlying need (a clean-looking demo), and escalates transparently rather than silently if there's a deadlock. This tests holding a standard under seniority pressure with a constructive alternative in hand — A ships a change known to harm users, C is deceit, and D jumps to maximal escalation disproportionately.

**Question 12 (hard) — Least effective: the abandoned improvement**

A retrospective agreed pattern library documentation was badly out of date; a volunteer took it on "as capacity allows," three sprints have passed with none of it done, and stale docs have now misled a new developer into rebuilding an existing component. Ask which response would be least effective among: (A) acknowledge in retro that it hasn't moved, propose timeboxing it into next sprint as a real ticket or handing it to someone with capacity, and pair with the new developer to merge their duplicate with the existing component; (B) quietly delete the outdated pages so they can't mislead anyone else, without telling the team; (C) apologise to the new developer, explain what happened, and ask the delivery manager to make the documentation work visible on the board; (D) raise in retro that "as capacity allows" tasks never get capacity, and the team should ticket improvement work properly.

- A) Option A
- B) Option B
- C) Option C
- D) Option D

**Correct answer: B**

**Explanation:** B combines concealment, information loss (removing wrong information by removing all information), and unilateral action without the team's knowledge. This tests identifying the option that damages most — A, C and D each own the lapse, repair a relationship, or fix the systemic cause, all in the open, while B disguises the real problem and guarantees its recurrence.

### Administration tips

- Score for whether the candidate calibrates independence correctly — acting on what is genuinely theirs while surfacing what is not, rather than acting alone on something outside their remit or deferring everything upward.
- Note whether a response fixes the immediate problem, protects the relationship, and improves the system for next time — strong responses tend to do more than one.
- Watch for whether the candidate chooses concealment, silent workaround, or public confrontation, which cluster among weaker responses.
- Score for whether a "no" or a disagreement is paired with a constructive alternative, rather than delivered as a bare refusal.
- Note whether escalation, when it occurs, follows a genuine attempt at the direct route and is announced rather than sprung.

### Common pitfalls to watch for when scoring

- Crediting deference to seniority as sufficient justification for shipping harm or staying silent.
- Missing when a candidate treats silence or concealment as kindness when the situation actually calls for early, factual disclosure.
- Rewarding unilateral action (redesigning someone else's work, a silent overnight rewrite) dressed as initiative.
- Accepting a flat process-based refusal that protects the letter of a rule while damaging the relationship, where walking the requester through the process would achieve the same boundary.
- Missing when a candidate over-escalates, skipping a direct conversation that had a reasonable chance of resolving the issue.

## Conclusion

This guide has worked through pattern and convention checking across CSS, build pipelines and caching rule chains, multi-item checklist auditing including compound requirements, and applied problem-solving that tests every option against every constraint; percentages, weighted averages, thresholds and trend projection across performance budgets, test suites and accessibility audits; the discipline of judging True, False and Cannot say from a passage alone, including layered rules, scoped exceptions, and correlation-versus-causation traps; and the situational judgement calls that define the junior stage — calibrating independence correctly, holding a standard under seniority pressure while offering a constructive alternative, and disagreeing or declining with reasons and help attached rather than silence or unilateral action.

**Scoring and debrief.** Score against the worked explanations, not the answer letter alone — several situational and verbal items reward the quality of reasoning and method as much as the final choice, and this level in particular benefits from seeing exactly where a checklist, a rule chain, or a reading habit broke down. Debrief promptly, holding back the answer key until scoring is complete for every candidate sitting this role level.

**Records and consistency.** Administer the same items and the same time allowance to every candidate for this role level, and keep a record of scores and the reasoning behind them. Consistency across candidates is what protects the fairness of the process, and what would let this material stand up to scrutiny if a decision it informed were later questioned.

**One assessment among several.** This material is not validated, piloted or normed, and a result from it must never be the sole basis for a hiring, promotion, pay, performance or disciplinary decision — see the Advisory above. Use it alongside structured interviews, work samples and reference checks, and weigh its results accordingly.
