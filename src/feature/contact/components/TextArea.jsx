import React from "react";

const TextArea = ({
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
      <textarea
        id={id}
        className="p-contact__form-textarea"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      ></textarea>
    </label>
  );
};

export default TextArea;
