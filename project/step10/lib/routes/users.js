const { scrypt } = require("crypto");
const express = require("express");
const passport = require("passport");

const log = require("../logger")();

const { SALT } = process.env;

const doLogin = (req, res) => {
  res.sendStatus(200);
};

const doRegister = collection => (req, res) => {
  const { username, password } = req.body;

  scrypt(password, SALT, 64, (err, derivedKey) => {
    if (err) {
      log.error({ err }, "Failed to generate password");
      res.sendStatus(500);
    } else {
      collection.insertOne(
        { username, password: derivedKey.toString("hex") },
        err => {
          if (err) {
            log.error({ err }, "Failed to save user");
            res.sendStatus(500);
          } else {
            res.sendStatus(201);
          }
        }
      );
    }
  });
};

module.exports = db => {
  const router = express.Router();
  const collection = db.collection("users");

  router.post("/login", passport.authenticate("local"), doLogin);
  router.post("/register", doRegister(collection));

  return router;
};
