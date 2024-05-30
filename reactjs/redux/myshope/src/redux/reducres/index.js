import { combineReducers } from "redux";
import { ProductReducers } from "./ProductReducers";

const allReducers = combineReducers({
  product: ProductReducers,
});

export default allReducers;
