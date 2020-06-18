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
      <Link to="/comics">Comics Gallery</Link>
      <div className="row">
        <h1 id="pageTitle">{comic.title}</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-5">
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + comic.coverSrc}
          />
        </div>
        <div className="col-12 pt-3 col-md-7">
          <div className="row">
            <p id="pageSubtitle">{comic.subtitle}</p>
          </div>
          <div className="row">
            <p id="pageDescription">{comic.description}</p>
          </div>
        </div>
        <div className="row">
          {comic.pages.map((pagesrc) => {
            console.log(pagesrc);
            return (
              <div className="col">
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + pagesrc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComicPage;

serviceWorker.unregister();
