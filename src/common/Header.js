import React, { Component } from "react";
import * as serviceWorker from "../serviceWorker";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.js";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-4 col-lg-6">
              <Link to="/home/">
                <img src={process.env.PUBLIC_URL + "/img/Logo.png"} />
              </Link>
            </div>
            <Navigation />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

serviceWorker.unregister();
