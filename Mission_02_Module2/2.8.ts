{
  /// create a promise with string value
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data from server");
      }
    });
  };

  ///create a promise with boolean value
  const createBooleanPromise = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      const isDataAvailable: boolean = Math.random() > 0;
      if (isDataAvailable) {
        resolve(isDataAvailable);
      } else {
        reject("Data is not available");
      }
    });
  };

  ///create a promise with object value
  type NameObject = {
    name: string;
    age?: number;
  };
  const createObjectPromise = (): Promise<NameObject> => {
    return new Promise<NameObject>((resolve, reject) => {
      const data: NameObject = { name: "Redwan", age: 21 };
      if (data) {
        console.log(data);
      } else {
        reject("Failed to load data from server");
      }
    });
  };

  /// custom data from json
  type TODO = {
    userId: number;
    id:number;
    title:string;
    completed: boolean;
  }
  const getTodo = async () : Promise<TODO> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    // console.log(data);
    return data;
  };
  getTodo();
  // calling  create promise function
  //1
  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    return data;
  };
  showData();

  //2
  const showBooleanData = async (): Promise<boolean> => {
    const boolData: boolean = await showBooleanData();
    return boolData;
  };

  //3
  const showObjectData = async (): Promise<NameObject> => {
    const objData: NameObject = await createObjectPromise();
    return objData;
  };
}
