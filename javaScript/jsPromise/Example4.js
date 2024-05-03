// promise chaining
// let promise = new Promise((resolve,reject)=>{
//      resolve("Hello Karan I am first promise")
// })
// promise.then(
//      new Promise((resolve, reject)=>{
//           resolve("welcome to  the second promise");
//      }).then((result1)=>console.log(result1))
// ).then((result)=>console.log(result))

let promise1 = new Promise((resolve, reject) => {
  resolve("Promise one resolved");
});

promise1
  .then(
    new Promise((resolve, reject) => {
      resolve("Second promise resolved");
    }).then((data) => console.log(data))
  )
  .then((data) => console.log(data));
