const addition = (x, y, z) => {
  return x + y + z;
};
console.log(addition(2, 3, 5));

//=============================================

function sum(x) {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
}
console.log(sum(1)(2)(3));
