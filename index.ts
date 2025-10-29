
//  we define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// implementing the Car class
class Car implements Vehicle {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}

  start(): void {
    console.log("Car engine started");
  }
}

// Creating an instance
const myCar = new Car("Tesla", "Model S", 2025);
myCar.start();
