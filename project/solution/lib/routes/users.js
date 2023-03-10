const { scrypt } = require("crypto");
const express = require("express");
const passport = require("passport");
const { v1: uuidv1 } = require("uuid");

const log = require("../logger")();

const { SALT } = process.env;

const doLogin = (req, res) => {
  res.sendStatus(200);
};

const doRegister = db => (req, res, next) => {
  const { username, password } = req.body;

  scrypt(password, SALT, 64, (err, derivedKey) => {
    if (err) {
      log.error({ err }, "Failed to generate password");
      err.statusCode = 500;
      return next(err);
    }
    db.put({
      username,
      password: derivedKey.toString("hex"),
      type: "user",
      _id: uuidv1()
    })
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        log.error({ err }, "Failed to save user");
        err.statusCode = 500;
        next(err);
      });
  });
};

module.exports = db => {
  const router = express.Router();

  router.post("/login", passport.authenticate("local"), doLogin);
  router.post("/register", doRegister(db));

  return router;
};
