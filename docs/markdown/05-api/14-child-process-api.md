# API: require(‘child_process’)

* Run child process
    * `child_process.spawn()` : spawns a sub-process
    * `child_process.exec()` : execute a command in a shell
    * `child_process.execFile()` : execute a binary
    * `child_process.fork()` : spawn a new Node.js process with a communication interface
* Child process can communicate with its parent
    * Events (inherit from`EventEmitter`) `message`, `data`, `close `
    * `child.send(...)` fork only
* Access to stdout, stderr.

<br>

* Some functions have a Synchronous mode!

<br>

https://nodejs.org/api/child_process.html
<!-- .element: class="credits" -->

Notes:
- spawn preferable for long processes. Creates a communication interface by stream with the child process

##--##
<!-- .slide: class="with-code" -->

# API: require(‘child_process’)

```javascript
const { exec } = require('child_process');
exec('cat *.js missing_file | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
```

##--##

<!-- .slide: class="with-code" -->

# API: require(‘child_process’)


```javascript
const { spawn } = require('child_process');
const child = spawn('pwd');
child.on('exit', function (code) {
  console.log(`process exited with code ${code}`);
});
child.stdout.on('data', function (data) {
  console.error(`child stdout:\n${data}`);
});
child.stderr.on('data', function (data) {
  console.error(`child stderr:\n${data}`);
});
```
