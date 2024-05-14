import React, { useState, useEffect } from "react";
import "./App.css";
import { ProgressBar } from "./progress";

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let progressInterval;
    progressInterval = setInterval(() => {
      setValue((prev) => {
        if (value < 100) {
          return prev + 1;
        } else {
          clearInterval(progressInterval);
          return prev;
        }
      });
    }, 100);
    return () => {
      clearInterval(progressInterval);
    };
  }, [value]);

  return [
    <div> Div 1</div>,
    <div> Div 2</div>,
    <div> Div 3</div>,
    <div> Div 4</div>
  ];
}

export default App;
