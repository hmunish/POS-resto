import { memo, useRef } from "react";
import "./Notification.css";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

const Notification = ({ type, message }) => {
  const notificationRef = useRef();

  const handleCloseClick = () => {
    notificationRef.current.style.setProperty("right", "-150%", "important");
  };

  return (
    <>
      {createPortal(
        <p
          ref={notificationRef}
          className={`notification ${type}`}
          key={Math.random()}
        >
          {message}
          <em className="notification__border" />
          <FaTimes className="close__notification" onClick={handleCloseClick} />
        </p>,
        document.querySelector("#notification__wrapper"),
      )}
    </>
  );
};

export default memo(Notification);
