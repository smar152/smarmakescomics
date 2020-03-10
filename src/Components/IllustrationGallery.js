import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getIllustrations } from "../data/illustrationData";
import { Route, Link } from "react-router-dom";
import IllustrationPage from "./IllustrationPage.js";

const illustrations = getIllustrations();

const IllustrationGallery = props => {
  return (
    <div id="illustration">
      <p>Εικονογράφηση</p>
      <table className="table">
        <tbody>
          {Object.keys(illustrations).map((key, index) => {
            const illustration = illustrations[key];
            return (
              <tr key={index}>
                <td>
                  <img src={process.env.PUBLIC_URL + illustration.src} />
                </td>
                <td>
                  <Link to={`/illustration/${key}`}>{illustration.title}</Link>
                </td>
                <td>{illustration.description}</td>
                <td>{illustration.node}</td>
              </tr>
            );
          })}
          ;
        </tbody>
      </table>
    </div>
  );
};

export default IllustrationGallery;

serviceWorker.unregister();
