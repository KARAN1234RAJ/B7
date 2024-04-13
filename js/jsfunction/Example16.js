function parent(x) {
  function child(y) {
    return x + y;
  }
  return child;
}
let fn_child = parent(10); 
let result = fn_child(5); 
console.log(result);

//Another way to write the same
let result1 = parent(10)(5);
console.log(result1);
