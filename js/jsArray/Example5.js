const myArray = [1, 2, 3, 4, 5] // 5 elements in total

for(var i = 0; i < myArray.length; i++){
    myArray[i] = myArray[i] * myArray[i];
}
console.log(myArray);
