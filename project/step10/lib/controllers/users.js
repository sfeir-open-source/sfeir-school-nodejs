const User = require("../services/users.js");

const doLogin = (req, res) => {
  res.sendStatus(200);
};

const doRegister = (db) => (req, res) => {
  const { username, password } = req.body;

  User(db)
    .saveUser(username, password)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Failed to save user", err);
      res.sendStatus(500);
    });
};
module.exports = {
  doLogin,
  doRegister,
};
