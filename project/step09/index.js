const MongoClient = require("mongodb").MongoClient;

const app = require("./lib/app");

const {
  MONGO_INITDB_ROOT_PASSWORD = "example",
  MONGO_INITDB_ROOT_USERNAME = "root",
  MONGO_INITDB_DATABASE = "schoolsdb",
  MONGO_INITDB_DATABASE_USERS = "admin",
  PORT = 3000
} = process.env;

const url = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/${MONGO_INITDB_DATABASE_USERS}`;

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err || !client) {
    console.log("Error while connecting to DB", err);

    process.exit(1);
  }

  const db = client.db(MONGO_INITDB_DATABASE);

  app(db).listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
