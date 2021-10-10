import React, { useRef, createContext, useState } from "react";
import { useContext } from "react";

const MessageContext = createContext(null);

export const useMessageContext = () => useContext(MessageContext);

export const MessageProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const roomContents = useRef([]);
  console.log(chatMessages, "context");
  return (
    <MessageContext.Provider
      value={{ chatMessages, setChatMessages, roomContents }}
    >
      {children}
    </MessageContext.Provider>
  );
};
