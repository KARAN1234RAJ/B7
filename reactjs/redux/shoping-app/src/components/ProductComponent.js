import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.products);
  // console.log("products from redux--", products);
  const renderList = products.products.products;
  // console.log(renderList);
  // if (renderList) {
  //   setIsLOding(false);
  // }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "55px" }}>
      {renderList.map((product) => {
        return (
          <div
            style={{
              border: "1px solid yellowgreen",
              borderRadius: "10px",
              padding: "20px",
              width: "350px",
              height: "400px",
              marginLeft: "25px",
              marginTop: "10px",
              boxSizing: "border-box",
            }}
            key={product.id}
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                width={200}
                height={200}
                style={{ margin: "10px" }}
              ></img>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductComponent;
