# Les API: require(‘child_process’)


* Exécuter un processus enfant
    * `child_process.spawn()` : crée un sous-process
    * `child_process.exec()` : éxécute une commande dans un shell
    * `child_process.execFile()` : éxécute un binaire
    * `child_process.fork()` : spawn un nouveau process Node.js avec une interface de communication
* Le processus enfant peut communiquer avec son parent
    * Events (héritent de `EventEmitter`) `message`, `data`, `close `
    * `child.send(...)` fork uniquement
* Accès à stdout, stderr.

<br>

* Certaines fonctions ont un mode Synchrone !

<br>

https://nodejs.org/api/child_process.html
<!-- .element: class="credits" -->

Notes:
- spawn préférable pour les long process. Crée une interface de communication par stream avec le process enfant

##--##
<!-- .slide: class="with-code" -->

# Les API: require(‘child_process’)

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

# Les API: require(‘child_process’)


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