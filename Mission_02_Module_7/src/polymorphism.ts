class Person {
  getSleep(): void {
    console.log("Person is sleeping for 8 hours");
  }
}

class Student extends Person {
  getSleep(): void {
    console.log("Student is sleeping for 7 hours");
  }
}

class NextLevelDeveloper extends Student {
  getSleep(): void {
    console.log("Next Level Developer is sleeping for 6 hours");
  }
}
const getSleepingHours = (param: Person) => {
  param.getSleep();
};
// Test cases
const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);

class Shape {
  area(): number {
    return 0;
  }
}
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}

const calculateArea = (shape: Shape): number => {
  return shape.area();
};

// Test cases
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log("Circle Area:", calculateArea(circle)); // Circle Area: 78.53981633974483
console.log("Rectangle Area:", calculateArea(rectangle)); // Rectangle Area: 24
