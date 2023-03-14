const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");

const durationMw = require("./middlewares/duration");
const errorMw = require("./middlewares/error");

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
// TODO : use helmet middleware

app.use(durationMw);

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

  app.use(errorMw);

  return app;
};