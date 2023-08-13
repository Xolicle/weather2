import React, { useState } from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [data, setData] = useState(false);
  const currentDate = getDate();
  function getDate() {
    const today = new Date();
    return today.toDateString();
  }

  function showWeather(response) {
    setData(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2718952144ed077c12e7c160fb6fc351";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type a city"
        onChange={(e) => setCity(e.target.value)}
      />
      <input type="submit" value="Search" />
      <button type="button">Current</button>
    </form>
  );
  let desc = (
    <>
      <h3>{city}</h3>
      <p>{currentDate}</p>
      <p>{weather.description}</p>
    </>
  );
  let desc2 = (
    <>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind: {weather.wind}mm</p>
    </>
  );
  let currentTemp = (
    <>
      <p>
       <img
       src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                alt="icon"
       />
      </p>
      <p>{weather.temperature}</p>
    </>
  );
  
  if(data){
    return (
      <div>
      {form}
      {desc}
      {desc2}
      {currentTemp}
    </div>
  );
  } else{
    return(
      <div className="loader">
      <div className="loader-form">
      {form}
      </div>
      <div className="loader-puff">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="white"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
    </div>

    );
    
  }
  
}
