function WeatherItem({ weather }) {
  return (
    <div className="weather-item">
      <p className="day">
        {new Date(weather.dt * 1000).toLocaleDateString("tr", {
          weekday: "long",
        })}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather-icon"
        width="100"
        height="100"
      />
      <p className="description">{weather.weather[0].description}</p>
      <p className="temp-max">{Math.floor(weather.temp.max)} °C</p>
      <p className="temp-min">{Math.floor(weather.temp.min)} °C</p>
    </div>
  );
}

export default WeatherItem;
