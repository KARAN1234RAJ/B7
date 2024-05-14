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

const Example1 = () => {
  let isCondition = !true;
  if (isCondition) {
    return (
      <>
        <h1>Example Of Condition Randering! By variable</h1>
        <Condition1 />
      </>
    );
  } else {
    return (
      <>
        <h1>Example Of Condition Randering! using variable</h1>
        <Condition2 />
      </>
    );
  }
};

export default Example1;
