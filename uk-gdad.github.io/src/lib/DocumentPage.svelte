<script lang="ts">
  // One markdown document for one role level, with breadcrumbs back to this
  // level's start-here page, which is where the links to every sibling
  // document live.
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import type { ResourceKind } from '$lib/types';

  type DocumentData = {
    kind: ResourceKind;
    slug: string;
    resourceTitle: string;
    heading: string;
    title: string;
    html: string;
    profession: { slug: string; title: string };
    role: { title: string };
    level: { title: string };
  };

  let { data }: { data: DocumentData } = $props();

  const isGapformStyle = $derived(
    data.kind === 'skillGapForm' ||
      data.kind === 'competencyAssessmentByAssessor' ||
      data.kind === 'competencyAssessmentByIndividual'
  );
</script>

{#snippet gapformTools(withStatus: boolean)}
  <!-- Hidden until `gapform.js` shows it: without JavaScript these buttons
       would do nothing, and the form is still usable on paper. The toolbar
       appears once above the form and once below it, so a reader filling in
       a long one never has to scroll back up to export or clear. -->
  <div class="gapform-tools" hidden>
    <div class="button-row">
      <button type="button" class="button button-secondary gapform-export-tsv">
        Export TSV
      </button>
      <button type="button" class="button button-secondary gapform-export-json">
        Export JSON
      </button>
      <button type="button" class="button button-secondary gapform-clear"> Clear answers </button>
    </div>
    {#if withStatus}
      <p class="gapform-status" id="gapform-status" role="status">
        Your answers are saved in this browser as you type. Nothing is sent anywhere.
      </p>
    {/if}
  </div>
{/snippet}

{#snippet cpdformTools(withStatus: boolean)}
  <!-- Hidden until `cpdform.js` shows it: without JavaScript these buttons
       would do nothing, and the checklist is still usable on paper. The
       toolbar appears once above the checklist and once below it, so a
       reader never has to scroll back up to export or clear. -->
  <div class="gapform-tools cpdform-tools" hidden>
    <div class="button-row">
      <button type="button" class="button button-secondary cpdform-export-tsv">
        Export TSV
      </button>
      <button type="button" class="button button-secondary cpdform-export-json">
        Export JSON
      </button>
      <button type="button" class="button button-secondary cpdform-clear"> Clear Answers </button>
    </div>
    {#if withStatus}
      <p class="gapform-status" id="cpdform-status" role="status">
        Your ticks are saved in this browser as you go. Nothing is sent anywhere.
      </p>
    {/if}
  </div>
{/snippet}

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="{data.resourceTitle} for the {data.level.title} level of the {data.role
      .title} role in the UK Government Digital and Data Profession Capability Framework."
  />
  {#if isGapformStyle}
    <!-- Saves the reader's answers in their own browser, and exports them. -->
    <script src="/assets/gapform.js" defer></script>
  {:else if data.kind === 'development'}
    <!-- Saves the reader's ticked items in their own browser, and exports
         them — the same idea as `gapform.js`, for a checklist instead of a
         form. -->
    <script src="/assets/cpdform.js" defer></script>
  {/if}
</svelte:head>

<Breadcrumbs
  trail={data.kind === 'startHere'
    ? [
        { href: '/', label: 'Home' },
        { href: '/professions/', label: 'Professions' },
        { href: `/professions/${data.profession.slug}/`, label: data.profession.title },
        { label: data.level.title }
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/professions/', label: 'Professions' },
        { href: `/professions/${data.profession.slug}/`, label: data.profession.title },
        { href: `/${data.slug}/`, label: data.level.title },
        { label: data.resourceTitle }
      ]}
/>

<div class="doc-header">
  <p class="doc-context">{data.role.title} · {data.level.title}</p>
  <h1>{data.heading}</h1>
  {#if isGapformStyle}
    {@render gapformTools(true)}
  {:else if data.kind === 'development'}
    {@render cpdformTools(true)}
  {/if}
</div>

<article class="prose">
  <!-- Rendered from markdown in this repository. -->
  {@html data.html}
</article>

{#if isGapformStyle}
  {@render gapformTools(false)}
{:else if data.kind === 'development'}
  {@render cpdformTools(false)}
{/if}
