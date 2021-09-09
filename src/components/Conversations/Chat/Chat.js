import React from "react";
import { useMediaQuery } from "../../../utilities/MediaQuery";
import ChatInput from "../ChatInpu/ChatInput";
import Conversations from "../Conversations";
import DialogueBox from "../DialogueBox/DialogueBox";
import "./Chat.css";

export default function Chat({ match }) {
  const web = useMediaQuery("(min-width : 930px)");

  return (
    <div>
      {web ? (
        <Conversations>
          <DialogueBox data={match.params.id} />
         
        </Conversations>
      ) : (
        <div>
          <h2>Chat{match.params.id}</h2>
        </div>
      )}
    </div>
  );
}