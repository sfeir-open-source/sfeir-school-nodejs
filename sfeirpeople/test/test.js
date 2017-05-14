const assert = require('assert');
const request = require('supertest');

const app = require('../index');

describe('/api/peoples', () => {
  it('should get the list of people', (done) => {
    request(app)
      .get('/api/peoples')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        assert.equal(res.body.length, 10);
        done(err);
      });
  });

  it('should get a random person', (done) => {
    request(app)
      .get('/api/peoples/random')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err1, res1) => {
        request(app)
          .get('/api/peoples/random')
          .set('Accept', 'application/json')
          .expect(200)
          .end((err2, res2) => {
            assert.notEqual(res1.body.id, res2.body.id);
            done(err1 || err2);
          });
      });
  });

  it('should get a specific person', (done) => {
    request(app)
      .get('/api/peoples/5763cd4d9d2a4f259b53c901')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        assert.equal(res.body.id, '5763cd4d9d2a4f259b53c901');
        assert.equal(res.body.firstname, 'Leanne');
        assert.equal(res.body.lastname, 'Woodard');
        done(err);
      });
  });

  it('should fail when get a specific person that does not exist', (done) => {
    request(app)
      .get('/api/peoples/123')
      .set('Accept', 'application/json')
      .expect(404)
      .end((err, res) => {
        assert.equal(res.body.error, `La personne avec l'id "123" n'existe pas.`);
        done(err);
      });
  });
});

// router.get('/name/:name', api.filterByName);
// router.get('/skill/:skill', api.filterBySkill);
// router.post('/', api.create);
// router.put('/:id', api.update);
// router.delete('/:id', api.delete);
