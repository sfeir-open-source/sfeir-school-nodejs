# Les API: require(‘fs’)

* fs.access(), fs.stat(): pour vérifier l’accès à un fichier
* fs.createReadStream(), fs.createWriteStream(): pour faire des streams (on voit ça plus tard)
* fs.mkdir(), fs.rmdir()
* fs.read…(), fs.write…()

La plupart des fonctions ont une alternative Synchrone !

Promises: fs.promises.readFile(), fs.promises.open(), etc.

https://nodejs.org/dist/latest-v6.x/docs/api/fs.html