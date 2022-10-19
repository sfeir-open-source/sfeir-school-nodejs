# API: module

* The module object represents the current module.
* Modules are hidden
  * the cache keys are the module paths
  * Watch out for npm!
* module:
  * module.require: allows to load a module. It is synchronous! (alias: require)
  * module.exports: contains what we want to expose in the module (alias: exports)

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

# API: module

* CommonJS (CJS)
    * Use `require()` and `module.exports`
    * CJS is the default mode
    * Extension .js or .cjs
    * Import synchronous
* import ES6 (MJS) (stable since v13.2.0)
    * Use `import` and `export`
    * .mjs extension ("type": "module" in package.json)
    * Import asynchronous


Notes:
.MJS file

- mjs an extension for EcmaScript modules
- An MJS file is a source code file containing an ES Module (ECMAScript Module) for use with a Node.js application.
- MJS files are written in JavaScript, and may also use the .JS extension outside of the Node.js context.
- ES Modules allow web and application developers to organize code into smaller reusable components.

##--##
<!-- .element: class="with-code" -->

# API: module

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
