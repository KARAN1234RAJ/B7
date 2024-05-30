import React from "react";
import { createStore, combineReducers } from "redux";
const Demo = () => {
  // Action Creator
  const createPolicy = (name, amount) => {
    return {
      type: "CREATE_POLICY",
      payload: {
        name: name,
        amount: amount,
      },
    };
  };

  const deletePolicy = (name) => {
    return {
      type: "DELETE_POLICY",
      payload: {
        name: name,
      },
    };
  };

  const createClaim = (name, claimAmount) => {
    return {
      type: "CREATE_CLAIM",
      payload: {
        name: name,
        claimAmount: claimAmount,
      },
    };
  };
  // Reducer
  const listOfPolicies = (listOfPolicies = [], action) => {
    if (action.type === "CREATE_POLICY") {
      return [...listOfPolicies, action.payload.name];
    } else if (action.type === "DELETE_POLICY") {
      return listOfPolicies.filter((name) => name !== action.payload.name);
    } else {
      return listOfPolicies;
    }
  };
  //
  const claimHistory = (oldClaim =[], action) => {
    if (action.type === "CREATE_CLAIM") {
      return [...oldClaim, action.payload.claimAmount];
    } else {
      return oldClaim;
    }
  };

  const accounting = (bagOfMoney = 1000, action) => {
    if (action.type === "CREATE_CLAIM") {
      return bagOfMoney - action.payload.claimAmount;
    } else if (action.type === "CREATE_POLICY") {
      return bagOfMoney + action.payload.amount;
    } else {
      return bagOfMoney;
    }
  };

  //
  //   console.log(combineReducers, createStore);
  const allReducers = combineReducers({
    listOfPolicies,
    claimHistory,
    accounting,
  });
  const store = createStore(allReducers);
//   console.log(store);
  const action1 = createPolicy("Vinisha", 1000);
  store.dispatch(action1);
  store.dispatch(createPolicy("Rishika",5000));
  store.dispatch(createPolicy("Anjali",2000));
  store.dispatch(createPolicy("Priyanshi",10000))

  store.dispatch(createClaim("Rishika",1000))

  store.dispatch(deletePolicy("Anjali"))

  //
  console.log(store.getState());


  return (
    <div>
      <h1>Demo</h1>
    </div>
  );
};

export default Demo;
