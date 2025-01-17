import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

import "./Main.css";

// Main component includes WeatherCard & ItemCard components
function Main({ weatherData, onCardClick, items, handleCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  // Sprint 14
  const filteredItems = items.filter(
    (item) => item.weather === weatherData.type
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temp[currentTemperatureUnit]}&deg;{" "}
        {currentTemperatureUnit} / You may want to wear:
      </p>
      <ul className="main__items">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ItemCard
              key={item._id}
              onCardClick={onCardClick}
              item={item}
              // Sprint 14 ("like functionality")
              handleCardLike={handleCardLike}
            />
          ))
        ) : (
          <p>
            No clothing suggestions available at this time for{" "}
            {weatherData.type} weather.
            <br />
            <br />
            Add a piece of clothing to generate a suggestion.
            <br />
            <br />
            You must be logged in to add a piece of clothing.
            <br />
            <br />
          </p>
        )}
      </ul>
    </main>
  );
}

export default Main;
