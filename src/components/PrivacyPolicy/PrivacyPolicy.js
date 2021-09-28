import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { WSMessageType } from "../../utilities/Constants";

export default function PrivacyPolicy() {
  const {
    user: { userID, wsTicket },
  } = useContext(AuthContext);

  console.log(userID, wsTicket);
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

  function createRoom() {
    socket.current.send(
      JSON.stringify({
        msgType: "CreateRoom",
        createByUserID: `${userID}`,
        roomName: "The New Room To Be Created",
        roomIcon: "Image Link. For now we should use a default image of unilag",
      })
    );
  }

  // useEffect(() => {
  //   socket.current.onmessage = (event) => {
  //     const jsonContent = JSON.parse(event.data);
  //     console.log("kdkkf", jsonContent);
  //     switch (jsonContent.msgType) {
  //       case WSMessageType.WebsocketOpen:
  //         console.log("Its open");
  //         break;
  //       case WSMessageType.CreateRoom:
  //         createRoom();
  //         console.log("room created");
  //         break;
  //       case WSMessageType.NewMessage:
  //         console.log("I sent a message");
  //         break;
  //       default:
  //     }
  //   };
  //   // eslint-disable-next-line
  // }, []);

  function connect() {
    socket.current = new WebSocket(
      `ws://188.166.170.44:8080/v1/ws/${userID}/${wsTicket}`
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

  // function sendMessage(e){
  //   const data = JSON.parse(e.data)
  // }

  // function socketInit() {

  //   socket.current.onopen = (e) => {
  //     console.log("connected", e);
  //     const message = {
  //       msgType: WSMessageType.WebsocketOpen,
  //       userID: userID,
  //     };
  //     socket.current.send(JSON.stringify(message));
  //   };

  //   socket.current.onerror = (e) => {
  //     console.log(e);
  //   };

  //   socket.current.onclose = (e) => {
  //     console.log("websocket closed.", e);
  //   };

  // }

  // useEffect(() => {
  //   socketInit();
  // });

  // useEffect(() => {
  // const socket.current = new WebSocket(
  //   `ws://188.166.170.44:8080/v1/ws/${userID}/${wsTicket}`
  // );

  // socket.current.onopen = (e) => {
  //   console.log("connected", e);
  //   const message = {
  //     msgType: WSMessageType.WebsocketOpen,
  //     userID: userID,
  //   };
  //   socket.current.send(JSON.stringify(message));
  // };

  // socket.current.onerror = (e) => {
  //   console.log(e);
  // };

  // socket.current.onclose = (e) => {
  //   console.log("websocket closed.", e);
  // };
  //   const createRoom = () => {
  //     socket.current.send(
  //       JSON.stringify({
  //         msgType: "CreateRoom",
  //         createByUserID: `${userID}`,
  //         roomName: "The New Room To Be Created",
  //         roomIcon:
  //           "Image Link. For now we should use a default image of unilag",
  //       })
  //     );
  //   };

  //   const sendMessage = () => {
  //     socket.current.send(
  //       JSON.stringify({
  //         msgType: "NewMessage",
  //         roomID: "00000",
  //         userID: `${userID}`,
  //         message: "Hello There",
  //         type: "Message",
  //       })
  //     );
  //     console.log("send message");
  //   };
  // });

  return (
    <h1>
      <button onClick={createRoom} style={{ margin: "20px" }}>
        Create Room
      </button>
      {/* <button onClick={sendMessage}> Click me </button> */}
      Hello
    </h1>
  );
}
