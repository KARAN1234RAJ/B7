import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/ProductAction";

const Products = () => {
  const products = useSelector((state) => state);
  console.log("products from redux", products);
const dispatch = useDispatch()

  const getData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.error(err);
      });
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
