import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path';



const copyAssets =  () =>    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, '../../', 'node_modules/@tri/db/erd/*.svg'),
          dest: './',
        },
      ],
    })

export default defineConfig({
	plugins: [sveltekit(), copyAssets()],
	ssr: {
		noExternal: [/^@material\//]
	},
  css: {
    postcss: {}
  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
