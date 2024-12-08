import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

import "./Main.css";

// Main component includes WeatherCard & ItemCard components
function Main({ weatherData, onCardClick, items }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temp[currentTemperatureUnit]}&deg;{" "}
        {currentTemperatureUnit} / You may want to wear:
      </p>
      <ul className="main__items">
        {items
          .filter((item) => item.weather === weatherData.type)
          .map((item) => (
            <ItemCard key={item._id} onCardClick={onCardClick} item={item} />
          ))}
      </ul>
    </main>
  );
}

export default Main;
