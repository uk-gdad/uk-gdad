<script lang="ts">
  import ContentsNav from '$lib/lily/ContentsNav.svelte';
  import ContentsList from '$lib/lily/ContentsList.svelte';
  import ContentsListItem from '$lib/lily/ContentsListItem.svelte';
  import type { TocEntry } from '$lib/types';

  let { toc }: { toc: TocEntry[] } = $props();
</script>

{#if toc.length > 1}
  <ContentsNav label="Contents">
    <h2>Contents</h2>
    <ContentsList>
      {#each toc as entry (entry.id)}
        <ContentsListItem class={entry.depth === 3 ? 'is-nested' : ''}>
          <a href="#{entry.id}">{entry.text}</a>
        </ContentsListItem>
      {/each}
    </ContentsList>
  </ContentsNav>
{/if}
