import * as React from "react";
import { getComics } from "../data/comicsData";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-component";

const comics = getComics();
const margin = 10;
const fullWidth = 600;
const imagesPerRow = 3;

const masonryOptions = {
  transitionDuration: 0,
  fitWidth: true,
  resize: true,
  horizontalOrder: false,
  gutter: margin,
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class CoversGallery extends React.Component {
  render() {
    {
      const childElements = Object.keys(comics).map((key) => {
        const comic = comics[key];
        return (
          <Link to={`comics/${key}`}>
            <div className="image-element-class">
              <img
                src={comic.coverSrc}
                alt="comic cover"
                style={{
                  maxWidth: `${fullWidth / imagesPerRow - margin}px`,
                  marginBottom: `${margin}px`,
                }}
              />
            </div>
          </Link>
        );
      });

      return (
        <div style={{ width: `${fullWidth}px` }}>
          <Masonry
            className={"my-gallery-class"} // default ''
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions} // default {}
          >
            {childElements}
          </Masonry>
        </div>
      );
    }
  }
}

export default CoversGallery;
