const express = require("express");
const bodyParser = require("body-parser");
const { v1: uuidv1 } = require("uuid");
const app = express();
// TODO Step 2 : define the local strategy in user.js
//const getLocalStrategy = require("./user");

// TODO Step 1 : retrieve SALT from environment

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO Step 4 : use session middleware

// TODO Step 4 : use passport middleware and passport session middleware

// TODO Step 4 : call passport serialize and deserializeUser
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((sessionUser, done) => {
//   done(null, sessionUser);
// });


module.exports = db => {

  // TODO Step 2 : configure passport here to use local strategy (this strategy uses database find method with selector)
  // The strategy should be defined in an exernal file (user.js)

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
    // TODO Step 3 : should return 401 if the user is not authenticated
    // with the passport middleware, req.isAuthenticated() return true if the user is authenticated
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

  // TODO Step 1 : add register route (POST). 
  // Create the user in database and use crytp.scrypt to hash password before storing the user
  //
  // crypto.scrypt('password', 'salt', 64, (err, derivedKey) => {
  //   if (err) throw err;
  //      console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
  // });

  // TODO Step 2 : add login route (POST). Use the middleware `passport.authenticate` with `local` strategy


  return app;
};
