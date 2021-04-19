import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { Container, Form } from "react-bootstrap";
const Login = () => {
  const isLogged = useSelector((e) => e.data.isLogged);
  const loginError = useSelector((e) => e.data.loginError);
  const dispatch = useDispatch();

  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  if (isLogged) return <Redirect to="/" />;

  const formValidator = () => {
    let error = {};
    const { login, password } = formData;
    if (login.length < 3) error = { ...error, login: "Wymagane min 3 znaki!" };
    if (password.length < 3)
      error = { ...error, password: "Wymagane min 3 znaki!" };
    if (login === "") error = { ...error, login: "Login jest wymagany!" };
    if (password === "") error = { ...error, password: "Hasło jest wymagane!" };

    setError(error);
    return error;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let error = formValidator();

    const { login, password } = error;
    if (!login && !password)
      dispatch({
        type: "LOGIN",
        payload: formData,
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { login, password } = error;
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center vh-100 text-light">
        <div
          className="rounded p-4"
          style={{ background: "#487eb0", width: "100%", maxWidth: "400px" }}
        >
          <Form method="POST">
            <Form.Group>
              <h3 className="center">Logowanie</h3>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="login">Login</Form.Label>
              <Form.Control
                type="text"
                id="login"
                name="login"
                onChange={handleChange}
              />
            </Form.Group>
            {login && (
              <Form.Group>
                <div className="alert alert-danger p-2" role="alert">
                  {login}
                </div>
              </Form.Group>
            )}
            <Form.Group>
              <Form.Label htmlFor="password">Hasło</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            {password && (
              <Form.Group>
                <div className="alert alert-danger p-2" role="alert">
                  {password}
                </div>
              </Form.Group>
            )}
            {loginError && !login && !password && (
              <Form.Group>
                <div className="alert alert-danger p-2" role="alert">
                  Błędny login lub hasło!
                </div>
              </Form.Group>
            )}
            <Form.Group>
              <button
                type="submit"
                onClick={submitHandler}
                className="btn btn-outline-light btn-block"
              >
                Zaloguj się
              </button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
