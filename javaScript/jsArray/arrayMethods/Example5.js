const groceryList = ["egg", "butter", "bread"];

const itemOne = groceryList[0];
const itemTwo = groceryList[1];
const itemThree = groceryList[2];

console.log(itemOne, itemTwo, itemThree);

const [itemOneAgain, itemTwoAgain, itemThreeAgain] = groceryList;
console.log(itemOneAgain, itemTwoAgain, itemThreeAgain);
