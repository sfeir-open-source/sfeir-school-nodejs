# npm : les scripts

* Propriété **scripts** dans le fichier package.json
* On peut exécuter chaque script avec `npm run [nom du script]`
* Certains noms de scripts sont traités à part: **start**, **test**…
    * Pas besoin de `npm run` pour exécuter ces scripts: `npm` suffit.
    * npm start n’a pas besoin d’être défini (valeur par défaut: node ./server.js).
    * Avec un cycle: **pre**start, **post**start
    * `npm test` traite les erreurs avec un autre niveau de verbosité, idéal pour les tests
    * NB: preinstall, install, postinstall (dans une dépendance) peuvent être exploités comme une faille de sécurité
* Chaque script peut exécuter les binaires des modules installés comme s’il étaient dans le PATH :  ./node_modules/mocha/bin/mocha -> mocha
* On peut les orchestrer avec [npm-run-all](https://www.npmjs.com/package/npm-run-all)