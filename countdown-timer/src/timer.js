import React, { useEffect, useRef, useState } from "react";

export const CountDownTimer = ({ time }) => {
  const [timer, setTimer] = useState(time);
  const timeInterval = useRef(null);
  
  useEffect(() => {
    timeInterval.current = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timeInterval.current);
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timeInterval.current);
    };
  }, [time]);

  const formatTime = (time) => {
    const days = Math.floor(time / 86400);
    const remainingTime = time % 86400; // Remove days from the total time
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    return `${days}:${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="countDownWrapper">
      <p>CountDown Timer</p>
      <div>{formatTime(timer)}</div>
    </div>
  );
};
