import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getIllustrations } from "../data/illustrationData";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import CloseIcon from "@material-ui/icons/Close";

const illustrations = getIllustrations();

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

const IllustrationGallery = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [currentIllustrationKey, setCurrentIllustrationKey] = React.useState(
    "mermay"
  );

  const handleOpen = (illustrationKey) => {
    setOpen(true);
    console.log("key: ", illustrationKey);
    setCurrentIllustrationKey(illustrationKey);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showNextIllustration = () => {
    const keys = Object.keys(illustrations);
    const currentIndex = keys.indexOf(currentIllustrationKey);
    let nextIndex = currentIndex + 1;
    if (nextIndex > keys.length - 1) {
      nextIndex = 0;
    }
    const nextKey = keys[nextIndex];
    setCurrentIllustrationKey(nextKey);
  };

  const showPreviousIllustration = () => {
    const keys = Object.keys(illustrations);
    const currentIndex = keys.indexOf(currentIllustrationKey);
    let previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
      previousIndex = keys.length - 1;
    }
    const previousKey = keys[previousIndex];
    setCurrentIllustrationKey(previousKey);
  };

  return (
    <div id="illustration">
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div
            style={modalStyle}
            className={`${classes.paper} d-flex flex-column justify-content-center align-items-center`}
          >
            <div>
              <CloseIcon onClick={handleClose}></CloseIcon>
            </div>
            <div className="row">
              <div>
                <ArrowBackIosOutlinedIcon
                  className="scaledIcon"
                  onClick={showPreviousIllustration}
                />
              </div>
              <img
                className="illustrationImage"
                src={
                  process.env.PUBLIC_URL +
                  illustrations[currentIllustrationKey].src
                }
              />
              <div>
                <ArrowForwardIosOutlinedIcon
                  className="scaledIcon"
                  onClick={showNextIllustration}
                />
              </div>
            </div>
            <p id="simple-modal-description" className="mt-4">
              {illustrations[currentIllustrationKey].description}
            </p>
          </div>
        </Modal>
      </div>

      <div className="container p-3">
        <h1 id="pageTitle" className="row p-2">
          Εικονογράφηση
        </h1>
        <div className="row">
          {Object.keys(illustrations).map((key) => {
            const illustrationKey = key;
            return (
              <div className="col-6 col-md-4 p-2">
                <img
                  onClick={() => handleOpen(illustrationKey)}
                  className="img-fluid w-100"
                  src={
                    process.env.PUBLIC_URL +
                    illustrations[illustrationKey].thumbSrc
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IllustrationGallery;

serviceWorker.unregister();
