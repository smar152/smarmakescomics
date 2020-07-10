import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IllustrationGallery from "./Components/IllustrationGallery.js";
import ComicsGallery from "./Components/ComicsGallery.js";
import Home from "./Components/Home";
import Temporary from "./Components/Temporary";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import AboutPage from "./Components/AboutPage.js";
import IllustrationPage from "./Components/IllustrationPage.js";
import ComicPage from "./Components/ComicPage.js";
import "bootstrap/dist/css/bootstrap.min.css";

const MinHeightLayout = ({ children }) => (
  <div className="content minHeightLayout">
    <div className="container h-100 pt-3 pb-3">{children}</div>
  </div>
);

const MaxHeightLayout = ({ children }) => (
  <div className="content maxHeightLayout">
    <div className="container h-100 pt-3 pb-3">{children}</div>
  </div>
);

const routes = [
  {
    component: Temporary,
    path: "/",
    layout: MinHeightLayout,
  },
  {
    component: Home,
    path: "/home",
    layout: MaxHeightLayout,
  },
  {
    component: IllustrationGallery,
    path: "/illustration",
    layout: MinHeightLayout,
  },
  {
    component: IllustrationPage,
    path: "/illustration/:onoma",
    layout: MinHeightLayout,
  },
  {
    component: ComicsGallery,
    path: "/comics",
    layout: MinHeightLayout,
  },
  {
    component: ComicPage,
    path: "/comics/:onoma",
    layout: MinHeightLayout,
  },
  {
    component: AboutPage,
    path: "/about",
    layout: MinHeightLayout,
  },
];

const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const App = (props) => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {routes.map(({ component, path, layout }) => (
            <RouteWrapper
              exact
              component={component}
              path={path}
              layout={layout}
            />
          ))}
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
