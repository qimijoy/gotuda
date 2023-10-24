const globals = require('globals');

const babelParser = require('@babel/eslint-parser');
const eslintConfig = require('@qimijoy/eslint-config/configs/primary');

const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

const vueParser = require('vue-eslint-parser');
const vue = require('eslint-plugin-vue');
const vueConfig = require('@qimijoy/eslint-config/configs/vueConfig');

module.exports = [
	{
		linterOptions: {
			noInlineConfig: true,
			reportUnusedDisableDirectives: true,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
		},
	},
	{
		files: ['**/*.js'],
		ignores: ['**/dist/**'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: babelParser,
			parserOptions: {
				babelOptions: {
					presets: ['@babel/preset-env'],
				},
			},
		},
		rules: {
			...eslintConfig.rules,
		},
	},
	// VUE
	{
		files: ['**/*.vue'],
		ignores: ['**/dist/**'],
		languageOptions: {
			ecmaVersion: 'latest',
			parser: vueParser, // <template>
			parserOptions: {
				parser: babelParser, // <script>
			},
		},
		plugins: { vue },
		rules: {
			...vueConfig.rules,
		},
	},
	// Prettier options (must be last!)
	{
		files: ['**/*.js'],
		ignores: ['**/dist/**'],
		plugins: { prettier },
		rules: {
			...prettierConfig.rules,
			'prettier/prettier': 'error',
			'arrow-body-style': 'off',
			'prefer-arrow-callback': 'off',
		},
	},
];
