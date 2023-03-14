const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");

const schools = require("./routes/schools");
const users = require("./routes/users");

const app = express();

const localStrategy = require("./auth/local");

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

// TODO : use a middleware for request duration metrics

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((sessionUser, done) => {
  done(null, sessionUser);
});

module.exports = db => {
  passport.use(localStrategy(db));

  app.use("/schools", schools(db));
  app.use("/users", users(db));

  // TODO : use an error middleware to log uncaught errors and send status code 500

  return app;
};