import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import "./Main.css";

function Main({ weatherData, onCardClick, items }) {
  //if you don't implement the Math.round method (rounds to the nearest whole number),
  //then you get a temperature with 2 decimal places

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {Math.round(weatherData.temp.F)}&deg;F / You may want to wear:
      </p>
      <ul className="main__items">
        {items
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard key={item._id} onCardClick={onCardClick} item={item} />
            );
          })}
      </ul>
    </main>
  );
}

export default Main;
