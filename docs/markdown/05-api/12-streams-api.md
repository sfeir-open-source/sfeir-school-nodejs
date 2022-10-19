# API: require('stream')

* Also inherit from `EventEmitter`
* Memory efficient: no need to load large amounts of data into memory to process them.
* Time efficient: We start processing the data before everything is loaded.
* Indispensable for processing large files.

Notes:
Limits memory : 2GO

https://nodejs.org/api/stream.html
<!-- .element: class="credits" -->

##--##

# API: require('stream')

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
Démo de streams : show the memory

##--##

<!-- .slide: class="with-code" -->

# API: require('stream')
## Pipe

* Streams can be piped with the `pipe` method
* Same operation as in Bash: `du | fate | head`
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

# API: require('stream')
## Types of streams

* Readable
  * Reading stream 
  * `process.stdin`, `fs.createReadStream`
* Writable
  * Writing flow
  * `process.stdout`, `process.stderr`, `fs.createWriteStream`, `http.request`
* Duplex
  * Read/Write Streams
  * `net.createConnection`
* Transform
  * Similar to Duplex but the output is a transformation of the input
  * `zlib.createGzip`

##--##

<!-- .slide: class="with-code" -->

# API: require('stream')
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
