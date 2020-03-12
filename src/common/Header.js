import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <img src={process.env.PUBLIC_URL + "/img/Logo.png"} />
      </div>
    );
  }
}

export default Header;
