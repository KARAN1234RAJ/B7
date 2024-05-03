const a = [1, 2, 3];
let b = a.map((el) => el);
b[1] = 4;
console.log(b[1]); // 4
console.log(a[1]); // 2

console.log(b); 
console.log(a); 

