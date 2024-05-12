import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./App.css";

export const PopOver = (props) => {
  const { pageSizes, pageSize, setPageSize } = props;
  const [show, setShow] = useState(false);

  const handleSizeClick = (e) => {
    setPageSize(+e.target.textContent);
  };
  return (
    <div onClick={() => setShow(!show)}>
      <div className="popOverBlock">
        {pageSize}
        <MdKeyboardArrowDown />
      </div>
      <div
        style={{ display: show ? "block" : "none" }}
        className="popOverBlock"
      >
        <div onClick={handleSizeClick}>
          {pageSizes.map((size) => {
            return <div className="sizeShow">{size}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
