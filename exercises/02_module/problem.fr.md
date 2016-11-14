Écrivez un programme qui dit « Hello, [VAR] » dans la console, en décomposant votre programme en un module qui peut prendre n'importe quelle valeur en paramètre pour [VAR].

----------------------------------------------------------------------

## CONSEILS

Créez un nouveau module en créant simplement un nouveau fichier qui contiendrait votre fonction.
Pour importer un fichier situé dans le même répertoire, vous pouvez utiliser :

```js
  // program.js
  const module = require('./module.js');
```

Afin que le fichier soit possible à exporter, il doit contenir :

```js
  // module.js
  module.exports = function() {
    // Code à exporter
  };
```

Quand vous êtes prêt-e, vous n’avez plus qu’à exécuter :

```sh
$ {appname} verify program.js
```

pour avancer.  Votre programme sera testé, un rapport sera généré, et la
leçon sera marquée comme faite, si vous avez réussi.

----------------------------------------------------------------------
