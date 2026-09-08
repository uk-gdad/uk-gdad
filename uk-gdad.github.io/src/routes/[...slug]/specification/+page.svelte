<script lang="ts">
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Badge from '$lib/lily/Badge.svelte';
  import { RESOURCES } from '$lib/types';

  let { data } = $props();

  const resourceTitle = RESOURCES.find((resource) => resource.kind === 'summary')!.title;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="{data.level.title}: what the level does, what it is accountable for, and the {data
      .summary.skills.length} skills it needs, in the UK Government Digital and Data Profession Capability Framework."
  />
</svelte:head>

<Breadcrumbs
  trail={[
    { href: '/', label: 'Home' },
    { href: '/professions/', label: 'Professions' },
    { href: `/professions/${data.profession.slug}/`, label: data.profession.title },
    { href: `/${data.slug}/`, label: data.level.title },
    { label: resourceTitle }
  ]}
/>

<div class="doc-header">
  <h1>
    {data.level.title}: specification
    {#if !data.level.inUse}<Badge type="warning">Not in use</Badge>{/if}
  </h1>
</div>

<section>
  <h2>The role: {data.summary.roleTitle}</h2>
  {#each data.summary.roleDescription as line}
    <p>{line}</p>
  {/each}
  {#if data.summary.roleDuties.length}
    <p>In this role, you will:</p>
    <ul>
      {#each data.summary.roleDuties as duty}
        <li>{duty}</li>
      {/each}
    </ul>
  {/if}
  {#each data.summary.roleNotes as note}
    <p>{note}</p>
  {/each}
</section>

<section>
  <h2>This level: {data.level.title}</h2>
  {#each data.summary.levelDescription as line}
    <p>{line}</p>
  {/each}
  {#if data.summary.levelDuties.length}
    <p>At this role level, you will:</p>
    <ul>
      {#each data.summary.levelDuties as duty}
        <li>{duty}</li>
      {/each}
    </ul>
  {/if}
  {#each data.summary.levelNotes as note}
    <p>{note}</p>
  {/each}
</section>

<section>
  <h2>Skills for this level</h2>
  {#if data.summary.skills.length}
    <p>
      The framework names {data.summary.skills.length} skills at this level. Follow a skill to see
      every other role level that expects it.
    </p>
    <ul class="skill-list">
      {#each data.summary.skills as skill (skill.slug)}
        <li>
          <h3><a href="/skills/{skill.slug}/">{skill.title}</a></h3>
          <ul>
            {#each skill.points as point}
              <li>{point}</li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No skills are listed for this level.</p>
  {/if}
</section>
