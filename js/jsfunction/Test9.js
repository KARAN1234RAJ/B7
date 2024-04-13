function demo() {
  let a = 10;
  anotherDemo();
  function anotherDemo() {
    let b = 20;
  }
  console.log("Hey, I am from demo! b = ", b);
}
demo();
