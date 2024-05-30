import React from "react";
import { createStore, combineReducers } from "redux";
const Demo2 = () => {
  // Action creator
  const createPolicy = (name, amount) => {
    // return action
    return {
      type: "CREATE_POLICY",
      payload: {
        name: name,
        amount: amount,
      },
    };
  };
  //
  const deletePolicy = (name) => {
    return {
      type: "DELETE_POLICY",
      payload: {
        name: name,
      },
    };
  };

  const claimPolicy = (name, claimAmount) => {
    return {
      type: "CLAIM_POLICY",
      payload: {
        name: name,
        claimAmount: claimAmount,
      },
    };
  };

  // reducer

  const listOfPolicies = (listofPolicy = [], action) => {
    if (action.type === "CREATE_POLICY") {
      return [...listofPolicy, action.payload.name];
    } else if (action.type === "DELETE_POLICY") {
      return listofPolicy.filter((name) => name !== action.payload.name);
    } else {
      return listofPolicy;
    }
  };
  const claimHistory = (listOfClaim = [], action) => {
    if (action.type === "CLAIM_POLICY") {
      return [...listOfClaim, action.payload];
    } else {
      return listOfClaim;
    }
  };
  const accounting = (bagofMoney = 10000, action) => {
    if (action.type === "CREATE_POLICY") {
      return bagofMoney + action.payload.amount;
    } else if (action.type === "CLAIM_POLICY") {
      return bagofMoney - action.payload.claimAmount;
    } else {
      return bagofMoney;
    }
  };
  // console.log(createStore, combineReducers);
  //  combining all reducers
  const allReducers = combineReducers({
    listOfPolicies: listOfPolicies,
    claimHistory: claimHistory,
    accounting: accounting,
  });
  // creating store
  const store = createStore(allReducers);

  // console.log(store);
  store.dispatch(createPolicy("Mayank", 2000));
  store.dispatch(createPolicy("Sagar", 3000));
  store.dispatch(createPolicy("Harshita", 5000));
  store.dispatch(createPolicy("Ranu", 4000));
  store.dispatch(createPolicy("Simran", 1000));

  store.dispatch(claimPolicy("Harshita",2000))

  store.dispatch(deletePolicy("Simran"))

  console.log(store.getState());

  return (
    <div>
      <h1>Redux Demo !</h1>
    </div>
  );
};

export default Demo2;
