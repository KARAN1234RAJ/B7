import React, { useState } from "react";
import { dogsData } from "./Data";
const DogDetails = () => {
  const [index, setIndex] = useState(0);
  function handleNext() {
    //     index = index + 1;
    //     console.log(index);
    setIndex(index + 1);
  }
  let dogData = [];
  if (index < 10) {
    dogData = dogsData[index];
  } else {
    setIndex(0);
  }

  return (
    <div style={{ marginLeft: "20%" }}>
      <h1>DogDetails</h1>

      <img src={dogData.url} height="350px" width="400px" />
      <h3>
        Dog userId:<span style={{ color: "green" }}>{dogData.id}</span>
      </h3>
      <div>
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
};

export default DogDetails;
