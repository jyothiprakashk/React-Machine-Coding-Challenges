import React, { useContext } from "react";
import { CalculatorContext } from "./App";

export const Calculator = () => {
  const { state, dispatch } = useContext(CalculatorContext);

  const onHandleCalculate = (e) => {
    const buttonValue = e.target.innerHTML;
    switch (buttonValue) {
      case "=":
        calculateResult();
        break;
      case "Reset":
        dispatch({type:"CLEAR_INPUT",payload:""})
        break;
      case "DEL":
        dispatch({type:"SET_INPUT",payload:state.input.slice(0,-1)})
        break;
      default:
        dispatch({type:"APPEND_INPUT",payload:buttonValue})
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(state.input);
      dispatch({type:"SET_INPUT",payload:String(result)})
    } catch (error) {
      dispatch({type:"SET_INPUT",payload:"Error"})

    }
  };

  console.log(state,'stateinput')
  return (
    <div className="App">
      <input readOnly value={state.input} />
      <div className="buttonWrapper">
        <div onClick={onHandleCalculate} className="calculatorWrapper">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="specialButtons">DEL</button>
        </div>
        <div onClick={onHandleCalculate} className="calculatorWrapper">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
        </div>
        <div onClick={onHandleCalculate} className="calculatorWrapper">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
        </div>
        <div onClick={onHandleCalculate} className="calculatorWrapper">
          <button>.</button>
          <button>0</button>
          <button>/</button>
          <button>*</button>
        </div>
        <div onClick={onHandleCalculate} className="calculatorWrapper">
          <button className="specialButtons">Reset</button>
          <button className="equalButton">=</button>
        </div>
      </div>
    </div>
  );
};
