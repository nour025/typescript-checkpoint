"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// implementing the Car class
class Car {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Creating an instance
const myCar = new Car("Tesla", "Model S", 2025);
myCar.start();
//# sourceMappingURL=index.js.map