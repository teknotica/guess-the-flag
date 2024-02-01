import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Quiz, Regions } from "./components";

const regionsList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/quiz/:region">
        <Quiz />
      </Route>
      <Route path="/">
        <Regions list={regionsList} />
      </Route>
    </Switch>
  </Router>
);
export default App;
