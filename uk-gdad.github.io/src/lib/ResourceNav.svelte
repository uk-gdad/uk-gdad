<script lang="ts">
  // The documents published for a role level. Kinds with no document for
  // this level stay in place, greyed out, so the gap is visible rather than
  // silently missing.
  import { RESOURCES, type ResourceKind } from '$lib/types';

  let {
    slug,
    current,
    has
  }: {
    slug: string;
    current: ResourceKind;
    has: Record<ResourceKind, boolean>;
  } = $props();
</script>

<nav aria-label="Documents for this role level">
  <ul class="resource-nav">
    {#each RESOURCES as resource (resource.kind)}
      <li>
        {#if resource.kind === current}
          <span aria-current="page">{resource.short}</span>
        {:else if has[resource.kind]}
          <a href="{resource.base}/{slug}/">{resource.short}</a>
        {:else}
          <span>{resource.short} — none yet</span>
        {/if}
      </li>
    {/each}
  </ul>
</nav>
