<!-- .slide: class="exercice" -->

# Les modules

## Lab

In exercices/02_module

1. Create a hello.js file that exports a function with a name argument
2. Create a run.js file that imports the hello.js module and calls the function passing 'Sfeir' as an argument.

Expected result:

```bash
$ node run.js
Hello, Sfeir!
```

##==##

<!-- .slide: class="exercice" -->

# Modules : Solution

## Soluce

<br>

hello.js

```javascript
module.exports = function (nom) {
  console.log(`Hello, ${nom}!`);
};
```

run.js

```javascript
const hello = require("./hello.js");
hello("Sfeir");
```
