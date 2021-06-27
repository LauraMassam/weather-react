import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);

  function getWeather(response) {
    setWeather(
      <div>
        <ul className="weather-description">
          <strong> Here's what it's like in {city} right now... </strong>
          <li> temperature: {Math.round(response.data.main.temp)}°C</li>
          <li> description: {response.data.weather[0].description}</li>
          <li> humidity: {response.data.main.humidity}%</li>
          <li> wind: {response.data.wind.speed}%</li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </ul>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "9aaa9a2a183bbe9e6cb58bc031908f93";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
      <div> {weather} </div>
    </form>
  );
}
  <footer>
      coded by Laura Massam
  </footer>
