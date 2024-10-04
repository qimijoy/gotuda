import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
	plugins: [vue(), svgLoader()],
	base: process.env.NODE_ENV === 'production' ? '/gotuda/' : '/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	build: {
		outDir: './dist/',
		cssCodeSplit: false,
	},
});
