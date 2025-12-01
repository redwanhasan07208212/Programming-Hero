interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    model: string;
    brand: string;
    releasedYear: number;
  };
  smartWatch: T;
  bike?: X;
}
interface poorSmartWatch {
  model: string;
  brand: string;
  stopWatch: boolean;
}
const poorDeveloper: Developer<
  poorSmartWatch,
  {
    brand: "Yamaha";
    model: "FZ";
    releasedYear: 2010;
  }
> = {
  name: "Mr. X",
  salary: 1000,
  device: {
    model: "Xiaomi Pro",
    brand: "Xiaomi",
    releasedYear: 2021,
  },
  smartWatch: {
    model: "Mi Band 6",
    brand: "Xiaomi",
    stopWatch: true,
  },
  bike: {
    brand: "Yamaha",
    model: "FZ",
    releasedYear: 2010,
  },
};

interface advancedSmartWatch {
  model: string;
  brand: string;
  gps: boolean;
  heartRateMonitor: boolean;
  calculator: boolean;
  aiSupport: boolean;
  callSupport: boolean;
}
const richDeveloper: Developer<advancedSmartWatch> = {
  name: "Mr. Y",
  salary: 10000,
  device: {
    model: "iPhone 14 Pro Max",
    brand: "Apple",
    releasedYear: 2022,
  },
  smartWatch: {
    model: "Apple Watch Series 8",
    brand: "Apple",
    gps: true,
    heartRateMonitor: true,
    callSupport: true,
    calculator: true,
    aiSupport: true,
  },
};

console.log(poorDeveloper);
console.log(richDeveloper);
