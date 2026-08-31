<script lang="ts">
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Card from '$lib/lily/Card.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="The professions in the UK Government Digital and Data Profession Capability Framework, and the roles within each."
  />
</svelte:head>

<Breadcrumbs trail={[{ href: '/', label: 'Home' }, { label: 'Professions' }]} />

<div class="hero">
  <h1>Professions</h1>
  <p class="hero-lede">
    The framework groups digital and data work into {data.professions.length} professions. Each one holds
    a set of roles, and each role has levels.
  </p>
</div>

<ul class="card-grid">
  {#each data.professions as profession (profession.slug)}
    <li>
      <Card heading={profession.title} href="/professions/{profession.slug}/">
        <p>{profession.roles.map((role) => role.title).slice(0, 4).join(', ')}{profession.roles.length > 4 ? ', and more' : ''}</p>
        <p class="card-meta">{profession.roles.length} roles · {profession.levelCount} levels</p>
      </Card>
    </li>
  {/each}
</ul>
