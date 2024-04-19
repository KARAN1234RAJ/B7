const smile = () => {
  console.log("Remember to smile every day!");
};
const callFunction = (smile) => {
  if (23 > 45) {
    smile();
  }
};
callFunction(smile());
