/**********************************************
 // ??? Type: Union
**********************************************/

type userRole = "admin" | "user" | "guest";

const getDashboard = (user: userRole) => {
  if (user === "admin") {
    return "admin dashboard";
  } else if (user === "user") {
    return "user dashboard";
  } else {
    return "guest dashboard";
  }
};

console.log(getDashboard("guest"));

/**********************************************
 // ??? Type: Intersection 
**********************************************/
type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

// cSpell:ignore Chowdhury Shaheb
const ChowdhuryShaheb: EmployeeManager = {
  id: "123",
  name: "Chowdhury Shaheb",
  phoneNo: "017",
  designation: "manager",
  teamSize: 20,
};

console.log(ChowdhuryShaheb);
