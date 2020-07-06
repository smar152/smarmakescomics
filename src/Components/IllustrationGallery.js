import React from "react";
import * as serviceWorker from "../serviceWorker";
import { getIllustrations } from "../data/illustrationData";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const illustrations = getIllustrations();

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 700,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const IllustrationGallery = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [currentIllustration, setCurrentIllustration] = React.useState(
    illustrations.mermay
  );

  const handleOpen = (illustration) => {
    setOpen(true);
    setCurrentIllustration(illustration);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img
        className="img-fluid w-100"
        src={process.env.PUBLIC_URL + currentIllustration.src}
      />
      <p id="simple-modal-description">{currentIllustration.description}</p>
    </div>
  );

  return (
    <div id="illustration">
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>

      <div className="container p-3">
        <h1 id="pageTitle" className="row p-2">
          Εικονογράφηση
        </h1>
        <div className="row">
          {Object.keys(illustrations).map((key) => {
            const illustration = illustrations[key];
            return (
              <div className="col-6 col-md-4 p-2">
                {/* <Link to={`/illustration/${key}`} key={key}> */}
                <img
                  onClick={() => handleOpen(illustration)}
                  className="img-fluid w-100"
                  src={process.env.PUBLIC_URL + illustration.thumbSrc}
                />
                {/* </Link> */}
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
