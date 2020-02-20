// TODO : move the content of this file to the lib directory and export the express application
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const schools = [];

// TOD0 : unit test GET and POST methods in a separate file
app.get('/', (req, res) => res.send(schools));

app.post('/', (req, res) => {
  schools.push(req.body);
  res.sendStatus(201);
});

// TODO : move this line to index.js. The express application should be imported
app.listen(3000, () => console.log('App listening on port 3000!'));