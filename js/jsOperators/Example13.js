let val = false;
let result = val && 0 + 3 && true;
console.log(result);

let val1 = true;
let result1 = val1 &&0 && 0 + 3 || 5 && null && 10;
console.log(result1);
