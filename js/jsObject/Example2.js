// Creating an object
let person = {
  name: "Karan Raj",
  age: 27,
  city: "Indore",
};

// Storing the object in a variable
// let myObject = person;
let person1 = Object.create(person);
person1.name = "Rohit"

console.log("Original Object", person);
console.log(person1);
