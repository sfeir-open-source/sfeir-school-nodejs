# Bonnes pratiques : les dépendances

* `package-lock.json` est généré automatiquement et ajouté au contrôle de source
* [npm outdated](https://docs.npmjs.com/cli/outdated) pour afficher les dépendances qui ne sont pas à jour
* [npm update](https://docs.npmjs.com/cli/update) pour mettre à jour les dépendances
* [npm-check](https://www.npmjs.com/package/npm-check) pour une mise à jour intéractive `npm-check -u`
* [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) pour tout mettre à jour `ncu -u`

Notes:
- package-lock.json depuis la version 5 remplace le shrinkwrap.
- package-lock.json présent dans le contrôle de source
- npm install : meme version que package-lock.json
- npm-shrinkwrap.json : présent avec le code publié sur npm