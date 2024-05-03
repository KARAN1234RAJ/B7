// let data = {
//   name: "Karan",
//   age: 27,
//   city: "Indore",
//   company: "Grow Tech",
// };
// console.log(data);
// let jsonData = JSON.stringify(data); // Convert JavaScript object to a JSON string
// console.log("JSON Data : ", jsonData);

// const jsonStringData =
//   '{"name": "Karan Raj", "city": "BodhGaya","dist":"Gaya", "state":"Bihar"}';

// console.log(jsonStringData);
// //   Parse the JSON string back to a JavaScript Object using parse() method of JSON

// const obj = JSON.parse(jsonStringData);
// console.log("Parsed JSon Obj : ", obj);

//===========================================================
let data = {
  name: "Karan",
  age: 27,
  city: "Indore",
  company: "Grow Tech",
};

// const jsonData = JSON.stringify(data, (key, value) => {
//   if (key === "age") {
//     return undefined;
//   } else {
//     return value;
//   }
// });
// console.log(jsonData);

///=================================

const jsonData = JSON.stringify(data, null,2);
console.log(jsonData);