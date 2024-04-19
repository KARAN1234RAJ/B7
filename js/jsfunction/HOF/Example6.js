const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (total, number) {
  return total + number;
}, 0);

console.log(sum);
// Output: 15
