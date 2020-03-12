import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IllustrationGallery from "./Components/IllustrationGallery.js";
import Home from "./Components/Home";
import Temporary from "./Components/Temporary";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import { getIllustrations } from "./data/illustrationData";
import IllustrationPage from "./Components/IllustrationPage.js";

const illustrations = getIllustrations();

function App() {
  return (
    <>
      <Header />
      <Router basename="smarmakescomics">
        <Switch>
          <Route exact component={Temporary} path="/" />
          <Route exact component={Home} path="/home/" />
          <Route exact component={IllustrationGallery} path="/illustration/" />
          <Route
            exact
            component={IllustrationPage}
            path="/illustration/:onoma"
          />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
