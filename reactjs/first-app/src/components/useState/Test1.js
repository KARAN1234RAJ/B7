import React, { useState } from "react";

const Test1 = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>value: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);//1
          setCount(count + 1);
          console.log(count);//1
          setCount(count + 1);
          console.log(count);//1
          

        }}
      >
        ClickMe
      </button>

      <button
        onClick={() => {
          setCount(a=>a+1);
          console.log(count);//0
          setCount(a=>a+1);
          console.log(count);//0
          setCount(a=>a+1);
          console.log(count);//0
        
        }}
      >
        ClickMeAgain
      </button>
      
    </>
  );
};

export default Test1;
