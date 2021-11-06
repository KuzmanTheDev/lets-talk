import React from "react";
import { useMediaQuery } from "../../../utilities/MediaQuery";
import Conversations from "../Conversations";
import DialogueBox from "../DialogueBox/DialogueBox";
import "./Chat.css";

export default function Chat({ match }) {
  const web = useMediaQuery("(min-width : 776px)");

  //TODO: @Michael
  //  const startPeerConnection =()=>{
  // //Start a Videocall
  // }
  // const joinPeerConnection =()=>{
  //   //Join a videocall request
  // }

  return (
    <div>
      {web ? (
        <Conversations>
          <DialogueBox data={match.params.id} />
        </Conversations>
      ) : (
        <div>
          <h2>Only available on web for now</h2>
        </div>
      )}
    </div>
  );
}
