const router = require('express').Router();

const api = require('./api');
const {getCol} = require('./db');

router.get('/', function(req, res, next) {
  console.log('ERROR !');
  next(new Error('LE FAIL'));
}, (req, res, next) => {
  console.log(req);
  getCol().find().toArray((err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end();
    } else {
      res.statusCode = 200;
      res.json(data);
    }
  })
});

router.get('/name/:name', (req, res, next) => {
  const name = req.params.name;
  const query = {$or:[
    {"firstname": name},
    {"lastname": name}
  ]};

  console.log(query);
  getCol().find(query).toArray((err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end();
    } else {
      res.statusCode = 200;
      res.json(data);
    }
  });
});

router.get('/random', api.getRandom);
router.get('/:id', api.get);
router.get('/skill/:skill', api.filterBySkill);
router.post('/', api.create);
router.put('/:id', api.update);
router.delete('/:id', api.delete);

module.exports = router;
