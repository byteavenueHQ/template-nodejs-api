module.exports = {
	linters: {
		'**/*.+(js|md|ts|sass|less|graphql|scss|json|vue)': [
			'eslint --fix',
			'prettier --write',
			'jest --findRelatedTests',
		],
	},
};
