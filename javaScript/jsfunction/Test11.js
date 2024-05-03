function demo() {
  let x = 5;
  function anotherDemo(x) {
    return x * 3;
  }
  return anotherDemo;
}
console.log(demo()(10));
