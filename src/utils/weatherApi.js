import { handleServerResponse } from "./api.js";

export function getWeatherData({ latitude, longitude }, API_KEY) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
  ).then(handleServerResponse);
}

export function filterWeatherData(data) {
  const result = {};
  result.city = data.name;

  //Math.round method necessary to round temperature to nearest whole number
  //otherwise, you get a temperature with 2 decimal places
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(result.temp.F);
  result.timeOfDay = getTimeOfDay(data.dt, data.sys);
  result.condition = data.weather[0].main.toLowerCase();

  return result;
}

function getTimeOfDay(time, { sunrise, sunset }) {
  return sunrise < time && time < sunset ? "day" : "night";
}

function getWeatherType(temperature) {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66 && temperature < 86) {
    return "warm";
  } else if (temperature < 66) {
    return "cold";
  }
}
