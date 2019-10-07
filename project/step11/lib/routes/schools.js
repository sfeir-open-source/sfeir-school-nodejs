const express = require("express");

const log = require("../logger")();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    const err = new Error("Not authenticated");
    err.statusCode = 401;
    next(err);
  }
}

const doGet = collection => (req, res) => {
  collection.find({}).toArray(function(err, schools) {
    if (err) {
      log.error({ err }, "Failed to find schools");
      err.statusCode = 500;
      next(err);
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
      err.statusCode = 500;
      next(err);
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
