function Person(name, age, sex) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Rani", 13, "F");
const person2 = new Person("Rohit", 19, "M");

console.log(person1);
console.log(person2);

function Bike(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

const bike1 = new Bike("Hero", "TVS", 1995, person1);
const bike2 = new Bike("Honda", "Splendor", 2002, person2);

console.log(bike1);
console.log(bike2);
