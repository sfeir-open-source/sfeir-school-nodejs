# API: require(‘path’)

* `path.dirname(),` `path.extname()`: file path info
* `path.format(),` `path.parse()`: path ⇔ objet
* `path.sep`: system separator (depends on environment)
* `path.join()`, `path.resolve()`: to create paths

##--##

<!-- .element: class="with-code" -->


# API: require(‘path’)

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
