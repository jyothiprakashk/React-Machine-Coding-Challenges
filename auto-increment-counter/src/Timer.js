import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export function IncrementCounter() {
  const [timeCounter, setTimeCounter] = useState(0);
  const [isStart, setStart] = useState(true);
  const timerRef = useRef(null);
  
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeCounter((prev) => {
        if (isStart) {
          return prev + 1;
        } else {
          clearInterval(timerRef.current);
          return prev;
        }
      });
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [isStart]);

  const ResetCounter = () => {
    setStart(false);
    setTimeCounter(0);
  };

  const StartTimer = () => {
    setStart(true);
  };

  const StopTimer = () => {
    setStart(false);
    clearInterval(timerRef.current);
  };

  return (
    <div className="App">
      <div>Auto Increment Counter</div>
      <div>{timeCounter}</div>
      <div>
        <button onClick={isStart ? StopTimer : StartTimer}>
          {isStart ? "Stop" : "Start"}
        </button>
        <button onClick={ResetCounter}>Reset</button>
      </div>
    </div>
  );
}
