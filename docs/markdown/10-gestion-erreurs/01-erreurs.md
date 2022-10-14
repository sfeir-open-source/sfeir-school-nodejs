<!-- .slide: class="with-code" -->
# Exceptions

An exception is raised with `throw`.

```javascript
throw new Error('Something bad happened')
```

or

```javascript
class SomethingBadError extends Error {
  //...
}
throw new SomethingBadError()
```

We use `try/catch` to handle an exception.

Notes:
Best practice : look to error code

##--##

# Exceptions


If an exception is not handled, the program stops and process triggers the event `uncaughtException`.

```javascript
process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err)
  process.exit(1) //doit être différent de 0
})
```

##--##

# Asynchronous Exceptions

* We process rejected promises with the method `catch`.
* The `catch` method returns a promise and therefore used in chaining promises.
* When a rejected promise is not processed, process fires the event `unhandledRejection`
 

```javascript
doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => console.error(err))
```

```javascript
doSomething1()
  .catch(function(error) { handleError(error); })
  .then(function(value) { throw new Error("zut !"); }))
  .catch(err => console.error(err))
```

Notes:
- Promises.reject()
- UnhandledPromiseRejectionWarning until Node.js 15
