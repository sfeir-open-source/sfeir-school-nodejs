const winston = require('winston');

const defaultConfig = {
  level: 'debug',
  withFile: false,
  withConsole: true,
};

function logger(userConfig) {
  const config = Object.assign({}, defaultConfig, userConfig);

  if (config.withFile) {
    winston.add(winston.transports.File, { filename: 'monexpress.log' });
  }

  if (!config.withConsole) {
    winston.remove(winston.transports.Console);
  }

  winston.level = config.level;

  winston.debug('Logging configuration', config);

  return winston;
}

module.exports = logger;
