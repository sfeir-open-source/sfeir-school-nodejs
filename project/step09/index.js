const PouchDB = require("pouchdb");
PouchDB.plugin(require("pouchdb-find"));

const app = require("./lib/app");

const { INITDB_DATABASE = "schoolsdb", PORT = 3000 } = process.env;

// TODO : add uncaughtException and unhandledRejection event subscriptions and log in files
const db = new PouchDB(INITDB_DATABASE);
// TODO : replace console.log
db.info()
  .then((info) => console.log(info))
  .then(
    app(db).listen(PORT, () => console.log(`App listening on port ${PORT}!`))
  );
