import React from "react";

const CurrentWeather = ({ currentWeather, city }) => {
  const { name, country } = city;
  const { temp, pressure, humidity, wind_speed, clouds } = currentWeather;
  const { icon, description } = currentWeather.weather[0];

  return (
    <div
      className="d-flex flex-md-row flex-column justify-content-center align-items-center mx-auto p-4 my-3 rounded text-light"
      style={{ background: "#40739e", maxWidth: "750px" }}
    >
      <div className="d-flex flex-column align-items-center text-center">
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt={description}
          style={{ margin: "-8px 0" }}
        />
        <h3 className="mb-0">{Math.round(temp * 10) / 10}°C</h3>
        <h5 className="mb-0 ">
          {name}, {country}
        </h5>
        <p className="mb-0">{description}</p>
      </div>
      <div className="mx-0 mx-md-4 my-2 my-md-0"></div>
      <div className="d-flex flex-column align-items-center text-center">
        <p className="mb-1">Ciśnienie: {pressure}hPa</p>
        <p className="mb-1">Wilgotność: {humidity}%</p>
        <p className="mb-1">Wiatr: {wind_speed}m/s</p>
        <p className="mb-1">Zachmurzenie: {clouds}%</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
