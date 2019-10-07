const express = require("express");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else res.sendStatus(401);
}

const doGet = collection => (req, res) => {
  collection.find({}).toArray(function(err, docs) {
    if (err) {
      console.log("Failed to find schools", err);
      res.sendStatus(500);
    } else {
      res.send(docs);
    }
  });
};

const doPost = collection => (req, res) => {
  const school = req.body;

  collection.insertOne(school, function(err) {
    if (err) {
      console.log("Failed to insert school", school, err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
};

module.exports = db => {
  const router = express.Router();
  const collection = db.collection("schools");

  router.get("/", doGet(collection));
  router.post("/", ensureAuthenticated, doPost(collection));

  return router;
};
