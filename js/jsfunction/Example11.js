function myFunc() {
  //Returning a function
  return function calc(x) {
    return x * 2;
  };
}

let answer = myFunc()(2);
console.log(answer);
