import React from "react";
import { useUsersContext } from "../../../Context/UsersContext";
import ChatPreview from "../../Conversations/ChatPreview/ChatPreview";
import Footer from "../Footer/Footer";
import "./Convo.css";

export default function Convo() {
  const { users: contacts } = useUsersContext();
  return (
    <div>
      <h2 className="convo-title">Conversations</h2>
      <div className="chat-preview-block">
        {contacts.map((contact, index) => (
          <ChatPreview key={index} contact={contact} />
        ))}
      </div>
      <Footer
        // active={isActive}
        // convo={onConvo}
        // profile={onProfile}
        // settings={onSettings}
      />
    </div>
  );
}
