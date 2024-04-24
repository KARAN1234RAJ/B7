let arrOne = [32, 45, 63, 36, 24, 11];
const multFive = (num) => {
  return num * 5;
};
console.log(arrOne);
let arrTwo = arrOne.map(multFive);
console.log(arrTwo);

let arrthree = arrOne.map((num) => num * 3);
console.log(arrthree);
