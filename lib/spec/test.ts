import * as chai from 'chai';
import { expect } from 'chai';
import 'mocha';
import * as chaiHttp from 'chai-http';
import { app } from '../src/app';

chai.use(chaiHttp);

describe('Hello function', () => {
  it('should return the correct response', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Hello World!');
          done();
      });
  });
});
