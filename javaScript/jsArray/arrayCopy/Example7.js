// array containing the array objects (2D arrays)
var deepArray = [[true, false], [undefined], [null]];

var deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy[0].push(true);

console.log(deepArray);

console.log(deepCopy);
