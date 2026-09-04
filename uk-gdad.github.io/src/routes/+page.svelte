<script lang="ts">
    let { data } = $props();
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta
        name="description"
        content="Browse every role, level, and skill in the UK Government Digital and Data Profession Capability Framework, with a start-here learning pathway, upskilling resources, development checklists and practice assessments."
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
