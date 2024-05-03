// Creating a new promise
const promise = new Promise((resolve, reject) => {
//   throw "Got Rejected!";
reject(Error("Oops! Something went wrong."));
});

promise.catch((error) => {
  console.error(error);
});
// expected output: Got Rejected!
