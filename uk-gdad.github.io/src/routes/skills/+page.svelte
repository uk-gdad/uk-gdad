<script lang="ts">
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';

  let { data } = $props();

  let query = $state('');
  const matches = $derived(
    data.skills.filter((skill) => skill.title.toLowerCase().includes(query.toLowerCase().trim()))
  );
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Every skill named in the UK Government Digital and Data Profession Capability Framework, and the role levels that expect it."
  />
</svelte:head>

<Breadcrumbs trail={[{ href: '/', label: 'Home' }, { label: 'Skills' }]} />

<div class="hero">
  <h1>Skills</h1>
  <p class="hero-lede">
    The framework names {data.skills.length} skills. The same skill appears across many roles, with the
    expectation growing as the level rises.
  </p>
</div>

<div class="finder-form">
  <label class="finder-label" for="skill-search">Search skills</label>
  <input
    class="finder-input"
    id="skill-search"
    type="search"
    autocomplete="off"
    placeholder="For example: security"
    bind:value={query}
  />
</div>

<p class="finder-count" aria-live="polite">Showing {matches.length} of {data.skills.length} skills</p>

<ul class="result-list">
  {#each matches as skill (skill.slug)}
    <li>
      <a href="/skills/{skill.slug}/">{skill.title}</a>
      <span class="result-meta">
        {skill.levelCount} role {skill.levelCount === 1 ? 'level' : 'levels'}
      </span>
    </li>
  {/each}
</ul>
