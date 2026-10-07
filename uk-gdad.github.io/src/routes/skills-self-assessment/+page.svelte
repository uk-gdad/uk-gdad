<script lang="ts">
  import { onMount } from 'svelte';
  import Breadcrumbs from '#lib/Breadcrumbs.svelte';
  import { SELF_ASSESSMENT_SKILLS, RATING_SCALE } from '#lib/skills-self-assessment.js';

  let { data } = $props();

  const STORE = 'uk-gdad-pcf:skills-self-assessment';
  const SAVED = 'Your ratings are saved in this browser as you go. Nothing is sent anywhere.';

  type Filter = 'all' | 'unrated' | 'rated';

  // A rating is 0–4, or null while a skill has not been rated: "None" is an
  // answer, and not having looked yet is not the same thing.
  let ratings = $state<Record<string, number | null>>(
    Object.fromEntries(SELF_ASSESSMENT_SKILLS.map((skill) => [skill.id, null]))
  );
  let query = $state('');
  let filter = $state<Filter>('all');
  let status = $state(SAVED);
  let ready = $state(false);

  const total = SELF_ASSESSMENT_SKILLS.length;
  const rated = $derived(Object.values(ratings).filter((value) => value !== null).length);
  const counts = $derived(
    RATING_SCALE.map((step) => ({
      ...step,
      count: Object.values(ratings).filter((value) => value === step.value).length
    }))
  );

  // Every word typed has to appear in the skill's name.
  const visible = $derived.by(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return SELF_ASSESSMENT_SKILLS.filter((skill) => {
      if (filter === 'unrated' && ratings[skill.id] !== null) return false;
      if (filter === 'rated' && ratings[skill.id] === null) return false;
      const name = skill.title.toLowerCase();
      return words.every((word) => name.includes(word));
    });
  });

  // Saving and restoring ---------------------------------------------------

  onMount(() => {
    try {
      const saved = window.localStorage.getItem(STORE);
      if (saved) {
        const stored = JSON.parse(saved);
        const answers = stored?.ratings ?? {};
        for (const skill of SELF_ASSESSMENT_SKILLS) {
          const value = answers[skill.id];
          if (Number.isInteger(value) && value >= 0 && value <= 4) ratings[skill.id] = value;
        }
        status = stored?.saved
          ? `Ratings restored from this browser, saved ${new Date(stored.saved).toLocaleString()}.`
          : 'Ratings restored from this browser.';
      }
    } catch {
      // Storage off, or an unreadable copy: start fresh.
    }
    ready = true;
  });

  let warned = false;
  $effect(() => {
    // Read every rating, so any change re-runs this.
    const snapshot = { ...ratings };
    if (!ready) return;
    try {
      window.localStorage.setItem(
        STORE,
        JSON.stringify({ version: 1, saved: new Date().toISOString(), ratings: snapshot })
      );
    } catch {
      if (!warned) {
        warned = true;
        status = 'This browser will not let the page save your ratings. Export before you leave.';
      }
    }
  });

  function rate(id: string, value: number) {
    ratings[id] = value;
  }

  function clearAll() {
    if (!window.confirm('Clear every rating, and delete the copy saved in this browser?')) return;
    for (const skill of SELF_ASSESSMENT_SKILLS) ratings[skill.id] = null;
    try {
      window.localStorage.removeItem(STORE);
    } catch {
      // Nothing was stored in the first place.
    }
    status = 'Ratings cleared.';
  }

  // Exporting --------------------------------------------------------------

  function save(text: string, type: string, name: string) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([text], { type: `${type};charset=utf-8` }));
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }

  // Tabs and newlines are what would break a TSV, so they are escaped and the
  // escaping backslash first, which keeps the round trip exact.
  const cell = (value: string) =>
    value.replace(/\\/g, '\\\\').replace(/\t/g, '\\t').replace(/\r/g, '\\r').replace(/\n/g, '\\n');

  function exportTsv() {
    const headings = ['Form', 'URL', 'Exported', ...SELF_ASSESSMENT_SKILLS.map((s) => s.id)];
    const values = [
      'Skills self-assessment',
      window.location.href,
      new Date().toISOString(),
      ...SELF_ASSESSMENT_SKILLS.map((s) => (ratings[s.id] === null ? '' : String(ratings[s.id])))
    ];
    const tsv = `${headings.map(cell).join('\t')}\n${values.map(cell).join('\t')}\n`;
    save(tsv, 'text/tab-separated-values', 'skills-self-assessment.tsv');
    status = 'Exported as TSV: one row of skill names, one row of ratings. Unrated skills are blank.';
  }

  function exportJson() {
    const record = {
      form: 'Skills self-assessment',
      url: window.location.href,
      exported: new Date().toISOString(),
      scale: Object.fromEntries(RATING_SCALE.map((step) => [step.value, step.label])),
      ratings: Object.fromEntries(SELF_ASSESSMENT_SKILLS.map((s) => [s.id, ratings[s.id]]))
    };
    save(`${JSON.stringify(record, null, 2)}\n`, 'application/json', 'skills-self-assessment.json');
    status = 'Exported as JSON.';
  }
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="Rate yourself against the skills in the UK Government Digital and Data Profession Capability Framework, then download your ratings as a spreadsheet file."
  />
</svelte:head>

