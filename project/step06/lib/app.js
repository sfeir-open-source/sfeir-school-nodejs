const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = db => {
  const collection = db.collection("schools");

  app.get("/", (req, res) => {
    collection.find({}).toArray(function(err, schools) {
      if (err) {
        console.log("Failed to find schools", err);
        res.sendStatus(500);
      } else {
        res.send(schools);
      }
    });
  });

  app.post("/", (req, res) => {
    const school = req.body;

    collection.insertOne(school, function(err) {
      if (err) {
        console.log("Failed to insert school", school, err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  });

  return app;
};
