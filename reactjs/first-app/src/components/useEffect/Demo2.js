import React, { useEffect, useState } from "react";

const Demo2 = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    const eventHandelar = () => console.log("hello");
    document.addEventListener("click", eventHandelar);
    return () => {
      console.log("cleanUp");
      document.removeEventListener("click", eventHandelar);
    };
  }, [count, number]);

  return (
    <div>
      <h1>useEffect sideEffect</h1>
      <h2>{count}</h2>
      <h2>{number}</h2>
      <button onClick={() => setCount(count + 1)}>UpdateCount</button>
      <button onClick={() => setNumber(number + 1)}>UpdateNum</button>
    </div>
  );
};

export default Demo2;
