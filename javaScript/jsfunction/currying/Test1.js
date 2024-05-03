const addPartial = (a, b, c) => {
  return a + b + c;
};
var partialFunc = addPartial.bind(this, 2, 3);
partialFunc(5);

const addCurrying = (a) => (b) => (c) => {
  return a + b + c;
};
let curriedAdd = addCurrying(10)(4)(6);
console.log(curriedAdd);
