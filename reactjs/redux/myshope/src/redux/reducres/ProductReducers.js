import { ActionType } from "../constant/ActionType";

const initialState = {};

export const ProductReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
