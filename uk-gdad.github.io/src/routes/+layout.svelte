<script lang="ts">
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { SkipLink, PhaseBanner, Tag } from '@lilydesignsystem/svelte-headless';
  import { themeName } from '@lilydesignsystem/svelte-theme-picker';
  import { sizeName } from '@lilydesignsystem/svelte-text-size-picker';
  import type { ShareTarget } from '@lilydesignsystem/svelte-share-picker';
  import PickerBar from '@lilydesignsystem/svelte-picker-bar';

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
  // LinkedIn, Reddit and the mailto link take the URL and the title as
  // separate parameters. Mastodon and Bluesky take one combined "text"
  // parameter instead — there is no separate title field in either intent.
  const shareTargets: ShareTarget[] = [
    {
      id: 'email',
      label: 'Email link',
      href: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
      newTab: false
    },
    {
      id: 'linkedin',
      label: 'Share on LinkedIn',
      href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      id: 'reddit',
      label: 'Share on Reddit',
      href: (url, title) =>
        `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    },
    {
      id: 'bluesky',
      label: 'Share on Bluesky',
      href: (url, title) =>
        `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title}\n${url}`)}`
    },
    {
      id: 'mastodon',
      // mastodonshare.com asks the visitor which instance they're on and
      // redirects there. There is no single "mastodon.com" to link to
      // directly — the network is federated — and this widget takes the
      // title and URL as separate parameters rather than one combined string.
      label: 'Share on Mastodon',
      href: (url, title) =>
        `https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    }
  ];

  const pickerLabels = {
    search: 'Search this site',
    searchInput: 'Search terms',
    searchSubmit: 'Search',
    theme: 'Choose colour theme',
    locale: 'Choose language',
    textSize: 'Choose text size',
    share: 'Share this page'
  };

  // The picker offers the languages of the United Kingdom this site is
  // planned for, in priority order, each named in itself. Only en-gb has
  // content so far; choosing another sets `lang` on <html> and is remembered,
  // but the pages stay English until they are translated — see
  // uk-gdad.github.io/spec/index.md § Site tools.
  const locales = ['en-gb', 'cy-gb', 'gd-gb', 'ga-gb'];
  const localeLabels = {
    'en-gb': 'English',
    'cy-gb': 'Cymraeg',
    'gd-gb': 'Gàidhlig',
    'ga-gb': 'Gaeilge'
  };

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
    <PickerBar
      class="site-tools"
      labels={pickerLabels}
      searchProps={{ action: '/search/', navigate: (href: string) => goto(href) }}
      themesUrl="/assets/themes/"
      themeProps={{
        storageKey: 'uk-gdad-pcf:theme',
        // Not detectFromSystem: Lily's own "light"/"dark" reference themes
        // are generic DaisyUI palettes (a purple/pink primary and
        // secondary), not GOV.UK's blue — matchSystemTheme would pick one
        // of those two ahead of defaultValue for most visitors. This site's
        // own identity is the GDS theme; a reader who wants OS-linked light
        // or dark, or any of the other 43, can still pick one explicitly.
        defaultValue: 'united-kingdom-government-digital-service',
        onChange: (theme: string) => (themeStatus = `Colour theme: ${themeName(theme)}`)
      }}
      {locales}
      localeProps={{ localeLabels, defaultValue: 'en-gb', storageKey: 'uk-gdad-pcf:locale' }}
      sizes={['small', 'medium', 'large', 'x-large']}
      textSizeProps={{
        defaultValue: 'medium',
        storageKey: 'uk-gdad-pcf:text-size',
        onChange: (size: string) => (sizeStatus = `Text size: ${sizeName(size)}`)
      }}
      shareTargets={shareTargets}
      shareProps={{
        title: shareTitle,
        copyLabel: 'Copy link',
        copiedLabel: 'Link copied to your clipboard',
        copyFailedLabel: 'Could not copy the link'
      }}
    />
    <p class="theme-picker-status visually-hidden" aria-live="polite">{themeStatus}</p>
    <p class="text-size-picker-status visually-hidden" aria-live="polite">{sizeStatus}</p>
  </div>
</header>

<PhaseBanner class="site-phase-banner">
  <Tag label="Status">Unofficial</Tag>
  <span>
    A community project, not a government service. See
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
