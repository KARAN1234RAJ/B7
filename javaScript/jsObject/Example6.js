// Using es6 classes
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}

let car1 = new Vehicle("THAR", "MAHENDRA", "1998cc");

console.log(car1.name); 
