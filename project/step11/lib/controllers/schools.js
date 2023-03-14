const School = require("../services/schools.js");

const doGet = (db) => (req, res) => {
  School(db)
    .getSchools()
    .then(function (results) {
      res.send(results);
    })
    .catch((err) => {
      console.log("Failed to find schools", err);
      res.sendStatus(500);
    });
};

const doPost = (db) => (req, res, next) => {
  const school = req.body;
  School(db)
    .createSchool(school)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("Failed to insert school", school, err);
      res.sendStatus(500);
    });
};

module.exports = {
  doGet,
  doPost,
};
