import { Router } from "@reach/router";
import React from "react";
import { Fragment } from "react";

import Quiz from "./components/quiz";
import Regions from "./components/regions";

const regionsList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  return (
    <Fragment>
      <Router primary={false}>
        <Regions list={regionsList} path="/" />
        <Quiz path="quiz/:region" />
      </Router>
      <div className="header">
        <span>Powered by </span>
        <a href="https://restcountries.eu/" target="blank">
          REST Countries API
        </a>
        <span> / </span>
        <a href="https://twitter.com/teknotica" target="blank">
          @teknotica
        </a>
      </div>
    </Fragment>
  );
};

export default App;
