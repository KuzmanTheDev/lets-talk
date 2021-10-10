import React, { useContext, useState } from "react";
import SecureLS from "secure-ls";
import { AuthContext } from "../../Context/AuthContext";
import { WSMessageType } from "../../utilities/Constants";
import axios from "../../utilities/axios";
import Button from "../Button/Button";
import close from "../../assets/images/close.png";
import "./Modal.css";
const ls = new SecureLS();

export default function Modal({
  visible,
  toggle,
  sendWSMessage,
  onRoomName,
  getChat,
}) {
  const [roomName, setRoomName] = useState("");
  // const [loading, setloading] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);
  const {
    user: { userID },
  } = useContext(AuthContext);
  const { token } = ls.get("userData");

  const onClose = () => {
    toggle();
  };
  function getChatContent(roomID) {
    const message = {
      msgType: WSMessageType.RequestMessages,
      userID: userID,
      roomID: roomID,
      // skip: 8,
      // limit: 10,
    };
    sendWSMessage(JSON.stringify(message));
    getChat();
  }
  const getChatInfo = (id, name) => {
    getChatContent(id);
    onRoomName(name);
    setCurrentRoom(id);
  };

  const fetchData = async () => {
    const res = await axios
      .get("/home", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data, "home");
        getChatInfo(
          res.data.data.roomList.data[0]._id,
          res.data.data.roomList.data[0].roomName
        );
      })
      .catch((err) => {
        console.log(err);
      });
    onClose();
    return res;
  };

  function createRoom() {
    const message = {
      msgType: WSMessageType.CreateRoom,
      createByUserID: userID,
      roomName: roomName,
      roomIcon: "Unilag logo",
    };
    sendWSMessage(JSON.stringify(message));
    fetchData();
    setRoomName("");
  }

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
