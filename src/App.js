import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherDetails from './components/WeatherDetails';

function App() {
  
  const [weather, setWeather] = useState(null);
  
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState("");
  
  
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
  
    try {
      const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      )
  

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeather(data);
      setLoading(false);
    }
    catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };


  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar city={city} setCity={setCity} onSearch={fetchWeather}/>
      <WeatherDisplay weather={weather} loading={loading} error={error}/>
      <WeatherDetails weather={weather}/>
    </div>
  );
}

export default App;
