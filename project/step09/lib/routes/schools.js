const express = require("express");
const uuidv1 = require("uuid/v1");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else res.sendStatus(401);
}

const doGet = db => (req, res) => {
  db.find({ selector: { type: "school" } })
    .then(function(results) {
      res.send(results.docs);
    })
    .catch(err => {
      console.log("Failed to find schools", err);
      res.sendStatus(500);
    });
};

const doPost = db => (req, res, next) => {
  const school = req.body;
  school.type = "school";
  school._id = uuidv1();
  db.put(school)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log("Failed to insert school", school, err);
      res.sendStatus(500);
    });
};

module.exports = db => {
  const router = express.Router();

  router.get("/", doGet(db));
  router.post("/", ensureAuthenticated, doPost(db));

  return router;
};
