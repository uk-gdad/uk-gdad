<script lang="ts">
  import Card from '$lib/lily/Card.svelte';
  import SectionHeading from '$lib/lily/SectionHeading.svelte';
  import Statistic from '$lib/lily/Statistic.svelte';
  import { RESOURCES } from '$lib/types';

  let { data } = $props();

  const resourceCounts: Record<string, number> = $derived({
    summary: data.counts.levels,
    startHere: data.counts.startHere,
    upskilling: data.counts.upskilling,
    development: data.counts.development,
    assessment: data.counts.assessment,
    gapform: data.counts.gapform
  });
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Browse every role, level and skill in the UK Government Digital and Data Profession Capability Framework, with a start-here learning pathway, upskilling resources, development checklists and practice assessments."
  />
</svelte:head>

<div class="hero">
  <h1>Every UK GDAD role, level and skill in one place</h1>
  <p class="hero-lede">
    The Government Digital and Data (GDAD) Profession Capability Framework (PCF) describes the
    digital and data roles across UK government. This site makes it browsable, and adds a
    start-here learning pathway, upskilling resources, development checklists and practice
    assessments for each role level.
  </p>
  <div class="button-row">
    <a class="button" href="/roles/">Find your role</a>
    <a class="button button-secondary" href="/professions/">Browse professions</a>
  </div>
</div>

<div class="stat-row">
  <Statistic title="Professions" value={String(data.counts.professions)} />
  <Statistic title="Roles" value={String(data.counts.roles)} />
  <Statistic title="Role levels" value={String(data.counts.levels)} />
  <Statistic title="Named skills" value={String(data.counts.skills)} />
</div>

<section class="section">
  <SectionHeading
    eyebrow="For every role level"
    heading="Six documents per role level"
    subtitle="Start from a role summary and a learning pathway, then follow it through to upskilling, development, assessment and a skills gap form."
  />
  <ul class="card-grid">
    {#each RESOURCES as resource (resource.kind)}
      <li>
        <Card heading={resource.title}>
          <p>{resource.description}</p>
          <p class="card-meta">{resourceCounts[resource.kind]} role levels covered</p>
        </Card>
      </li>
    {/each}
  </ul>
  <p><a href="/roles/">Find a role level</a> to open all six.</p>
</section>

<section class="section">
  <SectionHeading
    eyebrow="Professions"
    heading="Start with a profession"
    subtitle="Each profession holds a set of roles, and each role has levels from apprentice through to principal."
  />
  <ul class="card-grid">
    {#each data.professions as profession (profession.slug)}
      <li>
        <Card heading={profession.title} href="/professions/{profession.slug}/">
          <p class="card-meta">
            {profession.roleCount} roles · {profession.levelCount} levels
          </p>
        </Card>
      </li>
    {/each}
  </ul>
</section>

<section class="section">
  <SectionHeading
    eyebrow="Skills"
    heading="Or start with a skill"
    subtitle="The framework names the same skills across many roles. Follow a skill to see every role level that expects it, and how the expectation grows."
  />
  <div class="button-row">
    <a class="button button-secondary" href="/skills/">Browse {data.counts.skills} skills</a>
    <a class="button button-secondary" href="/skills-self-assessment/">Rate your own skills</a>
  </div>
</section>
