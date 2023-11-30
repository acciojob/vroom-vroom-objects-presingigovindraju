function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  // Inherit Car prototype
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit Car prototype methods
SportsCar.prototype = Object.create(Car.prototype);

// Add getTopSpeed() method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Example usage:
const sedan = new Car("Toyota", "Camry");
console.log(sedan.getMakeModel()); // Output: Toyota Camry

const sportsCar = new SportsCar("Ferrari", "488 GTB", 205);
console.log(sportsCar.getMakeModel()); // Output: Ferrari 488 GTB
console.log(sportsCar.getTopSpeed()); // Output: 205

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
