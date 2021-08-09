import React from "react";
import loading from "../../assets/images/loading.svg";
import "./Button.css";

export default function Button({
  style = {},
  disabled,
  text,
  isLoading,
  onClick,
  type = "primary",
}) {
  return (
    <button
      style={style}
      type="button"
      className={`${type} ${disabled ? "disabled" : ""} ripple`}
      onClick={onClick}
    >
      {isLoading ? <img src={loading} alt="loader" /> : text}
    </button>
  );
}
