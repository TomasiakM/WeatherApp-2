import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center text-light vh-100">
        <h2>Error 404</h2>
        <h3>Strona nie istnieje</h3>
        <div>
          <Link to="/" className="btn btn-light btn-sm">
            Wróć do aplikacji
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
