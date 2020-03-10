import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getIllustrations } from "../data/illustrationData";

const illustrations = getIllustrations();

const IllustrationPage = props => {
  const key = props.match.params.onoma;
  const illustration = illustrations[key];
  return <div>{illustration.title}</div>;
};

export default IllustrationPage;

serviceWorker.unregister();
