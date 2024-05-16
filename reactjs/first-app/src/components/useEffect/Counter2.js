import React, { useEffect } from "react";

const Counter2 = () => {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    console.log("useEffect called");
    const eventHandelar = () => console.log("Hii");
    document.addEventListener("click", eventHandelar);
    return () => {
     console.log("Hello cleanup");
      document.removeEventListener("click", eventHandelar);
    };
  }, [count]);

  return (
    <div>
      <h1>Counter2</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        update
      </button>
    </div>
  );
};

export default Counter2;
