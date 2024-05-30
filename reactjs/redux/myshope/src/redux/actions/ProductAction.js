import { ActionType } from "../constant/ActionType";

export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const selectProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: {
      product: product,
    },
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionType.REMOVE_SELECTED_PRODUCT,
    payload: {
      products: product,
    },
  };
};
