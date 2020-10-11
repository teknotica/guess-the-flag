import { Link, Router } from "@reach/router";
import React, { Fragment, useState } from "react";

import Quiz from "./components/quiz";
import Regions from "./components/regions";

const regionsList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  // Global state for regions
  const [regionFlags, setRegionFlags] = useState({});

  return (
    <Fragment>
      <h1>
        <span role="img" aria-label="world icon">
          🌏
        </span>{" "}
        <Link to="/">Guess the flag</Link>{" "}
        <span role="img" aria-label="flag icon">
          🚩
        </span>
      </h1>
      <Router primary={false}>
        <Regions list={regionsList} path="/" />
        <Quiz
          path="quiz/:region"
          regionFlags={regionFlags}
          setRegionFlags={setRegionFlags}
        />
      </Router>
    </Fragment>
  );
};

export default App;
