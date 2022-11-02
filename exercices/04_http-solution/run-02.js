const http = require('http');

const server = http.createServer((req, res) => {
  res.end(`Kikou ! you have done a ${req.method} on ${req.url} !`);
});

server.listen(9001);
module.exports = server