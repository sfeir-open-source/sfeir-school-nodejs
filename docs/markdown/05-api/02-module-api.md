# Les API: module

* L’objet module représente le module courant.
* Les modules sont cachés
    * les clefs du cache sont les path des modules
    * Attention à npm !
* module:
    * module.require: permet de charger un module. Il est synchrone ! (alias: require)
    * module.exports: contient ce que l'on veut exposer dans le module (alias: exports)

```bash
require(X) from module at path Y
1. If X is a core module,
    a. return the core module
    b. STOP
2. If X begins with './' or '/' or '../'
    a. LOAD_AS_FILE(Y + X)
    b. LOAD_AS_DIRECTORY(Y + X)
3. LOAD_NODE_MODULES(X, dirname(Y))
4. THROW "not found"
```

https://nodejs.org/docs/latest/api/modules.html
<!-- .element: class="credits" -->

Notes:
- npm : packages global
- recherche recursive

##--##

# Les API: module

* CommonJS (CJS)
    * Utilise `require()` et `module.exports`
    * CJS est le mode par défaut
    * Extension .js ou .cjs
    * Import synchrone
* import ES6 (MJS) (stable depuis v13.2.0)
    * Utilise `import` et `export`
    * Extension .mjs ("type": "module" dans package.json)
    * Import asynchrone

##--##
<!-- .element: class="with-code" -->

# Les API: module

```javascript
// @filename: util.cjs
module.exports.sum = (x, y) => x + y;
// @filename: main.cjs
const {sum} = require('./util.cjs');
console.log(sum(3, 5));
```

```javascript
// @filename: util.mjs
export const sum = (x, y) => x + y;
// @filename: main.mjs
import {sum} from './util.mjs'
console.log(sum(3, 5));
```

https://nodejs.org/api/modules.html |
https://nodejs.org/api/esm.html
<!-- .element: class="credits" -->