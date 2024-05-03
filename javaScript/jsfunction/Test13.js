function makeAdder(x) {
  return function (y) {
    return x + y; // Accessing x from the outer function's scope
  };
}

let add5 = makeAdder(5); // Create a function that adds 5 to its argument
let add10 = makeAdder(10); // Create a function that adds 10 to its argument

console.log(add5(2)); // Output: 7 (5 + 2)
console.log(add10(2)); // Output: 12 (10 + 2)
