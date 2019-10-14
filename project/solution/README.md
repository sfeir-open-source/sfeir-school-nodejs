# Sfeir Schools

## Pour essayer tout ça:

- Installer les modules `npm install`.
- Lancer avec `NODE_ENV=development npm run dev`.

- Tester avec [httpie](https://httpie.org/):

- Créer un user: `http POST http://localhost:3000/users/register username="Jtutu" password="Plop"`.
- Faire un login: `http --session=/tmp/session.json POST http://localhost:3000/users/login username="Jtutu" password="Plop"`. Le `--session=/tmp/session.json` permet de persister les cookies etc.
- Ajouter une Sfeir school: `http POST http://localhost:3000/schools title="Another school" --session=/tmp/session.json`.
- Lister les Sfeir Schools: `http http://localhost:3000/schools`.