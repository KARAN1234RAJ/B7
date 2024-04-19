const greater = () => {
  console.log("A is greater than B");
};
const smaller = () => {
  console.log("A is smaller than B");
};
const isAGreater = (a, b, greater, smaller) => {
  if (a > b) {
    greater();
  } else {
    smaller();
  }
};
isAGreater(23, 45, greater, smaller);
