# Sfeir Schools

## Step 8

Refactoring !

On va ranger un peu en utilisant [`express.Router`](http://expressjs.com/en/guide/routing.html).

Pour une structure de code modulaire, la logique doit être divisée dans des répertoires et des fichiers séparés.
Les routes font appels aux controllers. Les controllers utilisent les services.

```
├───routes
│   ├───users.js
│   ├───schools.js
├───controllers
│   ├───users.js
│   ├───schools.js
├───services
│   ├───users.js
│   ├───schools.js
```

- Créer un dossier `routes` dans `lib` contenant les fichiers `schools.js` et `users.js`.
- Créer un dossier `controllers` dans `lib` contenant les fichiers `schools.js` et `users.js`.
- Créer un dossier `services` dans `lib` contenant les fichiers `schools.js` et `users.js`.

- Renommer les routes liées aux utilisateurs en `/users/login` et `/users/register`.
- Renommer les routes liées aux Sfeir Schools en `/schools`.
- Déplacer le code d'accès à la base de données dans les services.
- Déplacer les middlewares des routes dans les controllers.
- La définition de la stratégie locale de passport peut aussi être déclarée dans un fichier séparé.


On reprend les exemples du step précédent en corrigeant les routes:

- Créer un user: `http POST http://localhost:3000/users/register username="Jtutu" password="plop"`.
- Lister les Sfeir Schools: `http http://localhost:3000/schools`.
- Tenter de créer une Sfeir School: `http POST http://localhost:3000/schools title="Sfeir School tartiflette"`. On doit avoir un 401.
- Faire un login: `http --session=/tmp/session.json POST http://localhost:3000/users/login username="Jtutu" password="plop"`. Le `--session=/tmp/session.json` permet de persister les cookies etc.
- On crée pour de vrai une Sfeir School: `http --session=/tmp/session.json POST http://localhost:3000/schools title="Sfeir School tartiflette"`.
- Lister les Sfeir Schools: `http http://localhost:3000/schools` pour voir notre nouvelle Sfeir School !
