<!-- .slide: class="exercice" -->

# HTTP server (using streams)

## Lab

<br>

Create a run-04.js file for:

- Resend Google logo:

https://www.google.fr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png

In response to a GET call on /google

- Get the image in https and stream it to the response

<br>

Expected result:

```bash
$ node run.js
```

##==##

<!-- .slide: class="exercice" -->

# HTTP server (using streams)

## Soluce

<br>

run-04.js

```javascript
const http = require("http");
const https = require("https");
const url = require("url");

const server = http.createServer((req, res) => {
  if ((req.url = "/google")) {
    const logo =
      "https://www.google.fr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    https.get(logo, (res2) => {
      res2.on("data", (chunk) => {
        res.write(chunk);
      });
      res2.on("end", () => {
        res.end();
      });
    });
  } else if (req.url === "/404") {
    res.statusCode = 404;
    res.end("Not found !");
  } else {
    res.end(`Kikou ! you have a ${req.method} on ${req.url} !`);
  }
});

server.listen(9000);
```

##==##

<!-- .slide: class="exercice" -->

# HTTP server (using streams)

## Soluce

<br>

run-04.js

```javascript
const http = require("http");
const https = require("https");

const server = http.createServer((req, res) => {
  if ((req.url = "/google")) {
    const logo =
      "https://www.google.fr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    https.get(logo, (logoResponse) => logoResponse.pipe(res));
  } else if (req.url === "/404") {
    res.statusCode = 404;
    res.end("Not found !");
  } else {
    res.end(`Kikou ! you have a ${req.method} on ${req.url} !`);
  }
});

server.listen(9000);
```
