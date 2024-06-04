import React from "react";
import { useRef } from "react";

const UseReference = () => {
  const name = useRef();
  const password = useRef();
  var myName = "";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    myName = name.current.value;
    console.log(password.current.value);
    console.log(myName);
  };

  return (
    <div>
      {" "}
      <h1>UseReference{name.current} </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Entern name " ref={name} /> <br />
        <br />
        <input type="password" placeholder="password" ref={password} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UseReference;
