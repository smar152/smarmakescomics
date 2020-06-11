import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IllustrationGallery from "./Components/IllustrationGallery.js";
import ComicsGallery from "./Components/ComicsGallery.js";
import Home from "./Components/Home";
import Temporary from "./Components/Temporary";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import { getIllustrations } from "./data/illustrationData";
import IllustrationPage from "./Components/IllustrationPage.js";
import ComicPage from "./Components/ComicPage.js";

const illustrations = getIllustrations();

const App = (props) => {
  return (
    <>
      <Router>
        <Header />
        <div className="content container pt-3 pb-3">
          <Switch>
            <Route exact component={Temporary} path="/" />
            <Route exact component={Home} path="/home/" />
            <Route
              exact
              component={IllustrationGallery}
              path="/illustration/"
            />
            <Route
              exact
              component={IllustrationPage}
              path="/illustration/:onoma"
            />
            <Route exact component={ComicsGallery} path="/comics/" />
            <Route exact component={ComicPage} path="/comics/:onoma" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
