<script lang="ts">
  import Breadcrumbs from '$lib/Breadcrumbs.svelte';
  import WarningCallout from '$lib/lily/WarningCallout.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Rate yourself against the skills in the UK Government Digital and Data Profession Capability Framework."
  />
</svelte:head>

<Breadcrumbs trail={[{ href: '/', label: 'Home' }, { label: 'Skills self-assessment' }]} />

<div class="hero">
  <h1>Skills self-assessment</h1>
  <p class="hero-lede">
    Rate yourself against the framework's skills, see where you sit today, and decide what to work on
    next.
  </p>
  <div class="button-row">
    <a class="button" href="/tools/skills-self-assessment.html">Open the self-assessment</a>
  </div>
</div>

<div class="prose">
  <h2>How to use it</h2>
  <ol>
    <li>Open your role level and read the skills the framework expects there.</li>
    <li>Score yourself honestly against each one — awareness, working, practitioner, expert.</li>
    <li>Pick the two or three gaps that matter most for the work in front of you.</li>
    <li>Turn each gap into a plan with the upskilling resources and development checklist.</li>
  </ol>

  <h2>Rating scale</h2>
  <p>One slider per skill, 0 to 4:</p>
  <ul>
    <li><strong>0 — None.</strong> You have not worked with this.</li>
    <li><strong>1 — Awareness.</strong> You know what it is and why it matters.</li>
    <li><strong>2 — Working.</strong> You do it with support.</li>
    <li><strong>3 — Practitioner.</strong> You do it unsupported, and handle the usual exceptions.</li>
    <li><strong>4 — Expert.</strong> You set the approach and develop others in it.</li>
  </ul>

  <WarningCallout>
    <p>
      The self-assessment runs entirely in your browser. Nothing you enter is sent anywhere or
      stored on a server — which also means nothing is kept when you close the tab.
    </p>
    <p>
      Use the <strong>Download</strong> button at the bottom of the tool to keep your result. It
      writes <code>skills.tsv</code>, which opens in any spreadsheet program.
    </p>
  </WarningCallout>

  <h2>Where to go next</h2>
  <ul>
    <li><a href="/roles/">Find your role level</a> and read its skills.</li>
    <li><a href="/skills/">Browse skills</a> to see how one skill grows across levels.</li>
  </ul>
</div>
