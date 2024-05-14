import React, { useState } from "react";

const Btn = () => {
  const [isDark, setIsDark] = useState(false);
  const handleTheme = () => {
    console.log("btn clicked", isDark);
    setIsDark(!isDark);
  };
  return (
    <div
      style={{
        margin: "10%",
        width: "450px",
        height: "300px",
        backgroundColor: "cyan",
      }}
    >
      <button onClick={() => handleTheme()}>{isDark ? "Light" : "Dark"}</button>
      <h3 style={{ color: "red" }}>Welcome to light and Dark page!</h3>
    </div>
  );
};

export default Btn;
