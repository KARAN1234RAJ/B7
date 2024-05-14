import React, { useState } from "react";
import { catsData } from "./Data";

// console.log(catsData[1]);

const CatDetails = () => {
  let [index, setIndex] = useState(0);
  function handleNextItem() {
    console.log("Clicked", index);
    setIndex(index + 1);
  }
  let catData = [];
  if (index < 10) {
    catData = catsData[index];
    console.log(index);
  } else {
    setIndex(0);
  }
  return (
    <div style={{ marginLeft: "40%" }}>
      <h1 style={{ color: "red" }}>Cat Details</h1>
      <div>
        <img src={catData.url} width={350} height={325} />
      </div>
      <button
        style={{ width: "350px", height: "50px", backgroundColor: "#03AED2" }}
        onClick={() => handleNextItem()}
      >
        Click for Next...
      </button>
    </div>
  );
};

export default CatDetails;
