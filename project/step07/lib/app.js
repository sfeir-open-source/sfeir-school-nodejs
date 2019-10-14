const express = require("express");
const bodyParser = require("body-parser");
const uuidv1 = require("uuid/v1");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = db => {
  app.get("/", (req, res) => {
    db.find({ selector: { type: "school" } })
      .then(function(results) {
        res.send(results.docs);
      })
      .catch(err => {
        console.log("Failed to find schools", err);
        res.sendStatus(500);
      });
  });

  app.post("/", (req, res) => {
    const school = req.body;
    school.type = "school";
    school._id = uuidv1();
    db.put(school)
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(err) {
        console.log("Failed to insert school", school, err);
        res.sendStatus(500);
      });
  });

  return app;
};
