import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/ProductAction";

const ProductsList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch(products);
  // console.log(products);
  const getProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    getProducts();
  },[]);
  return (
    <div className="">
      <ProductComponent />
    </div>
  );
};

export default ProductsList;
