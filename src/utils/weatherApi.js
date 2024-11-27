import { handleServerResponse } from "./api.js";

export function getWeatherData({ latitude, longitude }, APIkey) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(handleServerResponse);
}

export function filterWeatherData(data) {
  const result = {};
  result.city = data.name;

  //if you don't implement the Math.round method (rounds to the nearest whole number),
  //then you get a temperature with 2 decimal places

  /* value modified for result.temp */
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

/* added */
// export const parseWeatherData = (data) => {
//   const main = data.main;
//   const temperature = main && main.temp;
//   const weather = {
//     temperature: { F: Math.round(temperature) },
//     C: Math.round(((temperature - 32) * 5) / 9),
//   };
//   console.log(weather);
//   return weather;
// };

// weather.temperature.F = data.main.temp;
// weather.temperature.C = Math.round((data.main.temp - 32) * 5/9);
