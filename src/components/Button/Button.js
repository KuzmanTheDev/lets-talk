import React from "react";
import Spinner from "../Spinner/Spinner.js";
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
      className={`${type} ${disabled ? "disabled not_allowed" : ""} ${
        loading ? "not_allowed" : ""
      } ripple`}
      onClick={onClick}
    >
      {loading ? <Spinner /> : text}
    </button>
  );
}
