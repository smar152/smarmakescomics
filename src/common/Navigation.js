import React, { Component } from "react";
import * as serviceWorker from "../serviceWorker";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <div className="navigation container">
        <div className="col-12">
          {/* <Link to="/comics/">
          <div>comics</div>
        </Link>
        <Link to="/illustration/">
          <div>illustration</div>
        </Link>
        <Link to="/about/">
          <div>about</div>
        </Link>
        <Link to="/contact/">
          <div>contact</div>
        </Link> */}

          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/comics/">comics</Nav.Link>
                <Nav.Link href="/illustration/">illustration</Nav.Link>
                <Nav.Link href="/about/">about</Nav.Link>
                <Nav.Link href="/contact/">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Navigation;

serviceWorker.unregister();
