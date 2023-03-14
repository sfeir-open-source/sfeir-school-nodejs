const { scrypt } = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const session = require("express-session");
const { v1: uuidv1 } = require("uuid");
const User = require("./user");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "SFEIR",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((sessionUser, done) => {
  done(null, sessionUser);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else res.sendStatus(401);
}
// TODO : refactoring. Use express router and move routes in appropriate files
module.exports = (db) => {
  const user = User(db);

  passport.use(new LocalStrategy(user.findUser));

  app.get("/", (req, res) => {
    db.find({ selector: { type: "school" } })
      .then(function (results) {
        res.send(results.docs);
      })
      .catch((err) => {
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
      .catch((err) => {
        console.log("Failed to insert school", school, err);
        res.sendStatus(500);
      });
  });

  app.post("/login", passport.authenticate("local"), (req, res) => {
    res.sendStatus(200);
  });

  app.post("/register", (req, res) => {
    const { username, password } = req.body;
    user.saveUser(username, password, function (err) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  });

  return app;
};
