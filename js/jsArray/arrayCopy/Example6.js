let nestedArray = [1, [2], 3];
let arrayCopy = JSON.parse(JSON.stringify(nestedArray));

// Make some changes
arrayCopy[0] = "One";
arrayCopy[1][0] = "Two";
console.log(arrayCopy);

console.log(nestedArray);
