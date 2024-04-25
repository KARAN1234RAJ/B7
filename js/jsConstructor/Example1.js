// Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  return `${this.name } ${this.age}`
}

// Create instances of Person using the constructor
const person1 = new Person("Kumar", 30);
const person2 = Person;

console.log(person1.name, person1.age);
console.log(person2("AB",20));
