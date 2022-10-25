<!-- .slide: class="transition red" -->

# Asynchronicity

<!-- .slide: class="with-code" -->

# The callback hell

The problem can take many forms. The best known :

```javascript
a(function (resultA) {
  b(resultA, function (resultB) {
    c(resultB, function (resultC) {
      d(resultC, function (resultD) {
        e(resultD, function (resultE) {
          console.log(resultE);
        });
      });
    });
  });
});
```

##==##

<!-- .slide: class="with-code" -->

# The callback hell

But the real problem here is not the nesting. We can indeed flatten the code:

```javascript
const cb1 = function (x) {
  b(x, cb2);
};
const cb2 = function (x) {
  c(x, cb3);
}
const cb3 = function (x) {
  d(x, cb4);
};
const cb4 = function (x) {
  e(x, cb5);
};
const cb5 = function (x) {
  console.log(x);
};
a(cb1);
```

##==##

<!-- .slide: class="with-code" -->

# The callback hell

There are then several problems :
- Functions that receive callbacks cannot be trusted (multiple callback calls, no call, etc.)
- The order of execution is difficult to follow
- You can't just handle errors that happen in a, b, c, d, or e.

##==##

<!-- .slide -->

# Promises

It's a "way" to handle asynchronous processing with a single API using callbacks!

![h-700 center](./assets/images/Promises_00.png) <!-- .element: class="fragment" -->

Notes:
explanation of the event loop
Present since ES2015

##==##

<!-- .slide: class="with-code" -->

# Promises

```javascript
let p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('ok');
  }, 1000);
});

p.then(value => console.log(value));
```

![center h-500](./assets/images/Promises_01.png) <!-- .element: class="fragment" -->

Notes:
Draw a parallel with the problem of confidence in the function calling callbacks

##==##

<!-- .slide: class="with-code" -->

# Promises

Going back to the hell callback example, we can use promises!


```javascript
a(function (resultA) {
  b(resultA, function (resultB) {
    c(resultB, function (resultC) {
      d(resultC, function (resultD) {
        e(resultD, function (resultE) {
          console.log(resultE);
        });
      });
    });
  });
});
```

```javascript
a()
  .then(resultA => b(resultA))
  .then(resultB => c(resultB))
  .then(resultC => d(resultC))
  .then(resultD => e(resultD))
  .then(resultE => console.log(resultE));
```

Notes:
Draw a parallel with the execution order problem

##==##

<!-- .slide: class="with-code" -->

# Promises

Going back to the hell callback example, we can use promises!

```javascript
a()
  .then(resultA => b(resultA))
  .then(resultB => c(resultB))
  .then(resultC => d(resultC))
  .then(resultD => e(resultD))
  .then(resultE => console.log(resultE));
```

```javascript
function a() {
    return new Promise(...);
}

function b(value) {
    return new Promise(...);
}

etc ...
```

##==##
<!-- .slide: class="with-code" -->

# Promises

We can do even better!

```javascript
a()
  .then(resultA => b(resultA))
  .then(resultB => c(resultB))
  .then(resultC => d(resultC))
  .then(resultD => e(resultD))
  .then(resultE => console.log(resultE));
```

```javascript
a()
  .then(b)
  .then(c)
  .then(d)
  .then(e)
  .then(console.log);
```

##==##

<!-- .slide -->

# Promises

![h-400 center](./assets/images/Promises_03_eng.png)


https://bevacqua.github.io/promisees
<!-- .element: class="credits" -->

##==##

<!-- .slide -->

# Promises

We summarize

- ** A promise always returns a promise !**<br/><br/>

- If a promise is **resolved**, the resolved value goes into the next **then()**<br/><br/>

- If a promise is **rejected**, the rejected value goes into the next **catch()** (or in the then with the function as second parameter)<br/><br/>

Notes:
/!\ a catch since being followed by a then

Now there is the .finally() which allows you to execute something at the end whether you have a catch or a then

Draw a parallel with the problem of error handling

##==##

<!-- .slide: class="with-code" -->

# Promises

<div class="fragment" data-fragment-index="1">
Promise API

<br/>

Create a new promise

```javascript
new Promise(function(resolveFn, rejectFn) {
  // Your asynchronous code
});
```
</div>

<br/>

<div class="fragment" data-fragment-index="2">
Create a new promise from a value or another promise

```javascript
Promise.resolve(/* value or promise */) // Returns a resolved Promise
Promise.reject(/* value or promise */) //Returns a rejected promise

// Exemple
Promise.resolve(4).then(value => console.log(value)) // 4
Promise.resolve(Promise.resolve('toto')).then(value => console.log(value)) // 'toto'
```
</div>

##==##

<!-- .slide: class="with-code" -->

# Promises

<div class="fragment" data-fragment-index="1">
Promise API

Wait for multiple promises and merge them into one

```javascript
Promise.all([promises...]) // Returns a promise

// Example
Promise.all([Promise.resolve(4), Promise.resolve('toto')])
.then(values => console.log(values));
// [4, 'toto']
```
</div>

<div class="fragment" data-fragment-index="2">
Wait for several promises, first come => first served

```javascript
Promise.race([promises...]) // Returns a promise

// Exemple
Promise.race([Promise.resolve(4), Promise.resolve('toto')])
.then(value => console.log(value));
// 4
```
</div>

##==##

<!-- .slide: class="with-code" -->

# Promises

"Ok ok ok, I want to create a promise, how do I do it?"

```javascript
function asyncFn(callback) {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://www.wikipedia.org/', false);
  request.onreadystatechange = event => {
    if (request.readyState == 4) return;
    if (request.status == 200) callback(null, request.responseText);
    else callback('Error while loading the page.\n');
  };
}

asyncFn(function callback(err, value) {
    console.log(err ? err : value);
});
```

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
function asyncFn() {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://www.wikipedia.org/', false);
    request.onreadystatechange = event => {
      if (request.readyState == 4) {
        if (request.status == 200) resolve(request.responseText);
        else reject('Error while loading the page.\n');
      }
    };
  });
}

asyncFn()
  .then(result => console.log(result))
  .catch(error => console.error(error));
```
