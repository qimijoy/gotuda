const globals = require('globals');

const babelParser = require('@babel/eslint-parser');
const js = require('@eslint/js');

const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

const vueParser = require('vue-eslint-parser');
const vue = require('eslint-plugin-vue');

const myESlintConfig = require('@qimijoy/eslint-config/configs/primary');

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
		ignores: ['**/dist/**/*'],
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
			...js.configs.recommended.rules,
			...myESlintConfig.rules,
		},
	},
	// VUE
	{
		files: ['**/*.vue'],
		languageOptions: {
			ecmaVersion: 'latest',
			parser: vueParser,
			parserOptions: {
				parser: babelParser,
			},
		},
		plugins: { vue },
		rules: {
			...vue.configs.essential.rules,
			'vue/no-multiple-template-root': 'off',
		},
	},
	// Prettier options (must be last!)
	{
		files: ['**/*.js'],
		plugins: { prettier },
		rules: {
			...prettierConfig.rules,
			'prettier/prettier': 'error',
			'arrow-body-style': 'off',
			'prefer-arrow-callback': 'off',
		},
	},
];
