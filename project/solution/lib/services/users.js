const { scrypt } = require("crypto");
const { v1: uuidv1 } = require("uuid");
const util = require("util");
const scryptAsync = util.promisify(scrypt);

const { SALT } = process.env;

const service = (db) => {
  const findUser = async (username, password) => {
    try {
      const derivedKey = await scryptAsync(password, SALT, 64);

      await db.createIndex({
        index: {
          fields: ["username", "password"],
        },
      });

      const result = await db.find({
        selector: {
          username,
          password: derivedKey.toString("hex"),
        },
      });

      if (!result.docs) {
        throw new Error("Incorrect username.");
      }

      return result.docs[0];
    } catch (err) {
      console.log("Failed to retrieve user", err);
      throw err;
    }
  };

  const saveUser = async (username, password) => {
    try {
      const derivedKey = await scryptAsync(password, SALT, 64);

      await db.put({
        username,
        password: derivedKey.toString("hex"),
        type: "user",
        _id: uuidv1(),
      });

      return;
    } catch (err) {
      console.log("Failed to save user", err);
      throw err;
    }
  };

  return {
    findUser,
    saveUser,
  };
};

module.exports = service;
