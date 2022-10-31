<!-- .slide: class="exercice" -->

# HTTP server. Exercice 1

## Lab

<b>exercices/04_http</b>

Create a run-01.js file that:

- Create an http server
- Listening on port 9001
- Responds 'coucou.js' for all requests

Protip: use [httpie](https://github.com/jkbrzt/httpie) or [Postman](https://www.postman.com/)

##==##

<!-- .slide: class="exercice" -->

# HTTP server. Exercice 1 : Solution

## Lab

<b>exercices/04_http-solution/run-01.js</b>

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("coucou.js");
});

server.listen(9000);
```

##==##

<!-- .slide: class="exercice" -->

# HTTP server. Exercice 2

## Lab

<b>exercices/04_http</b>

Create a run-02.js file for:

- Display a text that includes the method and the url called

expected result:

```bash
$ node run-02.js
```

```bash
$ http POST localhost:9000/pouet
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 39
Date: Tue, 14 Jun 2022 19:56:29 GMT

Kikou !you have done a POST on /pouet !
```

##==##

<!-- .slide: class="exercice" -->

# HTTP server. Exercice 2 : Solution

## Lab

<b>exercices/04_http-solution/run-02.js</b>

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.end(`Kikou ! you have done a ${req.method} on ${req.url} !`);
});

server.listen(9000);
```

##==##

<!-- .slide: class="exercice" -->

# HTTP server. Exercice 3

## Lab

<b>exercices/04_http</b>

Create a run-03.js file for:

- Return a 404 when calling the url /404

expected result:

```bash
$ node run-03.js
```

```bash
$ http POST localhost:9000/404
HTTP/1.1 404 Not Found
Connection: keep-alive
Content-Length: 13
Date: Tue, 14 Jun 2022 19:58:12 GMT

Not Found !
```

##==##

<!-- .slide: class="exercice" -->

# HTTP server. Exercice 3 : Solution

## Lab

<b>exercices/04_http-solution/run-03.js</b>

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/404") {
    res.statusCode = 404;
    res.end("not found !");
  } else {
    res.end(`Kikou ! you have a ${req.method} on ${req.url} !`);
  }
});

server.listen(9000);
```
