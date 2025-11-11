{
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public country: string
    ) {}
    makeSound() {
      console.log(`I am making sound`);
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string, country: string) {
      super(name, species, country);
    }
    makeBark() {
      console.log("Ghew Ghew");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string, country: string) {
      super(name, species, country);
    }
    makeMeow() {
      console.log("Meow Meow");
    }
  }
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("dog vhai", "german shapherd", "Germeny");
  const cat = new Cat("cat vhai", "persian cat", "Persian");

  getAnimal(dog);
  getAnimal(cat);
}
