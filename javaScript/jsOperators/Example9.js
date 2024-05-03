// Case: 1
let ourCondition = false || 0 || 1 || true || 3;
console.log(ourCondition);//1

// Case: 2
let ourCondition1 = 0 || true || 1 || 2 || 3;
console.log(ourCondition1);//t

// Case: 3
let ourCondition2 = "" || false || NaN || 0;
console.log(ourCondition2);//0
