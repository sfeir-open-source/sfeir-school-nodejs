const log = require("../logger")();

module.exports = (err, req, res, next) => {
  log.error({ err }, "A wild error appears!");

  res.sendStatus(err.statusCode || 500);
};
