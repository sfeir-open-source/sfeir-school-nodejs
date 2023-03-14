const User = require("../services/users.js");
const LocalStrategy = require("passport-local").Strategy;

module.exports = (db) =>
  new LocalStrategy((username, password, done) => {
    User(db)
      .findUser(username, password)
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });
