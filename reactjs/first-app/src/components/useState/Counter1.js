import React, { useState } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Value: {count}</h1>
      {/* <button onClick={()=>{
          setCount(count+1);
          setCount(count+1);
          setCount(count+1);
          setCount(count+3);
     }}>Update</button> */}
      <button
        onClick={() => {
         setCount(a=>a+1)
         setCount(a=>a+1)
         setCount(a=>a+2)
          // setCount(10);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Counter1;
