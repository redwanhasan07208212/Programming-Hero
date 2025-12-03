"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(time) {
        console.log(`${this.name} is sleeping for ${time} hours`);
    }
}
class Student extends Parent {
    grade;
    constructor(name, age, grade, address) {
        super(name, age, address);
        this.grade = grade;
    }
}
class Teacher extends Parent {
    subject;
    designation;
    constructor(name, age, subject, address, designation) {
        super(name, age, address);
        this.subject = subject;
        this.designation = designation;
    }
    getSalary(amount) {
        console.log(`${this.name} has a salary of ${amount}`);
    }
    takingClassesForHours(hours) {
        console.log(`${this.name} is taking classes for ${hours} hours`);
    }
}
const student1 = new Student("Alice", 20, "A", "123 Main St");
student1.getSleep(8);
const teacher1 = new Teacher("Mr. Smith", 40, "Mathematics", "456 Elm St", "Professor");
teacher1.getSalary(50000);
teacher1.getSleep(8);
teacher1.takingClassesForHours(5);
//# sourceMappingURL=inheritence.js.map