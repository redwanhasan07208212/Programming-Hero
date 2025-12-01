class Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  getSleep(time: number) {
    console.log(`${this.name} is sleeping for ${time} hours`);
  }
}

class Student extends Parent {
  constructor(
    name: string,
    age: number,
    public grade: string,
    address: string
  ) {
    super(name, age, address);
  }
}

class Teacher extends Parent {
  constructor(
    name: string,
    age: number,
    public subject: string,
    address: string,
    public designation: string
  ) {
    super(name, age, address);
  }

  getSalary(amount: number) {
    console.log(`${this.name} has a salary of ${amount}`);
  }
  takingClassesForHours(hours: number) {
    console.log(`${this.name} is taking classes for ${hours} hours`);
  }
}
const student1 = new Student("Alice", 20, "A", "123 Main St");
student1.getSleep(8);
const teacher1 = new Teacher(
  "Mr. Smith",
  40,
  "Mathematics",
  "456 Elm St",
  "Professor"
);
teacher1.getSalary(50000);
teacher1.getSleep(8);
teacher1.takingClassesForHours(5);
