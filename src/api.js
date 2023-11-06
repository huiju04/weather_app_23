import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "c0d2fa1aa8da5aaa1f03a56e5f10f5c4",
  },
});

export const getWeather = () => {
  const lat = 35.158049371114956;
  const lon = 129.05986219337697;
  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};
