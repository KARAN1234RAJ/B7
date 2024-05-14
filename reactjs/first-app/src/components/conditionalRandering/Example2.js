import React from "react";

const Condition1 = () => {
  return (
    <>
      <h1>This is consition 1!</h1>
    </>
  );
};

const Condition2 = () => {
  return (
    <>
      <h1>This is consition 2!</h1>
    </>
  );
};

const Output = (props) => {
  if (props.isOutPut) {
    return (
      <>
        <Condition1 />
      </>
    );
  } else {
    return (
      <>
        <Condition2 />
      </>
    );
  }
};
const Example2 = () => {
  return (
    <>
      <h1>Example-2</h1>
      <Output isOutPut={!true} />
    </>
  );
};

export default Example2;
