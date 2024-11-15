import React from "react";

const Button = ({ width, label, onButtonClick }) => {
  return (
    <button
      type="button"
      className="c-login__form-btn"
      style={{ width }}
      onClick={onButtonClick}
    >
      {label}
    </button>
  );
};

export default Button;
