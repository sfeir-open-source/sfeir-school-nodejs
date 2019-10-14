# Sfeir Schools

## Step 5

Persistence des données avec [PouchDB](https://pouchdb.com)

On va préparer une variable d'environnement :

- `INITDB_DATABASE` avec la valeur `schoolsdb`.

Et côté code:

- Utiliser le plugin [pouchdb-find](https://pouchdb.com/guides/mango-queries.html) pour les requêtes
- Mettre à jour `lib/app.js` pour lui passer la db.
- Vérifier que la base est accessible avant de démarrer l'application.
- Profitons-en pour ajouter une variable d'environnement `PORT` avec le port sur lequel notre application doit tourner.

# PouchDB

- Pour inserer un document dans la base, on utilise la méthode `put`. Le document doit contenir un identifiant `_id` et un `type`
- Pour générer des `_id` uniques, on peut utiliser le package `uuid`


