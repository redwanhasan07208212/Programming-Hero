type richPeopleVehicle = {
  name: string;
  model: string;
  price: number;
};
type midPeopleVehicle = {
  name: string;
  model: string;
  price: number;
};
type myVehicle = richPeopleVehicle | midPeopleVehicle;
type VehicleKey = keyof myVehicle;
const vehicle1: myVehicle = {
  name: "BMW",
  model: "X5",
  price: 80000,
};
const vehicle2: VehicleKey = "name";
console.log(vehicle1, vehicle2);

// Output:
// { name: 'BMW', model: 'X5', price: 80000 } name
interface UserProfile {
  id: number;
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
}
const user = {
  id: 1,
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    zipCode: "12345",
  },
};
interface Product {
  id: number;
  name: string;
  price: number;
  manufacturer: {
    name: string;
    address: string;
  };
}
const product: Product = {
  id: 101,
  name: "Laptop",
  price: 1500,
  manufacturer: {
    name: "TechCorp",
    address: "456 Tech Ave",
  },
};

const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

console.log(getPropertyFromObj(user, "address"));
console.log(getPropertyFromObj(product, "manufacturer"));
