<script lang="ts">
  import BreadcrumbNav from '$lib/lily/BreadcrumbNav.svelte';
  import BreadcrumbList from '$lib/lily/BreadcrumbList.svelte';
  import BreadcrumbListItem from '$lib/lily/BreadcrumbListItem.svelte';

  type Crumb = { href?: string; label: string };
  let { trail }: { trail: Crumb[] } = $props();
</script>

<BreadcrumbNav label="Breadcrumb">
  <BreadcrumbList>
    {#each trail as crumb}
      <BreadcrumbListItem current={!crumb.href}>
        {#if crumb.href}<a href={crumb.href}>{crumb.label}</a>{:else}{crumb.label}{/if}
      </BreadcrumbListItem>
    {/each}
  </BreadcrumbList>
</BreadcrumbNav>
