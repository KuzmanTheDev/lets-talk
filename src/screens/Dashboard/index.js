import React from "react";
import Conversations from "../../components/Conversations/Conversations";
import { useMediaQuery } from "../../utilities/MediaQuery";
import Footer from "../../components/MobileUI/Footer/Footer";
import ChatPreview from "../../components/Conversations/ChatPreview/ChatPreview";
import { useUsersContext } from "../../Context/UsersContext";

export default function Index() {
  const web = useMediaQuery("(min-width : 776px)");
  const { users: contacts } = useUsersContext();

  return (
    <main>
      {web ? (
        <Conversations />
      ) : (
        <div>
          <h2 className="convo-title">Conversations</h2>
          <div className="chat-preview-block">
            {contacts.map((contact, index) => (
              <ChatPreview key={index} contact={contact} />
            ))}
          </div>
          <Footer />
        </div>
      )}
    </main>
  );
}
