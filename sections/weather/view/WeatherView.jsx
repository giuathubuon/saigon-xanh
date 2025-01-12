"use client";

import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { CurrentWeather, findIcon } from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Footer from "../components/Footer";
import ExtraData from "../components/ExtraData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cloudImg from "../assets/cloud.jpg";
import nightImg from "../assets/night.jpg";
import "../weather.css";
import { faSkyatlas } from "@fortawesome/free-brands-svg-icons";

function WeatherView() {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    document.body.style = `background-image:  linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${
      toggle ? cloudImg : nightImg
    });`;
  }, [toggle]);

  useEffect(() => {
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18;
    setToggle(isDay);
  }, []);

  const apiKey = "04c60fe1f2624fff885223022220912";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (err) => console.log(err)
    );
  }, []);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat}, ${lon}&days=3&aqi=no&alerts=yes`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [lat]);

  // Fetch weather data from the weather API using location from the search bar
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=yes`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [location]);

  // Store the current weather data in an object
  const currentData = {
    temp: weather?.current?.temp_c,
    location: weather?.location?.name,
    date: weather?.location?.localtime,
    icon: weather?.current?.condition?.icon,
    text: weather?.current?.condition?.text,
    code: weather?.current?.condition?.code,
  };

  // Store the extra weather data in an object
  const extraData = {
    pressure: weather?.current?.pressure_mb,
    wind: weather?.current?.wind_mph,
  };

  // Store the forecast data in an array
  const forecastDays = weather?.forecast?.forecastday;

  // Store the hourly temperature data in an array
  const temps = [];
  weather?.forecast?.forecastday[0].hour.map((hour) => {
    temps.push(hour.temp_c);
  });

  // Filter the hourly temperature data to get the temperature every 3 hours
  const eightTemps = temps.filter((_, i) => i % 3 === 0);

  // Add the last temperature to the array
  const nineTemps = [...eightTemps, temps[temps.length - 1]];

  // Convert the date to words
  const dateToWords = (date) => {
    const months = [
      "Tháng 1", // Jan
      "Tháng 2", // Feb
      "Tháng 3", // Mar
      "Tháng 4", // Apr
      "Tháng 5", // May
      "Tháng 6", // Jun
      "Tháng 7", // Jul
      "Tháng 8", // Aug
      "Tháng 9", // Sep
      "Tháng 10", // Oct
      "Tháng 11", // Nov
      "Tháng 12", // Dec
    ];

    date = new Date(date);
    const month = months[date.getMonth()];
    const dateNum = date.getDate();

    return `Ngày ${dateNum} ${month}`;
  };

  return (
    <div className="App">
      <nav className="nav">
        <div className="logo">
          <FontAwesomeIcon
            icon={faSkyatlas} // Update this line
            className="logo__icon"
          />

          <h1 className="logo__text">Dự báo thời tiết</h1>
        </div>
        <SearchBar setCity={setLocation} toggle={toggle} />
      </nav>
      {!!currentData?.code && (
        <div className="grid-two">
          <div className="grid-one">
            <CurrentWeather weatherData={currentData} />
            <div className="grid-three">
              {forecastDays?.map((day) => {
                return (
                  <Forecast
                    key={day.date}
                    date={dateToWords(day.date)}
                    icon={findIcon(day.day?.condition?.text)}
                    value={day.day?.avghumidity}
                  />
                );
              })}
            </div>
            <div className="grid-three">
              <ExtraData extraData={extraData} />
            </div>
          </div>
          <div className="grid-four">
            {/* <TempChart tempsData={nineTemps} /> */}
            {/* <Footer /> */}
          </div>
        </div>
      )}
      {/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}
    </div>
  );
}

export default WeatherView;
