import { combineReducers } from "redux";
import { ProductReducer,selectedProductReducer } from "./ProductReducer";
const allReducers = combineReducers({
  products: ProductReducer,
  selectedProduct: selectedProductReducer
});

export default allReducers;
