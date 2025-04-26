import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, Quiz, Regions } from "./components";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/quiz/:region">
        <Quiz />
      </Route>
      <Route path="/">
        <Regions list={["Africa", "Americas", "Asia", "Europe", "Oceania"]} />
      </Route>
    </Switch>
  </Router>
);

export default App;
