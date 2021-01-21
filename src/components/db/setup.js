import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

const production = process.env.APP_ENV === 'production';
const dbUrl = production
	? process.env.ATLAS_URL_PRODUCTION
	: process.env.ATLAS_URL_TEST;
const connect = () => {
	// CONNECTING TO MONGODB ON START
	mongoose.connect(
		dbUrl,
		{
			useNewUrlParser: true,
			retryWrites: false,
			useUnifiedTopology: true,
		},
		(e) => {
			if (e) {
				console.log('e', e);
				process.exit(1);
			} else if (!production) {
				console.log('Database ready to use.', dbUrl);
			} else if (process.env.APP_ENV === 'production') {
				console.log('Database ready to use.');
			}
		},
	);
};

export default connect;
