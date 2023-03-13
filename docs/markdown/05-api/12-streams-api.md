# Les API: require('stream')

* Héritent aussi de `EventEmitter`
* Efficace en mémoire : pas besoin de charger de grande quantité de données en mémoire pour les traiter.
* Efficace en temps : On commence à traiter la donnée avant que tout ne soit chargé.
* Indispensables pour traiter des fichiers volumineux.

Notes:
Limites de mémoire : 2GO

https://nodejs.org/api/stream.html
<!-- .element: class="credits" -->

##--##

# Les API: require('stream')

<!-- .slide: class="with-code" -->

```javascript
fs.readFile(bigFileName, (err, buffer) => {
    if (err) {
        return console.error(err)
    }
})
```

```javascript
  const readStream = fs.createReadStream(bigFileName)
  readStream.on('data', (chunk) => {
      console.log(`Chunk is read: ${chunk.length} bytes.`)
  })
  readStream.on('error', (err) => console.error(err))
  readStream.on('close', () => {
      console.log('File is read')
  })
```

Notes:
Démo de streams : aperçu de la mémoire

##--##

<!-- .slide: class="with-code" -->

# Les API: require('stream')
## Pipe


* Les streams peuvent être câblé avec la méthode `pipe`
* Même fonctionnement qu'en Bash : `du | sort | head`
* `src.pipe(dest1).pipe(dest2)`
<br>
<br>

```javascript
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/data.txt')
  stream.pipe(res)
})
server.listen(3000)
```

##--##

<!-- .slide: -->

# Les API: require('stream')
## Les types de streams

* Readable
  * Flux de lecture 
  * `process.stdin`, `fs.createReadStream`
* Writable
  * Flux d'écriture 
  * `process.stdout`, `process.stderr`, `fs.createWriteStream`, `http.request`
* Duplex
  * Flux lecture/écriture
  * `net.createConnection`
* Transform
  * Similaire à Duplex mais la sortie est une transformation de l'entrée
  * `zlib.createGzip`

##--##

<!-- .slide: class="with-code" -->

# Les API: require('stream')
## Transform stream

```javascript
const { Transform } = require('stream')
const TransformStream = new Transform();
TransformStream._transform = (chunk, encoding, callback) => {
  TransformStream.push(chunk.toString().toUpperCase());
  callback();
}
process.stdin.pipe(TransformStream).pipe(process.stdout);
```