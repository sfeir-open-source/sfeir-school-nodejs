const { scrypt } = require("crypto");
const express = require("express");
const passport = require("passport");

const { SALT } = process.env;

const doLogin = (req, res) => {
  res.sendStatus(200);
};

const doRegister = collection => (req, res) => {
  const { username, password } = req.body;

  scrypt(password, SALT, 64, (err, derivedKey) => {
    if (err) {
      console.log("Failed to generate password", err);
      res.sendStatus(500);
    } else {
      collection.insertOne(
        { username, password: derivedKey.toString("hex") },
        err => {
          if (err) {
            console.log("Failed to save user", err);
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
