<!-- .slide: class="with-code" -->

# Functions

* A function is an object.
* A function can return a function.
* A function can be passed as an argument to another function

```
function factory () {
  return function doSomething () {}
}
function wrapper(f) {
  f()
}
```

* There are also arrow functions also called lambda.

```
const arrowFunction = () => {}
```
