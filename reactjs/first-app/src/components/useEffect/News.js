import React, { useEffect, useState } from "react";

const News = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    const url =
      "https://newsapi.org/v2/everything?q=tata&from=2024-04-16&sortBy=publishedAt&apiKey=d75118449e5148a4ae3f517868dec207";
    fetch(url).then((response) =>
      response.json().then((result) => {
        //    console.log(result.articles);
        setData(result.articles);
           setIsLoading(false);
     //    setTimeout(() => {
     //      setIsLoading(false);
     //    }, 3000);
      })
    );
  };
  useEffect(() => {
    getData();
  }, []);
//   console.log(data);
  return (
    <>
      {isLoading ? (
        <h1>Loading.....</h1>
      ) : (
        <div>
          {data.map((item) => {
            return (
              <div>
                <img src={item.urlToImage} />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default News;
