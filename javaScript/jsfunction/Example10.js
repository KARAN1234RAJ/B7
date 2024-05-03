function myFunc() {
  //Returning a function
  return function calc(x) {
    return x * 2;
  };
}

let a = myFunc();
let answer = a(2);
console.log(answer);
