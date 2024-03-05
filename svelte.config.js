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
		// paths: {
		// 	base: process.env.NODE_ENV === 'production' ? '/tri-connect-express-app.github.io' : ''
		// },
		prerender: {
			handleMissingId: 'ignore'
		},
		adapter: adapter({
			precompress: true,
			strict: true
		})
	}
};

export default config;
