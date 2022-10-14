# Sfeir Schools

## Step 5

Data persistence with [PouchDB](https://pouchdb.com)

We will prepare an environment variable:

- `INITDB_DATABASE` with value `schoolsdb`.

And on the code side:

- Use the [pouchdb-find](https://pouchdb.com/guides/mango-queries.html) plugin for queries
- Update `lib/app.js` to pass the db to it.
- Check that the database is accessible before starting the application.
- Let's take this opportunity to add a `PORT` environment variable with the port on which our application must run.

# PouchDB

- To insert a document in the database, we use the `put` method. The document must contain an identifier `_id` and a `type`
- To generate unique `_id`, we can use the package [uuid](https://www.npmjs.com/package/uuid)
