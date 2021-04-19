import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

import Nav from "../Nav/Nav";
import Select from "./Select/Select";
import SelectedCity from "./SelectedCity/SelectedCity";

const WeatherApp = () => {
  const { isLogged, trackedCities } = useSelector((e) => e.data);

  if (!isLogged) return <Redirect to="/login" />;

  return (
    <Container>
      <Nav />
      <Select />
      <div className="text-light">
        {trackedCities.map((el) => (
          <SelectedCity key={el.id} city={el} />
        ))}
      </div>
    </Container>
  );
};

export default WeatherApp;
