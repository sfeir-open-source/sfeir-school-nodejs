const http = require('http');

const server = http.createServer((req, res) => {
  res.end('coucou.js');
});

 server.listen(9001);
 module.exports = server
