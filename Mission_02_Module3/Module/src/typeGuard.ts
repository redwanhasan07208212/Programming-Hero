{
  // type guard
  // typeof --> type guard

  type AlphaNumeric = string | number;
  function add(num1: AlphaNumeric, num2: AlphaNumeric): AlphaNumeric {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    } else {
      return num1.toString() + num2.toString();
    }
  }
  console.log(add(5, 3));
  console.log(add("Hello", " World"));

  // type in
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };
  const Getuser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      return `My name is ${user.name} and my role is ${user.role}`;
    } else {
      return `My name is ${user.name}`;
    }
  };
  const normal: NormalUser = {
    name: "Redwan",
  };
  const admin: AdminUser = {
    name: "Hasan",
    role: "admin",
  }
  console.log(Getuser(admin));
}
