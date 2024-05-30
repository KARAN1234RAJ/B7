import React from "react";
import { createStore, combineReducers } from "redux";
const ReduxDemo = () => {
  // Action Creator
  const createPolicy = (name, amount) => {
    return {
      type: "CREATE_POLICY",
      payload: { name: name, amount: amount },
    };
  };
  const deletePolicy = (name) => {
    return {
      type: "DELETE_POLICY",
      payload: { name: name },
    };
  };
  const createClaim = (name, claimAmount) => {
    return {
      type: "CREATE_CLAIM",
      payload: { name: name, claimAmount: claimAmount },
    };
  };

  // Reducers
  const listOfPolicies = (lisOfPolicy = [], action) => {
    if (action.type === "CREATE_POLICY") {
      return [...lisOfPolicy, action.payload.name];
    } else if (action.type === "DELETE_POLICY") {
      return lisOfPolicy.filter((name) => name !== action.payload.name);
    } else {
      return lisOfPolicy;
    }
  };
  //
  const claimsHistory = (oldListOfClaim = [], action) => {
    if (action.type === "CREATE_CLAIM") {
      // we care about the action form
      return [...oldListOfClaim, action.payload];
    } else {
      // we don't care
      return oldListOfClaim;
    }
  };
  //
  const accounting = (bagOfMoney = 1000, action) => {
    if (action.type === "CREATE_CLAIM") {
      return bagOfMoney - action.payload.claimAmount;
    } else if (action.type === "CREATE_POLICY") {
      return bagOfMoney + action.payload.amount;
    } else {
      return bagOfMoney;
    }
  };

  // Combining Reducers

  const allReducers = combineReducers({
    listOfPolicies: listOfPolicies,
    claimsHistory: claimsHistory,
    accounting: accounting,
  });
  //
  // Creating Store
  const store = createStore(allReducers);
  // console.log(store);
  // console.log(store.getState());
  const action1 = createPolicy("Karan", 1000);
  store.dispatch(action1);
  store.dispatch(createPolicy("Mohit", 5000));
  store.dispatch(createPolicy("user", 6000));

  store.dispatch(createClaim("Mohit", 500));
  store.dispatch(createClaim("Karan",100))

  store.dispatch(deletePolicy("user"))



  console.log(store.getState());
  return (
    <>
      <h1>Redux ReduxDemo</h1>
    </>
  );
};

export default ReduxDemo;
