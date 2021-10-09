import React from "react";
import "./Backdrop.css";

export default function Backdrop({ visible }) {
  return visible ? <div className="backdrop"></div> : null;
}
