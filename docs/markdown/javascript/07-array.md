<!-- .slide: class="with-code" -->

# Utility Functions - Array

```javascript
var numbers = [ 1, 2, 3 ];
// Check if an array includes a value var hasOne = numbers.indexOf(1) !== -1;
// Transform an array into an array of a single value
var listOfTens = numbers.map(() => 10);

var people = [{
  name: "Alice",
  city: "Nantes"
}, {
  name: "Bob",
  city: "Bordeaux"
}];

// Filter the first object that meets a condition
var alice = people.filter(person => person.name === "Alice")[0];
```

##==##

<!-- .slide: class="with-code" -->

# Utility Functions - Array

```javascript
const numbers = [ 1, 2, 3 ];
// Check if an array includes a value
const hasOne = numbers.includes(1);
// Fill an array with a single value
const listOfTens = numbers.slice().fill(10); // .slice avoids modifying numbers

const people = [{
  name: "Alice",
  city: "Nantes"
}, {
  name: "Bob",
  city: "Bordeaux"
}];

// Find the first object that meets a condition
const alice = people.find(person => person.name === "Alice");
```

Notes:
/!\ includes is much less efficient

##==##

<!-- .slide: class="with-code" -->

# Utility Functions - Array

|Method|Modify the array|Leave the array unchanged|Description|
|-|-|-|-|
|Slice||X| Returns a copy of part of the array.|
|Concat||X| Returns a merged version of the arrays specified in parameters.|
|Flat||X|Returns the array in a flattened version.|
|Fill|X||Fills the array with the specified value.|
|CopyWithin|X|| Copies a part and inserts it in the same table, without changing its size.|
|Sort|X||Sort the array|

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
<!-- .element: class="credits" -->

##==##

<!-- .slide: class="" -->

# Utility Functions - Array

|Method|Modify the array|Leave the array unchanged|Description|
|-|-|-|-|
|Splice|X|| Deletes, inserts or replaces elements.|
|Push|X||Adds an element at the end of the array.|
|Shift|X|| Removes the first element, which is returned.|
|Unshift|X|| Inserts one or more elements at the beginning and returns the new length.|
|Pop|X||Removes the last element, which is returned|

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
<!-- .element: class="credits" -->

##==##

<!-- .slide: class="with-code" -->

# Array.from

- Creates an array from an array-like object.

```javascript
Array.from(document.querySelectorAll('body'));      // []
Array.from(Array(2).keys());                        // [1, 2]
Array.from({ length: 2 }, () => 0);                 // [0, 0]
Array.from(function* () {
  yield 1;
  yield 2;
}());                                               // [1, 2]
```
<!-- .element: class="fragment" -->

##--##

<!-- .slide: class="with-code" -->

# Spread Operator

```javascript
var array = [ "Abc", true, 3 ];
fn.apply(undefined, [ 1, 2 ].concat(array));
```
<!-- .element: class="fragment" -->

```javascript
const array = [ "Abc", true, 7 ];
fn(1, 2, ...array)
```
<!-- .element: class="fragment" -->
