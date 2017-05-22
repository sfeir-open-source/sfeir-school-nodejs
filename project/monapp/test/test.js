const supertest = require('supertest');
const assert = require('assert');

const app = require('../index.js');

const server = app.getServer();

describe('GET /', () => {
  it('respond with 200 status', (done) => {
    supertest(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('respond "coucou.js"', (done) => {
    supertest(server)
      .get('/')
      .end((err, res) => {
        assert.equal(res.body.message, 'coucou.js');
        done(err);
      });
  });
});

describe('GET /version', () => {
  it('respond with 200 status', (done) => {
    supertest(server)
      .get('/version')
      .expect(200, done);
  });
  it('respond "1.0.0"', (done) => {
    supertest(server)
      .get('/version')
      .end((err, res) => {
        assert.equal(res.text, '1.0.0');
        done(err);
      });
  });
});

// TODO: add test checking that an unknown URL returns a 404 status code
describe('404 error for unknown routes', () => {
  it('respond with 404 status', (done) => {
    supertest(server)
      .get('/yolo')
      .expect(404, done);
  });
});

// TODO: add test checking that an unknown URL returns the text we want
describe('"/" POST name', () => {
  it('respond with good text', (done) => {
    supertest(server)
      .post('/')
      .send({ name: "foo" })
      .end((err, res) => {
        assert.equal(res.text, 'Hello foo !');
        done(err);
      });
  });
});
