// Creating a new promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 1000);
});

myPromise.then((value) => {
  console.log(value);

});

console.log(myPromise);

