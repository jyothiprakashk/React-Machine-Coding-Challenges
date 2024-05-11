import React from "react";
import ReactDOM from "react-dom";

export const Modal = (props) => {
  const { isOpen, onClose = () => {},children,title="" } = props;
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modalWrapper">
      <div className="ModalContainer">
        <div className="content">
            <p>{title}</p>
          {children}
        </div>
        <div className="modalFooter">
          <div onClick={onClose}>Ok</div>
          <div onClick={onClose}>Close</div>
        </div>
      </div>
    </div>,
    document.getElementById("rootModal")
  );
};
