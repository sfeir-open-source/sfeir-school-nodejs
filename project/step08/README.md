# Sfeir Schools

## Step 8

Refactoring!

Let's tidy up a bit:

- Rename user-related routes to `/users/login` and `/users/register`.
- Rename routes related to Sfeir Schools to `/schools`.
- All this using [`express.Router`](http://expressjs.com/en/guide/routing.html).

We take the examples of the previous step by correcting the routes:

- Create a user: `http POST http://localhost:3000/users/register username="Jtutu" password="plop"`.
- List Sfeir Schools: `http http://localhost:3000/schools`.
- Attempt to create a Sfeir School: `http POST http://localhost:3000/schools title="Sfeir School tartiflette"`. We must have a 401.
- Login: `http --session=/tmp/session.json POST http://localhost:3000/users/login username="Jtutu" password="plop"`. The `--session=/tmp/session.json` allows cookies etc to be persisted.
- We create a real Sfeir School: `http --session=/tmp/session.json POST http://localhost:3000/schools title="Sfeir School tartiflette"`.
- List Sfeir Schools: `http http://localhost:3000/schools` to see our new Sfeir School!
