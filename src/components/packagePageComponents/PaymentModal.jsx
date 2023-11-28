// Modal.js
import React from "react";

const PaymentModal = ({ handleClose, show, children }) => {
  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: show ? "block" : "none",
    // backgroundColor: "black",
    // padding: "20px",
    zIndex: 1000,
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: show ? "block" : "none",
    zIndex: 999,
  };

  return (
    <div>
      <div style={overlayStyle} onClick={handleClose}></div>
      <div style={modalStyle}>
        {children}
        {/* <button onClick={handleClose}>Close</button> */}
      </div>
    </div>
  );
};

export default PaymentModal;
