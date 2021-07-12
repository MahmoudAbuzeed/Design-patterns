import Car from "./Car.js";
import Truck from "./Truck.js";
import Bike from "./Bike.js";

const vehicleFactory = {
  createVehicle: (type) => {
    switch (type.toLowerCase()) {
      case "car":
        return new Car("car1", 4, "bmw");
      case "truck":
        return new Truck("truck", 6, "bmw");
      case "bike":
        return new Bike("bike", 2, "bmw");
      default:
        return null;
    }
  },
};

const car = vehicleFactory.createVehicle("Car");
const truck = vehicleFactory.createVehicle("Truck");
const bike = vehicleFactory.createVehicle("Bike");
const unknown = vehicleFactory.createVehicle("Boat");

console.log(car); // Car { name: "Car", wheels: 4 }
console.log(truck); // Truck { name: "Truck", wheels: 6 }
console.log(bike); // Bike { name: "Bike", wheels: 2 }
console.log(unknown); // null ( Vehicle not known )
