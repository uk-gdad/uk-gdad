<script lang="ts">
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Badge from '$lib/lily/Badge.svelte';

  let { data } = $props();

  let query = $state('');

  const rows = $derived(
    data.rows.map((row) => ({
      ...row,
      haystack: `${row.levelTitle} ${row.roleTitle} ${row.professionTitle}`.toLowerCase()
    }))
  );

  // Every word typed has to appear somewhere in the row, so "senior data" and
  // "data senior" find the same thing.
  const matches = $derived.by(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return rows;
    return rows.filter((row) => words.every((word) => row.haystack.includes(word)));
  });
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Search every role level in the UK Government Digital and Data Profession Capability Framework."
  />
</svelte:head>

<Breadcrumbs trail={[{ href: '/', label: 'Home' }, { label: 'Roles' }]} />

<div class="hero">
  <h1>Find a role</h1>
  <p class="hero-lede">
    All {data.rows.length} role levels in the framework. Search by role, level or profession.
  </p>
</div>

<div class="finder-form">
  <label class="finder-label" for="role-search">Search roles</label>
  <input
    class="finder-input"
    id="role-search"
    type="search"
    autocomplete="off"
    placeholder="For example: senior developer, or user researcher"
    bind:value={query}
  />
</div>

<p class="finder-count" aria-live="polite">
  Showing {matches.length} of {rows.length} role levels
</p>

{#if matches.length}
  <ul class="result-list">
    {#each matches as row (row.slug)}
      <li>
        <a href="/roles/{row.slug}/">{row.levelTitle}</a>
        {#if !row.inUse}<Badge type="warning">Not in use</Badge>{/if}
        <span class="result-meta">{row.roleTitle} · {row.professionTitle}</span>
      </li>
    {/each}
  </ul>
{:else}
  <div class="finder-empty">
    <p>No role level matches <strong>{query}</strong>.</p>
    <p>Try a shorter search, or <a href="/professions/">browse by profession</a>.</p>
  </div>
{/if}
