import React, { useState } from "react";

const Controlled = () => {
  const [text, setText] = useState(" ");
  const [pass, setPass] = useState("");
  return (
    <div>
      <h1>Controlled</h1>
      <p>Enter Name</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Enter Password</p>
      <input type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
      />
      <h2>Input value is {text}</h2>
      <h3>Password:{pass}</h3>
     
    </div>
  );
};

export default Controlled;
