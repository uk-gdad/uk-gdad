<script lang="ts">
  import Breadcrumbs from '#lib/Breadcrumbs.svelte';
  import { Badge } from '@lilydesignsystem/svelte-headless';
  import { page } from '$app/state';

  let { data } = $props();

  let query = $state('');

  // The header search box navigates to `/search/?<terms>` (SearchPicker's
  // contract: the bare query string, no key). Effects do not run while
  // prerendering, so there is no query string to read there; in the browser it
  // re-runs when the header box is used again while this page is open.
  $effect(() => {
    const raw = page.url.search.slice(1).replace(/\+/g, ' ');
    let terms = raw;
    try {
      terms = decodeURIComponent(raw);
    } catch {
      // A malformed escape: search for the text as typed.
    }
    if (terms) query = terms;
  });

  const words = $derived(query.toLowerCase().split(/\s+/).filter(Boolean));

  // Every word typed has to appear somewhere, so "senior data" and
  // "data senior" find the same thing.
  const roleMatches = $derived(
    words.length
      ? data.rows.filter((row) => {
          const haystack = `${row.levelTitle} ${row.roleTitle} ${row.professionTitle}`.toLowerCase();
          return words.every((word) => haystack.includes(word));
        })
      : []
  );
  const skillMatches = $derived(
    words.length
      ? data.skills.filter((skill) => words.every((word) => skill.title.toLowerCase().includes(word)))
      : []
  );
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Search every role level and skill in the UK Government Digital and Data Profession Capability Framework."
  />
</svelte:head>

<Breadcrumbs trail={[{ href: '/', label: 'Home' }, { label: 'Search' }]} />

<div class="hero">
  <h1>Search</h1>
  <p class="hero-lede">
    Search all {data.rows.length} role levels and {data.skills.length} skills in the framework.
  </p>
</div>

<div class="finder-form">
  <label class="finder-label" for="site-search">Search roles and skills</label>
  <input
    class="finder-input"
    id="site-search"
    type="search"
    autocomplete="off"
    placeholder="For example: senior developer, or security"
    bind:value={query}
  />
</div>

{#if words.length}
  <p class="finder-count" aria-live="polite">
    {roleMatches.length} role {roleMatches.length === 1 ? 'level' : 'levels'} and
    {skillMatches.length} {skillMatches.length === 1 ? 'skill' : 'skills'} match
  </p>

  <h2>Role levels</h2>
  {#if roleMatches.length}
    <ul class="result-list">
      {#each roleMatches as row (row.slug)}
        <li>
          <a href="/{row.slug}/">{row.levelTitle}</a>
          {#if !row.inUse}<Badge type="warning">Not in use</Badge>{/if}
          <span class="result-meta">{row.roleTitle} · {row.professionTitle}</span>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No role level matches <strong>{query}</strong>.</p>
  {/if}

  <h2>Skills</h2>
  {#if skillMatches.length}
    <ul class="result-list">
      {#each skillMatches as skill (skill.slug)}
        <li>
          <a href="/skills/{skill.slug}/">{skill.title}</a>
          <span class="result-meta">
            {skill.levelCount} role {skill.levelCount === 1 ? 'level' : 'levels'}
          </span>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No skill matches <strong>{query}</strong>.</p>
  {/if}
{:else}
  <p>
    Type a role, a level, a profession, or a skill. You can also
    <a href="/roles/">browse role levels</a>, <a href="/skills/">browse skills</a>, or
    <a href="/professions/">browse by profession</a>.
  </p>
{/if}
