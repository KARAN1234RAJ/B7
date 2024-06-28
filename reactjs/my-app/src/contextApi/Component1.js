import React, { createContext } from "react";
import Component2 from "./Component2";

const MyContext = createContext();// context 
const LastName = createContext();
const Component1 = () => {
  const firstName = "Karan ";
  return (
    <div>
      <h1>Component1</h1>
      { /* provider with state*/ }
      <MyContext.Provider value={firstName}>
        <LastName.Provider value="Raj Mehta">
          <Component2 />
        </LastName.Provider>
      </MyContext.Provider>
    </div>
  );
};

export default Component1;
export { MyContext,LastName };
