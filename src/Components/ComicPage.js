import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getComics } from "../data/comicsData";
import { Link } from "react-router-dom";

const comics = getComics();

const ComicPage = props => {
  const key = props.match.params.onoma;
  const comic = comics[key];
  return (
    <>
      <Link to="/comics">Comics Gallery</Link>
      <p>Specific Comic</p>
    </>
  );
};

export default ComicPage;

serviceWorker.unregister();
