import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { WSMessageType } from "../../utilities/Constants";

export default function PrivacyPolicy() {
  const {
    user: { userID, wsTicket },
  } = useContext(AuthContext);

  const socket = new WebSocket(
    `ws://188.166.170.44:8080/v1/ws/${userID}/${wsTicket}`
  );

  socket.onopen = (e) => {
    console.log("connected", e);
    const message = {
      msgType: WSMessageType.WebsocketOpen,
      userID,
    };
    socket.send(JSON.stringify(message));
  };

  socket.onerror = (e) => {
    console.log(e);
  };

  socket.onclose = (e) => {
    console.log("websocket closed.", e);
  };

  socket.onmessage = (event) => {
    const jsonContent = JSON.parse(event.data);
    console.log(event);
    console.log("I got a message");
    switch (jsonContent.msgType) {
      case WSMessageType.CreateRoom:
        console.log("room created");
        break;
      case WSMessageType.NewMessage:
        console.log("I got a message");
        break;
      default:
    }
  };
  const createRoom = () => {
    socket.send(
      JSON.stringify({
        msgType: "CreateRoom",
        createByUserID: userID,
        roomName: "The New Room To Be Created",
        roomIcon: "Image Link. For now we should use a default image of unilag",
      })
    );
  };
  const sendMessage = () => {
    socket.send(
      JSON.stringify({
        msgType: "NewMessage",
        roomID: "00000",
        userID: `${userID}`,
        message: "Hello There",
        type: "Message",
      })
    );
    console.log("send message");
  };

  return (
    <h1>
      <button onClick={createRoom} style={{ margin: "20px" }}>
        Create Room
      </button>
      <button onClick={sendMessage}> Click me </button>
    </h1>
  );
}
