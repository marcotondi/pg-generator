import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { getVersion } from './scripts/version.mjs';

export default defineConfig({
	define: { __APP_VERSION__: JSON.stringify(getVersion()) },
	plugins: [
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				precompress: false,
				strict: true
			})
		})
	]
});
