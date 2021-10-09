import React, { useContext, useState } from "react";
import close from "../../assets/images/close.png";
import { AuthContext } from "../../Context/AuthContext";
import { WSMessageType } from "../../utilities/Constants";
// import { isRequired } from "../../utilities/InputValidators";
import Button from "../Button/Button";
import "./Modal.css";

export default function Modal({ visible, toggle, sendWSMessage }) {
  const [roomName, setRoomName] = useState("");
  const {
    user: { userID },
  } = useContext(AuthContext);
  function createRoom() {
    const message = {
      msgType: WSMessageType.CreateRoom,
      createByUserID: userID,
      roomName: roomName,
      roomIcon: "Unilag logo",
    };
    sendWSMessage(JSON.stringify(message));
    setRoomName("");
  }
  const onClose = () => {
    toggle();
  };
  return (
    <div
      className="create_room-modal"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100vh)",
        opacity: visible ? "1" : "0",
      }}
    >
      <div onClick={onClose} className="close_modal">
        <img src={close} alt="Close" />
      </div>
      <div className="field">
        <label>Room Name</label>
        <input
          type="text"
          placeholder="Name of room"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          required
        />
      </div>
      <Button
        text="CREATE"
        type="secondary"
        style={{
          width: "79px",
          height: "36px",
          marginLeft: "auto",
        }}
        disabled={roomName.trim() === "" ? true : false}
        onClick={createRoom}
      />
    </div>
  );
}
