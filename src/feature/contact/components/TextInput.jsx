import React from "react";

const TextInput = ({
  id,
  value,
  label,
  placeholder,
  isRequired,
  handleInputChange,
}) => {
  return (
    <label htmlFor={id} className="p-contact__form-label">
      <p className="p-contact__form-label-title">
        {label}
        {isRequired ? (
          <span className="p-contact__form-label-chip">必須</span>
        ) : null}
      </p>
      <input
        type="text"
        id={id}
        className="p-contact__form-input"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </label>
  );
};

export default TextInput;
