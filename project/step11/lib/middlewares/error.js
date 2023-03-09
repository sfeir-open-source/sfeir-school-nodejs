const log = require("../logger")();

module.exports = (err, req, res, next) => {
  log.error("A wild error appears!", err);

  res.sendStatus(err.statusCode || 500);
};
