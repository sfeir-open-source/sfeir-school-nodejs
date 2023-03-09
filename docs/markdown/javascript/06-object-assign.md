<!-- .slide: class="with-code" -->
# Object.assign

- JS nous permet de **copier** un objet ou d'en **fusionner** plusieurs !

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

// seuls a, b et Symbol('h') sont copiés

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
f est undefined car non enumerable dans l'objet d'origine.

/!\ si on a des nested object, ce sont les références qui sont copiées !

De même une propriété non enumerable n'est donc pas copiée car assign copy via l'itération des propriétés d'objet

l'autre manière de copier un objet est le spread operator

##==##

<!-- .slide: class="with-code" -->

# Fonctions utilitaires sur Object

- Nouvelles fonctions utilitaires values() et entries(), keys() déjà en ES5

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

# Fonctions utilitaires sur Object

- Nouvelles fonctions utilitaires values() et entries(), keys() déjà en ES5

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
