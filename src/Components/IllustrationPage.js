import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getIllustrations } from "../data/illustrationData";
import { Link } from "react-router-dom";

const illustrations = getIllustrations();

const IllustrationPage = props => {
  const key = props.match.params.onoma;
  const illustration = illustrations[key];
  return (
    <>
      <div className="row">
        <div className="col-12 col-md">
          <Link to="/illustration">Illustration Gallery</Link>
          <h1 id="pageTitle">{illustration.title}</h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
            <img
              className="img-fluid "
              src={process.env.PUBLIC_URL + illustration.src}
            />
          </div>
          <div className="col-12 col-md-4">
            <p id="pageSubtitle">{illustration.subtitle}</p>
            <p id="pageDescription">{illustration.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IllustrationPage;

serviceWorker.unregister();
