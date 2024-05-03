// Case: 1
let ourCondition = 1 && 2 && 0 && false && 3;
console.log(ourCondition);//0
// Case: 2
let ourCondition1 = 1 && 2 && false && 3;
console.log(ourCondition1);//f
// Case: 3
let ourCondition2 = 1 && 2 && 3;
console.log(ourCondition2);
//3