import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { fileURLToPath, URL } from 'node:url';

import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), svgLoader()],
	base: process.env.BASE_URL,
	server: {
		port: 3000,
	},
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
