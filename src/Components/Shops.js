import React from "react";
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
        {Object.keys(shops).map((placeKey) => {
          const place = shops[placeKey];
          return (
            <div className="row" key={placeKey}>
              <div className="col">
                <h4>{place.label}</h4>
                {Object.keys(place.shops).map((shopKey) => {
                  const shop = place.shops[shopKey];
                  return (
                    <div className="pb-1">
                      <a
                        href={shop.website}
                        key={shopKey}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {shop.name}, {shop.area}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shops;

serviceWorker.unregister();
