# npm : les commandes

* `npm --help` pour afficher les commandes disponibles
* `npm --version` pour afficher la version courante
* `npm init` pour créer un fichier "package.json"
* `npm install <package(@version)>` pour installer un module, et on peut ajouter:
    * `--save` pour sauver le nom et la version dans les "dependencies"
    * `--save-dev` pour sauver le nom et la version dans les "devDependencies"
* `npm uninstall <package(@version)>` pour supprimer un module (avec les mêmes options)
* `npm run <nom du script>` pour lancer un script…
* `npm link` et `npm unlink`
* `npm audit` pour lancer un audit de sécurité (npm@6)
* `npm update <package(@version)>` pour mettre à jour un package
* On peut ajouter `--verbose` pour avoir des logs !