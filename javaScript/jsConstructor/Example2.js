// Define a class using ES6 class syntax
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}
// Create instances of Animal using the class constructor
const animal1 = new Animal("Leo", "Lion");
const animal2 = new Animal("Buddy", "Dog");
// Access properties of the instances
console.log(animal1.species);
console.log(animal2.name);
