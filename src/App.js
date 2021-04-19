import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import WeatherApp from "./Components/WeatherApp/WeatherApp";
import Login from "./Components/Login/Login";
import WeatherDetails from "./Components/WeatherDetails/WeatherDetails";
import NotFound from "./Components/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WeatherApp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/weather/:id" component={WeatherDetails} />
        <Route exact path="/404" component={NotFound} />
        <Route path="/" render={() => <Redirect to="/404" />} />
      </Switch>
    </div>
  );
};

export default App;
