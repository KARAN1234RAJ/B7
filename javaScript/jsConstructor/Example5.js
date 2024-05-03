function Student(name, id) {
  // add properties to this
  this.name = name;
  this.id = id;
  // add method to this
  this.welcome = function () {
    console.log("Welcome", this.name);
  };
}

//Creating Objects
const student1 = new Student("person1", 101);
const student2 = new Student("person2", 102);

console.log(student1.welcome());
console.log(student2.welcome());
