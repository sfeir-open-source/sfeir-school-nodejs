# Les API: require(‘path’)

* `path.dirname(),` `path.extname()`: infos sur le chemin de fichier
* `path.format(),` `path.parse()`: chemin ⇔ objet
* `path.sep`: séparateur système (dépend de l’environnement)
* `path.join()`, `path.resolve()`: pour créer des chemins

##--##

<!-- .element: class="with-code" -->


# Les API: require(‘path’)

* POSIX

```javascript
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
```

* Windows

```javascript
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
" C:\      path\dir   \ file  .txt "
└──────┴──────────────┴──────┴─────┘
```


https://nodejs.org/api/path.html
<!-- .element: class="credits" -->