// TODO : import pouchdb and add pouchdb-find plugin
const app = require("./lib/app");

// TODO : instantiate a PouchDB database and use INITDB_DATABASE environment variable
// TODO : use the info method to ensure that the database instance is ready 
// TODO : use PORT environment variable
app.listen(3000, () => console.log("App listening on port 3000!"));
