let arrNum = [15, 39, 20, 32, 30, 45, 22];
function divByFive(num) {
  return num % 3 == 0;
}
console.log(arrNum);
let arrNewNum = arrNum.filter(divByFive);
console.log(arrNewNum);
