class Animal {
    constructor(specie, color) {
        this.specie = specie;
        this.color = color;
    }
    toString() { return `${this.specie} ${this.color}` }
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