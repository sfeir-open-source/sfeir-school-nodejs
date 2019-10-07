# Sfeir Schools

## Step 5

Persistence des données avec MongoDB. :warning: ce n'est pas un cours sur MongoDB ni la sécurité !

Installer MongoDB:

- Avec [l'installeur officiel](https://www.mongodb.com/download-center?jmp=tutorials#community).
- Avec [l'image docker](https://hub.docker.com/_/mongo/). Vous pouvez faire `docker-compose up` dans le dossier !
- Le fichier docker-compose lance aussi l'image [mongo-express](https://www.npmjs.com/package/mongo-express), une interface d'admin web pour mongo

On va préparer plusieurs variables d'environnement (les 3 premières sont aussi utilisées par l'image docker :whale:):

- `MONGO_INITDB_ROOT_USERNAME` avec la valeur `root`.
- `MONGO_INITDB_ROOT_PASSWORD` avec une valeur de votre choix.
- `MONGO_INITDB_DATABASE` avec la valeur `schoolsdb`.
- `MONGO_INITDB_DATABASE_USERS` avec la valeur de la db sur laquelle est enregistré votre user (par défaut `admin`).

Lancer Mongo comme vous pouvez :smile:.

Et côté code:

- On va utiliser le module officiel [mongodb](https://www.npmjs.com/package/mongodb).
- Pour la connexion:
  - L'url de connexion correspond à: `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/${MONGO_INITDB_DATABASE_USERS}`.
  - On va passer les options: `{ useNewUrlParser: true, connectTimeoutMS: 1000 }`.
- On va démarrer le serveur uniquement si la connexion à la base est un succès.
- Il faut mettre à jour `lib/app.js` pour lui passer la db.
- Profitons-en pour ajouter une variable d'environnement `PORT` avec le port sur lequel notre application doit tourner.

Références:

- [API Mongo](http://mongodb.github.io/node-mongodb-native/3.0/api/index.html)
- [MongoDB Compass (Community Edition)](https://www.mongodb.com/download-center?jmp=hero#compass) pour vous aider.