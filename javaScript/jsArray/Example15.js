const arr = [1, 2, 3, 4, 5];
console.log(typeof arr);
console.log(isArray(arr));
// const arr = [1, 2, 3, 4, 5];
console.log(arr instanceof Array); 

// const arr = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr)); // true

const obj = {
    val1: 1,
    val2: 2,
    val3: 3,
    val4: 4,
    val5: 5
};
console.log(Array.isArray(obj)); // false

