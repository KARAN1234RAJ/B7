import React from "react";
import { useEffect, useState } from "react";


function Shope() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  let url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?page=${page}&limit=5`;

  //   useEffect(() => {
  //     fetch(url).then((result) => {
  //       result.json().then((response) => {
  //         console.log("response", response);
  //         setData(response);
  //       });
  //     });
  //   }, []);
  //   // console.log("data",data[0].id)
  // //   console.log(page);

  //   return (
  //     <>
  //       <h1 className="shop-title">Shopping Scroll App</h1>
  //       <label className="shop-label">Search for articles</label>
  //       <input className="shop-input" type="text" placeholder="Enter a keyword" />
  //       <div className="shop-articles">
  //         {data.map((item) => {
  //           return (
  //             <div className="article">
  //               <h2 className="article-title">{item.title}</h2>
  //               <p>{item.price}</p>
  //               <p>{item.description}</p>
  //               <p>{item.category}</p>
  //               <a>
  //                 <img className="img" src={item.image} />
  //               </a>
  //               <p>
  //                 {item.rating.rate},{item.rating.count}{" "}
  //               </p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </>
  //   );
  // }
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData((prevData) => [...prevData, ...result]);
        setIsLoading(false);
      } catch (error) {
        console.error("failed to detch data: ", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
    setPage(1);
    setData([]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight &&
        !isLoading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <>
      <h1 className="shop-title">Shopping Scroll App</h1>
      <label className="shop-label">Search for articles</label>
      <input
        className="shop-input"
        type="text"
        placeholder="Enter a keyword"
        onChange={handleChange}
        value={searchText}
      />
      <div className="shop-articles">
        {data
          .filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item, index) => (
            <div className="article" key={index}>
              <h2 className="article-title">{item.title}</h2>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <a>
                <img className="img" src={item.image} alt={item.title} />
              </a>
              <p>
                {item.rating.rate}, {item.rating.count}
              </p>
            </div>
          ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </>
  );
}
export default Shope;
