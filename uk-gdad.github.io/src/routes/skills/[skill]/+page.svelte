<script lang="ts">
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="{data.levelCount} role levels in the UK Government Digital and Data Profession Capability Framework expect the skill {data.skillTitle}."
  />
</svelte:head>

<Breadcrumbs
  trail={[
    { href: '/', label: 'Home' },
    { href: '/skills/', label: 'Skills' },
    { label: data.skillTitle }
  ]}
/>

<div class="hero">
  <h1>{data.skillTitle}</h1>
  <p class="hero-lede">
    {data.levelCount} role {data.levelCount === 1 ? 'level expects' : 'levels expect'} this skill,
    across {data.professions.length}
    {data.professions.length === 1 ? 'profession' : 'professions'}. Open a level to read what the
    skill means there.
  </p>
</div>

{#each data.professions as profession (profession.slug)}
  <section class="section">
    <h2>
      <a href="/professions/{profession.slug}/">{profession.title}</a>
    </h2>
    <ul class="result-list">
      {#each profession.rows as row (row.slug)}
        <li>
          <a href="/roles/{row.slug}/">{row.levelTitle}</a>
          <span class="result-meta">{row.roleTitle}</span>
        </li>
      {/each}
    </ul>
  </section>
{/each}
