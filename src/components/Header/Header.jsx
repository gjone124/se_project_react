import wtwrLogo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/avatar.svg";
import "./Header.css";

function Header({ onAddClothes, weatherData, isMenuOpen, onMenuOpen }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__info">
        <img src={wtwrLogo} alt="wtwr logo" className="header__logo" />
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
        <div
          className={`header__user ${
            !isMenuOpen ? "header__user_type_menu-closed" : ""
          }`}
        >
          <p className="header__name">Terrence Tegegne</p>
          <img src={avatar} alt="avatar" className="header__avatar" />
        </div>
        <button
          type="button"
          className={`header__clothes-button ${
            !isMenuOpen ? "header__clothes-button_type_menu-closed" : ""
          }`}
          onClick={onAddClothes}
        >
          + Add clothes
        </button>
      </div>
    </header>
  );
}

export default Header;
