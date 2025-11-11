{
    // generic constraints with keyof operator 
    type Vehicle = {
        bike: string;
        car:string;
        ship:string;
    }
    type Owner = 'bike' | 'car' | 'ship' // manually
    type Owner2 = keyof Vehicle;

    const person1 : Owner = 'ship';
    const person2 : Owner2 = 'car';

    const getPropertyValue = <T,X extends keyof T>(obj:T,key:X)=>{
        return obj[key];
    }
    const user = {
        name: 'Redwan',
        age:26,
        address:' 235/8 East Goran Khilgaon Dhaka'
    }
    const car = {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2020
    }
    const result1 = getPropertyValue(car,'brand');
    console.log(result1); 
}