import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getIllustrations } from "../data/illustrationData";
import { Link } from "react-router-dom";

const illustrations = getIllustrations();

const IllustrationGallery = (props) => {
  return (
    <div id="illustration">
      <div className="container p-3">
        <h1 id="pageTitle">Εικονογράφηση</h1>
        <div className="row">
          {Object.keys(illustrations).map((key) => {
            const illustration = illustrations[key];
            return (
              <div className="col-6 col-md-4 p-2">
                <Link to={`illustration/${key}`} key={key}>
                  <img
                    className="img-fluid w-100"
                    src={process.env.PUBLIC_URL + illustration.thumbSrc}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IllustrationGallery;

serviceWorker.unregister();
