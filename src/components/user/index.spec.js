// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const {expect} = require('chai');
const app = require('../../../app');

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
