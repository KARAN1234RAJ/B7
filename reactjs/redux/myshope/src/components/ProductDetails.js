import React from "react";
import { useSelector } from "react-redux";
const ProductDetails = () => {
  const products = useSelector((state) => state);
  console.log("products from redux", products);
  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
};

export default ProductDetails;
