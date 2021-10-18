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

https://nodejs.org/dist/latest-v6.x/docs/api/modules.html