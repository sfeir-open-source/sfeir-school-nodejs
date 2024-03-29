<!-- .slide: class="exercice" -->
# Serveur HTTP (avec les streams)

## Lab

Créer un fichier run-04.js pour: 
* Renvoyer le logo Google: 

<a style="font-size: 0.6em;" href="https://www.google.fr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png">https://www.google.fr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png</a>

en réponse à un appel GET sur /google
* Récupérer l’image en https et la streamer vers la réponse


Résultat attendu:

```bash
$ node run.js
```

##==##
<!-- .slide: class="exercice with-code max-height" -->
# Serveur HTTP : Solution avec les streams

## Lab

run-04.js
```javascript []
const http = require('http');
const https = require('https');
const url = require('url');

const server = http.createServer((req, res) => {
 if (req.url = '/google) {
   const logo = 'https://www.google.fr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
   https.get(logo, (res2) => {
     res2.on('data', (chunk) => { res.write(chunk) });
     res2.on('end', () => { res.end() });
   });
 } else if (req.url === '/404') {
   res.statusCode = 404;
   res.end('Pas trouvé !')
 } else {
   res.end(`Kikou ! Tu as fait un ${req.method} sur ${req.url} !`);
 }
});
server.listen(9000);
```

##==##
<!-- .slide: class="exercice with-code max-height" -->
# Serveur HTTP : Solution avec les streams

## Lab

run-04b.js
```javascript []
const http = require('http');
const https = require('https');

const server = http.createServer((req, res) => {
 if (req.url = '/google) {
   const logo = 
      'https://www.google.fr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

   https.get(logo, logoResponse => logoResponse.pipe(res));
 } else if (req.url === '/404') {
   res.statusCode = 404;
   res.end('Pas trouvé !')
 } else {
   res.end(`Kikou ! Tu as fait un ${req.method} sur ${req.url} !`);
 }
});

server.listen(9000);
```