"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    sleep(hours) {
        console.log(`${this.name} is sleeping for ${hours} hours`);
    }
}
class Student extends Person {
    age;
    grade;
    constructor(age, grade, name) {
        super(name);
        this.age = age;
        this.grade = grade;
    }
    study(timeOfHours) {
        console.log(`${this.name} is studying for ${timeOfHours} hours`);
    }
}
class Teacher extends Person {
    subject;
    designation;
    constructor(subject, designation, name) {
        super(name);
        this.subject = subject;
        this.designation = designation;
    }
    teach(hours) {
        console.log(`${this.name} is teaching for ${hours} hours`);
    }
}
const isStudent = (user) => {
    return user instanceof Student;
};
const isTeacher = (user) => {
    return user instanceof Teacher;
};
const getUserInfo = (user) => {
    if (isStudent(user)) {
        user.study(5);
    }
    else if (isTeacher(user)) {
        user.teach(8);
    }
    else {
        user.sleep(6);
    }
};
const person1 = new Student(20, "A", "Alice");
const person2 = new Teacher("Mathematics", "Professor", "Mr. Smith");
// test cases
getUserInfo(person1); // Alice is studying for 5 hours
getUserInfo(person2); // Mr. Smith is teaching for 8 hours
getUserInfo(new Person("John")); // John is sleeping for 6 hours
//# sourceMappingURL=instanceOfGuard.js.map