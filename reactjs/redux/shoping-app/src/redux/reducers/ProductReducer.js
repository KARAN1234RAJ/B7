import { ActionsType } from "../constants/Action-types.js";

const initialState = {
  products: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionsType.SELECTED_PRODUCT:
      return { ...state, payload };
    default:
      return state;
  }
};
