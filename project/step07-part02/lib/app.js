const express = require("express");
const bodyParser = require("body-parser");
const { v1: uuidv1 } = require("uuid");
const User = require("./user");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO Step 1 : initialize Passport here

// TODO Step 3 : enable Passport session management

// TODO Step 3 : configure session use with express-session

// TODO Step 3 : call passport serialize and deserializeUser
// Serialize user into the session
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// Deserialize user from the session
// passport.deserializeUser((sessionUser, done) => {
//   done(null, sessionUser);
// });

module.exports = (db) => {
  const user = User(db);

  // TODO Step 1 : define the local strategy and configure passport to use it. Use user.findUser method

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

  app.post("/", (req, res) => {
    // TODO Step 2 : Create a middleware that return 401 if the user is not authenticated
    // with the passport middleware, req.isAuthenticated() return true if the user is authenticated

    const school = req.body;
    school.type = "school";
    school._id = uuidv1();
    db.put(school)
      .then(function () {
        res.sendStatus(201);
      })
      .catch(function (err) {
        console.log("Failed to insert school", school, err);
        res.sendStatus(500);
      });
  });

  app.post("/login", (req, res) => {
    // TODO Step 1 : Use the middleware `passport.authenticate` with `local` strategy
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