<Breadcrumbs trail={[{ href: '/', label: 'Home' }, { label: 'Skills self-assessment' }]} />

<div class="hero">
  <h1>Skills self-assessment</h1>
  <p class="hero-lede">
    Rate yourself against the framework's {total} skills, see where you sit today, and decide what to
    work on next. It is for you: not a management tool, not a performance record, and not evidence for
    a promotion board.
  </p>
</div>

<section class="sa-scale" aria-labelledby="sa-scale-heading">
  <h2 id="sa-scale-heading">The rating scale</h2>
  <ol class="sa-scale-list">
    {#each RATING_SCALE as step (step.value)}
      <li>
        <span class="sa-scale-value" aria-hidden="true">{step.value}</span>
        <span><strong>{step.label}.</strong> {step.meaning}.</span>
      </li>
    {/each}
  </ol>
  <p class="sa-note">
    Rate what you do now, not what you could learn quickly. A 0 or a 1 is a normal answer, and the
    most useful ones are often "I could do this and nobody has asked me to".
  </p>
</section>

<section class="sa-sticky" aria-label="Your progress">
  <div class="sa-progress">
    <p class="sa-progress-text" aria-live="polite">
      <strong>{rated}</strong> of {total} rated
    </p>
    <progress max={total} value={rated} aria-label="Skills rated"></progress>
  </div>
  <div class="button-row sa-actions">
    <button type="button" class="button" onclick={exportTsv} disabled={rated === 0}>
      Download TSV
    </button>
    <button type="button" class="button button-secondary" onclick={exportJson} disabled={rated === 0}>
      Download JSON
    </button>
    <button type="button" class="button button-secondary" onclick={clearAll} disabled={rated === 0}>
      Clear ratings
    </button>
  </div>
  <p class="gapform-status" role="status">{status}</p>
</section>

{#if rated > 0}
  <section class="sa-summary" aria-label="Your ratings so far">
    <h2>So far</h2>
    <ul class="sa-summary-list">
      {#each counts as step (step.value)}
        <li>
          <span class="sa-summary-count">{step.count}</span>
          <span class="sa-summary-label">{step.value} · {step.label}</span>
        </li>
      {/each}
      <li>
        <span class="sa-summary-count">{total - rated}</span>
        <span class="sa-summary-label">Not yet rated</span>
      </li>
    </ul>
  </section>
{/if}

<div class="sa-filters">
  <div class="finder-form">
    <label class="finder-label" for="sa-search">Find a skill</label>
    <input
      class="finder-input"
      id="sa-search"
      type="search"
      autocomplete="off"
      placeholder="For example: security"
      bind:value={query}
    />
  </div>
  <fieldset class="sa-filter-group">
    <legend>Show</legend>
    {#each [['all', 'All'], ['unrated', 'Not yet rated'], ['rated', 'Rated']] as [value, label] (value)}
      <label class="sa-filter">
        <input type="radio" name="sa-filter" {value} bind:group={filter} />
        <span>{label}</span>
      </label>
    {/each}
  </fieldset>
</div>

<p class="finder-count" aria-live="polite">Showing {visible.length} of {total} skills</p>

{#if visible.length}
  <ul class="sa-skills">
    {#each visible as skill (skill.id)}
      <li class="sa-skill" class:sa-skill-rated={ratings[skill.id] !== null}>
        <fieldset>
          <legend>
            {#if data.pages[skill.title]}
              <a href="/skills/{data.pages[skill.title]}/">{skill.title}</a>
            {:else}
              {skill.title}
            {/if}
          </legend>
          <div class="sa-choices">
            {#each RATING_SCALE as step (step.value)}
              <label class="sa-choice" title={`${step.label}: ${step.meaning}`}>
                <input
                  type="radio"
                  name={skill.id}
                  value={step.value}
                  checked={ratings[skill.id] === step.value}
                  onchange={() => rate(skill.id, step.value)}
                />
                <span class="sa-choice-box">
                  <span class="sa-choice-value">{step.value}</span>
                  <span class="sa-choice-label">{step.label}</span>
                </span>
              </label>
            {/each}
          </div>
        </fieldset>
      </li>
    {/each}
  </ul>
{:else}
  <div class="finder-empty">
    <p>No skill matches <strong>{query}</strong> with this filter.</p>
    <p>Try a shorter search, or show all skills.</p>
  </div>
{/if}

<section class="prose sa-after">
  <h2>What to do with your ratings</h2>
  <ol>
    <li>
      <a href="/roles/">Find your role level</a> and read which of these skills it expects.
    </li>
    <li>Pick the two or three gaps that matter most for the work in front of you.</li>
    <li>
      Turn each gap into a plan with the upskilling resources and development checklist for your
      level.
    </li>
  </ol>
  <h2>Where your ratings go</h2>
  <p>
    This page runs entirely in your browser. Your ratings are saved in this browser as you go, so you
    can close the tab and come back, and nothing is sent anywhere or stored on a server. Download the
    TSV to keep a copy: it has one row of skill names and one row of ratings, and opens in any
    spreadsheet program or in Python, R, or Julia. Skills you have not rated are left blank.
  </p>
  <p>
    The list is the {total} skills in the framework's catalogue and this site's role summaries. A
    skill's name links to the skills page where this site has one.
  </p>
</section>
