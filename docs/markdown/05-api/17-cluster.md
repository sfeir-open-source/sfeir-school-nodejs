<!-- .slide: class="with-code" -->
# API: require('cluster')

* To take advantage of multi-core architectures, `cluster` makes it easy to create child processes.
* Use child_process.fork
* The worker can communicate with the parent via IPC and pass server handles back and forth.

##--##

<!-- .slide: class="with-code" -->

# API: require('cluster')

```javascript
import cluster from 'cluster';
import http from 'http';
import { cpus } from 'os';
import process from 'process';

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
}
// ... go to part 2
```

https://nodejs.org/api/cluster.html
<!-- .element: class="credits" -->

##--##

<!-- .slide: class="with-code" -->

# API: require('cluster')
Part 2

```javascript

if (!cluster.isPrimary) {
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
