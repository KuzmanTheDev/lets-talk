import React from "react";
// import phone from "../../../../assets/images/phone.png";
import video from "../../../../assets/images/meetingCamera.png";
import attachment from "../../../../assets/images/attachmentIcon.png";
import "./DialogueHeader.css"

export default function DialogueHeader() {
  return (
    <div className="dialogue-header">
      <p>Okemati Lanre</p>
      <div className="dialogue-header_tools">
        {/* <span aria-label="Video Call"> */}
          <img src={video} alt="Video" />
        {/* </span> */}
        {/* <span aria-label="Attachment"> */}
          <img src={attachment} alt="Atachment" />
        {/* </span> */}
      </div>
    </div>
  );
}
