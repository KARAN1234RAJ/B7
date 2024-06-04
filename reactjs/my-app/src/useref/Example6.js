import React from "react";
import { useRef } from "react";

const Example6 = () => {
  const name = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
  };
  return (
    <div>
      <h1>Karan</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter name" ref={name} /> <br />
        <br />
        <input type="password" ref={password} /> <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Example6;
