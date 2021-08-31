import React from "react";
import { Link } from "react-router-dom";
// import { useUsersContext } from "context/usersContext";
import avatar from "../../../assets/images/recipient-avatar.png";
import "./ChatPreview.css";

export default function ChatPreview({ contact }) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      // className="sidebar-contact"
      to={`/dashboard/chat/${contact.id}`}
      // onClick={() => setUserAsUnread(contact.id)}
    >
      <div className="chat-preview">
        <div>
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="chat-content">
          <h5>Okemati Lanre</h5>
          <p>Hello Jakub, We are seeking a Product Designer to...</p>
        </div>
        <div className="chat-timestamp">
          <p>8:30am</p>
        </div>
      </div>
    </Link>
  );
}

// const Contact = ({ contact }) => {
// 	// const { setUserAsUnread } = useUsersContext();
// 	// const getLastMessage = () => {
// 	// 	const messageDates = Object.keys(contact.messages);
// 	// 	const recentMessageDate = messageDates[messageDates.length - 1];
// 	// 	const messages = [...contact.messages[recentMessageDate]];
// 	// 	const lastMessage = messages.pop();
// 	// 	return lastMessage;
// 	// };

// 	// const lastMessage = getLastMessage(contact);

// 	return (
// 		<Link
// 			className="sidebar-contact"
// 			to={`/chat/${contact.id}`}
// 			onClick={() => setUserAsUnread(contact.id)}
// 		>
// 			<div className="sidebar-contact__avatar-wrapper">
// 				<img
// 					src={contact.profile_picture}
// 					alt={contact.profile_picture}
// 					className="avatar"
// 				/>
// 			</div>
// 			<div className="sidebar-contact__content">
// 				<div className="sidebar-contact__top-content">
// 					<h2 className="sidebar-contact__name"> {contact.name} </h2>
// 					<span className="sidebar-contact__time">
// 						{formatTime(lastMessage.time)}
// 					</span>
// 				</div>
// 				<div className="sidebar-contact__bottom-content">
// 					<p className="sidebar-contact__message-wrapper">
// 						{lastMessage.status && (
// 							<Icon
// 								id={
// 									lastMessage?.status === "sent" ? "singleTick" : "doubleTick"
// 								}
// 								aria-label={lastMessage?.status}
// 								className={`sidebar-contact__message-icon ${
// 									lastMessage?.status === "read"
// 										? "sidebar-contact__message-icon--blue"
// 										: ""
// 								}`}
// 							/>
// 						)}
// 						<span
// 							className={`sidebar-contact__message ${
// 								!!contact.unread ? "sidebar-contact__message--unread" : ""
// 							}`}
// 						>
// 							{lastMessage?.content}
// 						</span>
// 					</p>
// 					<div className="sidebar-contact__icons">
// 						{contact.pinned && (
// 							<Icon id="pinned" className="sidebar-contact__icon" />
// 						)}
// 						{!!contact.unread && (
// 							<span className="sidebar-contact__unread">{contact.unread}</span>
// 						)}
// 						<button aria-label="sidebar-contact__btn">
// 							<Icon
// 								id="downArrow"
// 								className="sidebar-contact__icon sidebar-contact__icon--dropdown"
// 							/>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</Link>
// 	);
// };
