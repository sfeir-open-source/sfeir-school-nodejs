const PouchDB = require("pouchdb");
PouchDB.plugin(require("pouchdb-find"));

const app = require("./lib/app");
const log = require("./lib/logger")();

const {
  INITDB_DATABASE = "schoolsdb",
  DATABASE_HOST = "localhost",
  DATABASE_PORT = 5984,
  PORT = 3000,
  DATABASE_USER,
  DATABASE_PASSWORD,
} = process.env;

const url = `http://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${INITDB_DATABASE}`;

process.on("uncaughtException", (err) => {
  log.error("Got an uncaught exception", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  log.error("Got an unhandled rejection", err);
  process.exit(1);
});

const connect = () => {
  const db = new PouchDB(url);
  db.info()
    .then((info) => {
      log.info(info);
      return true;
    })
    .catch((err) => {
      log.error("Error while connecting to DB", err);
      return false;
    })
    .then((connected) => {
      if (connected) {
        clearInterval(interval);
        clearTimeout(timeout);
        app(db).listen(PORT, () => log.info(`App listening on port ${PORT}!`));
      }
    });
};

const interval = setInterval(connect, 3000);

const timeout = setTimeout(() => {
  clearInterval(interval);

  log.error("Failed to connect to database!");

  process.exit(1);
}, 10000);
