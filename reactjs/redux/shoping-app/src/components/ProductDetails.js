import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectProduct } from "../redux/actions/ProductAction";

const ProductDetails = () => {
  const { param } = useParams();
  console.log(param);
  const id = param.productid;
  const dispatch = useDispatch();
  const getSingleProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.error(err);
      });
    console.log("==========", response);
    dispatch(selectProduct(response.data));
  };
  useEffect(() => {
    if (id && id !== "") getSingleProduct();
  }, [id]);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
