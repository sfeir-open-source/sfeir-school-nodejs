# middlewares Express

Middleware allows the chaining of several functions

Application case :
* Log of all requests
* Metrics
* Authentication
* Error management
* Routing

##==##

# middlewares Express


* 2 types of middleware:
  * “classic” middleware: `function (req, res, next)`
  * error middleware: `function (err, req, res, next)` called if an error is reported by a previous middleware
<br>

* `next` : function allowing the chaining of middleware. We call the following middleware with`next()`, and potentially the next error middleware with `next(err)`

##==##
<!-- .slide: class="full-center" -->

# middlewares Express

![full-width](./assets/images/express_middlewares.svg)
