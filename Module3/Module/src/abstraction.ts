{
  // abstraction
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("Car is starting the Engine");
    }
    stopEngine(): void {
      console.log("Car is stopping the Engine");
    }
    move(): void {
      console.log("Car is moving");
    }
  }

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("Car is starting the Engine");
    }
    stopEngine(): void {
      console.log("Car is stopping the Engine");
    }
    move(): void {
      console.log("Car is moving");
    }
  }
  const car = new Car();
  car.startEngine();
  car.stopEngine();
  car.move();

  const toyotaCar = new ToyotaCar();
  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.move();
}
