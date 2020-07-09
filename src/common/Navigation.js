import React, { useState } from "react";
import * as serviceWorker from "../serviceWorker";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const MenuLinks = () => (
    <>
      <Link to="/comics/" onClick={closeMenu}>
        <div>comics</div>
      </Link>
      <Link to="/illustration/" onClick={closeMenu}>
        <div>illustration</div>
      </Link>
      <Link to="/about/" onClick={closeMenu}>
        <div>about & contact</div>
      </Link>
    </>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <div className="navigation col-md-8 col-lg-6 d-none d-md-flex flex-row align-items-center justify-content-between">
        <MenuLinks />
      </div>

      {/* Phone Navigation */}
      <div
        className="col-8  d-flex flex-row align-items-end justify-content-end d-md-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="button"
          style={{
            transform: isOpen ? "rotate(90deg)" : "none",
          }}
          viewBox="0 0 448 512"
        >
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
      </div>

      <div
        className={`drawer col-5 d-md-none d-flex flex-column ${
          isOpen ? "active" : ""
        }`}
      >
        <MenuLinks />
      </div>
    </>
  );
}

export default Navigation;

serviceWorker.unregister();
