const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/404') {
    res.statusCode = 404;
    res.end('Pas trouvé !')
  } else {
    res.end(`Kikou ! Tu as fait un ${req.method} sur ${req.url} !`);
  }
});

server.listen(9000);
module.exports = server