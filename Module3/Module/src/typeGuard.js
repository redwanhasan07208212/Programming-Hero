"use strict";
{
    function add(num1, num2) {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return num1 + num2;
        }
        else {
            return num1.toString() + num2.toString();
        }
    }
    console.log(add(5, 3));
    console.log(add("Hello", " World"));
    const Getuser = (user) => {
        if ("role" in user) {
            return `My name is ${user.name} and my role is ${user.role}`;
        }
        else {
            return `My name is ${user.name}`;
        }
    };
    const normal = {
        name: "Redwan",
    };
    const admin = {
        name: "Hasan",
        role: "admin",
    };
    console.log(Getuser(admin));
}
