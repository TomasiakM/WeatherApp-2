import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="navbar navbar-dark px-0">
      <div className="container-fluid px-1">
        <Link to="/">
          <h6 className="navbar-brand m-0">WeatherApp</h6>
        </Link>
        <button className="btn btn-light btn-sm" onClick={clickHandler}>
          Wyloguj się
        </button>
      </div>
    </nav>
  );
};

export default Nav;
