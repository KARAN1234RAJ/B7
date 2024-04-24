const a = [1, 2, 3];
let b = a.slice(0);
b[1] = 4;
console.log(b[1]); // 4
console.log(a[1]); // 2
