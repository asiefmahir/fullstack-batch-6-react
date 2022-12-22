const Animal = function (animalType, name) {
    this.animalType = animalType;
    this.name = name;
    // this.bark = function () {
    //     console.log('ghew');
    // }
}


Animal.prototype.testing = 'testing';
Animal.prototype.bark = function () {
    console.log("ghew ghew");
}

// Animal.prototype === Animal.[[Prototype]]
// Animal.[[Prototype]] === Object.prototype
console.log(Animal.prototype, 'animal prototype');

const a1 = new Animal('Dog', 'Tom');
// a1.[[Prototype]] = Animal.prototype

console.log(a1, 'a1');
a1.bark();
console.log(a1.testing);
console.log(a1.hasOwnProperty('testing'));

const animal2 = new Animal("Dog", "Muku")
// animal2.[[Prototype]] = Animal.prototype

console.log(animal2, 'animal2');

// animal2.bark()

function add(a, b) {
    return a + b
}

console.dir(add)

const a = {
    c: 200
}

const ourArray = []
console.log(ourArray);

Array.prototype.test = function () {
    console.log("Our method");
}


// console.log(Animal.prototype.isPrototypeOf(Animal));

console.log(a1.__proto__.__proto__.__proto__, 'Prototype of a1 object is Animal.prototype'); // [[Prototype]]

// prototypeOfLinkedObject
// console.log(a);

// const b = a; //
// b.c


class AnimalCl {
    constructor (animalType, name) {
        this.animalType = animalType;
        this.name = name
    }

    bark () {
        console.log("I am posh dog. ghew ghew");
    }
}

class Cat extends AnimalCl {
    constructor(animalType, name, owner) {
        super(animalType, name);
        this.owner = owner
    }
}

const cat1 = new Cat('cat', 'mini', 'mahir');
console.log(cat1, 'cat1');
console.log(cat1.hasOwnProperty('name'));

// Cat.[[prototype]] === AnimalCl.prototype

const animal3 = new AnimalCl("Dog", "jery");
animal3.bark()

console.log(animal3);


/**
 * 1) {} created
 * 2) this is referred to the newly created object {}
 * 3) {} prototype
 * 4) Automatically returns the newly created object
 */