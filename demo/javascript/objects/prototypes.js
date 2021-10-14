function Animal(specie, color) {
    this.specie = specie;
    this.color = color;
}
Animal.prototype.toString = function () { return `${this.specie} ${this.color}` }

function Cat(color, race) {
    Animal.call(this, "cat", color)
    this.race = race
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.toString = function () { return `${Animal.prototype.toString.call(this)} ${this.race}` }

const cat = new Cat("White", "Main Coon")
console.log(cat.toString())