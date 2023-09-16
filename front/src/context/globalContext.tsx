import React, { createContext, useReducer } from "react";
export const GlobalContext = createContext<any>(null);

const initialState = {
  connected: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_CONNECTED":
      localStorage.setItem("connected", action.payload);
      return {
        ...state,
        connected: localStorage.getItem("connected"),
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