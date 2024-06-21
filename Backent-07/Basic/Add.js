// console.log("Function start");

// const sum = (a, b) => {
//   console.log("inside function", a + b);
// };
// sum(20, 30);

// console.log(process.version);
const sum = () => {
  console.log("inside function", process.argv);
};
sum();
