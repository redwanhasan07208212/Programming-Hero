// Utility Types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 222,
  name: "Mouse",
  price: "20",
  stock: 100,
  color: "black",
};

type OptionProduct = Partial<Product>;
type ProductReadonly = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 222,
  name: "Mouse",
  price: "20",
};

type ProductWithManufacturer = {
  id: number;
  name: string;
  price: number;
  manufacturer: {
    name: string;
    address: string;
  };
};

type ProductPick = Pick<
  ProductWithManufacturer,
  "id" | "name" | "manufacturer"
>;

type ProductOmit = Omit<ProductWithManufacturer, "id">;
const productSummary: ProductPick = {
  id: 101,
  name: "Laptop",
  manufacturer: {
    name: "TechCorp",
    address: "456 Tech Ave",
  },
};

const productOmit: ProductOmit = {
  name: "Laptop",
  price: 1500,
  manufacturer: {
    name: "TechCorp",
    address: "456 Tech Ave",
  },
};

console.log(productSummary);
console.log(productOmit);

// Output:
// {
//   id: 101,
//   name: 'Laptop',
//   manufacturer: { name: 'TechCorp', address: '456 Tech Ave' }
// }
// {
//   name: 'Laptop',
//   price: 1500,
//   manufacturer: { name: 'TechCorp', address: '456 Tech Ave' }
// }
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
const userProfilePick: Pick<UserProfile, "id" | "name" | "age"> = {
  id: 1,
  name: "Bob",
  age: 30,
};
const userProfileOmit: Omit<UserProfile, "address"> = {
  id: 1,
  name: "Bob",
  age: 30,
};
console.log(userProfilePick);
console.log(userProfileOmit);
const userProfile: Readonly<UserProfile> = {
  id: 1,
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    zipCode: "12345",
  },
};
// ? const nameChange = userProfile["name"];
// ? nameChange = "Redwan"; // Error: Cannot assign to 'name' because it is a read-only property.
console.log(userProfile);

const updatedProfile: Partial<UserProfile> = {
  ...userProfile,
  name: "Redwan",
};

console.log(updatedProfile);
