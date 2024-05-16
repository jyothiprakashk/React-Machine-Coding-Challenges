import React from "react";
import { useState } from "react";
export const Calculator = () => {
  const [input, setInput] = useState("");
  const onHandleCalculate = (e) => {
    const buttonValue = e.target.innerHTML;
    switch (buttonValue) {
      case "=":
        calculateResult();
        break;
      case "Reset":
        setInput("");
        break;
      case "DEL":
        setInput((prevInput) => prevInput.slice(0, -1));
        break;
      default:
        setInput((prevInput) => prevInput + buttonValue);
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(String(result));
    } catch (error) {
      console.error("Error:", error);
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <input readOnly value={input} />
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
