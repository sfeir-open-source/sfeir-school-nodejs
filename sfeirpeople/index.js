const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('./lib/logger')({
  level: process.env.LOG_LEVEL || 'info',
  withConsole: process.env.LOG_CONSOLE !== 'false',
  withFile: process.env.MONEXPRESS_LOG_FILE === 'true',
});

const peopleRoutes = require('./lib/routes/people');

const app = express();

app.set('port', process.env.PORT || 9000);
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/peoples', peopleRoutes);

app.listen(app.get('port'), () => {
  logger.info('✔Express server listening on http://localhost:%d/', app.get('port'));
});

module.exports = app;
