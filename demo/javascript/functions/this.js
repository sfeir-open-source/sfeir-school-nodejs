"use strict";

let user = {
    count: 0,
    foo: function () {
        this.count++;
    },
};

user.foo();
console.log(user.count);

function Person(name) {
    this.first_name = name;
    this.displayName = function () {
        console.log(`Name: ${this.first_name}`);
    };
}
const person = new Person("John");
person.displayName();

const john = {
    name: "John",
    display: function () {
        console.log(this.name);
    },
};
const emily = { name: "Emily", display: john.display };
john.display();
emily.display();

emily.display.call(john);

const displayJohn = emily.display.bind(john);
displayJohn();

function Personne() {
    this.age = 0;

    process.nextTick(() => {
        this.age++;
    }, 0);
}

var p = new Personne();
process.nextTick(() => console.log(p.age));
