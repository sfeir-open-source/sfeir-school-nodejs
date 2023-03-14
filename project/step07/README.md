# Sfeir Schools

## Step 7 Partie 1.

Authentification !

C'est le moment de parler des [middlewares dans Express](https://expressjs.com/en/guide/using-middleware.html). Il y en a 2 types:

- Les middlewares de base (signature: `function(req, res, next) {...}`).
- Les middlewares d'erreur (signature: `function(err, req, res, next) {...}`).

L'ordre d'usage des middlewares est important !

### Gestion des utilisateurs

Nous allons avoir besoin d'enregistrer puis de rechercher des utilisateurs dans la base de données.

Modifier le fichier `lib/user.js`. Implémenter ces deux méthodes :
- `findUser(username, password, callback)`
- `saveUser(username, password, callback)`


Le callback fourni en argument est appelé lorsque l'action est terminée, soit avec l'erreur eventuelle si une erreur s'est produite, soit avec le résultat attendu.
La recherche d'élément avec `PouchDB` nécessite le package `pouchdb-find` et la création d'un index : https://pouchdb.com/guides/mango-queries.html.


### Chiffrement

Stocker les mots de passe en clair n'est pas recommandé. On va donc les chiffrer.

On va utiliser un module core de Node: [crypto](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html). Il nous fournit [scrypt](https://nodejs.org/dist/latest-v18.x/docs/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback) pour chiffrer les mots de passe.

- Modifier les fonctions `findUser` et `saveUser` pour utiliser des mots de passe chiffrés.

### Variable d'environnement

`scrypt` utilise une valeur de salage. On stockera cette valeur dans la variable d'environnement `SALT`.

- Créer une variable d'environnement `SALT` pour `scrypt`.

Pour assurer la compatibilité entre systèmes d'exploitations, on utilise [cross-env](https://www.npmjs.com/package/cross-env).
- Ajouter `cross-env` à la liste des dépendances et modifier les scripts du fichier npm pour donner la valeur `kikou` à la variable d'environnement `SALT`.

### Routes

Dans le fichier app.js`, on va créer deux routes POST:

- `/register` pour créer les comptes. On utilisera la fonction `saveUser` du module `user.js`.
- `/login` pour la connexion. Pour le moment on retournera toujours le code HTTP 200.