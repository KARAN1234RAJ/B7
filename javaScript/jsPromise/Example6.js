// Promise Alll

function CombinePromise() {
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise1 is resolved");
    }, 3000);
  });

  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise2 is resolved");
    }, 1000);
  });

  return Promise.all([promise1, promise2]);
}

CombinePromise().then((val) => console.log(val));
