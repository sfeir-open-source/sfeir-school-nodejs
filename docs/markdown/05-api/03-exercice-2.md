<!-- .slide: class="exercice" -->
# Exercice 2

## Exercice

<br>

1. Créer un fichier hello.js qui exporte une fonction avec un argument nom
2. Créer un fichier run.js qui importe le module hello.js et qui appelle la fonction en passant ‘Sfeir’ comme argument.

<br>

Résultat attendu:

```bash
$ node run.js
Hello, Sfeir!
```

##==##
<!-- .slide: class="exercice" -->
# Exercice 2 : Solution

## Solution

<br>

hello.js
```javascript
module.exports = function(nom) {
 console.log(`Hello, ${nom}!`);
};
```

run.js
```javascript
const hello = require('./hello.js');
hello('Sfeir');
```