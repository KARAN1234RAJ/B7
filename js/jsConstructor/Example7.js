function Person(name) {
  this.name = name;
}
let person1 = new Person('person1');
console.log(person1.name); 

Person('Person2');

console.log(window.name); 