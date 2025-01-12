"use client";

import "./CurrentWeather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import conditonsData from "../conditionsData";

const findIcon = (condition) => {
  const index = conditonsData.findIndex((item) => item.code === condition);
  return conditonsData[index]?.icon;
};

const findTextCode = (condition) => {
  const index = conditonsData.findIndex((item) => item.code === condition);
  return conditonsData[index]?.day;
};

const CurrentWeather = ({ weatherData }) => {
  const condition = weatherData?.code;

  const time = new Date().toLocaleTimeString("vi-VN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const date = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="current">
      <h1 className="current-temp">
        {weatherData?.temp}
        <sup>°C</sup>
      </h1>
      <div className="location-date">
        <h2 className="location">{weatherData?.location}</h2>
        <h3 className="current-date">
          {time} - {date}
        </h3>
      </div>
      <div className="current-weather">
        <FontAwesomeIcon
          icon={`fa-solid ${findIcon(condition)}`}
          className="current-weather__icon"
        />
        <h3 className="current-weather__text">{findTextCode(condition)}</h3>
      </div>
    </div>
  );
};

export { CurrentWeather, findIcon };
