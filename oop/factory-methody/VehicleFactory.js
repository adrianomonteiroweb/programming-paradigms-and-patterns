const Car = require("./Car");
const Motorcycle = require("./Motorcycle");
const Bicycle = require("./Bicycle");

class VehicleFactory {
  createVehicle(vehicleType) {
    const instances = {
      Car: new Car(),
      Motorcycle: new Motorcycle(),
      Bicycle: new Bicycle(),
    };

    return instances[vehicleType];
  }
}

module.exports = VehicleFactory;
