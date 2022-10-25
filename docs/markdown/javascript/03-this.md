<!-- .slide: class="with-code" -->
# This

## **this** is often misunderstood

* By default `this` refers to the `global` object (except in strict mode)

```javascript
function fn() {
    console.log(this === global)
}
fn()

function fnStrict() {
    'use strict'
    console.log(this === global)
    console.log(this)
}
fnStrict()
```

##--##

<!-- .slide: class="with-code" -->
# This

 * `this` refers to an instance `new`.
 * The constructor Personne() defined `this` like himself.

```javascript
function Person(name) {
  this.first_name = name
  this.displayName = function() {
    console.log(`Name: ${this.first_name}`)
  }
}
const person = new Person("John");
person.displayName();
```

##--##

<!-- .slide: class="with-code" -->
# This

 `this` refers to a parent object

```javascript
let user = {
	count: 0,
	foo: function() {
		this.count++
	}
}

user.foo()
console.log(user.count)
```

##--##

<!-- .slide: class="with-code" -->
# This

 * `this` refers to the object on which the function is called

```javascript
const john = { name: "John", display: function () { console.log(this.name) } }
const emily = { name: "Emily", display: john.display }
john.display()
emily.display()
```

* Each function has the `call`, `apply` and `bind` methods to change the execution context

```javascript
const john = { name: "John", display: function () { console.log(this.name) } }
const emily = { name: "Emily", display: john.display }
john.display();
emily.display.call(john);
const displayJohn = emily.display.bind(john);
displayJohn();
```

Notes: 


##--##

<!-- .slide: class="with-code" -->
# This

 * The behavior is different for lamda functions (ES2015).
 * Lambdas do not have their own `this` context.
 * if `this` is in a lambda, `this` references the context of the non-lambda parent function.

```javascript
function Personne() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

var p = new Personne();
```
