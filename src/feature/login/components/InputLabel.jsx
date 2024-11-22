import React from "react";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";

const InputLabel = ({
  label,
  type,
  id,
  placeholder,
  value,
  errorMsg,
  isSpace = false,
  handleInputChange,
  togglePassOpen,
}) => {
  return (
    <label htmlFor={id} className={`p-login__label ${isSpace ? "--mt-4" : ""}`}>
      <p className="p-login__label-title">{label}</p>
      <div className="p-login__input-box">
        <input
          type={type}
          id={id}
          className="p-login__input"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
        {id === "password" ? (
          <IconButton
            sx={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={togglePassOpen}
          >
            <VisibilityIcon />
          </IconButton>
        ) : null}
        {errorMsg !== "" ? (
          <p className="p-login__form-error">{errorMsg}</p>
        ) : null}
      </div>
    </label>
  );
};

export default InputLabel;
