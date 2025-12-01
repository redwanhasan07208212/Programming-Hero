"use strict";
{
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numofHours) {
            console.log(`The person ${this.name} sleeps for ${numofHours} hours.`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
        getStudy(numofHours) {
            console.log(`The student${this.name} study for ${numofHours} hours`);
        }
    }
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        getClass(numofHours) {
            console.log(`The Teacher${this.name} take class for ${numofHours} hours`);
        }
    }
    // This is for student
    const student1 = new Student("Redwan Hasan", 23, "235/8 East Goran Khilgaon Dhaka");
    student1.getSleep(7);
    console.log(student1);
    // This one for Teacher
    const teacher1 = new Teacher("Dr Mahmud", 40, "st Front Road", "Professor");
    teacher1.getClass(3);
    teacher1.getSleep(8);
    console.log(teacher1);
}
