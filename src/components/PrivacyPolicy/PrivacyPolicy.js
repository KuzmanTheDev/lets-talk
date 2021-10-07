import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { WSMessageType } from "../../utilities/Constants";

export default function PrivacyPolicy() {
  const {
    user: { userID, wsTicket },
  } = useContext(AuthContext);

  const socket = useRef(null);
  useEffect(() => {
    connect();

    socket.current.onopen = onOpen;
    socket.current.onclose = onClose;
    socket.current.onerror = onError;
    socket.current.onmessage = onMessage;

    return () => {
      socket.current.close();
    };
    // eslint-disable-next-line
  }, []);

  function connect() {
    socket.current = new WebSocket(
      `wss://188.166.170.44:8080/v1/ws/${userID}/${wsTicket}`
    );
  }

  function onOpen(e) {
    console.log("connected", e);
    const message = {
      msgType: WSMessageType.WebsocketOpen,
      userID: `${userID}`,
    };
    socket.current.send(JSON.stringify(message));
  }
  function onClose(e) {
    console.log("websocket closed.", e);
  }
  function onError(e) {
    console.log(e);
  }
  function onMessage(e) {
    const jsonContent = JSON.parse(e.data);
    console.log("new content", jsonContent);
    switch (jsonContent.msgType) {
      case WSMessageType.WebsocketOpen:
        console.log("Its open");
        break;
      case WSMessageType.CreateRoom:
        createRoom();
        console.log("room created");
        break;
      case WSMessageType.NewMessage:
        console.log("I sent a message");
        break;
      default:
        break;
    }
  }
//  function onWebsocketOpen (
//     joinedRooms,
//     joinRequests
//   ) {
//     if (joinedRooms) {
//       setJoinedRooms(joinedRooms);
//     }
//     if (joinRequests) {
//       this.joinRequests = joinRequests;
//       this.unreadNotificationsCount = joinRequests.length;
//       console.log(this.unreadNotificationsCount);
//     }
//   },
  function createRoom() {
    socket.current.send(
      JSON.stringify({
        msgType: "CreateRoom",
        createByUserID: `${userID}`,
        roomName: "Engineering",
        roomIcon: "Image Link. For now we should use a default image of unilag",
      })
    );
  }
  function sendWSMessage(message, roomID) {
    const socketMessage = {
      msgType: WSMessageType.RequestMessages,
      userID: this.userID,
      roomID: roomID,
      firstLoad: true,
    };
    socket.current.send(socketMessage);
    console.log("i clicked");
  }
  // function onRequestMessages(roomDetails) {
  //   // socket.current.send(
  //   //   JSON.stringify({
  //   //     msgType: "RequestMessages",
  //   //     roomID: `${id}`,
  //   //     skip: 0,
  //   //     limit: 0,
  //   //   })
  //   // );
  //   console.log("request message");
  // }
  

  return (
    <h1>
      <button onClick={sendWSMessage} style={{ margin: "20px" }}>
        send message
      </button>
      {/* <button onClick={sendMessage}> Click me </button> */}
      Hello
    </h1>
  );
}
