import avatar from "../../assets/avatar.svg";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./Avatar.css";

// this file is reused in Header.jsx & SideBar.jsx
function Avatar({ className }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    // ternary operator can be used as shown below to display 1st letter
    // of user's name if no avatar is provided
    <>
      {currentUser?.avatar ? (
        <img
          // input an avatar URL by finding an image, right clicking on
          // it, & selecting "Copy Image Address"
          className={`avatar ${className || ""}`}
          src={currentUser?.avatar || avatar}
          alt={`avatar for ${currentUser?.name}` || "default avatar"}
        />
      ) : (
        <div
          className="avatar avatar__default"
          alt="avatar when image not provided"
        >
          {currentUser?.name[0]}
        </div>
      )}
    </>
  );
}

export default Avatar;
