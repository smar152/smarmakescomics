import React, { Component } from "react";
import * as serviceWorker from "../serviceWorker";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = {};

  openMenu() {
    if (document.querySelector(".drawer").classList.contains("active")) {
      document.querySelector(".drawer").classList.remove("active");
      document.querySelector(".button").style.transform = "none";
    } else {
      document.querySelector(".drawer").classList.add("active");
      document.querySelector(".button").style.transform = "rotate(90deg)";
      // document.addEventListener("click", handleClick);
    }
  }

  // handleClick() {
  //   console.log("click!");
  // }

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
        <div className="button d-md-none" onClick={this.openMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          </svg>
        </div>

        <div className="drawer col-5 d-md-none d-flex flex-column">
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
