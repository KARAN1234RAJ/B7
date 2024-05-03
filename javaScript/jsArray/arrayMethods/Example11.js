const arr1 = [11, 33, 17, 9, 15, 23];
const arr2 = [12, 33, 17, 16, 15, 18];

let op1 = arr1.every((item) => item % 2 != 0);
let op2 = arr2.every((item) => item % 2 != 0);

console.log(op1);
console.log(op2);
