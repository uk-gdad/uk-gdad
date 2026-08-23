<script lang="ts">
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import ResourceNav from '$lib/ResourceNav.svelte';
  import Badge from '$lib/lily/Badge.svelte';
  import Card from '$lib/lily/Card.svelte';
  import InsetText from '$lib/lily/InsetText.svelte';
  import SummaryList from '$lib/lily/SummaryList.svelte';
  import SummaryListItem from '$lib/lily/SummaryListItem.svelte';
  import { RESOURCES } from '$lib/types';

  let { data } = $props();

  const otherResources = RESOURCES.filter((resource) => resource.kind !== 'summary');
</script>

<svelte:head>
  <title>{data.level.title} — {data.role.title} — UK GDAD PCF</title>
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
    { label: data.level.title }
  ]}
/>

<div class="doc-header">
  <p class="doc-context">{data.profession.title} · {data.role.title}</p>
  <h1>
    {data.level.title}
    {#if !data.level.inUse}<Badge type="warning">Not in use</Badge>{/if}
  </h1>
  <ResourceNav slug={data.slug} current="summary" has={data.level.has} />
</div>

<div class="layout-with-aside">
  <div>
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
  </div>

  <aside class="layout-aside">
    <SummaryList label="Role level details">
      <SummaryListItem term="Profession">
        <a href="/professions/{data.profession.slug}/">{data.profession.title}</a>
      </SummaryListItem>
      <SummaryListItem term="Role">{data.role.title}</SummaryListItem>
      <SummaryListItem term="Level">{data.level.title}</SummaryListItem>
      <SummaryListItem term="Skills">{data.summary.skills.length}</SummaryListItem>
    </SummaryList>

    {#if data.siblings.length > 1}
      <nav aria-label="Other levels in this role">
        <h2>Other levels</h2>
        <ul class="level-list">
          {#each data.siblings as sibling (sibling.slug)}
            <li>
              <a href="/roles/{sibling.slug}/" aria-current={sibling.slug === data.slug ? 'page' : undefined}>
                {#if sibling.order !== null}
                  <span class="level-list-number">{sibling.order}</span>
                {/if}
                <span class="level-list-title">{sibling.title}</span>
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    {/if}

    <InsetText>
      Adapted from the Government Digital and Data Profession Capability Framework under the Open
      Government Licence v3.0.
    </InsetText>
  </aside>
</div>

<section class="section">
  <h2>Go further with this level</h2>
  <ul class="card-grid">
    {#each otherResources as resource (resource.kind)}
      <li>
        {#if data.level.has[resource.kind]}
          <Card heading={resource.title} href="{resource.base}/{data.slug}/">
            <p>{resource.description}</p>
          </Card>
        {:else}
          <Card heading={resource.title}>
            <p>{resource.description}</p>
            <p class="card-meta">Not written for this level yet.</p>
          </Card>
        {/if}
      </li>
    {/each}
  </ul>
</section>
