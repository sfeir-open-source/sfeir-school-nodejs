const { scrypt } = require("crypto");
const { v1: uuidv1 } = require("uuid");

const { SALT } = process.env;

const service = (db) => {
  function findUser(username, password, callback) {
    scrypt(password, SALT, 64, (err, derivedKey) => {
      if (err) {
        console.log("Failed to generate password", err);
        return callback(err);
      }
      db.createIndex({
        index: {
          fields: ["username", "password"],
        },
      }).then(
        db
          .find({
            selector: {
              username,
              password: derivedKey.toString("hex"),
            },
          })
          .then((result) => {
            if (!result.docs) {
              return callback(null, false, { message: "Incorrect username." });
            }
            return callback(null, result.docs[0]);
          })
          .catch((err) => {
            return callback(err);
          })
      );
    });
  }

  function saveUser(username, password, callback) {
    scrypt(password, SALT, 64, (err, derivedKey) => {
      if (err) {
        console.log("Failed to generate password", err);
        callback(err);
      } else {
        db.put({
          username,
          password: derivedKey.toString("hex"),
          type: "user",
          _id: uuidv1(),
        })
          .then(() => {
            callback(null);
          })
          .catch((err) => {
            console.log("Failed to save user", err);
            callback(err);
          });
      }
    });
  }

  return {
    findUser,
    saveUser,
  };
};

module.exports = service;
