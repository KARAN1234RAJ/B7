array = [11, 12, 13, 14, 15];

const summation = (val, current) => val + current;
total = array.reduce(summation, 0);

console.log(array);
console.log(total);
