<!-- .slide: class="with-code" -->
# Object.assign

- JS allows us to **copy** an object or to **merge** several of them!

<br />

<div class="row">
<div class="column">

```javascript
const o1 = { a: 1 }, o2 = { b: 2 };

Object.defineProperty(o2, 'f', {
    value: 6,
    enumerable: false
});

Object.defineProperty(o2, 'g', {
    value: 8,
    enumerable: true
});
```
</div>
<div class="column">

```javascript
const newO = Object.assign(target, o1, o2 );

// only a, b and Symbol('h') are copied

target.a;                 // 1
target.b;                 // 2
target.f;                 // undefined
target.g;                 // 8

newO.a;                 // 1
newO.b;                 // 2
newO.f;                 // undefined
newO.g;                 // 8
```

</div>
</div>

Notes:
f is undefined because not enumerable in the original object.

/!\ if we have nested objects, it is the references that are copied!

Similarly a non-enumerable property is therefore not copied because assign copy via iteration of object properties

the other way to copy an object is the spread operator

##==##

<!-- .slide: class="with-code" -->

# Utility Functions on Object

- New utility functions values() and entries(), keys() already in ES5

```javascript
const person = {
  name: 'Alice',
  city: 'Nantes',
};
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log(keys); // ["name", "city"]
console.log(values); // ["Alice", "Nantes"]

console.log(entries);
// [["name", "Alice"], ["city", "Nantes"]]
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Utility Functions on Object

- New utility functions values() and entries(), keys() already in ES5

```javascript
var person = {
  name: 'Alice',
  city: 'Nantes',
};
var keys = [], values = [], entries = [];
for (var key in person) {
  if (Object.prototype.hasOwnProperty.call(person, key)) {
    keys.push(key);
    values.push(person[key]);
    entries.push([key, person[key]]);
  }
}
console.log(keys); // ["name", "city"]
console.log(values); // ["Alice", "Nantes"]
console.log(entries); // [["name", "Alice"], ["city", "Nantes"]]
```
<!-- .element: class="fragment" -->
