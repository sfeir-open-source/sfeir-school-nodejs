<!-- .slide: class="exercice with-code" -->
# Créer un script

## Lab

<br>

1. Créer un fichier `run.js` un script qui écrit “Hello, World!”, dans le dossier `01_hello`
2. Lancer avec 
```bash
$ node run.js
```
3. Lancer les tests avec
```bash
$ npm test hello
```

Notes:
Montrer le test automatisé. Introduire le TDD

##==##

<!-- .slide: class="exercice with-code " -->
## Lab

## Solution

<br>

run.js
```javascript
console.log('Hello, World!');
```

##==##

# Protip

* [nodemon](https://nodemon.io/)
```bash
$ npm install -g nodemon
```
* Comment on reload ?
```bash
$ nodemon monfichier.js
```
```bash
$ rs
```
* ⚠ c’est pour le dev !

Notes:
Montrer pour les tests