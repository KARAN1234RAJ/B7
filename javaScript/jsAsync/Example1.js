console.log(10);
const goodFunc = () => {
  console.log("good");
};

const bestFunc = () => {
  goodFunc();
  console.log("best");
};
bestFunc();
