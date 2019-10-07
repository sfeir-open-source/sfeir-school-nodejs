const MongoClient = require("mongodb").MongoClient;

const app = require("./lib/app");
const log = require("./lib/logger")();

const {
  MONGO_INITDB_ROOT_PASSWORD = "example",
  MONGO_INITDB_ROOT_USERNAME = "root",
  MONGO_INITDB_DATABASE = "schoolsdb",
  MONGO_INITDB_DATABASE_USERS = "admin",
  DATABASE_HOST = "localhost",
  DATABASE_PORT = 27017,
  PORT = 3000
} = process.env;

const url = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${MONGO_INITDB_DATABASE_USERS}`;

process.on("uncaughtException", err => {
  log.error({ err }, "Got an uncaught exception");
  process.exit(1);
});

process.on("unhandledRejection", err => {
  log.error({ err }, "Got an unhandled rejection");
  process.exit(1);
});

const connect = () => {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, connectTimeoutMS: 1000 },
    function(err, client) {
      if (err || !client) {
        log.error({ err }, "Error while connecting to DB");
      } else {
        clearInterval(interval);
        clearTimeout(timeout);

        const db = client.db(MONGO_INITDB_DATABASE);

        app(db).listen(PORT, () => log.info(`App listening on port ${PORT}!`));
      }
    }
  );
};

const interval = setInterval(connect, 3000);

const timeout = setTimeout(() => {
  clearInterval(interval);

  log.error("Failed to connect to database!");

  process.exit(1);
}, 10000);
