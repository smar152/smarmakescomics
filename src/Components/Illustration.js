import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import * as serviceWorker from "../serviceWorker";

const Illustration = props => (
  <div id="illustration">
    <Header />
    <p>Hey</p>
    <Footer />
  </div>
);

export default Illustration;

serviceWorker.unregister();
