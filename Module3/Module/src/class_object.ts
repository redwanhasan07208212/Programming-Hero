{
  class Animal {
    /// this is called property and if we are declare a function inside the class
    // then it is called a method in the class. in there we are using normal function because
    // in the arrow function this property is not worked.
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepherd", "Dog", "Ghew Ghew");
  const cat = new Animal("Persian Cat", "Cat", "Meow Meow");
  cat.makeSound();
  dog.makeSound();
}
