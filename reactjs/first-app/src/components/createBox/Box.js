import React, { useState } from "react";
// import "../styles/App.css";

const Box = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const createBox = () => {
    console.log("Box Created");

    
  };

  return (
    <div id="main">
      <h1>Box Creator</h1>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <button className="create-btn" onClick={() => createBox()}>
        Create Box
      </button>
      <div
        id="box-container"
        style={{ height: "100px", width: "100px", backgroundColor: "red" }}
      >
        {height}
        {width} {backgroundColor}
      </div>
    </div>
  );
};

export default Box;
