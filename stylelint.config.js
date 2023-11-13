const primaryRules = require('@qimijoy/stylelint-config/configs/primary');

module.exports = {
	ignoreFiles: ['**/node_modules/**', '**/dist/**'],

	plugins: [
		'stylelint-prettier',
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-order',
		'stylelint-no-unsupported-browser-features',
	],

	defaultSeverity: 'error',

	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	configurationComment: 'stylelint', // --> /* stylelint-disable */
	ignoreDisables: true,

	overrides: [
		{
			files: ['**/*.html'],
			customSyntax: 'postcss-html',
		},
		{
			files: ['**/*.less'],
			customSyntax: 'postcss-less',
		},
		{
			files: ['**/*.vue'],
			extends: ['stylelint-config-standard-vue'],
		},
	],

	rules: {
		...primaryRules.rules,
	},
};
