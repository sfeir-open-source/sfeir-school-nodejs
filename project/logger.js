const winston = require('winston');

const defaultConfig = {
  level: 'debug',
  withFile: false,
  withConsole: true,
};

module.exports = logger;

function logger(config = defaultConfig) {
  if (config.withFile) {
    winston.add(winston.transports.File, { filename: 'monexpress.log' });
  }

  if (!config.withConsole) {
    winston.remove(winston.transports.Console);
  }

  winston.level = config.level;

  return winston;
};
