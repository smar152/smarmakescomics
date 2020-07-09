import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getComics } from "../data/comicsData";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import CloseIcon from "@material-ui/icons/Close";

const comics = getComics();

const ComicPage = (props) => {
  const key = props.match.params.onoma;
  const comic = comics[key];

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      outline: "none",
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      // width: 700,
      // height: "90vh",
      backgroundColor: theme.palette.background.paper,
      // border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  let [currentIndex, setCurrentIndex] = React.useState(0);
  let keys = Object(comic.pages);
  keys = [comic.coverSrc, ...keys];

  const handleOpen = (comicSrc) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showNextComicPage = () => {
    let nextIndex = currentIndex + 1;

    if (nextIndex >= keys.length) {
      nextIndex = 0;
    }

    setCurrentIndex(nextIndex);
  };

  const showPreviousIllustration = () => {
    let previousIndex = currentIndex - 1;

    if (previousIndex < 0) {
      previousIndex = keys.length - 1;
    }

    setCurrentIndex(previousIndex);
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div
            style={modalStyle}
            className={`${classes.paper} smarModal d-flex flex-column justify-content-center align-items-center`}
          >
            <div className="d-flex flex-row align-items-center justify-content-end w-100">
              <CloseIcon onClick={handleClose}></CloseIcon>
            </div>
            <div className="row d-flex flex-row align-items-center justify-content-between w-100">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <ArrowBackIosOutlinedIcon
                  className="scaledIcon"
                  onClick={showPreviousIllustration}
                />
              </div>
              <img
                className="illustrationImage"
                src={process.env.PUBLIC_URL + keys[currentIndex]}
              />
              <div className="d-flex flex-column align-items-center justify-content-center">
                <ArrowForwardIosOutlinedIcon
                  className="scaledIcon"
                  onClick={showNextComicPage}
                />
              </div>
            </div>
            <p id="simple-modal-description" className="mt-4">
              {`Page ${currentIndex} out of ${keys.length - 1}`}
            </p>
          </div>
        </Modal>
      </div>

      <div className="container p-3">
        <div className="row">
          <Link to="/comics">Comics Gallery</Link>
        </div>
        <div className="row">
          <h1 id="pageTitle">{comic.title}</h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-5">
            <img
              onClick={() => {
                handleOpen(process.env.PUBLIC_URL + comic.coverSrc);
              }}
              className="img-fluid comicPage"
              src={process.env.PUBLIC_URL + comic.coverSrc}
            />
          </div>
          <div className="col-12 pt-3 col-md-7">
            <div className="row">
              <p id="pageSubtitle">{comic.subtitle}</p>
            </div>
            <div className="row">
              <p id="pageDescription">{comic.description}</p>
            </div>
          </div>
          <div className="row">
            {comic.pages.map((pagesrc) => {
              return (
                <div className="col">
                  <img
                    onClick={() => handleOpen(process.env.PUBLIC_URL + pagesrc)}
                    className="img-fluid comicPage"
                    src={process.env.PUBLIC_URL + pagesrc}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComicPage;

serviceWorker.unregister();
