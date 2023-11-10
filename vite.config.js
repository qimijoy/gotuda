import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
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
		rollupOptions: {
			output: {
				entryFileNames: 'assets/goTuda--bundle.js',
				assetFileNames: 'assets/[name].[ext]',
			},
		},
	},
});
