// import avatar from "../../assets/avatar.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import "./SideBar.css";
import Avatar from "../Avatar/Avatar.jsx";

function SideBar({ handleUpdateClick, handleLogOut }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="side-bar">
      {/* Desktop View */}
      <div className="side-bar__user-info">
        <Avatar className="side-bar__avatar" />
        <p className="side-bar__username">
          {currentUser?.name || "Terrence Tegegne"}
        </p>
      </div>
      <div className="side-bar__options">
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

      {/* Mobile View */}
      <div className="side-bar__mobile-view">
        <Avatar className="side-bar__avatar" />
        <div className="side-bar__mobile-info">
          <p className="side-bar__username">
            {currentUser?.name || "Terrence Tegegne"}
          </p>
          <div className="side-bar__mobile-buttons">
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
      </div>
    </div>
  );
}

export default SideBar;
