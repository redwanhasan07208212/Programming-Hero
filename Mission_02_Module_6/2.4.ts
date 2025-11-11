{
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      ReleaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }
  type SmartWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<SmartWatch> = {
    name: "Redwan",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      ReleaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch Series 5",
      display: "Apple Watch",
    },
  };
  type SmartWatch1 = {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  };
  interface Bike {
    brand: string;
    model: string;
  }
  const richDeveloper: Developer<SmartWatch1, Bike> = {
    name: "Hasan",
    computer: {
      brand: "Asus",
      model: "VivoBook",
      ReleaseYear: 2021,
    },
    smartWatch: {
      brand: "Samsung",
      model: "Galaxy Watch",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Trek",
      model: "Mountain Bike",
    },
  };
}
