import React from "react";
import "./weatherInfo.css";

export default function WeatherInfo(props) {
  const currentDate = getDate();
  function getDate() {
    const today = new Date();
    return today.toLocaleString("en-ZA", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }
  return (
    <div className="weatherInfo">
      <h3>{props.weatherData.city}</h3>
      <p>{props.weatherData.description}</p>
      <p>Updated: {currentDate}</p>
      <div className="row g-0">
        <div className="col-6 d-flex align-items-center">
          <div className="weatherIcon">
            <img
              src={`https://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`}
              alt="weather Icon"
            />
          </div>
          <div>
            <span className="weatherTemp">
              {Math.round(props.weatherData.temperature)}
            </span>
            <span className="weatherUnit">&deg;C</span>
          </div>
        </div>

        <div className="col-6 weatherDescription">
          <ul>
            {/* <li>{props.weatherData.description}</li> */}
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {props.weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
