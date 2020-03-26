import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getIllustrations } from "../data/illustrationData";
import { Route, Link } from "react-router-dom";
import IllustrationPage from "./IllustrationPage.js";

const illustrations = getIllustrations();

const IllustrationGallery = props => {
  return (
    <div id="illustration">
      <div className="container p-3">
        <h1 id="pageTitle">Εικονογράφηση</h1>
        {Object.keys(illustrations).map((key, index) => {
          const illustration = illustrations[key];
          return (
            <Link to={`illustration/${key}`}>
              <img
                className="col-6 col-md-4 p-2"
                src={process.env.PUBLIC_URL + illustration.thumbSrc}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default IllustrationGallery;

serviceWorker.unregister();
