import React, { createContext, useReducer } from "react";
export const GlobalContext = createContext<any>(null);

const initialState = {
  fetch: false,
  color: false,
  entry: {},
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_FETCH":
      localStorage.setItem("fetch", action.payload);
      return {
        ...state,
        fetch: localStorage.getItem("fetch"),
      };
    case "SET_COLOR":
      localStorage.setItem("color", action.payload);
      return {
        ...state,
        color: localStorage.getItem("color"),
      };
    case "SET_ENTRY":
      localStorage.setItem("entry", action.payload);
      return {
        ...state,
        entry: localStorage.getItem("entry"),
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;