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
        /* ternary operator ("?" and ":") used to dynamically change className with 
        template literals (aka backticks (`)) & string interpolation (${}) (string interpolation allows
         for a Javascript expression to be embedded within a String)) */
        className={`header__menu ${isMenuOpen ? "header__menu_opened" : ""}`}
      >
        <button
          type="button"
          className={`header__menu-button ${
            isMenuOpen ? "header__menu-button_opened" : ""
          }`}
          onClick={onMenuOpen}
        ></button>

        {/* conditional rendering & fragment used to display necessary buttons when LOGGED IN */}
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
              className={`header__button-to-open-form ${
                !isMenuOpen
                  ? "header__button-to-open-form_type_menu-closed"
                  : ""
              }`}
              onClick={onAddClothes}
            >
              + Add clothes
            </button>
          </>
        )}

        {/* conditional rendering & fragment used to display necessary buttons when NOT logged in */}
        {!isLoggedIn && (
          <>
            <button
              type="button"
              className={`header__button-to-open-form ${
                !isMenuOpen
                  ? "header__button-to-open-form_type_menu-closed"
                  : ""
              }`}
              onClick={onLogin}
            >
              Log In
            </button>

            <button
              type="button"
              className={`header__button-to-open-form ${
                !isMenuOpen
                  ? "header__button-to-open-form_type_menu-closed"
                  : ""
              }`}
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
