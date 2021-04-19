import React, { useEffect, useState } from "react";
import HumidityIcon from "./HumidityIcon";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const SelectedCity = ({ city }) => {
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const API_KEY = "ee4d0d4fdfdc4f6ac216c0805fcfe853";
    const URL = `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${API_KEY}&units=metric`;

    const fetchindFunction = () => {
      setLoading(true);
      setError(false);
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    };
    fetchindFunction();

    const fetchDataInterval = setInterval(() => {
      fetchindFunction();
    }, 1000 * 60);

    return () => clearInterval(fetchDataInterval);
  }, [city.id]);

  const deleteHandler = () => {
    dispatch({
      type: "DELETE_CITY",
      payload: city.id,
    });
  };

  return (
    <div
      className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between
flex-column flex-sm-row my-2 p-2 rounded"
      style={{ background: "#40739e" }}
    >
      <div className="d-flex">
        <h5 className="m-0">{city.name}</h5>
      </div>
      <div className="d-flex flex-sm-row flex-column">
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        {isError && (
          <div className="rounded bg-danger text-light py-1 px-2">Error...</div>
        )}

        {!isLoading && !isError && (
          <div className="d-flex align-items-center mt-2 mt-sm-0">
            <div className="d-flex align-items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
                style={{ marginTop: "-10px", marginBottom: "-10px" }}
              />
              {Math.round(weatherData.main.temp * 10) / 10}°C
            </div>
            <div className="d-flex align-items-center ml-3">
              <HumidityIcon className="mr-2" />
              {weatherData.main.humidity}%
            </div>
          </div>
        )}

        <div className="d-flex justify-content-center">
          <Link
            to={`/weather/${city.id}`}
            className="btn btn-light btn-sm ml-sm-2 ml-0 mt-sm-0 mt-2"
          >
            Szczegóły
          </Link>
          <button
            className="btn btn-danger btn-sm ml-2 mt-sm-0 mt-2"
            onClick={deleteHandler}
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedCity;
