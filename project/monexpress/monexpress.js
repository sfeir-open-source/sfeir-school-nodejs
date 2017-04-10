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
  };
};

function getBody(body) {
  try {
    return JSON.parse(body);
  } catch (e) {
    return body;
  }
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
    debug('Only one server instance is supported !');
    processRequest.exit(1);
  }

  server = http.createServer((req, res) => {
    const { method, url } = req;
    debug(`[${method} ${url}] Trying to find a matching route...`);

    const matchRoute = routes.find(r => r.method === method && r.url === url);

    if (matchRoute) {
      processRequest(req, res, matchRoute.callback);
    } else {
      debug(`[${method} ${url}] Not found ! 404 !`);

      res.statusCode = 404;
      res.end('Pas trouvé !');
    }
  });

  server.listen(port, callback);
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
