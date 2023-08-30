import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loading: false });

  function showWeather(response) {
    setWeather({
      loading: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      coordinates: response.data.coord,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    citySearch();
  }
  function citySearch() {
    let apiKey = "2718952144ed077c12e7c160fb6fc351";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  if (weather.loading) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row g-2">
            <div className="col-8">
              <input
                type="search"
                placeholder="Search your city..."
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" />
            </div>
            <div className="col-2">
              <button type="button">Current</button>
            </div>
          </div>
        </form>
        <WeatherInfo weatherData={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    citySearch();
    return "Not Loading";
  }
}
