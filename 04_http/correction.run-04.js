const http = require('http');
const https = require('https');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.url === '/google') {
    const logo =
      'https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
    const options = url.parse(logo);

    res.setHeader('Content-Type', 'image/png');

    https.get(options, (res2) => {
      res2.on('data', function (chunk) {
        res.write(chunk);
      });

      res2.on('end', function() {
        res.end();
      })
    });
  } else if (req.url === '/404') {
    res.statusCode = 404;
    res.end('Pas trouvé !')
  } else {
    res.end(`Kikou ! Tu as fait un ${req.method} sur ${req.url} !`);
  }
});

server.listen(9000);
