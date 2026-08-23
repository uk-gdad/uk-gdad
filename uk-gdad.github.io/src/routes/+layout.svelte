<script lang="ts">
  import { page } from '$app/state';
  import SkipLink from '$lib/lily/SkipLink.svelte';
  import PhaseBanner from '$lib/lily/PhaseBanner.svelte';
  import Tag from '$lib/lily/Tag.svelte';

  let { children } = $props();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/professions/', label: 'Professions' },
    { href: '/roles/', label: 'Roles' },
    { href: '/skills/', label: 'Skills' },
    { href: '/skills-self-assessment/', label: 'Self-assessment' },
    { href: '/about/', label: 'About' }
  ];

  function isCurrent(href: string): boolean {
    return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
  }
</script>

<SkipLink href="#main" label="Skip to main content" />

<header class="site-header">
  <div class="site-header-inner">
    <a class="site-brand" href="/">
      <img class="site-brand-mark" src="/assets/favicon.svg" alt="" aria-hidden="true" />
      <span class="site-brand-text">
        <span class="site-brand-name">UK GDAD</span>
        <span class="site-brand-tagline">Profession Capability Framework</span>
      </span>
    </a>
    <nav class="site-nav" aria-label="Main">
      {#each navLinks as link (link.href)}
        <a href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>
          {link.label}
        </a>
      {/each}
      <a href="https://github.com/uk-gdad/uk-gdad">GitHub</a>
    </nav>
  </div>
</header>

<PhaseBanner class="site-phase-banner">
  <Tag label="Status">Unofficial</Tag>
  <span>
    A community project, not a government service. Content is AI-assisted and human-reviewed —
    check anything that matters against
    <a href="https://ddat-capability-framework.service.gov.uk/">the official framework</a>.
  </span>
</PhaseBanner>

<main id="main" class="site-main">
  {@render children()}
</main>

<footer class="site-footer">
  <div class="site-footer-inner">
    <div>
      <p>
        UK Government Digital and Data (GDAD) Profession Capability Framework (PCF) — an open,
        community-built reference.
      </p>
      <p class="site-footer-fine">
        Source content adapted from the Government Digital and Data Profession Capability Framework,
        available under the Open Government Licence v3.0. Built with the
        <a href="https://lilydesignsystem.com/">Lily Design System™</a>.
      </p>
    </div>
    <div class="site-footer-links">
      <a href="/professions/">Professions</a>
      <a href="/roles/">Roles</a>
      <a href="/skills/">Skills</a>
      <a href="/about/">About</a>
      <a href="https://github.com/uk-gdad/uk-gdad">GitHub</a>
    </div>
  </div>
</footer>
