const countValue = 2;

let promiseCount = new Promise(function (resolve, reject) {
  if (countValue > 0) {
    resolve("The count value is positive.");
  } else {
    reject("Negative count value!");
  }
});

console.log(promiseCount);
