"use strict";
// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
Object.defineProperty(exports, "__esModule", { value: true });
//   makeSound() {
//     console.log(`${this.name} the ${this.species} says ${this.sound}`);
//   }
//   move() {
//     console.log(`${this.name} is moving`);
//   }
// }
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} the ${this.species} says ${this.sound}`);
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}
const Dog = new Animal("Buddy", "Dog", "Woof");
Dog.makeSound();
Dog.move();
//# sourceMappingURL=class.js.map