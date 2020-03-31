import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getComics } from "../data/comicsData";
import { Link } from "react-router-dom";

const comics = getComics();

const ComicsGallery = props => {
  return (
    <div className="container p-3">
      <h1 id="pageTitle">Κόμικς</h1>
      {Object.keys(comics).map((key, index) => {
        const comic = comics[key];
        return (
          <div className="col mh-25">
            <Link to={`comics/${key}`}>
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + comic.thumbSrc}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ComicsGallery;

serviceWorker.unregister();
