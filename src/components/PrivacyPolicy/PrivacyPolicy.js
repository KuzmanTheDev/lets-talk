import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
// import useWebSocket from "react-use-websocket";

export default function PrivacyPolicy() {
  const {
    user: { userID, wsTicket },
  } = useContext(AuthContext);
  console.log(userID, wsTicket);

  useEffect(() => {
    const websocket = new WebSocket(
      `ws://188.166.170.44:8080/v1/ws/${userID}/${wsTicket}`
    );
    websocket.onopen = () => {
      console.log("connected");
    };
    websocket.onerror = (e) => {
      console.log(e);
    };
  }, [userID, wsTicket]);

  return <h1>Privacy policy</h1>;
}
