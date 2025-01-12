import WeatherView from "@/sections/weather/view/WeatherView";
import React from "react";

export const metadata = (params) => {
  return {
    title: "Tra cứu thời tiết",
    description: "Tra cứu thời tiết",
  };
};

const Weather = () => {
  return <WeatherView />;
};

export default Weather;
