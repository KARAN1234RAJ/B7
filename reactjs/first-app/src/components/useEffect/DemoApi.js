import React, { useEffect, useState } from "react";

const DemoApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json().then((result) => {
        //    console.log(result);
        setData(result);
        setLoading(false);
      })
    );
  }, []);
  //   console.log(data);
  const addPost = async () => {
//     console.log("post added"); 
const url ="https://jsonplaceholder.typicode.com/posts";
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Vinisha Rathod",
        body: "Vinisha and Rishika are Friend",
        userId: 1,
      }),
    });
    const result = await response.json();
    setData([...data, result]);
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid yellowgreen",
              padding: "10px",
              width: "60%",
              height: "150px",
              margin: "10px auto",
              boxSizing: "border-box",
              borderRadius: "10px",
            }}
          >
            <h3>Title: {item.title}</h3>
            <p>Content: {item.body}</p>
          </div>
          
        ))
        
      )}
      <button onClick={() => addPost()}>Add Post</button>
    </>
  );
};

export default DemoApi;
