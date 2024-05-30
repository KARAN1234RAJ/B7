import React, { useEffect, useState } from "react";

const Api2 = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const getNews = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    console.log(url);
    fetch(url).then((response) =>
      response.json().then((result) => {
        console.log(result);
        setData(result);
        setIsLoading(false);
      })
    );
  };
  useEffect(() => {
    getNews();
  }, []);
  //   console.log(data[0].completed);
  const addTodoTask = async () => {
    console.log("data Added");
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Karan Raj",
        body: "MERN Stack Developer",   
        userId:1,
      }),
    });
    const result = await response.json();
    console.log(result);
    setData([...data, result]);
  };
  return (
    <>
      {isloading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  marginLeft: "20%",
                  marginTop: "5px",
                  padding: "5px",
                  border: "2px solid yellowgreen",
                  width: "550px",
                  height: "200px",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <h2>Title: {item.title}</h2>
                <h3>Description: {item.body}</h3>
              </div>
            );
          })}
        </div>
      )}
      <button onClick={() => addTodoTask()}>Add Todo</button>
    </>
  );
};

export default Api2;
