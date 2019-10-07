# Sfeir Schools

## Step 8

Refactoring !

On va ranger un peu:

- Renommer les routes liées aux utilisateurs en `/users/login` et `/users/register`.
- Renommer les routes liées aux Sfeir Schools en `/schools`.
- Tout ça en utilisant [`express.Router`](http://expressjs.com/en/guide/routing.html).

On reprend les exemples du step précédent en corrigeant les routes:

- Créer un user: `http POST http://localhost:3000/users/register username="Jtutu" password="plop"`.
- Lister les Sfeir Schools: `http http://localhost:3000/schools`.
- Tenter de créer une Sfeir School: `http POST http://localhost:3000/schools title="Sfeir School tartiflette"`. On doit avoir un 401.
- Faire un login: `http --session=/tmp/session.json POST http://localhost:3000/users/login username="Jtutu" password="plop"`. Le `--session=/tmp/session.json` permet de persister les cookies etc.
- On crée pour de vrai une Sfeir School: `http --session=/tmp/session.json POST http://localhost:3000/schools title="Sfeir School tartiflette"`.
- Lister les Sfeir Schools: `http http://localhost:3000/schools` pour voir notre nouvelle Sfeir School !
