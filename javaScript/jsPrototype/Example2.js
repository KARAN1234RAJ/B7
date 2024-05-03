function Person(_name, _age) {
  this.name = _name;
  this.age = _age;

}

Person.prototype.getNameAndAge = function () {
     return (`my name is ${this.name} and i am ${this.age} years old`);
   };
   Person.prototype.gender = "M"
let person1 = new Person("John", 25);
let person2 = new Person("Manish Kumar", 35);
let person3 = new Person("Bhakt Raj", 24);
console.log(person1.gender);

console.log(person2.getNameAndAge()); // calling the method using object

console.log(person3);
