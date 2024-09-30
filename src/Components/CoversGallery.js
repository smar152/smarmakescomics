import * as React from "react";
import { getComics } from "../data/comicsData";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-component";

const comics = getComics();
const margin = 5;

const masonryOptions = {
  transitionDuration: 0,
  resize: true,
  horizontalOrder: false,
  gutter: margin,
};
const imagesLoadedOptions = { background: ".my-bg-image-el" };

class CoversGallery extends React.Component {
  state = {
    hidden: true,
  };

  render() {
    {
      const childElements = Object.keys(comics).map((key) => {
        const comic = comics[key];
        return (
          <div className="comicCoverContainer">
            <Link to={`/comics/${key}`}>
              <img
                src={comic.coverSrc}
                alt="comic cover"
                className="comicCover"
                style={{
                  marginBottom: `${margin}px`,
                }}
              />
            </Link>
          </div>
        );
      });

      return (
        <div className="comicGallery">
          <Masonry
            className={this.state.hidden ? "hidden" : ""}
            options={masonryOptions} // default {}
            imagesLoadedOptions={imagesLoadedOptions} // default {}
            onImagesLoaded={() =>
              this.setState({ ...this.state, hidden: false })
            }
          >
            {childElements}
          </Masonry>
        </div>
      );
    }
  }
}

export default CoversGallery;
