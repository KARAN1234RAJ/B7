import React, { useState, useEffect } from "react";

const Simran = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
//     console.log("useEffect called");
    let interval = setInterval(() => {
      console.log("Simram Called");
    }, 1000);
    return () => {
     //  console.log("cleanup called");
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div>
      <h2>Hello Simran </h2>
      <h2>{count}</h2>
      <h2>{number}</h2>
      <button onClick={() => setCount(count + 1)}>UpdateCount</button>
      <button onClick={() => setNumber(number + 1)}>UpdateNum</button>
    </div>
  );
};

export default Simran;
