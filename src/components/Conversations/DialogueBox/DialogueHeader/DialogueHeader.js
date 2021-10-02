import React from "react";
import { Link } from "react-router-dom";
import gallery from "../../../../assets/images/pictureIcon.png";
import video from "../../../../assets/images/meetingCamera.png";
import attachment from "../../../../assets/images/attachmentIcon.png";
import "./DialogueHeader.css";

export default function DialogueHeader() {
  return (
    <div className="dialogue-header">
      <p>Okemati Lanre</p>

      <div className="dialogue-header_tools">
        <Link to="/video">
          <img src={video} alt="Video" />
        </Link>
        <img src={attachment} alt="Atachment" style={{ width: "15px" }} />

        <img
          src={gallery}
          alt="Atachment"
          style={{ width: "19.125px", margin: "0px" }}
        />
      </div>
    </div>
  );
}
