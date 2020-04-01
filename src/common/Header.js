import React, { Component } from "react";
import * as serviceWorker from "../serviceWorker";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <Link to="/home/">
          <img src={process.env.PUBLIC_URL + "/img/Logo.png"} />
        </Link>
      </div>
    );
  }
}

export default Header;

serviceWorker.unregister();
