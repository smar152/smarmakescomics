import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Illustration from "./Components/Illustration";
import Home from "./Components/Home";

function App() {
  return (
    <Router basename="smarmakescomics">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/illustration">
          <Illustration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
