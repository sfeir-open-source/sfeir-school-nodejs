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