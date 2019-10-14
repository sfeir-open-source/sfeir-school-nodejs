const express = require("express");
const uuidv1 = require("uuid/v1");
const log = require("../logger")();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else res.sendStatus(401);
}

const doGet = db => (req, res) => {
  db.find({ selector: { type: "school" } })
    .then(function(results) {
      log.info({ results }, "Found schools");
      res.send(results.docs);
    })
    .catch(err => {
      log.error({ err }, "Failed to find schools");
      res.sendStatus(500);
    });
};

const doPost = db => (req, res) => {
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
      res.sendStatus(500);
    });
};

module.exports = db => {
  const router = express.Router();

  router.get("/", doGet(db));
  router.post("/", ensureAuthenticated, doPost(db));

  return router;
};
