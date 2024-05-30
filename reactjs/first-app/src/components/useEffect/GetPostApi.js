import React, { useEffect, useState } from "react";

const GetPostApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let url = "https://jsonplaceholder.typicode.com/posts";

  const getData = () => {
    fetch(url).then((response) => {
      response.json().then((result) => {
        // console.log(result);
        setData(result);
        setIsLoading(false);
      });
    });
  };
  const addPostData = async () => {
    console.log("data added");
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Karan Raj",
        body: "I am a developer",
        userId: 1,
      }),
    });
    let newData = await response.json();
    setData([...data, newData]);
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(data);
  return (
    <>
      {isLoading ? (
        <h1 style={{ marginLeft: "400px", color: "red", paddingTop: "200px" }}>
          Loading...
        </h1>
      ) : (
        <>
          {data.map((item) => {
            return (
              <div
                style={{
                  border: "1px solid green",
                  margin: "10px",
                  padding: "15px",
                  background: "#FFFAE6",
                  color: "#850F8D",
                  width: "60%",
                  height: "10%",
                  marginLeft: "200px",
                }}
              >
                <h3>{item.title}</h3>
                <p style={{ color: "#0A6847" }}>{item.body}</p>
              </div>
            );
          })}
          <button onClick={() => addPostData()}>Add Data</button>
        </>
      )}
    </>
  );
};

export default GetPostApi;
