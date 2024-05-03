function myFunc(a) {
  console.log(a);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

myFunc("One", "Two");
