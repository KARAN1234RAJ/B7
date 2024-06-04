import { useRef } from "react";
const Example4 = () => {
  const countClick = useRef(0);

  const handleClick = () => {
    countClick.current++;
    console.log(
      ` Number of times the button is clicked: ${countClick.current}`
    );
  };


  return <button onClick={handleClick}>Click the button!</button>;
};

export default Example4;
