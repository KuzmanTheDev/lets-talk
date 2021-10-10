import React from "react";
import create from "../../../assets/images/create_room.png";
import "./CreateRoom.css";

export default function CreateRoom({ toggle }) {
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
