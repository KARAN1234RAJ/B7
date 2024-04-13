function outermost(a) {
  //It cannot access 'b' or 'c'
  function outer(b) {
    //It can only access 'a'
    function inner(c) {
      //It can access both 'a' and 'b'
      console.log("outermost function: a = ", a);
      console.log("outer function: b = ", b);
      console.log("inner function: c = ", c);
    }
    inner(3);
  }
  outer(2);
}
outermost(1);
