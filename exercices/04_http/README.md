The goal of these exercises is to create a server that listens to port 9001, read incoming requests, form responses.
---

## Exercice 1

Create a run-01.js file that:
* Create an http server
* Listening on port 9001
* Responds 'coucou.js' for all requests

Tips:

- Use `http.createServer`

## Exercice 2

Create a run-02.js file for:
* Display a text that includes the method and the url called

## Exercice 3

Create a run-03.js file for:
* Return a 404 when calling the url /404

Tips:

- we can put a `statusCode` on the response

## test

launch test with

```
npm test -- 04_http/test.spec.js
```
