setTimeout(() => {
  console.log("I am from setTimeout");
}, 1000);

setTimeout(function CallbackHere() {
  console.log("I am from setTimeout");
}, 2000);
