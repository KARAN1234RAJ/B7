let student = {
  id: 1,
};
let tution = {
  id: 2,
};
let school = {
  id: 3,
};
student.__proto__ = school; //level1 inheritance
console.log(student);
student.__proto__.__proto__ = tution; //level2 inheritance
console.log(student);
console.log(student.id); //the student object's property
console.log(student.__proto__.id); //school object's property
