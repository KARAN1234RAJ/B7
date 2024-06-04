import React, { useContext } from "react";
import { MyContext, LastName } from "./Component1";

const Component3 = () => {
  const fName = useContext(MyContext);
  const lName = useContext(LastName);
  console.log(fName);
  return (
    <div>
      <h1>
       My Name is : {fName} {lName}
      </h1>
    </div>
  );
};

export default Component3;
