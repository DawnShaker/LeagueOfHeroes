import { defineConfig } from 'astro/config';
import legacy from '@vitejs/plugin-legacy';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [
			legacy({
				targets: ['defaults', 'not IE 11'],
			}),
		],
	},
});
