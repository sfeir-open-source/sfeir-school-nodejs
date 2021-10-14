<!-- .slide: class="with-code" -->

# Fonctions utilitaires - Array

```javascript
var numbers = [ 1, 2, 3 ];
// Vérifier si un tableau inclut une valeurvar hasOne = numbers.indexOf(1) !== -1;
// Transformer un tableau en tableau d'une valeur unique
var listOfTens = numbers.map(() => 10);

var people = [{
  name: "Alice",
  city: "Nantes"
}, {
  name: "Bob",
  city: "Bordeaux"
}];

// Trouver la première valeur qui remplit une condition
var alice = people.filter(person => person.name === "Alice")[0];
```

##==##

<!-- .slide: class="with-code" -->

# Fonctions utilitaires - Array

```javascript
const numbers = [ 1, 2, 3 ];
// Vérifier si un tableau inclut une valeur
const hasOne = numbers.includes(1);
// Remplir un tableau d'une valeur unique
const listOfTens = numbers.slice().fill(10); // .slice évite de modifier numbers

const people = [{
  name: "Alice",
  city: "Nantes"
}, {
  name: "Bob",
  city: "Bordeaux"
}];

// Trouver la première valeur qui remplit une condition
const alice = people.find(person => person.name === "Alice");
```

Notes:
/!\ includes est beaucoup moins performant

##==##

<!-- .slide: class="with-code" -->

# Fonctions utilitaires - Array

||Modifie le tableau|Laisse le tableau inchangé|Description|
|-|-|-|-|
|Slice||X|Retourne une copie d'une partie du tableau.|
|Concat||X|Retourne une version fusionnée des tableaux spécifiés en paramètres.|
|Flat||X|Retourne le tableau en version aplatie.|
|Fill|X||Remplit le tableau avec la valeur spécifiée.|
|CopyWithin|X||Copie une partie et l'insère dans le même tableau, sans changer la taille de celui-ci.|
|Sort|X||Trie le tableau|

##==##

<!-- .slide: class="" -->

# Fonctions utilitaires - Array

||Modifie le tableau|Laisse le tableau inchangé|Description|
|-|-|-|-|
|Splice|X||Supprime, insère ou remplace des éléments.|
|Push|X||Ajoute un élément à la fin du tableau.|
|Shift|X||Retire le premier élément, qui est retourné.|
|Unshift|X||Insère un ou plusieurs éléments au début et retourne la nouvelle longueur.|
|Pop|X||Retire le dernier élément, qui est retourné.|

##==##

<!-- .slide: class="with-code" -->

# Array.from

- Créé un tableau à partir d'un objet semblable à un tableau.
<!-- .element: class="fragment" -->

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
