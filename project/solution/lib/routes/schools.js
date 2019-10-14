const express = require("express");
const uuidv1 = require("uuid/v1");
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
      log.info({ results }, "Found schools");
      res.send(results.docs);
    })
    .catch(err => {
      log.error({ err }, "Failed to find schools");
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
      log.info({ school }, "Save successful");
      res.sendStatus(201);
    })
    .catch(err => {
      log.error({ err, school }, "Failed to insert school");
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
