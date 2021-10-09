import React from "react";
import create from "../../../assets/images/create_room.png";
import "./Filter.css";

export default function Filter({ toggle }) {
  const onPopup = () => {
    toggle();
  };
  
  return (
    <div className="create">
      <div className="create_icon" onClick={onPopup}>
        <img src={create} alt="Create a room" className="filter-icon" />
      </div>
      <p>Create a Room</p>
    </div>
  );
}
