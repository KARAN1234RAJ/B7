import React from "react";
import Component3 from "./Component3";
import { fullName } from "../AllContext";

const Component2 = () => {
  return (
    <div>
      <h1>Component 2</h1>
      <Component3 />
      <fullName.Consumer>
        {({ name, setName }) => {
          return (
            <>
              <h1>{name}</h1>
              <button onClick={() => setName("Harsh Raj")}>Change Name</button>
            </>
          );
        }}
      </fullName.Consumer>
    </div>
  );
};

export default Component2;
