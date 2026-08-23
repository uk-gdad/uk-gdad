<script lang="ts">
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Badge from '$lib/lily/Badge.svelte';
  import { RESOURCES } from '$lib/types';

  let { data } = $props();

  /** How many of the four documents exist for a level. */
  function documentCount(has: Record<string, boolean>): number {
    return RESOURCES.filter((resource) => has[resource.kind]).length;
  }
</script>

<svelte:head>
  <title>{data.profession.title} — UK GDAD PCF</title>
  <meta
    name="description"
    content="Roles and levels in the {data.profession.title} profession of the UK Government Digital and Data Profession Capability Framework."
  />
</svelte:head>

<Breadcrumbs
  trail={[
    { href: '/', label: 'Home' },
    { href: '/professions/', label: 'Professions' },
    { label: data.profession.title }
  ]}
/>

<div class="hero">
  <h1>{data.profession.title}</h1>
  <p class="hero-lede">
    {data.profession.roles.length} roles, {data.profession.levelCount} levels.
  </p>
</div>

{#each data.profession.roles as role (role.slug)}
  <section class="section">
    <h2 id={role.slug}>{role.title}</h2>
    <ul class="level-list">
      {#each role.levels as level (level.slug)}
        <li>
          <a href="/roles/{level.slug}/">
            {#if level.order !== null}
              <span class="level-list-number">{level.order}</span>
            {/if}
            <span class="level-list-title">{level.title}</span>
            {#if !level.inUse}
              <Badge type="warning">Not in use</Badge>
            {/if}
            <span class="level-list-meta">{documentCount(level.has)} of 4 documents</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
{/each}
