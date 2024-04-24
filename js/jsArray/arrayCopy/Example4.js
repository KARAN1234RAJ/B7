let array = [1, 2, 3];
let arrayCopy = [...array];

console.log(arrayCopy);

arrayCopy[0] = "one";
console.log(arrayCopy);

console.log(array);
