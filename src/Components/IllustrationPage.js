import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getIllustrations } from "../data/illustrationData";
import { Link } from "react-router-dom";

const illustrations = getIllustrations();

const IllustrationPage = props => {
  const key = props.match.params.onoma;
  const illustration = illustrations[key];
  return (
    <div id="illustrationDetails">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-3 order-first order-lg-2">
            <Link to="/illustration">Illustration Gallery</Link>
            <h1 id="pageTitle">{illustration.title}</h1>
            <p id="pageSubtitle">{illustration.subtitle}</p>
          </div>
          <img
            className="img-fluid col-xs-12 col-lg-9 order-lg-1"
            src={process.env.PUBLIC_URL + illustration.src}
          />
          <p className="col-xs-12 col-lg-3 order-lg-2" id="pageDescription">
            {illustration.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IllustrationPage;

serviceWorker.unregister();
