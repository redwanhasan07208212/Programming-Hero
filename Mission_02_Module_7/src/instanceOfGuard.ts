class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  sleep(hours: number) {
    console.log(`${this.name} is sleeping for ${hours} hours`);
  }
}
class Student extends Person {
  constructor(public age: number, public grade: string, name: string) {
    super(name);
  }

  study(timeOfHours: number) {
    console.log(`${this.name} is studying for ${timeOfHours} hours`);
  }
}
class Teacher extends Person {
  constructor(
    public subject: string,
    public designation: string,
    name: string
  ) {
    super(name);
  }
  teach(hours: number) {
    console.log(`${this.name} is teaching for ${hours} hours`);
  }
}

const isStudent = (user: Person) => {
  return user instanceof Student;
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};
const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.study(5);
  } else if (isTeacher(user)) {
    user.teach(8);
  } else {
    user.sleep(6);
  }
};
const person1 = new Student(20, "A", "Alice");
const person2 = new Teacher("Mathematics", "Professor", "Mr. Smith");
// test cases
getUserInfo(person1); // Alice is studying for 5 hours
getUserInfo(person2); // Mr. Smith is teaching for 8 hours
getUserInfo(new Person("John")); // John is sleeping for 6 hours
