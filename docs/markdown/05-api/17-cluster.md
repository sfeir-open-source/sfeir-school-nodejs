<!-- .slide: class="with-code" -->
# Les API: require('cluster')

* Pour profiter des architectures multi-coeur, `cluster` facilite la création de processus enfants.
* Utilise child_process.fork

```javascript
const cluster = require('cluster');
const http = require('http');
const { cpus } = require('os');
const process = require('process');

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```

https://nodejs.org/api/cluster.html
<!-- .element: class="credits" -->