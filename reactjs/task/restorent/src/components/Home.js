import React, { useEffect, useState } from "react";


const Home = () => {
  const [data, setData]= useState([])

  const getData =()=>{
    console.log("getting data from here");
    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(result => console.log("result",result));

  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <h1>This is Home Component</h1>
    </div>
  );
};

export default Home;
