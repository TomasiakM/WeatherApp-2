import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Nav from "../Nav/Nav";
import ForecastChart from "./ForecastChart/ForecastChart";
import CurrentWeather from "./CurrentWeather/CurrentWeather";

const Forecast = ({ match }) => {
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const isLogged = useSelector((e) => e.data.isLogged);
  const city = useSelector((e) =>
    e.data.trackedCities.find((el) => el.id === parseInt(match.params.id))
  );

  useEffect(() => {
    if (city) {
      const API_KEY = "ee4d0d4fdfdc4f6ac216c0805fcfe853";
      const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&exclude=minutely,daily,alerts&appid=${API_KEY}&units=metric&lang=pl`;

      setLoading(true);
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }
  }, [city]);

  if (!isLogged) return <Redirect to="/login" />;
  if (city === undefined) return <Redirect to="/404" />;

  return (
    <Container>
      <Nav />
      {isLoading ? (
        <div
          className="rounded p-4 text-light d-flex justify-content-center mx-auto"
          style={{ background: "#40739e", maxWidth: "750px" }}
        >
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : isError ? (
        <div
          className="rounded bg-danger text-light p-2 mx-auto"
          style={{ maxWidth: "750px" }}
        >
          Error...
        </div>
      ) : weatherData ? (
        <>
          <CurrentWeather currentWeather={weatherData.current} city={city} />
          <ForecastChart forecastData={weatherData.hourly} />
        </>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Forecast;
