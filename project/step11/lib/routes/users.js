const express = require("express");
const passport = require("passport");

const { doLogin, doRegister } = require("../controllers/users.js");

module.exports = (db) => {
  const router = express.Router();

  router.post("/login", passport.authenticate("local"), doLogin);
  router.post("/register", doRegister(db));

  return router;
};
