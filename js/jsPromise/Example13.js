const countValue = -2;

let promiseCount = new Promise(function (resolve, reject) {
  if (countValue > 0) {
    resolve("The count value is positive.");
  } else {
    reject("Negative count value!");
  }
});

promiseCount
  .then((response) => console.log(response))
  .catch((reason) => console.log(reason));
