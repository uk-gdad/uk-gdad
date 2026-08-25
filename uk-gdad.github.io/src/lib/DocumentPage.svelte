<script lang="ts">
  // One markdown document for one role level, with breadcrumbs, the sibling
  // document links, and an on-page contents list built from its headings.
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import Contents from '$lib/Contents.svelte';
  import ResourceNav from '$lib/ResourceNav.svelte';
  import InsetText from '$lib/lily/InsetText.svelte';
  import type { ResourceKind, TocEntry } from '$lib/types';

  type DocumentData = {
    kind: ResourceKind;
    slug: string;
    resourceTitle: string;
    title: string;
    html: string;
    toc: TocEntry[];
    profession: { slug: string; title: string };
    role: { title: string };
    level: { title: string; has: Record<ResourceKind, boolean> };
  };

  let { data }: { data: DocumentData } = $props();
</script>

<svelte:head>
  <title>{data.title} — {data.level.title} — UK GDAD PCF</title>
  <meta
    name="description"
    content="{data.resourceTitle} for the {data.level.title} level of the {data.role
      .title} role in the UK Government Digital and Data Profession Capability Framework."
  />
  {#if data.kind === 'gapform'}
    <!-- Saves the reader's answers in their own browser, and exports them.
         The only script on a content page, and only on this one kind. -->
    <script src="/assets/gapform.js" defer></script>
  {/if}
</svelte:head>

<Breadcrumbs
  trail={[
    { href: '/', label: 'Home' },
    { href: '/professions/', label: 'Professions' },
    { href: `/professions/${data.profession.slug}/`, label: data.profession.title },
    { href: `/roles/${data.slug}/`, label: data.level.title },
    { label: data.resourceTitle }
  ]}
/>

<div class="doc-header">
  <p class="doc-context">{data.role.title} · {data.level.title}</p>
  <h1>{data.title}</h1>
  <ResourceNav slug={data.slug} current={data.kind} has={data.level.has} />
  {#if data.kind === 'gapform'}
    <!-- Hidden until `gapform.js` shows it: without JavaScript these buttons
         would do nothing, and the form is still usable on paper. -->
    <div id="gapform-tools" class="gapform-tools" hidden>
      <div class="button-row">
        <button type="button" class="button button-secondary" id="gapform-export-tsv">
          Export TSV
        </button>
        <button type="button" class="button button-secondary" id="gapform-export-json">
          Export as JSON
        </button>
        <button type="button" class="button button-secondary" id="gapform-clear">
          Clear answers
        </button>
      </div>
      <p class="gapform-status" id="gapform-status" role="status">
        Your answers are saved in this browser as you type. Nothing is sent anywhere.
      </p>
    </div>
  {/if}
</div>

<div class="layout-with-aside layout-contents-first">
  <article class="prose">
    <!-- Rendered from markdown in this repository. -->
    {@html data.html}
  </article>
  <aside class="layout-aside">
    <Contents toc={data.toc} />
    <InsetText>
      Written with AI assistance and human review. Treat it as a starting point, not as policy.
    </InsetText>
  </aside>
</div>
