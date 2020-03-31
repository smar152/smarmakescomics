import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/illustration">Illustration Gallery</Link>
        </li>
        <li>
          <Link to="/comics">Comics Gallery</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
