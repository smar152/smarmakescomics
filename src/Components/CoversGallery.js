import * as React from "react";
import { getComics } from "../data/comicsData";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-component";

const comics = getComics();
const masonryOptions = {
  transitionDuration: 0,
  columnWidth: ".grid-sizer",
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
              <img src={comic.coverSrc} alt="comic cover" />
            </div>
          </Link>
        );
      });

      return (
        <Masonry
          className={"my-gallery-class"} // default ''
          elementType={"div"} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {childElements}
        </Masonry>
      );
    }
  }
}

export default CoversGallery;
