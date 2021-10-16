<!-- .slide: class="exercice" -->
# Serveur HTTP. Exercice 1

## Exercice

<br>

Créer un fichier run-01.js qui:
* Crée un serveur http
* Écoute sur le port 9000
* Répond ‘coucou.js’ pour toutes les requêtes

Protip: utiliser https://github.com/jkbrzt/httpie !

Résultat attendu:

```bash
$ node run-01.js
```

```bash
$ http localhost:9000
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 9
Date: Tue, 14 Jun 2016 19:49:44 GMT

coucou.js
```

##==##
<!-- .slide: class="exercice" -->
# Serveur HTTP. Exercice 1 : Solution

## Solution

<br>

run-01.js

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
 res.end('coucou.js');
});

server.listen(9000);
```

##==##
<!-- .slide: class="exercice" -->
# Serveur HTTP. Exercice 2

## Exercice

<br>

Créer un fichier run-02.js pour:
* Afficher un texte qui reprend la méthode et l’url appelée

Résultat attendu:

```bash
$ node run-02.js
```

```bash
$ http POST localhost:9000/pouet                                                            
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 39
Date: Tue, 14 Jun 2016 19:56:29 GMT

Kikou ! Tu as fait un POST sur /pouet !
```

##==##
<!-- .slide: class="exercice" -->
# Serveur HTTP. Exercice 2 : Solution

## Solution

<br>

run-02.js
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
 res.end(`Kikou ! Tu as fait un ${req.method} sur ${req.url} !`);
});

server.listen(9000);
```

##==##
<!-- .slide: class="exercice" -->
# Serveur HTTP. Exercice 3

## Exercice

<br>

Créer un fichier run-03.js pour:
* Renvoyer une 404 quand on appelle l’url /404

Résultat attendu:

```bash
$ node run-03.js
```

```bash
$ http POST localhost:9000/404  
HTTP/1.1 404 Not Found
Connection: keep-alive
Content-Length: 13
Date: Tue, 14 Jun 2016 19:58:12 GMT

Pas trouvé !
```

##==##
<!-- .slide: class="exercice" -->
# Serveur HTTP. Exercice 3 : Solution

## Solution

<br>

run-03.js
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
 if (req.url === '/404') {
   res.statusCode = 404;
   res.end('Pas trouvé !')
 } else {
   res.end(`Kikou ! Tu as fait un ${req.method} sur ${req.url} !`);
 }
});

server.listen(9000);
```