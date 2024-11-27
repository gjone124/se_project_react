import { weatherImages } from "../../utils/constants.js";
import { useContext } from "react"; /* added */
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js"; /* added */

import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  let icon;
  if (weatherImages[weatherData.condition]) {
    icon = weatherImages[weatherData.condition][weatherData.timeOfDay];
  } else {
    icon = weatherImages["default"][weatherData.timeOfDay];
  }

  return (
    <section className="weather-card">
      <h1 className="weather-card__temperature">
        {weatherData.temp[currentTemperatureUnit]}&deg;{currentTemperatureUnit}
      </h1>
      <img src={icon} alt="Sky" className="weather-card__icon" />
    </section>
  );
}

export default WeatherCard;
