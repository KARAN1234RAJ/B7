import React, { useState } from "react";

const Condition1 = () => {
  return <h1>Condition1!</h1>;
};
function Condition2() {
  return (
    <>
      <h1>This Condition 2 </h1>
    </>
  );
}
function Display({ isDisplay }) {
     const [isVisible, setIsVisible]= useState(isDisplay)
     console.log(isVisible);
//   if (isVisible) {
//     return (
//       <>
//         <Condition1 />
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Condition2 />
//       </>
//     );
//   }
return(
     <>
          <button onClick={()=>setIsVisible(!isVisible)}>clickMe</button>
          {/* {isVisible ? <Condition1/> : <Condition2/>} */}
          {isVisible && <Condition1/>}
     </>
)
}
const Example3 = () => {
  return (  
    <div>
      <h1>Example3</h1>
      <Display isDisplay={!true} />
    </div>
  );
};

export default Example3;
