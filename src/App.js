import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IllustrationGallery from "./Components/IllustrationGallery.js";
import ComicsGallery from "./Components/ComicsGallery.js";
import Home from "./Components/Home";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import AboutPage from "./Components/AboutPage.js";
import ComicPage from "./Components/ComicPage.js";
import Shops from "./Components/Shops.js";
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
    component: Home,
    path: "/",
    layout: MaxHeightLayout,
  },
  {
    component: IllustrationGallery,
    path: "/illustration",
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
  {
    component: Shops,
    path: "/shops",
    layout: MinHeightLayout,
  },
];

const App = (props) => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {routes.map(({ component: Component, path, layout: Layout }) => (
            <Route
              path={path}
              key={path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
