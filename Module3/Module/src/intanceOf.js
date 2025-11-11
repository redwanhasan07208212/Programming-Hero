"use strict";
{
    class Animal {
        constructor(name, species, country) {
            this.name = name;
            this.species = species;
            this.country = country;
        }
        makeSound() {
            console.log(`I am making sound`);
        }
    }
    class Dog extends Animal {
        constructor(name, species, country) {
            super(name, species, country);
        }
        makeBark() {
            console.log("Ghew Ghew");
        }
    }
    class Cat extends Animal {
        constructor(name, species, country) {
            super(name, species, country);
        }
        makeMeow() {
            console.log("Meow Meow");
        }
    }
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeow();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("dog vhai", "german shapherd", "Germeny");
    const cat = new Cat("cat vhai", "persian cat", "Persian");
    getAnimal(dog);
    getAnimal(cat);
}
