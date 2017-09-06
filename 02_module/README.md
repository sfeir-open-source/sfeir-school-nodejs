Écrivez un programme qui dit « Hello, [VAR] » dans la console, en décomposant votre programme en un module qui peut prendre n'importe quelle valeur en paramètre pour [VAR].

---

## CONSEILS

Créez un nouveau module en créant simplement un nouveau fichier qui contiendrait votre fonction.
Pour importer un fichier situé dans le même répertoire, vous pouvez utiliser :

```js
  // program.js
  const monImport = require('./importFile.js');
```

Afin que le fichier soit possible à exporter, il doit contenir :

```js
  // importFile.js
  module.exports = function() {
    // Code à exporter
  };
```
