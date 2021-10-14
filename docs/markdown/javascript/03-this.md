<!-- .slide: class="with-code" -->
# This

## **this** est souvent mal compris

* Par défaut `this` fait référence à l'objet `global` (sauf en mode strict).

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

 * `this` fait référence à une instance `new`.
 * Le constructeur Personne() définit `this` comme lui-même.

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

 `this` fait référence à un object parent

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

 * `this` fait référence à l'objet sur lequel la fonction est appelée

```javascript
const john = { name: "John", display: function () { console.log(this.name) } }
const emily = { name: "Emily", display: john.display }
john.display()
emily.display()
```

* chaque function possède les méthodes `call`, `apply`et `bind` pour changer le contexte d'éxécution

```javascript
const john = { name: "John", display: function () { console.log(this.name) } }
const emily = { name: "Emily", display: john.display }
john.display();
emily.display.call(john);
const displayJohn = emily.display.bind(john);
displayJohn();
```

##--##

<!-- .slide: class="with-code" -->
# This

 * Le comportement est différent pour les functions lamda (ES2015).
 * Les lambda n'ont pas leur propre context `this`.
 * si `this` est dans une lambda, `this`référence le context de la fonction parente non-lambda.

```javascript
function Personne() {
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 10000);
}

var p = new Personne();
```