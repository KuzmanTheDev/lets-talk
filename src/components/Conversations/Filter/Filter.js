import React from "react";
import filter from "../../../assets/images/filter.png";
import downArrow from "../../../assets/images/down-vector.png";
import "./Filter.css";

export default function Filter() {
  return (
    <div className="filter">
      <div>
        <img src={filter} alt="filter" className="filter-icon" />
      </div>
      <p className="filter-description">All Messages </p>
      <div className="filter-description-count">36</div>
      <div>
        <img src={downArrow} alt="filter options" className="filter-options" />
      </div>
    </div>
  );
}
