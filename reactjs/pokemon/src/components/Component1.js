import React from "react";
import { useContext } from "react";
import { cradential } from "../AllContext";
import Component2 from "./Component2";

const Component1 = () => {
  const { email, setEmail, password, setPassword } = useContext(cradential);

  console.log(email, password);

  return (
    <div>
      <h1>Component-1:  {email}</h1>
      <button onClick={()=>setEmail("user@gmail.com")}>ChangeEmail</button>
      <Component2 />
    </div>
  );
};

export default Component1;
