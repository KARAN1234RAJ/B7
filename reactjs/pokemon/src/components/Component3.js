import React from "react";
import { useContext } from "react";
import { fullName, ageGender } from "../AllContext";

const Component3 = () => {
  const name = useContext(fullName);
  const { age, gender } = useContext(ageGender);
  console.log(name);

  return (
    <div>
      <h1>
        Age and Gender is {age} and {gender}{" "}
      </h1>
    </div>
  );
};

export default Component3;
