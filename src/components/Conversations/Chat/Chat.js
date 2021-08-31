import React from "react";
import { useMediaQuery } from "../../../helpers/MediaQuery";
import Layout from "../../AuthorisedLayout/AuthLayout";
import Conversations from "../Conversations";
import "./Chat.css";

export default function Chat({ match }) {
  const web = useMediaQuery("(min-width : 930px)");

  return (
    <div>
      {web ? (
        <Conversations>
          <div>
            <h2>Chat{match.params.id}</h2>
          </div>
        </Conversations>
      ) : (
        <div>
          <h2>Chat{match.params.id}</h2>
        </div>
      )}
    </div>
  );
}
