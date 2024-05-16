import React, { useEffect, useState } from "react";

const Counter3 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Entery Point");
    const interval = setInterval(() => {
      console.log("inside setInterval");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
};

export default Counter3;
