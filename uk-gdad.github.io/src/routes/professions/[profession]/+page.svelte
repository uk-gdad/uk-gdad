<script lang="ts">
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Badge from '$lib/lily/Badge.svelte';
  import { RESOURCES } from '$lib/types';

  let { data } = $props();

  // Every level has a role summary, so count the rest — the documents that
  // are actually optional and can still be missing for a level.
  const otherResources = RESOURCES.filter((resource) => resource.kind !== 'summary');

  function documentCount(has: Record<string, boolean>): number {
    return otherResources.filter((resource) => has[resource.kind]).length;
  }
</script>

<svelte:head>
  <title>{data.title}</title>
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
            <span class="level-list-meta"
              >{documentCount(level.has)} of {otherResources.length} documents</span
            >
          </a>
        </li>
      {/each}
    </ul>
  </section>
{/each}
