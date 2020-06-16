import React, { Component } from "react";
import * as serviceWorker from "../serviceWorker";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.js";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header container">
        <div className="row">
          <div className="col-12">
            <Link to="/home/">
              <img src={process.env.PUBLIC_URL + "/img/Logo.png"} />
            </Link>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <Navigation />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

serviceWorker.unregister();
