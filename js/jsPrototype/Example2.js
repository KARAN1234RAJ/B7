function Person(_name, _age) {
  this.name = _name;
  this.age = _age;

//   this.getNameAndAge = function () {
//     console.log(`my name is ${this.name} and i am $  {this.age} years old`);
//   };
}

Person.prototype.getNameAndAge = function () {
     return (`my name is ${this.name} and i am ${this.age} years old`);
   };
let person1 = new Person("John", 25);
let person2 = new Person("Manish Kumar", 35);
console.log(person1);

console.log(person2.getNameAndAge()); // calling the method using object
