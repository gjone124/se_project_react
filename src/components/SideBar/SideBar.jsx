import avatar from "../../assets/avatar.svg";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./SideBar.css";
import Avatar from "../Avatar/Avatar.jsx";

//("change profile data") => handleUpdateClick
function SideBar({ handleUpdateClick, handleLogOut }) {
  const { currentUser } = useContext(CurrentUserContext); // added for Sprint 14

  return (
    <div className="side-bar">
      <div className="side-bar__user-info">
        <Avatar className="side-bar__avatar" />
        <p className="side-bar__username">
          {currentUser?.name || "Terrence Tegegne"}
        </p>
      </div>
      <div className="side-bar__options">
        {/* ("change profile data") */}
        <button
          className="side-bar__button"
          type="button"
          onClick={handleUpdateClick}
        >
          Change profile data
        </button>
        <button
          className="side-bar__button"
          type="button"
          onClick={handleLogOut}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
