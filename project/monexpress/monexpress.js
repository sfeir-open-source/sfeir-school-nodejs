const http = require('http');

const debug = require('debug')('monexpress');

debug('Je suis dans le programme !');

const routes = [];
let server;

module.exports = function monexpress() {
  return {
    close,
    listen,
    get,
    post,
    getServer,
  };
};

function getBody(body) {
  try {
    return JSON.parse(body);
  } catch (e) {
    return body;
  }
}

function getServer() {
  return server;
}

function processRequest(req, res, callback) {
  let body = [];
  req
    .on('error', (err) => {
      debug('Error !', err);
      res.statusCode = 500;
      res.end('Oups !');
    })
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = getBody(Buffer.concat(body).toString());
      callback(req, res, body);
    });
}

function listen(port = 9000, callback = () => {}) {
  if (server !== undefined) {
    debug('Une seule instance de serveur est supportée !');
    process.exit(1);
  }

  server = http.createServer((req, res) => {
    const { method, url } = req;
    debug(`[${method} ${url}] Recherche de la route correspondante...`);

    const matchRoute = routes.find(r => r.method === method && r.url === url);

    if (matchRoute) {
      processRequest(req, res, matchRoute.callback);
    } else {
      debug(`[${method} ${url}] Pas trouvé ! 404 !`);

      res.statusCode = 404;
      res.end('Pas trouvé !');
    }
  });
  server.listen(port, callback);
  server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      debug('Ce port est déjà utilisé');
    } else {
      throw e;
    }
  });
}

function get(url, callback) {
  routes.push({
    method: 'GET',
    url,
    callback,
  });
}

function post(url, callback) {
  routes.push({
    method: 'POST',
    url,
    callback,
  });
}

function close(callback) {
  if (server) {
    server.close(() => {
      if (callback) {
        callback();
      }

      server = undefined;
    });
  }
}
