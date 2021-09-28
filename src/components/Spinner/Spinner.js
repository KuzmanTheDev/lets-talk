import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div>
      {/* <div className="spinner"></div> */}
      <div id="floatingBarsG">
        <div className="blockG" id="rotateG_01"></div>
        <div className="blockG" id="rotateG_02"></div>
        <div className="blockG" id="rotateG_03"></div>
        <div className="blockG" id="rotateG_04"></div>
        <div className="blockG" id="rotateG_05"></div>
        <div className="blockG" id="rotateG_06"></div>
        <div className="blockG" id="rotateG_07"></div>
        <div className="blockG" id="rotateG_08"></div>
      </div>
    </div>
  );
}
