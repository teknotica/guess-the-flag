import { Router } from "@reach/router";
import React, { useState } from "react";

import Quiz from "./components/quiz";
import Regions from "./components/regions";

const regionsList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => {
  const [regionFlags, setRegionFlags] = useState({});

  return (
    <Router primary={false}>
      <Regions list={regionsList} path="/" />
      <Quiz
        path="quiz/:region"
        regionFlags={regionFlags}
        setRegionFlags={setRegionFlags}
      />
    </Router>
  );
};

export default App;
