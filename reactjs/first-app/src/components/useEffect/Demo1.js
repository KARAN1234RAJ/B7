import React, { useEffect, useState } from "react";

const Demo1 = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [data, setData] = useState(10);
  //   useEffect(() => {
  //     console.log("useEffect without Dependency");
  //   });

  //   useEffect(() => {
  //     console.log("useEffect with empty dependency");
  //   }, []);

  useEffect(() => {
    console.log("useEffect with state dependency");
  }, [data,number]);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <h2>{number}</h2>
      <h2>{data}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        updateCount
      </button>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        updateNum
      </button>
      <button
        onClick={() => {
          setData(data - 1);
        }}
      >
        updateData
      </button>
    </div>
  );
};

export default Demo1;
