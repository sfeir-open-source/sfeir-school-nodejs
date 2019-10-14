const { scrypt } = require("crypto");

const LocalStrategy = require("passport-local").Strategy;

const log = require("../logger")();

const { SALT } = process.env;

const findUser = db => (username, password, done) => {
  scrypt(password, SALT, 64, (err, derivedKey) => {
    if (err) {
      log.error({ err }, "Failed to generate password");
      return done(err);
    }
    db.createIndex({
      index: {
        fields: ["username", "password"]
      }
    }).then(
      db
        .find({
          selector: {
            username,
            password: derivedKey.toString("hex")
          }
        })
        .then(result => {
          if (!result.docs) {
            return done(null, false, { message: "Incorrect username." });
          }
          return done(null, result.docs[0]);
        })
        .catch(err => {
          return done(err);
        })
    );
  });
};

module.exports = db => {
  return new LocalStrategy(findUser(db));
};
