import React, { useReducer } from "react";
import "./App.css";
import { Calculator } from "./calculator";

const initialState = {
  input: "",
};

const CalculatorReducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "CLEAR_INPUT":
      return { ...state, input: "" };
    case "APPEND_INPUT":
      return { ...state, input: state.input + action.payload };
    default:
      return state;
  }
};

export const CalculatorContext = React.createContext();
function App() {
  const [state, dispatch] = useReducer(CalculatorReducer, initialState);
  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      <Calculator />
    </CalculatorContext.Provider>
  );
}

export default App;
