import React, { useEffect, useRef } from "react";

const Example5 = () => {
  const counter = useRef(0);
  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <h1>{`Numberof times the component renders:  ${counter.current} `}</h1>
  );
};

export default Example5;
