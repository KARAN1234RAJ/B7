const obj = {
  name: "xyz",
  age: 52,
  city: "delhi",
};

// Display original object
console.log("Original object: ", obj);

// Using destructuring
const { age, ...newObj } = obj;
console.log("New object without age attribute: ", newObj);

// Using delete operator
delete obj.city;
console.log("Original object after deleting city: ", obj);
