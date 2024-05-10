import "./App.css";
import React, { useEffect, useState } from "react";

const SIGNAL_CONFIG = {
  red: {
    duration: 6000,
    next: "green",
  },
  green: {
    duration: 5000,
    next: "yellow",
  },
  yellow: {
    duration: 3000,
    next: "red",
  },
};

function App() {
  const [color, setColor] = useState("green");

  useEffect(() => {
    let timer = setInterval(() => {
      setColor((prevColor) => {
        let { next } = SIGNAL_CONFIG[prevColor];
        return next;
      });
    }, SIGNAL_CONFIG[color].duration);

    return () => {
      clearInterval(timer);
    };
  }, [color]);

  return (
    <div className="signalContainer">
      {Object.keys(SIGNAL_CONFIG).map((each) => {
        return <Light currentColor={each === color ? color : ""} />;
      })}
    </div>
  );
}

export default App;

const Light = ({ currentColor }) => {
  return (
    <div style={{ backgroundColor: currentColor }} className="signalLight" />
  );
};
