<script lang="ts">
    import Card from "$lib/lily/Card.svelte";
    import SectionHeading from "$lib/lily/SectionHeading.svelte";
    import Statistic from "$lib/lily/Statistic.svelte";
    import { RESOURCES } from "$lib/types";

    let { data } = $props();

    const resourceCounts: Record<string, number> = $derived({
        summary: data.counts.levels,
        startHere: data.counts.startHere,
        upskilling: data.counts.upskilling,
        development: data.counts.development,
        assessmentByAssessor: data.counts.assessmentByAssessor,
        assessmentByYourself: data.counts.assessmentByYourself,
        competencyByAssessor: data.counts.competencyByAssessor,
        competencyByYourself: data.counts.competencyByYourself,
        gapform: data.counts.gapform,
    });
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
