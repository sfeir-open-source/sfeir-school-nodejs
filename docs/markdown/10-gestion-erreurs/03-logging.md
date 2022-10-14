# Logging

* We log with `console.log` on standard output (stdout)
* We log with `console.error` on the error output  (stderr)

Tip for displaying an object in the console:

```javascript
console.log(JSON.stringify(obj, null, 2))
```

##--##

# Logging

Some libraries for log management

* Winston : the most popular
* Log4js : similar to log4j for Java
* Pino : speed
* Bunyan : out JSON
* Morgan : middleware HTTP Request
* Roar : compatible Node.js et browser

https://www.npmtrends.com/log4js-vs-morgan-vs-pino-vs-winston-vs-bunyan
<!-- .element: class="credits" -->
