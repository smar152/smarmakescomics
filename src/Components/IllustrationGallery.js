import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getIllustrations } from "../data/illustrationData";
import Gallery from "./Gallery";

const illustrations = getIllustrations();
const images = Object.keys(illustrations).map((key) => {
  const { thumbSrc, src, title, subtitle, description } = illustrations[key];
  return {
    src: thumbSrc,
    fullSrc: src,
    title,
    subtitle,
    description,
  };
});

const IllustrationGallery = (props) => {
  return (
    <div id="illustration">
      <div className="container p-3">
        <h1 id="pageTitle" className="row p-2">
          Εικονογράφηση
        </h1>
        <Gallery
          images={images}
          imgContainerClasses="col-6 col-md-4 p-2"
          imgClasses="img-fluid w-100 clickable"
        />
      </div>
    </div>
  );
};

export default IllustrationGallery;

serviceWorker.unregister();
