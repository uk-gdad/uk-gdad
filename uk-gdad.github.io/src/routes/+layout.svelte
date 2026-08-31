<script lang="ts">
  import { page } from '$app/state';
  import SkipLink from '$lib/lily/SkipLink.svelte';
  import PhaseBanner from '$lib/lily/PhaseBanner.svelte';
  import Tag from '$lib/lily/Tag.svelte';
  import ThemePicker, { themeName } from '$lib/lily-helpers/ThemePicker.svelte';
  import TextSizePicker, { sizeName } from '$lib/lily-helpers/TextSizePicker.svelte';
  import SharePicker, { type ShareTarget } from '$lib/lily-helpers/SharePicker.svelte';

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

  // href is a function per §3 of SharePicker's contract: this site owns the
  // destination URLs, the component ships none of its own.
  //
  // LinkedIn and Reddit take the URL and the title as separate parameters.
  // Mastodon and Bluesky take one combined "text" parameter instead — there
  // is no separate title field in either intent — so both get the same
  // "title, then a line break, then the URL" composition.
  const shareTargets: ShareTarget[] = [
    {
      id: 'linkedin',
      label: 'Share on LinkedIn',
      href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      id: 'mastodon',
      // The official cross-instance widget: it asks the visitor which
      // instance they're on and redirects there. There is no single
      // "mastodon.com" to link to directly — the network is federated.
      label: 'Share on Mastodon',
      href: (url, title) =>
        `https://share.joinmastodon.org/#text=${encodeURIComponent(`${title}\n${url}`)}`
    },
    {
      id: 'bluesky',
      label: 'Share on Bluesky',
      href: (url, title) =>
        `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title}\n${url}`)}`
    },
    {
      id: 'reddit',
      label: 'Share on Reddit',
      href: (url, title) =>
        `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    }
  ];

  let themeStatus = $state('');
  let sizeStatus = $state('');

  // page.data.title convention: every route's load function sets `title` to
  // its full <title> text (see e.g. src/routes/+page.server.ts), so the
  // layout never has to know each page's own shape to share it correctly.
  const shareTitle = $derived(page.data.title ?? 'UK GDAD PCF');
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
    <div class="site-tools">
      <ThemePicker
        label="Choose colour theme"
        themesUrl="/assets/themes/"
        themes={['light', 'dark']}
        storageKey="uk-gdad-pcf:theme"
        detectFromSystem
        onChange={(theme) => (themeStatus = `Colour theme: ${themeName(theme)}`)}
      />
      <TextSizePicker
        label="Choose text size"
        sizes={['small', 'medium', 'large', 'x-large']}
        storageKey="uk-gdad-pcf:text-size"
        onChange={(size) => (sizeStatus = `Text size: ${sizeName(size)}`)}
      />
      <SharePicker
        label="Share this page"
        targets={shareTargets}
        title={shareTitle}
        copyLabel="Copy link"
        copiedLabel="Link copied to your clipboard"
        copyFailedLabel="Could not copy the link"
      />
    </div>
    <p class="theme-picker-status visually-hidden" aria-live="polite">{themeStatus}</p>
    <p class="text-size-picker-status visually-hidden" aria-live="polite">{sizeStatus}</p>
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
