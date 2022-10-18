<!-- .slide: class="exercice" -->

# Create a script

## Lab

<b>exercices/01_hello</b>

1. Complete the file `run.js`, the script must write “Hello, World!”, in the folder `01_hello`
2. Launch with

```bash
$ node run.js
```

3. Launch the tests with

```bash
$ npm test hello
```

Notes:
Montrer le test automatisé. Introduire le TDD

##==##

<!-- .slide: class="exercice" -->

# Create a script : Solution

## Lab

<b>exercices/01_hello-solution</b>

run.js

```javascript
console.log("Hello, World!");
```

##==##

# Protip

- [nodemon](https://nodemon.io/)

```bash
$ npm install -g nodemon
```

- automatic reload when file saved

```bash
$ nodemon myfile.js
```

forced reload

```bash
$ rs
```

- ⚠ it's for dev only !

Notes:
Montrer pour les tests
