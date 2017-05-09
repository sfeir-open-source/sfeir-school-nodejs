const request = require('supertest');

const app = require('../index');

describe('GET /api/peoples', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/api/peoples')
      .set('Accept', 'application/json')
      .expect(200)
      .end(err => done(err));
  });
});
