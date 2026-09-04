<script lang="ts">
    let { data } = $props();
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta
        name="description"
        content="Browse every role, level, and skill in the UK Government Digital and Data Profession Capability Framework, with a start-here learning pathway, upskilling resources, development checklists, skills gap forms, and practice assessments."
    />
</svelte:head>

<div class="hero">
    <h1>Every UK GDAD role, level and skill in one place</h1>
    <p class="hero-lede">
        The Government Digital and Data (GDAD) Profession Capability Framework
        (PCF) describes the digital and data roles across UK government. This
        site makes it browsable, with learning pathways, upskilling resources,
        professional development checklists, and various kinds of assessments.
    </p>
    <div class="button-row">
        <a class="button" href="/professions/">Professions</a>
        <a class="button" href="/roles/">Roles</a>
        <a class="button" href="/skills/">Skills</a>
    </div>
</div>

<div class="prose">
    <h2>What this website provides for each role and level</h2>

    <h3>Start here</h3>
    <p>
        A friendly explanation of what the role level is about, links to
        explore the rest of the framework from it, and a learning pathway to
        work through, step by step.
    </p>

    <h3>Role summary</h3>
    <p>
        The role, the level, and its specification — the accountabilities and
        skills the framework names for it — adapted here as plain text, with
        thanks to the
        <a href="https://ddat-capability-framework.service.gov.uk/"
            >official UK GDAD PCF website</a
        > for publishing it openly.
    </p>

    <h3>Upskilling resources</h3>
    <p>
        Courses, videos, books, blog posts, and research papers for
        upskilling, learning, and growth. Treat these as starting points — a
        way in to learning much more, not the whole of what is out there.
    </p>

    <h3>Continuing professional development</h3>
    <p>
        A checklist for planning, doing, and recording your ongoing
        development, with a section written specifically for the role level
        rather than generic advice.
    </p>

    <h3>Assessments</h3>
    <p>
        Structured ways to evaluate a person's skills, knowledge, and
        behaviour against what a role level's work actually requires. This
        site provides two kinds — <strong>psychometric assessments</strong>,
        testing reasoning and judgement through practice items, and
        <strong>competency assessments</strong>, rating demonstrated skill
        against a baseline — each written in two voices: one for an
        employer's assessor to administer, and one for individual self
        assessment, working through it on your own.
    </p>

    <h3>Skills gap form</h3>
    <p>
        A form to compare what you do now against what the level expects,
        covering job tasks, skills, and legal compliance. Written for an
        employee to read and fill in themselves, saved in your own browser as
        you go.
    </p>

    <p>
        Looking for something that is not tied to one role level? The
        <a href="/skills-self-assessment/">skills self-assessment</a> tool rates
        you against every skill in the whole framework at once. Or
        <a href="/roles/">find your role level</a> to see all nine documents together.
    </p>
</div>
