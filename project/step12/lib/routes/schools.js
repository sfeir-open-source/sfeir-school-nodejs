const express = require("express");
const { v1: uuidv1 } = require("uuid");
const log = require("../logger")();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else res.sendStatus(401);
}

const doGet = db => (req, res) => {
  db.find({ selector: { type: "school" } })
    .then(function(results) {
      log.info("Found schools", results);
      res.send(results.docs);
    })
    .catch(err => {
      log.error("Failed to find schools", err);
      res.sendStatus(500);
    });
};

const doPost = db => (req, res) => {
  const school = req.body;
  school.type = "school";
  school._id = uuidv1();
  db.put(school)
    .then(() => {
      log.info("Save successful", school);
      res.sendStatus(201);
    })
    .catch(err => {
      log.error("Failed to insert school", err, school);
      res.sendStatus(500);
    });
};

module.exports = db => {
  const router = express.Router();

  router.get("/", doGet(db));
  router.post("/", ensureAuthenticated, doPost(db));

  return router;
};
