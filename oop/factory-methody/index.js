const VehicleFactory = require("./VehicleFactory");

const factory = new VehicleFactory();

// Car
const car_instance = factory.createVehicle("Car");
car_instance.speedUp("Acelerando o carro");

// Motorcycle
const motorcycle_instance = factory.createVehicle("Motorcycle");
motorcycle_instance.speedUp("Acelerando a moto");

// Bicycle
const bicycle_instance = factory.createVehicle("Bicycle");
bicycle_instance.speedUp("Acelerando a bicicleta");
