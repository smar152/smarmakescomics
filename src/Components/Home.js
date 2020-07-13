import React, { useEffect, useState } from "react";
import PaintingPaths from "./svg/PaintingPaths";
import BookPaths from "./svg/BookPaths";
import SmarPaths from "./svg/SmarPaths";
import "animate.css/animate.min.css";

function Home(props) {
  const [paintingClass, setPaintingClass] = useState("");
  const [bookClass, setBookClass] = useState("");
  const [smarClass, setSmarClass] = useState("");
  const [changeLocation, setChangeLocation] = useState(""); // what should the final location after a click be - nothing for hover
  const [animationRunning, setAnimationRunning] = useState(false);

  const onAnimationEnd = (e) => {
    if (changeLocation) {
      props.history.push(changeLocation);
    }
    setAnimationRunning(false);
  };

  return (
    <div className="row h-100">
      <div className="col h-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 2373.36 1809.02"
          className="h-100 w-100"
        >
          <defs></defs>
          <g
            id="Painting"
            data-name="Layer 3"
            className={paintingClass}
            onClick={(e) => {
              setAnimationRunning(true);
              setChangeLocation("/illustration");
              setPaintingClass("animate__animated animate__pulse");
            }}
            onMouseOver={(e) => {
              if (!animationRunning) {
                setChangeLocation(null);
              }
              setPaintingClass("animate__animated animate__pulse");
            }}
            onAnimationEnd={(e) => {
              setPaintingClass("");
              onAnimationEnd(e);
            }}
          >
            <PaintingPaths />
          </g>
          <g
            id="Book"
            data-name="Layer 4"
            className={bookClass}
            onClick={(e) => {
              setAnimationRunning(true);
              setChangeLocation("/comics");
              setBookClass("animate__animated animate__swing");
            }}
            onMouseOver={(e) => {
              if (!animationRunning) {
                setChangeLocation(null);
              }
              setBookClass("animate__animated animate__swing");
            }}
            onAnimationEnd={(e) => {
              setBookClass("");
              onAnimationEnd(e);
            }}
          >
            <BookPaths />
          </g>
          <g
            id="Smar"
            data-name="Layer 2"
            className={smarClass}
            onClick={(e) => {
              setAnimationRunning(true);
              setChangeLocation("/about");
              setSmarClass("animate__animated animate__headShake");
            }}
            onMouseOver={(e) => {
              if (!animationRunning) {
                setChangeLocation(null);
              }
              setSmarClass("animate__animated animate__headShake");
            }}
            onAnimationEnd={(e) => {
              setSmarClass("");
              onAnimationEnd(e);
            }}
          >
            <SmarPaths />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Home;
