import React, { useEffect, useState } from "react";
import * as serviceWorker from "../serviceWorker";
import { getComics } from "../data/comicsData";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const comics = getComics();
const keys = Object.keys(comics);

const ComicPage = (props) => {
  const { onoma } = props.match.params;
  const [key, setKey] = useState(onoma);
  const comic = comics[key];

  const images = [comic.coverSrc, ...Object(comic.pages)].map((src, index) => ({
    src: src,
    description:
      index === 0 ? comic.description : comic.pages[index - 1].description,
    subtitle: index === 0 ? comic.subtitle : comic.pages[index - 1].subtitle,
  }));

  useEffect(
    (e) => {
      setKey(onoma);
    },
    [onoma]
  );

  const onPreviousComic = () => {
    const currentIndex = keys.indexOf(key);
    let previousIndex = currentIndex - 1;

    if (previousIndex < 0) {
      previousIndex = keys.length - 1;
    }
    // setKey(keys[previousIndex]);
    props.history.push(`/comics/${keys[previousIndex]}`);
  };
  const onNextComic = () => {
    const currentIndex = keys.indexOf(key);
    let nextIndex = currentIndex + 1;

    if (nextIndex >= keys.length) {
      nextIndex = 0;
    }
    props.history.push(`/comics/${keys[nextIndex]}`);
    // setKey(keys[nextIndex]);
  };

  return (
    <>
      <div className="container p-3">
        <div className="row">
          <a>
            <ArrowBackIosOutlinedIcon onClick={onPreviousComic} />
          </a>
          <Link to="/comics">Comics Gallery</Link>
          <a>
            <ArrowForwardIosOutlinedIcon onClick={onNextComic} />
          </a>
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
