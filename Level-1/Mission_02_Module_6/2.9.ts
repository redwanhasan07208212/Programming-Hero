{
  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false;
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type DubaiSheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  type CheckVehicle<T> = T extends keyof DubaiSheikh ? true : false;
  type HasType = CheckVehicle<"plane">;
}
