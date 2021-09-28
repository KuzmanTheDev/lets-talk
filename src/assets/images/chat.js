export default function ChatIcon({ isActive }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7333 19.3998C10.8864 19.3998 10.2 18.7133 10.2 17.8665V10.1998C10.2 9.353 10.8864 8.6665 11.7333 8.6665H22.4666C23.3135 8.6665 24 9.353 24 10.1998V17.8665C24 18.7133 23.3135 19.3998 22.4666 19.3998H20.9333V23.9998L16.3333 19.3998H11.7333Z"
        stroke={isActive ? "#61110c" : "#1E2933"}
        strokeOpacity="0.5"
        strokeWidth="1.26667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.13333 13.2667L4.06667 16.3333V11.7333H2.53333C1.6865 11.7333 1 11.0468 1 10.2V2.53333C1 1.6865 1.6865 1 2.53333 1H13.2667C14.1135 1 14.8 1.6865 14.8 2.53333V5.6"
        stroke={isActive ? "#61110c" : "#1E2933"}
        strokeOpacity="0.5"
        strokeWidth="1.26667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
