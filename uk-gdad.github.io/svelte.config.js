import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      strict: true
    }),
    prerender: {
      // Source content is authored markdown that sometimes links to headings
      // that live in a sibling document. Demote that check from error to warn
      // so a stale anchor cannot break the whole deploy.
      handleMissingId: 'warn',
      // The self-assessment tool is a vendored static file at
      // static/tools/skills-self-assessment/index.html, linked with a
      // trailing slash like every other URL on this site. GitHub Pages (and
      // any other static host) resolves that to the index.html inside it,
      // but the prerender crawler's own request handling does not — it only
      // matches an exact static-asset pathname, not directory-index
      // resolution — so this one link 404s at build time even though it
      // works once deployed.
      handleHttpError: ({ path, message }) => {
        if (path === '/tools/skills-self-assessment/') return;
        throw new Error(message);
      }
    }
  }
};

export default config;
