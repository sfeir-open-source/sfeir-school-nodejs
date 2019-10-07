const express = require("express");

const log = require("../logger")();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else res.sendStatus(401);
}

const doGet = collection => (req, res) => {
  collection.find({}).toArray(function(err, schools) {
    if (err) {
      log.error({ err }, "Failed to find schools");
      res.sendStatus(500);
    } else {
      log.info({ schools }, "Found schools");
      res.send(schools);
    }
  });
};

const doPost = collection => (req, res) => {
  const school = req.body;

  collection.insertOne(school, function(err) {
    if (err) {
      log.error({ err, school }, "Failed to insert school");
      res.sendStatus(500);
    } else {
      log.info({ school }, "Save successful");
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
