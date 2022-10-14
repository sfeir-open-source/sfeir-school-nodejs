# Sfeir Schools

## To try

- Install the modules `npm install`.
- Launch with `NODE_ENV=development npm start`.

- test with [httpie](https://httpie.org/):

- Create an user: `http POST http://localhost:3000/users/register username="Jtutu" password="Plop"`.
- do a login: `http --session=/tmp/session.json POST http://localhost:3000/users/login username="Jtutu" password="Plop"`. Le `--session=/tmp/session.json` permet de persister les cookies etc.
- Add a Sfeir school: `http POST http://localhost:3000/schools title="Another school" --session=/tmp/session.json`.
- List all Sfeir Schools: `http http://localhost:3000/schools`.

## With docker-compose

- We build with `docker-compose build` 
- We run with `docker-compose up` 

## If you used CouchDB
- [Page admin](http://localhost:5984/_utils/)
