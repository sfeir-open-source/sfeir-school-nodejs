const { scrypt } = require("crypto");
const express = require("express");
const passport = require("passport");
const uuidv1 = require("uuid/v1");

const { SALT } = process.env;

const doLogin = (req, res) => {
  res.sendStatus(200);
};

const doRegister = db => (req, res) => {
  const { username, password } = req.body;

  scrypt(password, SALT, 64, (err, derivedKey) => {
    if (err) {
      console.log("Failed to generate password", err);
      res.sendStatus(500);
    } else {
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
          console.log("Failed to save user", err);
          res.sendStatus(500);
        });
    }
  });
};

module.exports = db => {
  const router = express.Router();

  router.post("/login", passport.authenticate("local"), doLogin);
  router.post("/register", doRegister(db));

  return router;
};
