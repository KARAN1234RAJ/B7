import React from "react";
import { createStore } from "redux";

const Bankapp = () => {
  // Initial state
  const defaultState = 0;
  // reducers
  const bankReducers = (state = defaultState, action) => {
    console.log("reducer Invocked", action);
    switch (action.type) {
      case "DEPOSIT_AMOUNT":
        return state + action.payload.amount;
      case "WITHDROW_AMOUNT":
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
  //   console.log(store.getState());
  //   store.dispatch({ type: "abc" });
  store.dispatch({
    type: "DEPOSIT_AMOUNT",
    payload: {
      amount: 100,
    },
  });
  store.dispatch({
    type: "DEPOSIT_AMOUNT",
    payload: {
      amount: 200,
    },
  });
  store.dispatch({
    type: "DEPOSIT_AMOUNT",
    payload: {
      amount: 300,
    },
  });
  store.dispatch({
    type: "WITHDROW_AMOUNT",
    payload: {
      amount: 100,
    },
  });
  store.dispatch({
    type: "WITHDROW_AMOUNT",
    payload: {
      amount: 200,
    },
  });

  //   console.log(store.getState());
  return (
    <div>
      <h1>Bank App</h1>
      <p>Using This App We can diposit and withdrow the amount from Bank</p>
    </div>
  );
};

export default Bankapp;
