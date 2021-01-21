// Require the dev-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app.js';

const { expect } = chai;

chai.use(chaiHttp);

describe('User', () => {
	it('It should not have error as false', (done) => {
		const url = '/';
		chai.request(app)
			.get(url)
			.end((err, res) => {
				expect(res.body.error).to.be.false;
				expect(res).to.have.status(200);
				done();
			});
	});
});
