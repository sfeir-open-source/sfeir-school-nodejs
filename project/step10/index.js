const MongoClient = require("mongodb").MongoClient;

const app = require("./lib/app");
const log = require("./lib/logger")();

const {
  MONGO_INITDB_ROOT_PASSWORD = "example",
  MONGO_INITDB_ROOT_USERNAME = "root",
  MONGO_INITDB_DATABASE = "schoolsdb",
  MONGO_INITDB_DATABASE_USERS = "admin",
  PORT = 3000
} = process.env;

const url = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/${MONGO_INITDB_DATABASE_USERS}`;

process.on("uncaughtException", err => {
  log.error({ err }, "Got an uncaught exception");
  process.exit(1);
});

process.on("unhandledRejection", err => {
  log.error({ err }, "Got an unhandled rejection");
  process.exit(1);
});

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err) {
    log.error({ err }, "Error while connecting to DB");

    process.exit(1);
  }

  const db = client.db(MONGO_INITDB_DATABASE);

  app(db).listen(PORT, () => log.info(`App listening on port ${PORT}!`));
});
