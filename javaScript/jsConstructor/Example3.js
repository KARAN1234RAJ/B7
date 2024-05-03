// Define a parent constructor
function Vehicle(make) {
  this.make = make;
}
// Create a child constructor that inherits from the parent
function Car(make, model) {
  Vehicle.call(this, make);
  this.model = model;
}
// Create an instance of Car
const myCar = new Car("Toyota", "Camry");
// Access properties
console.log(myCar.make); 
console.log(myCar.model); 
