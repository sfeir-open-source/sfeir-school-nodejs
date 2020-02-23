const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO : use the pouchDB instance to get and store schools (use selector: https://pouchdb.com/api.html#query_index)
const schools = [];

// TODO : use the find method from the db instance to retrieve all stored schools.
app.get("/", (req, res) => res.send(schools));

// TODO : use the put method from the db instance to store a school.
// Find a way to provide an unique id. Add a "type" field so you can retrieve all schools.
app.post("/", (req, res) => {
  schools.push(req.body);
  res.sendStatus(201);
});

// TODO : find a way to use the db instance
module.exports = app;
