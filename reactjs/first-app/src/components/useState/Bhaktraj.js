import { useState } from "react";
function Details(props) {
  const [name, setName] = useState("Bhakt Raj");
  console.log(props);
  function changeState() {
  
    setName("Bhakt Raj Prajapati");
    props.setAge(28)
  }
  return (
    <>
      <h1>Name : {name}</h1>
      <h2>Age : {props.age}</h2>
      {/* <button onClick={changeState}>Click For Change</button> */}
      <button
        onClick={() => {
          changeState();
        }}
      >
        Click For Change
      </button>
    </>
  );
}
export default Details;
