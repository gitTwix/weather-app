import React from 'react';

function WeatherDisplay({ weather, loading, error }) {
  
    if (loading) {
        return <div><p>Loading...</p></div>
    }
    
    if (error) {
        return <div><p>Error: {error}</p></div>
    }
    
    if (weather) {
    return (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {((weather.main.temp * 9/5) + 32).toFixed(0)}°F</p>
          <p>Weather: {weather.weather[0]?.description || "N/A"}</p>
        </div>
     );
    }
    return <div><p>Enter a city to see weater</p></div>
}

export default WeatherDisplay;