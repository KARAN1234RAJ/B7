import React from "react";
import { createStore } from "redux";

const Bank = () => {
  // initial state
  const initialState = 1000;
  // Action Creator
  const depositAmount = (amount) => {
    // return action
    return {
      type: "DEPOSIT_AMOUNT",
      payload: {
        amount: amount,
      },
    };
  };
  const withdrawAmount = (amount) => {
    // return action
    return {
      type: "WITHDRAW_AMOUNT",
      payload: {
        amount: amount,
      },
    };
  };
  // reducers
  const bankReducers = (state = initialState, action) => {
    console.log("reducer invocked");
    switch (action.type) {
      case "DEPOSIT_AMOUNT":
        return state + action.payload.amount;
      case "WITHDRAW_AMOUNT":
        return state - action.payload.amount;
      default:
        return state;
    }
  };

  // store
  const store = createStore(bankReducers);
  store.subscribe(() => {
    console.log(store.getState());
  });
  store.dispatch({
    type: "abcd",
    payload: {
      amount: 400,
    },
  });
  store.dispatch(depositAmount(100));
  store.dispatch(depositAmount(500));
  store.dispatch(withdrawAmount(300));
  //   console.log(store);
  //   console.log(store.getState());
  return (
    <div>
      <h1>Bank App</h1>
    </div>
  );
};

export default Bank;
