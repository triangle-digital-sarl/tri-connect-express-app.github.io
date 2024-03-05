import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineMDSveXConfig, mdsvex } from 'mdsvex';

const mdsvexOptions = defineMDSveXConfig({
	extensions: ['.svx', '.md', '.mdx'],
	remarkPlugins: []
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md', '.mdx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		prerender: {
			handleMissingId: 'ignore'
		},
		adapter: adapter({
			fallback: 'index.html',
			precompress: false,
			strict: true
		})
	}
};

export default config;
