import { ActionsType } from "../constants/Action-types.js";

const initialState = {};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsType.SET_PRODUCTS:
      return { ...state, products: payload };
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
