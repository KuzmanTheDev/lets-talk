import React from "react";
import loader from "../../assets/images/loading.svg";
import "./Button.css";

export default function Button({
  style = {},
  disabled,
  text,
  loading,
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
      {loading ? <img src={loader} alt="loader" /> : text}
    </button>
  );
}
