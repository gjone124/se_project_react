import { Link } from "react-router-dom";

import wtwrLogo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import "./Header.css";
import Avatar from "../Avatar/Avatar.jsx";

function Header({
  onAddClothes,
  weatherData,
  isMenuOpen,
  onMenuOpen,
  onRegister,
  onLogin,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__info">
        <Link to="/">
          {" "}
          <img src={wtwrLogo} alt="wtwr logo" className="header__logo" />
        </Link>
        <p className="header__date-and-location">{`${currentDate}, ${weatherData.city}`}</p>
      </div>
      <div
        className={`header__menu ${isMenuOpen ? "header__menu_opened" : ""}`}
      >
        <button
          type="button"
          className={`header__menu-button ${
            isMenuOpen ? "header__menu-button_opened" : ""
          }`}
          onClick={onMenuOpen}
        ></button>

        {/* conditional rendering & fragment used to display necessary buttons when LOGGED IN (added for Sprint 14) */}
        {isLoggedIn && (
          <>
            <Link to="/profile" className="header__link">
              <div
                className={`header__user ${
                  !isMenuOpen ? "header__user_type_menu-closed" : ""
                }`}
              >
                <p className="header__username">
                  {currentUser?.name || "Terrence Tegegne"}
                </p>
                <Avatar />
              </div>
            </Link>
            <button
              type="button"
              className={`header__clothes-button ${
                !isMenuOpen ? "header__clothes-button_type_menu-closed" : ""
              }`}
              onClick={onAddClothes}
            >
              + Add clothes
            </button>
          </>
        )}

        {/* conditional rendering & fragment used to display necessary buttons when NOT logged in (added for Sprint 14) */}
        {!isLoggedIn && (
          <>
            {/* button added for Sprint 14 */}
            <button
              type="button"
              className={`header__clothes-button`}
              onClick={onLogin}
            >
              Log In
            </button>

            {/* button added for Sprint 14 */}
            <button
              type="button"
              className={`header__clothes-button`}
              onClick={onRegister}
            >
              Sign Up
            </button>
          </>
        )}
        <ToggleSwitch isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
}

export default Header;
