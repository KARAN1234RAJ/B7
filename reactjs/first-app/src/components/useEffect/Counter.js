import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
    useEffect(() => {
      console.log("useEffect Executed without Dependency");
    });


  useEffect(() => {
    console.log("useEffect Executed with Empty Array Dependency");
  },[]);

useEffect(() => {
     console.log("useEffect Executed with state Dependency");
   },[number]);
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <h1>{number}</h1>
      <button onClick={increment}>UpdateCount</button>
      <button onClick={() => setNumber(number + 1)}>UpdateNumber
      </button>
    </div>
  );
};

export default Counter;
