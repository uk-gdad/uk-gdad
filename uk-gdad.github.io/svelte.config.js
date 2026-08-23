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
      handleMissingId: 'warn'
    }
  }
};

export default config;
