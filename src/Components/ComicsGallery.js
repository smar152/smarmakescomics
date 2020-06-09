import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getComics } from "../data/comicsData";
import { Link } from "react-router-dom";

const comics = getComics();

const ComicsGallery = (props) => {
  return (
    <div className="container p-3">
      <h1 id="pageTitle">Κόμικς</h1>
      <div className="row">
        {Object.keys(comics).map((key) => {
          const comic = comics[key];
          return (
            <div className="col-12 col-md-4 p-1">
              <Link to={`comics/${key}`}>
                <img
                  className="img-fluid comicCoverInGallery"
                  src={process.env.PUBLIC_URL + comic.coverSrc}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComicsGallery;

serviceWorker.unregister();
