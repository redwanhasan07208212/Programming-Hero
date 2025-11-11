{
  // polymorshism
  class Person {
    getSleep() {
      console.log("I am sleeping for 8 hours");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log("I am sleeping for 7 hours");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("I am sleeping for 6 hours");
    }
  }

  class Shape {
    area() {
      return 0;
    }
  }
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super(); // Always call super() when creating a subclass.
      this.radius = radius;
    }
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    area() {
      return this.height * this.width;
    }
  }

  const getArea = (param: Shape) => {
    console.log(param.area());
  };
  const getSleeping = (param: Person) => {
    return param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  const shape1 = new Shape();
  const shape2 = new Circle(4);
  const shape3 = new Rectangle(20, 10);

  getSleeping(person1);
  getSleeping(person2);
  getSleeping(person3);

  getArea(shape1);
  getArea(shape2);
  getArea(shape3);
}
