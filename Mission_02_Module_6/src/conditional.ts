type A = null;
type B = undefined;

type C = A extends null ? true : B extends undefined ? true : false;

type richPeopleVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type checkVehicle<T> = T extends keyof richPeopleVehicle ? true : false;
type hasBike = checkVehicle<"bike">;
type hasPlane = checkVehicle<"plane">;

const isRichVehicle = <T>(vehicle: T): checkVehicle<keyof T> => {
  const richVehicles: richPeopleVehicle = {
    bike: "Ducati",
    car: "BMW",
    ship: "Yacht",
  };

  for (const key in vehicle) {
    if (!(key in richVehicles)) {
      return false as checkVehicle<keyof T>;
    }
  }
  return true as checkVehicle<keyof T>;
};

console.log(isRichVehicle({ bike: "Ducati", car: "BMW" })); // true
console.log(isRichVehicle({ bike: "Ducati", plane: "Boeing" })); // false
