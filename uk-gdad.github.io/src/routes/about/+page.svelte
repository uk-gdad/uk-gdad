<script lang="ts">
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import WarningCallout from '$lib/lily/WarningCallout.svelte';
</script>

<svelte:head>
  <title>About — UK GDAD PCF</title>
  <meta
    name="description"
    content="What this site is, where its content comes from, and how it is built."
  />
</svelte:head>

<Breadcrumbs trail={[{ href: '/', label: 'Home' }, { label: 'About' }]} />

<div class="hero">
  <h1>About this site</h1>
  <p class="hero-lede">
    An open, community-built companion to the UK Government Digital and Data (GDAD) Profession
    Capability Framework (PCF).
  </p>
</div>

<div class="prose">
  <WarningCallout>
    <p>
      This is not a government service. It is an independent project, and its added material is
      written with AI assistance and human review. For anything that carries weight — pay, grading,
      recruitment, promotion — use
      <a href="https://ddat-capability-framework.service.gov.uk/">the official framework</a>
      and talk to your organisation.
    </p>
  </WarningCallout>

  <h2>What is here</h2>
  <p>Every role level in the framework gets up to five documents:</p>
  <ul>
    <li>
      <strong>Role summary</strong> — the role, the level, and the skills the framework names,
      adapted from the official framework.
    </li>
    <li>
      <strong>Upskilling resources</strong> — courses, blog posts, research, videos and books,
      gathered by AI search and then checked by a human.
    </li>
    <li>
      <strong>Continuing professional development</strong> — a checklist for planning, doing and
      recording development, with a section specific to the role level.
    </li>
    <li>
      <strong>Assessment</strong> — cognitive, numeric reasoning, verbal reasoning and situational
      judgement practice written for the role level.
    </li>
    <li>
      <strong>Skills gap form</strong> — a form an employee reads and fills in, covering the skills
      and skill levels the framework names for the role level.
    </li>
  </ul>

  <h2>Where the content comes from</h2>
  <p>
    Role summaries are adapted from the Government Digital and Data Profession Capability Framework,
    published under the
    <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
      Open Government Licence v3.0
    </a>. The upskilling, development, assessment and skills gap form material is written for this
    project, and is offered under the same licence. Attribution is required wherever any of it is
    republished.
  </p>

  <h2>How it is built</h2>
  <ul>
    <li>Content is markdown in the project repository, one file per role level.</li>
    <li>
      The site is <a href="https://svelte.dev/docs/kit">SvelteKit</a> with
      <code>adapter-static</code>: every page is prerendered to plain HTML at build time.
    </li>
    <li>
      The interface uses the <a href="https://lilydesignsystem.com/">Lily Design System™</a> —
      headless Svelte components and Lily class names, styled for government digital services.
    </li>
    <li>GitHub Actions builds and deploys to GitHub Pages on every push to <code>main</code>.</li>
  </ul>

  <h2>Contributing</h2>
  <p>
    Corrections are welcome — a wrong link or a stale role level is worth an issue or a pull request
    at <a href="https://github.com/uk-gdad/uk-gdad">github.com/uk-gdad/uk-gdad</a>.
  </p>
</div>
