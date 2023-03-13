const express = require("express");
const { v1: uuidv1 } = require("uuid");
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

const doGet = db => (req, res, next) => {
  db.find({ selector: { type: "school" } })
    .then(function(results) {
      log.info("Found schools", results);
      res.send(results.docs);
    })
    .catch(err => {
      log.error("Failed to find schools", err);
      err.statusCode = 500;
      next(err);
    });
};

const doPost = db => (req, res, next) => {
  const school = req.body;
  school.type = "school";
  school._id = uuidv1();
  db.put(school)
    .then(() => {
      log.info("Save successful", school);
      res.sendStatus(201);
    })
    .catch(err => {
      log.error("Failed to insert school", error, school);
      err.statusCode = 500;
      next(err);
    });
};

module.exports = db => {
  const router = express.Router();

  router.get("/", doGet(db));
  router.post("/", ensureAuthenticated, doPost(db));

  return router;
};
