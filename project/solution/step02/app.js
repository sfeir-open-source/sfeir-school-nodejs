const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const schools = [];

app.get('/', (req, res) => res.send(schools));

app.post('/', (req, res) => {
  schools.push(req.body);
  res.sendStatus(201);
});

app.listen(3000, () => console.log('App listening on port 3000!'));