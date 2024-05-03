function myFunc() {
  // console.log(arguments);

  //   console.log(arguments[0]);
  //   console.log(arguments[1]);
  //   console.log(arguments[2]);
  //   console.log(arguments[3]);
  //   console.log(arguments[4]);
  //   console.log(arguments[5]);

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
myFunc(1, 2, "This is argument object", "a", "b", "hello");
