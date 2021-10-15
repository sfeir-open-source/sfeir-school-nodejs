<!-- .slide: class="exercice" -->
# Exercice 3

## Exercice

<br>

Créer un fichier run.js qui (en synchrone, en asynchrone, ou avec des streams !)
* Affiche le path vers le fichier coucou.txt
* Crée un dossier jtutu
* Copie le contenu du fichier coucou.txt dans un fichier du même nom sous le répertoire jtutu

Résultat attendu:
```bash
$ node run.js
/home/sfeir/nodejs/exercice3/coucou.txt
$ cat jtutu/coucou.txt
Hello, Sfeir! 
```

##==##
<!-- .slide: class="exercice" -->
# Exercice 3 : Solution

## Solution

<br>

run.js
```javascript
const fs = require('fs');
const path = require('path');

const options = {encoding: 'utf-8'};
const fromPath = path.resolve(__dirname, 'coucou.txt');
const folder = path.resolve(__dirname, 'jtutu');
const toPath = path.resolve(folder, 'coucou.txt');

console.log(fromPath);

fs.mkdir(folder, function(err) {
   if (err) throw err;

   fs.readFile(fromPath, options, (err, data) => {
       if (err) throw err;

       fs.writeFile(toPath, data, options, (err) => {
         if (err) throw err;
       })
   });
});
```

##==##
<!-- .slide: class="exercice" -->
# Exercice 3 : Solution avec streams

## Solution

<br>

run.js
```javascript
const fs = require('fs');

const readStream = fs.createReadStream('./coucou.txt');
fs.mkdir('jtutu', function(err) {
 if (err) throw err;
   readStream.on('error', function (err) {
     console.error('Please provide valid file :', err);
   });

   const writeStream = fs.createWriteStream('./jtutu/coucou.txt');
   writeStream.on('pipe', function () {
     console.log('Piping to dest');
   });
   writeStream.on('error', function (err) {
     console.error('Cannot copy to given file :', err);
   });
   readStream.pipe(writeStream);
});
```