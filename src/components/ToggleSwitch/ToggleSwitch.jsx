import { useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function ToggleSwitch({ isMenuOpen }) {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label
      className={`toggle-switch ${
        !isMenuOpen ? "toggle-switch_type_menu-closed" : ""
      }`}
    >
      <input
        type="checkbox"
        name="toggle-switch-box"
        className="toggle-switch__box"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "toggle-switch__slider toggle-switch__slider-F"
            : "toggle-switch__slider toggle-switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temperature-F ${
          currentTemperatureUnit === "F" && "toggle-switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temperature-C ${
          currentTemperatureUnit === "C" && "toggle-switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
