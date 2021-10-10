import React from "react";
import "./Toast.css";

export default function Toast({ toastList }) {
  const [list, setList] = useState(toastList);
  //   const list = [
  //     {
  //       id: 1,
  //       title: "Success",
  //       description: "This is a success toast component",
  //       backgroundColor: "#5cb85c",
  //       icon: checkIcon,
  //     },
  //     {
  //       id: 2,
  //       title: "Danger",
  //       description: "This is an error toast component",
  //       backgroundColor: "#d9534f",
  //       icon: errorIcon,
  //     },
  //   ];
  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  return (
    <div className={`notification-container`}>
      {list.map((toast, i) => (
        <div key={i} className={`notification toast`}>
          <button>X</button>
          <div className="notification-image">
            <img src={toast.icon} alt="Icon" />
          </div>
          <div>
            <p className="notification-title">{toast.title}</p>
            <p className="notification-message">{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
