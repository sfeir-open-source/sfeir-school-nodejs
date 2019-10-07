const { scrypt } = require("crypto");

const LocalStrategy = require("passport-local").Strategy;

const log = require("../logger")();

const { SALT } = process.env;

const findUser = collection => (username, password, done) => {
  scrypt(password, SALT, 64, (err, derivedKey) => {
    if (err) {
      log.error({ err }, "Failed to generate password");
      return done(err);
    } else {
      collection.findOne(
        { username, password: derivedKey.toString("hex") },
        (err, user) => {
          if (err) {
            return done(err);
          }

          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }

          return done(null, user);
        }
      );
    }
  });
};

module.exports = db => {
  const collection = db.collection("users");
  return new LocalStrategy(findUser(collection));
};
