import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";

function Home(props) {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <Link to="/illustration">Illustration Gallery</Link>
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default Home;
