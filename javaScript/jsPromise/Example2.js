let promise = new Promise((resolve, reject) => {
  // resolve("my name is Karan Raj");
  reject("Promise is rejected");
});

promise.then(
  (result) => {
    console.log(result);
  },
  (err) => {
    console.error(err);
  }
);
