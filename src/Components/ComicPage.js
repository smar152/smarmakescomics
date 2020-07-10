import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getComics } from "../data/comicsData";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

const comics = getComics();

const ComicPage = (props) => {
  const key = props.match.params.onoma;
  const comic = comics[key];

  const images = [comic.coverSrc, ...Object(comic.pages)].map((src, index) => ({
    src: src,
    description:
      index === 0 ? comic.description : comic.pages[index - 1].description,
    subtitle: index === 0 ? comic.subtitle : comic.pages[index - 1].subtitle,
  }));

  return (
    <>
      <div className="container p-3">
        <div className="row">
          <Link to="/comics">Comics Gallery</Link>
        </div>
        <div className="row">
          <h1 id="pageTitle">{comic.title}</h1>
        </div>
        <Gallery images={images} hasCover={true} />
      </div>
    </>
  );
};

export default ComicPage;

serviceWorker.unregister();
