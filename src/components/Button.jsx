import React from "react";

const Button = ({ width, label, onButtonClick, className }) => {
  return (
    <button
      type="button"
      className={`c-login__form-btn ${className}`}
      style={{ width }}
      onClick={onButtonClick}
    >
      {label}
    </button>
  );
};

export default Button;
