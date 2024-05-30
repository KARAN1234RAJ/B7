import { ActionsType } from "../constants/Action-types.js";
export const setProducts = (products) => {
  return {
    type: ActionsType.SET_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const selectProduct = (product) => {
  return {
    type: ActionsType.SELECTED_PRODUCT,
    payload: {
      products: product,
    },
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionsType.REMOVE_SELECTED_PRODUCT,
    payload: {
      products: product,
    },
  };
};
