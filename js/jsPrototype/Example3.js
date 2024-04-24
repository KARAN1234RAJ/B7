function Person(name) {
  this.name = name;
}

// Adding a method to the prototype of Person
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

// Creating an instance of Person
let suresh = new Person("suresh");

// Accessing the greet method
suresh.greet(); 
