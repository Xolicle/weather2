import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <div className="forecastIcon">
        <img
          src={`https://openweathermap.org/img/wn/${props.forecastData.weather[0].icon}.png`}
          alt="weather forecast icon"
        />
      </div>
      <div className="forecastTemperature">
        <span className="maxForecastTemperature">
          {Math.round(props.forecastData.temp.max)}&deg;
        </span>
        <span className="minForecastTemperature">
          {Math.round(props.forecastData.temp.min)}&deg;
        </span>
      </div>
    </div>
  );
}
