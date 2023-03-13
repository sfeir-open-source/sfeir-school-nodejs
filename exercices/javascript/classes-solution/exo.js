class Cat {

    constructor(name) {
        this.name = name;
    }

    meow() {
        console.log('meow');
    }

    play() {
        console.log('play');
    }
}

class MainCoon extends Cat {

    constructor(name, color) {
        super(name);
        this.color = color;
    }

    play() {
        super.play();
        console.log('Super play');
    }

    sleep() {
        console.log('Super sleep')
    }
}

module.exports = {Cat, MainCoon};
