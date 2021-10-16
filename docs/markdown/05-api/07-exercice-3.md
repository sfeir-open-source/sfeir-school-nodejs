<!-- .slide: class="exercice" -->
# Le système de fichier

## Exercice

<br>

Créer un fichier run.js qui
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
# Le système de fichier : Solution

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
# Le système de fichier : Solution

## Solution

Avec async/await
<br>

run.js
```javascript
const { promises } = require('fs');
const path = require('path');
const { mkdir, readFile, writeFile } = promises

const options = { encoding: 'utf-8' };
const fromPath = path.resolve(__dirname, 'coucou.txt');
const folder = path.resolve(__dirname, 'jtutu');
const toPath = path.resolve(folder, 'coucou.txt');

(async () => {
  await mkdir(folder);
  const data = await readFile(fromPath, options);
  await writeFile(toPath, data, options);
})();
```
