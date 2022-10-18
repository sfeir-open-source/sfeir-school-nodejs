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

* [Winston](https://github.com/winstonjs/winston) : the most popular
* [Log4js](https://github.com/stritti/log4js) : similar to log4j for Java
* [Pino](https://github.com/pinojs/pino) : speed
* [node-bunyan](https://github.com/trentm/node-bunyan) : out JSON
* [Morgan](https://github.com/expressjs/morgan) : middleware HTTP Request
* [Roar](https://github.com/gajus/roarr) : compatible Node.js et browser

https://www.npmtrends.com/log4js-vs-morgan-vs-pino-vs-winston-vs-bunyan
<!-- .element: class="credits" -->
