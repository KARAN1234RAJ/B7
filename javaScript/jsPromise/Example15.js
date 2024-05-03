let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Inside the promise");
  }, 4000);
});

// promise.then((data) => console.log(data)).catch((error) => console.log(error));

// function getData() {
//   console.log("Getting data...");
//   promise
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

//   console.log("Inside Function ");
// }

async function getData() {
     console.log("Karan");
  const data = await promise;
  console.log(data);

  console.log("Inside Function ");
}

getData();
