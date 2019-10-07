# Sfeir Schools

## Step 6

Les tests sont cassés !

- On va installer les modules [jest-environment-node](https://www.npmjs.com/package/jest-environment-node) et [mongodb-memory-server](https://www.npmjs.com/package/mongodb-memory-server).
- On va [lire un peu de doc](https://facebook.github.io/jest/docs/en/mongodb.html) et plus particulièrement le [repo de référence](https://github.com/vladgolubev/jest-mongodb).
- Il faut créer les fichiers `setup.js`, `teardown.js` et `mongo-environment.js` ainsi que le fichier `jest.config.js` pour [configurer jest](https://facebook.github.io/jest/docs/en/configuration.html).
- :warning: il faut mettre la version de mongo `3.2.19` (comme dans le repo de référence; j'ai eu un bug avec la `3.6.5` et les tests ne se terminent pas).
- Si tout va bien les tests passent presque ! Le message doit vous mettre sur la voie.
