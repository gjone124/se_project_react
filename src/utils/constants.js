import defaultDay from "../assets/default-day.svg";
import defaultNight from "../assets/default-night.svg";
import clearDay from "../assets/clear-day.svg";
import clearNight from "../assets/clear-night.svg";
import cloudyDay from "../assets/cloudy-day.svg";
import cloudyNight from "../assets/cloudy-night.svg";
import snowyDay from "../assets/snowy-day.svg";
import snowyNight from "../assets/snowy-night.svg";
import rainyDay from "../assets/rainy-day.svg";
import rainyNight from "../assets/rainy-night.svg";
import stormyDay from "../assets/stormy-day.svg";
import stormyNight from "../assets/stormy-night.svg";
import foggyDay from "../assets/foggy-day.svg";
import foggyNight from "../assets/foggy-night.svg";

export const weatherImages = {
  default: {
    day: defaultDay,
    night: defaultNight,
  },
  clear: {
    day: clearDay,
    night: clearNight,
  },
  clouds: {
    day: cloudyDay,
    night: cloudyNight,
  },
  snow: {
    day: snowyDay,
    night: snowyNight,
  },
  fog: {
    day: foggyDay,
    night: foggyNight,
  },
  thunderstorm: {
    day: stormyDay,
    night: stormyNight,
  },
  rain: {
    day: rainyDay,
    night: rainyNight,
  },
};

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png",
  },
];

export const coordinates = {
  // // Location Info As Of 3pm, 11/11/2024 (testing different conditions)
  // // Washington, DC, USA (where I live; daytime, cloudy, warm)
  latitude: 38.89511,
  longitude: -77.03637,

  // // //Shanghai, China (nighttime, clear, cold)
  // latitude: 31.224361,
  // longitude: 121.46917,

  // //Asuncion, Paraguay (daytime, cloudy, hot)
  // latitude: -25.28646,
  // longitude: -57.647,

  // // //Matane, Quebec, Canada (daytime, rain, cold)
  // latitude: 48.849998,
  // longitude: -67.533333,

  // //Mount Rainier National Park (Pierce County), Washington, USA (daytime, snowy, cold)
  // latitude: 46.879967,
  // longitude: -121.726906,
};

export const APIkey = "d8633e85ba6b4c163ec058a7b0364964";
