# Sfeir Schools

## Step 5

Persistence des données avec [PouchDB](https://pouchdb.com).

[PouchDB](https://pouchdb.com) est une base de données NoSQL en JavaScript qui fonctionne aussi bien sur le navigateur que sur les serveurs. PouchDB est compatible avec CouchDB et peut-être utilisée pour synchroniser des données entre différentes instances de CouchDB.

On va préparer une variable d'environnement :

- `INITDB_DATABASE` avec la valeur `schoolsdb`.

Et côté code:

- Utiliser le plugin [pouchdb-find](https://pouchdb.com/guides/mango-queries.html) pour les requêtes.
- Mettre à jour `lib/app.js` pour lui passer la db.
- Vérifier que la base est accessible avant de démarrer l'application.
- Profitons-en pour ajouter une variable d'environnement `PORT` avec le port sur lequel notre application doit tourner.

# PouchDB

- Pour inserer un document dans la base, on utilise la méthode `put`. Le document doit contenir un identifiant `_id` et un `type`.
- Pour générer des `_id` uniques, on peut utiliser le package [uuid](https://www.npmjs.com/package/uuid).
