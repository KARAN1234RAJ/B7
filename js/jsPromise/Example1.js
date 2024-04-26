let promise1 = new Promise((resolve, reject) => {
  // resolve("i am fine?");
  reject("tum se mtlb")
});
promise1.then(
  (data) => console.log(data)
).catch( (error) => console.log(error));
