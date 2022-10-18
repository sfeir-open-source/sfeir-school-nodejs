<!-- .slide: class="exercice" -->

# Modules

## Lab

<b>exercices/02_module</b>

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

## Lab

<b>exercices/02_module-solution</b>

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
