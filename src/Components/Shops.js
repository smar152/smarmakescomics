import React, { useEffect, useState } from "react";
import * as serviceWorker from "../serviceWorker";
import { getShops } from "../data/shopsData.js";

const shops = getShops();
console.log(shops);

const Shops = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 id="pageTitle">Πού Θα βρείτε κόμικς</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Αθήνα</h4>
            {Object.keys(shops["athens"]).map((key) => (
              <a href={shops["athens"][key].website}>
                <p>
                  {shops["athens"][key].name}, {shops["athens"][key].area}
                </p>
              </a>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Θεσσσαλονίκη</h4>
            {Object.keys(shops["thessaloniki"]).map((key) => (
              <a href={shops["thessaloniki"][key].website}>
                <p>
                  {shops["thessaloniki"][key].name},{" "}
                  {shops["thessaloniki"][key].area}
                </p>
              </a>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Εκτός Ελλάδας</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shops;

serviceWorker.unregister();
