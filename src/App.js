import { Router } from "@reach/router";
import React from "react";

import Quiz from "./components/quiz";
import Regions from "./components/regions";

const regionsList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  return (
    <Router primary={false}>
      <Regions list={regionsList} path="/" />
      <Quiz path="quiz/:region" />
    </Router>
  );
};

export default App;
