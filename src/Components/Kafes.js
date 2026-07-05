import React from "react";
import * as serviceWorker from "../serviceWorker";

const Kafes = (props) => {
  const responseMap = ['ναι', 'όχι'];
  const response = new Date().getDay() === 4 ? responseMap[0] : responseMap[1];
  return (
    <div id="illustration">
      <div className="container p-3">
        <h1 id="pageTitle" className="row p-2">
          Πάμε για καφέ σήμερα;
        </h1>
        {response}
      </div>
    </div>
  );
};

export default Kafes;

serviceWorker.unregister();