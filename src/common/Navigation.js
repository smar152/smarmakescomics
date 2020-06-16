import React, { Component } from "react";
import * as serviceWorker from "../serviceWorker";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="col-5 d-none d-md-flex flex-row align-items-center justify-content-between">
          <Link to="/comics/">
            <div>comics</div>
          </Link>
          <Link to="/illustration/">
            <div>illustration</div>
          </Link>
          <Link to="/about/">
            <div>about & contact</div>
          </Link>
        </div>
        <div className="col-5 d-md-none d-flex flex-column">
          <Link to="/comics/">
            <div className="row">comics</div>
          </Link>
          <Link to="/illustration/">
            <div className="row">illustration</div>
          </Link>
          <Link to="/about/">
            <div className="row">about & contact</div>
          </Link>
        </div>
      </>
    );
  }
}

export default Navigation;

serviceWorker.unregister();
