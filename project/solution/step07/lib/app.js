const {scrypt} = require('crypto');
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const app = express();

const { SALT } = process.env;

const getUserStrategy = require("./user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "SFEIR",
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((sessionUser, done) => {
  done(null, sessionUser);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else res.sendStatus(401);
}

module.exports = db => {
  const collection = db.collection("schools");
  const users = db.collection("users");

  passport.use(getUserStrategy(users));

  app.get("/", (req, res) => {
    collection.find({}).toArray(function(err, schools) {
      if (err) {
        console.log("Failed to find schools", err);
        res.sendStatus(500);
      } else {
        res.send(schools);
      }
    });
  });

  app.post("/", ensureAuthenticated, (req, res) => {
    const school = req.body;

    collection.insertOne(school, function(err) {
      if (err) {
        console.log("Failed to insert school", school, err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  });

  app.post("/login", passport.authenticate("local"), (req, res) => {
    res.sendStatus(200);
  });

  app.post("/register", (req, res) => {
    const { username, password } = req.body;

    scrypt(password, SALT, 64, (err, derivedKey) => {
      if (err) {
        console.log("Failed to generate password", err);
        res.sendStatus(500);
      } else {
        users.insertOne({ username, password: derivedKey.toString('hex') }, err => {
          if (err) {
            console.log("Failed to save user", err);
            res.sendStatus(500);
          } else {
            res.sendStatus(201);
          }
        });
      }
    });
  });

  return app;
};