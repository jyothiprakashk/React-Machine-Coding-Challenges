import React, { useState, useEffect } from "react";
import "./App.css";

export const ProgressBar = ({ value }) => {
    const [percentage, setPercentage] = useState(0);
  
    useEffect(() => {
      setPercentage(Math.min(100, Math.max(value, 0)));
    }, [value]);
  
    return (
        <div className="progressWrapper">
        <div>Progress Bar</div>
        
      <div className="progressBarContainer">
        <span style={{ color: percentage > 49 ? "white" : "black" }}>
          {percentage}%
        </span>
        <div
          className="progressbar"
          style={{ width: `${percentage}%`, backgroundColor: "green" }}
        ></div>
      </div>
      </div>

    );
  };