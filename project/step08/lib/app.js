const { scrypt } = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const uuidv1 = require("uuid/v1");
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
  passport.use(getUserStrategy(db));

  app.get("/", (req, res) => {
    db.find({ selector: { type: "school" } })
      .then(function(results) {
        res.send(results.docs);
      })
      .catch(err => {
        console.log("Failed to find schools", err);
        res.sendStatus(500);
      });
  });

  app.post("/", ensureAuthenticated, (req, res) => {
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
  });

  return app;
};
