const express = require("express");

const { doGet, doPost } = require("../controllers/schools.js");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else res.sendStatus(401);
}

module.exports = (db) => {
  const router = express.Router();

  router.get("/", doGet(db));
  router.post("/", ensureAuthenticated, doPost(db));

  return router;
};
