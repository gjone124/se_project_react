import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch({ isMenuOpen }) {
  //   const [currentTemperatureUnit, handleToggleSwitchChange] = useState("C");

  //   const handleChange = (event) => {
  //     if (currentTemperatureUnit === "C") handleToggleSwitchChange("F");
  //     if (currentTemperatureUnit === "F") handleToggleSwitchChange("C");
  //   };
  //   console.log(currentTemperatureUnit);
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  // console.log(currentTemperatureUnit);

  return (
    <label
      className={`toggle-switch ${
        !isMenuOpen ? "toggle-switch_type_menu-closed" : ""
      }`}
    >
      <input
        type="checkbox"
        name="toggle-switch-box" /* added to fix error */
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
