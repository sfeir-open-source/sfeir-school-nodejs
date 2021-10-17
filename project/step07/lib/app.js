const express = require("express");
const bodyParser = require("body-parser");
const { v1: uuidv1 } = require("uuid");
const app = express();

// TODO : retrieve SALT from environment

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO : use session middleware
// TODO : use passport middleware and passport session middleware

// TODO : call passport serialize and deserializeUser
module.exports = db => {

  // TODO : configure passport here to use local strategy (this strategy uses database find method with selector)
  // Local strategy should be declared in an external file and imported here (user.js)

  app.get("/", (req, res) => {
    db.find({ selector: { type: "school" } })
      .then(function(results) {
        res.send(results.docs);
      })
      .catch(err => {
        console.log("Failed to find schools", err);
        res.sendStatus(500);
      });
  });

  app.post("/", (req, res) => {
    // TODO : should return 401 if the user is not authenticated
    const school = req.body;
    school.type = "school";
    school._id = uuidv1();
    db.put(school)
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(err) {
        console.log("Failed to insert school", school, err);
        res.sendStatus(500);
      });
  });

  // TODO : add login route (POST). Use `passport.authenticate` with `local` strategy

  // TODO : add register route (POST). Create the user in database. Crypto could be useful

  return app;
};
