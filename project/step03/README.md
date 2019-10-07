# Sfeir Schools

## Step 3

Des tests !

On va utiliser 2 modules qu'on va installer sous les `devDependencies`:

- [jest](https://facebook.github.io/jest/), un framework de tests.
- [supertest](https://github.com/visionmedia/supertest), pour tester simplement des requêtes à une API.

Et un peu de refactoring:

- Faire un module "lib/app.js" avec toute l'application sauf le `app.listen(...)`.
- Faire un "index.js" qui va appeler notre module et faire le `app.listen(...)`.
- Changer les scripts dans le package.json.

Et enfin:

- Créer un test qui va faire un `GET` sur `/` et vérifier que le `statusCode` est `200` et que le `body` est `[]`.
- Modifier le script npm "test" pour lui affecter la commande "jest".
- Lancer les tests avec `npm test`.
