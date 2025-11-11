"use strict";
{
    // spread operator
    const user = {
        name: "John Doe",
        age: 30,
        address: {
            street: "123 Main St",
            city: "New York",
            state: "NY",
        },
    };
    const updatedUser = Object.assign(Object.assign({}, user), { age: user.age + 1, address: Object.assign(Object.assign({}, user.address), { street: "456 Elm St" }) });
    console.log(updatedUser);
    const bros1 = ["Jhon", "Sina", "Tablet"];
    const bros2 = ["Happy", "Nappy", "Khusi"];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        javascript: "Sami",
        react: "Taimour",
        graphql: "Mohammad",
    };
    const combinedMentors = Object.assign(Object.assign({}, mentors1), mentors2);
    //learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("John", "Alice", "Bob");
}
