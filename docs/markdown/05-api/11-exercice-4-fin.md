<!-- .slide: class="exercice" -->

# HTTP server (streams)

## Lab

<b>exercices/07_http_stream</b>

Create a run-04.js file for:

- Resend Google logo: [image link](https://www.google.fr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

In response to a GET call on /google

- Get the image in https and stream it to the response

<br>

Expected result:

```bash
$ node run.js
```

##==##

<!-- .slide: class="exercice with-code" -->

# HTTP server (streams) : Solution

## Lab

<b>exercices/07_http_stream-solution/run-04.js</b>

```javascript
const http = require("http");
const https = require("https");
const url = require("url");

const server = http.createServer((req, res) => {
  if ((req.url = "/google")) {
    // ... see the complete code in the solution file
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

<!-- .slide: class="exercice with-code" -->

# HTTP server (streams) : Solution

## Lab

<b>exercices/07_http_stream-solution/run-04b.js</b>

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
