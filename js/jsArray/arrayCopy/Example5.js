let nestedArray = [1, [2], 3];
let arrayCopy = [...nestedArray];

// Make some changes
arrayCopy[0] = "one";
arrayCopy[1][0] = "two";
console.log(arrayCopy);

console.log(nestedArray);
