module.exports = {
	plugins: {
		autoprefixer: {},
		doiuse: {
			onFeatureUsage(usageInfo) {
				console.log(usageInfo.message);
			},
		},
		cssnano: {
			preset: 'default',
		},
	},
};
