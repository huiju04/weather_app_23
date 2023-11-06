import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "518dddb5d454b549d6d4ae8dfef1ab26",
  },
});

export const getWeather = () => {
  const lat = 37.570861685709986;
  const lon = 126.98536366946236;
  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data); //매개변수라서 아무 명이나 해도 돼
};
