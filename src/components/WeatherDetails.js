import React from 'react';

function WeatherDetails({ weather }) {

    if (!weather) {
      return <div></div>
   } 
    
  return (
    <div>
        <p>Humidity: { weather.main.humidity }%</p>
        <p>Wind Speed: {(weather.wind.speed * 2.237).toFixed(2)} mph</p>
        <p>Feels like: {(weather.main.feels_like * 9/5) + 32}°F</p>
    </div>
  );
}

export default WeatherDetails;