const http = require('http');

const server = http.createServer((req, res) => {
  res.end(`Kikou ! Tu as fait un ${req.method} sur ${req.url} !`);
});

server.listen(9001);
module.exports = server