<!-- .slide: class="with-code" -->
# Prototypes

* L'héritage en JavaScript est réalisé avec une chaîne de prototypes.

```javascript
function Animal(species, color) {
    this.species = species;
    this.color = color;
}
Animal.prototype.toString = function () { return `${this.species} ${this.color}` }

function Cat(color, race) {
    Animal.call(this, "cat", color)
    this.race = race
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.toString = function () { return `${Animal.prototype.toString.call(this)} ${this.race}` }

const cat = new Cat("White", "Main Coon")
console.log(cat.toString())
```

##==##

<!-- .slide: class="with-code" -->
# Les classes

* Les mises à jour du langage ont simplifié la syntaxe.

```javascript
class Animal {
    constructor(species, color) {
        this.species = species;
        this.color = color;
    }
    toString() { return `${this.species} ${this.color}` }
}

class Cat extends Animal {
    constructor(color, race) {
        super("cat", color)
        this.race = race
    }
    toString() { return `${super.toString()} ${this.race}` }
}

const cat = new Cat("White", "Main Coon")
console.log(cat.toString())
```

Notes:
Attention, sucre syntaxique