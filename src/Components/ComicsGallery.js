import React from "react";
import * as serviceWorker from "../serviceWorker";
// import { getComics } from "../data/comicsData";
// import { Link } from "react-router-dom";
import CoversGallery from "./CoversGallery.js";

// const comics = getComics();

const ComicsGallery = (props) => {
  return (
    <div className="container p-3">
      <h1 id="pageTitle">Κόμικς</h1>
      <div className="row">
        <div className="col-12">
          <div className="comic-gallery-container">
            <CoversGallery></CoversGallery>
            {/* //pre-masonry version 
              return (
                <Link to={`comics/${key}`}>
                  <img
                    className="img-fluid comic-gallery-cover"
                    src={process.env.PUBLIC_URL + comic.coverSrc}
                  />
                </Link>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicsGallery;

serviceWorker.unregister();
