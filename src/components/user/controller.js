const app = require('../../../package.json');

const getStarted = () => {
	return {
		error: false,
		message: `Congratulations! We were able to fetch your app data.`,
		payload: {
			app,
		},
	};
};

module.exports = { getStarted };
