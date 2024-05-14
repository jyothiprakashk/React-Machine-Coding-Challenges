
import React, { useState } from "react";

export const StarRating = ({ value, total }) => {
    const [selected, setSelected] = useState(value);
  
    let stars = new Array(total).fill(0);
  
    const onMouseEnter = (e) => {
      setSelected(e);
    };
  
    const onStarClick=(index)=>{
      setSelected(index)
    }
  
    return (
      <>
        {stars.map((_, index) => (
          <div
            onMouseEnter={() => onMouseEnter(index + 1)}
            onClick={()=>onStarClick(index+1)}
          >
            {selected >= index + 1 ? "\u2605" : "\u2606"}
          </div>
        ))}
      </>
    );
  };