import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaintingPaths from "./svg/PaintingPaths";
import BookPaths from "./svg/BookPaths";
import SmarPaths from "./svg/SmarPaths";
import "animate.css/animate.min.css";

function Home(props) {
  const [paintingClass, setPaintingClass] = useState("");
  const [bookClass, setBookClass] = useState("");
  const [smarClass, setSmarClass] = useState("");
  return (
    <div className="row  h-100">
      <div className="col  h-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 2373.36 1809.02"
          className="h-100 w-100"
        >
          <defs></defs>
          <title>homeSmar</title>
          <g
            id="Painting"
            data-name="Layer 3"
            className={paintingClass}
            onMouseEnter={() =>
              setPaintingClass("animate__animated animate__pulse")
            }
            onAnimationEnd={() => setPaintingClass("")}
          >
            <PaintingPaths />
          </g>
          <g
            id="Book"
            data-name="Layer 4"
            className={bookClass}
            onMouseEnter={() =>
              setBookClass("animate__animated animate__swing")
            }
            onAnimationEnd={() => setBookClass("")}
          >
            <BookPaths />
          </g>
          <g
            id="Smar"
            data-name="Layer 2"
            className={smarClass}
            onMouseEnter={() =>
              setSmarClass("animate__animated animate__headShake")
            }
            onAnimationEnd={() => setSmarClass("")}
          >
            <SmarPaths />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Home;
