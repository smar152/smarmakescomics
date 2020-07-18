import React from "react";
import * as serviceWorker from "../serviceWorker";
import CoversGallery from "./CoversGallery.js";

const ComicsGallery = (props) => {
  return (
    <div className="container p-3">
      <h1 id="pageTitle">Κόμικς</h1>
      <div className="row">
        <div className="col-12">
          <div className="comic-gallery-container">
            <CoversGallery></CoversGallery>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicsGallery;

serviceWorker.unregister();
