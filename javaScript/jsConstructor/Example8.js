function Person(name) {
  if (!new.target) {
    throw "must use new operator with Person";
  }
  this.name = name;
}

let person1 = new Person("person1");
console.log(person1.name);

let person2=Person("Person2");

console.log(person2.name);
