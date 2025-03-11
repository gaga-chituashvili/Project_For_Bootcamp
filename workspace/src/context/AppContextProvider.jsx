import React, { createContext, useContext, useReducer } from "react";
import { initialState, Reducer } from "./reducer";

const context = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

export const UseAppContext = () => {
  const appContext = useContext(context);
  if (!appContext) {
    throw new Error("App context error");
  }
  return appContext;
};

export default AppContextProvider;
