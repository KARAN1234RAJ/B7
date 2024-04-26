// Promise Alll

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 is resolved");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise2 is resolved");
  }, 1000);
});

Promise.any([promise1, promise2]).then((result)=>{
     console.log(result);
     console.log(result[0]);
     console.log(result[1]);

}).catch((error) =>{
   console.log(`Error: ${error}`);
})