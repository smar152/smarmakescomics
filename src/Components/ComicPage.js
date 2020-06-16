import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getComics } from "../data/comicsData";
import { Link } from "react-router-dom";

const comics = getComics();

const ComicPage = (props) => {
  const key = props.match.params.onoma;
  const comic = comics[key];
  return (
    <div className="container p-3">
      <div className="row">
        <Link to="/comics">Comics Gallery</Link>
        <h1 id="pageTitle">{comic.title}</h1>
        <p id="pageSubtitle">{comic.subtitle}</p>
      </div>
      <div className="col">
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + comic.coverSrc}
        />
      </div>
      <div className="row pt-3">
        <p id="pageDescription">{comic.description}</p>
      </div>

      <div className="col">
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + comic.page1src}
        />
      </div>

      <div className="col">
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + comic.page2src}
        />
      </div>
      <div className="col">
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + comic.page3src}
        />
      </div>
    </div>
  );
};

export default ComicPage;

serviceWorker.unregister();
