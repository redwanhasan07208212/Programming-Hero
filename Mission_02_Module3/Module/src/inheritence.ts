{
  class Person {
    constructor(
      public name: string,
      public age: Number,
      public address: string
    ) {}
    getSleep(numofHours: number) {
      console.log(`The person ${this.name} sleeps for ${numofHours} hours.`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
    getStudy(numofHours: number) {
      console.log(`The student${this.name} study for ${numofHours} hours`);
    }
  }
  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    getClass(numofHours: number) {
      console.log(`The Teacher${this.name} take class for ${numofHours} hours`);
    }
  }

  // This is for student
  const student1 = new Student(
    "Redwan Hasan",
    23,
    "235/8 East Goran Khilgaon Dhaka"
  );
  student1.getSleep(7);
  console.log(student1);

  // This one for Teacher
  const teacher1 = new Teacher("Dr Mahmud", 40, "st Front Road", "Professor");
  teacher1.getClass(3);
  teacher1.getSleep(8);
  console.log(teacher1);
}
