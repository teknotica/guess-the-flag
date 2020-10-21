import { Router } from "@reach/router";
import React from "react";
import { Fragment } from "react";

import Header from "./components/header";
import Quiz from "./components/quiz";
import Regions from "./components/regions";

const regionsList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  return (
    <Fragment>
      <Header />
      <Router primary={false}>
        <Regions list={regionsList} path="/" />
        <Quiz path="quiz/:region" />
      </Router>
    </Fragment>
  );
};

export default App;
