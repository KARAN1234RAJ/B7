import React, { useEffect, useState } from "react";
import "./api.css";

const Api = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const getNews = () => {
    const url =
      "https://newsapi.org/v2/everything?q=cricket&from=2024-04-16&sortBy=publishedAt&apiKey=d75118449e5148a4ae3f517868dec207";
    console.log(url);
    fetch(url).then((response) =>
      response.json().then((result) => {
        //    console.log(result.articles);
        setData(result.articles);
        setIsLoading(false);
      })
    );
  };
  useEffect(() => {
    getNews();
  }, []);
  console.log(data);
  return (
    <>
      {isloading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {data.map((item) => {
            return (
              <div key={item.url} className="card">
                <img
                  src={item.urlToImage}
                  alt="news"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={item.url} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Api;
