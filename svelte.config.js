import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	preprocess: vitePreprocess(),
	onwarn: (warning, handler) => {
		// suppress warnings on `vite dev` and `vite build`;
		// suppress svelte.preprocess warning about combining so many Bootstrap scss files
		if (warning.code.includes('a11y')) return;
		handler(warning);
	}
};
export default config;
