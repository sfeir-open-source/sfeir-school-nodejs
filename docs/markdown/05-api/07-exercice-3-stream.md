<!-- .slide: class="exercice" -->
# Le système de fichier (avec les streams)

## Lab

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

##--##

<!-- .slide: class="exercice" -->
# Le système de fichier : Solution avec streams

### Soluce

run.js

```javascript
const fs = require('fs');
fs.mkdir('jtutu', function(err) {
  if (err) throw err;
  fs.createReadStream('./coucou.txt').pipe(fs.createWriteStream('./jtutu/coucou.txt'));
});
```